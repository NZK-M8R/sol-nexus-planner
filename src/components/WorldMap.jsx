import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { HOUSE_COLORS } from '../data/characters'

// ─────────────────────────────────────────────────────────────────────────
// Realm data model — three separate realms (Limbo, Earth, Orians), each with
// its own map, locations, and layout. These are not landmasses of one fused
// world — per lore.js, Earth and Orians are separate worlds and Limbo is a
// dimensional plane/rift, not a world at all. See lore §3 (The Three Realms).
// ─────────────────────────────────────────────────────────────────────────

const REALMS = [
  { id: 'limbo',  name: 'Limbo',   tagline: 'The realm between — where Apexia, Vraka, and Selis all hold ground' },
  { id: 'earth',  name: 'Earth',   tagline: "Humanity's homeworld — site of the resistance war and, later, the refugee resettlement" },
  { id: 'orians', name: 'Orians',  tagline: 'The Ascen/Alma/Spirit homeworld — Mana, Pandora, and Sophioterra' },
]

const MAP_W = 1800
const MAP_H = 860

// ── LIMBO ───────────────────────────────────────────────────────────────
// Layout per Part 8.1: Paradise is central. North of Paradise, across the
// intervening city of Tulla, lies the region leading to Heaven. Sentia sits
// North-East. Ether (Selis's territory, home of the Celestials) sits
// South-West. Hades (Vraka's territory, home of the Ferali) sits North.
const LIMBO_LOCATIONS = [
  {
    id: 'paradise',
    name: 'Paradise',
    type: "Apexia's Capital · Seat of Emperor Irane Kazemi",
    color: '#D4AF37',
    glowColor: 'rgba(212,175,55,0.20)',
    capital: 'Paradise',
    description:
      "The Apexian capital and the center of the realm's known map — the original Primal city Vraka and Selis once destroyed in celebration, rebuilt from ruin into what Crimi Night described as equal parts armory and factory brought to life. Irane's throne room, the Undying Archives, and Sanctuary's power-core connection to the entire city all sit here. The city itself functions as a living Tool once the coronation completes — every major and minor mana requirement in the capital drawn directly from Irane's own core output through Sanctuary (§lore 9.7f, 9.7j).",
    families: ['kazemi'],
    familyLabels: [
      { name: 'House Kazemi', role: 'Emperor Irane Kazemi · The Valariyan Heads', color: '#D4AF37' },
    ],
    weapons: [
      { name: 'Sanctuary', id: 'sanctuary', note: "Empiric-class armor · the city's own power core" },
      { name: 'S-Apexia', id: 's-apexia', note: 'Empiric-class spear' },
    ],
    lore: "Paradise sits at the center of Apexia's territory, roughly 15,000km across in every direction from the throne at its heart — a span that covers the main known teleportation points connecting Orians to Limbo and Earth to Limbo in turn. Once a Primal ruin, resettled first by Apexian founders and later by billions of human refugees under the Crimi Night accords, Paradise is now the single most fortified point in the whole of Limbo.",
  },
  {
    id: 'heaven',
    name: 'Heaven',
    type: 'The Primal Capital · North of Paradise',
    color: '#C8C0FF',
    glowColor: 'rgba(200,192,255,0.18)',
    capital: 'Heaven',
    description:
      "The Primal capital, lying north of Paradise beyond Tulla — ruled by Toma More until his death at Aevum's hands during the assault chronicled in Part 8.2, and by Alex More (in practice, Aevum wearing his face) afterward. Home to the More, Wov, Osiro, and Consa clans in this era, and the site of Toma's self-glorifying founding festival, the assault that killed him, and the palace collapse that scattered Ember, Taliya, and Vesper into the Osiro-Wov succession crisis that follows.",
    families: ['more', 'wov', 'osiro', 'consa'],
    familyLabels: [
      { name: 'House More',  role: 'Ruling House · Toma → Alex/Aevum', color: '#C8C0FF' },
      { name: 'Clan Wov',    role: 'Bearer of Mother Nature (reborn) — Taliya Wov', color: '#10CC70' },
      { name: 'Clan Osiro',  role: 'Bearer of Father Time (reborn) — Ember Osiro', color: '#00b4d8' },
      { name: 'Clan Consa',  role: 'Minia Consa — Grand General', color: '#E02244' },
    ],
    weapons: [
      { name: 'Mother Nature (Reborn)', id: 'mother-nature-reborn', note: 'Clan Wov — Taliya Wov' },
      { name: 'Father Time (Reborn)',   id: 'father-time-reborn',   note: 'Clan Osiro — Ember Osiro' },
    ],
    lore: "Heaven burns during the Orian assault chronicled in Part 8.2 — Azura's forces raze large sections of the city after most of its people escape to Earth through Minia's human-only portal network. What survives afterward is a city in genuine political freefall: its founder dead, its clans in open succession crisis, and its new ruler a Primal in name only.",
  },
  {
    id: 'tulla',
    name: 'Tulla',
    type: 'Ancient-Tech City',
    color: '#0AADFF',
    glowColor: 'rgba(10,173,255,0.18)',
    capital: 'Tulla',
    description:
      "Sits between Paradise and the road leading north to Heaven. A goldmine of ancient Primordial technology and a place to harvest and transform raw resources, rich in natural mines and ore streams. Cleared of its Ferali/Celestial presence by Pandro's forces before the events of Part 8 — a campaign that took months of preparation but, once launched, resolved in a matter of hours against a defense caught unprepared.",
    families: ['kazemi'],
    familyLabels: [
      { name: 'House Kazemi', role: 'Apexian territory — administered by Pandro Lexan', color: '#0AADFF' },
    ],
    weapons: [],
    lore: "Tulla's ancient-tech deposits made it the Empire's first major territorial expansion beyond Paradise itself — a goldmine Vraka and Selis had never bothered to harvest through anything but brute extraction. Pandro's raid dismantled Tulla's Primordial defense systems down to their base circuitry during the Will-activation cascade, manifesting Kazemi's Nexus for the first time (§lore 9.6c).",
  },
  {
    id: 'sentia',
    name: 'Sentia',
    type: 'Human Resettlement City · Captured Part 8.1',
    color: '#7AABCC',
    glowColor: 'rgba(122,171,204,0.20)',
    capital: 'Sentia',
    description:
      "The largest flat, farmland-rich region on the known map — captured from the Ferali by Irane and Aphexia, fighting solo, in the first full demonstration of Apex's evolution-skip mechanic (§lore 9.7f). Resettled as the primary destination for the roughly two billion human refugees Crimi Night negotiates protection for, co-administered by Terra Night, Evelyn, and Adri Suin. Home to the Empire's first large-scale human farming, construction, and education infrastructure.",
    families: ['kazemi'],
    familyLabels: [
      { name: 'Human Resettlement', role: 'Co-administered by Terra Night, Evelyn, Adri Suin', color: '#7AABCC' },
    ],
    weapons: [],
    lore: "Sentia was, before capture, the largest city under Ferali control after Hades itself — a ruin, but the most stable and easiest of Vraka's or Selis's territories to strike given how much of Vraka's attention was fixed on his sister at the time. Terraformed rapidly under Apexian administration into functioning farmland within weeks of capture. Site of Terra Night's recurring, unresolved conflict with Mira over weaponizing human volunteers with captured Ferali/Celestial cores (§lore 9.7g).",
  },
  {
    id: 'hades',
    name: 'Hades',
    type: "Vraka's Territory · Home of the Ferali · North",
    color: '#8B0000',
    glowColor: 'rgba(139,0,0,0.20)',
    capital: 'Hades',
    description:
      "The city Vraka uses as his main base — home of the Ferali. Lies to the north of Paradise. Vraka amassed billions of Ferali here over the millennia of his standing arms race with his sister, the overwhelming majority never assigned to any individual Alma and existing purely as extensions of his own being.",
    families: [],
    familyLabels: [
      { name: 'The Ferali', role: "Vraka's forces — sealed as Beast within Azen Lucerne after the Theomachy", color: '#8B0000' },
    ],
    weapons: [],
    lore: "After the Theomachy's climactic battle (§lore 9.7i), Vraka's main core is sealed into Azen Lucerne as Beast, and every Ferali not personally bound to an Alma is severed from his direct command — left feral, evolving unpredictably in the mana-rich environment his and Selis's and Irane's combined battle left behind. Hades and its surrounding territory remain contested rather than pacified in the immediate aftermath.",
  },
  {
    id: 'ether',
    name: 'Ether',
    type: "Selis's Territory · Home of the Celestials · South-West",
    color: '#F5F5FF',
    glowColor: 'rgba(245,245,255,0.20)',
    capital: 'Ether',
    description:
      "The city Selis occupies as her home — home of the Celestials. Lies to the south-west of Paradise. Selis's own shape-shifting mana-liquid, now formally named Selis-Ore (with Selis-Fire as its mana-classification variant, §lore 9.7h), runs through the Celestials bound to her the way Selis's own blood does.",
    families: [],
    familyLabels: [
      { name: 'The Celestials', role: "Selis's forces — sealed as Tool within Elorah Seraph after the Theomachy", color: '#F5F5FF' },
    ],
    weapons: [],
    lore: "After the Theomachy's climactic battle, Selis's main core is sealed into Elorah Seraph as Tool. Ether's Celestials not personally bound to a Spirit are, like Hades's Ferali, left feral and evolving in the mana-storm's aftermath — reforming into pure, combinable machine-like beings with a central weapon-core rather than the personalities they held under Selis's direct command.",
  },
]

// ── EARTH ───────────────────────────────────────────────────────────────
// Earth's internal geography is sparsely detailed in the story compared to
// Limbo — the war is described in terms of territorial percentage and named
// factions (the Forces of Humanity, Toma's occupied zones) rather than named
// cities. Modeled at a single-region level of detail rather than invented.
const EARTH_LOCATIONS = [
  {
    id: 'earth-home',
    name: 'Earth',
    type: "Humanity's Homeworld",
    color: '#2E7A3E',
    glowColor: 'rgba(46,122,62,0.20)',
    capital: '—',
    description:
      "The human homeworld — reached through the Rift Cith More opened to shelter Adam and Eve from the Arke twins in the earliest days of the cosmology, and later found again by Toma More generations on. Site of the long war between the Forces of Humanity (led by Crimi Night) and Toma More's occupying Primal forces, and — after Part 8.1's negotiated accords — the origin point for roughly two billion human refugees resettled into Sentia. By the close of the Theomachy years, more than forty-five percent of Earth's surviving human population sat under Primal-occupied territory, a number the resistance was losing ground against before Crimi's negotiation with Irane.",
    families: [],
    familyLabels: [
      { name: 'Forces of Humanity', role: 'Crimi Night, Tan Loo — the resistance', color: '#2E7A3E' },
      { name: "Toma More's Occupation", role: "Primal-controlled territory, later Alex/Aevum's", color: '#8B0000' },
    ],
    weapons: [
      { name: 'Stellar', id: 'stellar-beast', note: "Sin Surya's beast, gifted to Tan Loo and the resistance" },
    ],
    lore: "Earth's internal geography — its continents, cities, named regions — has not been detailed at the level Limbo's cities have across Parts 6–8; what's confirmed is the state of the war (territorial percentage, named leadership, the refugee pipeline into Apexia) rather than a city-by-city map. This entry will expand as future parts establish more specific Earth geography.",
  },
]

// ── ORIANS ──────────────────────────────────────────────────────────────
const ORIANS_LOCATIONS = [
  {
    id: 'mana',
    name: 'Mana',
    type: 'The Ascen Capital',
    color: '#A8A8B0',
    glowColor: 'rgba(168,168,176,0.20)',
    capital: 'Mana',
    description:
      "The Ascen capital, seat of Niro Vane's council and the political center of Orian formal power. Niro governs from here, and it is from Mana that he names Arai Grand General/\"the Goddess,\" Zoe leader of the Alma/\"the Apex Predator,\" and Hope leader of the Spirits/\"the Empress\" after Azura, Droom, Tenma, and Pino vanish mid-battle during the Primal assault (§lore 9.7). Axola Vane's public breakdown over the growing myth of \"the 8-Anathema\" (§lore 9.6k) plays out largely in Mana's streets.",
    families: ['vane', 'nexal', 'ardent'],
    familyLabels: [
      { name: 'Ascen Council', role: 'Niro Vane presiding', color: '#A8A8B0' },
      { name: 'House Nexal',   role: 'Arai Kazemi — Grand General', color: '#1A3FBF' },
      { name: 'House Ardent',  role: 'Tola Ardent, Mira Ardent', color: '#e84855' },
    ],
    weapons: [],
    lore: "Mana takes its name from the Conceptual who taught the Ascen structured magic in the earliest era of Orian civilization — the substance every practitioner draws on today carries his name for the same reason. Niro's secret human-to-Orian-body research, begun after the war against the Primals stalls into a years-long stalemate, is conducted quietly from somewhere within Mana's own political apparatus, using research Arai unknowingly gave him after her return from Paradise.",
  },
  {
    id: 'pandora',
    name: 'Pandora',
    type: 'The Alma Capital',
    color: '#D4460A',
    glowColor: 'rgba(212,70,10,0.18)',
    capital: 'Ashgard',
    description:
      "The Alma capital, ruled by Azen Lucerne and Clan Lucerne from the fortified inner city of Ashgard, built into the crater of a fallen stellar beast. Home to the oldest Alma bloodlines — those who let their Ferali beast-contracts reshape them rather than simply wielding them as tools. During the Theomachy years, Azura Lucerne leads Alma forces against the Primals until vanishing mid-battle alongside Droom, Tenma, and Pino; Droom, one of only two of Azen's children to survive \"Survival of the Fittest\" (§lore 9.6h), is later named an Arch-Demon general under Vraka's direct command once the twins begin drawing their most powerful loyalists into permanent human-vessel forms (§lore 9.7i).",
    families: ['lucerne', 'navar'],
    familyLabels: [
      { name: 'Clan Lucerne', role: 'Azen Lucerne · Droom · Azura', color: '#D4460A' },
      { name: 'Clan Navar',   role: 'Duki Navar, client house', color: '#1A6B1A' },
    ],
    weapons: [
      { name: 'Morningfall',   id: 'morningfall',  note: "Grand weapon — Azen Lucerne" },
      { name: 'The Ruin Beast', id: 'ruin-beast',   note: 'Duki Navar, later Evin Navar (Arch-Demon)' },
    ],
    lore: "Ashgard sits at Pandora's heart, in the impact crater of the stellar beast whose death-energy forged Morningfall — the city's bones literally the creature's mineralized ribs. Pandora has no true night; the crater's residual stellar energy lights the sky in a dim golden haze the Lucerne people call the Ashlight and navigate by instead of stars.",
  },
  {
    id: 'sophioterra',
    name: 'Sophioterra',
    type: 'The Spirit Capital',
    color: '#C8C0FF',
    glowColor: 'rgba(200,192,255,0.18)',
    capital: 'Sophioterra',
    description:
      "The Spirit capital, ruled by Elorah Seraph and Clan Seraph — also referred to in older records as Seraphel, the city built around an ancient Celestial convergence point where the boundary between Tool-space and the physical world runs thin. Home to the oldest Spirit bloodlines, those who treat their Celestial tool-contracts as sacred mandate rather than simple weapon. Tenma and Pino Seraph lead Spirit forces here during the Theomachy until vanishing mid-battle; Tenma is later named an Arch-Angel general under Selis's direct command, alongside Pino and Edge Apolo.",
    families: ['seraph', 'apolo'],
    familyLabels: [
      { name: 'Clan Seraph', role: 'Elorah Seraph · Tenma · Pino', color: '#C8C0FF' },
      { name: 'Clan Apolo',  role: 'Olda Apolo, client house', color: '#5B9BD5' },
    ],
    weapons: [
      { name: 'Covenant Seraph', id: 'covenant-seraph', note: 'Grand weapon — Elorah Seraph' },
    ],
    lore: "Sophioterra has no walls — no gate, no perimeter fortification, because the Covenant Seraph has made any attempt to militarily enter the city impossible through a covenant so old no one alive remembers its origin. Invaders find themselves laying down their weapons and requesting asylum without understanding why.",
  },
]

const REALM_LOCATIONS = {
  limbo:  LIMBO_LOCATIONS,
  earth:  EARTH_LOCATIONS,
  orians: ORIANS_LOCATIONS,
}

// ─────────────────────────────────────────────────────────────────────────
// Per-realm SVG layout — shapes, labels, pins, house positions.
// Locations are rendered as territory blobs (soft rounded regions) rather
// than the old continent-path shapes, since these are cities/regions within
// a realm rather than landmasses of a single fused world.
// ─────────────────────────────────────────────────────────────────────────

// Rough elliptical "territory" footprint per location, keyed by realm+id.
// Limbo layout follows the directional description in Part 8.1: Paradise
// central; Tulla and the road to Heaven to the north; Sentia north-east;
// Ether south-west; Hades to the north (near Heaven's approach).
const REALM_SHAPES = {
  limbo: {
    paradise: { cx: 900, cy: 480, rx: 150, ry: 110 },
    heaven:   { cx: 860, cy: 120, rx: 170, ry: 90  },
    tulla:    { cx: 880, cy: 300, rx: 90,  ry: 70  },
    sentia:   { cx: 1260, cy: 340, rx: 200, ry: 140 },
    hades:    { cx: 700, cy: 130, rx: 130, ry: 90  },
    ether:    { cx: 480, cy: 650, rx: 160, ry: 120 },
  },
  earth: {
    'earth-home': { cx: 900, cy: 430, rx: 420, ry: 300 },
  },
  orians: {
    mana:        { cx: 900,  cy: 430, rx: 190, ry: 150 },
    pandora:     { cx: 480,  cy: 300, rx: 210, ry: 160 },
    sophioterra: { cx: 1320, cy: 300, rx: 210, ry: 160 },
  },
}

const REALM_HOUSE_POSITIONS = {
  limbo: {
    kazemi: { x: 900, y: 480 },
    more:   { x: 860, y: 120 },
    wov:    { x: 800, y: 100 },
    osiro:  { x: 920, y: 100 },
    consa:  { x: 860, y: 160 },
  },
  earth: {},
  orians: {
    vane:    { x: 860,  y: 400 },
    nexal:   { x: 940,  y: 460 },
    ardent:  { x: 900,  y: 400 },
    lucerne: { x: 480,  y: 300 },
    navar:   { x: 420,  y: 350 },
    seraph:  { x: 1320, y: 300 },
    apolo:   { x: 1380, y: 350 },
  },
}

function LocationShape({ loc, realmId, isSelected, isHovered, onClick, onHover }) {
  const shape = REALM_SHAPES[realmId]?.[loc.id]
  if (!shape) return null
  const active = isSelected || isHovered
  const fill   = active ? `${loc.color}30` : `${loc.color}18`
  const stroke = active ? loc.color : `${loc.color}70`
  const sw     = isSelected ? 2.5 : (isHovered ? 2 : 1.5)

  return (
    <g
      onClick={onClick}
      onMouseEnter={() => onHover(loc.id)}
      onMouseLeave={() => onHover(null)}
      style={{ cursor: 'pointer' }}
    >
      {isSelected && (
        <ellipse cx={shape.cx} cy={shape.cy} rx={shape.rx + 14} ry={shape.ry + 14}
          fill="none" stroke={loc.color} strokeWidth="10" opacity="0.08" />
      )}
      <ellipse cx={shape.cx} cy={shape.cy} rx={shape.rx} ry={shape.ry}
        fill={fill} stroke={stroke} strokeWidth={sw}
        style={{ transition: 'fill .2s, stroke .2s, stroke-width .15s' }} />
      <text x={shape.cx} y={shape.cy + 5} textAnchor="middle" fontSize={loc.id === 'paradise' || loc.id === 'earth-home' ? 18 : 14}
        fill={isSelected ? loc.color : `${loc.color}CC`} fontWeight="600"
        style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '.06em' }}>
        {loc.name}
      </text>
      {isSelected && (
        <text x={shape.cx} y={shape.cy + 22} textAnchor="middle" fontSize="9"
          fill={`${loc.color}90`} style={{ userSelect: 'none', letterSpacing: '.08em' }}>
          {loc.type?.toUpperCase()}
        </text>
      )}
    </g>
  )
}

function DetailPanel({ loc, onClose, activePart, presentChars }) {
  return (
    <div className="wm-float-detail">
      <div className="wm-float-hdr" style={{ borderLeftColor: loc.color }}>
        <div>
          <div className="wm-detail-name" style={{ color: loc.color }}>{loc.name}</div>
          <div className="wm-detail-type">{loc.type}</div>
        </div>
        <button className="wm-float-close" onClick={onClose}>×</button>
      </div>

      <p className="wm-detail-desc">{loc.description}</p>

      {loc.familyLabels.length > 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Houses &amp; Clans</div>
          <div className="wm-family-list">
            {loc.familyLabels.map((f, i) => (
              <div key={i} className="wm-family-row" style={{ borderLeftColor: f.color }}>
                <div className="wm-family-name" style={{ color: f.color }}>{f.name}</div>
                <div className="wm-family-role">{f.role}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {loc.weapons.length > 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Notable Tools &amp; Beasts</div>
          <div className="wm-weapon-list">
            {loc.weapons.map((w, i) => (
              <div key={i} className="wm-weapon-row">
                <div className="wm-weapon-name">{w.name}</div>
                <div className="wm-weapon-note">{w.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {loc.weapons.length === 0 && (
        <div className="wm-section">
          <div className="wm-section-label">Notable Tools &amp; Beasts</div>
          <div className="wm-no-weapons">No specific Tool or Beast tied to this location</div>
        </div>
      )}

      {presentChars && presentChars.length > 0 && (
        <div className="wm-section">
          <div className="wm-section-label">
            {activePart ? `Here in ${activePart.title}` : 'Characters Based Here'}
          </div>
          <div className="wm-char-present-list">
            {presentChars.map(c => (
              <span key={c.id} className="wm-char-present-chip" style={{ borderColor: `${loc.color}66`, color: loc.color }}>
                {c.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="wm-section">
        <div className="wm-section-label">Lore</div>
        <p className="wm-lore-text">{loc.lore}</p>
      </div>
    </div>
  )
}

// Flattens stories.js into a chronological list of { id, title, color, characterIds }
// rows — one per Part — so the map can filter "who was where" over time using
// the same arc data the Character Board reads, with no new data required.
function usePartTimeline(stories) {
  return useMemo(() => {
    if (!Array.isArray(stories)) return []
    const rows = []
    stories.forEach(story => {
      ;(story.arcs || []).forEach(arc => {
        rows.push({
          id: arc.id,
          title: arc.title,
          color: story.color,
          characterIds: new Set(arc.characters || []),
        })
      })
    })
    return rows
  }, [stories])
}

export default function WorldMap({ characters = [], stories = [] }) {
  const [realm,       setRealm]       = useState('limbo')
  const [selected,    setSelected]    = useState(null)
  const [hovered,     setHovered]     = useState(null)
  const [activePartId, setActivePartId] = useState('all')
  const partTimeline = usePartTimeline(stories)
  const activePart = activePartId === 'all' ? null : partTimeline.find(p => p.id === activePartId) || null
  const [view,        setView]        = useState({ x: 0, y: 0, scale: 1 })
  const viewRef  = useRef({ x: 0, y: 0, scale: 1 })
  const mapRef   = useRef(null)
  const dragging = useRef(false)
  const dragStart = useRef({})
  const canClick  = useRef(true)

  const locations = REALM_LOCATIONS[realm]
  const housePositions = REALM_HOUSE_POSITIONS[realm]
  const selectedData = locations.find(l => l.id === selected) || null

  const changeRealm = useCallback(r => {
    setRealm(r)
    setSelected(null)
    setHovered(null)
  }, [])

  // Group characters by house for pin placement, scoped to the active realm.
  // When a Part is selected, restrict to characters who actually appear in
  // that Part's arc (per stories.js) — the same data source the Character
  // Board's timeline uses, so "who was where" stays accurate to what's written.
  const charPins = useMemo(() => {
    const byHouse = {}
    ;(characters || []).forEach(c => {
      if (!c.house || !housePositions[c.house]) return
      if (activePart && !activePart.characterIds.has(c.id)) return
      if (!byHouse[c.house]) byHouse[c.house] = []
      byHouse[c.house].push(c)
    })
    return Object.entries(byHouse).flatMap(([house, chars]) => {
      const base = housePositions[house]
      return chars.map((c, i) => ({
        ...c,
        px: base.x + ((i % 5) - 2) * 16,
        py: base.y + Math.floor(i / 5) * 16,
      }))
    })
  }, [characters, housePositions, activePart])

  const fitView = useCallback(() => {
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

  // Fit map to view on mount and whenever the realm changes.
  useEffect(() => { fitView() }, [fitView, realm])

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

  const handleLocationClick = useCallback(id => {
    if (!canClick.current) return
    setSelected(prev => prev === id ? null : id)
  }, [])

  const zoomIn  = () => updateView(p => ({ ...p, scale: Math.min(5, p.scale * 1.25) }))
  const zoomOut = () => updateView(p => ({ ...p, scale: Math.max(0.35, p.scale / 1.25) }))

  const activeRealm = REALMS.find(r => r.id === realm)

  return (
    <div className="worldmap-view">
      {/* Header */}
      <div className="worldmap-header">
        <div>
          <h2 className="worldmap-title">{activeRealm.name}</h2>
          <p className="worldmap-subtitle">
            {activeRealm.tagline}. Drag to pan · Scroll to zoom · Click a location to explore its lore.
          </p>
        </div>
        <div className="wm-continent-count">{locations.length} location{locations.length === 1 ? '' : 's'}</div>
      </div>

      {/* Realm selector — reuses the Library.jsx tab convention */}
      <div className="lib-tab-row">
        {REALMS.map(r => (
          <button key={r.id} className={`lib-tab${realm === r.id ? ' active' : ''}`} onClick={() => changeRealm(r.id)}>
            {r.name}
          </button>
        ))}
      </div>

      {/* Part filter — restricts character pins to who's confirmed on-page in that Part */}
      {partTimeline.length > 0 && (
        <div className="wm-part-filter">
          <label htmlFor="wm-part-select">Show characters as of:</label>
          <select
            id="wm-part-select"
            value={activePartId}
            onChange={e => setActivePartId(e.target.value)}
          >
            <option value="all">All Parts (every known location)</option>
            {partTimeline.map(p => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
          {activePart && (
            <span className="wm-part-filter-count">{charPins.length} character{charPins.length === 1 ? '' : 's'} placed here</span>
          )}
        </div>
      )}

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

          {/* Backdrop fills everything */}
          <rect x="-9999" y="-9999" width="19998" height="19998" fill="url(#wmOcean)" />

          {/* Realm content — pan/zoom group */}
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

            {/* Locations */}
            {locations.map(loc => (
              <LocationShape
                key={loc.id}
                loc={loc}
                realmId={realm}
                isSelected={selected === loc.id}
                isHovered={hovered === loc.id}
                onClick={() => handleLocationClick(loc.id)}
                onHover={setHovered}
              />
            ))}

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
          <button className="wm-ctrl-btn" onClick={fitView} title="Fit to view">⊙</button>
        </div>

        {/* Floating detail card */}
        {selectedData && (
          <DetailPanel
            loc={selectedData}
            onClose={() => setSelected(null)}
            activePart={activePart}
            presentChars={charPins.filter(c => (selectedData.families || []).includes(c.house))}
          />
        )}

        {/* Mini-map */}
        <div className="wm-minimap">
          <svg
            width="162" height="78"
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            style={{ display: 'block' }}
          >
            <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="#030810" />
            {locations.map(loc => (
              <LocationShape
                key={loc.id}
                loc={loc}
                realmId={realm}
                isSelected={selected === loc.id}
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

      {/* Location chip bar */}
      <div className="wm-continent-chips">
        {locations.map(loc => (
          <button
            key={loc.id}
            className={`wm-chip ${selected === loc.id ? 'active' : ''}`}
            style={{ '--chip-color': loc.color }}
            onClick={() => handleLocationClick(loc.id)}
          >
            {loc.name}
          </button>
        ))}
      </div>
    </div>
  )
}
