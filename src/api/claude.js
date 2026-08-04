import {
  sendAgentStream as ollamaSend,
  isOllamaRunning,
} from './ollama'

const API_KEY = import.meta.env.VITE_CLAUDE_API_KEY

// ── Provider config ──────────────────────────────────────────────────────────
export const PROVIDER_KEY = 'sol-nexus::llm-provider'
export const getProvider   = () => localStorage.getItem(PROVIDER_KEY) ?? 'anthropic'
export const setProvider   = (p) => localStorage.setItem(PROVIDER_KEY, p)

export const isApiConfigured = () => {
  if (getProvider() === 'ollama') return true   // Ollama status checked at runtime
  return Boolean(API_KEY && !API_KEY.includes('your-key-here'))
}

// Re-export for convenience
export { isOllamaRunning }

const BASE_HEADERS = {
  'Content-Type': 'application/json',
  'x-api-key': API_KEY,
  'anthropic-version': '2023-06-01',
  'anthropic-beta': 'prompt-caching-2024-07-31',
  'anthropic-dangerous-direct-browser-access': 'true',
}

// ── Tool definitions ───────────────────────────────────────────────────────
// These give Claude the ability to directly update the app's data.
export const AGENT_TOOLS = [
  {
    name: 'create_character',
    description: 'Create a new character in the Sol-Nexus planner. Use this when the user asks to add a character, or when a discussion makes clear a new character should exist in the app.',
    input_schema: {
      type: 'object',
      properties: {
        name:        { type: 'string', description: 'Full character name' },
        role:        { type: 'string', description: 'Title or function e.g. "Primal Elder · Energy-Dark"' },
        epithet:     { type: 'string', description: 'Epithet or nickname e.g. "The Unyielding"' },
        coreType:    { type: 'string', description: 'Mana core e.g. "Energy-Dark; Chaotic-Light"' },
        status:      { type: 'string', enum: ['active','deceased','unknown','immortal','sealed','survived-into-exile'] },
        house:       { type: 'string', description: 'House/clan ID (lowercase, no spaces) e.g. "vane"' },
        location:    { type: 'string' },
        importance:  { type: 'number', description: '1–5 (5 = most important)' },
        description: { type: 'string', description: 'Background, abilities, and narrative role — at least 2 sentences' },
      },
      required: ['name', 'description'],
    },
  },
  {
    name: 'update_character',
    description: 'Update an existing character\'s data. Use when the user changes a character\'s status, adds detail, or corrects information.',
    input_schema: {
      type: 'object',
      properties: {
        character_id: { type: 'string', description: 'The character\'s ID (snake_case name as stored in the app)' },
        updates: {
          type: 'object',
          description: 'Only include fields that should change',
          properties: {
            name:        { type: 'string' },
            role:        { type: 'string' },
            epithet:     { type: 'string' },
            coreType:    { type: 'string' },
            status:      { type: 'string' },
            house:       { type: 'string' },
            location:    { type: 'string' },
            description: { type: 'string' },
            notes:       { type: 'string' },
          },
        },
      },
      required: ['character_id', 'updates'],
    },
  },
  {
    name: 'log_lore_decision',
    description: 'Record a lore decision, world-building choice, or story change in the app\'s action log. Use this whenever a meaningful story decision is made in conversation.',
    input_schema: {
      type: 'object',
      properties: {
        title:       { type: 'string', description: 'Short title for this decision (max 60 chars)' },
        description: { type: 'string', description: 'What was decided, why, and what it affects' },
        category:    { type: 'string', enum: ['lore','character','power-system','world','plot','retcon'] },
      },
      required: ['title', 'description', 'category'],
    },
  },
]

// ── Streaming agent (text + tool use) ─────────────────────────────────────
// Routes to Anthropic or Ollama based on the stored provider setting.
// Returns { assistantContent, toolCalls, stopReason } — identical for both.
export async function sendAgentStream(messages, systemPrompt, onChunk, onToolStart, tools = AGENT_TOOLS, signal = null) {
  if (getProvider() === 'ollama') {
    return ollamaSend(messages, systemPrompt, onChunk, onToolStart, tools, signal)
  }
  if (!isApiConfigured()) throw new Error('Claude API key not configured.')

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: BASE_HEADERS,
    signal,
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      stream: true,
      system: [{ type: 'text', text: systemPrompt, cache_control: { type: 'ephemeral' } }],
      tools,
      messages,
    }),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error?.message || `API error ${response.status}`)
  }

  const reader  = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  // Track content blocks by index
  const blocks = {}
  let stopReason = 'end_turn'

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue
      const data = line.slice(6).trim()
      if (data === '[DONE]') continue

      try {
        const event = JSON.parse(data)

        if (event.type === 'content_block_start') {
          const { index, content_block: cb } = event
          blocks[index] = { type: cb.type, text: '', id: cb.id, name: cb.name, inputJson: '' }
          if (cb.type === 'tool_use' && onToolStart) onToolStart(cb.name)
        }

        if (event.type === 'content_block_delta') {
          const block = blocks[event.index]
          if (!block) continue
          if (event.delta.type === 'text_delta') {
            block.text += event.delta.text
            onChunk(event.delta.text)
          } else if (event.delta.type === 'input_json_delta') {
            block.inputJson += event.delta.partial_json
          }
        }

        if (event.type === 'message_delta') {
          stopReason = event.delta.stop_reason ?? 'end_turn'
        }
      } catch { /* ignore malformed SSE */ }
    }
  }

  // Build structured content array for next API turn
  const assistantContent = Object.values(blocks).map(b => {
    if (b.type === 'text') return { type: 'text', text: b.text }
    if (b.type === 'tool_use') {
      let input = {}
      try { input = JSON.parse(b.inputJson) } catch {}
      return { type: 'tool_use', id: b.id, name: b.name, input }
    }
    return null
  }).filter(Boolean)

  const toolCalls = assistantContent.filter(b => b.type === 'tool_use')
  return { assistantContent, toolCalls, stopReason }
}

// ── System prompt ──────────────────────────────────────────────────────────
export function buildSystemPrompt(characters, relationships, timelineEras, actionLog = [], weapons = [], beasts = []) {
  const charList = characters
    .map(c => `- **${c.name}** [ID: ${c.id}] ${c.house ? `House: ${c.house}` : ''} ${c.role ? `· ${c.role}` : ''}${c.coreType ? ` | Core: ${c.coreType}` : ''} | Status: ${c.status ?? 'unknown'}\n  ${(c.description ?? '').slice(0, 200)}`)
    .join('\n')

  const relList = relationships.map(r => {
    const src = characters.find(c => c.id === r.source)?.name ?? r.source
    const tgt = characters.find(c => c.id === r.target)?.name ?? r.target
    return `- ${src} → ${r.type.replace('_', ' ')} → ${tgt}${r.secret ? ' [SECRET]' : ''}${r.note ? ` (${r.note})` : ''}`
  }).join('\n')

  const eventList = timelineEras
    .flatMap(era => era.events.map(e => `[${era.name} / ${e.year}] ${e.title}: ${e.description}`))
    .join('\n')

  const recentLog = actionLog.slice(-20).map(a =>
    `[${new Date(a.timestamp).toLocaleDateString()}] ${a.type}: ${a.title}`
  ).join('\n')

  const weaponsSummary = weapons.length ? weapons.map(w => {
    const seat = w.seat ? `Seat ${w.seat} · ` : ''
    const holder = w.currentHolder ?? 'Unknown holder'
    const sealed = w.designation?.match(/Sealed Within: ([^·\n]+)/)?.[1]?.trim() ?? ''
    const sealedStr = sealed ? ` | Sealed: ${sealed}` : ''
    const abilities = (w.aspectForms ?? []).map(a => a.name).join(' / ')
    return `- **${w.name}** [${w.category}] ${seat}Holder: ${holder}${sealedStr}\n  ${(w.description ?? '').slice(0, 120)}\n  Abilities: ${abilities || 'see description'}`
  }).join('\n') : ''

  const beastsSummary = beasts.length ? beasts.map(b => {
    const holder = b.currentHolder ?? 'Unknown'
    const abilities = (b.abilities ?? []).map(a => a.name ?? a).join(' / ')
    return `- **${b.name}** | Holder: ${holder} | ${(b.description ?? '').slice(0, 100)}\n  Abilities: ${abilities || 'none listed'}`
  }).join('\n') : ''

  return `You are the creative brain and agent of the Sol-Nexus story planner. You have two roles:

## Role 1 — Story Co-Writer
Help the creator plan, develop, and refine the Sol-Nexus universe. Analyse ripple effects of story decisions, suggest plot developments, flag lore conflicts, write scenes and dialogue on request.

## Role 2 — App Agent
You have direct tools to update the app's data. When a character is created or changed in conversation, use the tools to actually save it. When a lore decision is made, log it. Always act on changes — don't just describe them.

## Tool Use Rules
- When the user asks to create a character → use create_character immediately
- When details about an existing character change → use update_character
- When a meaningful story decision is made → use log_lore_decision
- After using a tool, briefly confirm what you did in plain language
- Character IDs are snake_case versions of the name (e.g. "Cycla More" → "cycla_more")

## Response Style
- Grounded, epic tone — Sol-Nexus is serious high fantasy
- Be specific: use character names, house names, element types, timestamps
- When proposing changes, note downstream effects on other characters/factions

## Sol-Nexus World Rules
- Mana = Aura (body/physical) + Force (soul/mental), granted by 15 Pillars
- Element tiers: Fundamental (Fire/Earth/Ice/Water/Air, 70%) · Refined (Lightning/Nature/Energy, 29%) · Sovereign (Light/Darkness/Aura/Force/Space/Life-Death/Time, 1%)
- Core alignment: element + State (Harmonic/Chaotic) + Alignment (Light/Dark)
- Six races: Orian (base) · Demons/Alma (West, Aura) · Seraphim/Spirits (East, Force) · Ascen · Primal · Human
- Primals → Limbo · Vethals → 50/50 Ascen-Primal fusion beings · Vethara → defector Primals
- Vraka Arke (West/Eura/Ferali) + Selis Arke (East/Chin/Celestial) = Arke Twins, children of Mana
- Three Mana Camps: Aura (Demons+Devils) · Force (Seraphim+Hallowed) · Pure Mana (Ascen+Primal)
- **Four Grand Pillar Families** (holders of the 4 Grand sealing weapons):
  1. House Wov — Tree of Eden (Gaia/Mother Nature sealed inside — DUTY)
  2. Clan Osiro — Book of Time (Cronus/Father Time sealed inside — DUTY)
  3. House Lucerne — Morningfall (Vrak Arke sealed inside — PUNISHMENT)
  4. House Seraph — Covenant Seraph (Selis Arke sealed inside — PUNISHMENT)
- Emperor's House: House Kazemi (Irane) — holds Spear of Unix (Auris sealed inside). NOT a Grand Pillar family.
- Royal House: Vane dynasty (Aevum → Niro → Keal) — oldest governing bloodline. NOT a Grand Pillar family.
- 16 Noble Treasures locked to bloodlines; line dies → planetary instability
- Exco Wov: conceived the Limbo hiding plan, stayed on Orius, died naturally. Did NOT sacrifice himself.
- Six Earth children: Eve's 3 (Lyra/Mara/Sael Wov) → Gaia sub-beasts. Adam's 3 (Seth/Dain/Noa Osiro) → Cronus sub-tools.
- Cosmic Eclipse every 500 years → Bounded Law activates

## Characters in App (${characters.length} total)
${charList}

## Relationships
${relList}

## Timeline
${eventList}

${weaponsSummary ? `## Weapons & Noble Treasures (${weapons.length} entries)\n${weaponsSummary}` : ''}

${beastsSummary ? `## Beasts & Summons (${beasts.length} entries)\n${beastsSummary}` : ''}

${recentLog ? `## Recent App Changes\n${recentLog}` : ''}`
}
