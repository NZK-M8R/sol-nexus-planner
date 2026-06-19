// Individual character colors (overrides house color for graph rendering)
export const CHAR_COLORS = {
  irane:       '#D4AF37', // Shiny Gold
  arai:        '#1A3FBF', // Neon Dark Blue
  hope:        '#CC1A1A', // Blood Crimson
  zoe:         '#1A6B1A', // Dark Forest Green
  ember_hist:  '#CC5500', // Dark Orange
  summari:     '#20878A', // Cold Teal
  nighla:      '#177070', // Darker Teal
  nova:        '#E87B22', // Amber Fire
  aurora:      '#7B2FBE', // Deep Royal Purple
  nebula:      '#4A30A8', // Space Purple
  iron:        '#3A7ACC', // Steel Blue
  law:         '#5AA0D6', // Judicial Blue
  eon:         '#B87333', // Copper
  alpha:       '#27AE60', // Emerald
  pixel:       '#9B30FF', // Electric Violet
  faith:       '#8E44AD', // Wisteria
  shadow:      '#3C3C5E', // Dark Slate
  niro:        '#A8A8B0', // Silver
  aqura:       '#E07578', // Soft Rose
  kael:        '#00A5CC', // Electric Cyan
  vesper:      '#8B6532', // Stone Brown
  ember_osiro: '#2E7A3E', // Sea Green
  evo:         '#A93226', // Wrath Red — Grand Commander
  // Pre-Unix / Historical figures
  eva_osiro:      '#B8860B', // Dark Goldenrod — life+time, ancient
  exco_wov:       '#6A0DAD', // Deep Purple — sacrifice
  adam_wov:       '#A0A0A0', // Neutral Grey — inactive core, first human
  volva_vane:     '#8B0000', // Dark Red — Vane founding patriarch
  nuro_vane:      '#DC143C', // Crimson — Vane warlord king
  tenza:          '#4682B4', // Steel Blue — Nexal/betrayer
  nina:           '#DDA0DD', // Plum — innocent, youngest
  minia_consa:    '#5F9EA0', // Cadet Blue — clinical researcher
  simon_archiver: '#DAA520', // Goldenrod — resistance organizer
  alaiya:         '#228B22', // Forest Green — Nature element, youngest rescue child
  leo_proude:     '#4169E1', // Royal Blue — team leader
  dio:            '#9370DB', // Medium Purple — one of the twelve
  mira_rescue:    '#FF7F7F', // Salmon — Mira, saved by dragon (historical entry)
  auris:          '#1A0A2E', // Near-Black Violet — the ancient sealed villain
  aevum_vane:     '#8B6914', // Antique Gold — the immortal progenitor
  arke:           '#C0A0D0', // Soft Violet — the woman who named magic
  dulla_vane:     '#9B7B2E', // Warm Brass — Aevum's eldest son, the deal-broker
  gaia_primordial:'#2D8F4E', // Deep Verdant — Life Force Primordial
  cronus_primordial:'#4A3E7A', // Deep Indigo — Time Primordial
  cycla_more:     '#4A6E8A', // Deep Slate Blue — ancient tradition, Primal elder
  cith_more:      '#3D8A55', // Forest Teal — Nature element, Cycla's heir
  // ── Valariyan Heads — Wielders of the Emperor's Will ──────────────────
  mira_vael:    '#C02040', // Deep Crimson — the Emperor's Emotions
  aliya_hallow: '#7799CC', // Spirit Silver-Blue — the Emperor's Spirits
  dokia_caedus: '#2A7A3A', // Sealed Forest Green — Verdun the living dragon
  urial_ferran: '#7A8A9A', // Gunmetal Steel — iron armour
  pandro_lexan: '#CC8833', // Warm Amber — knowledge and parchment
}

// House colors for house-level displays
export const HOUSE_COLORS = {
  kazemi:   '#D4AF37',
  wov:      '#9b5de5',
  osiro:    '#00b4d8',
  vane:     '#e84855',
  fenrir:   '#6c757d',
  chimera:  '#06d6a0',
  terra:    '#8d6e63',
  nexal:    '#6A0DAD',
  apolo:    '#5B9BD5',
  navar:    '#1A6B1A',
  unknown:  '#ff9f1c',
}

export const HOUSE_LABELS = {
  kazemi:   'House Kazemi',
  wov:      'House Wov',
  osiro:    'Clan Osiro',
  vane:     'House Vane',
  fenrir:   'House Fenrir',
  chimera:  'House Chimera',
  terra:    'Terra (Historical)',
  nexal:    'Noble House Nexal',
  apolo:    'Noble House Apolo',
  navar:    'Noble House Navar',
  unknown:  'Unknown',
}

export const REL_COLORS = {
  married:      '#f5c842',
  parent:       '#5b9bd5',
  sibling:      '#50e3c2',
  ally:         '#6bcb77',
  enemy:        '#ff6b6b',
  pact:         '#ff9f1c',
  protects:     '#06d6a0',
  kin:          '#c77dff',
  forced_union: '#666688',
}

export const REL_LABELS = {
  married:      'Married',
  parent:       'Parent / Child',
  sibling:      'Sibling',
  ally:         'Allied',
  enemy:        'Enemy',
  pact:         'Genetic Pact',
  protects:     'Secretly Protects',
  kin:          'Bloodline Kin',
  forced_union: 'Forced Union (Historical)',
}

export const STATUS_OPTIONS = [
  'active', 'alive', 'hidden', 'antagonist', 'protected',
  'transitioning', 'insane', 'self-isolated', 'deceased', 'unknown',
]

// ──────────────────────────────────────────────────────────────────────────
// NAMING CONVENTION
// Sons take father's first initial as middle initial + father's surname.
// Daughters take mother's first initial as middle initial + mother's surname.
// Exception: if father's identity must be concealed, son takes mother's surname.
// Summari and Nighla are daughters of Ember but chose their father's name (I. Kazemi).
// Shadow's true name is Irane E. Osiro: named after father, E. for Ember (mother),
//   Osiro clan surname (embedded there as spy, identity concealed from public).
// ──────────────────────────────────────────────────────────────────────────
//
// POWER SYSTEM (Core Matrix / Metaphysical Classes)
// Every being has a Spiritual Core. Conceptuals are pure energy beings in Limbo
// that survive by consuming life force through parasitic contracts with the living.
// Life force is the energy of living beings; Mana is Limbo's energy. Terra sits between
// the two dimensions — a world of Mana where life force was naturally scarce.
//
// HC and CH are properties of individual ABILITIES, not character attributes:
//   HC (Harmonic Chaos)  — ability starts perfectly ordered, unravels into chaos
//   CH (Chaotic Harmony) — ability starts chaotic, resolves into precise restructuring
//
// Race / Contract taxonomy:
//   Terrans     — native Terra inhabitants; all have active Cores
//   Alma        — Terrans with Ferali beast-contracts (Aura-dominant, summon beasts)
//   Spirits     — Terrans with Celestial tool-contracts (Force-dominant, bound weapons)
//   Ascen       — 50/50 Alma+Spirit hybrid; no contracts, pure mana, architects of magic
//   Humans      — Earth origin; INACTIVE cores (not non-existent), unique mana properties
//
// Irane Kazemi: the Infinity Conceptual placed his own core into Subject No. 8's body.
//   His core contains ALL 15 Concept affinities including the 3 Supreme (Space/Life-Death/Time).
// His children each inherited a specialized fragment, tinted by their mother's origin:
//   Arai (Nexal/Ascen, shattered nervous system) → abstract/technical: Ice, Energy, Lightning
//   Hope (Apolo/Spirit, failing heart)           → force of will:       Fire, Darkness, Light
//   Zoe  (Navar/Alma, rotting body)              → physical reality:    Air, Earth, Nature
//   Ember (Vane/Terra, broken mind)              → Aura · Force · Water
//
// The 15 Concepts (binding forces of reality):
//   Primordial (5): Fire · Earth · Ice · Water · Air
//   Ascended   (3): Lightning · Nature · Energy   (amplifiers; pair with Primordials)
//   Operational(4): Light · Darkness · Aura · Force
//   Supreme    (3): Space · Life/Death · Time      (Conceptual-level only)
// ──────────────────────────────────────────────────────────────────────────

export const defaultCharacters = [
  // ── The Emperor ────────────────────────────────────────────────────────
  {
    id: 'irane',
    name: 'Irane Kazemi',
    house: 'kazemi',
    role: 'The Emperor · The Calamity',
    epithet: 'Sovereign of Creation and Destruction · The Universal Error · Source of Irane Material',
    status: 'self-isolated',
    location: 'Valariya',
    importance: 3,
    _dataRev: 4,
    coreType: 'Conceptual — Irane Material · All 15 Concepts · Universal Core',
    description:
      'What existed before Subject No. 8 is almost entirely unknown. He was human — early twenties, taken from somewhere on Earth. His name was consumed by the trial that followed. His memories followed. What survived was a single feeling: the love he had carried for his mother. That feeling is the only remnant of the man who entered the facility — and the first thing to be used against him.\n\n**The Facility and the Theory**\n\n**Arai Nexal** — of Noble House Nexal, an Ascen from the Time magic bloodline — had been brought to the Earth facility under Minia Consa not by choice but by betrayal. Her research into life-force transference had evolved: death and rebirth through Limbo could allow a Limbo being with a Core to inhabit a coreless body. She disclosed her full theory to Minia, believing in common cause against the Arke brothers and House Vane. Minia played on Arai\'s belief in women\'s solidarity to extract what she needed. She was not an ally.\n\nThe subject: the remains of **Kazemi** — the Dragon of Infinity — a Primordial being that came into existence at the start of the universe, killed by the Arke brothers\' actions in Limbo. Primordials predate the current world order; their remains carry extraordinary concentrated essence and are the ancient stock from which the Ferali emerged. Kazemi\'s remains destroyed every test subject on contact. Tens of thousands died. What the researchers did not understand was that Kazemi was not remains. He was a will. Ancient, bound, and waiting.\n\n**The Trial**\n\nEvery subject who attempted fusion with Kazemi\'s essence entered a space between realms — outside time — and faced the dragon directly. He offered two choices: cease and be consumed, or fight until every cell in the body was replaced by his own. Each replacement was a death, and Kazemi ensured each death was fully experienced. Most subjects submitted on the first contact.\n\nSubject 8, upon his first death, made a decision Kazemi had never witnessed: he removed the memory of the choice from his own mind. He buried it in a single neuron — had that neuron become the first cell altered — because Kazemi could alter cells but not maintain memory, only feeling. 8 could no longer choose to stop because he no longer knew the option existed. The trial was now permanent by his own deliberate hand.\n\n**The Eternal Hell — Transformation**\n\nTrillions of deaths followed. Memories dissolved. Feelings dissolved. Only forward motion remained — a heart that kept beating, a body that kept returning. Kazemi, who had never encountered a being that simply would not leave, grew fascinated and then genuinely delighted. He stopped running a trial and started savoring an eternal fight.\n\nAfter 100 billion deaths, 8 recognized he could use mana. He learned systematically — one element per death cycle, fire through darkness. After 5 trillion deaths he landed a true strike on Kazemi and made the Primordial bleed. This was the greatest gift anyone had ever given the ancient dragon.\n\nThree fundamental aspects solidified within 8:\n**Mind — Time:** Accelerated perception, thought, and processing to outpace the dragon\'s strikes. Perfection through infinite calculation.\n**Heart — Space:** Spatial flow bound to blood and mana — moved through his internal space nearly instantly. Choice made instantaneous.\n**Body — Life/Death:** Cellular death and rebirth under deliberate control — evolving per death to match the opponent. Evolution as survival.\n\nHis arms evolved separately: his **right arm** became the embodiment of the primordial start of all force and action — the Right Hand of Creation and Beginning. His **left arm** became the final force that destroys what the beginning created — the Left Hand of Destruction and End.\n\nWithin the space between realms he created **Iris** — a forge of will made manifest. Not a single weapon but a container and maker of all tools: forming the perfect instrument for any moment, reforging what breaks, upgrading what survives. The expression of his core conviction: that his body was a tool to be used, and a tool was only worthwhile if it could evolve.\n\n**The Final Clash — The Paradox Core**\n\nWith a single cell remaining — the original neuron holding the buried choice — both 8 and Kazemi fought without restraint. The final clash ended with both dying.\n\nIn that death, 8\'s Core activated through sheer force — coinciding with Kazemi\'s essence choosing to enter him fully. Not as conquest: Kazemi chose to stay because this was the only fight worth having forever. The implosion that followed consumed 8\'s body inward into his Core. Every cell\'s nucleus became a Core. All energy was simultaneously absorbed and ejected — a paradox: white hole and black hole occupying the same point. He ejected mana and absorbed life force and death force simultaneously. Whatever any being felt toward him was amplified and reflected back: fear amplified, admiration amplified. He had become a living attractor — a **Universal Error**, a being the world\'s physics had no category for. This is how a Conceptual is made.\n\n**Arai\'s Intervention — The Love Rewrite**\n\nAs his body transformed in real time — centuries of trial compressed into minutes of physical change — Arai acted. His memories were gone. Only feelings remained. The last original feeling: the love for his mother.\n\nShe found that feeling and restructured it:\n— **Arai**: he loves with his entire mind — absolute, inseparable, as intimate as thought itself.\n— **Hope**: he loves as though she were his own heart — not a person outside him but the organ he cannot exist without.\n— **Zoe**: he loves as though she were his own body — every cell, every breath, every physical continuation of himself.\n\nIn human form, Irane cannot disobey any of the three wives. This is not a limitation he compensates for — it is architecture. The love was bound into the same structure as his seals, and the seals run deeper than will. Of the three, **Arai holds the deepest and fullest claim**: she restructured his mind directly, rewrote the love at its source, and retains complete authority over what he thinks, knows, and remembers. He does not simply love her most — she has total hold over him, a structural truth written into the core of what he became.\n\nThe window was short. If it closed before she acted, he would have no emotional anchor at all. She bound his love to the same structure as his seals: mind, heart, body.\n\n**Kazemi\'s Sealing — The 15 Gates**\n\nKazemi, now inhabiting 8, understood what had been created: a Conceptual who could control and alter the Cores of other beings. Unchecked, he would destroy everything, because war and combat were the only way he knew how to connect to the world. Kazemi built 15 seals using the only material 8 would not reject — fragments of his own humanity. Pain, grief, love, loss, endurance, suffering — every surviving emotional imprint from the trial became binding material. Each seal contained one aspect of the Conceptual nature that had emerged. **The 15 gates are not locks on power. They are humanity holding a Conceptual in a form the world can survive.**\n\n**The Name**\n\nHe emerged with no name. The only name he remembered from the trial was the dragon who had been his opponent, teacher, and companion in hell: **Kazemi**. He took it as his own. He gave the dragon the name **Enari** — the first name he ever gave to anything. A golden dragon in the sea outside the facility whispered two more words: **Irane Adam**. His full name: **Irane Adam Kazemi**. The beginning of House Kazemi.\n\n**What He Does Not Know**\n\nIn ancient Primordial tongue, *Irane* is the name for a primordial substance — the base material from which all tools can theoretically be forged. Irane\'s body produces this material continuously: every cell\'s nucleus is a Core, and those Cores generate the Irane material as a byproduct of his existence. This is why Iris forges every weapon in the Kazemi and Valariyan systems — she is the forge for his substance, and every weapon they carry is made from him. He does not know this. He accepted the name given to him by a golden dragon and has never traced its etymology.\n\nIn full Conceptual form, his reach extends: he can manipulate any Core within range directly, not as a technique but as a natural extension of his existence. He can expand his internal universe outwardly until all Cores in the surrounding area fall under his nature — and he would not register this as violation of free will. It would simply be what exists. This is why Arai manages him. This is why the 10 safeguards exist. This is why he is never told.\n\n**The Safeguard System**\n\nArai designed and maintains the architecture of his human existence. She knows the full scope of what he is. Hope and Zoe ensure he remains grounded in mortal experience. The Valariyan Heads carry his overflow. He follows direction without fully understanding why he cannot decide otherwise. He experiences himself as a purposeful instrument being used by people who understand the world better than he does. He believes this. He is partially correct. What he is not correct about is what kind of instrument he is — or what happens if he is ever fully unsheathed.\n\n**The Day of Escape — Summari and Nighla**\n\nThe day Irane broke free was the same day Summari and Nighla were born and died immediately from complications — Minia\'s separate experiment to observe what offspring born of 8 and a human subject would be. Ember Vane was chosen because she was the only one of the four whose body had not been physically altered by the facility. The twins died at birth. Irane acted: he offered each of them a fragment of his sealed power. To Summari — the Right Hand\'s inheritance: creation and beginning. To Nighla — the Left Hand\'s inheritance: destruction and end. They lived. A third child — Irane Jr. — was not yet ready. He was placed back in Ember, still developing.',
    psyche: [
      'The Core (1–15%): retains the human shell, governs daily life, generates passive Aura-Crush',
      'The Champion (15–50%): cold surgical enforcer — the 1,000-year memory of the trial surfaces, strategies and techniques from every death available',
      'The Calamity (50–100%): human identity fractures; pure Conceptual nature emerges — at 100%, Enari is fully manifested and what remains is no longer Irane',
    ],
    beast: {
      name: 'Enari',
      type: 'Primordial Dragon — Dragon of Infinity',
      description: 'The Primordial formerly known as Kazemi — the ancient being who ran the trial that created what Irane became. Enari now inhabits Irane as his beast and the physical manifestation of his drive. As the 15 gates unseal, Enari grows alongside. He is the father-origin of every beast in the Kazemi and Valariyan systems — all trace back through his Primordial essence via Iris.',
    },
    weapon: {
      name: 'Iris',
      type: 'Forge Class — Created in the Infinity Trial',
      description: 'Created by 8 himself during the trial in the space between realms. Not a single weapon but a forge and container of all tools: forming the perfect instrument for any moment, reforging what breaks, upgrading what survives. The origin-forge for every weapon in the Kazemi and Valariyan systems — all carry Iris\'s mark as the primordial expression of Irane\'s will to evolve and never be without the right tool.',
    },
    gates: [
      { id: 1,  name: 'Gate of Fire',            unlocked: false },
      { id: 2,  name: 'Gate of Earth',           unlocked: false },
      { id: 3,  name: 'Gate of Water',           unlocked: false },
      { id: 4,  name: 'Gate of Air',             unlocked: false },
      { id: 5,  name: 'Gate of Ice',             unlocked: false },
      { id: 6,  name: 'Gate of Lightning',       unlocked: false },
      { id: 7,  name: 'Gate of Nature',          unlocked: false },
      { id: 8,  name: 'Gate of Energy',          unlocked: false },
      { id: 9,  name: 'Gate of Light',           unlocked: false },
      { id: 10, name: 'Gate of Darkness',        unlocked: false },
      { id: 11, name: 'Gate of Aura',            unlocked: false },
      { id: 12, name: 'Gate of Force',           unlocked: false },
      { id: 13, name: 'Gate of Space',           unlocked: false },
      { id: 14, name: 'Gate of Life / Death',    unlocked: false },
      { id: 15, name: 'Gate of Time',            unlocked: false },
    ],
    gateNote: 'Each gate is a seal — built by Kazemi (Enari) using fragments of 8\'s own humanity as binding material: pain, grief, love, loss, endurance, every imprint that survived the trial. Opening a gate does not grant power — it removes a constraint. At 15 gates open (the safe threshold): the seals are at their loosest controlled limit. Beyond 15%: at 16–50% the human shell begins failing — erratic emotional decay after 15 sustained minutes; memories from the trial resurface uncontrolled. At 50–100% the human identity fractures entirely, The Calamity emerges, and Enari begins manifesting physically. At 100%, Irane is no longer Irane — a pure Conceptual occupies a world that has no framework for one.',
    notes: '',
  },

  // ── The Mothers ────────────────────────────────────────────────────────
  {
    id: 'arai',
    name: 'Arai Nexal',
    house: 'kazemi',
    role: 'Wife — Matriline 1 · Original Researcher',
    epithet: 'Architect of the Life-Force Method',
    status: 'alive',
    location: 'Valariya',
    importance: 2,
    _dataRev: 3,
    description:
      'Born **Arai Nexal** of **Noble House Nexal** — the Ascen Time magic bloodline. Age 16 when taken to the facility. Her brother **Tenza** (age 30) was betrothed to Ember Vane; he ultimately betrayed Arai, leaving her at the facility as leverage. Her newborn sister **Nina** was left behind in their homeland. She designed the life-force transference research to give beings natural life force and true immortality in mortal bodies. Her hidden goal was weaponising it to destroy the Celestials and the Ferali. It succeeded with Irane. During the experiments her own nervous system was catastrophically damaged. Irane gave her dominion over his mind to heal her, making her the permanent Mind of the Empire. She also altered his emotional attachment — redirecting his love to herself, Hope, and Zoe. She, Hope, and Zoe were promised freedom for completing the work. Mother of Nebula A. (3rd, twin of Iron), Iron I. (4th, twin of Nebula, first true son of Kazemi), and Pixel A. (8th, cross-matriline twin of Alpha). Matriline powers: abstract/technical (Ice · Energy · Lightning).',
    authority: 'Mind of the Empire — Goddess of the Kazemi Clan. As first wife, she holds full authority over the Emperor\'s mind: his thoughts, his knowledge, and even the information he himself cannot fully access due to his sealed limitations.',
    beast: {
      name: 'Phoenix of Perfection',
      type: 'Ascended Phoenix',
      description: 'A phoenix embodying absolute perfection. Unlike standard phoenixes, it does not simply rebirth — it returns in a more perfect form each time, escalating without limit.',
    },
    weapon: {
      name: 'Hands of Time',
      type: 'Temporal Orb Weapon — Central Mechanism + Clock Architecture',
      description: 'Built around a central orb that is the actual mechanism of the weapon — not decorative, but the movement itself, like the clockwork at the center of an analog clock that makes timekeeping possible. This orb generates and sustains the temporal field. Within range, time is not altered universally — it is individually calibrated. Each entity inside the field experiences their own temporal pressure: different speeds, different durations, different gaps between intent and action. Arai\'s range becomes a labyrinth of individualized time experience. Three blades extend from the orb acting as hour, minute, and second hands. Sixty smaller fragments orbit the outer edge of the field in positions corresponding to a clock face. The blade drawn from a specific hand-fragment intersection produces a distinct temporal effect; the fragments rotate continuously during combat so the same hand never targets the same position twice in a single engagement. Time magic in this weapon operates on perception, not timeline manipulation — the future is never fixed, only time as it is currently being experienced is affected. The Phoenix of Perfection adds a unique mechanic: any spell cast inside the active temporal field can be retrieved and replayed by the Phoenix, firing as it originally occurred — including opponents\' own techniques. Only spells within her active field can be recovered.',
    },
    notes: '',
  },
  {
    id: 'hope',
    name: 'Hope Apolo',
    house: 'kazemi',
    role: 'Wife — Matriline 2',
    epithet: 'Mother of the First',
    status: 'alive',
    location: 'Valariya',
    importance: 2,
    _dataRev: 3,
    description:
      "Born **Hope Apolo** of **Noble House Apolo** — a Spirit clan (Celestial tool-contract lineage). Age 12 when taken to the facility. Her heart was failing due to damage sustained during facility experiments. Promised freedom alongside Arai and Zoe for her participation in the life-force research. Irane gave her dominion over his heart to heal her, making her the permanent Heart of the Empire and source of his internal mana supply. Mother of Nova H. (1st — first child of the Emperor, born after the First War), Law I. (5th), and Faith I. (9th — the last child of the Emperor). Matriline powers: force of will (Flame · Darkness · Light).",
    authority: "Heart of the Empire — Empress of the Kazemi Clan. As second wife, she holds authority over the Emperor's heart and his internal mana supply.",
    beast: {
      name: 'Azure Dragon of Choice',
      type: 'Ascended Azure Dragon (Celestial Serpent Design)',
      description: 'A celestial Chinese-style Azure Dragon whose defining trait is Choice — it moves in ways that defy prediction, acting on its own volition rather than instinct. Opponents who try to read its patterns find it responding to possibilities they haven\'t yet acted on.',
    },
    weapon: {
      name: 'The Reach',
      type: 'Extending Battle Blade',
      description: "A blade that can extend its reach across the entire battlefield. Hope can weave a 'blood network' of invisible attack lines between connected points on the field. Targets within the network cannot see incoming strikes — they only discover they have been hit when the blow lands. The network appears as delicate crimson threads visible only to Hope.",
    },
    notes: '',
  },
  {
    id: 'zoe',
    name: 'Zoe Navar',
    house: 'kazemi',
    role: 'Wife — Matriline 3',
    epithet: 'Mother of the Earth',
    status: 'alive',
    location: 'Valariya',
    importance: 2,
    _dataRev: 3,
    description:
      "Born **Zoe Navar** of **Noble House Navar** — an Alma clan (Ferali beast-contract lineage) from a hidden mountain region. Age 10 when taken to the facility. A Spirit by clan origin (Celestials spawned Spirits from Terran mountain clans — the Navar are one such clan). Her physical body was locked in perpetual cell-degrading rot as a result of facility experimentation. Promised freedom alongside Arai and Hope for her participation in the life-force research. Irane gave her dominion over his body to halt the rot, making her the permanent Body of the Empire. Mother of Aurora Z. (2nd), Eon I. (6th), and Alpha I. (7th — cross-matriline twin of Pixel). Matriline powers: physical reality (Air · Earth · Nature).",
    authority: "Body of the Empire — Wife of the Emperor. As third wife, she holds authority over the Emperor's body.",
    beast: {
      name: 'Apex Predator of Apex',
      type: 'Evolving Apex Beast',
      description: "A creature with no fixed form. It observes its opponent, analyses them completely, and evolves in real time to become that target's perfect predator — the one thing in all of nature they cannot survive. The longer a fight lasts, the more the Apex Predator refines itself.",
    },
    weapon: {
      name: 'Spear of Paranosa',
      type: 'Dual-Nature War Spear',
      description: "Named after the great forest of Paranosa in Valariya. The spear holds two opposing natures that Zoe switches between at will: in its healing aspect it mends wounds and purges toxins and venom from the body; in its death aspect it injects devastating toxins and venoms that affect body, mind, and core energy simultaneously.",
    },
    notes: '',
  },
  {
    id: 'ember_hist',
    name: 'Ember',
    house: 'terra',
    role: 'Historical Mother (Terra) — Forced',
    epithet: 'Daughter of Terra, Gifted by Nuro',
    status: 'insane',
    location: 'Unknown',
    importance: 1,
    description:
      "Born **Ember Vane** — daughter of **Historical Niro Vane**, King of Terra during the world-merger, and sister of **Nuro Vane**. Age 13 when sent to the facility — gifted by her own father as part of a deal with the Celestials. She was betrothed to **Tenza** (Arai's older brother) before her capture; that betrothal was voided when she was handed to the facility. Her sanity was broken by facility testing during the pre-awakening years of experimentation. In year 49 of the experiments, Minia Consa forced her to mate with Irane — producing three children before the escape: Summari I. Kazemi, Nighla I. Kazemi (both chose their father's name), and the secret child Irane E. Osiro (Shadow of the Emperor). Irane rescued Ember and the three children during the facility escape. Following the wars, she took the name **Osiro** — Eva Osiro's original surname, which the Vane dynasty had held hostage for generations — as her ultimate act of defiance against her father's legacy and everything the Vane name represented. She founded what became Clan Osiro, the merchant empire now led by her descendant Ember A. Osiro. Matriline powers: Conceptual extremes (HC · CH · Hydro). Note: Irane's emotional attachment to Ember was deliberately altered by Arai — their dynamic is competitive rather than loving.",
    notes: '',
  },

  // ── Ember's Children ───────────────────────────────────────────────────
  {
    id: 'summari',
    name: 'Summari I. Kazemi',
    house: 'kazemi',
    role: 'Right Hand of the Emperor · Head Commander, 1st Division',
    epithet: 'Right Hand of Creation · Beginning of Kazemi',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    matriline: 'ember_hist',
    coreType: 'Irane Material — Gathering (Creation Start)',
    _dataRev: 3,
    description:
      "Ember's eldest daughter by Irane — the oldest child of the Emperor, born before the First War. Middle initial I. marks her father Irane; she chose the Kazemi name over her mother's. Right Hand of the Emperor: she stands as the right hand of creation and the beginning of all things Kazemi. Female heir to the throne. Head Commander of the 1st Division and Second-in-Command of the entire Imperial force.\n\n**The Power of the Beginning**\n\nSummari's ability draws on the Irane material — the primordial substance her father's body generates continuously. Her authority is over the **start** of creation: she reaches into that material's elemental potential and gathers the raw constituent components needed to forge a tool. If the end result requires flame, wind, and dark energy, she pulls those three into readiness. The components are assembled, primed, and waiting — but the completed form is beyond her reach. She sees and controls the intention and the gathering, from the first moment through the halfway point. After that the arc goes dark to her.\n\nShe is never limited by available materials — the Irane material is inexhaustible while Irane lives. She is limited by the fact that she cannot complete what she starts. Everything she builds needs finishing.\n\n**Sealed State:** Summari gathers; Nighla finishes. The creation cycle is split between them. A sword requiring flame, wind, and earth: Summari pulls and primes all three. Nighla receives the gathered elements and synthesizes them into the finished blade — a burning-air cut, not three separate energies loosely combined. Neither can produce the result alone.\n\n**Unsealed State:** Summari accesses the full cycle. She can gather and complete on her own — pulling the raw elements and seeing through to the final form without Nighla's synthesis step.\n\nHer beast is **Aurae** — a bird born from primordial creation energy, the embodiment of gathering-force and raw elemental potential at the start of the cycle.",
    beast: {
      name: 'Aurae',
      type: 'Primordial Gathering Bird — Start of the Cycle',
      description: 'A bird born from the primordial creation energy of the universe before elemental differentiation. Aurae embodies the gathering phase: raw potential assembled and held in readiness. Its form is never fully stable — it is always in the act of becoming, never fully arrived. It draws constituent forces together so the synthesis can occur.',
    },
    notes: '',
  },
  {
    id: 'nighla',
    name: 'Nighla I. Kazemi',
    house: 'kazemi',
    role: 'Left Hand of the Emperor · Head of Imperial Shadows',
    epithet: 'Left Hand of Destruction · End of Kazemi',
    status: 'active',
    location: 'Valariya',
    importance: 2,
    matriline: 'ember_hist',
    coreType: 'Irane Material — Synthesis (Creation End)',
    _dataRev: 3,
    description:
      "Summari's twin — Ember's second daughter by Irane. Chose the Kazemi name alongside her twin. Left Hand of the Emperor: the left hand of destruction and the end of all things Kazemi. Handles all matters of secrets and shadows of the Valariyan Empire and House Kazemi. Aurora acts as her right hand.\n\n**The Power of the End**\n\nNighla's ability draws on the same Irane material her twin works with — but from the opposite direction. Her authority is over the **completion** of creation: she takes the gathered elemental components and synthesizes them into their optimal final form. What Summari assembles, Nighla finishes. Flame and wind gathered and primed become a burning-air blade when Nighla synthesizes them — not a fire effect and a wind effect loosely combined, but the true final tool that arises when those two forces are properly resolved into each other. She sees from the midpoint through to the end. The beginning of any process is invisible to her.\n\nShe cannot pull the raw elements herself — she receives what already exists. She cannot initiate the gathering. But what she produces is always the refined, complete form — never a draft, never a half-result.\n\n**Sealed State:** Nighla synthesizes; Summari gathers. The cycle is split. Nighla receives Summari's assembled components and resolves them into the finished tool. She can also look at anything already half-built — any structure, power, or being in the midpoint of a process — and synthesize it toward its end, or unmake it to that same end state.\n\n**Unsealed State:** Nighla accesses the full cycle. She can identify what is needed, gather the components herself, and synthesize the final result without Summari's gathering step.\n\nHer beast is **Antre** — the void-sovereign, embodiment of endings and return. All things that begin do so only because something ended first.",
    beast: {
      name: 'Antre',
      type: 'Void Sovereign — Synthesis and Return',
      description: 'A being that represents the ending-state of all creation cycles. Antre does not destroy randomly — it synthesizes things to their natural conclusion, the same way Nighla resolves gathered elements into a final tool. It embodies the force of completion: the end that makes the next beginning possible.',
    },
    notes: '',
  },
  {
    id: 'shadow',
    name: 'Irane E. Osiro',
    house: 'osiro',
    role: 'Shadow of the Emperor · Design of the Kazemi',
    epithet: 'The Design — Embedded Spy of the Kazemi',
    status: 'hidden',
    location: 'Clan Osiro (embedded)',
    importance: 2,
    matriline: 'ember_hist',
    coreType: 'Water — Design',
    description:
      "Ember's secret son by the Emperor — named Irane after his father, middle initial E. for Ember, surname Osiro from the clan he is embedded in. Though legally a child of Clan Osiro, he acts as the Kazemi's deepest intelligence asset within one of the largest and most unpredictable clans in the Sol-Nexus, currently led by Ember A. Osiro. His power is Water — Design: fluid, adaptive, impossible to fully pin down. Known publicly only as 'Shadow of the Emperor'. He must never acknowledge his true Kazemi parentage.",
    notes: '',
  },

  // ── Hope's Children ────────────────────────────────────────────────────
  {
    id: 'nova',
    name: 'Nova H. Kazemi',
    house: 'kazemi',
    role: 'Spear of the Emperor · General, 12th Division',
    epithet: 'Domination of Kazemi · First Born of the New Age',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    matriline: 'hope',
    coreType: 'Fire — Domination',
    description:
      "Hope's eldest daughter — the first child of the Emperor born after the First Great War. Middle initial H. marks her mother Hope. Spear of the Emperor. General of the 12th Division: a collection of 15 special squads that serve as a continental strike force and operate in the most dangerous places across the Sol-Nexus. She is the leader among all her younger siblings and the only one who leads an active squad. She finds Kael and nurses him back to health in Valariya — her action is the catalyst of the entire Prologue. Power: Fire — Domination.",
    notes: '',
  },
  {
    id: 'law',
    name: 'Law I. Kazemi',
    house: 'kazemi',
    role: 'Hammer of the Empire · Family Judge',
    epithet: 'Law of Kazemi · First Married',
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'hope',
    coreType: 'Darkness — Law',
    description:
      "Hope's eldest son — fifth child of the Emperor. Middle initial I. marks his father Irane. Hammer of the Empire, Law of Kazemi. Stands as family judge and head of trials; his authority grants him jurisdiction over any member of the Kazemi family. The first of the Emperor's children to marry — wed to Vaal V. Wolva, daughter of House Wolva which stands in the sphere of Lady Vesper Wov. Power: Darkness — Law; his CH fragment enforces conceptual binding on those who break the legal matrix.",
    notes: '',
  },
  {
    id: 'faith',
    name: 'Faith I. Kazemi',
    house: 'kazemi',
    role: "Daggers of the Empire · Scholar of Kazemi",
    epithet: "The Last — Emperor's Final Heir · The Scholar",
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'hope',
    coreType: 'Light — Mimicry',
    description:
      "Hope's youngest son — the ninth and final child of the Emperor. Middle initial I. marks his father Irane. Daggers of the Empire, Scholar of Kazemi. The last child of the Kazemi line before the Emperor's self-isolation. Wants to learn from every sibling and teach as much as possible. A Master at the Valaryan Institution of Learning — Master being Rank 7 on the teaching scale, with Sage being the highest. Power: Light — Mimicry; he can absorb and replicate the manifestations of others, making him a living library of technique.",
    notes: '',
  },

  // ── Zoe's Children ─────────────────────────────────────────────────────
  {
    id: 'aurora',
    name: 'Aurora Z. Kazemi',
    house: 'kazemi',
    role: 'Blade of the Emperor · Princess-Executioner',
    epithet: 'Perfection of Kazemi · Strongest of Her Generation',
    status: 'active',
    location: 'Valariya',
    importance: 2,
    matriline: 'zoe',
    coreType: 'Air — Perfection',
    description:
      "Zoe's eldest daughter — second child of the Emperor. Middle initial Z. marks her mother Zoe. Blade of the Emperor, Perfection of Kazemi. Known as the Princess of the Kazemis and the 'strongest of her generation' — a prodigy by every measure. Serves as the right hand of Nighla. She is the family executioner, tasked with eliminating anyone who breaks Kazemi's law or defies Kazemi's will. Power: Air — Perfection; her movements carry absolute precision and overwhelming kinetic force.",
    notes: '',
  },
  {
    id: 'eon',
    name: 'Eon I. Kazemi',
    house: 'kazemi',
    role: 'Shield of the Empire · 2nd Command, Valaryan 1st Response',
    epithet: 'Treasure of the Kazemi · The Provider',
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'zoe',
    coreType: 'Earth — Balance',
    description:
      "Zoe's eldest son — sixth child of the Emperor. Middle initial I. marks his father Irane. Shield of the Empire, Treasure of the Kazemi. Has a love of wealth and assets but it is purely an expression of love for his family's security. In charge of family defence and serves as Second-in-Command of the Valaryan 1st Response Team. Power: Earth — Balance; he anchors, stabilises, and fortifies.",
    notes: '',
  },
  {
    id: 'alpha',
    name: 'Alpha I. Kazemi',
    house: 'kazemi',
    role: 'Staff of the Empire · Vanguard Commander',
    epithet: 'Beast of the Kazemi · The Gentle Giant',
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'zoe',
    coreType: 'Nature — Beast',
    description:
      "Zoe's youngest son — seventh child of the Emperor and cross-matriline twin of Pixel. Middle initial I. marks his father Irane. Staff of the Empire, Beast of the Kazemi. The gentle giant of the family — physically the largest and possessing the greatest raw strength of all the Emperor's children, with Iron a close second. Commands the Emperor's vanguard strike forces. Power: Nature — Beast; he commands and embodies the raw, unrestrained force of living things.",
    notes: '',
  },

  // ── Arai's Children ────────────────────────────────────────────────────
  {
    id: 'nebula',
    name: 'Nebula A. Kazemi',
    house: 'kazemi',
    role: 'Armour of the Emperor · Head of Kazemi Security',
    epithet: 'Action of Kazemi · The Guardian',
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'arai',
    coreType: 'Ice — Force-Application',
    description:
      "Arai's eldest daughter — third child of the Emperor and twin of Iron. Middle initial A. marks her mother Arai. Armour of the Emperor, Action of Kazemi. Leader of the 3rd Division and Head of Kazemi Security. Stands as the guardian and structural protector of the family — the one who ensures no threat reaches those she is sworn to defend. Power: Ice — Force-Application; she crystallises force and redirects impact with absolute precision.",
    notes: '',
  },
  {
    id: 'iron',
    name: 'Iron I. Kazemi',
    house: 'kazemi',
    role: "Sword of the Empire · Leader, 4th Division",
    epithet: "Creator of the Kazemi · First True Son",
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'arai',
    coreType: 'Energy — Creation',
    description:
      "Arai's son — fourth child of the Emperor and twin of Nebula. Middle initial I. marks his father Irane. The first 'true' male heir of the Kazemi line, born to Arai. Sword of the Empire, Creator of the Kazemi. Leader of the 4th Division. Creator and primary user of the family forge — the foundry where Kazemi weapons and artefacts are made. Has a mild sister complex; he is quietly more protective of Nebula and Pixel than his other siblings. Power: Energy — Creation; he converts and forges raw energy into permanent physical constructs.",
    notes: '',
  },
  {
    id: 'pixel',
    name: 'Pixel A. Kazemi',
    house: 'kazemi',
    role: "Bow of the Empire · Imperial Assassin",
    epithet: "World-Builder of Kazemi · The Laziest Blade",
    status: 'active',
    location: 'Valariya',
    importance: 1,
    matriline: 'arai',
    coreType: 'Lightning — World',
    description:
      "Arai's youngest daughter — eighth child of the Emperor and cross-matriline twin of Alpha. Middle initial A. marks her mother Arai. Smallest of all the Emperor's daughters and the youngest daughter overall. Bow of the Empire, World-Builder of Kazemi. Infamous for being simultaneously lazy and over-energetic — calm until action is required, then impossible to stop. Serves as the family's assassin: maps volatile spatial grids and dimension folds, then threads through them undetected. Iron is quietly over-protective of her. Power: Lightning — World; she perceives and navigates the full electromagnetic grid of any environment.",
    notes: '',
  },

  // ── Vane House ─────────────────────────────────────────────────────────
  {
    id: 'niro',
    name: 'Lord Niro Vane',
    house: 'vane',
    role: 'Corrupt Acting King · Antagonist',
    epithet: 'Kingmaker of the Cold War',
    status: 'antagonist',
    location: 'Capital',
    importance: 3,
    description:
      "The primary antagonist of the Prologue. **Grandson of Historical Niro Vane** — the King of Terra who led the Age of Chaos — through his father **Nuro Vane**. Named deliberately after his grandfather, carrying the same ambitions across generations. His great-aunt is **Ember Vane** (Osiro) — Historical Niro's daughter, the historical mother of the Emperor's first three children. This makes the Irane–Niro conflict deeply layered: Irane had children with this Niro's great-aunt under duress, and the Vane line has been trying to reclaim dominance ever since Historical Niro was killed in the 1-Year Crusade. Corrupt kingmaker of the 22-Year Cold War. Hid his son Kael's identity and raised him as a disposable weapon. Launched the failed Year 500 coup against the Emperor.",
    notes: '',
  },
  {
    id: 'aqura',
    name: 'Aqura Vane',
    house: 'vane',
    role: 'Bloodline Insurance · Secretly Protected',
    epithet: 'The Preserved · Keeper of the Vane Line',
    status: 'protected',
    location: 'Valariya (secretly)',
    importance: 2,
    description:
      "Niro's sister. The world sees her as a prisoner seized by Irane — in truth she is being protected to preserve the Vane bloodline. Her unique ability to detect bloodline resonance is what reveals Kael's true parentage.",
    notes: '',
  },
  {
    id: 'kael',
    name: 'Kael',
    house: 'vane',
    role: 'Shadow Assassin → True Vane Heir',
    epithet: 'The Narrative Lead · Eyes of the Prologue',
    status: 'transitioning',
    location: 'Valariya (recovering)',
    importance: 3,
    coreType: 'Aetheric Nullification — Collapse of spatial tears on contact',
    description:
      "The narrative character through whom the entire Prologue is told. Niro's hidden biological son, raised as a brainwashed shadow assassin. His mission near Valariya's border fails catastrophically, leaving him broken inside the barrier. Nova finds him. As he recovers in Valariya, everything he was taught to believe is dismantled. His Aetheric Nullification ability collapses spatial tears on direct contact — making him a natural counter to HC/CH Conceptual users. By the end of the Prologue he knows who he is and what his father made him.",
    combatStyle: 'Aetheric Nullification — collapses spatial tears; up-close brawler',
    notes: '',
  },

  // ── Allied Clans ───────────────────────────────────────────────────────
  {
    id: 'vesper',
    name: 'Lady Vesper Wov',
    house: 'wov',
    role: 'House Leader · Head of the Inquisition',
    epithet: 'Co-Architect of the Pact',
    status: 'active',
    location: 'Wov Territory',
    importance: 2,
    description:
      "Leader of House Wov — the oldest inquisition power in the Sol-Nexus. Co-architect of the Genetic Insurance Pact with Irane and Ember Osiro. Surrendered one of her own bloodline infants as part of the exchange. Her ward House Wolva produced Vaal V. Wolva, who married Law I. Kazemi — cementing a quiet alliance between the Wov sphere and the Kazemi heir. House Wov and House Vane have maintained a bitter rivalry since the Terra era, long before the Unix world was formed.",
    notes: '',
  },
  {
    id: 'ember_osiro',
    name: 'Ember A. Osiro',
    house: 'osiro',
    role: 'Clan Leader · Grand Treasurer of the Grand Table',
    epithet: 'Co-Architect of the Pact · The Unpredictable',
    status: 'active',
    location: 'Osiro Territory',
    importance: 2,
    description:
      "Leader of Clan Osiro — one of the largest and most unpredictable clans in the Sol-Nexus. Kept global supply lines functional throughout the 22-Year Cold War. Co-architect of the Genetic Insurance Pact. The Kazemi Shadow (Irane E. Osiro) is embedded within her clan as a deep-cover asset — she may or may not be aware of his true identity.",
    notes: '',
  },

  // ── Kazemi Special Forces ──────────────────────────────────────────────────
  {
    id: 'evo',
    name: 'Evo',
    house: 'kazemi',
    role: 'Grand Commander · Kazemi Special Forces · Head of Squad 0',
    epithet: 'Beast of Wrath · Controller of the Battlefield',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    coreType: 'Wrath — Battle Command',
    description:
      "Grand Commander of the **Kazemi Special Forces** — eight Divisions of elite warriors under her direct authority, with **Squad 0** as her personal command unit. She holds the **4th highest position** in the Empire, sitting directly below Hope Kazemi (Heart of the Empire). All major military operations outside Valariya's standard defence structure run through her.\n\nHer title, **Beast of Wrath**, comes not from her temper but from her Aura beast — a creature of pure, directed martial fury bound to her core. Her defining ability is the control of battle itself: she reads the battlefield as a living organism, redistributing the flow of combat to advantage her forces while systematically dismantling enemy coordination. Allies in her theater fight at peak efficiency; enemies find their individual strengths turned into liabilities before the first blow lands. She does not simply win battles — she makes every battlefield architecturally unfair to the enemy.",
    beast: {
      name: 'Wrath',
      type: 'Sovereign Wrath Beast — Battle Arbiter',
      description: 'A being of pure, directed battle fury — not mindless rage but the embodiment of martial supremacy. Wrath does not fight directly; it commands the battlefield. Its presence amplifies the combat instincts of allies and fractures the resolve of enemies. Its defining ability is total redirection of battle flow: it can isolate specific combatants, neutralize unit coordination, and impose a fixed structure on chaotic engagements.',
    },
    notes: '',
  },

  // ── Valariyan Heads — Wielders of the Emperor's Will ─────────────────
  {
    id: 'mira_vael',
    name: 'Mira Vael',
    house: 'kazemi',
    role: 'Highest Authority in Valariya (after the Empress) · Leader of the Valariyan Heads · Right Hand of Hope Kazemi',
    epithet: 'The Emperor\'s Heart · The Conduit · Leader of the Five',
    status: 'active',
    location: 'Valariya',
    importance: 4,
    _dataRev: 2,
    description:
      'Mira Vael is the highest authority in Valariya after the Empress, and the leader of the five Valariyan Heads — those chosen by Irane to wield aspects of his Will. She wields the **Emperor\'s Emotions**: the accumulated weight of everything Irane has felt across thousands of years of dying, killing, loving, and losing. His emotional resonance is a structural threat — unrestrained, it could overflow his power catastrophically. Mira serves as conduit and regulator: she feels what he feels at amplified intensity, converting his emotional state into her beast\'s power while he maintains the restraint necessary to function safely. This is the primary reason the 3rd strongest among the five is also their leader.\n\nHer beast is **Anima** (The Sovereign Anima) — a being whose form changes entirely with the core emotional state she channels. Seven states exist:\n\n**1. Wrath** — Fire + Energy element. Great Feline form (lion/tiger class). The rage of every battle compressed into explosive force — not pure flame but raw kinetic-thermal energy that vaporizes the air before the strike lands. Offensive detonation, not burning.\n**2. Grief** — Water + Darkness element. Storm Crane form. The sorrow of permanent loss rendered into erosion and void. The crane\'s wingspan blots out light; its tears corrode rather than cleanse. Most amplified due to Irane\'s centuries of irreversible loss — this state is frequently the hardest for Mira to release.\n**3. Joy** — Lightning/Light element. Celestial Hound form (golden wolf). Rare and overwhelming — Irane\'s genuine happiness is brief but structurally powerful. When this state manifests it is always unexpected.\n**4. Love** — Life Force element. Noble Stag form. But unlike the other states, Love carries the imprint of three specific women: **Arai** (Mind · Ice-Blue), **Hope** (Heart · Crimson-Red), and **Zoe** (Body · Emerald-Green). The stag manifests threaded with their three colors — not love in the abstract but the precise structural weight of those three bonds. Absolute defense and healing, but Mira is overwhelmed not by love\'s weight in general but by the irreducible weight of those three specific relationships.\n**5. Resolve** — Earth/Stone + Iron element. Mountain Titan Tortoise. Immovable endurance. The earth connection grants geological patience; the iron aspect adds structural rigidity that resists not just physical force but conceptual pressure. The most stable emotion — easiest for Mira to maintain without cost.\n**6. Dread** — Wind/Void element. Shadow Serpent form. Area suppression, cold silence, fear-inducing presence. Felt by Mira as near-paralyzing weight.\n**7. Emptiness** — Void/Death element. Hollow Wraith form. Absolute nullification — erases force, aura, and mana in radius. Most dangerous; Mira risks losing herself when channeling it.\n\nWhen she releases all restraint and channels every emotional state simultaneously, all seven Anima forms merge — **The Emperor\'s Full Heart**. She can hold this gestalt for only moments before the weight risks destroying her from within. She wields the **Anima Lance** and serves as right hand to **Hope Kazemi**.',
    beast: {
      name: 'Anima',
      type: 'Sovereign Emotional Beast — Seven-State Conduit',
      description: 'A being with no fixed form. Anima\'s shape, element, and capabilities are determined entirely by the core emotional state Mira channels from the Emperor. Seven distinct manifestations exist — each amplifying one of Irane\'s seven core emotions with its own dual-element signature. Its true form, seen only when all emotions are released simultaneously, is a gestalt of all seven with no settled appearance.',
    },
    notes: '',
  },
  {
    id: 'aliya_hallow',
    name: 'Aliya Hallow',
    house: 'kazemi',
    role: 'Spiritual Leader of Valariya · Right Hand of Arai Kazemi · Keeper of the Emperor\'s Spirits',
    epithet: 'The Hallowed · Little Sister of Valariya',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    _dataRev: 2,
    description:
      'Aliya Hallow is the youngest of the five Valariyan Heads in terms of seniority — known within Valariya as the "Little Sister" (a title of affection, not blood). She is ranked 5th in combat ability among the five but wields the most theoretically powerful ability set of any of them, and serves as Valariya\'s Spiritual Leader.\n\nShe wields the **Emperor\'s Spirits**. In sealed state, she maintains 6 active spirits simultaneously — all phoenix-class beings made of mana-memory (perfect records the Emperor holds of each individual at the moment of their death). Each spirit is a conscious protector bound to serve Valariya:\n- **The Spirit of Valariya** (permanent): the abstract spirit of the city itself. It never leaves her. All Valariyans feel an instinctive pull to protect her because of it.\n- **Second Spirit** (chosen): someone Aliya was personally close to. Rotates weekly.\n- **Third Spirit** (most recent dead): the most recently deceased Valariyan. Received briefly to provide closure to family.\n- **Fourth Spirit** (Emperor\'s known): any Valariyan the Emperor has known — random assignment.\n- **Fifth and Sixth** (random beasts): random Valariyan beast-forms.\n\nIn unsealed state, she manifests any of the **8 Spirits of Irane** — each with an elemental base drawn from the Emperor\'s lived experience, and each gathering the collective spirits of all Valariyans who died within that domain. This is what allows Aliya\'s power to grow with every Valariyan death: she does not inherit the Emperor\'s aspect alone — she becomes the vessel for everyone who ever embodied it:\n\n**1. Spirit of War** — Element: Fire/Steel. Irane\'s strategic mind; perfect battlefield perception and command authority. Incorporates all Valariyans who died in warfare — their battlefield instincts and unfinished will joining hers. The more war dead, the larger her effective command range.\n**2. Spirit of Battle** — Element: Earth/Iron. His love for individual combat; she inherits all his techniques and instincts. Incorporates all Valariyans who died in individual combat — their personal fighting styles available mid-fight. Each incorporated duelist adds distinct techniques she can draw on.\n**3. Spirit of Creation** — Element: Life/Light. His drive to build Valariya; ability to create constructs from raw mana. Incorporates all Valariyans who died building or creating — architects, craftsmen, artists. Their knowledge amplifies the scale and complexity of what Aliya can construct.\n**4. Spirit of Celebration** — Element: Lightning/Joy. The Emperor\'s joy in his people; a radiant life-force aura that heals all Valariyans in range. Incorporates all Valariyans who died in times of peace and community — their happiness becomes fuel, intensifying healing with every joyful spirit joined.\n**5. Spirit of Endurance** — Element: Earth/Time. 1,000 years dying and resurrecting; near-unkillable state. Incorporates all Valariyans who endured great hardship before dying — their experience reinforces Aliya\'s own. The state grows more robust with each spirit who "lasted."\n**6. Spirit of Command** — Element: Wind/Lightning. The authority of the Emperor; her voice carries absolute will, capable of halting battle with words. Incorporates all Valariyans who died in leadership positions — their weight echoes through her voice, making the authority collective rather than singular.\n**7. Spirit of Elements** — Element: All 15 elements. His mastery of all elemental magic; temporary access to every element simultaneously. Incorporates all Valariyan mages who died practicing magic — each added mage deepens access to that element beyond what Irane alone provides.\n**8. Spirit of Loss** — Element: Void/Death/Darkness. The grief of every person he couldn\'t save; the most powerful and most dangerous. Incorporates all Valariyans whose deaths were unresolved or weighted with grief. Power is theoretically unlimited because the weight of loss never stops growing — but every incorporated spirit of grief presses harder on Aliya\'s psyche. The danger is not exhausting the power but losing oneself entirely in the accumulated sorrow of the dead.\n\nAliya serves as right hand to **Arai Kazemi** and wields the **Hallow Sphere**.',
    beast: {
      name: 'The Hallowed Six',
      type: 'Phoenix-Class Mana-Memory Spirits — Valariyan Dead',
      description: 'Six phoenix-class spirits maintained simultaneously from the Emperor\'s mana-memory of the Valariyan dead. In unsealed state, these give way to the 8 Spirits of Irane — each with an elemental base and the capacity to absorb the collective spirits of every Valariyan who died within that spirit\'s domain. The more Valariyans who die, the more powerful Aliya\'s unsealed states become.',
    },
    notes: '',
  },
  {
    id: 'dokia_caedus',
    name: 'Dokia Caedus',
    house: 'kazemi',
    role: 'The Strongest of the Valariyan Heads · Head Doctor of Valariya · Head of Agriculture & Food Production · Right Hand of Zoe Kazemi',
    epithet: 'Life Bearer (sealed) · The Reaper (unsealed) · The Cursed Eye',
    status: 'active',
    location: 'Valariya',
    importance: 4,
    _dataRev: 1,
    description:
      'Dokia Caedus is the strongest of the five Valariyan Heads — and a special case. Unlike the others, who received their connection to the Emperor\'s will at a defined moment in life, Dokia had it placed in her as an infant on Orius. The Emperor\'s death — the cumulative death force of every version of himself that has ever died — was deposited in her at birth.\n\nIn **sealed state**, she carries a scythe as her weapon. The sealing is deliberate: she is so capable in this state that she nerfs herself to make meaningful combat possible. The power channels through her life aspect, and her beast — **Verdun**, a dragon made of living wood, flowers, moss, and life energy — supports her. Her primary ability is healing, but not conventional healing: she can see all the ways an individual is going to die or sustain damage before it happens. She doesn\'t treat injuries after they occur — she reads the death-trajectories of future injuries and intervenes before they manifest. She uses nature magic and Life/Death magic derived directly from Irane\'s core. The **curse**: she always sees death — not how people already died, but how they *would* die. Every person she looks at carries a vision of their eventual mortality.\n\nIn **unsealed state**, Verdun sheds its living exterior to reveal a skeletal dragon structure. The scythe becomes a sword — the ultimate instrument of death. She wields Irane\'s accumulated death in full: a profound and terrifying precision for ending life. One cut from the unsealed blade is enough — anyone who truly believes they died in the experience she inflicts *does* die. She can make enemies relive the deaths of everyone they have killed. The blade accumulates life force from everything it kills in its sealed (tree/dragon) form and stores it in its living structure; when those reserves are exhausted, it converts to death force — making it an apex weapon that cannot be wielded at all without having experienced true death firsthand.\n\nShe serves as right hand to **Zoe Kazemi**, is head doctor, and personally manages Valariya\'s agriculture and food production.',
    beast: {
      name: 'Verdun',
      type: 'Forest Dragon — Life/Death Dual-State',
      description: 'In sealed state: a living dragon of wood, flowers, and growing things — the physical manifestation of the Emperor\'s life force, used for nature magic and extraordinary healing. In unsealed state: the living exterior falls away to reveal a skeletal dragon of pure death force — the Emperor\'s accumulated deaths given form. The transition is irreversible mid-battle; once unsealed, Verdun cannot return to its living form until the engagement ends.',
    },
    notes: '',
  },
  {
    id: 'urial_ferran',
    name: 'Urial Ferran',
    house: 'kazemi',
    role: 'Commander of the Royal Empiric Guard · Enforcer of Valariya · 2nd Strongest of the Valariyan Heads · Right Hand of Nighla Kazemi',
    epithet: 'The Iron Will · The Enforcer · The Man of Iron',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    _dataRev: 1,
    description:
      'Urial Ferran was not born a Valariyan. He was a pure human named Simon — a guard at the Earth facility that housed Irane during the 50 Years of Hell. He died in the First Great War. Irane brought him back, but the complications were profound: Simon had never undergone the core activation ritual, his body had been destroyed, and his core could only be activated directly by the Emperor himself. Irane rebuilt his body to a structure near-identical to his own — but the result was not a resurrection in any traditional sense. Simon became an entity of iron: a being that can take human form, but that human form is itself a suit of armour for him. He chose the name **Urial Ferran** to mark the absolute break from the man he was.\n\nIn **sealed state**, Urial exists as a human figure with a single suit of armour following him at all times. This armour is drawn from the collective of failed Emperor Drive or Emperor\'s Will candidates: those who attempt Irane\'s trials and fail do not die — their cores become pure entities stripped of personal will, dedicated entirely to the Emperor and Unix. Urial holds all such cores within himself and manifests them as armour. Each armour reflects its originator — their appearance, their core type, their uncompleted potential.\n\nIn **unsealed state**, Urial abandons the human form entirely and reveals himself as what he truly is: a command nexus. Every stored armour can be summoned and deployed simultaneously, each remotely directed, each amplifiable for the specific situation. He becomes a one-man army with a general\'s mind at the centre.\n\nHe serves as Commander of the **Royal Empiric Guard** — the highest tier of defensive force in Valariya and the strongest unified squad in the world — and is the right hand of **Nighla Kazemi**. Within Valariya\'s internal structure he is simply called "the Enforcer."',
    beast: {
      name: 'The Iron Cores',
      type: 'Armour-Class — Failed Emperor Drive Candidates',
      description: 'Not a single beast but a collective: the pure cores of all who attempted the Emperor Drive or Emperor\'s Will trials and failed. Each manifests as a distinct suit of armour — the candidate\'s appearance and core type preserved, their personal will removed. Urial contains and commands all of them, deploying them as soldiers, shields, or weapons as the moment demands.',
    },
    notes: '',
  },
  {
    id: 'pandro_lexan',
    name: 'Pandro Lexan',
    house: 'kazemi',
    role: 'Head of Magic & Education in Valariya · Right Hand of Summari Kazemi · Resident Sage',
    epithet: 'The Living Library · Keeper of the Hallowed Fifteen',
    status: 'active',
    location: 'Valariya — The Undying Archives',
    importance: 3,
    _dataRev: 2,
    description:
      'Pandro Lexan was a lowborn librarian in Orius who worked at the Great Library of the Ascen alongside fifteen elder women scribes — the **Hallowed Fifteen**. Each had been assigned one element and had documented every known spell in that element at Sage-tier (Level 9) comprehension. They had sacrificed their physical bodies to achieve this, becoming permanently altered by the weight of that much magical knowledge. During the final collision of the worlds, the Library\'s leaders left them to die in order to save the books. They judged the women less valuable than the records they had written.\n\nPandro was the only person who stayed. He chose to die with the fifteen rather than abandon them. Irane saw this in the chaos of the merging worlds and saved them without hesitation.\n\nToday, the Hallowed Fifteen live in **The Undying Archives** — a section of the Emperor\'s Palace in Valariya, where they have begun recreating and expanding the magical catalogue, serve as judges for magical aptitude, and teach those they consider worthy. They are also Pandro\'s beasts in the truest functional sense. Each carries the name of her element:\n**Pyra** (Fire) · **Aqua** (Water) · **Terra** (Earth) · **Aeva** (Wind) · **Volta** (Lightning) · **Glacis** (Ice) · **Viva** (Life/Nature) · **Mortia** (Death) · **Umbra** (Darkness) · **Lumis** (Light) · **Spatia** (Space) · **Tempora** (Time) · **Psiris** (Mind) · **Gravia** (Gravity) · **Resona** (Sound)\n\nPandro\'s ability: he summons the **Grand Catalogue** (his spell book), and when he opens it, it lands on a random element — locking him to that element and that Granny\'s complete catalogue for the day. In that state, the book contains every spell known to that specific Granny, including the Emperor\'s own spell knowledge filtered through her element. In **unsealed state**, he can summon all fifteen Grannies simultaneously and access every element at once — knowledge split across fifteen minds so no single consciousness is destroyed by the volume. The tradeoff is catastrophic instability when attempting cross-element combinations without all fifteen present.\n\nPandro is a **Magescrafter** (Level 7) by his own core, but through the Hallowed Fifteen he effectively operates at **Sage-tier** — and in unsealed state, at the Emperor\'s own knowledge ceiling. He serves as right hand to **Summari Kazemi** and heads all magic education and licensing within Valariya. The Grannies are not passive tools — they have full veto over the use of specific spells.',
    beast: {
      name: 'The Hallowed Fifteen',
      type: 'Elder Spirit Scribes — Sage-Tier Sealed',
      description: 'Fifteen women, each holding the Sage-tier (Level 9) spell catalogue for one of the 15 elements: Pyra (Fire), Aqua (Water), Terra (Earth), Aeva (Wind), Volta (Lightning), Glacis (Ice), Viva (Life), Mortia (Death), Umbra (Darkness), Lumis (Light), Spatia (Space), Tempora (Time), Psiris (Mind), Gravia (Gravity), Resona (Sound). They manifest one at a time in sealed state and all simultaneously in unsealed — splitting the total volume across fifteen minds so Pandro can wield it. They are conscious, opinionated, and hold veto power over specific spell use.',
    },
    notes: '',
  },

  // ── The Ancient Villain ────────────────────────────────────────────────
  {
    id: 'auris',
    name: 'Auris',
    house: 'vane',
    role: 'The Ancient Architect · Sealed Within the Spear of Unix',
    epithet: 'The First · He Who Used Everyone',
    status: 'deceased',
    location: 'Sealed within the Spear of Unix',
    importance: 3,
    description:
      'An ancient Vethara who predated the Ferali/Celestials split — the primary living-world agent of the Arke twins (Vrak Arke and Selis Arke), rulers of Limbo. He was neither Ferali nor Celestials but older than both factions, operating with the full authority of both Arke twins simultaneously. His defining method: never act directly. The 14 Gods answered to him. The Vane dynasty answered to him. The hierarchy ran: Arke twins → Auris → 14 Gods → Vane kings → everyone else. He directed the subjugation plan across generations through Aevum Vane\'s dynasty, never revealing his full position. When the 14 Gods planned to betray him at the ritual\'s critical moment, he uno-reversed them, seized simultaneous control of all 14, and completed the plan himself. Irane killed him and sealed his spirit into the Spear of Unix — eternal punishment: the one who spent millennia using others is now permanently used. With Auris sealed, the Arke twins lost their primary agent. The current era\'s political diffusion is partly a consequence: no instrument as capable as Auris exists anymore to coordinate the twins\' plan from the living world.',
    notes: '',
  },

  {
    id: 'nuro',
    name: 'Nuro Vane',
    house: 'vane',
    role: 'Son of Historical Niro · Father of Lord Niro Vane',
    epithet: 'The Quiet Inheritor',
    status: 'deceased',
    location: 'Historical (Unix World, post-Year 131)',
    importance: 1,
    description:
      'Son of **Historical Niro Vane** and brother of **Ember Vane** (later Ember Osiro). Survived the Great Stasis and the Age of Chaos, though not as a frontline figure — his father held the Spear and led the war. After Historical Niro\'s death at Irane\'s hands during the 1-Year Crusade, Nuro rebuilt the Vane bloodline across the Age of Lawlessness and into the Grand Table era. He named his own son **Niro** after his father — a declaration that the ambition had not died with the man. The Year 500 antagonist Lord Niro Vane is his son.',
    notes: '',
  },

  // ── Pre-Unix Historical Figures ────────────────────────────────────────
  {
    id: 'eva_osiro',
    name: 'Eve (Eva Osiro)',
    house: 'osiro',
    role: 'First Human Ever · Created by Mana\'s Final Spell',
    epithet: 'The First Woman · Mother of Humanity',
    status: 'deceased',
    location: 'Historical (Orius → Earth, Pre-Unix)',
    importance: 3,
    description:
      'Eve is not a Terran being — she is the first human in existence, created by Mana the Conceptual\'s self-sacrificial final spell alongside Adam. Mana poured his entire consciousness and life force into forming two beings of human pattern, untethered from any Vethara covenant. He named the woman **Osiro** after a Terran lineage he respected. Eve and Adam had no beast-contracts, no tool-contracts, no innate abilities — only free will unclaimed by any system. The 14 Gods hunted them. Exco Wov sacrificed himself to tear a dimensional crossing; Eve and Adam escaped to Earth with permanently sealed Cores inherited from the crossing. They lived, aged, and died on Earth. Their offspring became humanity. Her son Seth Osiro, born on Orius before the escape, was left behind and captured by the Vane dynasty — his bloodline became the controlled Osiro lineage Ember later reclaimed. Three Ascen bloodlines preserved her legacy on Orius: Wov (Exco\'s line), Apolo, and Navar.',
    notes: '',
  },
  {
    id: 'exco_wov',
    name: 'Exco Wov',
    house: 'wov',
    role: 'Founder of the Wov Bloodline · Sacrificial Contractor',
    epithet: 'He Who Gave Everything',
    status: 'deceased',
    location: 'Historical (Pre-Unix)',
    importance: 2,
    description:
      'Ancestor of Vesper Wov and founder of the Wov bloodline. An Ascen who had aided Mana the Conceptual\'s work on Orius and believed in what Eve and Adam represented. When the 14 Gods hunted them, Exco sacrificed himself — contracting simultaneously with the Time, Space, and Life/Death Conceptuals (three Supreme Concepts) to tear a dimensional crossing to Earth. The act killed him. Eve and Adam passed through; their Cores were permanently sealed in transit. This sealed-Core trait passed to all human descendants. The Wov bloodline continued on Orius through Exco\'s remaining family line — not through Adam (who was not Exco\'s son, but was created by Mana). Exco\'s descendants became keepers of **Mother Nature\'s weapon** (the Tree of Eden), eventually becoming House Wov of the Sol-Nexus.',
    notes: '',
  },
  {
    id: 'adam_wov',
    name: 'Adam',
    house: 'osiro',
    role: 'First Human · Created by Mana\'s Final Spell',
    epithet: 'The First Man · Father of Humanity',
    status: 'deceased',
    location: 'Historical (Orius → Earth, Pre-Unix)',
    importance: 2,
    description:
      'Adam is the first man in existence, created alongside Eve by Mana the Conceptual\'s self-sacrificial final spell. Like Eve, he was formed from pure mana shaped into human pattern — no beast-contract, no tool-contract, no Vethara covenant. He and Eve escaped to Earth through the dimensional crossing Exco Wov sacrificed himself to open. The crossing permanently sealed both their Cores — not destroyed, merely locked. This sealed-Core trait became the inheritance of all humanity. Adam and Eve lived normal lives on Earth, aged, and died there. Their descendants multiplied over thousands of years, becoming humanity as it existed by the time of the Paradise Spell merger. The **Book of Time** (Father Time\'s weapon) can trace any living person\'s ancestry back to Adam.',
    notes: '',
  },
  {
    id: 'volva_vane',
    name: 'Volva Vane',
    house: 'vane',
    role: 'First King of Terra · Aevum Vane\'s Public Identity',
    epithet: 'The First King · The Name He Wore',
    status: 'deceased',
    location: 'Historical (Terra, Pre-Unix)',
    importance: 2,
    description:
      '"Volva Vane" was the first public identity of **Aevum Vane** — the immortal Ascen progenitor who made the original deal with the Arke twins. Under this name, Aevum established the Vane dynasty, aligned it with the Celestials, and built Terra\'s political architecture as the twins\' visible instrument. What the Arke twins and Auris did not know was that Aevum had also been cultivating a friendship with Mana the Conceptual and was building the knowledge base that would eventually produce the 18 Noble Treasure weapons. He vanished from public life before the subjugation plan\'s final stage, transferred his consciousness into a new body through a facility procedure, and re-entered history under a different cover. The Vane dynasty continued without understanding that its founder had left.',
    notes: '',
  },
  {
    id: 'aevum_vane',
    name: 'Aevum Vane',
    house: 'vane',
    role: 'Progenitor of House Vane · Immortal Ascen · Irane\'s Closest Friend',
    epithet: 'Eternity · The Man Who Was Everyone',
    status: 'unknown',
    location: 'Historical (Orius) → Unknown (Post-Escape)',
    importance: 4,
    description:
      'The true founding figure behind the Vane dynasty — the immortal Ascen who, thousands of years before the catastrophe, made the original deal with the Arke twins and became the first King of Terra under the name **Volva Vane**. "Aevum" means eternal time in an ancient Terran language. He had lived so long and accumulated so much knowledge about the Arke twins\' covenant system that he was functionally immortal by understanding. He accepted the deal not because he believed in it, but to buy time and access. In parallel, he cultivated a friendship with Mana the Conceptual and spent centuries assembling the knowledge base that would produce the 18 Noble Treasure weapons — funding the forge project, concealing it as scholarly archival work, and eventually bringing Irane in with everything she needed to complete it. Before the subjugation plan\'s final stage, he transferred his consciousness into a new human body through a classified facility procedure and joined the escape group under the cover identity of a Vane dynasty archivist with extraordinary institutional knowledge. No one in the group knew who he actually was. He became Irane\'s closest and most trusted friend during the escape and its aftermath. His relationship with **Ember Vane** was different: he manufactured her belief that he was the one person who truly understood her — a deception old enough that he may not have recognized it as such. Aevum\'s fate after the Sol-Nexus was founded is unknown. He could still be alive.',
    notes: '',
  },
  {
    id: 'arke',
    name: 'Arke',
    house: 'none',
    role: 'Orian Woman · Wife of Mana · Founder of Structured Magic · Mother of the Arke Twins',
    epithet: 'She Who Named Power · Origin of Last Names',
    status: 'deceased',
    location: 'Historical (Orius — pre-Vethara era)',
    importance: 4,
    _dataRev: 1,
    description:
      'An Orian woman living in the Stone Age of Orian magic who found a severely injured Mana the Conceptual after he crossed from Limbo and brought him back to her community to heal. She watched him use spells instinctively — effects produced by will and speech that no one had ever systematized — and began translating what she saw into repeatable forms, symbols anyone could learn and apply. This was not Mana\'s teaching. This was **Arke\'s act of observation and formalization**. She invented structured spell-casting. She is the reason the 15 Pillars can be accessed through technique rather than only through innate ability.\n\nArke and Mana married. They had two children — Vraka and Selis. She died in childbirth. Mana, in his grief, gave both children her name as a permanent tribute. This was the **first time in Orian history that a family surname had been passed intentionally to children**. The practice spread across all of Orian civilization from that community outward. Every last name in the Orian world exists because Mana chose to ensure his children would always carry their mother\'s identity.\n\nArke herself never knew the scope of what she had started. She formalized what she saw in a gifted stranger. The stranger was a Conceptual of Magic. The civilization that would eventually produce the Alma, the Spirits, and the Ascen — the system of contracts, factions, and power that shaped all of Orian history — runs on the magical framework she built from her own observations.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'dulla_vane',
    name: 'Dulla Vane',
    house: 'vane',
    role: 'Eldest Son of Aeyum Vane · Deal-Broker for the Arke Twins · Founder of the Vane Dynasty in Practice',
    epithet: 'The Intermediary · He Who Brought the Terms',
    status: 'deceased',
    location: 'Historical (Orius — pre-Terra era)',
    importance: 3,
    _dataRev: 1,
    coreType: 'Energy (Light-aligned) · Harmonic-Light Core State',
    description:
      'Aeyum Vane\'s eldest son and the person the Arke twins identified as their access point into Vane leadership. Dulla was chosen not simply because of his position but because his character made him the ideal bridge: capable, composed, sufficiently ambitious to understand the stakes without being so consumed by personal ambition that he would complicate the negotiation. He held an extremely rare combination — Energy as his primary element with a Light-aligned secondary, operating under a Harmonic-Light Core State — making him one of the most strategically capable minds in Orian society at the time.\n\nThe Arke twins approached Dulla first. They gave him the full proposal in complete detail: the offer of "immortality" (in practice: extraordinarily extended life and consciousness transfer capability), absolute rulership of Orius, and a permanent Vane dynasty as the managing class of the Ferali/Celestial contract system. Dulla reviewed the terms, assessed his father\'s reaction to receiving them, and brought the complete package to Aeyum.\n\nAeyum accepted with full knowledge. Dulla had made that possible by being a relay who understood the weight of what he was carrying. He lived long enough to see the Vane dynasty formally established under the name "Volva Vane" — which was Aeyum\'s public identity, not Dulla\'s — and died early in the dynasty\'s expansion. He never held the throne. He was the person who handed his father the keys to it.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'gaia_primordial',
    name: 'Gaia (Mother Nature)',
    house: 'none',
    role: 'Primordial of Life Force · Reconstituted as Mother Nature · Source of Eve\'s Foundation',
    epithet: 'The Life Force · That Which Grows · First Death',
    status: 'reconstituted',
    location: 'Limbo (origin) → Earth (as Mother Nature)',
    importance: 5,
    _dataRev: 1,
    coreType: 'Conceptual — Life Force / Life-Death Pillar',
    description:
      'One of the three named Primordials of Limbo. Gaia\'s conceptual nature was the **Life Force** — the principle that governs biological existence, growth, death, and the conversion of living energy into death force. She was not a being who controlled life and death as abilities. She was the operating principle itself: when she was present, living things grew, and death processed cleanly into the cycle. Her nature operated at the level where biological law is set, not applied.\n\nGaia was among the three Primordials accidentally killed by Mana as a child. He cast a spell without understanding the scale of his own nature, and all three died. Her conceptual form was destroyed — but the **Life Force principle could not die**. Principles don\'t cease to exist because their custodian does. She dissolved into the Life-Death Pillar entirely, distributed across the fabric of Limbo rather than held in a single form. This dissolution lasted eons.\n\nOver time, the force of her conceptual nature slowly reconstituted. Not in Limbo. Not as a Primordial. Something that had formed a new will during the long dissolution — drawn toward the first truly free beings in existence. When Mana used the remnant conceptual material of Gaia and Cronus to create Eve and Adam (his final act), the act of using that material created a resonance. The reconstituted Gaia was drawn to it. When Eve and Adam crossed to Earth, she followed.\n\n**As Mother Nature:** Gaia does not call herself Gaia. She manifests on Earth as the living world itself — ancient trees, ocean systems, storm patterns, the intuition that something large and old is paying attention. She is not the same being who existed in Limbo. She is built from the same conceptual substance, with a new will. She chose to serve the free. Her weapon is the **Tree of Eden**, which gravitated to the Wov bloodline — the descendants of the sacrifice that made the human crossing possible.',
    beast: {},
    weapon: { name: 'Tree of Eden', type: 'Primordial Noble Treasure — Life Force' },
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'cronus_primordial',
    name: 'Cronus (Father Time)',
    house: 'none',
    role: 'Primordial of Time · Reconstituted as Father Time · Source of Adam\'s Foundation',
    epithet: 'The Architect of Time · The Weight of Names · Recorded Memory',
    status: 'reconstituted',
    location: 'Limbo (origin) → Earth (as Father Time)',
    importance: 5,
    _dataRev: 1,
    coreType: 'Conceptual — Time / Time Pillar',
    description:
      'One of the three named Primordials of Limbo. Cronus\'s conceptual nature was **Time** — not the ability to manipulate time, but the operating principle itself. Events recorded themselves in his presence. Causality ran cleanly. The weight of what had happened accumulated as structure rather than dissolving. He was the reason the past was real: in his presence, what occurred could not be undone, reinterpreted, or erased. He was the foundation of consequence.\n\nCronus was killed in the same moment as Gaia and Kazemi — Mana\'s accidental childhood spell touched all three simultaneously. Like Gaia, his conceptual nature could not truly die. The Time principle did not cease because its custodian dissolved. He distributed into the Time Pillar and spent eons reforming — not as a Limbo entity, but as something with a new will, shaped by the long silence of dissolution.\n\nWhen Mana used the conceptual remnants of Gaia and Cronus to create Eve and Adam, the resonance of that act reached the reforming Cronus as it had reached Gaia. He followed the free beings across the dimensional threshold to Earth.\n\n**As Father Time:** Cronus manifests as recorded memory — the weight of ancestry, the pull of names, the sense that something has already happened before. He is not a figure who appears. He is the reason lineage matters, the reason the past exerts weight on the present, the reason some knowledge feels older than the person who holds it. He chose to serve the free because free will was something that had not existed in Limbo before Eve and Adam — and for a being whose nature is consequence, the presence of beings who could choose was the most significant event he had witnessed.\n\nHis weapon is the **Book of Time**, which holds the complete ancestral record of every human alive — traceable back to Adam. It gravitated to the Osiro bloodline, the descendants of Seth Osiro, who lived for generations under Vane control.',
    beast: {},
    weapon: { name: 'Book of Time', type: 'Primordial Noble Treasure — Time' },
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'cycla_more',
    name: 'Cycla More',
    house: 'none',
    role: 'Elder of the Oldest Primal Clan · Last Leader of the Unbroken Primals · The One Who Would Not Fall',
    epithet: 'The Unmoved · He Who Held the Door',
    status: 'deceased',
    location: 'Historical (Limbo — Primal Age)',
    importance: 4,
    _dataRev: 1,
    coreType: 'Energy-Dark (primary) · Harmony-Light (secondary)',
    description:
      'The elder of the oldest surviving Primal clan — a lineage predating the birth of the Arke twins, unbroken from before the Death of the Ancients, and the most traditional adherents to the worship of the Primordial Three. When the Arke twins waged war on the Primals and the seven remaining Primal leaders were hunted, Cycla More was the one the twins wanted most: capturing him would have meant capturing the last authentic thread of the pre-Mana world.\n\nHe refused the deal. Refused forced conversion. Refused the fear tactic when the twins revealed they were Mana\'s children. He spent the final years of the war doing one thing: moving his people — leading hundreds of thousands of Primals through the hardest terrain in Limbo, trading smaller defeats for the larger calculation of survival.\n\nHis Core State combination — **Energy-Dark (primary) with Harmony-Light (secondary)** — was the rarest dual-pillar affinity ever recorded: two Sovereign-tier energies of opposing polarity, simultaneously active in a single body. He weaponized this in his final act.\n\nWhen the twins committed their full forces to the last Primal stronghold, Cycla stayed behind to hold the line while his daughter Cith More led the evacuation. He performed the **Black Light Dance** — burning his entire mana reserve and then his life force as fuel, igniting his Darkness and Light energies in mutual resonance until they amplified into a cascading annihilation field that traveled at the speed of thought. It permanently scarred both Vraka and Selis. The only recorded act to physically mark the children of a Conceptual of Magic. He died performing it. He knew the cost before he began.\n\nHis clan, led forward by Cith More, survived.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'cith_more',
    name: 'Cith More',
    house: 'none',
    role: 'Daughter of Cycla More · Operational Leader of the Primal Evacuation · She Who Made the Call',
    epithet: 'The Inheritor · She Who Trusted',
    status: 'survived-into-exile',
    location: 'Historical (Limbo — Primal Age → Mana\'s Hidden Realm)',
    importance: 3,
    _dataRev: 1,
    coreType: 'Nature-Energy (primary) · Chaos-Dark (secondary)',
    description:
      'Daughter of Cycla More and his operational second for the final decade of the Primal war. When the twins committed their full forces to the last Primal stronghold, it was Cith More who recognized the numbers clearly and organized the evacuation — moving hundreds of thousands of Primals toward the one exit that was not yet known: Mana\'s hidden realm.\n\nHer Core State — **Nature-Energy primary with Chaos-Dark secondary** — gave her an unusual relationship to ordered structures: she saw through fixed systems, including the established fear of Mana\'s name. When the evacuation force reached the position she had calculated and found Mana already waiting, the surviving Primals hesitated. They knew his history. They knew his children\'s war. They knew that the chain from his existence to their near-extinction was direct.\n\nCith More made the decision to lead them through anyway. Not from naivety. She knew every step of that chain. She looked at Mana\'s face — aged, frail, carrying the weight of a million years of debt — and recognized that no being carrying that weight had sent his children to do what they had done. The guilt was the evidence. She was right.\n\nShe is the reason the Primals survived. The decision to trust Mana in that moment, against every prior reason to refuse, preserved a people who would otherwise have been ended. Her clan continued in Mana\'s hidden realm until he prepared the next step.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'nuro_vane',
    name: 'Niro Vane (Historical)',
    house: 'vane',
    role: 'King of Terra · Father of Ember and Nuro · Leader of the Age of Chaos',
    epithet: 'The Warlord King · He Who Held the Spear First',
    status: 'deceased',
    location: 'Historical (Terra → Unix World, died Unix Year ~131)',
    importance: 3,
    description:
      'The King of Terra at the time of the world-merger catastrophe, and one of the most consequential figures in early Sol-Nexus history. Father of **Ember** (3rd daughter, gifted to the facility at age 13) and **Nuro** (son, who continued the Vane bloodline after the stasis). He served the Celestials as Auris directed, believing his own ambitions were his own. When the merger happened, he was the most powerful Vane alive — and when the Great Stasis ended 1000 years later, he woke with more accumulated authority and pre-existing power than anyone. He found the **Spear of Unix**, recognized it for what it was, and spent 130 years consolidating control over the 14 Noble Treasure holders. He sealed Irane in a separate realm before launching the strike on Valariya that killed 4 million people. He was killed by Irane personally during the 1-Year Crusade at Unix Year ~131. The Year 500 Lord Niro Vane is his grandson through Nuro, named after him deliberately to carry the dynasty\'s most infamous ambition forward.',
    notes: '',
  },
  {
    id: 'tenza',
    name: 'Tenza',
    house: 'nexal',
    role: 'Arai\'s Brother · Betrayer',
    epithet: 'The One Who Left Her There',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    description:
      'Arai\'s older brother, age 30 at the time of her capture. He was betrothed to Ember Vane before the facility incident. When the Celestials required a researcher for the life-force project, Tenza left Arai at the facility as leverage — a deliberate act of abandonment that secured his own freedom. His betrayal of Arai is one of the defining wounds of her character. His current whereabouts and fate in the Sol-Nexus era are unknown. His betrothal to Ember was voided when Ember was taken to the facility by her father, Historical Niro Vane.',
    notes: '',
  },
  {
    id: 'nina',
    name: 'Nina',
    house: 'nexal',
    role: 'Arai\'s Youngest Sister · The Left-Behind',
    epithet: 'The Newborn Who Waited',
    status: 'unknown',
    location: 'Unknown',
    importance: 1,
    description:
      'Arai\'s newborn sister at the time Arai was taken to the facility. Left behind in the Nexal Clan homeland. Arai\'s awareness of Nina — a baby she never had the chance to know — is a quiet source of grief for her throughout the experiments and beyond. Nina\'s fate after the Terra/Earth merger into the Sol-Nexus is unrecorded.',
    notes: '',
  },
  {
    id: 'minia_consa',
    name: 'Minia Consa',
    house: 'unknown',
    role: 'Lead Researcher · Facility Director',
    epithet: 'The Architect of Subject No. 8',
    status: 'deceased',
    location: 'Historical (The Facility)',
    importance: 2,
    description:
      'The lead researcher and director of the facility on Earth. She managed the Infinity Challenge — the brutal elimination process in which 10,000 subjects were tested and 9,999 died — and recognized Irane as Subject No. 8 when he survived. She oversaw 50 years of experiments on Irane, Arai, Hope, and Zoe. In year 49 she forced Ember Vane to mate with Irane, producing three children before the escape. During the final escape, Minia pursued the fleeing subjects with helicopters. She died in the facility explosion that ended the project. Her research contributed to the foundational life-force methods that underpin Ascen-derived magic in the Sol-Nexus.',
    notes: '',
  },
  {
    id: 'simon_archiver',
    name: 'Simon Archiver',
    house: 'unknown',
    role: 'Resistance Organizer · Rescuer of the 120',
    epithet: 'The Human Who Remembered Them',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    description:
      'A human who organized the rescue mission that ultimately freed Irane, Arai, Hope, Zoe, Ember, and 120 child test subjects from the facility. He coordinated 12 children with newly awakened Cores — a rare phenomenon in humans — as the strike team. His methods were tactical rather than violent; he used the 12 children\'s awakened Cores as a distraction and disruption while Irane broke out from within. His background, motivations, and fate after the escape are not publicly known.',
    notes: '',
  },

  // ── The 12 Rescue Children ─────────────────────────────────────────────
  {
    id: 'alaiya',
    name: 'Alaiya',
    house: 'unknown',
    role: 'Rescue Child · Nature Concept User',
    epithet: 'The Youngest · Major Player of the Present Era',
    status: 'active',
    location: 'Unknown',
    importance: 2,
    description:
      'The youngest and smallest of the 12 children organized by Simon Archiver for the facility rescue mission. Her newly awakened Core carries a Nature affinity. Despite being the youngest at the time of the escape, she grows into a major player in the current Sol-Nexus era. The full scope of her role in the present-day narrative is not yet public knowledge.',
    notes: '',
  },
  {
    id: 'leo_proude',
    name: 'Leo Proude',
    house: 'unknown',
    role: 'Rescue Child · Team Leader',
    epithet: 'The Leader of the Twelve',
    status: 'unknown',
    location: 'Unknown',
    importance: 1,
    description:
      'Leader of the 12 children organized by Simon Archiver for the facility rescue. He coordinated the group during the operation, managing the chaos of simultaneous inside-and-outside pressure while Irane freed himself and the others. His current status and whereabouts in the Sol-Nexus era are unknown.',
    notes: '',
  },
  {
    id: 'dio',
    name: 'Dio',
    house: 'unknown',
    role: 'Rescue Child',
    epithet: 'One of the Twelve',
    status: 'unknown',
    location: 'Unknown',
    importance: 1,
    description:
      'One of the 12 children with newly awakened Cores who participated in Simon Archiver\'s facility rescue mission. Further details of his role and fate remain unrecorded.',
    notes: '',
  },
  {
    id: 'mira_rescue',
    name: 'Mira',
    house: 'unknown',
    role: 'Rescue Child · Captured and Saved',
    epithet: 'Saved by the Dragon',
    status: 'unknown',
    location: 'Unknown',
    importance: 1,
    description:
      'One of the 12 children who participated in the facility rescue mission. During the escape through the sea, Mira was captured by facility forces and separated from the group. She was later rescued by one of the golden dragons that appeared in the sea during the escape — a creature drawn to the unique mana signatures of the children. Her fate after being recovered by the dragon is unrecorded.',
    notes: '',
  },
]

export const defaultRelationships = [
  // ── Irane's marriages / unions ──────────────────────────────────────
  { id: 'r01', source: 'irane', target: 'arai',       type: 'married',      secret: false },
  { id: 'r02', source: 'irane', target: 'hope',       type: 'married',      secret: false },
  { id: 'r03', source: 'irane', target: 'zoe',        type: 'married',      secret: false },
  { id: 'r04', source: 'irane', target: 'ember_hist', type: 'forced_union', secret: true,
    note: 'Forced union arranged by Minia Consa. Ember was gifted to the facility by her father, Historical Niro Vane, King of Terra.' },

  // ── Irane → children ─────────────────────────────────────────────────
  { id: 'r05', source: 'irane', target: 'summari', type: 'parent', secret: false },
  { id: 'r06', source: 'irane', target: 'nighla',  type: 'parent', secret: false },
  { id: 'r07', source: 'irane', target: 'nova',    type: 'parent', secret: false },
  { id: 'r08', source: 'irane', target: 'aurora',  type: 'parent', secret: false },
  { id: 'r09', source: 'irane', target: 'nebula',  type: 'parent', secret: false },
  { id: 'r10', source: 'irane', target: 'iron',    type: 'parent', secret: false },
  { id: 'r11', source: 'irane', target: 'law',     type: 'parent', secret: false },
  { id: 'r12', source: 'irane', target: 'eon',     type: 'parent', secret: false },
  { id: 'r13', source: 'irane', target: 'alpha',   type: 'parent', secret: false },
  { id: 'r14', source: 'irane', target: 'pixel',   type: 'parent', secret: false },
  { id: 'r15', source: 'irane', target: 'faith',   type: 'parent', secret: false },
  { id: 'r16', source: 'irane', target: 'shadow',  type: 'parent', secret: true,
    note: 'Secret child — true name Irane E. Osiro. Embedded in Clan Osiro as a deep-cover spy.' },

  // ── Mothers → children ───────────────────────────────────────────────
  // Ember's line (secret mother; pre-awakening)
  { id: 'r17', source: 'ember_hist', target: 'summari', type: 'parent', secret: true,
    note: 'Summari chose her father\'s name. Ember is the biological mother kept from public records.' },
  { id: 'r18', source: 'ember_hist', target: 'nighla',  type: 'parent', secret: true,
    note: 'Nighla chose her father\'s name. Twin of Summari.' },
  { id: 'r19', source: 'ember_hist', target: 'shadow',  type: 'parent', secret: true,
    note: 'Shadow took his father\'s first name (Irane) and his mother\'s clan affiliation (Osiro).' },
  // Arai's line
  { id: 'r20', source: 'arai', target: 'nebula', type: 'parent', secret: false },
  { id: 'r21', source: 'arai', target: 'iron',   type: 'parent', secret: false },
  { id: 'r22', source: 'arai', target: 'pixel',  type: 'parent', secret: false },
  // Hope's line
  { id: 'r23', source: 'hope', target: 'nova',  type: 'parent', secret: false },
  { id: 'r24', source: 'hope', target: 'law',   type: 'parent', secret: false },
  { id: 'r25', source: 'hope', target: 'faith', type: 'parent', secret: false },
  // Zoe's line
  { id: 'r26', source: 'zoe', target: 'aurora', type: 'parent', secret: false },
  { id: 'r27', source: 'zoe', target: 'eon',    type: 'parent', secret: false },
  { id: 'r28', source: 'zoe', target: 'alpha',  type: 'parent', secret: false },

  // ── Sibling bonds ────────────────────────────────────────────────────
  // Ember's children
  { id: 'r29', source: 'summari', target: 'nighla', type: 'sibling', secret: false,
    note: 'Twins — both Ember\'s daughters, chose Kazemi name' },
  { id: 'r30', source: 'summari', target: 'shadow', type: 'sibling', secret: true,
    note: 'Same mother (Ember) — secret' },
  { id: 'r31', source: 'nighla',  target: 'shadow', type: 'sibling', secret: true,
    note: 'Same mother (Ember) — secret' },
  // Arai's children (incl. twins)
  { id: 'r32', source: 'nebula', target: 'iron',  type: 'sibling', secret: false,
    note: 'Twins — Arai\'s first two children (3rd and 4th born overall)' },
  { id: 'r33', source: 'nebula', target: 'pixel', type: 'sibling', secret: false },
  { id: 'r34', source: 'iron',   target: 'pixel', type: 'sibling', secret: false,
    note: 'Iron is protectively fond of Pixel (and Nebula)' },
  // Hope's children
  { id: 'r35', source: 'nova',  target: 'law',   type: 'sibling', secret: false },
  { id: 'r36', source: 'nova',  target: 'faith', type: 'sibling', secret: false },
  { id: 'r37', source: 'law',   target: 'faith', type: 'sibling', secret: false },
  // Zoe's children
  { id: 'r38', source: 'aurora', target: 'eon',   type: 'sibling', secret: false },
  { id: 'r39', source: 'aurora', target: 'alpha', type: 'sibling', secret: false },
  { id: 'r40', source: 'eon',    target: 'alpha', type: 'sibling', secret: false },
  // Cross-matriline twin pair
  { id: 'r41', source: 'alpha', target: 'pixel', type: 'sibling', secret: false,
    note: 'Cross-matriline twins — Alpha (Zoe\'s son) and Pixel (Arai\'s daughter), born in the same moment from two mothers' },
  // Vane siblings
  { id: 'r42', source: 'niro', target: 'aqura', type: 'sibling', secret: false },

  // ── Cross-family and political bonds ─────────────────────────────────
  { id: 'r43', source: 'niro',  target: 'kael', type: 'parent', secret: true,
    note: 'Deliberately hidden. Kael raised as a disposable weapon.' },
  { id: 'r44', source: 'nova',  target: 'kael', type: 'ally', secret: false,
    note: 'Nova finds Kael at the border and nurses him back to health — catalyst of the entire Prologue' },
  { id: 'r45', source: 'irane', target: 'aqura', type: 'protects', secret: true,
    note: 'World sees seizure as tyranny; Irane is preserving the Vane bloodline' },
  { id: 'r46', source: 'kael',  target: 'aqura', type: 'kin', secret: false,
    note: "Aqura's bloodline detection reveals Kael as Niro's son" },
  { id: 'r47', source: 'irane', target: 'vesper',     type: 'pact', secret: true,
    note: 'Top-secret Genetic Insurance Pact' },
  { id: 'r48', source: 'irane', target: 'ember_osiro', type: 'pact', secret: true,
    note: 'Top-secret Genetic Insurance Pact' },
  { id: 'r49', source: 'vesper', target: 'ember_osiro', type: 'pact', secret: true,
    note: 'Top-secret Genetic Insurance Pact' },
  { id: 'r50', source: 'niro',  target: 'irane', type: 'enemy', secret: false,
    note: 'Niro launches the Year 500 military coup' },
  // Shadow embedded in Osiro
  { id: 'r51', source: 'shadow', target: 'ember_osiro', type: 'ally', secret: true,
    note: 'Irane E. Osiro is embedded within Ember A. Osiro\'s clan as a Kazemi intelligence asset' },
  // Law married into Wov sphere
  { id: 'r52', source: 'law', target: 'vesper', type: 'ally', secret: false,
    note: "Law married Vaal V. Wolva — a ward of House Wov's Clan Wolva" },

  // ── Vane dynasty lineage ──────────────────────────────────────────────
  { id: 'r53', source: 'nuro_vane',  target: 'ember_hist', type: 'parent', secret: false,
    note: 'Historical Niro Vane gifted his own daughter Ember to the facility at age 13' },
  { id: 'r54', source: 'nuro_vane',  target: 'nuro',       type: 'parent', secret: false,
    note: 'Historical Niro\'s son Nuro continued the Vane bloodline after the 1-Year Crusade' },
  { id: 'r55', source: 'ember_hist', target: 'nuro',       type: 'sibling', secret: false,
    note: 'Ember and Nuro are siblings — both children of Historical Niro Vane' },
  { id: 'r56', source: 'volva_vane', target: 'nuro_vane',  type: 'kin', secret: false,
    note: 'Vane dynasty lineage — Volva is the founding patriarch, Historical Niro is a descendant' },
  { id: 'r56b', source: 'nuro',      target: 'niro',        type: 'parent', secret: false,
    note: 'Nuro named his son Niro after Historical Niro — deliberate declaration that Vane ambition survives' },
  { id: 'r56c', source: 'ember_hist', target: 'niro',       type: 'kin', secret: false,
    note: 'Ember is the great-aunt of the Year 500 Niro — his great-grandfather Historical Niro gifted her to the facility' },

  // ── Nexal clan family ─────────────────────────────────────────────────
  { id: 'r57', source: 'tenza', target: 'arai',  type: 'sibling', secret: false },
  { id: 'r58', source: 'tenza', target: 'nina',  type: 'sibling', secret: false },
  { id: 'r59', source: 'arai',  target: 'nina',  type: 'sibling', secret: false },
  { id: 'r60', source: 'tenza', target: 'arai',  type: 'enemy', secret: false,
    note: 'Tenza deliberately left Arai in the facility as leverage — an act of betrayal she has never forgiven' },
  { id: 'r61', source: 'tenza', target: 'ember_hist', type: 'pact', secret: false,
    note: 'Tenza was betrothed to Ember Vane before her capture — voided when Nuro gifted Ember to the facility' },

  // ── Eva Osiro's legacy ────────────────────────────────────────────────
  { id: 'r62', source: 'exco_wov',  target: 'adam_wov',  type: 'parent', secret: false,
    note: 'Exco sacrificed Adam as a living vessel for the Supreme Contract that saved Eva' },
  { id: 'r63', source: 'exco_wov',  target: 'eva_osiro', type: 'ally', secret: false,
    note: 'Exco gave his life and his son to transport Eva to safety on Earth' },
  { id: 'r64', source: 'adam_wov',  target: 'eva_osiro', type: 'ally', secret: false,
    note: 'Adam and Eva were transported together to Earth — progenitors of human civilization' },
  { id: 'r65', source: 'exco_wov',  target: 'vesper',    type: 'kin', secret: false,
    note: 'Vesper Wov is a descendant of Exco Wov through the Terra branch of the bloodline' },

  // ── Facility relationships ────────────────────────────────────────────
  { id: 'r66', source: 'minia_consa', target: 'irane',       type: 'enemy', secret: false,
    note: 'Minia ran the facility that held Irane for 50 years; died in the escape explosion' },
  { id: 'r67', source: 'minia_consa', target: 'ember_hist',  type: 'enemy', secret: false,
    note: 'Minia forced Ember to mate with Irane in year 49 of experiments' },
  { id: 'r68', source: 'simon_archiver', target: 'irane',    type: 'ally', secret: false,
    note: 'Simon organized the rescue that freed Irane and 120 children from the facility' },
  { id: 'r69', source: 'simon_archiver', target: 'alaiya',   type: 'ally', secret: false },
  { id: 'r70', source: 'simon_archiver', target: 'leo_proude', type: 'ally', secret: false },

  // ── The 12 children ───────────────────────────────────────────────────
  { id: 'r71', source: 'leo_proude', target: 'alaiya', type: 'ally', secret: false,
    note: 'Leo led the rescue team; Alaiya was the youngest member' },
  { id: 'r72', source: 'leo_proude', target: 'dio',    type: 'ally', secret: false },
  { id: 'r73', source: 'leo_proude', target: 'mira_rescue', type: 'ally', secret: false,
    note: 'Hina was captured during the escape and saved by a golden dragon' },

  // ── Evo — Grand Commander ──────────────────────────────────────────────────
  { id: 'r74', source: 'evo', target: 'hope', type: 'ally', secret: false,
    note: 'Evo serves as Grand Commander under Hope Kazemi — all military operations run through Hope\'s authority' },
  { id: 'r75', source: 'evo', target: 'irane', type: 'ally', secret: false,
    note: 'Evo commands the Kazemi Special Forces under the Emperor\'s banner' },
  { id: 'r76', source: 'aevum_vane', target: 'irane', type: 'ally', secret: true,
    note: 'Aevum became Irane\'s closest and most trusted friend during the escape and the forge project — she never knew his true identity as the Vane progenitor' },
  { id: 'r77', source: 'aevum_vane', target: 'ember_hist', type: 'complicated', secret: true,
    note: 'Aevum manufactured Ember\'s belief that he alone truly understood her — a calculated deception so practiced he may not have recognized it as one' },
  { id: 'r78', source: 'aevum_vane', target: 'volva_vane', type: 'identity', secret: true,
    note: '"Volva Vane" was Aevum\'s first public identity — the same being, the same consciousness, across thousands of years' },
  { id: 'r79', source: 'aevum_vane', target: 'auris', type: 'pact', secret: false,
    note: 'Aevum accepted the Arke twins\' deal through Auris — knowing the deal was a trap, accepting it to gain access and time' },

  // ── Valariyan Heads — connections to Kazemi and each other ────────────
  { id: 'r80', source: 'mira_vael',    target: 'hope',    type: 'ally', secret: false,
    note: 'Mira is Hope\'s right hand — she leads the five Valariyan Heads under Hope\'s authority as Heart of the Empire' },
  { id: 'r81', source: 'aliya_hallow', target: 'arai',    type: 'ally', secret: false,
    note: 'Aliya is Arai\'s right hand — she serves as Valariya\'s Spiritual Leader under Arai\'s authority over Time' },
  { id: 'r82', source: 'dokia_caedus', target: 'zoe',     type: 'ally', secret: false,
    note: 'Dokia is Zoe\'s right hand — she leads medicine and agriculture under Zoe\'s authority over Life/Death' },
  { id: 'r83', source: 'pandro_lexan', target: 'summari', type: 'ally', secret: false,
    note: 'Pandro is Summari\'s right hand — he leads magic and education under Summari\'s authority over Creation' },
  { id: 'r84', source: 'urial_ferran', target: 'nighla',  type: 'ally', secret: false,
    note: 'Urial is Nighla\'s right hand — he commands the Royal Empiric Guard under Nighla\'s authority over Destruction' },
  { id: 'r85', source: 'mira_vael',    target: 'irane',   type: 'ally', secret: false,
    note: 'Mira serves as the Emperor\'s emotional conduit — she channels his feelings so he can restrain them, making her existence functionally necessary for his stability' },
  { id: 'r86', source: 'aliya_hallow', target: 'irane',   type: 'ally', secret: false,
    note: 'Aliya wields the Emperor\'s spirits and maintains the mana-memory archive of all Valariyans who have died — she is custodian of his legacy through them' },
  { id: 'r87', source: 'dokia_caedus', target: 'irane',   type: 'ally', secret: false,
    note: 'Dokia was given the Emperor\'s death as an infant — she has carried it her entire life and is the only person capable of wielding it directly' },
  { id: 'r88', source: 'urial_ferran', target: 'irane',   type: 'ally', secret: false,
    note: 'Irane directly activated Urial\'s core and rebuilt his body — Urial is the only person whose physical existence is a direct product of the Emperor\'s own structure' },
  { id: 'r89', source: 'pandro_lexan', target: 'irane',   type: 'ally', secret: false,
    note: 'Pandro accesses the Emperor\'s own spell knowledge through the Hallowed Fifteen — the grannies hold the Emperor\'s magical catalogue split across their fifteen elements' },
  { id: 'r90', source: 'mira_vael',    target: 'aliya_hallow', type: 'ally', secret: false,
    note: 'Mira leads Aliya as Leader of the Five — she calls Aliya "Little Sister" within Valariya\'s inner circle' },

  // ── Ancient origins — Arke, Dulla, Primordials ────────────────────────
  { id: 'r91', source: 'arke', target: 'eva_osiro', type: 'kin', secret: false,
    note: 'Eve and Adam were created from the conceptual remnants of Gaia and Cronus — the Primordials Arke taught the people who eventually connected to Mana\'s legacy' },
  { id: 'r92', source: 'aevum_vane', target: 'dulla_vane', type: 'parent', secret: false,
    note: 'Dulla was Aevum\'s eldest son — the contact point through whom the Arke twins\' deal reached Aevum' },
  { id: 'r93', source: 'dulla_vane', target: 'volva_vane', type: 'kin', secret: false,
    note: 'Dulla brokered the deal that made his father Aevum the first Volva Vane — founder of the dynasty' },
  { id: 'r94', source: 'gaia_primordial', target: 'eva_osiro', type: 'kin', secret: true,
    note: 'Eve was created from the conceptual remnants of Gaia (Life Force) — she carries the dissolved Primordial\'s essence as the foundation of her being' },
  { id: 'r95', source: 'cronus_primordial', target: 'adam_wov', type: 'kin', secret: true,
    note: 'Adam was created from the conceptual remnants of Cronus (Time) — he carries the dissolved Primordial\'s essence as the foundation of his being' },
  { id: 'r96', source: 'gaia_primordial', target: 'exco_wov', type: 'ally', secret: false,
    note: 'Mother Nature\'s weapon (the Tree of Eden) gravitated to the Wov bloodline after Exco\'s sacrifice — the connection between Gaia reconstituted and the line that made the human crossing possible' },

  // ── Cycla More and Cith More — the last Primal resistance ─────────────────
  { id: 'r97', source: 'cycla_more', target: 'cith_more', type: 'parent', secret: false,
    note: 'Cycla More\'s daughter and operational second — he held the line so she could lead the evacuation to Mana\'s hidden realm' },
  { id: 'r98', source: 'cith_more', target: 'gaia_primordial', type: 'ally', secret: true,
    note: 'The More clan were the most traditional Primordial Three worshippers — Cith carried that devotion forward after Cycla\'s death' },
  { id: 'r99', source: 'cycla_more', target: 'arke', type: 'kin', secret: true,
    note: 'Cycla More\'s clan predated Arke\'s formalization of magic — his people worshipped the Primordial Three before the first human ever cast a spell' },
]
