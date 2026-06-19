import { useState, useRef, useEffect } from 'react'
import { sendMessage, buildSystemPrompt, isApiConfigured } from '../api/claude'

const QUICK_PROMPTS = [
  'Analyse how Kael becoming Vane heir changes the political balance',
  'What are the biggest unresolved plot threads in the Sol-Nexus?',
  'Suggest a new minor character for House Vestarin',
  'How would Irane react if his Blindness Curse were broken?',
  'What themes connect Sol-Nexus to Dune or Attack on Titan?',
  'Explain the downstream effects if the Mana Tax were abolished',
]

export default function ChatPanel({ characters, relationships, timelineEras }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [showSetup, setShowSetup] = useState(!isApiConfigured())
  const bottomRef = useRef()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const send = async (text) => {
    const userText = text || input.trim()
    if (!userText) return

    setInput('')
    setError(null)
    setShowSetup(false)

    const userMsg = { role: 'user', content: userText }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setLoading(true)

    try {
      const systemPrompt = buildSystemPrompt(characters, relationships, timelineEras)
      const reply = await sendMessage(
        updated.map(m => ({ role: m.role, content: m.content })),
        systemPrompt
      )
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) send()
  }

  const clearChat = () => { setMessages([]); setError(null) }

  return (
    <div className="chat-view">
      <div className="chat-header">
        <div>
          <h2>AI Story Collaborator</h2>
          <p className="chat-subtitle">
            Ask me anything about Sol-Nexus — plot impacts, character development, lore gaps, scene writing.
          </p>
        </div>
        {messages.length > 0 && (
          <button className="clear-chat-btn" onClick={clearChat}>Clear</button>
        )}
      </div>

      {showSetup && (
        <div className="setup-notice">
          <strong>Claude API key needed for chat</strong>
          <ol>
            <li>Go to <code>console.anthropic.com</code> and create an API key</li>
            <li>Create a file called <code>.env.local</code> in the <code>sol-nexus-planner</code> folder</li>
            <li>Add: <code>VITE_CLAUDE_API_KEY=sk-ant-...</code></li>
            <li>Restart the dev server with <code>npm run dev</code></li>
          </ol>
          <button className="dismiss-btn" onClick={() => setShowSetup(false)}>I've done this →</button>
        </div>
      )}

      {messages.length === 0 && !showSetup && (
        <div className="quick-prompts">
          <p className="qp-label">Quick questions</p>
          <div className="qp-grid">
            {QUICK_PROMPTS.map((qp, i) => (
              <button key={i} className="qp-btn" onClick={() => send(qp)}>
                {qp}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chat-msg ${m.role}`}>
            <div className="msg-role">{m.role === 'user' ? 'You' : 'Claude'}</div>
            <div className="msg-content">{renderMessage(m.content)}</div>
          </div>
        ))}
        {loading && (
          <div className="chat-msg assistant">
            <div className="msg-role">Claude</div>
            <div className="msg-content typing">
              <span /><span /><span />
            </div>
          </div>
        )}
        {error && (
          <div className="chat-error">
            <strong>Error:</strong> {error}
            {!isApiConfigured() && (
              <button className="setup-link" onClick={() => setShowSetup(true)}>Setup API key →</button>
            )}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="chat-input-area">
        <textarea
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask about Sol-Nexus... (Ctrl+Enter to send)"
          rows={3}
          disabled={loading}
        />
        <button
          className="send-btn"
          onClick={() => send()}
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  )
}

function renderMessage(text) {
  const lines = text.split('\n')
  return lines.map((line, i) => {
    if (line.startsWith('## ')) return <h3 key={i} style={{ color: '#d4af37', margin: '12px 0 4px' }}>{line.slice(3)}</h3>
    if (line.startsWith('# '))  return <h2 key={i} style={{ color: '#d4af37', margin: '12px 0 4px' }}>{line.slice(2)}</h2>
    if (line.startsWith('**') && line.endsWith('**')) return <strong key={i} style={{ display: 'block' }}>{line.slice(2, -2)}</strong>
    if (line.startsWith('- ') || line.startsWith('* ')) return <div key={i} style={{ paddingLeft: 12 }}>• {renderInlineBold(line.slice(2))}</div>
    if (line.trim() === '') return <div key={i} style={{ height: 8 }} />
    return <p key={i} style={{ margin: '4px 0' }}>{renderInlineBold(line)}</p>
  })
}

function renderInlineBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((p, i) => i % 2 === 1 ? <strong key={i}>{p}</strong> : p)
}
