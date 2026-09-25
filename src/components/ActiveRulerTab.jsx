import { useState } from 'react'
import { SQUAD_ZERO, ACTIVE_RULER_SQUADS, HAND_PAIRINGS, SUMMARI_NIGHLA_HAND_NOTE } from '../data/grandCouncil'

const HOUSE_KAZEMI_GOLD = '#D4AF37'

function HandBadges({ characterId, characters }) {
  const pairing = HAND_PAIRINGS.find(p => p.characterId === characterId)
  if (!pairing) return null
  const rightChar = characters.find(c => c.id === pairing.rightHandCharacterId)
  const leftChar  = characters.find(c => c.id === pairing.leftHandCharacterId)
  return (
    <div className="ar-hand-badges">
      {rightChar && (
        <span className="ar-hand-badge ar-hand-badge--r" title={`Right Hand: ${rightChar.name}`}>
          R · {rightChar.name}
        </span>
      )}
      {leftChar && (
        <span className="ar-hand-badge ar-hand-badge--l" title={`Left Hand: ${leftChar.name}`}>
          L · {leftChar.name}
        </span>
      )}
    </div>
  )
}

function SquadCard({ squad, characters, onSelect, allSquads }) {
  const leader = characters.find(c => c.id === squad.leaderCharacterId)
  const second = squad.secondCharacterId ? characters.find(c => c.id === squad.secondCharacterId) : null
  const isSecondInCommand = !!squad.secondInCommandOverall
  const isComposite = !!squad.isCompositeSquad

  return (
    <div
      className={`ar-squad-card${isSecondInCommand ? ' ar-squad-card--soc' : ''}${isComposite ? ' ar-squad-card--composite' : ''}`}
      onClick={() => onSelect(squad)}
    >
      <div className="ar-squad-num">{squad.number === undefined ? '0' : squad.number}</div>
      <div className="ar-squad-body">
        <div className="ar-squad-label">{squad.label}</div>
        {leader && (
          <div className="ar-squad-leader">
            <span className="ar-squad-leader-name" style={{ color: HOUSE_KAZEMI_GOLD }}>{leader.name}</span>
            <HandBadges characterId={leader.id} characters={characters} />
          </div>
        )}
        {second && (
          <div className="ar-squad-second">{squad.secondLabel || 'Second'}: {second.name}</div>
        )}
        {isSecondInCommand && <div className="ar-soc-badge">Second-in-Command — Overall</div>}
        {isComposite && (
          <div className="ar-composite-badge">
            Composite — membership is the {squad.memberSquadIds?.length || 0} other squad captains
          </div>
        )}
      </div>
    </div>
  )
}

export default function ActiveRulerTab({ characters }) {
  const [selectedSquad, setSelectedSquad] = useState(null)

  const leader0 = characters.find(c => c.id === SQUAD_ZERO.leaderCharacterId)

  const memberSquadLabels = selectedSquad?.memberSquadIds
    ? selectedSquad.memberSquadIds.map(id => {
        const s = ACTIVE_RULER_SQUADS.find(sq => sq.squadId === id)
        const leader = s ? characters.find(c => c.id === s.leaderCharacterId) : null
        return s ? `${s.label}${leader ? ` (${leader.name})` : ''}` : id
      })
    : []

  const memberCharList = selectedSquad?.memberCharacterIds
    ? selectedSquad.memberCharacterIds.map(id => characters.find(c => c.id === id)).filter(Boolean)
    : []

  return (
    <div className="ar-view">
      <div className="ar-hero">
        <div className="ar-hero-title">Active Ruler</div>
        <div className="ar-hero-sub">The 13-squad military command structure of the Empire</div>
      </div>

      <div className="ar-body">
        <div className="ar-squad-list">
          {/* Squad 0 — Supreme Command, visually distinct from Squad 8 */}
          <div className="ar-squad-card ar-squad-card--supreme" onClick={() => setSelectedSquad(SQUAD_ZERO)}>
            <div className="ar-squad-num ar-squad-num--supreme">0</div>
            <div className="ar-squad-body">
              <div className="ar-squad-label">{SQUAD_ZERO.label}</div>
              {leader0 && (
                <div className="ar-squad-leader">
                  <span className="ar-squad-leader-name" style={{ color: HOUSE_KAZEMI_GOLD }}>{leader0.name}</span>
                </div>
              )}
              <div className="ar-supreme-badge">Absolute authority over all Imperial resources</div>
            </div>
          </div>

          {ACTIVE_RULER_SQUADS.map(squad => (
            <SquadCard key={squad.squadId} squad={squad} characters={characters} onSelect={setSelectedSquad} allSquads={ACTIVE_RULER_SQUADS} />
          ))}

          <div className="ar-hand-note">
            <div className="ar-hand-note-title">Left Hand / Right Hand — a connective pattern</div>
            <div className="ar-hand-note-body">
              Arai, Zoe, and Hope each carry a Right Hand and Left Hand pairing, shown as R/L badges on their squad cards above.
            </div>
            <div className="ar-hand-note-body ar-hand-note-body--sub">{SUMMARI_NIGHLA_HAND_NOTE}</div>
          </div>
        </div>

        <div className="ar-detail">
          {selectedSquad ? (
            <div className="gt-seat-detail">
              <div className="gt-seat-hdr">
                <div className="gt-seat-label" style={{ color: HOUSE_KAZEMI_GOLD }}>{selectedSquad.label}</div>
                {selectedSquad.squadId === undefined && <div className="gt-special-badge">Supreme Command</div>}
                {selectedSquad.secondInCommandOverall && <div className="gt-special-badge">2nd-in-Command Overall</div>}
                {selectedSquad.isCompositeSquad && <div className="gt-special-badge">Composite Squad</div>}
              </div>

              <div className="gt-section">
                <div className="gt-section-label">Leader</div>
                {(() => {
                  const leader = characters.find(c => c.id === selectedSquad.leaderCharacterId)
                  if (!leader) return <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>Unknown</div>
                  return (
                    <div className="gt-clan-card" style={{ borderLeftColor: HOUSE_KAZEMI_GOLD }}>
                      <div className="gt-clan-name" style={{ color: HOUSE_KAZEMI_GOLD }}>{leader.name}</div>
                      {leader.epithet && <div style={{ fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 6 }}>{leader.epithet}</div>}
                      {leader.role && <div className="gt-clan-desc">{leader.role}</div>}
                      <HandBadges characterId={leader.id} characters={characters} />
                    </div>
                  )
                })()}
                {selectedSquad.leaderNote && (
                  <div className="gt-vassal-note" style={{ marginTop: 6 }}>{selectedSquad.leaderNote}</div>
                )}
              </div>

              {selectedSquad.secondCharacterId && (
                <div className="gt-section">
                  <div className="gt-section-label">{selectedSquad.secondLabel || 'Second'}</div>
                  {(() => {
                    const second = characters.find(c => c.id === selectedSquad.secondCharacterId)
                    return second ? (
                      <div className="gt-clan-card" style={{ borderLeftColor: '#7AABCC' }}>
                        <div className="gt-clan-name" style={{ color: '#7AABCC' }}>{second.name}</div>
                        {second.role && <div className="gt-clan-desc">{second.role}</div>}
                      </div>
                    ) : null
                  })()}
                </div>
              )}

              {selectedSquad.description && (
                <div className="gt-section">
                  <div className="gt-section-label">Description</div>
                  <div className="gt-clan-desc">{selectedSquad.description}</div>
                </div>
              )}

              {memberSquadLabels.length > 0 && (
                <div className="gt-section">
                  <div className="gt-section-label">Composite Membership ({memberSquadLabels.length} captains)</div>
                  <div className="ar-member-list">
                    {memberSquadLabels.map((label, i) => <div key={i} className="ar-member-item">{label}</div>)}
                  </div>
                </div>
              )}

              {memberCharList.length > 0 && (
                <div className="gt-section">
                  <div className="gt-section-label">Members</div>
                  <div className="ar-member-list">
                    {memberCharList.map(c => <div key={c.id} className="ar-member-item">{c.name}</div>)}
                  </div>
                  {selectedSquad.memberNote && (
                    <div className="gt-vassal-note" style={{ marginTop: 6 }}>{selectedSquad.memberNote}</div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="gt-empty-state">
              <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>⚑</div>
              <div style={{ fontSize: 13, color: 'var(--text-dim)' }}>Click a squad card to view details</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
