import { useState } from 'react'

const CONTINENTS = [
  {
    id: 'gaia',
    name: 'Gaia',
    type: 'Western Supercontinent',
    color: '#10CC70',
    glowColor: 'rgba(16,204,112,0.18)',
    description:
      'The western supercontinent. Originally the Earth-side landmass before the Paradise Spell fused the two worlds. Rich in Life Force energy and natural mana. Home to Earth-origin human communities, the Wov bloodline, and the surviving Apolo and Navar clans who concealed their powers across generations.',
    families: ['wov', 'apolo', 'navar'],
    familyLabels: [
      { name: 'House Wov',   role: 'Permanent Noble · Inquisitor',     color: '#10CC70' },
      { name: 'Apolo Clan',  role: 'Survived by suppressing power',     color: '#E87B22' },
      { name: 'Navar Clan',  role: 'Survived by suppressing power',     color: '#9b5de5' },
    ],
    weapons: [
      { name: "Oracle's Eye",        id: 'oracles-eye',    note: 'House Wov · Seat XVI' },
      { name: "Mother Nature's Weapon", id: 'nature-weapon', note: 'Wov bloodline — keeper lineage since Exco Wov' },
    ],
    lore: "Gaia carries the highest ambient Life Force concentration on Unix. The merged Earth biosphere — mountains, oceans, and wilds — exists mostly intact here, now layered with mana fields. Mother Nature and Father Time, the Earth-native Vethara-equivalents, still slumber somewhere within Gaia's deepest wilderness.",
  },
  {
    id: 'terra',
    name: 'Terra',
    type: 'Eastern Supercontinent',
    color: '#E02244',
    glowColor: 'rgba(224,34,68,0.18)',
    description:
      'The eastern supercontinent. This is the original Orius — the homeland of the Ascen, where the Vane dynasty first rose to power and the Grand Table was eventually established. Seat of Imperial authority and the centre of noble house politics. Most of the 18 Noble Treasure weapon seats are distributed across Terra\'s great houses.',
    families: ['vane', 'osiro', 'vestarin'],
    familyLabels: [
      { name: 'House Vane',     role: 'King\'s Throne — current ruling house', color: '#e84855' },
      { name: 'House Osiro',    role: 'Permanent Noble · Treasurer',           color: '#00b4d8' },
      { name: 'Clan Vestarin',  role: 'Intel & Inquisition',                   color: '#9b5de5' },
    ],
    weapons: [
      { name: 'Spear of Unix',      id: 'spear-of-unix',    note: 'King\'s Throne · Currently Niro Vane' },
      { name: 'Spear of Sin',       id: 'spear-of-sin',     note: 'House Osiro · Seat I' },
      { name: 'Rift Cleaver',       id: 'rift-cleaver',     note: 'Noble Seat II' },
      { name: 'Severance Blade',    id: 'severance-blade',  note: 'Noble Seat III' },
      { name: 'Chimera Core',       id: 'chimera-core',     note: 'Noble Seat IV' },
      { name: 'Calamity Engine',    id: 'calamity-engine',  note: 'Noble Seat V' },
      { name: 'Rune of Ragnarök',   id: 'rune-of-ragnarok', note: 'Noble Seat VI' },
      { name: 'Blade of Virtue',    id: 'blade-of-virtue',  note: 'Noble Seat IX' },
      { name: 'Chronos Bow',        id: 'chronos-bow',      note: 'Noble Seat X' },
      { name: 'Absolute Aegis',     id: 'absolute-aegis',   note: 'Noble Seat XI' },
      { name: 'Omnis Codex',        id: 'omnis-codex',      note: 'Noble Seat XII' },
      { name: 'Covenant Seal',      id: 'covenant-seal',    note: 'Noble Seat — Grand Table enforcement' },
    ],
    lore: "Terra was the original seat of Ascen civilisation — predating the Unix world by thousands of years. After the Paradise Spell and Great Stasis, the surviving Ascen-descended houses rebuilt here under Niro Vane's 130-year consolidation. The Grand Table is located in Terra's capital region. Most Noble Treasure weapons are maintained at Grand Table seat-houses distributed across Terra's major territories.",
  },
  {
    id: 'apex',
    name: 'Apex',
    type: 'Minor Continent (Smallest)',
    color: '#0AADFF',
    glowColor: 'rgba(10,173,255,0.20)',
    description:
      'The smallest landmass on Unix and the most fortified. Home to Valariya — a self-sustaining sanctuary city and the greatest feat of civilisation on Unix. Under the absolute authority of House Kazemi. Protected by an energetic barrier that took the Valariyans 1,000 years inside the Emperor\'s dead pocket realm to develop. No army has ever breached it.',
    families: ['kazemi'],
    familyLabels: [
      { name: 'House Kazemi', role: 'Enforcer of the Grand Table · Rulers of Valariya', color: '#d4af37' },
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
    lore: "Three Noble Treasure weapons from the original 18 remain unaccounted for in the Grand Table registry — their seat-houses were either destroyed in the Year 0 chaos or voluntarily withdrew. Intelligence from House Vestarin suggests at least two of these weapons are moving through Fractured Isles trading networks. No formal retrieval mission has been authorised.",
  },
]

const SVG_W = 1100
const SVG_H = 520

const SHAPES = {
  gaia: {
    type: 'path',
    d: 'M 40,168 C 58,122 105,88 165,72 C 228,56 295,58 358,80 C 408,97 444,128 458,168 C 470,200 466,232 450,262 C 434,292 406,318 370,338 C 330,360 278,372 224,368 C 170,364 118,350 82,322 C 48,296 30,262 28,226 C 26,192 28,176 40,168 Z',
  },
  terra: {
    type: 'path',
    d: 'M 762,118 C 800,80 860,64 926,70 C 995,76 1062,100 1100,136 C 1130,164 1142,200 1138,238 C 1134,278 1112,312 1074,336 C 1032,362 978,374 920,368 C 858,362 794,344 758,310 C 730,284 726,250 730,216 C 734,184 748,150 762,118 Z',
  },
  apex: {
    type: 'path',
    d: 'M 520,122 C 532,106 552,100 574,106 C 600,112 620,128 624,150 C 628,168 616,184 598,192 C 580,200 555,200 536,190 C 516,180 506,162 508,148 C 510,136 514,130 520,122 Z',
  },
  voidshore: {
    type: 'path',
    d: 'M 336,50 C 356,32 390,26 428,34 C 468,42 502,58 514,80 C 522,96 514,116 490,126 C 466,136 430,134 398,122 C 366,110 344,94 336,76 C 330,64 330,56 336,50 Z',
  },
}

const ISLANDS = [
  { cx: 528, cy: 470, rx: 56, ry: 28 },
  { cx: 628, cy: 446, rx: 42, ry: 22 },
  { cx: 700, cy: 468, rx: 38, ry: 20 },
]

const LABELS = {
  gaia:           { x: 224, y: 226, size: 16 },
  terra:          { x: 932, y: 222, size: 16 },
  apex:           { x: 568, y: 155, size: 11 },
  voidshore:      { x: 424, y: 83,  size: 11 },
  'fractured-isles': { x: 610, y: 462, size: 10 },
}

function ContinentShape({ id, color, glowColor, isSelected, onClick }) {
  const shape  = SHAPES[id]
  const label  = LABELS[id]
  const fill   = isSelected ? `${color}44` : `${color}1A`
  const stroke = isSelected ? color : `${color}88`
  const sw     = isSelected ? 2.5 : 1.5

  if (id === 'fractured-isles') {
    return (
      <g onClick={onClick} style={{ cursor: 'pointer' }}>
        {isSelected && ISLANDS.map((isl, i) => (
          <ellipse key={i} cx={isl.cx} cy={isl.cy} rx={isl.rx + 4} ry={isl.ry + 4}
            fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
        ))}
        {ISLANDS.map((isl, i) => (
          <ellipse key={i} cx={isl.cx} cy={isl.cy} rx={isl.rx} ry={isl.ry}
            fill={fill} stroke={stroke} strokeWidth={sw} />
        ))}
        {label && (
          <text x={label.x} y={label.y} textAnchor="middle" fontSize={label.size}
            fill={isSelected ? color : `${color}AA`} fontWeight="600"
            style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}>
            Fractured Isles
          </text>
        )}
      </g>
    )
  }

  if (!shape) return null
  return (
    <g onClick={onClick} style={{ cursor: 'pointer' }}>
      {isSelected && (
        <path d={shape.d} fill="none" stroke={color} strokeWidth="6" opacity="0.12"
          style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
      )}
      <path d={shape.d} fill={fill} stroke={stroke} strokeWidth={sw} />
      {label && (
        <text x={label.x} y={label.y + 5} textAnchor="middle" fontSize={label.size}
          fill={isSelected ? color : `${color}AA`} fontWeight="600"
          style={{ userSelect: 'none', fontFamily: 'Cinzel, serif', letterSpacing: '0.06em' }}>
          {id === 'voidshore' ? 'Voidshore' : id === 'apex' ? 'Apex' : id.charAt(0).toUpperCase() + id.slice(1)}
        </text>
      )}
      {isSelected && label && (
        <text x={label.x} y={label.y + 18} textAnchor="middle" fontSize="8"
          fill={`${color}88`} style={{ userSelect: 'none', letterSpacing: '0.08em' }}>
          {CONTINENTS.find(c => c.id === id)?.type?.toUpperCase()}
        </text>
      )}
    </g>
  )
}

function DetailPanel({ continent }) {
  if (!continent) return (
    <div className="wm-empty">
      <div className="wm-empty-icon">🌍</div>
      <div className="wm-empty-label">Select a continent to explore</div>
    </div>
  )

  return (
    <div className="wm-detail">
      <div className="wm-detail-hdr" style={{ borderLeftColor: continent.color }}>
        <div className="wm-detail-name" style={{ color: continent.color }}>{continent.name}</div>
        <div className="wm-detail-type">{continent.type}</div>
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

export default function WorldMap() {
  const [selected, setSelected] = useState(null)

  const selectedData = CONTINENTS.find(c => c.id === selected) || null

  const handleClick = (id) => setSelected(prev => prev === id ? null : id)

  return (
    <div className="worldmap-view">
      <div className="worldmap-left">
        <div className="worldmap-header">
          <div>
            <h2 className="worldmap-title">Unix — The Merged World</h2>
            <p className="worldmap-subtitle">
              Five landmasses born from the Paradise Spell's catastrophic fusion of Earth and Orius.
              Click a continent to explore its families, treasures, and lore.
            </p>
          </div>
          <div className="wm-continent-count">{CONTINENTS.length} landmasses</div>
        </div>

        <div className="worldmap-svg-wrap">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="worldmap-svg"
            style={{ width: '100%', height: '100%' }}
          >
            <defs>
              <radialGradient id="oceanGrad" cx="50%" cy="50%" r="70%">
                <stop offset="0%"   stopColor="#060E1A" />
                <stop offset="100%" stopColor="#030810" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Ocean */}
            <rect x="0" y="0" width={SVG_W} height={SVG_H} fill="url(#oceanGrad)" rx="4" />

            {/* Subtle grid lines */}
            {[130, 260, 390].map(y => (
              <line key={`h${y}`} x1="0" y1={y} x2={SVG_W} y2={y}
                stroke="rgba(10,173,255,0.05)" strokeWidth="1" />
            ))}
            {[220, 440, 660, 880].map(x => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2={SVG_H}
                stroke="rgba(10,173,255,0.05)" strokeWidth="1" />
            ))}

            {/* Continents */}
            {CONTINENTS.map(c => (
              <ContinentShape
                key={c.id}
                id={c.id}
                color={c.color}
                glowColor={c.glowColor}
                isSelected={selected === c.id}
                onClick={() => handleClick(c.id)}
              />
            ))}

            {/* Compass rose — bottom right */}
            <g transform={`translate(${SVG_W - 44}, ${SVG_H - 44})`} opacity="0.25">
              <circle cx="0" cy="0" r="18" fill="none" stroke="rgba(200,226,248,0.4)" strokeWidth="1" />
              <text textAnchor="middle" y="-22" fontSize="9" fill="#C8E2F8">N</text>
              <text textAnchor="middle" y="28"  fontSize="9" fill="#C8E2F8">S</text>
              <text x="22"  textAnchor="middle" y="3" fontSize="9" fill="#C8E2F8">E</text>
              <text x="-22" textAnchor="middle" y="3" fontSize="9" fill="#C8E2F8">W</text>
              <line x1="0" y1="-14" x2="0" y2="14" stroke="rgba(200,226,248,0.5)" strokeWidth="1" />
              <line x1="-14" y1="0" x2="14" y2="0" stroke="rgba(200,226,248,0.5)" strokeWidth="1" />
            </g>
          </svg>
        </div>

        <div className="wm-continent-chips">
          {CONTINENTS.map(c => (
            <button
              key={c.id}
              className={`wm-chip ${selected === c.id ? 'active' : ''}`}
              style={{ '--chip-color': c.color }}
              onClick={() => handleClick(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className={`worldmap-right ${selectedData ? 'open' : ''}`}>
        <DetailPanel continent={selectedData} />
      </div>
    </div>
  )
}
