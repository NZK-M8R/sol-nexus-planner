import { useState } from 'react'
import { KAZEMI_HIERARCHY } from '../data/grandCouncil'

const HOUSE_KAZEMI_GOLD = '#D4AF37'

// Characters plausibly affiliated with Apexia/Valariya for the elemental-seat picker:
// house === 'kazemi' OR location contains 'Valariya'/'Apexia' — erring toward inclusion.
function isApexianOrValariyan(c) {
  if (c.house === 'kazemi') return true
  const loc = (c.location || '').toLowerCase()
  return loc.includes('valariya') || loc.includes('apexia')
}

function CharacterPicker({ characters, onAssign, onClose }) {
  const [search, setSearch] = useState('')
  const pool = characters.filter(isApexianOrValariyan)
  const filtered = pool.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="clan-picker-overlay" onClick={onClose}>
      <div className="clan-picker" onClick={e => e.stopPropagation()}>
        <div className="clan-picker-hdr">
          <span>Assign Character</span>
          <button className="editor-close" onClick={onClose}>✕</button>
        </div>
        <input
          className="lib-search" autoFocus
          placeholder="Search Apexian / Valariyan characters…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="clan-picker-list">
          <button className="clan-picker-item" onClick={() => onAssign(null)}>
            <span style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>— Clear assignment</span>
          </button>
          {filtered.map(c => (
            <button key={c.id} className="clan-picker-item" style={{ borderLeftColor: HOUSE_KAZEMI_GOLD }} onClick={() => onAssign(c.id)}>
              <span className="clan-picker-name" style={{ color: HOUSE_KAZEMI_GOLD }}>{c.name}</span>
              <span className="clan-picker-rank">{c.role || c.house}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function TierGroup({ entries, characters, onSelect }) {
  const isTie = entries.length > 1
  return (
    <div className={`kfh-tier${isTie ? ' kfh-tier--tied' : ''}`}>
      {isTie && (
        <div className="kfh-tie-badge">
          {entries.map(e => `${e.rank}`).join(' / ')} — Equal Rank
        </div>
      )}
      <div className="kfh-tier-row">
        {entries.map(entry => {
          const character = characters.find(c => c.id === entry.characterId)
          return (
            <div key={entry.rank} className="kfh-card" onClick={() => onSelect(entry)}>
              <div className="kfh-card-rank">#{entry.rank}</div>
              <div className="kfh-card-title">{entry.title}</div>
              {character && (
                <div className="kfh-card-char">
                  <span className="kfh-card-char-name">{character.name}</span>
                  {character.epithet && <span className="kfh-card-char-epithet">{character.epithet}</span>}
                </div>
              )}
              {entry.crossReference && (
                <div className="kfh-cross-ref-badge">Same character as #1 — see note</div>
              )}
              {entry.note && <div className="kfh-card-note">{entry.note}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function KazemiFamilyTab({ characters, elementalSeats, onSaveElementalSeats }) {
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [pickerSeatId, setPickerSeatId] = useState(null)

  // Group hierarchy entries by tier for tie-display
  const tiers = []
  KAZEMI_HIERARCHY.forEach(entry => {
    let group = tiers.find(g => g.tier === entry.tier)
    if (!group) { group = { tier: entry.tier, entries: [] }; tiers.push(group) }
    group.entries.push(entry)
  })

  const handleAssignSeat = (seatId, characterId) => {
    onSaveElementalSeats(elementalSeats.map(s => s.seatId === seatId ? { ...s, characterId } : s))
    setPickerSeatId(null)
  }

  const selectedCharacter = selectedEntry ? characters.find(c => c.id === selectedEntry.characterId) : null

  return (
    <div className="kfh-view">
      <div className="kfh-hero">
        <div className="kfh-hero-title">Kazemi Family &amp; Valariya Power</div>
        <div className="kfh-hero-sub">The ranked political hierarchy of House Kazemi and the seat of Valariya</div>
      </div>

      <div className="kfh-body">
        <div className="kfh-ladder">
          {tiers.map(group => (
            <TierGroup key={group.tier} entries={group.entries} characters={characters} onSelect={setSelectedEntry} />
          ))}

          <div className="kfh-elemental-hdr">
            <div className="kfh-elemental-title">The Ten Elemental Seats</div>
            <div className="kfh-elemental-sub">Below the ranked twelve — one seat per Concept, Fire through Darkness. Start unassigned.</div>
          </div>
          <div className="kfh-elemental-grid">
            {elementalSeats.map(seat => {
              const character = seat.characterId ? characters.find(c => c.id === seat.characterId) : null
              return (
                <div key={seat.seatId} className="kfh-elem-card" onClick={() => setPickerSeatId(seat.seatId)}>
                  <div className="kfh-elem-name">{seat.element}</div>
                  {character ? (
                    <div className="kfh-elem-assigned">{character.name}</div>
                  ) : (
                    <div className="kfh-elem-empty">Unassigned</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="kfh-detail">
          {selectedEntry ? (
            <div className="gt-seat-detail">
              <div className="gt-seat-hdr">
                <div className="gt-seat-label" style={{ color: HOUSE_KAZEMI_GOLD }}>{selectedEntry.title}</div>
                <div className="gt-special-badge">Rank #{selectedEntry.rank}</div>
              </div>
              {selectedCharacter && (
                <div className="gt-section">
                  <div className="gt-clan-card" style={{ borderLeftColor: HOUSE_KAZEMI_GOLD }}>
                    <div className="gt-clan-name" style={{ color: HOUSE_KAZEMI_GOLD }}>{selectedCharacter.name}</div>
                    {selectedCharacter.epithet && <div style={{ fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 6 }}>{selectedCharacter.epithet}</div>}
                    {selectedCharacter.role && <div className="gt-clan-desc">{selectedCharacter.role}</div>}
                  </div>
                </div>
              )}
              {selectedEntry.note && (
                <div className="gt-section">
                  <div className="gt-section-label">Note</div>
                  <div className="gt-vassal-note" style={{ fontSize: 12 }}>{selectedEntry.note}</div>
                </div>
              )}
            </div>
          ) : (
            <div className="gt-empty-state">
              <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>♛</div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>Click a rank card to view details</div>
            </div>
          )}
        </div>
      </div>

      {pickerSeatId && (
        <CharacterPicker
          characters={characters}
          onAssign={(characterId) => handleAssignSeat(pickerSeatId, characterId)}
          onClose={() => setPickerSeatId(null)}
        />
      )}
    </div>
  )
}
