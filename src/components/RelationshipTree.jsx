import { useRef, useState, useCallback, useEffect } from 'react'
import { CHAR_COLORS, REL_COLORS, REL_LABELS } from '../data/characters'

const R = 28   // node radius
const W = 2600
const H = 1600
const INITIAL_TF = { x: 40, y: 50, scale: 0.46 }

// ── Pre-calculated world-space positions ──────────────────────
// Layout rows:
//   y=90   → Irane (center)
//   y=280  → Wives (ember left, arai, hope, zoe right)
//   y=500  → Children (4 groups under each mother)
//   y=160  → Vane cluster (far right, own row)
//   y=760  → Allied houses (bottom left)
const POS = {
  irane:       { x: 1200, y: 90  },

  ember_hist:  { x: 140,  y: 280 },  // secret
  arai:        { x: 680,  y: 280 },
  hope:        { x: 1200, y: 280 },
  zoe:         { x: 1740, y: 280 },

  // Ember's children (secret mother)
  summari:     { x: 40,   y: 500 },
  nighla:      { x: 200,  y: 500 },
  shadow:      { x: 360,  y: 500 },  // secret

  // Arai's children (birth order 3, 4, 8)
  nebula:      { x: 540,  y: 500 },
  iron:        { x: 700,  y: 500 },
  pixel:       { x: 860,  y: 500 },

  // Hope's children (birth order 1, 5, 9)
  nova:        { x: 1040, y: 500 },
  law:         { x: 1200, y: 500 },
  faith:       { x: 1360, y: 500 },

  // Zoe's children (birth order 2, 6, 7)
  aurora:      { x: 1540, y: 500 },
  eon:         { x: 1700, y: 500 },
  alpha:       { x: 1860, y: 500 },

  // Vane cluster
  niro:        { x: 2140, y: 160 },
  aqura:       { x: 2330, y: 160 },
  kael:        { x: 2230, y: 380 },

  // Allied houses
  vesper:      { x: 420,  y: 760 },
  ember_osiro: { x: 680,  y: 760 },

  // Military command
  evo:         { x: 1800, y: 760 },
}

// Orthogonal branch: node-bottom → mid-junction → node-top
function branchPath(x1, y1, x2, y2, jY) {
  const j = jY ?? (y1 + y2) / 2
  if (x1 === x2) return `M${x1},${y1 + R} L${x2},${y2 - R}`
  return `M${x1},${y1 + R} L${x1},${j} L${x2},${j} L${x2},${y2 - R}`
}

// Gentle quadratic arc for cross-cluster connections
function curvePath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  const bow = Math.max(Math.abs(x2 - x1) * 0.16, Math.abs(y2 - y1) * 0.32, 65)
  const dir = my < 390 ? -1 : 1
  return `M${x1},${y1} Q${mx},${my + bow * dir} ${x2},${y2}`
}

// Grouped matriline paths: trunk + horizontal bar + drops to each child
function matrilinePaths(motherId, childIds, visIds) {
  const m = POS[motherId]
  if (!m || !visIds.has(motherId)) return []
  const kids = childIds.filter(id => visIds.has(id))
  if (!kids.length) return []
  const jY = m.y + (POS[kids[0]].y - m.y) * 0.5
  const xs = kids.map(id => POS[id].x).sort((a, b) => a - b)
  return [
    { d: `M${m.x},${m.y + R} L${m.x},${jY}` },
    { d: `M${xs[0]},${jY} L${xs[xs.length - 1]},${jY}` },
    ...kids.map(id => ({ d: `M${POS[id].x},${jY} L${POS[id].x},${POS[id].y - R}` })),
  ]
}

const SECRET_NODE_IDS = new Set(['shadow', 'ember_hist'])
const FAMILY_TYPES = new Set(['parent', 'sibling', 'married', 'forced_union'])

export default function RelationshipTree({
  characters, relationships, selectedId, onSelect, showSecrets, filterCharIds, searchQuery,
}) {
  const wrapRef = useRef(null)
  const [tf, setTf] = useState(INITIAL_TF)
  const [isPanning, setIsPanning] = useState(false)

  // Stable refs so callbacks never become stale
  const tfRef = useRef(tf)
  const dragRef = useRef({ sx: 0, sy: 0, stx: 0, sty: 0, didMove: false })
  useEffect(() => { tfRef.current = tf }, [tf])

  const [tooltip, setTooltip] = useState(null)

  // ── Visible character set ─────────────────────────────────────
  const effectiveChars = characters.filter(c => {
    if (SECRET_NODE_IDS.has(c.id) && !showSecrets) return false
    if (filterCharIds && !filterCharIds.includes(c.id)) return false
    return true
  })
  const visIds = new Set(effectiveChars.map(c => c.id))

  const visRels = relationships.filter(r =>
    visIds.has(r.source) && visIds.has(r.target) && (showSecrets || !r.secret)
  )

  // ── Pan / Zoom ────────────────────────────────────────────────
  const onWheel = useCallback(e => {
    e.preventDefault()
    const factor = e.deltaY < 0 ? 1.12 : 0.89
    const rect = e.currentTarget.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    setTf(t => {
      const ns = Math.min(3, Math.max(0.15, t.scale * factor))
      // Zoom towards cursor
      return {
        scale: ns,
        x: mx - (mx - t.x) * (ns / t.scale),
        y: my - (my - t.y) * (ns / t.scale),
      }
    })
  }, [])

  const onPtrDown = useCallback(e => {
    if (e.button !== 0) return
    if (e.target.closest('[data-node="true"]')) return  // don't pan on node click
    e.currentTarget.setPointerCapture(e.pointerId)
    dragRef.current = {
      sx: e.clientX, sy: e.clientY,
      stx: tfRef.current.x, sty: tfRef.current.y,
      didMove: false,
    }
    setIsPanning(true)
  }, [])

  const onPtrMove = useCallback(e => {
    if (!isPanning) return
    const dx = e.clientX - dragRef.current.sx
    const dy = e.clientY - dragRef.current.sy
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragRef.current.didMove = true
    setTf(t => ({ ...t, x: dragRef.current.stx + dx, y: dragRef.current.sty + dy }))
  }, [isPanning])

  const onPtrUp = useCallback(() => setIsPanning(false), [])

  // ── Build edge paths ─────────────────────────────────────────
  const edgePaths = []
  const addEdge = (id, d, color, secret = false, type = '', note = '') =>
    edgePaths.push({ id, d, color, secret, type, note })

  const WIFE_JY = 188  // junction y between Irane and wives row

  // Irane → each wife (marriage)
  if (visIds.has('irane')) {
    const ip = POS.irane
    ;[['arai', REL_COLORS.married], ['hope', REL_COLORS.married], ['zoe', REL_COLORS.married]].forEach(([wId, col]) => {
      if (!visIds.has(wId)) return
      const wp = POS[wId]
      const d = ip.x === wp.x
        ? `M${ip.x},${ip.y + R} L${ip.x},${wp.y - R}`
        : `M${ip.x},${ip.y + R} L${ip.x},${WIFE_JY} L${wp.x},${WIFE_JY} L${wp.x},${wp.y - R}`
      addEdge(`ir-${wId}`, d, col, false, 'married')
    })
    // Secret: Irane → ember_hist (forced_union)
    if (visIds.has('ember_hist') && showSecrets) {
      const ep = POS.ember_hist
      addEdge('ir-ember',
        `M${POS.irane.x},${POS.irane.y + R} L${POS.irane.x},${WIFE_JY} L${ep.x},${WIFE_JY} L${ep.x},${ep.y - R}`,
        REL_COLORS.forced_union, true, 'forced_union',
        'Pre-awakening forced passion — Ember gifted to researchers by King Nuro of Terra')
    }
  }

  // Matriline groups (mother → trunk → bar → children drops)
  const MATRILINES = [
    { m: 'arai',  kids: ['nebula', 'iron',  'pixel'] },
    { m: 'hope',  kids: ['nova',   'law',   'faith'] },
    { m: 'zoe',   kids: ['aurora', 'eon',   'alpha'] },
  ]
  MATRILINES.forEach(({ m, kids }) =>
    matrilinePaths(m, kids, visIds).forEach((p, j) =>
      addEdge(`mat-${m}-${j}`, p.d, REL_COLORS.parent)
    )
  )

  // Ember's children matriline (only when secrets visible)
  if (showSecrets) {
    matrilinePaths('ember_hist', ['summari', 'nighla', 'shadow'], visIds).forEach((p, j) =>
      addEdge(`mat-ember-${j}`, p.d, REL_COLORS.forced_union, true)
    )
  }

  // When ember_hist is hidden (secrets off), connect Irane directly to Summari & Nighla
  if (!visIds.has('ember_hist') && visIds.has('irane')) {
    ;['summari', 'nighla'].filter(id => visIds.has(id)).forEach(id => {
      const ip = POS.irane, cp = POS[id]
      addEdge(`ir-${id}-direct`, curvePath(ip.x, ip.y, cp.x, cp.y), REL_COLORS.parent, false, 'parent')
    })
  }

  // Niro ↔ Aqura (sibling — bar above their row)
  if (visIds.has('niro') && visIds.has('aqura')) {
    const np = POS.niro, ap = POS.aqura, barY = 108
    addEdge('niro-aq',
      `M${np.x},${np.y - R} L${np.x},${barY} L${ap.x},${barY} L${ap.x},${ap.y - R}`,
      REL_COLORS.sibling, false, 'sibling')
  }

  // Niro → Kael (secret parent)
  if (visIds.has('niro') && visIds.has('kael') && showSecrets) {
    const np = POS.niro, kp = POS.kael, jY = (np.y + kp.y) / 2
    addEdge('niro-kael', branchPath(np.x, np.y, kp.x, kp.y, jY),
      REL_COLORS.parent, true, 'parent', 'Deliberately hidden. Kael raised as a disposable weapon.')
  }

  // Cross-matriline Alpha ↔ Pixel twin arc
  if (visIds.has('alpha') && visIds.has('pixel')) {
    const ap = POS.alpha, pp = POS.pixel
    addEdge('alpha-pixel-twin',
      curvePath(ap.x, ap.y, pp.x, pp.y),
      REL_COLORS.sibling, false, 'sibling',
      'Cross-matriline twins — born in the same moment from two mothers')
  }

  // Non-family bezier arcs (from relationship data)
  visRels
    .filter(r => !FAMILY_TYPES.has(r.type))
    .forEach(r => {
      const sp = POS[r.source], tp = POS[r.target]
      if (!sp || !tp) return
      addEdge(r.id, curvePath(sp.x, sp.y, tp.x, tp.y),
        REL_COLORS[r.type] || '#556', r.secret, r.type, r.note)
    })

  // ── Render helpers ────────────────────────────────────────────
  const renderEdge = p => (
    <path
      key={p.id}
      d={p.d}
      fill="none"
      stroke={p.color || '#4A6080'}
      strokeWidth={p.secret ? 1.5 : 2.2}
      strokeDasharray={p.secret ? '7,5' : undefined}
      strokeOpacity={0.6}
      style={{ cursor: (p.type || p.note) ? 'crosshair' : 'default' }}
      onMouseEnter={e => {
        if (!p.type && !p.note) return
        setTooltip({
          x: e.clientX, y: e.clientY,
          text: `${REL_LABELS[p.type] || p.type}${p.note ? ` — ${p.note}` : ''}`,
        })
      }}
      onMouseLeave={() => setTooltip(null)}
    />
  )

  const q = searchQuery?.toLowerCase()

  return (
    <div
      className={`rel-tree-wrap${isPanning ? ' dragging-pan' : ''}`}
      ref={wrapRef}
      onWheel={onWheel}
      onPointerDown={onPtrDown}
      onPointerMove={onPtrMove}
      onPointerUp={onPtrUp}
      onPointerLeave={onPtrUp}
      style={{ touchAction: 'none', userSelect: 'none' }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ display: 'block', position: 'absolute', inset: 0 }}
      >
        <defs>
          <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <g transform={`translate(${tf.x},${tf.y}) scale(${tf.scale})`}>

          {/* Subtle grid for spatial reference */}
          <rect x={0} y={0} width={W} height={H} fill="none" stroke="none"/>

          {/* Edges */}
          {edgePaths.map(renderEdge)}

          {/* Nodes */}
          {effectiveChars.map(char => {
            const pos = POS[char.id]
            if (!pos) return null
            const color = char.color || CHAR_COLORS[char.id] || '#4AAFE0'
            const isSel = char.id === selectedId
            const isMatch = q && q.length > 1 && char.name.toLowerCase().includes(q)
            const dimmed = q && q.length > 1 && !isMatch
            // Strip single-letter middle initials (I., A., Z., H., E., V., etc.)
            const displayName = char.name.replace(/\s[A-Z]\.\s/g, ' ').replace(/\s[A-Z]\.$/, '')
            const nameParts = displayName.split(' ')

            return (
              <g
                key={char.id}
                data-node="true"
                transform={`translate(${pos.x},${pos.y})`}
                onClick={() => {
                  if (dragRef.current.didMove) return
                  onSelect(char.id)
                }}
                style={{ cursor: 'pointer', opacity: dimmed ? 0.2 : 1 }}
              >
                {/* Selection / search glow ring */}
                {(isSel || isMatch) && (
                  <circle r={R + 12} fill={color} fillOpacity={0.1} stroke={color}
                    strokeWidth={1.2} filter="url(#node-glow)" />
                )}
                {/* Importance indicator — filled inner disk for importance=3 */}
                {char.importance === 3 && (
                  <circle r={R - 8} fill={color} fillOpacity={0.22} />
                )}
                {/* Main circle */}
                <circle
                  r={R}
                  fill={color}
                  fillOpacity={0.1}
                  stroke={color}
                  strokeWidth={isSel ? 3 : 1.8}
                />
                {/* First name */}
                <text
                  y={R + 16}
                  textAnchor="middle"
                  fontFamily="'Cinzel', serif"
                  fontSize={11}
                  fill={color}
                  style={{ pointerEvents: 'none' }}
                >
                  {nameParts[0]}
                </text>
                {/* Surname if present */}
                {nameParts.length > 1 && (
                  <text
                    y={R + 28}
                    textAnchor="middle"
                    fontFamily="'Cinzel', serif"
                    fontSize={9}
                    fill={color}
                    fillOpacity={0.6}
                    style={{ pointerEvents: 'none' }}
                  >
                    {nameParts.slice(1).join(' ')}
                  </text>
                )}
                {/* Role label above node */}
                <text
                  y={-R - 9}
                  textAnchor="middle"
                  fontFamily="'Inter', sans-serif"
                  fontSize={8}
                  fill={color}
                  fillOpacity={0.45}
                  style={{ pointerEvents: 'none' }}
                >
                  {(char.role || '').split(' / ')[0].substring(0, 28)}
                </text>

                {/* Beast indicator badge — top-right */}
                {(char.beast || char.beastId) && (
                  <>
                    <circle cx={R - 5} cy={-(R - 5)} r={8}
                      fill="#9B30FF" fillOpacity={0.9} stroke="#0B1E33" strokeWidth={1.5} />
                    <text x={R - 5} y={-(R - 5) + 3} textAnchor="middle"
                      fontSize={7} fontWeight="700" fill="#fff"
                      style={{ pointerEvents: 'none' }}>B</text>
                  </>
                )}
                {/* Weapon indicator badge — top-left */}
                {(char.weapon || char.weaponId) && (
                  <>
                    <circle cx={-(R - 5)} cy={-(R - 5)} r={8}
                      fill="#D4AF37" fillOpacity={0.9} stroke="#0B1E33" strokeWidth={1.5} />
                    <text x={-(R - 5)} y={-(R - 5) + 3} textAnchor="middle"
                      fontSize={7} fontWeight="700" fill="#0B1E33"
                      style={{ pointerEvents: 'none' }}>W</text>
                  </>
                )}
              </g>
            )
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div className="rel-tooltip" style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}>
          {tooltip.text}
        </div>
      )}

      {/* Navigation hint */}
      <div className="tree-hint">Scroll to zoom · Drag to pan · Click a character to edit</div>

      {/* Zoom controls */}
      <div className="zoom-controls">
        <button className="zoom-btn"
          onClick={() => setTf(t => ({ ...t, scale: Math.min(3, t.scale * 1.2) }))}>+</button>
        <button className="zoom-btn"
          onClick={() => setTf(t => ({ ...t, scale: Math.max(0.15, t.scale * 0.82) }))}>−</button>
        <button className="zoom-btn" title="Reset view"
          onClick={() => setTf(INITIAL_TF)}>⌂</button>
      </div>
    </div>
  )
}
