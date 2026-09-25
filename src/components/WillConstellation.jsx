import { useState, useMemo } from 'react'
import { HOUSE_COLORS } from '../data/characters'

// ─────────────────────────────────────────────────────────────────────────
// The Will-Bearers Constellation — a dynamic, radial connection map for
// Irane's five Will-bearers (Mira/Emotion, Aliya/Spirit, Dokia/Death,
// Urial/Technique, Pandro/Spells). Unlike the hand-laid-out HOUSE_TREES,
// this reads relationships live from characters.js and lays itself out
// radially each render, so it never goes stale as data changes. Flowing
// dashed lines animate outward from Irane through each bearer to their own
// connected circle (clan, genetic family, Part-specific allies), and the
// whole view can be scoped to a single Part via the same stories.js arc
// data the World Map and Character Board already use.
// ─────────────────────────────────────────────────────────────────────────

const WILL_BEARER_IDS = ['mira_ardent', 'aliya_hallow', 'dokia_caedus', 'urial_ferran', 'pandro_lexan']

const WILL_ASPECT = {
  mira_ardent:   'Emotion',
  aliya_hallow:  'Spirit',
  dokia_caedus:  'Death',
  urial_ferran:  'Technique',
  pandro_lexan:  'Spells',
}

const CENTER = { x: 480, y: 420 }
const BEARER_RADIUS = 220
const OUTER_RADIUS = 150 // distance from each bearer to ITS OWN connected nodes

function usePartTimeline(stories) {
  return useMemo(() => {
    if (!Array.isArray(stories)) return []
    const rows = []
    stories.forEach(story => {
      ;(story.arcs || []).forEach(arc => {
        rows.push({ id: arc.id, title: arc.title, color: story.color, characterIds: new Set(arc.characters || []) })
      })
    })
    return rows
  }, [stories])
}

export default function WillConstellation({ characters, relationships, stories, onSelectChar, selectedChar }) {
  const [activePartId, setActivePartId] = useState('all')
  const [focusBearer, setFocusBearer] = useState(null)
  const partTimeline = usePartTimeline(stories)
  const activePart = activePartId === 'all' ? null : partTimeline.find(p => p.id === activePartId) || null

  const charMap = useMemo(() => Object.fromEntries(characters.map(c => [c.id, c])), [characters])
  const irane = charMap['irane']

  // For each bearer, gather their directly connected characters (any relationship
  // type), then split into "clan/genetic" (parent/sibling/family-shaped ties) vs
  // "story ally" (everything else) so the two branch types the user asked for —
  // Will-sibling bond vs genetic family — render as visually distinct spokes.
  const bearerData = useMemo(() => {
    return WILL_BEARER_IDS.map((bearerId, bi) => {
      const bearer = charMap[bearerId]
      if (!bearer) return null
      const angle = (bi / WILL_BEARER_IDS.length) * Math.PI * 2 - Math.PI / 2
      const bx = CENTER.x + Math.cos(angle) * BEARER_RADIUS
      const by = CENTER.y + Math.sin(angle) * BEARER_RADIUS

      const rels = relationships.filter(r => r.source === bearerId || r.target === bearerId)
      const connections = rels
        .map(r => {
          const otherId = r.source === bearerId ? r.target : r.source
          const other = charMap[otherId]
          if (!other) return null
          if (activePart && !activePart.characterIds.has(otherId) && otherId !== bearerId) return null
          const isGenetic = ['parent', 'sibling'].includes(r.type)
          return { rel: r, character: other, isGenetic }
        })
        .filter(Boolean)
        // de-dupe by character id, preferring genetic ties for the branch-type flag
        .reduce((acc, c) => {
          const existing = acc.find(a => a.character.id === c.character.id)
          if (!existing) acc.push(c)
          else if (c.isGenetic) existing.isGenetic = true
          return acc
        }, [])

      const genetic = connections.filter(c => c.isGenetic)
      const allies  = connections.filter(c => !c.isGenetic)

      const placeArc = (list, spread) => list.map((c, i) => {
        const t = list.length > 1 ? (i / (list.length - 1)) - 0.5 : 0
        const a = angle + t * spread
        return {
          ...c,
          x: bx + Math.cos(a) * OUTER_RADIUS,
          y: by + Math.sin(a) * OUTER_RADIUS,
        }
      })

      return {
        id: bearerId,
        bearer,
        x: bx, y: by,
        color: bearer.color || HOUSE_COLORS[bearer.house] || '#9B30FF',
        genetic: placeArc(genetic, 1.1),
        allies: placeArc(allies, 1.6),
        inPart: !activePart || activePart.characterIds.has(bearerId),
      }
    }).filter(Boolean)
  }, [charMap, relationships, activePart])

  const visibleBearers = focusBearer ? bearerData.filter(b => b.id === focusBearer) : bearerData

  return (
    <div className="will-constellation">
      <div className="wc-toolbar">
        <div className="wc-toolbar-text">
          <h3>The Will-Bearers Constellation</h3>
          <p>Irane's Will, made person — five aspects, radiating outward into their own clans and story ties. Click a bearer to isolate their branch; click any node to open it in Family Trees.</p>
        </div>
        <div className="wc-toolbar-controls">
          {partTimeline.length > 0 && (
            <select value={activePartId} onChange={e => setActivePartId(e.target.value)} className="wc-part-select">
              <option value="all">All Parts (full history)</option>
              {partTimeline.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          )}
          {focusBearer && (
            <button className="wc-clear-focus" onClick={() => setFocusBearer(null)}>✕ Show All Five</button>
          )}
        </div>
      </div>

      <div className="wc-canvas-wrap">
        <svg viewBox="0 0 960 840" className="wc-svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="wcGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Irane at the center */}
          <circle cx={CENTER.x} cy={CENTER.y} r={70} fill="url(#wcGlow)" />

          {/* Spokes: Irane -> each bearer (animated flowing dashes = the Will running through them) */}
          {bearerData.map(b => (
            <line
              key={`spoke-${b.id}`}
              x1={CENTER.x} y1={CENTER.y} x2={b.x} y2={b.y}
              stroke={b.color}
              strokeWidth={focusBearer && focusBearer !== b.id ? 1 : 3}
              strokeOpacity={focusBearer && focusBearer !== b.id ? 0.12 : (b.inPart ? 0.85 : 0.15)}
              strokeDasharray="10,8"
              className="wc-flow-line"
            />
          ))}

          <g
            className="wc-irane-node"
            style={{ cursor: irane ? 'pointer' : 'default' }}
            onClick={() => irane && onSelectChar?.(irane)}
          >
            <circle cx={CENTER.x} cy={CENTER.y} r={38} fill="#D4AF3722" stroke="#D4AF37" strokeWidth={selectedChar?.id === 'irane' ? 3.5 : 2} />
            <text x={CENTER.x} y={CENTER.y + 5} textAnchor="middle" fontSize="15" fontWeight="700" fill="#D4AF37" fontFamily="Cinzel, serif">I</text>
            <text x={CENTER.x} y={CENTER.y + 56} textAnchor="middle" fontSize="11" fill="#D4AF37" fontWeight="700">Irane</text>
          </g>

          {/* Each bearer's own branch */}
          {visibleBearers.map(b => (
            <g key={b.id} opacity={b.inPart ? 1 : 0.25}>
              {/* branch lines to this bearer's own connections */}
              {b.genetic.map(c => (
                <line key={`gen-${b.id}-${c.character.id}`} x1={b.x} y1={b.y} x2={c.x} y2={c.y}
                  stroke="#E8B84B" strokeWidth="2" strokeOpacity="0.7" strokeDasharray="3,3" />
              ))}
              {b.allies.map(c => (
                <line key={`ally-${b.id}-${c.character.id}`} x1={b.x} y1={b.y} x2={c.x} y2={c.y}
                  stroke={b.color} strokeWidth="1.4" strokeOpacity="0.45" />
              ))}

              {/* bearer node */}
              <g
                transform={`translate(${b.x},${b.y})`}
                style={{ cursor: 'pointer' }}
                onClick={() => setFocusBearer(focusBearer === b.id ? null : b.id)}
              >
                <circle r={30} fill={`${b.color}2A`} stroke={b.color} strokeWidth={selectedChar?.id === b.id ? 3.5 : 2.5} />
                <text textAnchor="middle" y={5} fontSize="13" fontWeight="700" fill={b.color} fontFamily="Cinzel, serif">
                  {b.bearer.name.charAt(0)}
                </text>
                <text textAnchor="middle" y={46} fontSize="11" fontWeight="700" fill={b.color}>{b.bearer.name.split(' ')[0]}</text>
                <text textAnchor="middle" y={59} fontSize="8.5" fill="var(--text-dim)" style={{ textTransform: 'uppercase', letterSpacing: '.05em' }}>
                  Will: {WILL_ASPECT[b.id]}
                </text>
              </g>

              {/* connected nodes — genetic (gold, dashed border) vs story ally (bearer color) */}
              {[...b.genetic, ...b.allies].map(c => {
                const isGenetic = b.genetic.includes(c)
                const nColor = isGenetic ? '#E8B84B' : (c.character.color || HOUSE_COLORS[c.character.house] || b.color)
                return (
                  <g
                    key={`node-${b.id}-${c.character.id}`}
                    transform={`translate(${c.x},${c.y})`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => onSelectChar?.(c.character)}
                  >
                    <circle r={18} fill={`${nColor}22`} stroke={nColor} strokeWidth={selectedChar?.id === c.character.id ? 3 : 1.5}
                      strokeDasharray={isGenetic ? '3,2' : 'none'} />
                    <text textAnchor="middle" y={4} fontSize="10" fontWeight="700" fill={nColor}>
                      {c.character.name.charAt(0)}
                    </text>
                    <text textAnchor="middle" y={30} fontSize="9" fill="var(--text-muted)">{c.character.name.split(' ')[0]}</text>
                    <text textAnchor="middle" y={40} fontSize="7.5" fill={nColor} style={{ textTransform: 'uppercase' }}>
                      {isGenetic ? (c.rel.type === 'parent' ? 'family' : 'sibling') : (c.rel.type || '')}
                    </text>
                  </g>
                )
              })}
            </g>
          ))}
        </svg>
      </div>

      <div className="wc-legend">
        <span><span className="wc-legend-swatch" style={{ background: '#D4AF37' }} /> Irane / the Drive</span>
        <span><span className="wc-legend-swatch" style={{ background: '#E8B84B', border: '1px dashed #E8B84B' }} /> Genetic / clan family tie</span>
        <span><span className="wc-legend-swatch" style={{ background: '#9B30FF' }} /> Story-arc ally or role</span>
        <span className="wc-legend-hint">Dimmed nodes are not confirmed present in the selected Part.</span>
      </div>
    </div>
  )
}
