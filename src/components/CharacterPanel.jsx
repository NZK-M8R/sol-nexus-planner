import { useState, useEffect } from 'react'
import { HOUSE_COLORS, HOUSE_LABELS, REL_COLORS, REL_LABELS } from '../data/characters'

function renderMd(text) {
  if (!text) return null
  return text.split('\n\n').map((para, pi) => {
    if (!para.trim()) return null
    const isHeader = para.startsWith('**') && para.split('**').length === 3 && para.endsWith('**')
    if (isHeader) {
      const title = para.replace(/\*\*/g, '')
      return <p key={pi} className="desc-header">{title}</p>
    }
    const parts = para.split(/(\*\*.*?\*\*)/g)
    const inline = parts.map((seg, si) => {
      if (seg.startsWith('**') && seg.endsWith('**')) {
        return <strong key={si}>{seg.slice(2, -2)}</strong>
      }
      return seg.split('\n').reduce((acc, line, li, arr) => {
        acc.push(line)
        if (li < arr.length - 1) acc.push(<br key={`${si}-br-${li}`} />)
        return acc
      }, [])
    })
    return <p key={pi} className="desc-para">{inline}</p>
  })
}

export default function CharacterPanel({ character, characters, relationships, showSecrets, onSelectChar, onClose, notes, onSaveNote }) {
  const [noteText, setNoteText] = useState(notes || '')
  const [saved, setSaved]       = useState(false)

  useEffect(() => {
    setNoteText(notes || character?.notes || '')
    setSaved(false)
  }, [character, notes])

  if (!character) return null

  const houseColor = HOUSE_COLORS[character.house] || '#888'
  const charColor  = houseColor

  const relations = relationships
    .filter(r => (r.source === character.id || r.target === character.id) && (showSecrets || !r.secret))
    .map(r => {
      const otherId = r.source === character.id ? r.target : r.source
      const other   = characters.find(c => c.id === otherId)
      return { ...r, other, direction: r.source === character.id ? 'out' : 'in' }
    })
    .filter(r => r.other)

  const handleSave = () => {
    onSaveNote(character.id, noteText)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <aside className="char-panel">
      <button className="panel-close" onClick={onClose}>✕</button>

      <div className="char-avatar" style={{ background: `${charColor}22`, borderColor: charColor }}>
        <span style={{ color: charColor }}>{character.name.charAt(0)}</span>
      </div>

      <h2 className="char-name">{character.name}</h2>

      {character.epithet && (
        <div className="char-epithet" style={{ color: `${charColor}AA` }}>
          {character.epithet}
        </div>
      )}

      <div className="char-house-tag" style={{ color: charColor }}>
        {HOUSE_LABELS[character.house] || character.house}
      </div>
      <div className="char-role">{character.role}</div>
      <span className={`status-badge status-${character.status}`}>
        {character.status}
      </span>

      {character.location && (
        <div className="info-row">
          <span className="info-label">Location</span>
          <span>{character.location}</span>
        </div>
      )}

      <div className="char-description">
        {renderMd(character.description)}
      </div>

      {character.beast && (
        <div className="char-section">
          <h3>Beast</h3>
          <div className="beast-card" style={{ borderLeftColor: charColor }}>
            <div className="beast-name" style={{ color: charColor }}>{character.beast.name}</div>
            <div className="beast-type">{character.beast.type}</div>
            <p className="beast-desc">{character.beast.description}</p>
          </div>
        </div>
      )}

      {character.psyche?.length > 0 && (
        <div className="char-section">
          <h3>Psyche Layers</h3>
          {character.psyche.map((p, i) => (
            <div key={i} className="psyche-item">{p}</div>
          ))}
        </div>
      )}

      {character.coreType && (
        <div className="char-section">
          <h3>Core Type</h3>
          <div className="core-badge">{character.coreType}</div>
        </div>
      )}

      {character.combatStyle && (
        <div className="char-section">
          <h3>Combat Style</h3>
          <p className="combat-style">{character.combatStyle}</p>
        </div>
      )}

      {relations.length > 0 && (
        <div className="char-section">
          <h3>Relationships</h3>
          {relations.map((r, i) => (
            <div
              key={i}
              className="rel-item"
              style={{ borderLeftColor: REL_COLORS[r.type] || '#444' }}
              onClick={() => onSelectChar(r.other)}
            >
              <span className="rel-type" style={{ color: REL_COLORS[r.type] }}>
                {REL_LABELS[r.type] || r.type}
              </span>
              <span className="rel-name">{r.other.name}</span>
              {r.secret && <span className="secret-tag">secret</span>}
              {r.note && <div className="rel-note">{r.note}</div>}
            </div>
          ))}
        </div>
      )}

      <div className="char-section notes-section">
        <h3>Story Notes</h3>
        <textarea
          className="notes-textarea"
          value={noteText}
          onChange={e => setNoteText(e.target.value)}
          placeholder="Add planning notes for this character..."
          rows={4}
        />
        <button className="save-notes-btn" onClick={handleSave}>
          {saved ? '✓ Saved' : 'Save Notes'}
        </button>
      </div>
    </aside>
  )
}
