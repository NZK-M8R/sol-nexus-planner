import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { HOUSE_COLORS, HOUSE_LABELS } from '../data/characters'

// ─────────────────────────────────────────────────────────────────────────
// Generic clan constellation — the same live, radial, per-Part-filterable
// connection map built for the Will-Bearers, generalized to any clan/house.
// Members are pulled live from `character.house` (or a custom selector),
// laid out in a ring, with their own outward ties (genetic/clan vs. story
// ally) branching further out. Full pan/zoom, unlike the fixed-viewBox
// Will-Bearers view, so a large clan can be spread out and explored.
// ─────────────────────────────────────────────────────────────────────────

const CENTER = { x: 520, y: 480 }
const MEMBER_RADIUS = 230
const OUTER_RADIUS = 130

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

export default function ClanConstellation({
  clanId, clanLabel, clanColor,
  memberIds,           // optional explicit list; otherwise derived from character.house === clanId
  characters, relationships, stories,
  onSelectChar, selectedChar,
}) {
  const [activePartId, setActivePartId] = useState('all')
  const [focusMember, setFocusMember] = useState(null)
  const [view, setView] = useState({ x: 0, y: 0, scale: 0.85 })
  const viewRef = useRef({ x: 0, y: 0, scale: 0.85 })
  const wrapRef = useRef(null)
  const dragging = useRef(false)
  const dragStart = useRef({})
  const canClick = useRef(true)

  const partTimeline = usePartTimeline(stories)
  const activePart = activePartId === 'all' ? null : partTimeline.find(p => p.id === activePartId) || null

  const charMap = useMemo(() => Object.fromEntries(characters.map(c => [c.id, c])), [characters])

  const members = useMemo(() => {
    const ids = memberIds || characters.filter(c => c.house === clanId).map(c => c.id)
    return ids.map(id => charMap[id]).filter(Boolean)
  }, [memberIds, characters, clanId, charMap])

  const updateView = useCallback(fn => {
    setView(prev => { const next = fn(prev); viewRef.current = next; return next })
  }, [])

  const resetView = useCallback(() => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const v = { scale: 0.85, x: rect.width / 2 - CENTER.x * 0.85, y: rect.height / 2 - CENTER.y * 0.85 }
    setView(v); viewRef.current = v
  }, [])

  useEffect(() => { const t = setTimeout(resetView, 30); return () => clearTimeout(t) }, [resetView, clanId])

  const handleMouseDown = useCallback(e => {
    if (e.button !== 0) return
    dragging.current = true
    canClick.current = true
    dragStart.current = { mx: e.clientX, my: e.clientY, px: viewRef.current.x, py: viewRef.current.y }
  }, [])
  const handleMouseMove = useCallback(e => {
    if (!dragging.current) return
    const dx = e.clientX - dragStart.current.mx
    const dy = e.clientY - dragStart.current.my
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) canClick.current = false
    updateView(p => ({ ...p, x: dragStart.current.px + dx, y: dragStart.current.py + dy }))
  }, [updateView])
  const handleMouseUp = useCallback(() => { dragging.current = false }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const onWheel = e => {
      e.preventDefault()
      const factor = e.deltaY > 0 ? 0.88 : 1.14
      const rect = el.getBoundingClientRect()
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top
      updateView(prev => {
        const newScale = Math.max(0.25, Math.min(3.5, prev.scale * factor))
        const ratio = newScale / prev.scale
        return { scale: newScale, x: cx - ratio * (cx - prev.x), y: cy - ratio * (cy - prev.y) }
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [updateView])

  const memberData = useMemo(() => {
    return members.map((member, mi) => {
      const angle = (mi / Math.max(members.length, 1)) * Math.PI * 2 - Math.PI / 2
      const mx = CENTER.x + Math.cos(angle) * (members.length > 1 ? MEMBER_RADIUS : 0)
      const my = CENTER.y + Math.sin(angle) * (members.length > 1 ? MEMBER_RADIUS : 0)

      const rels = relationships.filter(r => r.source === member.id || r.target === member.id)
      const connections = rels
        .map(r => {
          const otherId = r.source === member.id ? r.target : r.source
          const other = charMap[otherId]
          if (!other) return null
          if (activePart && !activePart.characterIds.has(otherId)) return null
          const isGenetic = ['parent', 'sibling'].includes(r.type)
          return { rel: r, character: other, isGenetic, isInClan: other.house === clanId }
        })
        .filter(Boolean)
        .reduce((acc, c) => {
          const existing = acc.find(a => a.character.id === c.character.id)
          if (!existing) acc.push(c)
          else if (c.isGenetic) existing.isGenetic = true
          return acc
        }, [])
        // Skip connections to other members of the same clan already shown as their own node
        .filter(c => !members.some(m => m.id === c.character.id))

      const genetic = connections.filter(c => c.isGenetic)
      const allies  = connections.filter(c => !c.isGenetic)

      const placeArc = (list, spread) => list.map((c, i) => {
        const t = list.length > 1 ? (i / (list.length - 1)) - 0.5 : 0
        const a = angle + t * spread
        return { ...c, x: mx + Math.cos(a) * OUTER_RADIUS, y: my + Math.sin(a) * OUTER_RADIUS }
      })

      return {
        id: member.id,
        member,
        x: mx, y: my,
        color: member.color || HOUSE_COLORS[member.house] || clanColor || '#9B30FF',
        genetic: placeArc(genetic, 1.1),
        allies: placeArc(allies, 1.7),
        inPart: !activePart || activePart.characterIds.has(member.id),
      }
    })
  }, [members, relationships, activePart, charMap, clanId, clanColor])

  // Intra-clan edges: relationships directly between two members of this clan
  const intraClanEdges = useMemo(() => {
    const memberIdSet = new Set(members.map(m => m.id))
    return relationships.filter(r => memberIdSet.has(r.source) && memberIdSet.has(r.target))
  }, [members, relationships])

  const visibleMembers = focusMember ? memberData.filter(m => m.id === focusMember) : memberData
  const posById = Object.fromEntries(memberData.map(m => [m.id, m]))

  return (
    <div className="clan-constellation">
      <div className="wc-toolbar">
        <div className="wc-toolbar-text">
          <h3 style={{ color: clanColor }}>{clanLabel || HOUSE_LABELS[clanId] || clanId}</h3>
          <p>{members.length} member{members.length === 1 ? '' : 's'} tracked. Drag to pan, scroll to zoom. Click a member to isolate their branch; click any node to open it in Family Trees.</p>
        </div>
        <div className="wc-toolbar-controls">
          {partTimeline.length > 0 && (
            <select value={activePartId} onChange={e => setActivePartId(e.target.value)} className="wc-part-select">
              <option value="all">All Parts (full history)</option>
              {partTimeline.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          )}
          {focusMember && (
            <button className="wc-clear-focus" onClick={() => setFocusMember(null)}>✕ Show All Members</button>
          )}
          <div className="wc-zoom-controls">
            <button onClick={() => updateView(p => ({ ...p, scale: Math.min(3.5, p.scale * 1.2) }))}>+</button>
            <span>{Math.round(view.scale * 100)}%</span>
            <button onClick={() => updateView(p => ({ ...p, scale: Math.max(0.25, p.scale / 1.2) }))}>−</button>
            <button onClick={resetView} title="Fit to view">⊙</button>
          </div>
        </div>
      </div>

      <div
        className="wc-canvas-wrap wc-canvas-wrap--pannable"
        ref={wrapRef}
        style={{ cursor: dragging.current ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg width="100%" height="100%" className="wc-svg wc-svg--free">
          <defs>
            <radialGradient id={`ccGlow-${clanId}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={clanColor || '#9B30FF'} stopOpacity="0.18" />
              <stop offset="100%" stopColor={clanColor || '#9B30FF'} stopOpacity="0" />
            </radialGradient>
          </defs>
          <g transform={`translate(${view.x},${view.y}) scale(${view.scale})`}>
            {members.length > 1 && <circle cx={CENTER.x} cy={CENTER.y} r={MEMBER_RADIUS + 40} fill={`url(#ccGlow-${clanId})`} />}

            {/* Ring spokes connecting each member to the clan center */}
            {members.length > 1 && memberData.map(m => (
              <line
                key={`spoke-${m.id}`}
                x1={CENTER.x} y1={CENTER.y} x2={m.x} y2={m.y}
                stroke={m.color}
                strokeWidth={focusMember && focusMember !== m.id ? 1 : 2.5}
                strokeOpacity={focusMember && focusMember !== m.id ? 0.1 : (m.inPart ? 0.6 : 0.12)}
                strokeDasharray="9,7"
                className="wc-flow-line"
              />
            ))}

            {/* Direct intra-clan relationship edges */}
            {intraClanEdges.map(e => {
              const s = posById[e.source], t = posById[e.target]
              if (!s || !t) return null
              const isFocused = focusMember && (e.source === focusMember || e.target === focusMember)
              const isDimmed = focusMember && !isFocused
              return (
                <line key={e.id} x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                  stroke={e.color || clanColor || '#E8B84B'}
                  strokeWidth={isFocused ? 3 : 1.8}
                  strokeOpacity={isDimmed ? 0.08 : (isFocused ? 0.9 : 0.5)}
                  strokeDasharray={['parent', 'sibling'].includes(e.type) ? '3,3' : 'none'}
                />
              )
            })}

            {members.length > 1 && (
              <text x={CENTER.x} y={CENTER.y} textAnchor="middle" fontSize="12" fill={clanColor || '#9B30FF'}
                fontFamily="Cinzel, serif" fontWeight="700" opacity="0.5" style={{ userSelect: 'none' }}>
                {(clanLabel || HOUSE_LABELS[clanId] || clanId).toUpperCase()}
              </text>
            )}

            {visibleMembers.map(m => (
              <g key={m.id} opacity={m.inPart ? 1 : 0.25}>
                {m.genetic.map(c => (
                  <line key={`gen-${m.id}-${c.character.id}`} x1={m.x} y1={m.y} x2={c.x} y2={c.y}
                    stroke="#E8B84B" strokeWidth="2" strokeOpacity="0.7" strokeDasharray="3,3" />
                ))}
                {m.allies.map(c => (
                  <line key={`ally-${m.id}-${c.character.id}`} x1={m.x} y1={m.y} x2={c.x} y2={c.y}
                    stroke={m.color} strokeWidth="1.4" strokeOpacity="0.4" />
                ))}

                <g
                  transform={`translate(${m.x},${m.y})`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => { if (canClick.current) setFocusMember(focusMember === m.id ? null : m.id) }}
                >
                  <circle r={30} fill={`${m.color}2A`} stroke={m.color} strokeWidth={selectedChar?.id === m.id ? 3.5 : 2.5} />
                  <text textAnchor="middle" y={5} fontSize="13" fontWeight="700" fill={m.color} fontFamily="Cinzel, serif">
                    {m.member.name.charAt(0)}
                  </text>
                  <text textAnchor="middle" y={46} fontSize="11" fontWeight="700" fill={m.color}>{m.member.name.split(' ')[0]}</text>
                  {m.member.role && (
                    <text textAnchor="middle" y={59} fontSize="8" fill="var(--text-dim)" style={{ textTransform: 'uppercase', letterSpacing: '.03em' }}>
                      {m.member.role.split('·')[0].trim().slice(0, 26)}
                    </text>
                  )}
                </g>

                {[...m.genetic, ...m.allies].map(c => {
                  const isGenetic = m.genetic.includes(c)
                  const nColor = isGenetic ? '#E8B84B' : (c.character.color || HOUSE_COLORS[c.character.house] || m.color)
                  return (
                    <g
                      key={`node-${m.id}-${c.character.id}`}
                      transform={`translate(${c.x},${c.y})`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => { if (canClick.current) onSelectChar?.(c.character) }}
                    >
                      <circle r={17} fill={`${nColor}22`} stroke={nColor} strokeWidth={selectedChar?.id === c.character.id ? 3 : 1.5}
                        strokeDasharray={isGenetic ? '3,2' : 'none'} />
                      <text textAnchor="middle" y={4} fontSize="9.5" fontWeight="700" fill={nColor}>
                        {c.character.name.charAt(0)}
                      </text>
                      <text textAnchor="middle" y={29} fontSize="8.5" fill="var(--text-muted)">{c.character.name.split(' ')[0]}</text>
                      <text textAnchor="middle" y={38} fontSize="7" fill={nColor} style={{ textTransform: 'uppercase' }}>
                        {isGenetic ? (c.rel.type === 'parent' ? 'family' : 'sibling') : (c.rel.type || '')}
                      </text>
                    </g>
                  )
                })}
              </g>
            ))}

            <g
              transform={`translate(${CENTER.x},${CENTER.y})`}
              style={{ cursor: members.length === 1 ? 'pointer' : 'default' }}
              onClick={() => members.length === 1 && canClick.current && onSelectChar?.(members[0])}
            >
              {members.length === 1 && (
                <>
                  <circle r={34} fill={`${clanColor || '#9B30FF'}2A`} stroke={clanColor || '#9B30FF'} strokeWidth={2.5} />
                  <text textAnchor="middle" y={5} fontSize="14" fontWeight="700" fill={clanColor} fontFamily="Cinzel, serif">
                    {members[0].name.charAt(0)}
                  </text>
                  <text textAnchor="middle" y={52} fontSize="11" fontWeight="700" fill={clanColor}>{members[0].name}</text>
                </>
              )}
            </g>
          </g>
        </svg>
      </div>

      <div className="wc-legend">
        <span><span className="wc-legend-swatch" style={{ background: clanColor || '#9B30FF' }} /> Clan member</span>
        <span><span className="wc-legend-swatch" style={{ background: '#E8B84B', border: '1px dashed #E8B84B' }} /> Genetic / family tie</span>
        <span><span className="wc-legend-swatch" style={{ background: '#7AABCC' }} /> Story-arc ally or role</span>
        <span className="wc-legend-hint">Dimmed nodes are not confirmed present in the selected Part.</span>
      </div>
    </div>
  )
}
