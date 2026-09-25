import { useState, useMemo } from 'react'
import { WEAPON_FACTIONS, WEAPON_FACTION_COLORS, WEAPON_CATEGORIES } from '../data/weapons'
import { BEAST_TIERS, BEAST_TIER_COLORS } from '../data/beasts'
import {
  PRIMAL_ELEMENTS, CATALYST_ELEMENTS, ELEMENT_COMBINATIONS,
  MANA_POLARITIES,
  defaultElementSpells, SPELL_TIER_COLORS,
} from '../data/elements'

const WEAPON_GROUPS = [
  { key: 'grand_house',  label: 'Grand House Weapons',          color: '#E84855', filter: w => w.category === 'Grand House Weapon' },
  { key: 'selis_tools',  label: 'Selis Tools — Seats IV–VI',    color: '#D4AF37', filter: w => w.category === 'Noble Treasure' && w.faction === 'celestial' },
  { key: 'cronus_tools', label: 'Hidden — Cronus\'s Tools',     color: '#00b4d8', filter: w => w.category === 'Hidden Treasure' && w.id.endsWith('-tool') },
  { key: 'kazemi_forge', label: 'Kazemi — Forge Class',         color: '#4AAFE0', filter: w => w.category === 'Forge Class' },
  { key: 'kazemi_asc',   label: 'Kazemi — Ascended Class',      color: '#4AAFE0', filter: w => w.category === 'Custom' && w.faction === 'kazemi' },
  { key: 'mana_born',    label: 'Mana-Born',                    color: '#C75FCF', filter: w => w.category === 'Mana-Born' },
  { key: 'special',      label: 'Special Class',                color: '#7AABCC', filter: w => w.category === 'Special Class' },
  { key: 'unset',        label: 'Unset — Awaiting Assignment',  color: '#555',    filter: w => w.category === 'Unset' },
]

// source:'weapons' groups pull from filteredWeapons, not filteredBeasts
const BEAST_GROUPS = [
  { key: 'vraka_beasts', label: 'Vraka Beasts — Seats I–III',  color: '#9B30FF', source: 'weapons', filter: w => w.category === 'Noble Treasure' && w.faction === 'duraki' },
  { key: 'gaia_beasts',  label: 'Gaia\'s Beasts — Hidden',     color: '#56A55A', source: 'weapons', filter: w => w.category === 'Hidden Treasure' && w.id.endsWith('-beast') },
  { key: 'primal',       label: 'Primal — Independent',        color: '#4AAFE0', filter: b => b.id === 'enari' },
  { key: 'kaz_heads',    label: 'Kazemi Heads — Personal',     color: '#C75FCF', filter: b => ['arai', 'hope', 'zoe'].includes(b.owner) },
  { key: 'kaz_val',      label: 'Kazemi Valariyan — Ascended', color: '#9B30FF', filter: b => b.id !== 'enari' && !['arai', 'hope', 'zoe'].includes(b.owner) },
]

const LIB_TABS = ['Weapons & Tools', 'Aura Beasts', 'Elements']

const EMPTY_WEAPON = {
  id: '', name: '', category: 'Force Tool', faction: 'none',
  seat: null, designation: '', description: '', corrosion: '',
  abilities: [], currentHolder: null, notes: '',
}

const EMPTY_BEAST = {
  id: '', name: '', type: '', tier: 'standard',
  element: '', description: '', abilities: [], owner: null, notes: '',
}

export default function Library({ weapons, beasts, characters, onSaveWeapons, onSaveBeasts }) {
  const [tab, setTab] = useState('Weapons & Tools')
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(null)
  const [draft, setDraft] = useState(null)
  const [isNew, setIsNew] = useState(false)
  const [selectedElementId, setSelectedElementId] = useState(null)
  const [layoutMode, setLayoutMode] = useState('grid') // 'grid' (overview cards) | 'list' (compact, for editing)

  const isWeapon  = tab === 'Weapons & Tools'
  const isElement = tab === 'Elements'

  const filteredWeapons = useMemo(() => {
    const q = search.toLowerCase()
    return weapons.filter(w => !q || w.name.toLowerCase().includes(q) || (w.faction || '').toLowerCase().includes(q) || (w.category || '').toLowerCase().includes(q))
  }, [weapons, search])

  const filteredBeasts = useMemo(() => {
    const q = search.toLowerCase()
    return beasts.filter(b => !q || b.name.toLowerCase().includes(q) || (b.type || '').toLowerCase().includes(q))
  }, [beasts, search])

  const items = isWeapon ? filteredWeapons : filteredBeasts
  const groups = isWeapon ? WEAPON_GROUPS : BEAST_GROUPS
  // weapon-source beast groups (Vraka / Gaia) pull from filteredWeapons when on beast tab
  const weaponBeastExtra = !isWeapon
    ? BEAST_GROUPS.filter(g => g.source === 'weapons').reduce((n, g) => n + filteredWeapons.filter(g.filter).length, 0)
    : 0
  const totalFiltered = items.length + weaponBeastExtra

  const [collapsedGroups, setCollapsedGroups] = useState(new Set())
  const toggleGroup = (key) => setCollapsedGroups(prev => {
    const next = new Set(prev)
    if (next.has(key)) next.delete(key); else next.add(key)
    return next
  })

  // Vraka/Gaia beast groups are sourced from `weapons` even while viewing the Aura Beasts tab,
  // so a selected id might not exist in `beasts` at all — fall back to `weapons` in that case.
  const selectedFromBeasts = !isWeapon ? beasts.find(b => b.id === selectedId) : null
  const selectedFromWeapons = weapons.find(w => w.id === selectedId)
  const selected = isWeapon ? selectedFromWeapons : (selectedFromBeasts || selectedFromWeapons)
  const selectedIsWeaponShaped = isWeapon || (!!selected && !selectedFromBeasts)
  const display = draft || selected

  const holderName = (id) => characters.find(c => c.id === id)?.name || id || '—'

  const handleSelect = (id) => { setSelectedId(id); setDraft(null); setIsNew(false) }

  const handleNew = () => {
    setDraft(isWeapon ? { ...EMPTY_WEAPON } : { ...EMPTY_BEAST })
    setSelectedId(null)
    setIsNew(true)
  }

  const handleEdit = () => { if (selected) setDraft({ ...selected }) }
  const handleCancel = () => { setDraft(null); setIsNew(false) }

  const handleSave = () => {
    if (!draft) return
    const id = draft.id || `lib-${Date.now()}`
    const item = { ...draft, id }
    // New items follow the active tab; edits of an existing item follow that item's actual
    // source array (a Vraka/Gaia beast edited from the Aura Beasts tab still lives in `weapons`).
    const saveAsWeapon = isNew ? isWeapon : selectedIsWeaponShaped
    if (saveAsWeapon) {
      const updated = isNew ? [...weapons, item] : weapons.map(w => w.id === item.id ? item : w)
      onSaveWeapons(updated)
    } else {
      const updated = isNew ? [...beasts, item] : beasts.map(b => b.id === item.id ? item : b)
      onSaveBeasts(updated)
    }
    setSelectedId(item.id)
    setDraft(null)
    setIsNew(false)
  }

  const handleDelete = () => {
    if (!selected || !window.confirm(`Delete "${selected.name}"?`)) return
    if (selectedIsWeaponShaped) onSaveWeapons(weapons.filter(w => w.id !== selected.id))
    else onSaveBeasts(beasts.filter(b => b.id !== selected.id))
    setSelectedId(null)
    setDraft(null)
  }

  const handleAbilityAdd = () =>
    setDraft(d => ({ ...d, abilities: [...(d.abilities || []), { name: '', description: '' }] }))

  const handleAbilityChange = (i, field, val) =>
    setDraft(d => ({ ...d, abilities: d.abilities.map((a, ai) => ai === i ? { ...a, [field]: val } : a) }))

  const handleAbilityRemove = (i) =>
    setDraft(d => ({ ...d, abilities: d.abilities.filter((_, ai) => ai !== i) }))

  const changeTab = (t) => {
    setTab(t); setSelectedId(null); setDraft(null); setIsNew(false); setSearch('')
  }

  // Elements tab: resolve selected element
  const allElements = [...PRIMAL_ELEMENTS, ...CATALYST_ELEMENTS]
  const selectedElement = selectedElementId ? allElements.find(e => e.id === selectedElementId) : null
  const elementCombos = selectedElement
    ? ELEMENT_COMBINATIONS.filter(c => c.primal === selectedElement.id || c.catalyst === selectedElement.id)
    : []
  const elementSpells = selectedElementId ? (defaultElementSpells[selectedElementId] || []) : []

  return (
    <div className="library-view">
      {/* ── Left list panel ── */}
      <div className="library-left">
        <div className="library-left-hdr">
          <div className="lib-tab-row">
            {LIB_TABS.map(t => (
              <button key={t} className={`lib-tab${tab === t ? ' active' : ''}`} onClick={() => changeTab(t)}>
                {t}
              </button>
            ))}
          </div>

          {!isElement && (
            <>
              <div className="lib-search-row">
                <input
                  className="lib-search"
                  placeholder={`Search ${tab.toLowerCase()}…`}
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <div className="lib-layout-toggle" role="group" aria-label="Layout">
                  <button
                    className={`lib-layout-btn${layoutMode === 'grid' ? ' active' : ''}`}
                    title="Card grid — quick overview"
                    onClick={() => setLayoutMode('grid')}
                  >⊞</button>
                  <button
                    className={`lib-layout-btn${layoutMode === 'list' ? ' active' : ''}`}
                    title="Compact list — for editing"
                    onClick={() => setLayoutMode('list')}
                  >☰</button>
                </div>
              </div>
              <div className="lib-count">{totalFiltered} item{totalFiltered !== 1 ? 's' : ''}</div>
              {groups.filter(g => (g.source === 'weapons' ? filteredWeapons : items).filter(g.filter).length > 0).length > 1 && (
                <div className="lib-jump-row">
                  {groups.map(group => {
                    const src = group.source === 'weapons' ? filteredWeapons : items
                    const count = src.filter(group.filter).length
                    if (count === 0) return null
                    return (
                      <button
                        key={group.key}
                        className="lib-jump-chip"
                        style={{ '--chip-color': group.color }}
                        onClick={() => {
                          setCollapsedGroups(prev => { const n = new Set(prev); n.delete(group.key); return n })
                          document.getElementById(`lib-group-${group.key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                      >
                        {group.label} <span>{count}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {isElement ? (
          /* ── Elements left: element picker ── */
          <div className="library-list" style={{ padding: '10px 12px' }}>
            <div className="elem-group-label">Primordial Elements</div>
            <div className="elem-tile-grid">
              {PRIMAL_ELEMENTS.map(el => (
                <button
                  key={el.id}
                  className={`elem-tile${selectedElementId === el.id ? ' active' : ''}`}
                  style={{ '--el-color': el.color, borderColor: selectedElementId === el.id ? el.color : 'transparent', color: selectedElementId === el.id ? el.color : 'var(--text-secondary)' }}
                  onClick={() => setSelectedElementId(selectedElementId === el.id ? null : el.id)}
                >
                  <span className="elem-tile-glyph" style={{ color: el.color }}>{el.glyph}</span>
                  <span className="elem-tile-name">{el.name}</span>
                  <span className="elem-tile-aff">{el.affinity}</span>
                </button>
              ))}
            </div>

            <div className="elem-group-label" style={{ marginTop: 14 }}>Ascended Elements</div>
            <div className="elem-tile-grid">
              {CATALYST_ELEMENTS.map(el => (
                <button
                  key={el.id}
                  className={`elem-tile${selectedElementId === el.id ? ' active' : ''}`}
                  style={{ '--el-color': el.color, borderColor: selectedElementId === el.id ? el.color : 'transparent', color: selectedElementId === el.id ? el.color : 'var(--text-secondary)' }}
                  onClick={() => setSelectedElementId(selectedElementId === el.id ? null : el.id)}
                >
                  <span className="elem-tile-glyph" style={{ color: el.color }}>{el.glyph}</span>
                  <span className="elem-tile-name">{el.name}</span>
                  <span className="elem-tile-aff">{el.affinity}</span>
                </button>
              ))}
            </div>

            <div className="elem-group-label" style={{ marginTop: 14 }}>Mana System</div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.6, padding: '4px 0' }}>
              {MANA_POLARITIES.map(p => (
                <div key={p.id} style={{ marginBottom: 4 }}>
                  <span style={{ color: p.color, fontWeight: 700 }}>{p.glyph} {p.name}</span>
                  <span style={{ color: 'var(--text-dim)', marginLeft: 6 }}>{p.description.slice(0, 60)}…</span>
                </div>
              ))}
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: '#4AAFE0', fontWeight: 700 }}>HC</span>
                <span style={{ color: 'var(--text-dim)', marginLeft: 6 }}>Harmonic Chaos — ability property: starts ordered, unravels into chaos</span>
              </div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: '#FF6B6B', fontWeight: 700 }}>CH</span>
                <span style={{ color: 'var(--text-dim)', marginLeft: 6 }}>Chaotic Harmony — ability property: starts chaotic, resolves into precision</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={`library-list${layoutMode === 'grid' ? ' library-list--grid' : ''}`}>
              {totalFiltered === 0 && (
                <div className="lib-empty-hint">No items match your search.</div>
              )}
              {groups.map(group => {
                const src = group.source === 'weapons' ? filteredWeapons : items
                const groupItems = src.filter(group.filter)
                if (groupItems.length === 0) return null
                const collapsed = collapsedGroups.has(group.key)
                const treatAsWeapon = isWeapon || group.source === 'weapons'
                return (
                  <div key={group.key} id={`lib-group-${group.key}`} className="lib-group">
                    <button
                      className="lib-group-hdr"
                      onClick={() => toggleGroup(group.key)}
                    >
                      <span className="lib-group-chevron">{collapsed ? '▶' : '▼'}</span>
                      <span className="lib-group-label" style={{ color: group.color }}>{group.label}</span>
                      <span className="lib-group-count">{groupItems.length}</span>
                    </button>
                    {!collapsed && (
                      <div className={layoutMode === 'grid' ? 'lib-card-grid' : undefined}>
                        {groupItems.map(item => {
                      const color = treatAsWeapon
                        ? WEAPON_FACTION_COLORS[item.faction] || group.color
                        : BEAST_TIER_COLORS[item.tier] || '#4AAFE0'
                      const sub = treatAsWeapon
                        ? WEAPON_FACTIONS[item.faction] || item.category
                        : [item.type, BEAST_TIERS[item.tier]].filter(Boolean).join(' · ')
                      const holder = treatAsWeapon ? item.currentHolder : item.owner
                      if (layoutMode === 'grid') {
                        return (
                          <button
                            key={item.id}
                            className={`lib-card${selectedId === item.id ? ' active' : ''}`}
                            style={{ '--card-color': color }}
                            onClick={() => handleSelect(item.id)}
                          >
                            <div className="lib-card-swatch" style={{ background: `${color}22`, borderColor: color, color }}>
                              {item.name.charAt(0)}
                            </div>
                            <div className="lib-card-body">
                              <div className="lib-card-name" style={{ color }}>{item.name}</div>
                              {sub && <div className="lib-card-sub">{sub}</div>}
                              {holder && <div className="lib-card-holder">→ {holderName(holder)}</div>}
                            </div>
                          </button>
                        )
                      }
                      return (
                        <button
                          key={item.id}
                          className={`lib-item lib-item--grouped${selectedId === item.id ? ' active' : ''}`}
                          style={{ borderLeftColor: color }}
                          onClick={() => handleSelect(item.id)}
                        >
                          <div className="lib-item-name" style={{ color }}>{item.name}</div>
                          {sub && <div className="lib-item-sub">{sub}</div>}
                          {holder && <div className="lib-item-holder">→ {holderName(holder)}</div>}
                        </button>
                      )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="library-list-footer">
              <button className="lib-new-btn" onClick={handleNew}>
                + New {isWeapon ? 'Weapon / Tool' : 'Aura Beast'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* ── Right panel ── */}
      <div className="library-right">
        {/* ── Elements detail ── */}
        {isElement && !selectedElement && (
          <div className="lib-empty-state">
            <div className="lib-empty-icon">◎</div>
            <div className="lib-empty-label">Select an element to see its combinations and spells</div>
          </div>
        )}
        {isElement && selectedElement && (
          <div className="lib-detail">
            <div className="lib-detail-hdr">
              <div style={{ flex: 1 }}>
                <div className="lib-detail-name" style={{ color: selectedElement.color }}>
                  <span style={{ marginRight: 8, fontSize: 20 }}>{selectedElement.glyph}</span>
                  {selectedElement.name}
                </div>
                <div className="lib-detail-sub">
                  {selectedElement.tier === 'primordial' ? 'Primordial Element' : 'Ascended Element'} · {selectedElement.affinity}
                </div>
              </div>
            </div>

            <div className="lib-section">
              <div className="lib-section-label">Description</div>
              <div className="lib-section-body">{selectedElement.description}</div>
            </div>

            {elementCombos.length > 0 && (
              <div className="lib-section">
                <div className="lib-section-label">
                  {selectedElement.tier === 'primordial' ? 'Ascended Combinations' : 'Primordial Combinations'}
                  <span style={{ color: 'var(--text-dim)', fontWeight: 400, marginLeft: 6 }}>({elementCombos.length})</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {elementCombos.map(combo => {
                    const partner = selectedElement.tier === 'primordial'
                      ? CATALYST_ELEMENTS.find(e => e.id === combo.catalyst)
                      : PRIMAL_ELEMENTS.find(e => e.id === combo.primal)
                    return (
                      <div key={combo.id} className="elem-combo-card" style={{ borderColor: `${combo.color}44` }}>
                        <div className="elem-combo-hdr">
                          <span className="elem-combo-partner" style={{ color: partner?.color }}>
                            {partner?.glyph} {partner?.name}
                          </span>
                          <span className="elem-combo-arrow">→</span>
                          <span className="elem-combo-name" style={{ color: combo.color }}>{combo.name}</span>
                          <span className="elem-combo-aff">{combo.affinity}</span>
                        </div>
                        <div className="elem-combo-desc">{combo.description}</div>
                        {combo.beastArchetype && (
                          <div className="elem-combo-archetype">
                            Beast archetype: <span style={{ color: combo.color }}>{combo.beastArchetype}</span>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {elementSpells.length > 0 && (
              <div className="lib-section">
                <div className="lib-section-label">Default Spell Pool ({elementSpells.length})</div>
                <div className="lib-abilities">
                  {elementSpells.map(sp => {
                    const tierColor = SPELL_TIER_COLORS[sp.tier] || '#7AABCC'
                    return (
                      <div key={sp.id} className="lib-ability-card">
                        <div className="lib-ability-name" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span className="spell-tier-badge" style={{ background: `${tierColor}22`, color: tierColor, borderColor: `${tierColor}44` }}>T{sp.tier}</span>
                          {sp.name}
                        </div>
                        <div className="lib-ability-desc">{sp.description}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Weapons / Beasts detail (existing) ── */}
        {!isElement && (!display ? (
          <div className="lib-empty-state">
            <div className="lib-empty-icon">{isWeapon ? '⚔' : '◈'}</div>
            <div className="lib-empty-label">Select an item or create a new one</div>
          </div>
        ) : draft ? (
          /* ── Edit / Create form ── */
          <div className="lib-form">
            <div className="lib-form-hdr">
              <span className="lib-form-title">
                {isNew ? `New ${isWeapon ? 'Weapon' : 'Beast'}` : `Edit: ${selected?.name || ''}`}
              </span>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn-small btn-primary" onClick={handleSave}>Save</button>
                <button className="btn-small btn-secondary" onClick={handleCancel}>Cancel</button>
              </div>
            </div>

            <div className="lib-form-body">
              <div className="field-group">
                <label className="field-label">Name</label>
                <input className="field-input" value={draft.name || ''} onChange={e => setDraft(d => ({ ...d, name: e.target.value }))} />
              </div>

              {isWeapon ? (
                <>
                  <div className="field-group">
                    <label className="field-label">Category</label>
                    <select className="field-select" value={draft.category || ''} onChange={e => setDraft(d => ({ ...d, category: e.target.value }))}>
                      {WEAPON_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Faction</label>
                    <select className="field-select" value={draft.faction || ''} onChange={e => setDraft(d => ({ ...d, faction: e.target.value }))}>
                      {Object.entries(WEAPON_FACTIONS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Designation (optional)</label>
                    <input className="field-input" value={draft.designation || ''} onChange={e => setDraft(d => ({ ...d, designation: e.target.value }))} />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Current Holder</label>
                    <select className="field-select" value={draft.currentHolder || ''} onChange={e => setDraft(d => ({ ...d, currentHolder: e.target.value || null }))}>
                      <option value="">Unassigned</option>
                      {characters.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div className="field-group">
                    <label className="field-label">Type</label>
                    <input className="field-input" value={draft.type || ''} onChange={e => setDraft(d => ({ ...d, type: e.target.value }))} placeholder="e.g. Ascended Dragon" />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Tier</label>
                    <select className="field-select" value={draft.tier || ''} onChange={e => setDraft(d => ({ ...d, tier: e.target.value }))}>
                      {Object.entries(BEAST_TIERS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Element(s)</label>
                    <input className="field-input" value={draft.element || ''} onChange={e => setDraft(d => ({ ...d, element: e.target.value }))} />
                  </div>
                  <div className="field-group">
                    <label className="field-label">Owner</label>
                    <select className="field-select" value={draft.owner || ''} onChange={e => setDraft(d => ({ ...d, owner: e.target.value || null }))}>
                      <option value="">Unassigned</option>
                      {characters.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </>
              )}

              <div className="field-group">
                <label className="field-label">Description</label>
                <textarea className="field-textarea" value={draft.description || ''} onChange={e => setDraft(d => ({ ...d, description: e.target.value }))} />
              </div>

              {isWeapon && (
                <div className="field-group">
                  <label className="field-label">Corrosion Effect</label>
                  <textarea
                    className="field-textarea" style={{ minHeight: 60 }}
                    value={draft.corrosion || ''}
                    onChange={e => setDraft(d => ({ ...d, corrosion: e.target.value }))}
                    placeholder="Psychological or physical degradation from wielding this weapon…"
                  />
                </div>
              )}

              <div className="field-group">
                <div className="field-label" style={{ marginBottom: 6 }}>Abilities</div>
                <div className="abilities-list">
                  {(draft.abilities || []).map((ab, i) => (
                    <div key={i} className="ability-edit-item">
                      <div className="ability-edit-hdr">
                        <input
                          className="field-input"
                          placeholder="Ability name"
                          value={ab.name || ''}
                          onChange={e => handleAbilityChange(i, 'name', e.target.value)}
                        />
                        <button className="rel-delete-btn" onClick={() => handleAbilityRemove(i)}>✕</button>
                      </div>
                      <textarea
                        className="field-textarea"
                        style={{ minHeight: 48, marginTop: 4 }}
                        placeholder="Description…"
                        value={ab.description || ''}
                        onChange={e => handleAbilityChange(i, 'description', e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <button className="btn-small btn-secondary" style={{ marginTop: 6, width: '100%' }} onClick={handleAbilityAdd}>
                  + Add Ability
                </button>
              </div>

              <div className="field-group">
                <label className="field-label">Notes</label>
                <textarea className="field-textarea" style={{ minHeight: 50 }} value={draft.notes || ''} onChange={e => setDraft(d => ({ ...d, notes: e.target.value }))} />
              </div>
            </div>
          </div>
        ) : (
          /* ── View mode ── */
          <div className="lib-detail">
            {(() => {
              const color = selectedIsWeaponShaped
                ? WEAPON_FACTION_COLORS[selected.faction] || '#7AABCC'
                : BEAST_TIER_COLORS[selected.tier] || '#4AAFE0'
              const holder = selectedIsWeaponShaped ? selected.currentHolder : selected.owner
              return (
                <>
                  <div className="lib-detail-hdr">
                    <div style={{ flex: 1 }}>
                      <div className="lib-detail-name" style={{ color }}>{selected.name}</div>
                      {selectedIsWeaponShaped ? (
                        <div className="lib-detail-sub">
                          {[WEAPON_FACTIONS[selected.faction], selected.category, selected.seat ? `Seat ${selected.seat}` : null].filter(Boolean).join(' · ')}
                        </div>
                      ) : (
                        <div className="lib-detail-sub">
                          {[selected.type, BEAST_TIERS[selected.tier]].filter(Boolean).join(' · ')}
                          {selected.element && <span> · {selected.element}</span>}
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                      <button className="btn-small btn-secondary" onClick={handleEdit}>Edit</button>
                      <button className="lib-delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                  </div>

                  {selectedIsWeaponShaped && selected.designation && (
                    <div className="lib-designation">{selected.designation}</div>
                  )}

                  {holder && (
                    <div className="lib-holder-badge">
                      {selectedIsWeaponShaped ? 'Held by' : 'Bonded to'}: <span>{holderName(holder)}</span>
                    </div>
                  )}

                  {selected.description && (
                    <div className="lib-section">
                      <div className="lib-section-label">Description</div>
                      <div className="lib-section-body">{selected.description}</div>
                    </div>
                  )}

                  {selectedIsWeaponShaped && selected.corrosion && (
                    <div className="lib-section">
                      <div className="lib-section-label">Corrosion Effect</div>
                      <div className="lib-section-body lib-corrosion">{selected.corrosion}</div>
                    </div>
                  )}

                  {selected.abilities && selected.abilities.length > 0 && (
                    <div className="lib-section">
                      <div className="lib-section-label">Abilities ({selected.abilities.length})</div>
                      <div className="lib-abilities">
                        {selected.abilities.map((ab, i) => (
                          <div key={i} className="lib-ability-card">
                            <div className="lib-ability-name">{ab.name}</div>
                            {ab.description && <div className="lib-ability-desc">{ab.description}</div>}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selected.notes && (
                    <div className="lib-section">
                      <div className="lib-section-label">Notes</div>
                      <div className="lib-section-body" style={{ fontStyle: 'italic' }}>{selected.notes}</div>
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        ))}
      </div>
    </div>
  )
}
