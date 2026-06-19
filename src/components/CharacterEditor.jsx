import { useState, useEffect } from 'react'
import { CHAR_COLORS, HOUSE_COLORS, HOUSE_LABELS, REL_COLORS, REL_LABELS, STATUS_OPTIONS } from '../data/characters'
import { WEAPON_FACTION_COLORS } from '../data/weapons'
import { BEAST_TIER_COLORS } from '../data/beasts'
import {
  PRIMAL_ELEMENTS, CATALYST_ELEMENTS, resolveCombo,
  MANA_POLARITIES, MANA_POLARITY_MAP,
  defaultElementSpells, SPELL_TIER_COLORS,
} from '../data/elements'

const TABS = ['Details', 'Relationships', 'Stories', 'Powers', 'Impact']
const REL_TYPE_OPTIONS = Object.keys(REL_LABELS)

export default function CharacterEditor({
  character, characters, relationships, stories,
  weapons, beasts,
  onSave, onSaveRelationships, onSaveStories, onClose,
}) {
  const [tab, setTab] = useState('Details')
  const [draft, setDraft] = useState({})
  const [showAddRel, setShowAddRel] = useState(false)
  const [newRel, setNewRel] = useState({ target: '', type: 'ally', note: '', secret: false })
  const [showWeaponPicker, setShowWeaponPicker] = useState(false)
  const [showBeastPicker, setShowBeastPicker] = useState(false)
  const [showSpellPicker, setShowSpellPicker] = useState(false)
  const [customSpellDraft, setCustomSpellDraft] = useState(null)

  useEffect(() => {
    if (character) setDraft({ ...character })
  }, [character?.id])

  if (!character) return null

  const charColor = draft.color || CHAR_COLORS[character.id] || '#4AAFE0'

  const charRels = relationships.filter(r => r.source === character.id || r.target === character.id)

  const otherChar = (r) => {
    const otherId = r.source === character.id ? r.target : r.source
    return characters.find(c => c.id === otherId)
  }

  const handleFieldChange = (field, value) => setDraft(d => ({ ...d, [field]: value }))
  const handleSave = () => onSave(draft)

  const handleDeleteRel = (relId) => onSaveRelationships(relationships.filter(r => r.id !== relId))

  const handleAddRel = () => {
    if (!newRel.target || !newRel.type) return
    const id = `r-${Date.now()}`
    onSaveRelationships([...relationships, { id, source: character.id, ...newRel }])
    setNewRel({ target: '', type: 'ally', note: '', secret: false })
    setShowAddRel(false)
  }

  const handleArcToggle = (storyId, arcId, charId, checked) => {
    const updated = stories.map(s => {
      if (s.id !== storyId) return s
      return {
        ...s,
        arcs: s.arcs.map(a => {
          if (a.id !== arcId) return a
          const chars = checked
            ? [...(a.characters || []), charId]
            : (a.characters || []).filter(id => id !== charId)
          return { ...a, characters: [...new Set(chars)] }
        }),
      }
    })
    onSaveStories(updated)
  }

  const isInArc = (storyId, arcId) => {
    const story = stories.find(s => s.id === storyId)
    const arc = story?.arcs.find(a => a.id === arcId)
    return arc?.characters?.includes(character.id) ?? false
  }

  const connectedCharIds = new Set(charRels.map(r => r.source === character.id ? r.target : r.source))
  const storyAppearances = stories.flatMap(s =>
    s.arcs.filter(a => a.characters?.includes(character.id)).map(a => ({ story: s, arc: a }))
  )

  return (
    <div className="workspace-right">
      <div className="char-editor">
        {/* Header */}
        <div className="editor-header">
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div className="char-color-ring" style={{ color: charColor, borderColor: charColor }}>
              {character.name[0]}
            </div>
            <div>
              <div className="editor-name" style={{ color: charColor }}>{draft.name || character.name}</div>
              <div className="editor-house-tag" style={{ color: HOUSE_COLORS[character.house] || charColor }}>
                {HOUSE_LABELS[character.house] || character.house}
              </div>
              {character.epithet && (
                <div style={{ fontSize: 10, color: 'var(--text-dim)', fontStyle: 'italic', marginTop: 2 }}>
                  {character.epithet}
                </div>
              )}
            </div>
          </div>
          <button className="editor-close" onClick={onClose}>✕</button>
        </div>

        {/* Tabs */}
        <div className="editor-tabs">
          {TABS.map(t => (
            <button
              key={t}
              className={`editor-tab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div style={{ overflowY: 'auto', flex: 1 }}>

          {/* ── DETAILS ── */}
          {tab === 'Details' && (
            <>
              <div className="field-group">
                <label className="field-label">Name</label>
                <input className="field-input" value={draft.name || ''} onChange={e => handleFieldChange('name', e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label">Role / Title</label>
                <input className="field-input" value={draft.role || ''} onChange={e => handleFieldChange('role', e.target.value)} />
              </div>
              {(draft.epithet || character.epithet) && (
                <div className="field-group">
                  <label className="field-label">Epithet</label>
                  <input className="field-input" value={draft.epithet || ''} onChange={e => handleFieldChange('epithet', e.target.value)} />
                </div>
              )}
              {(draft.coreType || character.coreType) && (
                <div className="field-group">
                  <label className="field-label">Core / Power Type</label>
                  <div style={{
                    padding: '6px 10px', background: 'var(--elevated)', borderRadius: 7,
                    fontSize: 12, color: charColor, fontWeight: 600, border: `1px solid ${charColor}44`,
                  }}>
                    {draft.coreType || character.coreType}
                  </div>
                </div>
              )}

              {/* Beast / Weapon quick-view */}
              {(() => {
                const wId = draft.weaponId ?? character.weaponId
                const bId = draft.beastId  ?? character.beastId
                const libW = wId ? (weapons || []).find(w => w.id === wId) : null
                const libB = bId ? (beasts  || []).find(b => b.id === bId) : null
                const aw = libW || draft.weapon || character.weapon
                const ab = libB || draft.beast  || character.beast
                if (!ab && !aw) return null
                return (
                  <div className="field-group">
                    <label className="field-label">Beast &amp; Weapon</label>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {ab && (
                        <div style={{
                          flex: 1, minWidth: 120,
                          borderLeft: '3px solid #9B30FF',
                          background: '#9B30FF0D',
                          borderRadius: '0 6px 6px 0',
                          padding: '6px 10px',
                        }}>
                          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.08em', color: '#9B30FF', marginBottom: 3 }}>Beast</div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{ab.name}</div>
                          {ab.type && <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 2 }}>{ab.type}</div>}
                        </div>
                      )}
                      {aw && (
                        <div style={{
                          flex: 1, minWidth: 120,
                          borderLeft: '3px solid #D4AF37',
                          background: '#D4AF370D',
                          borderRadius: '0 6px 6px 0',
                          padding: '6px 10px',
                        }}>
                          <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '.08em', color: '#D4AF37', marginBottom: 3 }}>Weapon</div>
                          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{aw.name}</div>
                          {aw.designation && <div style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 2 }}>{aw.designation}</div>}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })()}

              <div className="field-group">
                <label className="field-label">Status</label>
                <select className="field-select" value={draft.status || ''} onChange={e => handleFieldChange('status', e.target.value)}>
                  {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="field-group">
                <label className="field-label">Location</label>
                <input className="field-input" value={draft.location || ''} onChange={e => handleFieldChange('location', e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label">Character Color</label>
                <div className="color-field-row">
                  <div className="color-preview" style={{ background: charColor }} />
                  <input type="color" value={charColor} onChange={e => handleFieldChange('color', e.target.value)} />
                  <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>{charColor}</span>
                </div>
              </div>
              <div className="field-group">
                <label className="field-label">Description</label>
                <textarea className="field-textarea" value={draft.description || ''} onChange={e => handleFieldChange('description', e.target.value)} />
              </div>
              <div className="field-group">
                <label className="field-label">Notes</label>
                <textarea className="field-textarea" style={{ minHeight: 60 }} value={draft.notes || ''} onChange={e => handleFieldChange('notes', e.target.value)} />
              </div>
              <button className="save-char-btn" onClick={handleSave}>Save Changes</button>
            </>
          )}

          {/* ── RELATIONSHIPS ── */}
          {tab === 'Relationships' && (
            <>
              <div className="rel-list">
                {charRels.length === 0 && (
                  <div style={{ color: 'var(--text-dim)', fontSize: 12, padding: '8px 0' }}>No relationships defined.</div>
                )}
                {charRels.map(r => {
                  const other = otherChar(r)
                  if (!other) return null
                  const otherColor = other.color || CHAR_COLORS[other.id] || '#4AAFE0'
                  return (
                    <div key={r.id} className="rel-edit-item" style={{ borderLeftColor: REL_COLORS[r.type] || '#556' }}>
                      <div className="rel-edit-header">
                        <span className="rel-edit-type" style={{ color: REL_COLORS[r.type] }}>{REL_LABELS[r.type] || r.type}</span>
                        <span className="rel-edit-other" style={{ color: otherColor }}>{other.name}</span>
                        {r.secret && <span className="rel-edit-secret-tag">secret</span>}
                        <button className="rel-delete-btn" onClick={() => handleDeleteRel(r.id)}>✕</button>
                      </div>
                      {r.note && <div className="rel-edit-note">{r.note}</div>}
                    </div>
                  )
                })}
              </div>
              {!showAddRel ? (
                <button className="btn-small btn-secondary" style={{ width: '100%' }} onClick={() => setShowAddRel(true)}>
                  + Add Relationship
                </button>
              ) : (
                <div className="add-rel-form">
                  <div className="field-group">
                    <label className="field-label">Other Character</label>
                    <select className="field-select" value={newRel.target} onChange={e => setNewRel(r => ({ ...r, target: e.target.value }))}>
                      <option value="">Select…</option>
                      {characters.filter(c => c.id !== character.id).map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Type</label>
                    <select className="field-select" value={newRel.type} onChange={e => setNewRel(r => ({ ...r, type: e.target.value }))}>
                      {REL_TYPE_OPTIONS.map(t => <option key={t} value={t}>{REL_LABELS[t]}</option>)}
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">Note (optional)</label>
                    <input className="field-input" value={newRel.note} onChange={e => setNewRel(r => ({ ...r, note: e.target.value }))} placeholder="Context for this relationship…" />
                  </div>
                  <div className="field-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 12 }}>
                      <input type="checkbox" checked={newRel.secret} onChange={e => setNewRel(r => ({ ...r, secret: e.target.checked }))} style={{ accentColor: 'var(--accent)' }} />
                      <span style={{ color: 'var(--text-muted)' }}>Secret relationship</span>
                    </label>
                  </div>
                  <div className="add-rel-actions">
                    <button className="btn-small btn-primary" onClick={handleAddRel}>Add</button>
                    <button className="btn-small btn-secondary" onClick={() => setShowAddRel(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* ── STORIES ── */}
          {tab === 'Stories' && (
            <div className="story-assign-list">
              {stories.map(story => (
                <div key={story.id}>
                  <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: story.color, marginBottom: 4, marginTop: 8, fontWeight: 700 }}>
                    {story.title}
                  </div>
                  {story.arcs.map(arc => (
                    <div key={arc.id} className="arc-assign-item">
                      <input type="checkbox" checked={isInArc(story.id, arc.id)} onChange={e => handleArcToggle(story.id, arc.id, character.id, e.target.checked)} />
                      <div className="arc-assign-text">
                        <div className="arc-assign-title">{arc.title}</div>
                        <div className="arc-assign-book">{story.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* ── POWERS ── */}
          {tab === 'Powers' && (() => {
            const weaponId     = draft.weaponId   ?? character.weaponId
            const beastId      = draft.beastId    ?? character.beastId
            const libWeapon    = weaponId  ? (weapons || []).find(w => w.id === weaponId)  : null
            const libBeast     = beastId   ? (beasts  || []).find(b => b.id === beastId)   : null
            const activeWeapon = libWeapon  || draft.weapon   || character.weapon
            const activeBeast  = libBeast   || draft.beast    || character.beast
            const authority    = draft.authority  || character.authority
            const gates        = draft.gates      || character.gates
            const gateNote     = draft.gateNote   || character.gateNote

            // Mana profile
            const primalId     = draft.element    ?? character.element    ?? null
            const catalystId   = draft.catalyst   ?? character.catalyst   ?? null
            const combo        = resolveCombo(primalId, catalystId)
            const polarityId   = draft.manaPolarity ?? character.manaPolarity ?? null
            const auraBalance  = draft.auraBalance  ?? character.auraBalance  ?? 50
            const spells       = draft.spells       ?? character.spells       ?? []

            const polarity     = polarityId ? MANA_POLARITY_MAP[polarityId] : null
            const primal       = primalId   ? PRIMAL_ELEMENTS.find(e => e.id === primalId) : null
            const catalyst     = catalystId ? CATALYST_ELEMENTS.find(e => e.id === catalystId) : null

            const manaLabel = [
              polarity?.name,
              primal ? (combo ? `${primal.name} + ${catalyst?.name} → ${combo.name}` : primal.name) : null,
            ].filter(Boolean).join(' · ')

            const poolSpells = primalId
              ? [...(defaultElementSpells[primalId] || []), ...(catalystId ? (defaultElementSpells[catalystId] || []) : [])]
              : []
            const usedSpellIds = new Set(spells.map(s => s.id))

            return (
              <div className="powers-tab">

                {/* ── MANA PROFILE ── */}
                <div className="power-section">
                  <div className="power-section-label">Mana Profile</div>

                  {/* Aura / Force balance */}
                  <div className="mana-balance-row">
                    <span className="mana-balance-label force">Force</span>
                    <div className="mana-balance-track">
                      <input type="range" min={0} max={100} value={auraBalance}
                        className="mana-balance-slider"
                        style={{ '--thumb-color': auraBalance > 60 ? '#9B30FF' : auraBalance < 40 ? '#4AAFE0' : '#7AABCC' }}
                        onChange={e => handleFieldChange('auraBalance', Number(e.target.value))}
                      />
                      <div className="mana-balance-ticks">
                        <span>0</span><span>25</span><span>50</span><span>75</span><span>100</span>
                      </div>
                    </div>
                    <span className="mana-balance-label aura">Aura</span>
                  </div>
                  <div className="mana-balance-hint">
                    {auraBalance > 60
                      ? <span style={{ color: '#9B30FF' }}>Aura Dominant — born with beast · weapon must be forged</span>
                      : auraBalance < 40
                      ? <span style={{ color: '#4AAFE0' }}>Force Dominant — beast earned from nature · attuned to the wild</span>
                      : <span style={{ color: '#7AABCC' }}>Balanced — equal draw between Aura and Force</span>
                    }
                  </div>

                  {/* Primordial element */}
                  <div className="mana-row-label">Primordial Element</div>
                  <div className="element-picker-grid">
                    {PRIMAL_ELEMENTS.map(el => (
                      <button key={el.id}
                        className={`elem-btn${primalId === el.id ? ' active' : ''}`}
                        style={{ '--el-color': el.color, borderColor: primalId === el.id ? el.color : 'transparent', color: primalId === el.id ? el.color : 'var(--text-dim)' }}
                        onClick={() => handleFieldChange('element', primalId === el.id ? null : el.id)}
                      >
                        <span className="elem-btn-glyph">{el.glyph}</span>
                        <span className="elem-btn-name">{el.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Catalyst */}
                  <div className="mana-row-label" style={{ marginTop: 10 }}>Catalyst <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>(optional)</span></div>
                  <div className="element-picker-grid catalyst-grid">
                    <button
                      className={`elem-btn${!catalystId ? ' active' : ''}`}
                      style={{ borderColor: !catalystId ? '#7AABCC' : 'transparent', color: !catalystId ? '#7AABCC' : 'var(--text-dim)' }}
                      onClick={() => handleFieldChange('catalyst', null)}
                    >
                      <span className="elem-btn-glyph">·</span>
                      <span className="elem-btn-name">None</span>
                    </button>
                    {CATALYST_ELEMENTS.map(el => (
                      <button key={el.id}
                        className={`elem-btn${catalystId === el.id ? ' active' : ''}`}
                        style={{ borderColor: catalystId === el.id ? el.color : 'transparent', color: catalystId === el.id ? el.color : 'var(--text-dim)' }}
                        onClick={() => handleFieldChange('catalyst', catalystId === el.id ? null : el.id)}
                      >
                        <span className="elem-btn-glyph">{el.glyph}</span>
                        <span className="elem-btn-name">{el.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Derived advanced form */}
                  {combo && (
                    <div className="mana-combo-card" style={{ borderColor: `${combo.color}55`, background: `${combo.color}0A` }}>
                      <div className="mana-combo-name" style={{ color: combo.color }}>{combo.name}</div>
                      <div className="mana-combo-affinity">{combo.affinity}</div>
                      <div className="mana-combo-desc">{combo.description}</div>
                      {combo.beastArchetype && (
                        <div className="mana-combo-archetype">
                          Beast Archetype: <span style={{ color: combo.color }}>{combo.beastArchetype}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mana polarity */}
                  <div className="mana-row-label" style={{ marginTop: 12 }}>Mana Polarity</div>
                  <div className="mana-toggle-row">
                    {MANA_POLARITIES.map(p => (
                      <button key={p.id}
                        className={`mana-toggle-btn${polarityId === p.id ? ' active' : ''}`}
                        style={{ '--tog-color': p.color, borderColor: polarityId === p.id ? p.color : 'transparent', color: polarityId === p.id ? p.color : 'var(--text-dim)' }}
                        onClick={() => handleFieldChange('manaPolarity', polarityId === p.id ? null : p.id)}
                      >
                        {p.glyph} {p.name}
                      </button>
                    ))}
                  </div>

                  {/* Full mana nature label */}
                  {manaLabel && (
                    <div className="mana-nature-label" style={{ borderColor: `${charColor}44` }}>
                      <span style={{ color: 'var(--text-dim)', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase' }}>Mana Nature</span>
                      <div style={{ color: charColor, fontWeight: 700, fontSize: 12, marginTop: 3 }}>{manaLabel}</div>
                    </div>
                  )}

                  <button className="save-char-btn" style={{ marginTop: 12 }} onClick={handleSave}>
                    Save Mana Profile
                  </button>
                </div>

                {/* ── SPELLS ── */}
                <div className="power-section">
                  <div className="power-section-label">
                    Spells
                    <span style={{ color: 'var(--text-dim)', fontWeight: 400, marginLeft: 6 }}>({spells.length})</span>
                  </div>

                  {spells.length === 0 && !showSpellPicker && (
                    <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 }}>No spells assigned.</div>
                  )}

                  {spells.map((sp, i) => {
                    const tierColor = SPELL_TIER_COLORS[sp.tier] || '#7AABCC'
                    return (
                      <div key={sp.id || i} className="spell-card">
                        <div className="spell-card-hdr">
                          <span className="spell-tier-badge" style={{ background: `${tierColor}22`, color: tierColor, borderColor: `${tierColor}44` }}>
                            T{sp.tier}
                          </span>
                          <span className="spell-name">{sp.name}</span>
                          {sp.element && (
                            <span className="spell-elem-tag" style={{ color: [...PRIMAL_ELEMENTS, ...CATALYST_ELEMENTS].find(e => e.id === sp.element)?.color || '#7AABCC' }}>
                              {[...PRIMAL_ELEMENTS, ...CATALYST_ELEMENTS].find(e => e.id === sp.element)?.name || sp.element}
                            </span>
                          )}
                          <button className="rel-delete-btn" style={{ marginLeft: 'auto' }}
                            onClick={() => handleFieldChange('spells', spells.filter((_, si) => si !== i))}>✕</button>
                        </div>
                        {sp.description && <div className="spell-desc">{sp.description}</div>}
                      </div>
                    )
                  })}

                  <button
                    className="btn-small btn-secondary"
                    style={{ width: '100%', marginTop: 6 }}
                    onClick={() => { setShowSpellPicker(p => !p); setCustomSpellDraft(null) }}
                  >
                    {showSpellPicker ? 'Close Spell Picker' : '+ Add Spell'}
                  </button>

                  {showSpellPicker && (
                    <div className="spell-picker">
                      {poolSpells.length > 0 && (
                        <>
                          <div className="spell-picker-section-label">From element pool</div>
                          {poolSpells.filter(s => !usedSpellIds.has(s.id)).map(sp => {
                            const tierColor = SPELL_TIER_COLORS[sp.tier] || '#7AABCC'
                            return (
                              <button key={sp.id} className="spell-picker-item"
                                onClick={() => {
                                  handleFieldChange('spells', [...spells, { ...sp, element: primalId }])
                                  setShowSpellPicker(false)
                                }}>
                                <span className="spell-tier-badge" style={{ background: `${tierColor}22`, color: tierColor, borderColor: `${tierColor}44` }}>T{sp.tier}</span>
                                <span style={{ fontWeight: 600 }}>{sp.name}</span>
                                <span style={{ fontSize: 10, color: 'var(--text-dim)', marginLeft: 4 }}>{sp.description?.slice(0, 60)}…</span>
                              </button>
                            )
                          })}
                          {poolSpells.filter(s => !usedSpellIds.has(s.id)).length === 0 && (
                            <div style={{ fontSize: 11, color: 'var(--text-dim)', padding: '4px 0' }}>All pool spells already added.</div>
                          )}
                        </>
                      )}
                      {!primalId && (
                        <div style={{ fontSize: 11, color: 'var(--text-dim)', padding: '4px 0' }}>Set a Primordial Element above to see the spell pool.</div>
                      )}
                      <div className="spell-picker-section-label" style={{ marginTop: 8 }}>Custom spell</div>
                      {!customSpellDraft ? (
                        <button className="btn-small btn-secondary" style={{ width: '100%' }}
                          onClick={() => setCustomSpellDraft({ id: `sp-${Date.now()}`, name: '', element: primalId || '', tier: 1, description: '' })}>
                          + Create Custom
                        </button>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <input className="field-input" placeholder="Spell name"
                            value={customSpellDraft.name}
                            onChange={e => setCustomSpellDraft(d => ({ ...d, name: e.target.value }))} />
                          <div style={{ display: 'flex', gap: 6 }}>
                            <select className="field-select" style={{ flex: 1 }}
                              value={customSpellDraft.element}
                              onChange={e => setCustomSpellDraft(d => ({ ...d, element: e.target.value }))}>
                              <option value="">No element</option>
                              {[...PRIMAL_ELEMENTS, ...CATALYST_ELEMENTS].map(el => (
                                <option key={el.id} value={el.id}>{el.name}</option>
                              ))}
                            </select>
                            <select className="field-select" style={{ width: 70 }}
                              value={customSpellDraft.tier}
                              onChange={e => setCustomSpellDraft(d => ({ ...d, tier: Number(e.target.value) }))}>
                              {[1,2,3,4,5].map(t => <option key={t} value={t}>T{t}</option>)}
                            </select>
                          </div>
                          <textarea className="field-textarea" style={{ minHeight: 48 }}
                            placeholder="Description…"
                            value={customSpellDraft.description}
                            onChange={e => setCustomSpellDraft(d => ({ ...d, description: e.target.value }))} />
                          <div style={{ display: 'flex', gap: 6 }}>
                            <button className="btn-small btn-primary"
                              onClick={() => {
                                if (customSpellDraft.name) {
                                  handleFieldChange('spells', [...spells, customSpellDraft])
                                  setCustomSpellDraft(null)
                                  setShowSpellPicker(false)
                                }
                              }}>Add</button>
                            <button className="btn-small btn-secondary" onClick={() => setCustomSpellDraft(null)}>Cancel</button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ── AUTHORITY ── */}
                {authority && (
                  <div className="power-section">
                    <div className="power-section-label">Imperial Authority</div>
                    <div className="power-authority">{authority}</div>
                  </div>
                )}

                {/* ── WEAPON ── */}
                <div className="power-section">
                  <div className="power-section-label">
                    Weapon / Tool
                    {activeWeapon && <span className="lib-source-tag">{libWeapon ? 'Library' : 'Inline'}</span>}
                  </div>
                  {activeWeapon && (
                    <div className="power-card" style={{ borderColor: `${charColor}33` }}>
                      <div className="power-card-name" style={{ color: libWeapon ? (WEAPON_FACTION_COLORS[libWeapon.faction] || charColor) : charColor }}>
                        {activeWeapon.name}
                      </div>
                      <div className="power-card-type">{activeWeapon.type || activeWeapon.category || activeWeapon.designation}</div>
                      {activeWeapon.description && <div className="power-card-desc">{activeWeapon.description}</div>}
                      {libWeapon?.corrosion && <div className="power-card-corrosion">{libWeapon.corrosion}</div>}
                    </div>
                  )}
                  <button className="btn-small btn-secondary" style={{ width: '100%', marginTop: activeWeapon ? 6 : 0 }}
                    onClick={() => { setShowWeaponPicker(p => !p); setShowBeastPicker(false) }}>
                    {activeWeapon ? 'Change Weapon' : '+ Assign Weapon from Library'}
                  </button>
                  {showWeaponPicker && (
                    <div className="lib-picker">
                      <button className="lib-picker-item lib-picker-clear"
                        onClick={() => { handleFieldChange('weaponId', null); setShowWeaponPicker(false) }}>
                        — Clear assignment
                      </button>
                      {(weapons || []).map(w => (
                        <button key={w.id} className={`lib-picker-item${weaponId === w.id ? ' active' : ''}`}
                          onClick={() => { handleFieldChange('weaponId', w.id); setShowWeaponPicker(false); onSave({ ...draft, weaponId: w.id }) }}>
                          <span className="lib-picker-name" style={{ color: WEAPON_FACTION_COLORS[w.faction] || '#7AABCC' }}>{w.name}</span>
                          <span className="lib-picker-sub">{w.category}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── BEAST ── */}
                <div className="power-section">
                  <div className="power-section-label">
                    Aura Beast
                    {activeBeast && <span className="lib-source-tag">{libBeast ? 'Library' : 'Inline'}</span>}
                  </div>
                  {activeBeast && (
                    <div className="power-card" style={{ borderColor: `${charColor}33` }}>
                      <div className="power-card-name" style={{ color: libBeast ? (BEAST_TIER_COLORS[libBeast.tier] || charColor) : charColor }}>
                        {activeBeast.name}
                      </div>
                      <div className="power-card-type">{activeBeast.type}</div>
                      {activeBeast.description && <div className="power-card-desc">{activeBeast.description}</div>}
                    </div>
                  )}
                  <button className="btn-small btn-secondary" style={{ width: '100%', marginTop: activeBeast ? 6 : 0 }}
                    onClick={() => { setShowBeastPicker(p => !p); setShowWeaponPicker(false) }}>
                    {activeBeast ? 'Change Beast' : '+ Assign Beast from Library'}
                  </button>
                  {showBeastPicker && (
                    <div className="lib-picker">
                      <button className="lib-picker-item lib-picker-clear"
                        onClick={() => { handleFieldChange('beastId', null); setShowBeastPicker(false) }}>
                        — Clear assignment
                      </button>
                      {(beasts || []).map(b => (
                        <button key={b.id} className={`lib-picker-item${beastId === b.id ? ' active' : ''}`}
                          onClick={() => { handleFieldChange('beastId', b.id); setShowBeastPicker(false); onSave({ ...draft, beastId: b.id }) }}>
                          <span className="lib-picker-name" style={{ color: BEAST_TIER_COLORS[b.tier] || '#4AAFE0' }}>{b.name}</span>
                          <span className="lib-picker-sub">{b.type}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* ── GATES ── */}
                {gates && (() => {
                  const unlockedCount = gates.filter(g => g.unlocked).length
                  return (
                    <div className="power-section">
                      <div className="power-section-label">
                        Gates — {unlockedCount}/{gates.length} Unlocked
                        <span className="gates-pct">({unlockedCount}% base power)</span>
                      </div>
                      {gateNote && <div className="gate-note">{gateNote}</div>}
                      <div className="gates-grid">
                        {gates.map((gate, i) => (
                          <button key={gate.id}
                            className={`gate-item${gate.unlocked ? ' unlocked' : ''}`}
                            style={gate.unlocked ? { borderColor: charColor, color: charColor } : {}}
                            onClick={() => {
                              const updated = gates.map((g, gi) => gi === i ? { ...g, unlocked: !g.unlocked } : g)
                              handleFieldChange('gates', updated)
                            }}
                          >
                            <span className="gate-num">{gate.id}</span>
                            <span className="gate-name">{gate.name}</span>
                            <span className="gate-lock">{gate.unlocked ? '◆' : '◇'}</span>
                          </button>
                        ))}
                      </div>
                      <button className="save-char-btn" style={{ marginTop: 10 }} onClick={handleSave}>
                        Save Gate State
                      </button>
                    </div>
                  )
                })()}
              </div>
            )
          })()}

          {/* ── IMPACT ── */}
          {tab === 'Impact' && (
            <>
              <div className="impact-section">
                <h4>Direct Connections ({connectedCharIds.size})</h4>
                {[...connectedCharIds].map(id => {
                  const c = characters.find(ch => ch.id === id)
                  if (!c) return null
                  const cColor = c.color || CHAR_COLORS[id] || '#4AAFE0'
                  const rels = charRels.filter(r => r.source === id || r.target === id)
                  return (
                    <div key={id} className="impact-item" style={{ borderLeftColor: cColor }}>
                      <span style={{ color: cColor, fontWeight: 600 }}>{c.name}</span>
                      <span style={{ color: 'var(--text-dim)', marginLeft: 8, fontSize: 10 }}>
                        {rels.map(r => REL_LABELS[r.type] || r.type).join(', ')}
                      </span>
                    </div>
                  )
                })}
                {connectedCharIds.size === 0 && (
                  <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>No connections.</div>
                )}
              </div>
              <div className="impact-section">
                <h4>Story Appearances ({storyAppearances.length})</h4>
                {storyAppearances.map(({ story, arc }) => (
                  <div key={arc.id} className="impact-item" style={{ borderLeftColor: story.color }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>{story.title}</span>
                    <span style={{ color: 'var(--text-dim)', marginLeft: 6, fontSize: 10 }}>→ {arc.title}</span>
                  </div>
                ))}
                {storyAppearances.length === 0 && (
                  <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>Not assigned to any arc.</div>
                )}
              </div>
              <div className="impact-section">
                <h4>If Removed</h4>
                <div style={{ fontSize: 12, color: 'var(--text-dim)', lineHeight: 1.5 }}>
                  {connectedCharIds.size > 0 || storyAppearances.length > 0 ? (
                    <>
                      {connectedCharIds.size > 0 && (
                        <div style={{ marginBottom: 6 }}>
                          — {connectedCharIds.size} relationship{connectedCharIds.size !== 1 ? 's' : ''} would become orphaned.
                        </div>
                      )}
                      {storyAppearances.length > 0 && (
                        <div>
                          — Removed from {storyAppearances.length} arc{storyAppearances.length !== 1 ? 's' : ''}: {storyAppearances.map(({ arc }) => arc.title).join(', ')}.
                        </div>
                      )}
                    </>
                  ) : (
                    <div>No impact — this character has no connections or story roles.</div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
