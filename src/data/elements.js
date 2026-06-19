// Elemental system for the Sol-Nexus world
//
// ── Element tiers ─────────────────────────────────────────────────────────
//   Primordial (5) — Flame, Hydro, Earth, Air, Cryo
//                    The base natural forces. Can be used alone or combined.
//   Ascended (3)   — Electro, Nature, Energy
//                    Cannot be used alone as a base. Each combines with any
//                    Primordial to produce an Advanced / "beyond normal" form.
//
// ── Mana nature (character profile) ──────────────────────────────────────
//   Polarity     — Light | Darkness
//                  Determines whether the character's mana flows toward
//                  creation/purification (Light) or consumption/entropy (Dark).
//   HC / CH      — Ability-level properties, NOT character attributes.
//                  HC (Harmonic Chaos): ability starts ordered, escalates to chaos.
//                  CH (Chaotic Harmony): ability starts chaotic, resolves to precision.
//
// ── Full mana profile format ──────────────────────────────────────────────
//   [Polarity] · [Primordial Element] + [Ascended Element (optional)]
//   → [Advanced Form Name]
//   e.g. "Dark · Flame + Electro → Plasma"
//
// ── Beast archetypes ──────────────────────────────────────────────────────
//   Each Advanced Form carries a natural beast archetype.
//   Aura-dominant characters are BORN with this beast.
//   Force-dominant characters must FIND one in the wild.

// ── Primordial Elements ───────────────────────────────────────────────────
export const PRIMAL_ELEMENTS = [
  {
    id: 'flame',
    name: 'Flame',
    tier: 'primordial',
    color: '#FF4500',
    glyph: '▲',
    affinity: 'Offense',
    description: 'Passion, destruction, irreversible change. Flame users are aggressive and conviction-driven — their power grows proportional to belief. The element of war, ambition, and will.',
  },
  {
    id: 'hydro',
    name: 'Hydro',
    tier: 'primordial',
    color: '#1E90FF',
    glyph: '◇',
    affinity: 'Adaptability',
    description: 'Flow, patience, recovery. Hydro users read opponents and reshape around them. The element of endurance, healing, and the slow victory that exhausts all resistance.',
  },
  {
    id: 'earth',
    name: 'Earth',
    tier: 'primordial',
    color: '#A0742A',
    glyph: '■',
    affinity: 'Defense',
    description: 'Stability, permanence, immovability. Earth users build slowly and cannot be drained. The element of protection, legacy, and things that outlast everything else.',
  },
  {
    id: 'air',
    name: 'Air',
    tier: 'primordial',
    color: '#7EC8C8',
    glyph: '○',
    affinity: 'Speed',
    description: 'Freedom, evasion, precision. Air users outpace and outread everything. The element of reaction, space control, and the strike that arrives before the decision to strike.',
  },
  {
    id: 'cryo',
    name: 'Cryo',
    tier: 'primordial',
    color: '#87CEEB',
    glyph: '✦',
    affinity: 'Control',
    description: 'Stillness, restraint, absolute zone control. Cryo users trade offense for ownership of space. The element of patience weaponized — nothing escapes what cryo decides to hold.',
  },
]

// ── Ascended Elements ──────────────────────────────────────────────────────
// These cannot be used standalone — they amplify a Primordial element into an advanced form
export const CATALYST_ELEMENTS = [
  {
    id: 'electro',
    name: 'Electro',
    tier: 'ascended',
    color: '#FFD700',
    glyph: '⚡',
    affinity: 'Precision · Disruption',
    description: 'The catalyst of instant force and perfect targeting. Electro paired with a Primordial does not add — it multiplies. The resulting combination strikes faster and bypasses more resistance than either element alone.',
  },
  {
    id: 'nature',
    name: 'Nature',
    tier: 'ascended',
    color: '#4CAF50',
    glyph: '❋',
    affinity: 'Life · Growth',
    description: 'The catalyst of living energy. Nature paired with a Primordial gives the element consciousness — the resulting combination can grow, adapt, and act semi-independently of the user\'s will.',
  },
  {
    id: 'energy',
    name: 'Energy',
    tier: 'ascended',
    color: '#C850FF',
    glyph: '◎',
    affinity: 'Pure Mana · Amplification',
    description: 'Raw concentrated mana used as a catalyst. Energy paired with a Primordial strips it down to its most perfect, most destructive core. The resulting combination is unstable but unparalleled in output.',
  },
]

export const ALL_ELEMENTS = [...PRIMAL_ELEMENTS, ...CATALYST_ELEMENTS]
export const ELEMENT_MAP = Object.fromEntries(ALL_ELEMENTS.map(e => [e.id, e]))

// ── Ascended + Primordial Combinations ────────────────────────────────────
// 15 total (3 ascended × 5 primordials)
// beastArchetype: the natural beast class for a character with this Mana Nature
export const ELEMENT_COMBINATIONS = [

  // ── Electro + Primordial ────────────────────────────────────────────────
  {
    catalyst: 'electro', primal: 'flame',
    id: 'plasma',
    name: 'Plasma',
    color: '#FF9500',
    affinity: 'Penetration',
    beastArchetype: 'Arc Serpent',
    description: 'Superheated matter between energy states. Plasma burns through aura shields and force barriers alike. The most destructive single-target catalyst pairing — virtually nothing resists it at full output.',
  },
  {
    catalyst: 'electro', primal: 'hydro',
    id: 'storm-current',
    name: 'Storm Current',
    color: '#00CED1',
    affinity: 'Conductance',
    beastArchetype: 'Thunder Eel',
    description: 'Electrically charged water that conducts through any ambient moisture. Storm current turns rain, humidity, and sweat into a battlefield-wide weapon network.',
  },
  {
    catalyst: 'electro', primal: 'earth',
    id: 'tectonic',
    name: 'Tectonic',
    color: '#8B8B00',
    affinity: 'Seismic',
    beastArchetype: 'Seismic Tortoise',
    description: 'Electrical charge conducted through the ground itself. Tectonic users reshape terrain and deliver devastating charge through any contact with earth.',
  },
  {
    catalyst: 'electro', primal: 'air',
    id: 'thunderstorm',
    name: 'Thunderstorm',
    color: '#6496C8',
    affinity: 'Atmospheric',
    beastArchetype: 'Storm Eagle',
    description: 'Complete atmospheric electrification. Thunderstorm users command weather itself — reshaping environmental conditions across vast distances with a thought.',
  },
  {
    catalyst: 'electro', primal: 'cryo',
    id: 'frost-lightning',
    name: 'Frost Lightning',
    color: '#00FFFF',
    affinity: 'Paralysis',
    beastArchetype: 'Cryo Eel',
    description: 'Simultaneously burning and freezing on contact. Targets struck by frost lightning are paralyzed at the cellular level — the body cannot process the contradicting damage signals.',
  },

  // ── Nature + Primordial ─────────────────────────────────────────────────
  {
    catalyst: 'nature', primal: 'flame',
    id: 'wildfire',
    name: 'Wildfire',
    color: '#FF6B00',
    affinity: 'Living Flame',
    beastArchetype: 'Living Phoenix',
    description: 'Fire that breathes. Wildfire has instinct — it seeks what it wants to consume and avoids what it wants to preserve. The user guides but cannot fully control it.',
  },
  {
    catalyst: 'nature', primal: 'hydro',
    id: 'healing-tide',
    name: 'Healing Tide',
    color: '#40E0A0',
    affinity: 'Restoration',
    beastArchetype: 'Seraph Manta',
    description: 'Water that remembers its purpose. Healing tide reads wounds and targets them instinctively, purifying corruption and reknitting cellular damage at a rate no technique can match.',
  },
  {
    catalyst: 'nature', primal: 'earth',
    id: 'living-earth',
    name: 'Living Earth',
    color: '#4A7A30',
    affinity: 'Genesis',
    beastArchetype: 'Ancient Golem',
    description: 'Earth with a heartbeat. Living earth grows, adapts, and reclaims — terrain controlled by this element actively works against those who stand on it.',
  },
  {
    catalyst: 'nature', primal: 'air',
    id: 'verdant-gale',
    name: 'Verdant Gale',
    color: '#88CC44',
    affinity: 'Life Wind',
    beastArchetype: 'Pollen Hawk',
    description: 'Wind carrying seed and life. Verdant gale spreads the user\'s will across distance — planting effects, spreading restoration, or seeding toxins through the air.',
  },
  {
    catalyst: 'nature', primal: 'cryo',
    id: 'permabloom',
    name: 'Permabloom',
    color: '#90E0B0',
    affinity: 'Frozen Life',
    beastArchetype: 'Glacial Deer',
    description: 'Life preserved in eternal cold. Permabloom freezes things in their most vital state — it can halt decay, seal wounds at the moment of severance, or trap opponents in suspended animation.',
  },

  // ── Energy + Primordial ─────────────────────────────────────────────────
  {
    catalyst: 'energy', primal: 'flame',
    id: 'radiant-flame',
    name: 'Radiant Flame',
    color: '#FFD040',
    affinity: 'Pure Destruction',
    beastArchetype: 'Mana Phoenix',
    description: 'Fire stripped to its essential mana core. Radiant flame has no color, no heat — only the perfect will to unmake what it touches. The purest destructive output any flame-type can achieve.',
  },
  {
    catalyst: 'energy', primal: 'hydro',
    id: 'void-tide',
    name: 'Void Tide',
    color: '#4040C0',
    affinity: 'Dimensional Pressure',
    beastArchetype: 'Core Leviathan',
    description: 'Water converted entirely to mana pressure. Void tide doesn\'t wet — it compresses. Targets submerged in it experience gravity multiplied beyond survivability.',
  },
  {
    catalyst: 'energy', primal: 'earth',
    id: 'core-stone',
    name: 'Core Stone',
    color: '#A060D0',
    affinity: 'Mana Density',
    beastArchetype: 'Mana Golem',
    description: 'Earth crystallized by raw mana. Core stone is the hardest substance a user can generate — impenetrable barriers and weapons that cut through force and aura alike.',
  },
  {
    catalyst: 'energy', primal: 'air',
    id: 'mana-wind',
    name: 'Mana Wind',
    color: '#C8A8FF',
    affinity: 'Speed Amplification',
    beastArchetype: 'Energy Falcon',
    description: 'Air charged with pure mana that carries the user beyond physical speed. At peak output, mana wind users move through space rather than across it — bypassing distance entirely.',
  },
  {
    catalyst: 'energy', primal: 'cryo',
    id: 'crystal-edge',
    name: 'Crystal Edge',
    color: '#D0D8FF',
    affinity: 'Mana Crystallization',
    beastArchetype: 'Crystal Fox',
    description: 'Ice formed from crystallized mana rather than water. Crystal edge structures are immune to heat, pressure, and aura disruption — they exist in a different physical category than natural ice.',
  },
]

export const COMBINATION_MAP = {}
for (const combo of ELEMENT_COMBINATIONS) {
  COMBINATION_MAP[`${combo.catalyst}+${combo.primal}`] = combo
  COMBINATION_MAP[`${combo.primal}+${combo.catalyst}`] = combo
}

// Resolve a combination given two element IDs
export function resolveCombo(a, b) {
  if (!a || !b || a === b) return null
  return COMBINATION_MAP[`${a}+${b}`] || COMBINATION_MAP[`${b}+${a}`] || null
}

// ── The 4 Core States ─────────────────────────────────────────────────────
// Set by Light/Dark polarity + Chaos/Harmony Pillar blessing
export const CORE_STATES = [
  {
    id: 'harmonic-light',
    name: 'Harmonic Light',
    shortName: 'H · Light',
    color: '#E8D44D',
    glyphs: '☀ ∿',
    polarity: 'light',
    alignment: 'harmony',
    description: 'The most structured of the four states. Harmonic Light mana is ordered and radiant — power that reinforces, clarifies, and scales consistently. These users are the most predictable in peak output and the hardest to unbalance under pressure. Their spells build on prior castings; sustained sequences grow more efficient. Weakness: power ceiling is hard — cannot exceed its own logic.',
    coreCharacters: ['Dulla Vane', 'most Celestials'],
  },
  {
    id: 'harmonic-dark',
    name: 'Harmonic Dark',
    shortName: 'H · Dark',
    color: '#7744AA',
    glyphs: '◆ ∿',
    polarity: 'darkness',
    alignment: 'harmony',
    description: 'Structured entropy. Harmonic Dark mana is disciplined and consuming — power that erodes, suppresses, and dismantles systematically. These users plan their destruction and execute it in sequence. Their spells debilitate in layered stages; a target weakened by one casting takes exponential damage from the next. Strength: most efficient corrosive output of any state. Weakness: requires setup — reactive situations break their rhythm.',
    coreCharacters: [],
  },
  {
    id: 'chaotic-light',
    name: 'Chaotic Light',
    shortName: 'C · Light',
    color: '#FF9944',
    glyphs: '☀ ≋',
    polarity: 'light',
    alignment: 'chaos',
    description: 'Explosive clarity. Chaotic Light mana surges unpredictably but always in the direction of creation and exposure. These users are volatile — their output spikes far beyond their mana supply in crisis, drawing on something beyond calculation. Strength: the highest individual spike potential of any Core State; genuine miracles in the right moment. Weakness: cannot sustain — peak performance burns mana reserves and leaves them exposed afterward.',
    coreCharacters: [],
  },
  {
    id: 'chaotic-dark',
    name: 'Chaotic Dark',
    shortName: 'C · Dark',
    color: '#CC2244',
    glyphs: '◆ ≋',
    polarity: 'darkness',
    alignment: 'chaos',
    description: 'Unstructured annihilation. Chaotic Dark mana does not follow sequences — it erupts. These users are the most dangerous combatants alive at peak expression and the most dangerous to be near at all times. Their power does not check for intent. Strength: the most raw destructive potential of any state; Aeyum Vane\'s extreme rarity as a simultaneous Light+Dark+Energy user is legendary. Weakness: precision is nearly impossible — collateral damage is structural, not incidental.',
    coreCharacters: ['Aeyum Vane (unique dual-state)'],
  },
]

export const CORE_STATE_MAP = Object.fromEntries(CORE_STATES.map(s => [s.id, s]))

// ── The 15 Pillars ────────────────────────────────────────────────────────
// Organized by the three tiers of elemental availability in the world
export const ALL_PILLARS = [
  // Fundamental (70% of all beings)
  { id: 'fire',       name: 'Fire',       tier: 'fundamental', color: '#FF4500', glyph: '▲', tierLabel: 'Fundamental', pct: '~70%', desc: 'Passion, destruction, irreversible change. The most common combat element.' },
  { id: 'earth',      name: 'Earth',      tier: 'fundamental', color: '#A0742A', glyph: '■', tierLabel: 'Fundamental', pct: '~70%', desc: 'Stability, permanence, immovability. The element of endurance and legacy.' },
  { id: 'water',      name: 'Water',      tier: 'fundamental', color: '#1E90FF', glyph: '◇', tierLabel: 'Fundamental', pct: '~70%', desc: 'Flow, patience, recovery. The element of healing and adaptability.' },
  { id: 'air',        name: 'Air',        tier: 'fundamental', color: '#7EC8C8', glyph: '○', tierLabel: 'Fundamental', pct: '~70%', desc: 'Freedom, evasion, precision. The element of speed and reaction.' },
  { id: 'ice',        name: 'Ice',        tier: 'fundamental', color: '#87CEEB', glyph: '✦', tierLabel: 'Fundamental', pct: '~70%', desc: 'Stillness, restraint, zone control. The element of patience weaponized.' },
  // Refined (29% of all beings)
  { id: 'lightning',  name: 'Lightning',  tier: 'refined',     color: '#FFD700', glyph: '⚡', tierLabel: 'Refined', pct: '~29%', desc: 'Instant force and perfect targeting. Cannot be used alone — amplifies any Fundamental element.' },
  { id: 'nature',     name: 'Nature',     tier: 'refined',     color: '#4CAF50', glyph: '❋', tierLabel: 'Refined', pct: '~29%', desc: 'Living energy. Paired with a Fundamental element, it gives the element consciousness.' },
  { id: 'energy',     name: 'Energy',     tier: 'refined',     color: '#C850FF', glyph: '◎', tierLabel: 'Refined', pct: '~29%', desc: 'Raw concentrated mana. Strips a Fundamental element to its most perfect, most destructive core.' },
  // Sovereign (1% of all beings — the rarest blessings)
  { id: 'light',      name: 'Light',      tier: 'sovereign',   color: '#E8D44D', glyph: '☀', tierLabel: 'Sovereign', pct: '~1%', desc: 'Creation, revelation, purification. Determines Core State polarity toward Harmonic ordering.' },
  { id: 'darkness',   name: 'Darkness',   tier: 'sovereign',   color: '#9B30FF', glyph: '◆', tierLabel: 'Sovereign', pct: '~1%', desc: 'Consumption, concealment, entropy. Determines Core State polarity toward Chaotic dissolution.' },
  { id: 'aura',       name: 'Aura',       tier: 'sovereign',   color: '#FF6644', glyph: '◑', tierLabel: 'Sovereign', pct: '~1%', desc: 'Physical energy — one half of the mana equation. Basis of beast manifestation and body alteration.' },
  { id: 'force',      name: 'Force',      tier: 'sovereign',   color: '#44AAFF', glyph: '◐', tierLabel: 'Sovereign', pct: '~1%', desc: 'Mental energy — the other half of the mana equation. Basis of tool creation and will projection.' },
  { id: 'space',      name: 'Space',      tier: 'sovereign',   color: '#5F4BB6', glyph: '⬡', tierLabel: 'Sovereign', pct: '~1%', desc: 'The concept binding physical position and distance. Folds, expands, or collapses spatial geometry.' },
  { id: 'life-death', name: 'Life / Death', tier: 'sovereign', color: '#2ECC71', glyph: '⚖', tierLabel: 'Sovereign', pct: '~1%', desc: 'The boundary between being and non-being. Can grant, withdraw, or suspend life force conceptually.' },
  { id: 'time',       name: 'Time',       tier: 'sovereign',   color: '#F39C12', glyph: '⧗', tierLabel: 'Sovereign', pct: '~1%', desc: 'The concept governing causality and sequence. Alters the flow of moments within the user\'s domain.' },
]

export const PILLAR_TIERS = [
  { id: 'fundamental', label: 'Fundamental', pct: '70% of all beings', color: '#A0742A', desc: 'The base natural forces. Can be used alone or combined with a Refined element.' },
  { id: 'refined',     label: 'Refined',     pct: '29% of all beings', color: '#C850FF', desc: 'Cannot be used alone. Each combines with any Fundamental element to produce an advanced form.' },
  { id: 'sovereign',   label: 'Sovereign',   pct: '1% of all beings',  color: '#E8D44D', desc: 'The rarest blessings. Operate at a conceptual level — Light/Dark set Core State polarity; Aura/Force are the components of mana itself; Space, Life/Death, and Time are the three supreme concepts wielded only by the most ancient or powerful.' },
]

// ── Spell Level Framework (0–10) ──────────────────────────────────────────
export const SPELL_LEVELS = [
  { level: 0,  label: 'Instinctive',       color: '#5A84A2', desc: 'Raw elemental expression with no structure. No mana cost in the formal sense — pure reflex. Every being with a Core can access this. A flame-blessed child igniting their hand for warmth is Level 0.' },
  { level: 1,  label: 'Novice',            color: '#4A9E7A', desc: 'First structured castings. Seals learned from a teacher or written source. Mana cost is low but inefficiency is high — beginners burn twice what a master would. Reliable at close range, predictable pattern.' },
  { level: 2,  label: 'Apprentice',        color: '#5FAE4A', desc: 'Consistent structure with basic variation. Two-step spells: a setup seal and a trigger. Apprentice casters can modify range and shape within limits set by their element.' },
  { level: 3,  label: 'Adept',             color: '#8ABE30', desc: 'Efficient mana use begins here. Three-stage spells with conditional triggers. Adept casters read the fight and select the appropriate spell from a small but growing repertoire.' },
  { level: 4,  label: 'Journeyman',        color: '#B4C420', desc: 'True combat viability. Journeyman casters can chain spells, maintain a casting while taking damage, and adapt in real time. Most professional fighters operate at this level.' },
  { level: 5,  label: 'Expert',            color: '#D4A020', desc: 'Advanced elemental applications. Expert casters understand the logic of their element deeply enough to improvise combinations and new forms without a prepared seal. The majority of Noble Treasure wielders.' },
  { level: 6,  label: 'Master',            color: '#CC7730', desc: 'Spells that reshape the environment rather than interact with it. Master casters don\'t cast at opponents — they change the rules of the space their opponents are standing in.' },
  { level: 7,  label: 'Grandmaster',       color: '#CC5528', desc: 'Multi-element work and simultaneous casting. A Grandmaster manages several active spells at once and can integrate two elemental systems in a single seal. Extremely rare.' },
  { level: 8,  label: 'Apex',              color: '#CC2244', desc: 'Conceptual-level applications of a single element. An Apex caster doesn\'t use their element — they express what it is. The element\'s fundamental principle operates through them directly.' },
  { level: 9,  label: 'Mythic',            color: '#AA1166', desc: 'Reality-altering expression. Mythic casters operate so close to the Pillar\'s root that their spells can affect other casters\' magic — suppressing, inverting, or consuming the mana structure of opposing spells.' },
  { level: 10, label: 'Conceptual-Adjacent', color: '#880088', desc: 'The theoretical ceiling for non-Conceptual beings. Achieved by fewer than a dozen living individuals in recorded history. At this level the distinction between casting a spell and being the element begins to blur. Arai Nexal\'s Hands of Time operates at this level. Level 10 in a primary element functions as Level 11 in any secondary.' },
]

// ── Mana Polarity ─────────────────────────────────────────────────────────
export const MANA_POLARITIES = [
  {
    id: 'light',
    name: 'Light',
    color: '#E8D44D',
    glyph: '☀',
    description: 'Mana flows toward creation, revelation, and purification. Light-polarity users enhance healing, exposure, and protective applications of their element. Their power grows in the presence of conviction and alignment.',
  },
  {
    id: 'darkness',
    name: 'Darkness',
    color: '#9B30FF',
    glyph: '◆',
    description: 'Mana flows toward consumption, concealment, and entropy. Dark-polarity users enhance destructive, suppressive, and corrupting applications of their element. Their power grows in the presence of hidden truth and unspoken will.',
  },
]

export const MANA_POLARITY_MAP = Object.fromEntries(MANA_POLARITIES.map(p => [p.id, p]))

// ── Supreme Elements ──────────────────────────────────────────────────────
// The three Supreme Concepts — wielded only by Irane and the most ancient entities.
// Cannot be used standalone or combined like normal elements — they operate at a
// conceptual level that transcends the Primordial/Ascended framework.
export const SUPREME_ELEMENTS = [
  {
    id: 'space',
    name: 'Space',
    tier: 'supreme',
    color: '#5F4BB6',
    glyph: '⬡',
    affinity: 'Spatial Dominion',
    description: 'The concept binding physical position and distance. Space users can fold, expand, collapse, or lock spatial geometry. At full expression, the concept of "distance" between two points ceases to exist at the user\'s will.',
  },
  {
    id: 'life-death',
    name: 'Life / Death',
    tier: 'supreme',
    color: '#2ECC71',
    glyph: '⚖',
    affinity: 'Existence Threshold',
    description: 'The dual concept governing the boundary between being and non-being. Users can grant, withdraw, or suspend life force at a conceptual level — bypassing physical healing or damage entirely. The most morally complex Supreme Concept.',
  },
  {
    id: 'time',
    name: 'Time',
    tier: 'supreme',
    color: '#F39C12',
    glyph: '⧗',
    affinity: 'Temporal Sovereignty',
    description: 'The concept governing causality and sequence. Time users can alter the flow of moments — slowing, freezing, rewinding, or accelerating events within their domain. The most dangerous Supreme Concept: misuse does not merely harm — it unmakes.',
  },
]

// ── Default spell pools per primordial element ────────────────────────────
export const defaultElementSpells = {
  flame: [
    { id: 'flame-s1', name: 'Ember Burst',     tier: 1, description: 'A concentrated burst of flame launched from the palm. Fast, direct, short range.' },
    { id: 'flame-s2', name: 'Flame Veil',      tier: 2, description: 'Wraps the body in a thin layer of fire, burning any contact and reducing incoming force.' },
    { id: 'flame-s3', name: 'Combustion Seal', tier: 3, description: 'Plants an invisible fire trigger on a surface. Detonates on contact.' },
    { id: 'flame-s4', name: 'Pyre Wave',       tier: 4, description: 'A rolling wave of fire that travels across the ground, burning everything in its path.' },
    { id: 'flame-s5', name: 'Infernal Core',   tier: 5, description: 'Compresses flame into a singularity of heat. The resulting explosion vaporizes a wide area.' },
  ],
  hydro: [
    { id: 'hydro-s1', name: 'Current Lash',    tier: 1, description: 'A focused stream of high-pressure water. Cuts like a blade at close range.' },
    { id: 'hydro-s2', name: 'Tide Barrier',    tier: 2, description: 'Raises a curved wall of water that absorbs and deflects incoming attacks.' },
    { id: 'hydro-s3', name: 'Immersion Field', tier: 3, description: 'Saturates the surrounding air with suspended droplets, slowing all movement in range.' },
    { id: 'hydro-s4', name: 'Undertow',        tier: 4, description: 'Creates a spiraling current that drags opponents toward a central point.' },
    { id: 'hydro-s5', name: 'Flood Origin',    tier: 5, description: 'Draws water from the ambient environment and releases it in a catastrophic torrent.' },
  ],
  earth: [
    { id: 'earth-s1', name: 'Stone Spike',     tier: 1, description: 'Raises a sharp column of earth directly beneath a target.' },
    { id: 'earth-s2', name: 'Iron Skin',       tier: 2, description: 'Hardens the skin to near-stone density. Dramatically reduces physical damage.' },
    { id: 'earth-s3', name: 'Tremor Step',     tier: 3, description: 'A stomp that sends a localized seismic wave outward, destabilizing all footing in range.' },
    { id: 'earth-s4', name: 'Burial',          tier: 4, description: 'The ground splits and attempts to swallow a target whole.' },
    { id: 'earth-s5', name: "Mountain's End",  tier: 5, description: 'Raises new terrain formations — walls, pillars, cliffs — reshaping the battlefield entirely.' },
  ],
  air: [
    { id: 'air-s1', name: 'Wind Step',        tier: 1, description: 'A burst of air propels the user in any direction at high speed.' },
    { id: 'air-s2', name: 'Pressure Blade',   tier: 2, description: 'Compresses air into a thin invisible cutting edge.' },
    { id: 'air-s3', name: 'Cyclone Lock',     tier: 3, description: 'Wraps a target in a spiraling vortex, restricting movement and blocking projectiles.' },
    { id: 'air-s4', name: 'Vacuum Zone',      tier: 4, description: 'Removes air from an area entirely. Flames die, sound stops, and suffocation begins.' },
    { id: 'air-s5', name: 'Eye of the Gale',  tier: 5, description: 'The user becomes the center of a massive atmospheric event. Absolute field control.' },
  ],
  cryo: [
    { id: 'cryo-s1', name: 'Frost Shard',    tier: 1, description: 'Projects razor-thin shards of ice at high velocity.' },
    { id: 'cryo-s2', name: 'Cryo Lock',      tier: 2, description: 'Flash-freezes a targeted limb or object, restricting movement instantly.' },
    { id: 'cryo-s3', name: 'Mirror Veil',    tier: 3, description: 'Creates a wall of perfectly clear ice that blocks and reflects light-based attacks.' },
    { id: 'cryo-s4', name: 'Absolute Zone',  tier: 4, description: 'Drops temperature in an area to near-zero. All non-cryo movement slows to a crawl.' },
    { id: 'cryo-s5', name: 'Eternal Winter', tier: 5, description: 'A permanent localized cold front. Will not thaw until the user wills it.' },
  ],
  // Ascended spells unlock when an ascended element is paired with a primordial
  electro: [
    { id: 'electro-s1', name: 'Arc Shot',      tier: 1, description: 'A straight bolt fired from a fingertip.' },
    { id: 'electro-s2', name: 'Static Field',  tier: 2, description: 'Charges the air. Fast movement risks triggering a discharge.' },
    { id: 'electro-s3', name: 'Chain Strike',  tier: 3, description: 'A bolt that jumps between multiple targets, losing minimal power at each jump.' },
    { id: 'electro-s4', name: 'Overclock',     tier: 4, description: 'Runs current through the user\'s own body, boosting reaction speed to dangerous levels.' },
    { id: 'electro-s5', name: 'Thunder Crown', tier: 5, description: 'Calls down a sustained column from above. Cannot be moved once cast.' },
  ],
  nature: [
    { id: 'nature-s1', name: 'Root Bind',       tier: 1, description: 'Causes rapid plant growth from the ground beneath a target, binding their movement.' },
    { id: 'nature-s2', name: 'Pollen Cloud',    tier: 2, description: 'Releases a cloud that dulls pain response and slows healing in opponents.' },
    { id: 'nature-s3', name: 'Reclaim',         tier: 3, description: 'Accelerates natural decay in a targeted structure or object.' },
    { id: 'nature-s4', name: 'Verdant Armor',   tier: 4, description: 'Living bark and vine form an adaptive armor that regrows when damaged.' },
    { id: 'nature-s5', name: 'World\'s Breath', tier: 5, description: 'Channels the living energy of an entire ecosystem through the user for one moment.' },
  ],
  energy: [
    { id: 'energy-s1', name: 'Mana Bolt',       tier: 1, description: 'A pure concentrated mana projectile. No element — just will made physical.' },
    { id: 'energy-s2', name: 'Core Shield',     tier: 2, description: 'A dense barrier of compressed mana. Absorbs all incoming energy equally.' },
    { id: 'energy-s3', name: 'Resonance Pulse', tier: 3, description: 'A burst of mana that disrupts active abilities within range.' },
    { id: 'energy-s4', name: 'Mana Surge',      tier: 4, description: 'Floods the immediate area with raw mana, overwhelming the senses of all nearby.' },
    { id: 'energy-s5', name: 'Void Core',       tier: 5, description: 'Compresses mana into a dimensional point that collapses the local space when released.' },
  ],
}

export const SPELL_TIER_COLORS = {
  1: '#7AABCC',
  2: '#4AAFE0',
  3: '#9B30FF',
  4: '#E84855',
  5: '#D4AF37',
}
