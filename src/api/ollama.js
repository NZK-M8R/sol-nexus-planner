// ── Ollama Local LLM Provider ─────────────────────────────────────────────
// Wraps Ollama's /api/chat endpoint with the same interface as claude.js,
// so ChatPanel and StoryBook can use either provider transparently.
// Streaming + tool calls use the native Ollama API (NOT the OpenAI-compat
// endpoint, which doesn't support simultaneous streaming + tools).

const OLLAMA_BASE = 'http://localhost:11434'

export const MODEL_KEY = 'sol-nexus::ollama-model'
export const getOllamaModel = () => localStorage.getItem(MODEL_KEY) ?? 'qwen3.6:27b'
export const setOllamaModel = (m) => localStorage.setItem(MODEL_KEY, m)

// Check if Ollama is reachable (2 s timeout)
export async function isOllamaRunning() {
  try {
    const r = await fetch(`${OLLAMA_BASE}/api/tags`, {
      signal: AbortSignal.timeout(2000),
    })
    return r.ok
  } catch {
    return false
  }
}

// List models installed in Ollama
export async function listOllamaModels() {
  try {
    const r = await fetch(`${OLLAMA_BASE}/api/tags`)
    if (!r.ok) return []
    const data = await r.json()
    return (data.models ?? []).map(m => m.name)
  } catch {
    return []
  }
}

// ── Format converters ────────────────────────────────────────────────────────

// Anthropic tool defs → Ollama/OpenAI tool defs
function toOllamaTools(tools) {
  return tools.map(t => ({
    type: 'function',
    function: {
      name: t.name,
      description: t.description ?? '',
      parameters: t.input_schema ?? { type: 'object', properties: {} },
    },
  }))
}

// Anthropic-format message history → Ollama message array
// Anthropic uses:  { role:'user', content:[{type:'tool_result', tool_use_id, content}] }
// Ollama uses:     { role:'tool', content:'result string' }
// Anthropic uses:  { role:'assistant', content:[{type:'text',...},{type:'tool_use', id, name, input}] }
// Ollama uses:     { role:'assistant', content:'text', tool_calls:[{function:{name, arguments}}] }
function toOllamaMessages(systemPrompt, messages) {
  const out = [{ role: 'system', content: systemPrompt }]

  for (const m of messages) {
    if (!Array.isArray(m.content)) {
      // Plain string content — pass through
      out.push({ role: m.role, content: m.content ?? '' })
      continue
    }

    const hasToolResult = m.content.some(b => b.type === 'tool_result')
    const hasToolUse    = m.content.some(b => b.type === 'tool_use')

    if (m.role === 'user' && hasToolResult) {
      // Each tool_result becomes a separate role:'tool' message
      for (const block of m.content) {
        if (block.type !== 'tool_result') continue
        const content = typeof block.content === 'string'
          ? block.content
          : JSON.stringify(block.content)
        out.push({ role: 'tool', content })
      }
    } else if (m.role === 'assistant' && hasToolUse) {
      const textParts = m.content.filter(b => b.type === 'text').map(b => b.text).join('')
      const toolCalls = m.content
        .filter(b => b.type === 'tool_use')
        .map(b => ({
          function: {
            name: b.name,
            arguments: typeof b.input === 'string' ? b.input : JSON.stringify(b.input),
          },
        }))
      out.push({ role: 'assistant', content: textParts, tool_calls: toolCalls })
    } else {
      const text = m.content.filter(b => b.type === 'text').map(b => b.text).join('')
      out.push({ role: m.role, content: text })
    }
  }

  return out
}

// ── Streaming agent call ─────────────────────────────────────────────────────
// Same signature as sendAgentStream in claude.js — callers need no changes.
let _tcIdCounter = 0

export async function sendAgentStream(messages, systemPrompt, onChunk, onToolStart, tools = [], signal = null) {
  const ollamaMessages = toOllamaMessages(systemPrompt, messages)
  const ollamaTools    = tools.length ? toOllamaTools(tools) : undefined
  const model          = getOllamaModel()

  const response = await fetch(`${OLLAMA_BASE}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      model,
      messages: ollamaMessages,
      ...(ollamaTools ? { tools: ollamaTools } : {}),
      stream: true,
      think: false,      // Disable Qwen3's chain-of-thought — biggest speed gain
      options: {
        num_ctx: 16384,  // 16K — M5 has 25 GiB unified memory, comfortably handles this
        temperature: 0.7,
        num_predict: 2048, // Soft cap on response length; prevents runaway generation
        repeat_penalty: 1.1,
      },
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(`Ollama error ${response.status}: ${text || 'check that Ollama is running'}`)
  }

  const reader  = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  let accText = ''
  const accToolCalls = []
  let stopReason = 'end_turn'

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed) continue
      try {
        const chunk = JSON.parse(trimmed)

        // Text delta
        if (chunk.message?.content) {
          accText += chunk.message.content
          onChunk?.(chunk.message.content)
        }

        // Tool calls (usually arrive as a complete block, not streamed)
        if (chunk.message?.tool_calls?.length) {
          for (const tc of chunk.message.tool_calls) {
            const name  = tc.function?.name ?? ''
            const rawArgs = tc.function?.arguments
            const input = typeof rawArgs === 'string'
              ? (() => { try { return JSON.parse(rawArgs) } catch { return {} } })()
              : (rawArgs ?? {})
            onToolStart?.(name)
            accToolCalls.push({ id: `otc-${++_tcIdCounter}`, name, input })
          }
          stopReason = 'tool_use'
        }

        if (chunk.done) {
          const dr = chunk.done_reason
          if (dr === 'tool_calls' || accToolCalls.length > 0) stopReason = 'tool_use'
          else if (dr === 'stop' || dr === 'end_turn') stopReason = 'end_turn'
        }
      } catch { /* skip malformed JSON lines */ }
    }
  }

  // Return in Anthropic format so callers (ChatPanel, StoryBook) need no changes
  const assistantContent = []
  if (accText) assistantContent.push({ type: 'text', text: accText })
  for (const tc of accToolCalls) {
    assistantContent.push({ type: 'tool_use', id: tc.id, name: tc.name, input: tc.input })
  }

  const toolCalls = assistantContent.filter(b => b.type === 'tool_use')
  return { assistantContent, toolCalls, stopReason }
}
