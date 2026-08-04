import { useState } from 'react'
import {
  KAZEMI_STATES, KAZEMI_GATES, GATE_OPENING,
  ELEMENTAL_SERIES, PRINCIPLES_SERIES, EMPIRIC_SERIES, ASCENDED_SERIES,
  KAZEMI_DRIVE, KAZEMI_WILL, KAZEMI_FREE_WILL,
} from '../data/kazemi'

const SERIES_MAP = {
  elemental:  ELEMENTAL_SERIES,
  principles: PRINCIPLES_SERIES,
  empiric:    EMPIRIC_SERIES,
  ascended:   ASCENDED_SERIES,
}

const SERIES_COLOR = {
  elemental:  '#ff8c42',
  principles: '#b36aff',
  empiric:    '#4a9eff',
  ascended:   '#d4af37',
}

export default function KazemiTab() {
  const [activeSection, setActiveSection] = useState('states')
  const [selectedState, setSelectedState] = useState(KAZEMI_STATES[0])
  const [selectedSeries, setSelectedSeries] = useState('elemental')
  const [gateMode, setGateMode] = useState('harmonic')
  const [expandedWeapon, setExpandedWeapon] = useState(null)

  const sections = [
    { id: 'states',   label: 'States & Power',  icon: '◈' },
    { id: 'gates',    label: 'Gate System',      icon: '⊞' },
    { id: 'series',   label: 'Weapon Series',    icon: '⚔' },
    { id: 'drive',    label: 'Drive & Will',     icon: '◉' },
    { id: 'valariya', label: 'Free Will',        icon: '⊟' },
  ]

  return (
    <div className="kazemi-view">
      {/* Hero header */}
      <div className="kazemi-hero">
        <div className="kazemi-hero-left">
          <div className="kazemi-hero-label">THE EMPEROR · THE CALAMITY · THE TOOL</div>
          <div className="kazemi-hero-name">Irane Kazemi</div>
          <div className="kazemi-hero-epithet">Universal Error · Source of Irane Material · The Conceptual</div>
        </div>
        <div className="kazemi-hero-right">
          <div className="kazemi-core-tag">All 15 Concepts · Universal Core</div>
          <div className="kazemi-hero-quote">"Death couldn't take me even if it wanted to."</div>
        </div>
      </div>

      {/* Section tabs */}
      <div className="magic-tabs kazemi-tabs">
        {sections.map(s => (
          <button
            key={s.id}
            className={`magic-tab ${activeSection === s.id ? 'active' : ''}`}
            onClick={() => setActiveSection(s.id)}
          >
            <span className="magic-tab-icon">{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      <div className="magic-content kazemi-content">

        {/* ── STATES ───────────────────────────────────────────────────── */}
        {activeSection === 'states' && (
          <div className="kaz-states-view">
            {/* Power strip */}
            <div className="kaz-power-strip">
              {KAZEMI_STATES.map(s => (
                <button
                  key={s.id}
                  className={`kaz-state-btn ${selectedState.id === s.id ? 'active' : ''}`}
                  style={{ '--state-color': s.color }}
                  onClick={() => setSelectedState(s)}
                >
                  <span className="kaz-state-abbrev">{s.abbrev}</span>
                  <span className="kaz-state-range">{s.range}</span>
                  <span className="kaz-state-name">{s.name}</span>
                </button>
              ))}
            </div>

            {/* Selected state detail */}
            <div className="kaz-state-detail" style={{ '--state-color': selectedState.color, '--state-accent': selectedState.accent }}>
              <div className="kaz-state-detail-header">
                <div>
                  <div className="kaz-state-detail-title">{selectedState.name}</div>
                  <div className="kaz-state-detail-subtitle">{selectedState.title}</div>
                  <div className="kaz-state-detail-range">{selectedState.range}</div>
                </div>
              </div>

              <div className="kaz-state-driver">{selectedState.driver}</div>
              <div className="kaz-state-desc">{selectedState.description}</div>

              {selectedState.midpointNote && (
                <div className="kaz-midpoint-block">
                  <div className="kaz-midpoint-label">
                    {selectedState.id === 'champion' ? '35–50% — Drive + Will Combined' : '75–99% — Drive + Will Combined'}
                  </div>
                  <div>{selectedState.midpointNote}</div>
                </div>
              )}

              {/* Series best/worst */}
              {selectedState.series.best && (
                <div className="kaz-series-row">
                  <div className="kaz-series-tag best" style={{ '--sc': SERIES_COLOR[selectedState.series.best] }}>
                    <span className="kaz-series-tag-label">BEST SERIES</span>
                    <span>{SERIES_MAP[selectedState.series.best].name}</span>
                  </div>
                  <div className="kaz-series-tag worst" style={{ '--sc': SERIES_COLOR[selectedState.series.worst] }}>
                    <span className="kaz-series-tag-label">WORST / RESTRICTED SERIES</span>
                    <span>{SERIES_MAP[selectedState.series.worst].name}</span>
                  </div>
                </div>
              )}

              {selectedState.bestNote && (
                <div className="kaz-note-block">
                  <span className="kaz-note-label">Best Series Note — </span>{selectedState.bestNote}
                </div>
              )}

              {/* Forbidden state */}
              {selectedState.forbidden && (
                <div className="kaz-forbidden-block">
                  <div className="kaz-forbidden-label">⚠ {selectedState.forbidden}</div>
                  <div className="kaz-forbidden-detail">{selectedState.forbiddenDetail}</div>
                </div>
              )}

              {selectedState.quote && (
                <div className="kaz-state-quote">
                  <div className="kaz-quote-text">{selectedState.quote}</div>
                  {selectedState.quoteContext && (
                    <div className="kaz-quote-context">{selectedState.quoteContext}</div>
                  )}
                </div>
              )}
            </div>

            {/* Series restriction summary */}
            <div className="kaz-restriction-grid">
              <div className="kaz-restriction-title">Series Restriction Overview</div>
              <div className="kaz-restriction-row">
                <div className="kaz-restriction-col">
                  <div className="kaz-restriction-state" style={{ color: '#4a9eff' }}>Core (C) 1–15%</div>
                  <div className="kaz-restriction-item best">Best: Empiric Series</div>
                  <div className="kaz-restriction-item worst">Worst: Elemental Series</div>
                  <div className="kaz-restriction-item forbidden">FORBIDDEN: Empiric Series (immediate conceptual release)</div>
                </div>
                <div className="kaz-restriction-col">
                  <div className="kaz-restriction-state" style={{ color: '#ff8c42' }}>Champion (I) 16–50%</div>
                  <div className="kaz-restriction-item best">Best: Elemental Series</div>
                  <div className="kaz-restriction-item worst">Worst: Principles Series</div>
                  <div className="kaz-restriction-item forbidden">FORBIDDEN: Sustaining 35–50% form (minutes before losing mind)</div>
                </div>
                <div className="kaz-restriction-col">
                  <div className="kaz-restriction-state" style={{ color: '#b36aff' }}>Emperor (E) 51–99%</div>
                  <div className="kaz-restriction-item best">Best: Principles Series</div>
                  <div className="kaz-restriction-item worst">Worst: Empiric Series (immobilised by weight)</div>
                  <div className="kaz-restriction-item forbidden">SELF-FORBIDDEN: 75–99% form (fears the Conceptual)</div>
                </div>
              </div>
            </div>

            {/* Zoe quote about self-hatred */}
            <div className="kaz-zoe-quote">
              <div className="kaz-zoe-quote-attr">Zoe Navar, to Aurora and Dokia:</div>
              <div className="kaz-zoe-quote-text">"If there is one thing Irane hates more than anything in this world, it is not those who fail him — no, it is himself. That man hates himself more than anything else on this planet. More than his rage and disdain for the Benefactor More and the Vermin Vane. Far more."</div>
            </div>
          </div>
        )}

        {/* ── GATE SYSTEM ───────────────────────────────────────────────── */}
        {activeSection === 'gates' && (
          <div className="kaz-gates-view">
            <div className="kaz-gate-header">
              <div className="kaz-gate-title">The 15 Gates</div>
              <div className="kaz-gate-desc">Each gate is a seal built from fragments of No. 8's humanity — pain, grief, love, loss, endurance. Opening a gate does not grant power. It removes a constraint. Each gate also unlocks its corresponding weapon from the Elemental Series.</div>
            </div>

            {/* Harmonic / Chaotic toggle */}
            <div className="kaz-gate-mode">
              <button
                className={`kaz-mode-btn ${gateMode === 'harmonic' ? 'active' : ''}`}
                onClick={() => setGateMode('harmonic')}
              >
                <span className="kaz-mode-icon">◑</span>
                <span>Harmonic Opening</span>
              </button>
              <button
                className={`kaz-mode-btn ${gateMode === 'chaotic' ? 'active' : ''}`}
                onClick={() => setGateMode('chaotic')}
              >
                <span className="kaz-mode-icon">⚡</span>
                <span>Chaotic Opening</span>
              </button>
            </div>

            <div className="kaz-mode-desc">
              <div className="kaz-mode-desc-name">{GATE_OPENING[gateMode].name}</div>
              <div>{GATE_OPENING[gateMode].description}</div>
              <div className="kaz-mode-tradeoff"><strong>Tradeoff:</strong> {GATE_OPENING[gateMode].tradeoff}</div>
              <div className="kaz-mode-beast-note"><strong>Gates 13–15:</strong> {GATE_OPENING[gateMode].beastNote}</div>
            </div>

            {/* Gate grid */}
            <div className="kaz-gate-grid">
              {KAZEMI_GATES.map(gate => (
                <div
                  key={gate.id}
                  className={`kaz-gate-card ${gate.id >= 13 ? 'sovereign' : gate.id >= 11 ? 'special' : 'standard'}`}
                >
                  <div className="kaz-gate-num">Gate {gate.id}</div>
                  <div className="kaz-gate-element">{gate.element}</div>
                  {gate.weaponType === 'Beast' ? (
                    <div className="kaz-gate-beast-tag">
                      <div className="kaz-gate-weapon">Summons: {gate.beast}</div>
                      <div className="kaz-gate-owner">({gate.beastOwner}'s beast)</div>
                    </div>
                  ) : (
                    <div className="kaz-gate-weapon">{gate.weaponType}: {gate.weapon}</div>
                  )}
                  {gate.note && <div className="kaz-gate-note">{gate.note}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── WEAPON SERIES ─────────────────────────────────────────────── */}
        {activeSection === 'series' && (
          <div className="kaz-series-view">
            <div className="kaz-series-tabs">
              {['elemental', 'principles', 'empiric', 'ascended'].map(sid => {
                const s = SERIES_MAP[sid]
                return (
                  <button
                    key={sid}
                    className={`kaz-series-tab ${selectedSeries === sid ? 'active' : ''}`}
                    style={{ '--sc': SERIES_COLOR[sid] }}
                    onClick={() => { setSelectedSeries(sid); setExpandedWeapon(null) }}
                  >
                    {s.name}
                  </button>
                )
              })}
            </div>

            {(() => {
              const series = SERIES_MAP[selectedSeries]
              const sc = SERIES_COLOR[selectedSeries]
              return (
                <div className="kaz-series-detail">
                  <div className="kaz-series-info" style={{ borderColor: `${sc}44` }}>
                    <div className="kaz-series-info-name" style={{ color: sc }}>{series.name}</div>
                    <div className="kaz-series-info-sub">{series.subtitle}</div>
                    <div className="kaz-series-info-desc">{series.description}</div>
                    <div className="kaz-series-info-tags">
                      <span className="kaz-series-best-tag" style={{ background: `${SERIES_COLOR[series.bestFor]}22`, color: SERIES_COLOR[series.bestFor] }}>
                        Best for: {KAZEMI_STATES.find(s => s.id === series.bestFor)?.name || series.bestFor}
                      </span>
                      <span className="kaz-series-worst-tag">
                        Worst for: {KAZEMI_STATES.find(s => s.id === series.worstFor)?.name || series.worstFor}
                      </span>
                    </div>
                    {series.restriction && (
                      <div className="kaz-series-restriction">{series.restriction}</div>
                    )}
                  </div>

                  <div className="kaz-weapon-list">
                    {series.weapons.map(w => (
                      <div
                        key={w.id}
                        className={`kaz-weapon-card ${expandedWeapon === w.id ? 'expanded' : ''}`}
                        onClick={() => setExpandedWeapon(expandedWeapon === w.id ? null : w.id)}
                        style={{ '--sc': sc }}
                      >
                        <div className="kaz-weapon-card-header">
                          <div className="kaz-weapon-name">{w.name}</div>
                          <div className="kaz-weapon-type">{w.type}</div>
                          {w.beast && (
                            <div className="kaz-weapon-beast-tag">Beast: {w.beast.name}</div>
                          )}
                          <div className="kaz-weapon-expand">{expandedWeapon === w.id ? '▲' : '▼'}</div>
                        </div>
                        {expandedWeapon === w.id && (
                          <div className="kaz-weapon-detail">
                            <div className="kaz-weapon-desc">{w.description}</div>
                            {w.beast && (
                              <div className="kaz-weapon-beast-detail">
                                <span className="kaz-weapon-beast-label">Beast: </span>
                                <span className="kaz-weapon-beast-name">{w.beast.name}</span>
                                <span className="kaz-weapon-beast-type"> — {w.beast.type}</span>
                              </div>
                            )}
                            {w.note && <div className="kaz-weapon-note">{w.note}</div>}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* ── DRIVE & WILL ─────────────────────────────────────────────── */}
        {activeSection === 'drive' && (
          <div className="kaz-drive-view">
            <div className="kaz-drive-cols">
              {/* Kazemi's Drive */}
              <div className="kaz-drive-col">
                <div className="kaz-drive-col-header drive">
                  <div className="kaz-drive-col-title">Kazemi's Drive</div>
                  <div className="kaz-drive-col-sub">He who tamed his body — the beast architecture</div>
                </div>
                {KAZEMI_DRIVE.map(d => (
                  <div key={d.name} className="kaz-drive-card drive-card">
                    <div className="kaz-drive-card-name">{d.name}</div>
                    <div className="kaz-drive-card-role">{d.role}</div>
                    <div className="kaz-drive-card-aspect">Aspect: {d.aspect}</div>
                    <div className="kaz-drive-card-desc">{d.description}</div>
                  </div>
                ))}
              </div>

              {/* Kazemi's Will */}
              <div className="kaz-drive-col">
                <div className="kaz-drive-col-header will">
                  <div className="kaz-drive-col-title">Kazemi's Will</div>
                  <div className="kaz-drive-col-sub">He who forged his emotions into tools — the tool architecture</div>
                </div>
                {KAZEMI_WILL.map(w => (
                  <div key={w.name} className="kaz-drive-card will-card">
                    <div className="kaz-drive-card-name">{w.name}</div>
                    <div className="kaz-drive-card-role">{w.role}</div>
                    <div className="kaz-drive-card-aspect">Aspect: {w.aspect}</div>
                    <div className="kaz-drive-card-desc">{w.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Full Sequence */}
            <div className="kaz-sequence-block">
              <div className="kaz-sequence-title">The Full Execution Sequence</div>
              <div className="kaz-sequence-steps">
                {[
                  { step: 'Mind', who: 'Arai', color: '#4a9eff', desc: 'Plans the full sequence — pillar order, spell combinations, mana requirements. Cannot be disobeyed. Structural command authority.' },
                  { step: 'Heart', who: 'Hope', color: '#ff4466', desc: 'Gathers mana from all 37.2 trillion cell-cores per beat, assembles the core model. Chosen — the heart chooses to gather, beat by beat.' },
                  { step: 'Body', who: 'Zoe', color: '#44bb66', desc: 'Produces mana continuously, adapts per opponent, evolves in response. Loved — cannot abandon what one loves.' },
                  { step: 'Summari sets limitation', who: 'Right Arm', color: '#ffaa44', desc: 'Receives the core model. Defines the ceiling: what is possible from this energy package.' },
                  { step: 'Nighla sets endpoint', who: 'Left Arm', color: '#cc4444', desc: 'Receives the goal from the mind. Defines the destination: what must be accomplished.' },
                  { step: 'Iris fills the space', who: 'The Forge', color: '#b36aff', desc: 'Deploys from the complete archive of 35 trillion deaths — whatever fits within Summari\'s ceiling and reaches Nighla\'s target.' },
                ].map(s => (
                  <div key={s.step} className="kaz-sequence-step" style={{ '--step-color': s.color }}>
                    <div className="kaz-sequence-step-name">{s.step}</div>
                    <div className="kaz-sequence-step-who">{s.who}</div>
                    <div className="kaz-sequence-step-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── FREE WILL / VALARIYA ─────────────────────────────────────── */}
        {activeSection === 'valariya' && (
          <div className="kaz-valariya-view">
            <div className="kaz-valariya-header">
              <div className="kaz-valariya-title">{KAZEMI_FREE_WILL.title}</div>
              <div className="kaz-valariya-person">{KAZEMI_FREE_WILL.person}</div>
            </div>

            <div className="kaz-valariya-blocks">
              {[
                { label: 'The Event', text: KAZEMI_FREE_WILL.event },
                { label: 'The Meaning', text: KAZEMI_FREE_WILL.meaning },
                { label: 'What He Saw', text: KAZEMI_FREE_WILL.whatHeSaw },
                { label: 'What Happened', text: KAZEMI_FREE_WILL.whatHappened },
                { label: 'What It Gave', text: KAZEMI_FREE_WILL.whatItGave },
                { label: 'The Parallel', text: KAZEMI_FREE_WILL.bibleParallel },
              ].map(b => (
                <div key={b.label} className="kaz-valariya-block">
                  <div className="kaz-valariya-block-label">{b.label}</div>
                  <div className="kaz-valariya-block-text">{b.text}</div>
                </div>
              ))}
            </div>

            <div className="kaz-valariya-quote">
              <div className="kaz-valariya-quote-text">{KAZEMI_FREE_WILL.iraneQuote}</div>
              <div className="kaz-valariya-quote-context">— Irane Kazemi</div>
            </div>

            {/* Key conversations */}
            <div className="kaz-conversations">
              <div className="kaz-conv-title">Key Conversations</div>
              {[
                {
                  speaker: 'Irane → Arai',
                  text: '"To fail you — that is my greatest fear."',
                  context: 'Said privately.',
                },
                {
                  speaker: 'Irane → Minia',
                  text: '"I don\'t remember my time as a coreless man, but there is one thing I know about him — he was a failure. A failure of such magnitude that he even failed at dying."',
                  context: 'Said with hatred.',
                },
                {
                  speaker: 'Zoe → Aurora & Dokia',
                  text: '"If there is one thing Irane hates more than anything in this world, it is not those who fail him — no, it is himself. That man hates himself more than anything else on this planet. More than his rage and disdain for the Benefactor More and the Vermin Vane. Far more."',
                  context: 'Said with absolute dead-cold seriousness. Zoe, who always brings warmth, bringing only dread.',
                },
              ].map(c => (
                <div key={c.speaker} className="kaz-conv-block">
                  <div className="kaz-conv-speaker">{c.speaker}</div>
                  <div className="kaz-conv-text">{c.text}</div>
                  <div className="kaz-conv-context">{c.context}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
