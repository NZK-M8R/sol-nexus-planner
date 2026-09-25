import { useState, useMemo } from 'react'
import { CLAN_RANKS, CLAN_RANK_COLORS, defaultClans } from '../data/clans'
import { WEAPON_FACTION_COLORS } from '../data/weapons'
import {
  GRAND_TABLE_NODES, GRAND_TABLE_SUB_NODES, RIGHT_LEFT_HAND_SEAT_IDS,
  defaultGrandTableAssignments,
} from '../data/grandCouncil'

// SVG canvas dimensions
const CW = 1100, CH = 900
const CX = 550, CY = 450
const INNER_R = 250 // 8 compass seats
const OUTER_R = 400 // 12 sub-item nodes (arced around the 4 corners)

// Compass angle map (SVG: 0deg = +x/right, 90deg = +y/down)
const COMPASS_ANGLE = {
  N: -90, NE: -45, E: 0, SE: 45, S: 90, SW: 135, W: 180, NW: -135,
}

// Roster section membership (old 50-house registry, kept as a secondary view)
const GRAND_PILLAR_SEAT_IDS = ['seat-wov', 'seat-osiro', 'seat-lucerne', 'seat-seraph', 'seat-emperor', 'seat-king']
const PRIMAL_CLAN_IDS = ['more', 'prescian', 'revyn']
const EARTH_GUARDIAN_IDS = ['surya', 'oba', 'long', 'ouranos', 'rongo', 'wakan']

// Weapons view sections
const VRAK_BEAST_IDS    = ['ruin-beast', 'eclipse-beast', 'erasure-beast']
const SELIS_TOOL_IDS    = ['sovas-chain', 'keths-brand', 'tevans-edict']
const HIDDEN_WEAPON_IDS = ['stellar-beast', 'wane-beast', 'root-beast', 'drift-tool', 'echo-tool', 'seal-tool']

const ROLE_LABELS = {
  enforcer:       { label: 'Enforcer',       color: '#D4AF37' },
  treasurer:      { label: 'Treasurer',       color: '#2E7A3E' },
  inquisitor:     { label: 'Inquisitor',      color: '#9b5de5' },
  'morning-star': { label: 'Morning-Star',    color: '#D4460A' },
  'spirit-bearer':{ label: 'Spirit Bearer',   color: '#C8C0FF' },
}

// Compute pixel positions for the 8 compass nodes + 12 outer sub-nodes
function getCompassPositions() {
  return GRAND_TABLE_NODES.map(node => {
    const rad = (COMPASS_ANGLE[node.compass] * Math.PI) / 180
    return { ...node, x: CX + INNER_R * Math.cos(rad), y: CY + INNER_R * Math.sin(rad) }
  })
}

function getSubNodePositions() {
  // Group sub-nodes by parent, spread each trio across a small arc centered on the parent's compass angle
  const byParent = {}
  GRAND_TABLE_SUB_NODES.forEach(sn => {
    if (!byParent[sn.parent]) byParent[sn.parent] = []
    byParent[sn.parent].push(sn)
  })
  const out = []
  Object.entries(byParent).forEach(([parentId, subs]) => {
    const parentNode = GRAND_TABLE_NODES.find(n => n.nodeId === parentId)
    const baseAngle = COMPASS_ANGLE[parentNode.compass]
    const spread = 26 // degrees total arc
    subs.forEach((sn, i) => {
      const t = subs.length === 1 ? 0 : (i / (subs.length - 1)) - 0.5
      const angle = baseAngle + t * spread
      const rad = (angle * Math.PI) / 180
      out.push({ ...sn, x: CX + OUTER_R * Math.cos(rad), y: CY + OUTER_R * Math.sin(rad) })
    })
  })
  return out
}

function ClanPicker({ clans, onAssign, onClose, title = 'Assign House' }) {
  const [search, setSearch] = useState('')
  const filtered = clans.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="clan-picker-overlay" onClick={onClose}>
      <div className="clan-picker" onClick={e => e.stopPropagation()}>
        <div className="clan-picker-hdr">
          <span>{title}</span>
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

// ── Roster View (old 50-house registry, kept as a secondary sub-view) ─────────
function RosterView({ clans, onSelectClan }) {
  const grandPillarClans = clans.filter(c =>
    c.seatId && GRAND_PILLAR_SEAT_IDS.includes(c.seatId)
  )
  const primalClans = clans.filter(c => PRIMAL_CLAN_IDS.includes(c.id))
  const earthGuardians = clans.filter(c => EARTH_GUARDIAN_IDS.includes(c.id))
  const allOthers = clans.filter(c =>
    !grandPillarClans.includes(c) && !primalClans.includes(c) && !earthGuardians.includes(c)
  )

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
      <div className="gt-roster-intro">
        The Great House registry — {clans.length} houses. This is the app's full house/clan
        roster, kept accessible here as reference and management infrastructure. It is no
        longer the Grand Table's primary visual; see the Ring view for the current 20-node table.
      </div>
      {renderSection('Grand Pillar Houses', grandPillarClans)}
      {renderSection('Primal Houses', primalClans)}
      {renderSection('Earth Guardian Houses (Hidden)', earthGuardians)}
      {renderSection('All Other Houses', allOthers)}
    </div>
  )
}

// ── Weapons View (unchanged) ─────────────────────────────────────────────────
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

export default function GrandTable({ weapons, clans, characters, onSaveClans, tableAssignments, onSaveTableAssignments }) {
  const [viewMode, setViewMode]             = useState('ring')
  const [selectedNodeId, setSelectedNodeId] = useState(null)
  const [showPicker, setShowPicker]         = useState(null) // 'seat' | 'right' | 'left' | null
  const [clanTab, setClanTab]               = useState('grand')
  const [editingClan, setEditingClan]       = useState(null)
  const [newClanDraft, setNewClanDraft]     = useState(null)
  const [rosterSelectedClan, setRosterSelectedClan] = useState(null)
  const [selectedWeaponDirectId, setSelectedWeaponDirectId] = useState(null)

  const assignments = tableAssignments || defaultGrandTableAssignments

  const compassPositions = useMemo(() => getCompassPositions(), [])
  const subNodePositions = useMemo(() => getSubNodePositions(), [])

  const getCharacter = (id) => id ? characters.find(c => c.id === id) : null
  const getWeapon     = (id) => id ? weapons.find(w => w.id === id) : null
  const getClan       = (id) => id ? clans.find(c => c.id === id) : null

  const selectedNode = selectedNodeId ? GRAND_TABLE_NODES.find(n => n.nodeId === selectedNodeId) : null
  const selectedSub  = selectedNodeId ? GRAND_TABLE_SUB_NODES.find(n => n.subNodeId === selectedNodeId) : null

  const handleNodeClick = (nodeId) => {
    setSelectedNodeId(prev => prev === nodeId ? null : nodeId)
  }

  const handleAssignSeatClan = (clanId) => {
    if (!selectedNode) return
    onSaveTableAssignments({
      ...assignments,
      [selectedNode.nodeId]: { ...(assignments[selectedNode.nodeId] || {}), clanId },
    })
    setShowPicker(null)
  }

  const handleAssignHand = (side, clanId) => {
    if (!selectedNode) return
    const key = side === 'right' ? 'rightHandClanId' : 'leftHandClanId'
    onSaveTableAssignments({
      ...assignments,
      [selectedNode.nodeId]: { ...(assignments[selectedNode.nodeId] || {}), [key]: clanId },
    })
    setShowPicker(null)
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
    setSelectedNodeId(null)
  }

  const clansForTab  = clans.filter(c => c.rank === clanTab)
  const rankOrder = ['empiric', 'royal', 'grand', 'noble', 'great']

  // ── Middle panel content resolver ──────────────────────────────────────────
  const renderMidPanel = () => {
    if (viewMode === 'weapons' && selectedWeaponDirectId) {
      const w = getWeapon(selectedWeaponDirectId)
      if (!w) return null
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

    // Ring mode: sub-node detail (weapon-only)
    if (viewMode === 'ring' && selectedSub) {
      const w = getWeapon(selectedSub.weaponId)
      return (
        <div className="gt-seat-detail">
          <div className="gt-seat-hdr">
            <div className="gt-seat-label" style={{ color: selectedSub.color }}>{w?.name || selectedSub.subNodeId}</div>
            <div className="gt-special-badge">Sub-Item</div>
          </div>
          {w && (
            <div className="gt-section">
              <div className="gt-weapon-card">
                <div className="gt-weapon-name" style={{ color: selectedSub.color }}>{w.name}</div>
                {w.designation && <div className="gt-weapon-desig">{w.designation}</div>}
                <div className="gt-weapon-desc">{w.description}</div>
                {w.corrosion && (
                  <>
                    <div className="gt-corrosion-label">Corrosion</div>
                    <div className="gt-corrosion-text">{w.corrosion}</div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )
    }

    // Ring mode: main 8-node detail
    if (viewMode === 'ring') {
      if (!selectedNode) {
        return (
          <div className="gt-empty-state">
            <div style={{ fontSize: 32, marginBottom: 12, opacity: 0.3 }}>◈</div>
            <div style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 6 }}>Click a compass seat to view details</div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', opacity: 0.6 }}>the 4 corner entities' 3 sub-items orbit them on the outer ring</div>
          </div>
        )
      }
      const node = selectedNode
      const weapon = getWeapon(node.weaponId)
      const character = getCharacter(node.characterId)
      const seatAssignment = assignments[node.nodeId] || {}
      const assignedClan = getClan(seatAssignment.clanId)
      const rightHandClan = getClan(seatAssignment.rightHandClanId)
      const leftHandClan  = getClan(seatAssignment.leftHandClanId)
      const unassignedClans = clans

      return (
        <div className="gt-seat-detail">
          <div className="gt-seat-hdr">
            <div className="gt-seat-label" style={{ color: node.color }}>{node.label}</div>
            {node.subtitle && <div className="gt-special-badge">{node.subtitle}</div>}
          </div>

          {node.boundNote && (
            <div className="gt-section">
              <div className="gt-vassal-note" style={{ fontSize: 11 }}>{node.boundNote}</div>
            </div>
          )}

          {/* Fixed character (Irane / Arai) */}
          {node.kind === 'fixed-character' && character && (
            <div className="gt-section">
              <div className="gt-section-label">Permanent — Not Assignable</div>
              <div className="gt-clan-card" style={{ borderLeftColor: node.color }}>
                <div className="gt-clan-name" style={{ color: node.color }}>{character.name}</div>
                {character.epithet && <div style={{ fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 6 }}>{character.epithet}</div>}
                {character.role && <div className="gt-clan-desc">{character.role}</div>}
              </div>
            </div>
          )}

          {/* Assignable seat (King's Throne / Blade Terminus holder) */}
          {node.kind === 'assignable' && (
            <div className="gt-section">
              <div className="gt-section-label">Assigned House</div>
              {assignedClan ? (
                <div className="gt-clan-card" style={{ borderLeftColor: assignedClan.color || node.color }}>
                  <div className="gt-clan-name" style={{ color: assignedClan.color || node.color }}>{assignedClan.name}</div>
                  <div className="gt-clan-rank">{CLAN_RANKS[assignedClan.rank] || assignedClan.rank}</div>
                  {assignedClan.description && <div className="gt-clan-desc">{assignedClan.description.slice(0, 220)}{assignedClan.description.length > 220 ? '…' : ''}</div>}
                </div>
              ) : (
                <div style={{ color: 'var(--text-dim)', fontSize: 12, padding: '6px 0' }}>Seat is vacant</div>
              )}
              <button className="btn-small btn-secondary" style={{ width: '100%', marginTop: 8 }} onClick={() => setShowPicker('seat')}>
                {assignedClan ? 'Change House' : 'Assign House'}
              </button>
            </div>
          )}

          {/* Right Hand / Left Hand — the 4 main seats only */}
          {node.hasHands && (
            <div className="gt-section">
              <div className="gt-section-label">Right Hand / Left Hand</div>
              <div className="gt-hand-row">
                <div className="gt-hand-col">
                  <div className="gt-hand-label">Right Hand</div>
                  {rightHandClan ? (
                    <div className="gt-hand-chip" style={{ borderColor: rightHandClan.color || '#4AAFE0', color: rightHandClan.color || '#4AAFE0' }}>
                      {rightHandClan.name}
                    </div>
                  ) : (
                    <div className="gt-hand-chip gt-hand-chip--empty">Unassigned</div>
                  )}
                  <button className="btn-small btn-secondary" onClick={() => setShowPicker('right')}>
                    {rightHandClan ? 'Change' : 'Assign'}
                  </button>
                </div>
                <div className="gt-hand-col">
                  <div className="gt-hand-label">Left Hand</div>
                  {leftHandClan ? (
                    <div className="gt-hand-chip" style={{ borderColor: leftHandClan.color || '#4AAFE0', color: leftHandClan.color || '#4AAFE0' }}>
                      {leftHandClan.name}
                    </div>
                  ) : (
                    <div className="gt-hand-chip gt-hand-chip--empty">Unassigned</div>
                  )}
                  <button className="btn-small btn-secondary" onClick={() => setShowPicker('left')}>
                    {leftHandClan ? 'Change' : 'Assign'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Weapon / sealed-entity detail */}
          {weapon && (
            <div className="gt-section">
              <div className="gt-section-label">{node.kind === 'sealed-entity' ? 'Bound Weapon' : 'Noble Treasure'}</div>
              <div className="gt-weapon-card">
                <div className="gt-weapon-name" style={{ color: WEAPON_FACTION_COLORS[weapon.faction] || node.color }}>
                  {weapon.name}
                </div>
                {weapon.designation && <div className="gt-weapon-desig">{weapon.designation}</div>}
                <div className="gt-weapon-desc">{weapon.description}</div>
                {weapon.corrosion && (
                  <>
                    <div className="gt-corrosion-label">Corrosion</div>
                    <div className="gt-corrosion-text">{weapon.corrosion}</div>
                  </>
                )}
              </div>
            </div>
          )}

          {showPicker && (
            <ClanPicker
              clans={unassignedClans}
              title={showPicker === 'seat' ? 'Assign House to Seat' : showPicker === 'right' ? 'Assign Right Hand' : 'Assign Left Hand'}
              onAssign={(clanId) => showPicker === 'seat' ? handleAssignSeatClan(clanId) : handleAssignHand(showPicker, clanId)}
              onClose={() => setShowPicker(null)}
            />
          )}
        </div>
      )
    }

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
            <div className="grand-table-subtitle">20 Nodes · Compass Layout · 4 Assignable Seats</div>
          </div>
          <div className="gt-view-toggle">
            <button className={`gt-view-btn${viewMode === 'ring' ? ' active' : ''}`} onClick={() => handleViewModeChange('ring')}>Ring</button>
            <button className={`gt-view-btn${viewMode === 'roster' ? ' active' : ''}`} onClick={() => handleViewModeChange('roster')}>Roster</button>
            <button className={`gt-view-btn${viewMode === 'weapons' ? ' active' : ''}`} onClick={() => handleViewModeChange('weapons')}>Weapons</button>
          </div>
        </div>

        {/* ── Ring mode: SVG ── */}
        {viewMode === 'ring' && (
          <>
            <div className="table-svg-wrap">
              <svg viewBox={`0 0 ${CW} ${CH}`} className="table-svg">
                {/* Compass cross guides */}
                <line x1={CX} y1={CY - OUTER_R - 30} x2={CX} y2={CY + OUTER_R + 30} stroke="#1C3868" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
                <line x1={CX - OUTER_R - 30} y1={CY} x2={CX + OUTER_R + 30} y2={CY} stroke="#1C3868" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />

                {/* Inner ring circle */}
                <circle cx={CX} cy={CY} r={INNER_R} fill="none" stroke="#1C3868" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
                {/* Outer ring circle */}
                <circle cx={CX} cy={CY} r={OUTER_R} fill="none" stroke="#152A44" strokeWidth="1" strokeDasharray="2 8" opacity="0.35" />

                {/* Center emblem */}
                <text x={CX} y={CY + 8} textAnchor="middle" fill="#D4AF3733" fontSize="60" fontFamily="Cinzel, serif" fontWeight="700" style={{ pointerEvents: 'none' }}>◈</text>
                <text x={CX} y={CY + 30} textAnchor="middle" fill="#3E6080" fontSize="10" fontFamily="Cinzel, serif" letterSpacing="4" style={{ pointerEvents: 'none' }}>THE GRAND TABLE</text>

                {/* Lines connecting sub-nodes to their parent corner */}
                {subNodePositions.map(sn => {
                  const parent = compassPositions.find(p => p.nodeId === sn.parent)
                  if (!parent) return null
                  return (
                    <line key={`ln-${sn.subNodeId}`} x1={parent.x} y1={parent.y} x2={sn.x} y2={sn.y}
                      stroke={sn.color} strokeWidth="1" strokeOpacity="0.25" style={{ pointerEvents: 'none' }} />
                  )
                })}

                {/* 12 outer sub-nodes */}
                {subNodePositions.map(sn => {
                  const w = getWeapon(sn.weaponId)
                  const isSelected = sn.subNodeId === selectedNodeId
                  const r = 22
                  return (
                    <g key={sn.subNodeId} className="table-seat-group"
                      transform={`translate(${sn.x},${sn.y})`}
                      onClick={() => handleNodeClick(sn.subNodeId)}
                      style={{ cursor: 'pointer' }}
                    >
                      {isSelected && (
                        <circle r={r + 8} fill="none" stroke={sn.color} strokeWidth="2" opacity="0.4">
                          <animate attributeName="r" from={r + 6} to={r + 14} dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle r={r} fill={isSelected ? `${sn.color}22` : '#0F2540'} stroke={sn.color}
                        strokeWidth={isSelected ? 3 : 1.4} opacity={0.9} />
                      <text textAnchor="middle" dy="4" fill={sn.color} fontSize="11" fontFamily="Cinzel, serif" fontWeight="700">·</text>
                      <text textAnchor="middle" dy={r + 13} fill={sn.color} fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600" fillOpacity="0.85">
                        {w?.name ? (w.name.length > 16 ? w.name.slice(0, 15) + '…' : w.name) : sn.subNodeId}
                      </text>
                    </g>
                  )
                })}

                {/* 8 inner compass nodes */}
                {compassPositions.map(node => {
                  const isSelected = node.nodeId === selectedNodeId
                  const seatAssignment = assignments[node.nodeId] || {}
                  const assignedClan = getClan(seatAssignment.clanId)
                  const character = getCharacter(node.characterId)
                  const r = 44
                  const displayLabel = node.kind === 'fixed-character'
                    ? (character?.name?.split(' ')[0] || node.label)
                    : node.kind === 'assignable'
                      ? (assignedClan ? assignedClan.name : node.label)
                      : node.label

                  return (
                    <g key={node.nodeId} className="table-seat-group"
                      transform={`translate(${node.x},${node.y})`}
                      onClick={() => handleNodeClick(node.nodeId)}
                      style={{ cursor: 'pointer' }}
                    >
                      {isSelected && (
                        <circle r={r + 10} fill="none" stroke={node.color} strokeWidth="2" opacity="0.4">
                          <animate attributeName="r" from={r + 8} to={r + 18} dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}
                      <circle r={r} fill={isSelected ? `${node.color}22` : '#0F2540'} stroke={node.color}
                        strokeWidth={isSelected ? 3 : 2} opacity={1} />
                      <text textAnchor="middle" dy="6" fill={node.color} fontSize="18" fontFamily="Cinzel, serif" fontWeight="700">
                        {node.compass}
                      </text>
                      <text textAnchor="middle" dy={r + 18} fill={node.color} fontSize="10" fontFamily="Inter, sans-serif" fontWeight="700">
                        {displayLabel.length > 20 ? displayLabel.slice(0, 19) + '…' : displayLabel}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            <div className="table-legend">
              <div className="legend-item"><span className="legend-dot" style={{ background: '#D4AF37' }} />Kazemi Gold</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#8FA5BD' }} />More Silver-Blue</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#C9A227' }} />Father Time</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#2D8F4E' }} />Mother Nature</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#6B1FB8' }} />Vraka</div>
              <div className="legend-item"><span className="legend-dot" style={{ background: '#C8C0FF' }} />Selis</div>
            </div>
          </>
        )}

        {/* ── Roster mode ── */}
        {viewMode === 'roster' && (
          <div className="roster-scroll">
            <RosterView clans={clans} onSelectClan={(clan) => setRosterSelectedClan(clan)} />
          </div>
        )}

        {/* ── Weapons mode ── */}
        {viewMode === 'weapons' && (
          <div className="roster-scroll">
            <WeaponsView weapons={weapons} onSelectWeapon={(weapon) => setSelectedWeaponDirectId(weapon.id)} />
          </div>
        )}
      </div>

      {/* ── Middle: seat detail / roster detail / weapon detail ── */}
      <div className="grand-table-mid">
        {renderMidPanel()}
      </div>

      {/* ── Right: House manager (only meaningful in Roster context, but kept always-visible for management) ── */}
      <div className="grand-table-right">
        <div className="gt-clan-mgr-hdr">
          <div className="gt-clan-mgr-title">
            Great Houses
            <span className="gt-house-total">{clans.length}</span>
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
    </div>
  )
}
