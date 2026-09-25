import { CHAR_COLORS, HOUSE_COLORS, HOUSE_LABELS, REL_COLORS, REL_LABELS } from '../data/characters'

// Full-page "floating board" view of a single character — spells, abilities,
// and a per-Part summary of major actions pulled from stories.js arcs.
// Reachable from the compact sidebar panel; does not replace it.

function renderMd(text) {
  if (typeof text !== 'string' || !text.trim()) return null
  return text.split('\n\n').map((para, pi) => {
    if (!para.trim()) return null
    const isHeader = para.startsWith('**') && para.split('**').length === 3 && para.endsWith('**')
    if (isHeader) {
      return <p key={pi} className="board-desc-header">{para.replace(/\*\*/g, '')}</p>
    }
    const parts = para.split(/(\*\*.*?\*\*)/g)
    const inline = parts.map((seg, si) => {
      if (seg.startsWith('**') && seg.endsWith('**')) return <strong key={si}>{seg.slice(2, -2)}</strong>
      return seg.split('\n').reduce((acc, line, li, arr) => {
        acc.push(line)
        if (li < arr.length - 1) acc.push(<br key={`${si}-br-${li}`} />)
        return acc
      }, [])
    })
    return <p key={pi} className="board-desc-para">{inline}</p>
  })
}

// Sort arcs a character appears in in rough story order using each story's
// own array order (stories.js is already written chronologically part by
// part), so the timeline reads start-to-finish without needing new data.
function getPartTimeline(character, stories) {
  if (!character || !Array.isArray(stories)) return []
  const rows = []
  stories.forEach(story => {
    ;(story.arcs || []).forEach(arc => {
      if (arc.characters?.includes(character.id)) {
        rows.push({ storyTitle: story.title, storyColor: story.color, arc })
      }
    })
  })
  return rows
}

export default function CharacterBoard({ character, characters, relationships, stories, weapons, beasts, onClose, onSelectChar }) {
  if (!character) return null

  const charColor = character.color || CHAR_COLORS[character.id] || HOUSE_COLORS[character.house] || '#4AAFE0'

  const weaponId  = character.weaponId
  const beastId   = character.beastId
  const libWeapon = weaponId ? (weapons || []).find(w => w.id === weaponId) : null
  const libBeast  = beastId  ? (beasts  || []).find(b => b.id === beastId)  : null
  const activeWeapon = libWeapon || character.weapon
  const activeBeast  = libBeast  || character.beast
  const spells = character.spells || []
  const powers = character.powers || []
  const psyche = character.psyche || []

  const relations = (relationships || [])
    .filter(r => r.source === character.id || r.target === character.id)
    .map(r => {
      const otherId = r.source === character.id ? r.target : r.source
      const other = characters.find(c => c.id === otherId)
      return { ...r, other }
    })
    .filter(r => r.other)

  const timeline = getPartTimeline(character, stories)

  return (
    <div className="char-board-overlay" role="dialog" aria-modal="true">
      <div className="char-board">
        <button className="char-board-close" onClick={onClose}>✕ Close</button>

        <header className="char-board-header" style={{ borderColor: `${charColor}55` }}>
          <div className="char-board-avatar" style={{ background: `${charColor}22`, borderColor: charColor, color: charColor }}>
            {(character.name || '?').charAt(0)}
          </div>
          <div className="char-board-heading">
            <h1 style={{ color: charColor }}>{character.name}</h1>
            {character.epithet && <div className="char-board-epithet">{character.epithet}</div>}
            <div className="char-board-tags">
              <span className="char-board-house-tag" style={{ color: charColor }}>
                {HOUSE_LABELS[character.house] || character.house}
              </span>
              {character.role && <span className="char-board-role">{character.role}</span>}
              {character.status && <span className={`status-badge status-${character.status}`}>{character.status}</span>}
            </div>
            {character.coreType && (
              <div className="char-board-core-badge">{character.coreType}</div>
            )}
          </div>
        </header>

        <div className="char-board-grid">
          {/* ── LEFT COLUMN: description, powers ── */}
          <div className="char-board-col char-board-col-main">
            {character.description && (
              <section className="char-board-section">
                <h2>Profile</h2>
                <div className="char-board-desc">{renderMd(character.description)}</div>
              </section>
            )}

            {(activeBeast?.name || activeWeapon?.name) && (
              <section className="char-board-section">
                <h2>Beast &amp; Weapon</h2>
                <div className="char-board-bw-grid">
                  {activeBeast?.name && (
                    <div className="char-board-bw-card" style={{ borderLeftColor: charColor }}>
                      <div className="char-board-bw-label">Beast</div>
                      <div className="char-board-bw-name" style={{ color: charColor }}>{activeBeast.name}</div>
                      {activeBeast.type && <div className="char-board-bw-type">{activeBeast.type}</div>}
                      {activeBeast.description && <p>{activeBeast.description}</p>}
                    </div>
                  )}
                  {activeWeapon?.name && (
                    <div className="char-board-bw-card" style={{ borderLeftColor: charColor }}>
                      <div className="char-board-bw-label">Weapon / Tool</div>
                      <div className="char-board-bw-name" style={{ color: charColor }}>{activeWeapon.name}</div>
                      {activeWeapon.type && <div className="char-board-bw-type">{activeWeapon.type}</div>}
                      {activeWeapon.description && <p>{activeWeapon.description}</p>}
                    </div>
                  )}
                </div>
              </section>
            )}

            {(spells.length > 0 || powers.length > 0) && (
              <section className="char-board-section">
                <h2>Spells &amp; Abilities</h2>
                <div className="char-board-spell-grid">
                  {spells.map((s, i) => (
                    <div key={`sp-${i}`} className="char-board-spell-card" style={{ borderLeftColor: charColor }}>
                      <div className="char-board-spell-name" style={{ color: charColor }}>{s.name}</div>
                      {s.tier && <div className="char-board-spell-tier">{s.tier}</div>}
                      {s.description && <p>{s.description}</p>}
                    </div>
                  ))}
                  {powers.map((p, i) => (
                    <div key={`pw-${i}`} className="char-board-spell-card" style={{ borderLeftColor: charColor }}>
                      <div className="char-board-spell-name" style={{ color: charColor }}>{p.name}</div>
                      {p.type && <div className="char-board-spell-tier">{p.type}</div>}
                      {p.description && <p>{p.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {psyche.length > 0 && (
              <section className="char-board-section">
                <h2>Psyche / Power States</h2>
                {psyche.map((p, i) => (
                  <div key={i} className="char-board-psyche-item">
                    {typeof p === 'string' ? p : (p?.description || p?.name || JSON.stringify(p))}
                  </div>
                ))}
              </section>
            )}
          </div>

          {/* ── RIGHT COLUMN: per-Part timeline, relationships ── */}
          <div className="char-board-col char-board-col-side">
            {timeline.length > 0 && (
              <section className="char-board-section">
                <h2>Story Timeline</h2>
                <div className="char-board-timeline">
                  {timeline.map(({ storyTitle, storyColor, arc }, i) => (
                    <div key={arc.id || i} className="char-board-timeline-item" style={{ borderLeftColor: storyColor || charColor }}>
                      <div className="char-board-timeline-part" style={{ color: storyColor || charColor }}>{storyTitle}</div>
                      <div className="char-board-timeline-arc">{arc.title}</div>
                      {arc.summary && <p>{arc.summary}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {relations.length > 0 && (
              <section className="char-board-section">
                <h2>Relationships</h2>
                {relations.map((r, i) => (
                  <div
                    key={i}
                    className="char-board-rel-item"
                    style={{ borderLeftColor: REL_COLORS[r.type] || '#444' }}
                    onClick={() => onSelectChar && onSelectChar(r.other)}
                  >
                    <span className="rel-type" style={{ color: REL_COLORS[r.type] }}>
                      {REL_LABELS[r.type] || r.type}
                    </span>
                    <span className="rel-name">{r.other.name}</span>
                    {r.secret && <span className="secret-tag">secret</span>}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
