import { useState, useMemo } from 'react'
import { TABLE_SEATS, TABLE_LAW, CLAN_RANKS, CLAN_RANK_COLORS, defaultClans } from '../data/clans'
import { WEAPON_FACTION_COLORS } from '../data/weapons'

// SVG canvas dimensions
const CW = 1100, CH = 800
// Ellipse for the 16 treasure seats (the actual table ring)
const TX = 550, TY = 390, TRX = 390, TRY = 268
// Special seat offsets (Emperor top, King bottom)
const EMPEROR_POS = { x: 550, y: 72 }
const KING_POS    = { x: 550, y: 720 }

const ROLE_LABELS = {
  enforcer:       { label: 'Enforcer',       color: '#D4AF37' },
  treasurer:      { label: 'Treasurer',       color: '#2E7A3E' },
  inquisitor:     { label: 'Inquisitor',      color: '#9b5de5' },
  'morning-star': { label: 'Morning-Star',    color: '#D4460A' },
  'spirit-bearer':{ label: 'Spirit Bearer',   color: '#C8C0FF' },
}

// Roster section membership
const GRAND_PILLAR_SEAT_IDS = ['seat-wov', 'seat-osiro', 'seat-lucerne', 'seat-seraph', 'seat-emperor', 'seat-king']
const PRIMAL_CLAN_IDS = ['more', 'prescian', 'revyn']
const EARTH_GUARDIAN_IDS = ['surya', 'oba', 'long', 'ouranos', 'rongo', 'wakan']

// Weapons view sections
const VRAK_BEAST_IDS    = ['ruin-beast', 'eclipse-beast', 'erasure-beast']
const SELIS_TOOL_IDS    = ['sovas-chain', 'keths-brand', 'tevans-edict']
const HIDDEN_WEAPON_IDS = ['stellar-beast', 'wane-beast', 'root-beast', 'drift-tool', 'echo-tool', 'seal-tool']

// Compute positions for the 16 table seats
function getSeatPositions(seats) {
  const nobleSeats = seats.filter(s => !s.special)
  return nobleSeats.map((seat, i) => {
    const isDuraki = i < 8
    let angle
    if (isDuraki) {
      angle = 200 + (i / 7) * 140
    } else {
      angle = 20 + ((i - 8) / 7) * 140
    }
    const rad = (angle * Math.PI) / 180
    return {
      ...seat,
      x: TX + TRX * Math.cos(rad),
      y: TY + TRY * Math.sin(rad),
    }
  })
}

function ClanPicker({ clans, onAssign, onClose }) {
  const [search, setSearch] = useState('')
  const filtered = clans.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="clan-picker-overlay" onClick={onClose}>
      <div className="clan-picker" onClick={e => e.stopPropagation()}>
        <div className="clan-picker-hdr">
          <span>Assign House</span>
          <button className="editor-close" onClick={onClose}>✕</button>
        </div>
        <input
          className="lib-search" autoFocus
          placeholder="Search houses…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="clan-picker-list">
          <button className="clan-picker-item" onClick={() => onAssign(null)}>
            <span style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>— Clear assignment</span>
          </button>
          {filtered.map(c => (
            <button
              key={c.id}
              className="clan-picker-item"
              style={{ borderLeftColor: c.color || CLAN_RANK_COLORS[c.rank] }}
              onClick={() => onAssign(c.id)}
            >
              <span className="clan-picker-name" style={{ color: c.color || CLAN_RANK_COLORS[c.rank] }}>{c.name}</span>
              <span className="clan-picker-rank">{CLAN_RANKS[c.rank] || c.rank}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Roster View ──────────────────────────────────────────────────────────────
function RosterView({ clans, onSelectClan }) {
  const grandPillarClans = clans.filter(c =>
    c.seatId && GRAND_PILLAR_SEAT_IDS.includes(c.seatId)
  )
  const primalClans = clans.filter(c => PRIMAL_CLAN_IDS.includes(c.id))
  const earthGuardians = clans.filter(c => EARTH_GUARDIAN_IDS.includes(c.id))

  const renderSection = (title, sectionClans) => (
    <div className="roster-section" key={title}>
      <div className="roster-section-header">{title}</div>
      <div className="roster-clan-grid">
        {sectionClans.map(clan => (
          <div
            key={clan.id}
            className="roster-clan-card"
            style={{ borderLeftColor: clan.color || CLAN_RANK_COLORS[clan.rank] }}
            onClick={() => onSelectClan(clan)}
          >
            <div className="roster-clan-name" style={{ color: clan.color || CLAN_RANK_COLORS[clan.rank] }}>
              {clan.name}
            </div>
            <div className="roster-clan-role">{clan.role}</div>
            <div className="roster-clan-desc">
              {clan.description
                ? clan.description.slice(0, 200) + (clan.description.length > 200 ? '…' : '')
                : <span style={{ fontStyle: 'italic', opacity: 0.5 }}>No description.</span>
              }
            </div>
            {clan.notes && (
              <div className="roster-clan-notes">{clan.notes}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="roster-view">
      {renderSection('Grand Pillar Houses', grandPillarClans)}
      {renderSection('Primal Houses', primalClans)}
      {renderSection('Earth Guardian Houses (Hidden)', earthGuardians)}
    </div>
  )
}

// ── Weapons View ─────────────────────────────────────────────────────────────
function WeaponsView({ weapons, onSelectWeapon }) {
  const vrakBeasts   = weapons.filter(w => VRAK_BEAST_IDS.includes(w.id))
  const selisTools   = weapons.filter(w => SELIS_TOOL_IDS.includes(w.id))
  const hiddenWeapons = weapons.filter(w => HIDDEN_WEAPON_IDS.includes(w.id))

  const renderSection = (title, sectionWeapons) => (
    <div className="weapons-section" key={title}>
      <div className="weapons-section-header">{title}</div>
      <div className="weapons-grid">
        {sectionWeapons.map(weapon => {
          const color = WEAPON_FACTION_COLORS[weapon.faction] || '#4AAFE0'
          return (
            <div
              key={weapon.id}
              className="weapon-card"
              style={{ borderTopColor: color }}
              onClick={() => onSelectWeapon(weapon)}
            >
              <div className="weapon-card-name" style={{ color }}>{weapon.name}</div>
              {weapon.designation && (
                <div className="weapon-card-desig">{weapon.designation}</div>
              )}
              <div className="weapon-card-desc">
                {weapon.description
                  ? weapon.description.slice(0, 150) + (weapon.description.length > 150 ? '…' : '')
                  : ''
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <div className="weapons-view">
      {renderSection('Vrak\'s Beasts — Grand Table (Ferali · Refined Elements)', vrakBeasts)}
      {renderSection('Selis\'s Tools — Grand Table (Celestial · Primal Elements)', selisTools)}
      {renderSection('Hidden Treasures — Earth (Gaia\'s 3 + Cronus\'s 3)', hiddenWeapons)}
    </div>
  )
}

export default function GrandTable({ weapons, clans, characters, onSaveClans }) {
  const [viewMode, setViewMode]             = useState('ring')
  const [selectedSeatId, setSelectedSeatId] = useState(null)
  const [showTableLaw, setShowTableLaw]     = useState(false)
  const [showPicker, setShowPicker]         = useState(false)
  const [clanTab, setClanTab]               = useState('grand')
  const [editingClan, setEditingClan]       = useState(null)
  const [newClanDraft, setNewClanDraft]     = useState(null)
  // Roster mode: selected clan for detail panel
  const [rosterSelectedClan, setRosterSelectedClan] = useState(null)
  // Weapons mode: selected weapon for detail panel
  const [selectedWeaponDirectId, setSelectedWeaponDirectId] = useState(null)

  const seatPositions = useMemo(() => getSeatPositions(TABLE_SEATS), [])
  const allSeatPositions = useMemo(() => [
    { ...TABLE_SEATS[0],  ...EMPEROR_POS },
    ...seatPositions,
    { ...TABLE_SEATS[17], ...KING_POS },
  ], [seatPositions])

  const getClan   = (seatId) => clans.find(c => c.seatId === seatId) || null
  const getWeapon = (weaponId) => weaponId ? weapons.find(w => w.id === weaponId) : null

  const selectedSeat   = selectedSeatId ? TABLE_SEATS.find(s => s.seatId === selectedSeatId) : null
  const selectedWeapon = selectedSeat ? getWeapon(selectedSeat.weaponId) : null
  const selectedClan   = selectedSeat ? getClan(selectedSeatId) : null
  const selectedWeaponDirect = selectedWeaponDirectId ? weapons.find(w => w.id === selectedWeaponDirectId) : null

  const handleSeatClick = (seatId) => {
    setShowTableLaw(false)
    setSelectedSeatId(prev => prev === seatId ? null : seatId)
  }

  const handleTableClick = () => {
    setSelectedSeatId(null)
    setShowTableLaw(true)
  }

  const handleAssignClan = (clanId) => {
    const updated = clans.map(c => {
      if (c.seatId === selectedSeatId) return { ...c, seatId: null }
      if (c.id === clanId) return { ...c, seatId: selectedSeatId }
      return c
    })
    onSaveClans(updated)
    setShowPicker(false)
  }

  const handleSaveClanEdit = (updated) => {
    onSaveClans(clans.map(c => c.id === updated.id ? updated : c))
    setEditingClan(null)
  }

  const handleCreateClan = () => {
    setNewClanDraft({
      id: `clan-${Date.now()}`,
      name: '', rank: clanTab, color: '#4AAFE0',
      description: '', role: '', seatId: null, champion: null,
      canClaimThrone: clanTab === 'noble',
      permanentRole: null, vassalOf: null, notes: '',
    })
  }

  const handleSaveNewClan = () => {
    if (!newClanDraft?.name) return
    onSaveClans([...clans, newClanDraft])
    setNewClanDraft(null)
  }

  const handleDeleteClan = (clanId) => {
    if (!window.confirm('Delete this house?')) return
    onSaveClans(clans.filter(c => c.id !== clanId))
  }

  const handlePromoteClan = (clan, newRank) => {
    onSaveClans(clans.map(c => c.id === clan.id ? { ...c, rank: newRank } : c))
  }

  const handleViewModeChange = (mode) => {
    setViewMode(mode)
    setRosterSelectedClan(null)
    setSelectedWeaponDirectId(null)
    setSelectedSeatId(null)
    setShowTableLaw(false)
  }

  const clansForTab  = clans.filter(c => c.rank === clanTab)
  const unseatedClans = clans.filter(c => !c.seatId)

  const rankOrder = ['empiric', 'royal', 'grand', 'noble', 'great']

  // ── Middle panel content resolver ──────────────────────────────────────────
  const renderMidPanel = () => {
    // Weapons mode: show weapon detail for directly selected weapon
    if (viewMode === 'weapons' && selectedWeaponDirect) {
      const w = selectedWeaponDirect
      const color = WEAPON_FACTION_COLORS[w.faction] || '#4AAFE0'
      return (
        <div className="gt-seat-detail">
          <div className="gt-seat-hdr">
            <div className="gt-seat-label" style={{ color }}>{w.name}</div>
          </div>
          <div className="gt-section">
            <div className="gt-weapon-card">
              <div className="gt-weapon-name" style={{ color }}>{w.name}</div>
              {w.designation && <div className="gt-weapon-desig">{w.designation}</div>}
              <div className="gt-weapon-desc">{w.description}</div>
              {w.corrosion && (
                <>
                  <div className="gt-corrosion-label">Corrosion</div>
                  <div className="gt-corrosion-text">{w.corrosion}</div>
                </>
              )}
              {w.abilities?.length > 0 && (
                <div className="gt-abilities">
                  <div className="gt-corrosion-label">Abilities ({w.abilities.length})</div>
                  {w.abilities.map((ab, i) => (
                    <div key={i} className="gt-ability-item">
                      <div className="gt-ability-name">{ab.name}</div>
                      <div className="gt-ability-desc">{ab.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    // Roster mode: show selected clan detail
    if (viewMode === 'roster' && rosterSelectedClan) {
      const clan = rosterSelectedClan
      return (
        <div className="gt-seat-detail">
          <div className="gt-seat-hdr">
            <div className="gt-seat-label" style={{ color: clan.color || '#4AAFE0' }}>{clan.name}</div>
            <div className="gt-special-badge">{CLAN_RANKS[clan.rank] || clan.rank}</div>
          </div>
          <div className="gt-section">
            <div className="gt-clan-card" style={{ borderLeftColor: clan.color || '#4AAFE0' }}>
              <div className="gt-clan-name" style={{ color: clan.color || '#4AAFE0' }}>{clan.name}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '4px 0' }}>
                <span className="gt-clan-rank">{CLAN_RANKS[clan.rank] || clan.rank}</span>
                {clan.permanentRole && (
                  <span className="gt-role-badge" style={{ background: `${ROLE_LABELS[clan.permanentRole]?.color}22`, color: ROLE_LABELS[clan.permanentRole]?.color, borderColor: `${ROLE_LABELS[clan.permanentRole]?.color}44` }}>
                    {ROLE_LABELS[clan.permanentRole]?.label}
                  </span>
                )}
              </div>
              {clan.role && <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8, fontStyle: 'italic' }}>{clan.role}</div>}
              {clan.description && <div className="gt-clan-desc">{clan.description}</div>}
              {clan.notes && (
                <div className="gt-vassal-note" style={{ marginTop: 8, color: 'var(--text-dim)' }}>{clan.notes}</div>
              )}
              {clan.vassalOf && (
                <div className="gt-vassal-note">
                  Vassal of {clans.find(c => c.id === clan.vassalOf)?.name || clan.vassalOf}
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }

    // Ring mode: existing logic
    if (viewMode === 'ring') {
      if (showTableLaw) {
        return (
          <div className="gt-covenant-panel">
            <div className="gt-covenant-hdr">
              <span className="gt-covenant-icon">◈</span>
              <div>
                <div className="gt-covenant-title">Covenants of the Grand Table</div>
                <div className="gt-covenant-sub">8 Articles · Binding on all 50 Great Houses</div>
              </div>
              <button className="editor-close" style={{ marginLeft: 'auto' }}
                onClick={() => setShowTableLaw(false)}>✕</button>
            </div>
            <div className="gt-covenant-body">
              <pre className="gt-covenant-text">{TABLE_LAW}</pre>
            </div>
          </div>
        )
      }
      if (!selectedSeat) {
        return (
          <div className="gt-empty-state">
            <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>◈</div>
            <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 6 }}>Click a seat to view details</div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', opacity: 0.6 }}>or click the table to read the Covenants</div>
          </div>
        )
      }
      return (
        <div className="gt-seat-detail">
          <div className="gt-seat-hdr">
            {(() => {
              const color = selectedSeat.special
                ? (selectedSeat.specialRole === 'emperor' ? '#D4AF37' : '#E84855')
                : (selectedWeapon ? WEAPON_FACTION_COLORS[selectedWeapon.faction] || '#4AAFE0' : '#4AAFE0')
              return (
                <>
                  <div className="gt-seat-label" style={{ color }}>{selectedSeat.label}</div>
                  {selectedSeat.special && (
                    <div className="gt-special-badge">
                      {selectedSeat.specialRole === 'emperor' ? "Emperor's Seat" : "King's Throne"}
                    </div>
                  )}
                </>
              )
            })()}
          </div>

          {/* Assigned clan */}
          <div className="gt-section">
            <div className="gt-section-label">Assigned House</div>
            {selectedClan ? (
              <div className="gt-clan-card" style={{ borderLeftColor: selectedClan.color || '#4AAFE0' }}>
                <div className="gt-clan-name" style={{ color: selectedClan.color || '#4AAFE0' }}>
                  {selectedClan.name}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', margin: '4px 0' }}>
                  <span className="gt-clan-rank">{CLAN_RANKS[selectedClan.rank] || selectedClan.rank}</span>
                  {selectedClan.permanentRole && (
                    <span className="gt-role-badge" style={{ background: `${ROLE_LABELS[selectedClan.permanentRole]?.color}22`, color: ROLE_LABELS[selectedClan.permanentRole]?.color, borderColor: `${ROLE_LABELS[selectedClan.permanentRole]?.color}44` }}>
                      {ROLE_LABELS[selectedClan.permanentRole]?.label}
                    </span>
                  )}
                  {selectedClan.canClaimThrone === false && !selectedClan.permanentRole && (
                    <span className="gt-role-badge" style={{ background: '#3E608022', color: '#7AABCC', borderColor: '#3E608044' }}>Cannot claim throne</span>
                  )}
                </div>
                {selectedClan.description && (
                  <div className="gt-clan-desc">{selectedClan.description}</div>
                )}
                {selectedClan.vassalOf && (
                  <div className="gt-vassal-note">
                    Vassal of {clans.find(c => c.id === selectedClan.vassalOf)?.name || selectedClan.vassalOf}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ color: 'var(--text-dim)', fontSize: 12, padding: '6px 0' }}>Seat is vacant</div>
            )}
            <button
              className="btn-small btn-secondary"
              style={{ width: '100%', marginTop: 8 }}
              onClick={() => setShowPicker(true)}
            >
              {selectedClan ? 'Change House' : 'Assign House'}
            </button>
          </div>

          {/* Weapon detail */}
          {selectedWeapon && (
            <div className="gt-section">
              <div className="gt-section-label">Noble Treasure</div>
              <div className="gt-weapon-card">
                <div className="gt-weapon-name"
                  style={{ color: WEAPON_FACTION_COLORS[selectedWeapon.faction] || '#4AAFE0' }}>
                  {selectedWeapon.name}
                </div>
                {selectedWeapon.designation && (
                  <div className="gt-weapon-desig">{selectedWeapon.designation}</div>
                )}
                <div className="gt-weapon-desc">{selectedWeapon.description}</div>

                {selectedWeapon.corrosion && (
                  <>
                    <div className="gt-corrosion-label">Corrosion</div>
                    <div className="gt-corrosion-text">{selectedWeapon.corrosion}</div>
                  </>
                )}

                {selectedWeapon.abilities?.length > 0 && (
                  <div className="gt-abilities">
                    <div className="gt-corrosion-label">Abilities ({selectedWeapon.abilities.length})</div>
                    {selectedWeapon.abilities.map((ab, i) => (
                      <div key={i} className="gt-ability-item">
                        <div className="gt-ability-name">{ab.name}</div>
                        <div className="gt-ability-desc">{ab.description}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )
    }

    // Roster or Weapons mode with nothing selected
    return (
      <div className="gt-empty-state">
        <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>◈</div>
        <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 6 }}>
          {viewMode === 'roster' ? 'Click a clan card to view details' : 'Click a weapon card to view details'}
        </div>
      </div>
    )
  }

  return (
    <div className="grand-table-view">
      {/* ── Left: Table SVG / Roster / Weapons ── */}
      <div className="grand-table-left">
        <div className="grand-table-hdr">
          <div>
            <div className="grand-table-title">
              <span className="gt-crown">◈</span> The Grand Table
            </div>
            <div className="grand-table-subtitle">18 Seats · 4 Grand Weapons · 50 Great Houses</div>
          </div>
          <div className="gt-view-toggle">
            <button
              className={`gt-view-btn${viewMode === 'ring' ? ' active' : ''}`}
              onClick={() => handleViewModeChange('ring')}
            >Ring</button>
            <button
              className={`gt-view-btn${viewMode === 'roster' ? ' active' : ''}`}
              onClick={() => handleViewModeChange('roster')}
            >Roster</button>
            <button
              className={`gt-view-btn${viewMode === 'weapons' ? ' active' : ''}`}
              onClick={() => handleViewModeChange('weapons')}
            >Weapons</button>
          </div>
        </div>

        {/* ── Ring mode: SVG ── */}
        {viewMode === 'ring' && (
          <>
            <div className="table-svg-wrap">
              <svg viewBox={`0 0 ${CW} ${CH}`} className="table-svg">
                {/* ── Faction arc bands (background) ── */}
                <path
                  d={`M ${TX} ${TY - TRY - 46} A ${TRX + 46} ${TRY + 46} 0 0 0 ${TX} ${TY + TRY + 46}`}
                  fill="none" stroke="#9B30FF" strokeWidth="8" strokeOpacity="0.15"
                  style={{ pointerEvents: 'none' }}
                />
                <path
                  d={`M ${TX} ${TY - TRY - 46} A ${TRX + 46} ${TRY + 46} 0 0 1 ${TX} ${TY + TRY + 46}`}
                  fill="none" stroke="#D4AF37" strokeWidth="8" strokeOpacity="0.15"
                  style={{ pointerEvents: 'none' }}
                />

                {/* ── Table surface ── */}
                <ellipse cx={TX} cy={TY} rx={TRX - 24} ry={TRY - 24}
                  fill="#0F2540" stroke="#2A4880" strokeWidth="2"
                  style={{ cursor: 'pointer' }}
                  onClick={handleTableClick}
                />
                <ellipse cx={TX} cy={TY} rx={TRX - 56} ry={TRY - 56}
                  fill="none" stroke="#1C3868" strokeWidth="1" strokeDasharray="4 6"
                  style={{ pointerEvents: 'none' }}
                />

                {/* ── Center emblem ── */}
                <text x={TX} y={TY + 10} textAnchor="middle" fill="#D4AF3733" fontSize="72"
                  fontFamily="Cinzel, serif" fontWeight="700" style={{ pointerEvents: 'none' }}>◈</text>
                <text x={TX} y={TY + 34} textAnchor="middle" fill="#3E6080" fontSize="11"
                  fontFamily="Cinzel, serif" letterSpacing="4" style={{ pointerEvents: 'none' }}>THE GRAND TABLE</text>
                <text x={TX} y={TY + 52} textAnchor="middle" fill="#2A4060" fontSize="9"
                  fontFamily="Inter, sans-serif" style={{ pointerEvents: 'none' }}>click to read the covenants</text>

                {/* ── Faction labels ── */}
                <text x={TX - TRX - 18} y={TY + 6} textAnchor="end" fill="#9B30FF66" fontSize="10"
                  fontFamily="Inter, sans-serif" letterSpacing="2" style={{ pointerEvents: 'none' }}>DURAKI</text>
                <text x={TX + TRX + 18} y={TY + 6} textAnchor="start" fill="#D4AF3766" fontSize="10"
                  fontFamily="Inter, sans-serif" letterSpacing="2" style={{ pointerEvents: 'none' }}>CELESTIAL</text>

                {/* ── Divider lines ── */}
                <line x1={TX} y1={TY - TRY - 38} x2={TX} y2={EMPEROR_POS.y + 50}
                  stroke="#D4AF3722" strokeWidth="1" strokeDasharray="3 5" style={{ pointerEvents: 'none' }} />
                <line x1={TX} y1={TY + TRY + 38} x2={TX} y2={KING_POS.y - 50}
                  stroke="#D4AF3722" strokeWidth="1" strokeDasharray="3 5" style={{ pointerEvents: 'none' }} />

                {/* ── All seats ── */}
                {allSeatPositions.map(seat => {
                  const clan     = getClan(seat.seatId)
                  const weapon   = getWeapon(seat.weaponId)
                  const isSelected = seat.seatId === selectedSeatId
                  const color = seat.special
                    ? (seat.specialRole === 'emperor' ? '#D4AF37' : '#E84855')
                    : (weapon ? WEAPON_FACTION_COLORS[weapon.faction] || '#4AAFE0' : '#3E6080')
                  const r = seat.special ? 40 : 32

                  const clanAbbr = clan
                    ? (() => {
                        const words = (clan.name || '').split(' ').filter(Boolean)
                        if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
                        return (words[0][0] + words[words.length - 1][0]).toUpperCase()
                      })()
                    : null

                  const dx = seat.x - TX
                  const dy = seat.y - TY
                  const dist = Math.sqrt(dx * dx + dy * dy) || 1
                  const labelDist = r + 16
                  const lx = seat.x + (dx / dist) * labelDist
                  const ly = seat.y + (dy / dist) * labelDist

                  return (
                    <g key={seat.seatId}
                      className="table-seat-group"
                      transform={`translate(${seat.x},${seat.y})`}
                      onClick={() => handleSeatClick(seat.seatId)}
                      style={{ cursor: 'pointer' }}
                    >
                      {isSelected && (
                        <circle r={r + 10} fill="none" stroke={color} strokeWidth="2" opacity="0.4">
                          <animate attributeName="r" from={r + 8} to={r + 16} dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle
                        r={r}
                        fill={isSelected ? `${color}22` : (clan ? '#162E50' : '#0F2540')}
                        stroke={color}
                        strokeWidth={isSelected ? 3 : (clan ? 2 : 1.2)}
                        opacity={clan ? 1 : 0.55}
                      />
                      <text textAnchor="middle" dy={clan ? "5" : "5"} fill={color}
                        fontSize={seat.special ? "17" : (clan ? "13" : "14")}
                        fontFamily="Cinzel, serif" fontWeight="700">
                        {clan ? clanAbbr : (seat.special ? '◈' : '·')}
                      </text>

                      {clan && (
                        <text textAnchor="middle" dy={r + 16} fill={color}
                          fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">
                          {clan.name.length > 15 ? clan.name.slice(0, 14) + '…' : clan.name}
                        </text>
                      )}

                      {weapon && !seat.special && !clan && (
                        <text
                          x={lx - seat.x} y={ly - seat.y}
                          textAnchor="middle" dominantBaseline="middle"
                          fontSize="8" fill={color} fillOpacity={0.7}
                          fontFamily="Inter, sans-serif"
                          style={{ pointerEvents: 'none' }}
                        >
                          {weapon.name.length > 13 ? weapon.name.slice(0, 12) + '…' : weapon.name}
                        </text>
                      )}

                      {!clan && !weapon && !seat.special && (
                        <text textAnchor="middle" dy={r + 15} fill="#3E6080"
                          fontSize="8" fontFamily="Inter, sans-serif">
                          {seat.label}
                        </text>
                      )}

                      {weapon && !seat.special && clan && (
                        <circle cx={r - 6} cy={-(r - 6)} r="5"
                          fill={WEAPON_FACTION_COLORS[weapon.faction] || '#4AAFE0'}
                          stroke="#0B1E33" strokeWidth="1.2" />
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="table-legend">
              <div className="legend-item"><span className="legend-dot" style={{ background: '#9B30FF' }} />Duraki</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#D4AF37' }} />Celestial</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#E84855' }} />Imperial</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#3E6080' }} />Vacant</div>
            </div>
          </>
        )}

        {/* ── Roster mode ── */}
        {viewMode === 'roster' && (
          <div className="roster-scroll">
            <RosterView
              clans={clans}
              onSelectClan={(clan) => setRosterSelectedClan(clan)}
            />
          </div>
        )}

        {/* ── Weapons mode ── */}
        {viewMode === 'weapons' && (
          <div className="roster-scroll">
            <WeaponsView
              weapons={weapons}
              onSelectWeapon={(weapon) => setSelectedWeaponDirectId(weapon.id)}
            />
          </div>
        )}
      </div>

      {/* ── Middle: covenant law / seat detail / roster detail / weapon detail ── */}
      <div className="grand-table-mid">
        {renderMidPanel()}
      </div>

      {/* ── Right: House manager ── */}
      <div className="grand-table-right">
        <div className="gt-clan-mgr-hdr">
          <div className="gt-clan-mgr-title">
            Great Houses
            <span className="gt-house-total">{clans.length} / 50</span>
          </div>
          <div className="gt-rank-tabs">
            {rankOrder.map(k => (
              <button
                key={k}
                className={`gt-rank-tab${clanTab === k ? ' active' : ''}`}
                style={clanTab === k ? { color: CLAN_RANK_COLORS[k], borderBottomColor: CLAN_RANK_COLORS[k] } : {}}
                onClick={() => setClanTab(k)}
              >
                {{ empiric: 'Empiric', royal: 'Royal', grand: 'Grand', noble: 'Noble', great: 'Great' }[k]}
                {' '}({clans.filter(c => c.rank === k).length})
              </button>
            ))}
          </div>
        </div>

        <div className="gt-clan-list">
          {clansForTab.length === 0 && (
            <div className="lib-empty-hint">No {CLAN_RANKS[clanTab]} houses yet.</div>
          )}

          {clansForTab.map(clan =>
            editingClan?.id === clan.id ? (
              <div key={clan.id} className="gt-clan-edit-form">
                <input className="field-input" style={{ marginBottom: 6 }}
                  value={editingClan.name}
                  onChange={e => setEditingClan(d => ({ ...d, name: e.target.value }))}
                  placeholder="House name…"
                />
                <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                  <input type="color" value={editingClan.color || '#4AAFE0'}
                    onChange={e => setEditingClan(d => ({ ...d, color: e.target.value }))}
                    style={{ width: 36, height: 28, padding: 2, borderRadius: 5, border: '1px solid var(--border)', cursor: 'pointer', background: 'var(--card)' }}
                  />
                  <select className="field-select" style={{ flex: 1 }} value={editingClan.rank}
                    onChange={e => setEditingClan(d => ({ ...d, rank: e.target.value }))}>
                    {rankOrder.map(k => <option key={k} value={k}>{CLAN_RANKS[k] || k}</option>)}
                  </select>
                </div>
                <textarea className="field-textarea" style={{ minHeight: 50, marginBottom: 6 }}
                  value={editingClan.description || ''}
                  onChange={e => setEditingClan(d => ({ ...d, description: e.target.value }))}
                  placeholder="Description…"
                />
                <div style={{ display: 'flex', gap: 6 }}>
                  <button className="btn-small btn-primary" onClick={() => handleSaveClanEdit(editingClan)}>Save</button>
                  <button className="btn-small btn-secondary" onClick={() => setEditingClan(null)}>Cancel</button>
                </div>
              </div>
            ) : (
              <div key={clan.id} className="gt-clan-row"
                style={{ borderLeftColor: clan.color || CLAN_RANK_COLORS[clanTab] }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="gt-clan-row-name" style={{ color: clan.color || CLAN_RANK_COLORS[clanTab] }}>
                    {clan.name || '(unnamed)'}
                    {clan.permanentRole && (
                      <span className="gt-row-role-badge" style={{ color: ROLE_LABELS[clan.permanentRole]?.color }}>
                        {ROLE_LABELS[clan.permanentRole]?.label}
                      </span>
                    )}
                  </div>
                  {clan.seatId && (
                    <div className="gt-clan-row-seat">
                      {TABLE_SEATS.find(s => s.seatId === clan.seatId)?.label || clan.seatId}
                    </div>
                  )}
                  {clan.vassalOf && (
                    <div className="gt-clan-row-seat" style={{ color: '#9A6A3A' }}>
                      Vassal · {clans.find(c => c.id === clan.vassalOf)?.name || clan.vassalOf}
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                  {rankOrder.indexOf(clanTab) > 0 && (
                    <button className="gt-rank-up-btn" title="Promote"
                      onClick={() => handlePromoteClan(clan, rankOrder[rankOrder.indexOf(clanTab) - 1])}>
                      ↑
                    </button>
                  )}
                  {rankOrder.indexOf(clanTab) < rankOrder.length - 1 && (
                    <button className="gt-rank-up-btn" title="Demote"
                      onClick={() => handlePromoteClan(clan, rankOrder[rankOrder.indexOf(clanTab) + 1])}>
                      ↓
                    </button>
                  )}
                  <button className="gt-rank-up-btn" onClick={() => setEditingClan({ ...clan })}>✎</button>
                  <button className="rel-delete-btn" onClick={() => handleDeleteClan(clan.id)}>✕</button>
                </div>
              </div>
            )
          )}

          {newClanDraft && newClanDraft.rank === clanTab && (
            <div className="gt-clan-edit-form">
              <input className="field-input" style={{ marginBottom: 6 }}
                value={newClanDraft.name}
                onChange={e => setNewClanDraft(d => ({ ...d, name: e.target.value }))}
                placeholder="House name…" autoFocus
              />
              <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                <input type="color" value={newClanDraft.color}
                  onChange={e => setNewClanDraft(d => ({ ...d, color: e.target.value }))}
                  style={{ width: 36, height: 28, padding: 2, borderRadius: 5, border: '1px solid var(--border)', cursor: 'pointer', background: 'var(--card)' }}
                />
                <select className="field-select" style={{ flex: 1 }} value={newClanDraft.rank}
                  onChange={e => setNewClanDraft(d => ({ ...d, rank: e.target.value }))}>
                  {rankOrder.map(k => <option key={k} value={k}>{CLAN_RANKS[k]}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button className="btn-small btn-primary" onClick={handleSaveNewClan}>Add</button>
                <button className="btn-small btn-secondary" onClick={() => setNewClanDraft(null)}>Cancel</button>
              </div>
            </div>
          )}
        </div>

        <div className="gt-clan-footer">
          <button className="lib-new-btn" onClick={handleCreateClan}>
            + New {CLAN_RANKS[clanTab]}
          </button>
        </div>
      </div>

      {showPicker && (
        <ClanPicker
          clans={unseatedClans}
          onAssign={handleAssignClan}
          onClose={() => setShowPicker(false)}
        />
      )}
    </div>
  )
}
