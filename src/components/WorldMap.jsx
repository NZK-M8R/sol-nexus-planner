import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { HOUSE_COLORS } from '../data/characters'

const CONTINENTS = [
  {
    id: 'gaia',
    name: 'Eura',
    type: 'Western Supercontinent · Grand Domain: House Wov',
    color: '#10CC70',
    glowColor: 'rgba(16,204,112,0.18)',
    capital: 'Eura',
    description:
      'The western supercontinent, governed by House Wov from their capital city of Eura. Originally the Earth-side landmass before the Paradise Spell fused the two worlds. Rich in Life Force energy and natural mana. Home to Earth-origin human communities, the Wov bloodline, and the surviving Apolo and Navar clans who concealed their powers across generations.',
    families: ['wov', 'apolo', 'navar'],
    familyLabels: [
      { name: 'House Wov',   role: 'Grand Family · Inquisitor · Capital: Eura', color: '#9b5de5' },
      { name: 'Apolo Clan',  role: 'Survived by suppressing power',              color: '#5B9BD5' },
      { name: 'Navar Clan',  role: 'Survived by suppressing power',              color: '#1A6B1A' },
    ],
    weapons: [
      { name: "Oracle's Eye",   id: 'oracles-eye',     note: 'House Wov · Noble Seat XVI' },
      { name: "Tree of Eden",   id: 'tree-of-eden',    note: 'House Wov · Grand Weapon (15th Realm) · Mother Nature\'s weapon' },
    ],
    lore: "Eura carries the highest ambient Life Force concentration on Unix. The merged Earth biosphere — mountains, oceans, and wilds — exists mostly intact here, now layered with mana fields. The capital city of Eura is built around one of the oldest mana convergence points on the continent — a site Exco Wov identified before the Paradise Spell and prepared as the foundation for House Wov's permanent territorial claim. Mother Nature is believed to slumber somewhere in Eura's deepest wilderness, connected to the Tree of Eden through Vesper Wov's wielding.",
  },
  {
    id: 'terra',
    name: 'Terra',
    type: 'Eastern Supercontinent · Grand Domain: Clan Osiro',
    color: '#E02244',
    glowColor: 'rgba(224,34,68,0.18)',
    capital: 'Osirion',
    description:
      'The eastern supercontinent. This is the original Orius — the homeland of the Ascen, where the Vane dynasty first rose to power and the Grand Table was eventually established. Governed by Clan Osiro from Osirion — the city that houses the Grand Table itself. Seat of Imperial authority and the centre of noble house politics.',
    families: ['vane', 'osiro'],
    familyLabels: [
      { name: 'House Vane',   role: 'Royal Throne — current ruling house · Disputed legitimacy', color: '#e84855' },
      { name: 'Clan Osiro',  role: 'Grand Family · Treasurer · Capital: Osirion',               color: '#00b4d8' },
    ],
    weapons: [
      { name: 'Spear of Unix',      id: 'spear-of-unix',    note: 'King\'s Throne · Currently Niro Vane' },
      { name: 'Spear of Sin',       id: 'spear-of-sin',     note: 'House Osiro · Seat I' },
      { name: 'The Ripper',          id: 'the-ripper',       note: 'Gift of Vraka · Tola Ardent' },
      { name: 'Dimensional Shear',   id: 'dimensional-shear', note: 'House Apolo · Spatial Intelligence' },
      { name: "Ruin's Wake",        id: 'ruins-wake',       note: 'Gift of Vraka · Duki Navar' },
      { name: "Sova's Yoke",        id: 'sovas-yoke',       note: 'Gift of Selis · Olda Apolo' },
      { name: 'Severance Blade',    id: 'severance-blade',  note: 'Noble Seat III' },
      { name: 'Chimera Core',       id: 'chimera-core',     note: 'House Navar · Gift of Azen Lucerne' },
      { name: 'Calamity Engine',    id: 'calamity-engine',  note: 'Noble Seat V' },
      { name: 'Rune of Ragnarök',   id: 'rune-of-ragnarok', note: 'Noble Seat VI' },
      { name: 'Blade of Virtue',    id: 'blade-of-virtue',  note: 'Noble Seat IX' },
      { name: 'Chronos Bow',        id: 'chronos-bow',      note: 'Noble Seat X' },
      { name: 'Absolute Aegis',     id: 'absolute-aegis',   note: 'Noble Seat XI' },
      { name: 'Omnis Codex',        id: 'omnis-codex',      note: 'Noble Seat XII' },
      { name: 'Covenant Seal',      id: 'covenant-seal',    note: 'House Apolo · Gift of Elorah Seraph' },
    ],
    lore: "Terra was the original seat of Ascen civilisation — predating the Unix world by thousands of years. After the Paradise Spell and Great Stasis, the surviving Ascen-descended houses rebuilt here under Niro Vane's 130-year consolidation. The Grand Table is located in Terra's capital region. Most Noble Treasure weapons are maintained at Grand Table seat-houses distributed across Terra's major territories.",
  },
  {
    id: 'apex',
    name: 'Apex',
    type: 'Minor Continent (Smallest) · Empiric Domain: House Kazemi',
    color: '#0AADFF',
    glowColor: 'rgba(10,173,255,0.20)',
    capital: 'Valariya',
    description:
      'The smallest landmass on Unix and the most fortified. Home to Valariya — a self-sustaining sanctuary city and the greatest feat of civilisation on Unix. Under the absolute Empiric authority of House Kazemi. Protected by an energetic barrier that took the Valariyans 1,000 years inside the Emperor\'s dead pocket realm to develop. No army has ever breached it.',
    families: ['kazemi'],
    familyLabels: [
      { name: 'House Kazemi', role: 'Empiric Seat · Enforcer of the Grand Table · Capital: Valariya', color: '#d4af37' },
    ],
    weapons: [
      { name: 'Spear of Unix', id: 'spear-of-unix', note: 'Auris sealed within — carried by Irane as Enforcer (de facto)' },
    ],
    lore: "Apex is the smallest continent but the most consequential. Valariya sits at its centre — a circular city of concentric districts, each managed by one of the Kazemi children. The energetic barrier around Apex responds to Kazemi bloodline resonance. Niro Vane has never successfully launched a full invasion — only the Year 500 border incident came close, and even that was repelled in seconds once Irane engaged.",
  },
  {
    id: 'voidshore',
    name: 'Voidshore',
    type: 'Northern Fringe Landmass',
    color: '#9B30FF',
    glowColor: 'rgba(155,48,255,0.16)',
    description:
      'A northern landmass where the Paradise Spell left its deepest scar — a permanent Limbo bleed point. Uncontrolled mana fields make large sections uninhabitable. No major house has successfully claimed permanent territory here. Ferali manifestations are most frequent along its coastlines.',
    families: [],
    familyLabels: [],
    weapons: [],
    lore: "The rift in Voidshore is what remains of the dimensional tear Exco Wov created to cross worlds — stabilised just enough by the Paradise Spell's aftermath to not collapse, but never properly closed. Mana seeps through in concentrated streams. The Arke twins are believed to observe Unix primarily through this bleed point. Grand Table law prohibits any house from militarising the Voidshore under penalty of forced dissolution.",
  },
  {
    id: 'fractured-isles',
    name: 'The Fractured Isles',
    type: 'Southern Archipelago',
    color: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.15)',
    description:
      'A scattered southern archipelago created when the Paradise Spell\'s shockwave fractured the southern landmass into dozens of island chains. Largely ungoverned — no Grand Table house holds formal claim. Used by independent traders, exiled nobles, and smaller clans who refuse to participate in the table structure.',
    families: [],
    familyLabels: [
      { name: 'Unaffiliated Clans', role: 'Trading posts, exiles, independents', color: '#D4AF37' },
    ],
    weapons: [
      { name: 'Hollow Dirge',   id: 'hollow-dirge',   note: 'Location rumoured — unconfirmed holder' },
      { name: 'Plague Censer',  id: 'plague-censer',  note: 'Noble Seat VII — disputed' },
      { name: 'Abyssal Maul',   id: 'abyssal-maul',   note: 'Noble Seat VIII — disputed' },
    ],
    lore: "Three Noble Treasure weapons from the original 18 remain unaccounted for in the Grand Table registry — their seat-houses were either destroyed in the Year 0 chaos or voluntarily withdrew. Intelligence from House Wov's Vestarin sub-clan suggests at least two of these weapons are moving through Fractured Isles trading networks. No formal retrieval mission has been authorised.",
  },
  {
    id: 'lucerne-continent',
    name: 'Lucerne',
    type: 'Far-Western Continent · Grand Domain: Clan Lucerne',
    color: '#D4460A',
    glowColor: 'rgba(212,70,10,0.18)',
    capital: 'Ashgard',
    description:
      'A vast continent lying far to the west-southwest of Eura, separated by an open ocean crossing that takes weeks. The oldest Alma bloodlines trace their origin here — the first Terrans who accepted Ferali beast-contracts at full depth, allowing the beasts to reshape them. Ruled by Clan Lucerne from Ashgard, a fortified city built into a crater left by a fallen stellar beast. The continent has never been formally integrated into the Grand Table\'s territorial system — Clan Lucerne participates as an external Grand House, sending representatives to Osirion but maintaining full continental sovereignty.',
    families: ['lucerne'],
    familyLabels: [
      { name: 'Clan Lucerne', role: 'Grand Family · Morning-Star · Capital: Ashgard', color: '#D4460A' },
    ],
    weapons: [
      { name: 'Morningfall', id: 'morningfall', note: 'Grand weapon (13th Realm) — bound to Lucerne bloodline · Current holder: Azen Lucerne' },
    ],
    lore: "Ashgard sits in the impact crater of the stellar beast whose death energy forged Morningfall. The city is built from its bones — literally: the creature's mineralized ribs form the outer walls, and the crater's rim gives the city its unique terraced silhouette. The continent has no night in the traditional sense — the stellar-beast's residual energy still lights the sky from dusk to a dim golden haze. The Lucerne people navigate by this haze rather than stars. They call it the Ashlight.",
  },
  {
    id: 'seraph-continent',
    name: 'Seraph',
    type: 'Far-Eastern Continent · Grand Domain: Clan Seraph',
    color: '#C8C0FF',
    glowColor: 'rgba(200,192,255,0.18)',
    capital: 'Seraphel',
    description:
      'A continent lying far to the northeast of Terra, beyond the Celestial Sea. The oldest Spirit bloodlines originate here — the first Terrans who accepted Celestial tool-contracts at the highest level, treating bound weapons as divine mandates rather than instruments. Ruled by Clan Seraph from Seraphel, a city built around an ancient Celestial convergence point where the boundary between Tool-space and physical reality is permanently thin. No war has been fought on Seraph soil in recorded history — a consequence of the continent-wide covenants maintained through the Covenant Seraph over centuries.',
    families: ['seraph'],
    familyLabels: [
      { name: 'Clan Seraph', role: 'Grand Family · Spirit Bearers · Capital: Seraphel', color: '#C8C0FF' },
    ],
    weapons: [
      { name: 'Covenant Seraph', id: 'covenant-seraph', note: 'Grand weapon (14th Realm) — bound to Seraph bloodline · Current holder: Elorah Seraph' },
    ],
    lore: "Seraphel is the only city in the known world with no walls. No gate, no perimeter fortification — because the Covenant Seraph has made any attempt to militarily enter the city impossible through a covenant so old no one alive remembers when it was enacted. Visitors arrive freely. Invaders find themselves setting down their weapons and requesting asylum without understanding why. The Seraph people find this funny. The Grand Table finds it unsettling.",
  },
]

const MAP_W = 1800
const MAP_H = 860

// Enlarged continent shapes at 1800×860 scale
const SHAPES = {
  gaia: {
    type: 'path',
    d: 'M 95,108 C 130,72 180,54 235,56 C 290,58 340,80 368,116 C 392,148 395,188 375,222 C 432,210 476,228 485,268 C 494,308 465,344 425,358 C 440,398 432,438 408,464 C 384,490 345,506 300,512 C 255,518 208,514 168,495 C 128,476 98,444 82,406 C 66,368 68,326 84,295 C 62,264 55,230 60,200 C 65,168 80,140 95,108 Z',
  },
  terra: {
    type: 'path',
    d: 'M 880,74 C 926,48 988,40 1055,48 C 1122,56 1180,82 1220,122 C 1258,162 1272,212 1264,264 C 1256,316 1224,360 1178,386 C 1210,402 1235,428 1240,460 C 1245,492 1228,522 1200,540 C 1240,558 1270,588 1275,622 C 1280,656 1256,686 1220,698 C 1184,710 1140,706 1108,686 C 1068,664 1052,632 1060,600 C 1018,610 975,608 938,590 C 900,572 872,540 862,504 C 822,514 785,504 758,480 C 732,456 722,422 730,390 C 698,366 680,334 682,300 C 684,266 706,238 738,224 C 725,198 720,168 730,142 C 740,116 762,94 794,82 C 830,68 858,66 880,74 Z',
  },
  apex: {
    type: 'path',
    d: 'M 586,100 C 612,78 648,68 684,72 C 720,76 752,96 772,128 C 790,158 790,194 772,222 C 792,230 808,248 808,272 C 808,296 792,316 768,326 C 756,348 734,364 706,368 C 678,372 650,364 630,348 C 602,360 578,354 562,336 C 546,318 540,292 548,266 C 524,250 510,226 514,202 C 518,178 535,158 558,148 C 562,126 572,112 586,100 Z',
  },
  voidshore: {
    type: 'path',
    d: 'M 168,42 C 222,22 298,16 385,20 C 472,24 562,30 655,33 C 748,36 845,36 938,33 C 1031,30 1118,26 1182,38 C 1218,46 1228,64 1208,82 C 1188,100 1148,112 1095,120 C 1035,128 968,132 895,135 C 818,138 738,140 658,138 C 578,136 498,132 418,126 C 338,120 262,112 202,100 C 148,90 115,76 120,60 C 122,52 140,46 168,42 Z',
  },
}

const ISLANDS = [
  { cx: 502,  cy: 650, rx: 74, ry: 38 },
  { cx: 622,  cy: 630, rx: 58, ry: 30 },
  { cx: 728,  cy: 650, rx: 65, ry: 34 },
  { cx: 626,  cy: 714, rx: 44, ry: 24 },
  { cx: 742,  cy: 730, rx: 40, ry: 22 },
  { cx: 522,  cy: 726, rx: 36, ry: 20 },
  { cx: 820,  cy: 668, rx: 30, ry: 18 },
  { cx: 455,  cy: 670, rx: 28, ry: 16 },
]

const LABELS = {
  gaia:              { x: 276, y: 310, size: 18 },
  terra:             { x: 1042, y: 330, size: 18 },
  apex:              { x: 684,  y: 228, size: 13 },
  voidshore:         { x: 680,  y: 88,  size: 13 },
  'fractured-isles': { x: 628,  y: 684, size: 11 },
}

const LOCATION_PINS = [
  { id: 'valariya',    name: 'Valariya',     role: 'Fortress City · Kazemi Domain',   x: 684,  y: 194, color: '#D4AF37' },
  { id: 'grand-table', name: 'Grand Table',  role: 'Imperial Council Chamber',        x: 1008, y: 178, color: '#E02244' },
  { id: 'eura',        name: 'Eura',         role: 'Western Civilization Hub',         x: 222,  y: 258, color: '#10CC70' },
  { id: 'void-rift',   name: 'The Void Rift', role: 'Dimensional Bleed Point',        x: 640,  y: 302, color: '#9B30FF' },
  { id: 'voidgate',    name: 'Void Gate',    role: 'Limbo Access · Ancient Rift',     x: 640,  y: 98,  color: '#9B30FF' },
]

const HOUSE_POSITIONS = {
  kazemi:   { x: 684,  y: 240 },
  vane:     { x: 982,  y: 208 },
  osiro:    { x: 1088, y: 282 },
  vestarin: { x: 1148, y: 212 },
  wov:      { x: 218,  y: 295 },
  apolo:    { x: 158,  y: 355 },
  navar:    { x: 294,  y: 386 },
  more:     { x: 425,  y: 104 },
}

function ContinentShape({ id, color, isSelected, isHovered, onClick, onHover }) {
  const shape  = SHAPES[id]
  const label  = LABELS[id]
  const active = isSelected || isHovered
  const fill   = active ? `${color}30` : `${color}18`
  const stroke = active ? color : `${color}70`
  const sw     = isSelected ? 2.5 : (isHovered ? 2 : 1.5)

  if (id === 'fractured-isles') {
    return (
      <g
        onClick={onClick}
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onHover(null)}
        style={{ cursor: 'pointer' }}
      >
        {ISLANDS.map((isl, i) => (
          <ellipse key={i} cx={isl.cx} cy={isl.cy} rx={isl.rx} ry={isl.ry}
            fill={fill} stroke={stroke} strokeWidth={sw}
            style={{ transition: 'fill .2s, stroke .2s' }} />
        ))}
        {label && (
          <text x={label.x} y={label.y} textAnchor="middle" fontSize={label.size}
            fill={isSelected ? color : `${color}AA`} fontWeight="600"
            style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '.08em' }}>
            Fractured Isles
          </text>
        )}
      </g>
    )
  }

  if (!shape) return null
  const continentName = { gaia: 'Gaia', terra: 'Terra', apex: 'Apex', voidshore: 'Voidshore' }[id] || id
  return (
    <g
      onClick={onClick}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      {isSelected && (
        <path d={shape.d} fill="none" stroke={color} strokeWidth="12" opacity="0.07" />
      )}
      <path d={shape.d} fill={fill} stroke={stroke} strokeWidth={sw}
        style={{ transition: 'fill .2s, stroke .2s, stroke-width .15s' }} />
      {label && (
        <text x={label.x} y={label.y + 5} textAnchor="middle" fontSize={label.size}
          fill={isSelected ? color : `${color}AA`} fontWeight="600"
          style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '.06em' }}>
          {continentName}
        </text>
      )}
      {isSelected && label && (
        <text x={label.x} y={label.y + 20} textAnchor="middle" fontSize="9"
          fill={`${color}80`} style={{ userSelect: 'none', letterSpacing: '.08em' }}>
          {CONTINENTS.find(c => c.id === id)?.type?.toUpperCase()}
        </text>
      )}
    </g>
  )
}

function DetailPanel({ continent, onClose }) {
  return (
    <div className="wm-float-detail">
      <div className="wm-float-hdr" style={{ borderLeftColor: continent.color }}>
        <div>
          <div className="wm-detail-name" style={{ color: continent.color }}>{continent.name}</div>
          <div className="wm-detail-type">{continent.type}</div>
        </div>
        <button className="wm-float-close" onClick={onClose}>×</button>
      </div>

      <p className="wm-detail-desc">{continent.description}</p>

      {continent.familyLabels.length > 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Houses & Clans</div>
          <div className="wm-family-list">
            {continent.familyLabels.map((f, i) => (
              <div key={i} className="wm-family-row" style={{ borderLeftColor: f.color }}>
                <div className="wm-family-name" style={{ color: f.color }}>{f.name}</div>
                <div className="wm-family-role">{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {continent.weapons.length > 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Noble Treasures Present</div>
          <div className="wm-weapon-list">
            {continent.weapons.map((w, i) => (
              <div key={i} className="wm-weapon-row">
                <div className="wm-weapon-name">{w.name}</div>
                <div className="wm-weapon-note">{w.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {continent.weapons.length === 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Noble Treasures</div>
          <div className="wm-no-weapons">No registered Noble Treasure weapons in this territory</div>
        </div>
      )}

      <div className="wm-section">
        <div className="wm-section-label">Lore</div>
        <p className="wm-lore-text">{continent.lore}</p>
      </div>
    </div>
  )
}

export default function WorldMap({ characters = [] }) {
  const [selected,    setSelected]    = useState(null)
  const [hovered,     setHovered]     = useState(null)
  const [hoveredPin,  setHoveredPin]  = useState(null)
  const [view,        setView]        = useState({ x: 0, y: 0, scale: 1 })
  const viewRef  = useRef({ x: 0, y: 0, scale: 1 })
  const mapRef   = useRef(null)
  const dragging = useRef(false)
  const dragStart = useRef({})
  const canClick  = useRef(true)

  const selectedData = CONTINENTS.find(c => c.id === selected) || null

  // Group characters by house for pin placement
  const charPins = useMemo(() => {
    const byHouse = {}
    ;(characters || []).forEach(c => {
      if (!c.house || !HOUSE_POSITIONS[c.house]) return
      if (!byHouse[c.house]) byHouse[c.house] = []
      byHouse[c.house].push(c)
    })
    return Object.entries(byHouse).flatMap(([house, chars]) => {
      const base = HOUSE_POSITIONS[house]
      return chars.map((c, i) => ({
        ...c,
        px: base.x + ((i % 5) - 2) * 16,
        py: base.y + Math.floor(i / 5) * 16,
      }))
    })
  }, [characters])

  // Fit map to view on mount
  useEffect(() => {
    if (!mapRef.current) return
    const rect = mapRef.current.getBoundingClientRect()
    const s    = Math.min(rect.width / (MAP_W + 80), rect.height / (MAP_H + 60)) * 0.92
    const scale = Math.max(0.4, Math.min(1.5, s))
    const v = {
      scale,
      x: (rect.width  - MAP_W * scale) / 2,
      y: (rect.height - MAP_H * scale) / 2,
    }
    setView(v)
    viewRef.current = v
  }, [])

  const updateView = useCallback(fn => {
    setView(prev => {
      const next = fn(prev)
      viewRef.current = next
      return next
    })
  }, [])

  // Wheel zoom — must be non-passive
  useEffect(() => {
    const el = mapRef.current
    if (!el) return
    const onWheel = e => {
      e.preventDefault()
      const factor = e.deltaY > 0 ? 0.9 : 1.11
      const rect   = el.getBoundingClientRect()
      const cx = e.clientX - rect.left
      const cy = e.clientY - rect.top
      updateView(prev => {
        const newScale = Math.max(0.35, Math.min(5, prev.scale * factor))
        const ratio    = newScale / prev.scale
        return { scale: newScale, x: cx - ratio * (cx - prev.x), y: cy - ratio * (cy - prev.y) }
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [updateView])

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
    updateView(prev => ({ ...prev, x: dragStart.current.px + dx, y: dragStart.current.py + dy }))
  }, [updateView])

  const handleMouseUp = useCallback(() => { dragging.current = false }, [])

  const handleContinentClick = useCallback(id => {
    if (!canClick.current) return
    setSelected(prev => prev === id ? null : id)
  }, [])

  const handlePinClick = useCallback(id => {
    if (!canClick.current) return
    setHoveredPin(prev => prev === id ? null : id)
  }, [])

  const zoomIn  = () => updateView(p => ({ ...p, scale: Math.min(5, p.scale * 1.25) }))
  const zoomOut = () => updateView(p => ({ ...p, scale: Math.max(0.35, p.scale / 1.25) }))
  const resetView = () => {
    if (!mapRef.current) return
    const rect  = mapRef.current.getBoundingClientRect()
    const s     = Math.min(rect.width / (MAP_W + 80), rect.height / (MAP_H + 60)) * 0.92
    const scale = Math.max(0.4, Math.min(1.5, s))
    const v = {
      scale,
      x: (rect.width  - MAP_W * scale) / 2,
      y: (rect.height - MAP_H * scale) / 2,
    }
    setView(v)
    viewRef.current = v
  }

  const hoveredPinData = hoveredPin ? LOCATION_PINS.find(p => p.id === hoveredPin) : null

  return (
    <div className="worldmap-view">
      {/* Header */}
      <div className="worldmap-header">
        <div>
          <h2 className="worldmap-title">Unix — The Merged World</h2>
          <p className="worldmap-subtitle">
            Five landmasses born from the Paradise Spell's fusion of Earth and Orius.
            Drag to pan · Scroll to zoom · Click a continent to explore its lore.
          </p>
        </div>
        <div className="wm-continent-count">{CONTINENTS.length} landmasses</div>
      </div>

      {/* Interactive map area */}
      <div
        className="wm-map-area"
        ref={mapRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg width="100%" height="100%" style={{ display: 'block' }}>
          <defs>
            <radialGradient id="wmOcean" cx="50%" cy="50%" r="70%">
              <stop offset="0%"   stopColor="#060E1A" />
              <stop offset="100%" stopColor="#020710" />
            </radialGradient>
            <radialGradient id="wmAtmo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="transparent" />
              <stop offset="62%"  stopColor="transparent" />
              <stop offset="100%" stopColor="rgba(2,6,18,0.72)" />
            </radialGradient>
          </defs>

          {/* Ocean fills everything */}
          <rect x="-9999" y="-9999" width="19998" height="19998" fill="url(#wmOcean)" />

          {/* World content — pan/zoom group */}
          <g transform={`translate(${view.x},${view.y}) scale(${view.scale})`}>
            {/* Latitude/longitude grid */}
            {[0.14, 0.28, 0.42, 0.57, 0.71, 0.85].map(t => (
              <line key={`h${t}`} x1="0" y1={MAP_H * t} x2={MAP_W} y2={MAP_H * t}
                stroke="rgba(10,173,255,0.04)" strokeWidth="1.2" />
            ))}
            {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(t => (
              <line key={`v${t}`} x1={MAP_W * t} y1="0" x2={MAP_W * t} y2={MAP_H}
                stroke="rgba(10,173,255,0.04)" strokeWidth="1.2" />
            ))}

            {/* Continents */}
            {CONTINENTS.map(c => (
              <ContinentShape
                key={c.id}
                id={c.id}
                color={c.color}
                isSelected={selected === c.id}
                isHovered={hovered === c.id}
                onClick={() => handleContinentClick(c.id)}
                onHover={setHovered}
              />
            ))}

            {/* Location pins */}
            {LOCATION_PINS.map(pin => {
              const isHov = hoveredPin === pin.id
              const sz = 8
              return (
                <g
                  key={pin.id}
                  onClick={() => handlePinClick(pin.id)}
                  onMouseEnter={() => setHoveredPin(pin.id)}
                  onMouseLeave={() => setHoveredPin(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {isHov && <circle cx={pin.x} cy={pin.y} r={16} fill={pin.color} opacity="0.12" />}
                  <circle cx={pin.x} cy={pin.y} r={sz + 5} fill="none" stroke={pin.color} strokeWidth="1" opacity="0.22" />
                  <polygon
                    points={`${pin.x},${pin.y - sz} ${pin.x + sz * 0.7},${pin.y} ${pin.x},${pin.y + sz} ${pin.x - sz * 0.7},${pin.y}`}
                    fill={pin.color}
                    opacity={isHov ? 0.95 : 0.65}
                    style={{ transition: 'opacity .2s' }}
                  />
                  <text x={pin.x} y={pin.y - sz - 5} textAnchor="middle" fontSize="9.5"
                    fill={pin.color} fontWeight="600"
                    style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '.04em', opacity: isHov ? 1 : 0.7, transition: 'opacity .2s' }}>
                    {pin.name}
                  </text>
                </g>
              )
            })}

            {/* Character pins — small dots grouped by house */}
            {charPins.map(c => (
              <circle key={c.id}
                cx={c.px} cy={c.py} r={4}
                fill={HOUSE_COLORS?.[c.house] || '#888'}
                stroke={HOUSE_COLORS?.[c.house] || '#888'}
                strokeWidth="1"
                opacity="0.6"
                style={{ cursor: 'pointer' }}
              />
            ))}

            {/* Compass rose */}
            <g transform={`translate(${MAP_W - 58}, ${MAP_H - 58})`} opacity="0.22">
              <circle cx="0" cy="0" r="24" fill="none" stroke="rgba(200,226,248,0.35)" strokeWidth="1" />
              <text textAnchor="middle" y="-29" fontSize="10" fill="#C8E2F8" fontFamily="Cinzel, serif">N</text>
              <text textAnchor="middle" y="36"  fontSize="10" fill="#C8E2F8" fontFamily="Cinzel, serif">S</text>
              <text x="30"  textAnchor="middle" y="4" fontSize="10" fill="#C8E2F8" fontFamily="Cinzel, serif">E</text>
              <text x="-30" textAnchor="middle" y="4" fontSize="10" fill="#C8E2F8" fontFamily="Cinzel, serif">W</text>
              <line x1="0" y1="-18" x2="0" y2="18"  stroke="rgba(200,226,248,0.45)" strokeWidth="1.2" />
              <line x1="-18" y1="0" x2="18" y2="0"  stroke="rgba(200,226,248,0.45)" strokeWidth="1.2" />
              <polygon points="0,-18 4,-9 0,-5 -4,-9" fill="rgba(200,226,248,0.55)" />
            </g>
          </g>

          {/* Atmosphere vignette — screen-space, non-interactive */}
          <rect x="0" y="0" width="100%" height="100%"
            fill="url(#wmAtmo)" style={{ pointerEvents: 'none' }} />
        </svg>

        {/* Zoom controls */}
        <div className="wm-controls">
          <button className="wm-ctrl-btn" onClick={zoomIn}   title="Zoom in">+</button>
          <span   className="wm-ctrl-pct">{Math.round(view.scale * 100)}%</span>
          <button className="wm-ctrl-btn" onClick={zoomOut}  title="Zoom out">−</button>
          <button className="wm-ctrl-btn" onClick={resetView} title="Fit to view">⊙</button>
        </div>

        {/* Pinned location tooltip */}
        {hoveredPinData && (
          <div
            className="wm-pin-tooltip"
            style={{
              left: view.x + hoveredPinData.x * view.scale,
              top:  Math.max(8, view.y + (hoveredPinData.y - 36) * view.scale),
            }}
          >
            <div className="wm-pin-name" style={{ color: hoveredPinData.color }}>{hoveredPinData.name}</div>
            <div className="wm-pin-role">{hoveredPinData.role}</div>
          </div>
        )}

        {/* Floating detail card */}
        {selectedData && <DetailPanel continent={selectedData} onClose={() => setSelected(null)} />}

        {/* Mini-map */}
        <div className="wm-minimap">
          <svg
            width="162" height="78"
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            style={{ display: 'block' }}
          >
            <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="#030810" />
            {CONTINENTS.map(c => (
              <ContinentShape
                key={c.id}
                id={c.id}
                color={c.color}
                isSelected={selected === c.id}
                isHovered={false}
                onClick={() => {}}
                onHover={() => {}}
              />
            ))}
            {/* Viewport indicator */}
            {mapRef.current && (
              <rect
                x={-view.x / view.scale}
                y={-view.y / view.scale}
                width={mapRef.current.clientWidth  / view.scale}
                height={mapRef.current.clientHeight / view.scale}
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="26"
              />
            )}
          </svg>
          <div className="wm-minimap-label">Mini-map</div>
        </div>
      </div>

      {/* Continent chip bar */}
      <div className="wm-continent-chips">
        {CONTINENTS.map(c => (
          <button
            key={c.id}
            className={`wm-chip ${selected === c.id ? 'active' : ''}`}
            style={{ '--chip-color': c.color }}
            onClick={() => handleContinentClick(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  )
}
