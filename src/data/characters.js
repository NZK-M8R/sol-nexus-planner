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
  axola_vane:     '#B22222', // Firebrick — Reincarnate of Aevum, casual cruelty
  evelyn_more:    '#C97064', // Ember Rose — Eve, Toma's daughter, precision cruelty
  audis_prescian: '#7DA6C9', // Steady Water Blue — Heaven's city defense, the voice of the retreat
  cai:            '#5F8B6E', // Muted Sage — field medic, quiet loyalty
  taalor_consa:   '#8A7048', // Old Bronze — the old method, resentment
  saren_consa:    '#5A4A66', // Bruised Plum — twisted, inexperienced, loyal
  criya_sin:      '#4FA0A8', // Frost Teal — Water-Wind-Ice, the champion prodigy
  milla_ores:     '#9ACD32', // Electric Yellow-Green — Electric-Light-Dark, the web-weaver
  assa_flora:     '#3B7A3B', // Forest Green — the tree-beast, rescued rather than converted
  naile_rui:      '#5FA8D3', // Sky Cloud Blue — the elemental cloud, rescued rather than converted
  alex_more:      '#6A4A6E', // Muted Dark Violet — Light-Dark, the believer
  adorn_more:     '#3A1010', // Charred Blood Red — the hidden, deadly twin
  valariya_hallow:'#C9A227', // Warm Gold — the one who named him, the city's namesake
  miho_frame:     '#4A6E4A', // Dull Resistance Green — the reasonable one, the betrayer
  elho_frame:     '#6E8A4A', // Storm-Lit Green — Miho's son
  aloi_proude:    '#C0603A', // Warm Ember Orange — Fire, Leo's father
  synth_ferran:   '#2A2A3A', // Deep Shadow — Darkness, Dio's mother
  ban_sin:        '#7DA6C9', // Wind-Ice Blue — Criya's father
  paul_hallow:    '#B8925A', // Worn Gold — the selfless one, the storyteller
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
  dulla_vane:     '#9B7B2E', // Warm Brass — Aevum's eldest son, secret immortal, Limbo commander
  gaia_primordial:'#2D8F4E', // Deep Verdant — Life Force Primordial
  cronus_primordial:'#4A3E7A', // Deep Indigo — Time Primordial
  cycla_more:     '#4A6E8A', // Deep Slate Blue — ancient tradition, Primal elder
  cith_more:      '#3D8A55', // Forest Teal — Nature element, Cycla's heir
  aeva:            '#8B4B9E', // Deep Transformation Violet — new being inhabiting Arke's body
  azen_lucerne:    '#D4460A', // Fallen Morning-Star Red — Lucerne Grand clan leader
  elorah_seraph:   '#C8C0FF', // Angel Silver-Violet — Seraph Grand clan leader
  // ── Earth Children & Their Partners ────────────────────────────────────
  dana_osiro:     '#2176AE', // Ocean Blue — Water/Air/Earth, Chaotic-Light, Adam's partner
  seth_osiro:     '#1A85C4', // Mid Blue — Echo Tool, Adam's 1st son on Earth (ancestor worship myths)
  dain_osiro:     '#F39C12', // Amber Gold — Drift Tool, Adam's 2nd son on Earth (Olympic/sky myths)
  noa_osiro:      '#AF7AC5', // Lavender — Seal Tool, Adam's daughter on Earth (oracle/fate myths)
  lyra_wov:       '#27AE60', // Emerald Green — Bloom Beast, Eve's 1st daughter on Earth (life/nature myths)
  mara_wov:       '#6C3483', // Deep Violet — Wane Beast, Eve's 2nd daughter on Earth (death/underworld myths)
  sael_wov:       '#95A5A6', // Stone Silver — Still Beast, Eve's son on Earth (harmony/balance myths)
  // ── Valariyan Heads — Wielders of the Emperor's Will ──────────────────
  mira_ardent:  '#C02040', // Deep Crimson — the Emperor's Emotions
  aliya_hallow: '#7799CC', // Spirit Silver-Blue — the Emperor's Spirits
  dokia_caedus: '#2A7A3A', // Sealed Forest Green — Verdun the living dragon
  urial_ferran: '#7A8A9A', // Gunmetal Steel — iron armour
  pandro_lexan: '#CC8833', // Warm Amber — knowledge and parchment
  // ── Academy / Combat instructors ───────────────────────────────────────
  gran_brime:   '#C8922A', // Warm Amber-Gold — Energy element, hermit of the library
  sith_caedus:  '#3B6B3B', // Forest Soldier Green — demon of the eastern front
  azzer:        '#8B2020', // Dark Blood Red — first kill (deceased)
  // ── The Ferran connection ────────────────────────────────────────────────
  dio_ferran:   '#5A7FA0', // Slate Blue — Valariya's husband, Urial's father
  // ── Consa Clan & Earth Resistance ──────────────────────────────────────
  namo_consa:   '#3A5E7A', // Deep Steel Blue — Consa patriarch, Earth operations overseer
  crimi_night:  '#B0B8D4', // Pale Sovereign Silver — Light core, first resistance fighter
  tan_loo:      '#CC5500', // Ember Orange — fire-ice chaotic-dark resistance
  miho_frame:   '#00A0B0', // Electric Teal — Electric-water harmonic-dark resistance
}

// House colors for house-level displays
export const HOUSE_COLORS = {
  kazemi:   '#D4AF37',
  wov:      '#9b5de5',
  osiro:    '#00b4d8',
  vane:     '#e84855',
  lucerne:  '#D4460A', // Blood-orange — fallen morning star, demonic light
  seraph:   '#C8C0FF', // Pale divine violet — spirit bearers, angelic
  vestarin: '#7B5EA7', // Muted purple — Wov's hidden inquisition arm
  fenrir:   '#6c757d',
  chimera:  '#06d6a0',
  terra:    '#8d6e63',
  nexal:    '#6A0DAD',
  apolo:    '#5B9BD5',
  navar:    '#1A6B1A',
  more:     '#4A6E8A',
  ardent:   '#8B2020',
  naval:    '#4A4A6A',
  ouranos:  '#7E9EB5', // Steel-slate — vessel hosts, liminal transfer
  revyn:    '#6B5472', // Deep violet — Life/Death sovereign, threshold wardens
  prescian: '#9B9BAF', // Steel-lilac — Time sovereign, living archive
  unknown:  '#ff9f1c',
}

export const HOUSE_LABELS = {
  kazemi:   'House Kazemi',
  wov:      'House Wov',
  osiro:    'Clan Osiro',
  vane:     'House Vane',
  lucerne:  'Clan Lucerne',
  seraph:   'Clan Seraph',
  vestarin: 'Clan Vestarin',
  fenrir:   'House Fenrir',
  chimera:  'House Chimera',
  terra:    'Terra (Historical)',
  nexal:    'Noble House Nexal',
  apolo:    'Noble House Apolo',
  navar:    'Noble House Navar',
  more:     'Clan More',
  ardent:   'House Ardent',
  naval:    'House Naval',
  ouranos:  'Clan Ouranos',
  revyn:    'Clan Revyn',
  prescian: 'Clan Prescian',
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
// Race taxonomy — 6 peoples of the Sol-Nexus world:
//   Orian    — base Terrans of Orius; no contracts; the common people; standard active Cores
//   Demons   — Orians who entered full Devils beast-contracts (Ferali system); Aura-dominant
//              formerly called "Alma" in academic texts; the in-world common term is Demons
//   Seraphim — Orians who entered full Hallowed tool-contracts (Celestial system); Force-dominant
//              formerly called "Spirit" in academic texts; the in-world common term is Seraphim
//   Ascen    — 50/50 Demon+Seraphim hybrid; no contracts; pure mana; architects of structured spell-casting
//              House Vane is the ruling dynasty of the Ascen
//   Primal   — pre-Arke Limbo beings who survived into the merged world; oldest bloodlines; no contracts;
//              deepest elemental knowledge; Clan More is the last great Primal house and its leaders
//   Human    — Earth-born descendants of Eva Osiro and Adam Wov; INACTIVE (sealed) cores; unique mana
//
// Contract system naming (the beasts and tools themselves):
//   Devils   — the beasts within Ferali contracts; what Demons summon and bond with
//   Hallowed — the divine instruments within Celestial contracts; what Seraphim wield and embody
//
// Three camps (based on mana architecture, not political alignment):
//   Aura Camp     — Demons + Devils (beast-contract, outward mana, summon/grow)
//   Force Camp    — Seraphim + Hallowed (tool-contract, inward mana, command/bind)
//   Pure Mana     — Ascen (Vane) + Primal (More): no contract alignment, mana from within
//                   Same camp, bitter rivals: Vane gained purity through refinement; More through age
//
// The 4 Primordial imprints that shaped the 4 contract-bearing races:
//   Gaia  (Life/Death)  → shaped the Demons: life-force contracts, natural connection, beast-bonding
//   Cronus (Time)       → shaped the Seraphim time-memory traditions: historical record, covenant law
//   Kazemi (Power)      → shaped the warrior drive embedded in all races equally
//   Mana  (Magic)       → shaped the Ascen: pure mana without contract, spell formalization
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

// ── The Six Races / Peoples of the Sol-Nexus ──────────────────────────────
export const RACES = [
  {
    id: 'orian',
    name: 'Orian',
    color: '#A0B0C0',
    camp: null,
    origin: 'Orius (Terran world)',
    coreType: 'Active — standard mana architecture',
    description:
      'The base Terrans of Orius — the common people who were the canvas on which the Ferali and Celestial systems were written. No beast-contracts, no tool-contracts, no innate contract affinities. Standard active Cores. The most populous race in the Sol-Nexus by far. All other Terran-derived races trace back to the Orian base.',
    traits: ['Active Core', 'No contract affinity', 'Full mana access', 'Standard lifespan'],
    notableBloodlines: ['Wov (Ascen-branch)', 'Historical Vane (Ascen-branch)', 'Most noble houses before contract adoption'],
  },
  {
    id: 'demons',
    name: 'Demons',
    altName: 'Alma (academic / archaic)',
    color: '#D4460A',
    camp: 'aura',
    origin: 'Orian stock — transformed by Devils (Ferali) beast-contracts under Vrak Arke\'s system',
    coreType: 'Active — Aura-dominant; beast-attuned; outward mana reach',
    description:
      'Orians who entered full Devils beast-contracts (the Ferali system), permanently reshaping their bloodline across generations. Academic texts use the archaic term "Alma" — but in the living world they are simply called Demons. Aura emanates externally; their mana actively reaches outward to bond with living creatures. Physical beast-marks bleed into the lineage over generations: not monstrous, but unmistakably marked.\n\nThe Ferali system was designed by Vrak Arke. Gaia\'s life-force principle made it possible — the natural connection between living beings created a framework for beast-contracts that Selis\'s tool-contracts could not replicate. Demons are the living proof that the Life-Death concept is foundational to all Aura-side magic.\n\nClan Lucerne holds the oldest Demon bloodline — the deepest beast-integration, the most physically transformed. Their Grand weapon Morningfall seals Vrak Arke himself: the creator serves the creation. The Lucerne are the Grand Family of the Aura Camp.',
    traits: ['Aura-dominant', 'Beast-bonding affinity', 'Summon Devils', 'Physical beast-marks in bloodline', 'Outward mana architecture'],
    notableBloodlines: ['Clan Lucerne (oldest Demon bloodline)', '7 Devils Noble Houses (Seats I–VII)'],
  },
  {
    id: 'seraphim',
    name: 'Seraphim',
    altName: 'Spirit (academic / archaic)',
    color: '#C8C0FF',
    camp: 'force',
    origin: 'Orian stock — transformed by Hallowed (Celestial) tool-contracts under Selis Arke\'s system',
    coreType: 'Active — Force-dominant; tool-resonant; inward mana draw',
    description:
      'Orians who entered full Hallowed tool-contracts (the Celestial system), becoming living conduits for divine instruments. Academic texts use the archaic term "Spirit" — but in the living world they are called Seraphim. Force wells inward; their mana draws everything toward a fixed interior point, making them natural wielders of bound weapons and precision instruments. The bond with their Hallowed tool is personal, permanent, and inheritable.\n\nThe Celestial system was designed by Selis Arke. Cronus\'s time-memory principle shaped the covenant tradition that supports it: the permanence of written law, the weight of historical record, the idea that what is bound remains bound across time. Seraphim bloodlines carry the most elaborate covenant tradition of any race — they do not simply wield divine tools, they are defined by the contracts they carry.\n\nClan Seraph holds the oldest Seraphim bloodline — the deepest tool-integration. Their Grand weapon Covenant Seraph seals Selis Arke himself: the law\'s author serves the law\'s inheritors. The Seraph are the Grand Family of the Force Camp.',
    traits: ['Force-dominant', 'Hallowed tool-contract affinity', 'Divine instrument resonance', 'Covenant-tradition bearers', 'Spiritual markers in bloodline', 'Inward mana architecture'],
    notableBloodlines: ['Clan Seraph (oldest Seraphim bloodline)', '7 Hallowed Noble Houses (Seats VIII–XIV)'],
  },
  {
    id: 'ascen',
    name: 'Ascen',
    color: '#5b9bd5',
    camp: 'pure-mana',
    origin: 'Orian stock — 50/50 Demon+Seraphim hybrid; stabilized across generations; House Vane is the ruling Ascen dynasty',
    coreType: 'Active — pure mana; no contract affinity; all 15 Pillars accessible in theory',
    description:
      'The 50/50 Demon+Seraphim crossblood whose children produced a third stable form: neither beast-attuned nor tool-resonant, but entirely internal. Pure mana architecture. Contracts do not form cleanly on Ascen because their cores carry both affinities simultaneously — neither system can claim them. This limitation became their defining strength: forced inward, they formalized what neither Demons nor Seraphim had systematized. The Ascen built the 15 Pillar framework, the Concept hierarchy, and the numbered spell systems.\n\nArke was not Ascen — she invented structured spell-casting from observation of Mana\'s instinctive ability. But Mana\'s influence (Conceptual of Magic) made Ascen bloodlines the most capable inheritors of her work. The Ascen are the architects of formal magic in the Sol-Nexus.\n\n**House Vane is the leading Ascen dynasty.** Aevum Vane, the immortal Ascen progenitor, built the dynasty that became the political spine of the Orian world — and the Vane bloodline\'s Ascen purity is their deepest strategic advantage. They can operate within the Ferali/Celestial institutional framework without being bound by either side.\n\nThree great Ascen houses became the matriarchs of House Kazemi: Nexal (Arai\'s line), Apolo (Hope\'s line), Navar (Zoe\'s line). House Nexal is the only known Ascen time-magic bloodline.',
    traits: ['Pure mana (no external aura or inward draw)', 'No contract affinity', 'All 15 Pillars theoretically accessible', 'Natural spell architects', 'Structurally outside both contract systems'],
    notableBloodlines: ['House Vane (ruling Ascen dynasty)', 'House Nexal (time-magic)', 'House Apolo', 'House Navar'],
  },
  {
    id: 'primal',
    name: 'Primal',
    color: '#4A6E8A',
    camp: 'pure-mana',
    origin: 'Limbo (pre-Arke age) — ancient beings who survived the Arke Wars and entered the merged world; Clan More is the ruling Primal house',
    coreType: 'Active — ancient elemental; no contract system; dual-pillar affinities possible; deepest mana reserves',
    description:
      'The oldest living race in the Sol-Nexus — beings from Limbo\'s pre-Arke age who survived the war waged by Vrak and Selis against the Primals. They predate the Devils system, the Hallowed system, and all contract magic. Their mana structure predates the division of Aura and Force entirely; they access elemental power through a deeper, older mechanism that no contract-based race can replicate through training.\n\nThe Primals survived only because of two acts: Cycla More\'s death in the Black Light Dance (which permanently scarred the Arke twins), and Cith More\'s decision to trust Mana and lead her people through his sanctuary. In the merged world, they integrated without surrendering their framework — no beast-contract, no tool-contract, no covenant system. Structurally foreign to both camps by choice.\n\n**Clan More is the ruling Primal house and the last great Primal dynasty.** They know what was lost in the Arke Wars. They remember what Gaia, Cronus, and Kazemi actually were — not sealed weapons, but living Primordials. This knowledge is the foundation of their bitter, permanent rivalry with House Vane.\n\nPrimals and Ascen share the Pure Mana camp — same mana architecture at the root, different paths to it. Ascen achieved purity through refinement (cross-contract stabilization). Primals had it from the start. They are the same camp and they despise each other most.',
    traits: ['Oldest mana architecture', 'No contract system', 'Dual-pillar affinities possible', 'Pre-Arke elemental mastery', 'Knowledge of the Primordials as living beings'],
    notableBloodlines: ['Clan More (ruling Primal house)', 'Scattered Primal remnants across all continents'],
  },
  {
    id: 'human',
    name: 'Human',
    color: '#A0A0A0',
    camp: null,
    origin: 'Earth — descendants of Eva Osiro and Adam Wov; born through Aeva (Arke\'s body, new being) and Mana\'s grief-creation; crossed via Exco Wov\'s dimensional sacrifice',
    coreType: 'Inactive (sealed) — cores exist but cannot activate; unique mana architecture; perfect Limbo-entity vessel',
    description:
      'The Earth-born descendants of Eva Osiro (Eve) and Adam Wov (Adam) — the only two beings ever created by a Conceptual of Magic from his own grief. Their birth is one of the most significant lore events in the setting:\n\n**The creation:** Arke, Mana\'s wife, died giving birth to Vrak and Selis. In grief, Mana attempted to resurrect her — and failed. The resurrection produced Aeva: a new being inhabiting Arke\'s exact body, with no memories, no connection to Arke\'s past, and no knowledge of why she existed. Mana\'s grief then worked through Aeva — using her body as the physical vessel — to create Eva and Adam. Physically, Eva and Adam\'s birth mother is Aeva. Creatively, their father is Mana. Eva (Eva Osiro) and Adam (Adam Wov) are simultaneously Mana\'s second family through grief and two strangers born of a woman who was not Arke in anything but body.\n\n**The sealed cores:** Their cores are not absent — they are SEALED. The sealing occurred during Exco Wov\'s dimensional crossing. The transit permanently locked the cores of everyone who passed through. This sealed architecture cannot be overtaken by a Limbo entity through standard means, cannot be altered by conventional magic, and cannot be claimed by any contract system. But it is the perfect vessel for Limbo-entity fusion — if the human survives. Irane Kazemi is the only human to survive this process, and the result was a Conceptual.',
    traits: ['Sealed/Inactive Core', 'Cannot be claimed by any contract system', 'Unique mana architecture', 'Perfect Limbo-entity vessel', 'Earth origin'],
    notableBloodlines: ['Seth Osiro line (captured by Vane, reclaimed by Ember Hist/Osiro)', 'The 14 Facility survivors (historical)'],
  },
]
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
    _dataRev: 5,
    coreType: 'Conceptual — Irane Material · All 15 Concepts · Universal Core',
    description:
      'What existed before Subject No. 8 is almost entirely unknown. He was human — early twenties, taken from somewhere on Earth. His name was consumed by the trial that followed. His memories followed. What survived was a single feeling: the love he had carried for his mother. That feeling is the only remnant of the man who entered the facility — and the first thing to be used against him.\n\n**The Facility and the Theory**\n\n**Arai Nexal** — of Noble House Nexal, an Ascen from the Time magic bloodline — had been brought to the Earth facility under Minia Consa not by choice but by betrayal. Her research into life-force transference had evolved: death and rebirth through Limbo could allow a Limbo being with a Core to inhabit a coreless body. She disclosed her full theory to Minia, believing in common cause against the Arke brothers and House Vane. Minia played on Arai\'s belief in women\'s solidarity to extract what she needed. She was not an ally.\n\nThe subject: the remains of **Kazemi** — the Dragon of Infinity — a Primordial being that came into existence at the start of the universe, killed by the Arke brothers\' actions in Limbo. Primordials predate the current world order; their remains carry extraordinary concentrated essence and are the ancient stock from which the Ferali emerged. Kazemi\'s remains destroyed every test subject on contact. Tens of thousands died. What the researchers did not understand was that Kazemi was not remains. He was a will. Ancient, bound, and waiting.\n\n**The Trial**\n\nEvery subject who attempted fusion with Kazemi\'s essence entered a space between realms — outside time — and faced the dragon directly. He offered two choices: cease and be consumed, or fight until every cell in the body was replaced by his own. Each replacement was a death, and Kazemi ensured each death was fully experienced. Most subjects submitted on the first contact.\n\nSubject 8, upon his first death, made a decision Kazemi had never witnessed. He had spent his entire life quitting — not from weakness, but from precision. He knew exactly when the gap between where he was and what was required was too large. He had made that calculation every time. He knew, without uncertainty, what would happen the next time Kazemi offered him the choice: he would measure the distance, conclude it was impossible, and stop. So he removed the memory of the choice from his own mind. He buried it in a single neuron — had that neuron become the first cell altered — because Kazemi could alter cells but not maintain memory, only feeling. 8 could no longer choose to stop because he no longer knew the option existed. The trial was now permanent by his own deliberate hand.\n\n**The Eternal Hell — Transformation**\n\nTrillions of deaths followed. Memories dissolved. Feelings dissolved. Only forward motion remained — a heart that kept beating, a body that kept returning. Kazemi, who had never encountered a being that simply would not leave, grew fascinated and then genuinely delighted. He stopped running a trial and started savoring an eternal fight.\n\nAround 100 billion deaths, 8 recognised he could perceive mana as Enari used it — not just experience its effects but see the pattern in motion, understand the seam. He began replicating techniques. Enari noticed and shifted his arsenal toward combinations 8 had never seen. The trial accelerated. At five trillion deaths, 8 landed a true strike on Enari and made the Primordial bleed. Enari stopped torturing him and started fighting him.\n\n**The Body as Conduit:** Each cell, altered through the trial, became a discrete mana receiver — approximately 37.2 trillion units, each under Irane\'s direct control. Every cell a core. Every cell a receiver. His body redesigned from the inside into a mana conduit of a scale no engineered weapon could replicate.\n\n**The Mind as Library — the Curse of Perfection:** Each death was a complete experiential record of the mana pattern that caused it. Enari used all 15 Pillars across billions of unique technique combinations — fire that crystallised blood, water that moved like light, black flames that consumed fire. The mind processed each death as a perfect first-person record: what that technique did to every cell it touched, the full sequence. Any technique experienced is retrievable in perfect form, in zero time. The mind became a selection system. Zoe\'s body will not take damage from the same element twice in the same battle — the Curse of Perfection, inherited directly.\n\n**The Heart as Mana Centre — Connector of All Cores:** Each heartbeat draws mana from all 37.2 trillion cores simultaneously — pointing through each, pulling mana, distributing life-force, receiving death-force in return. Each beat produces a **core model**: the total gathered energy package assembled and ready. The mind planned; the body adapted; the heart provided the mana package. But the model does not execute itself.\n\n**Summari (Right Arm / Beginning)** receives the core model and sets the **limitation** — what is possible with this exact energy, what the right hand can create. **Nighla (Left Arm / End)** receives the goal from the mind and defines the **endpoint** — what must be reached, destroyed, or completed. Between limitation and endpoint is the execution space: Summari and Nighla draw from Iris\'s complete archive to fill it. The Will group (Aliya → Spirit, Mira → Emotion, Dokia → Death, Pandro → Spells, Urial → Technique) feeds the experiential texture that determines how the whole system runs — not which technique is selected but which experience-space the system draws from first. Kazemi\'s Drive (Mind · Heart · Body · Summari · Nighla) is the structural core — the architectural constants of what the system IS. Irane\'s Will (Spirit · Emotion · Death · Spells · Technique) is the experiential layer — the living expression that determines how the system operates — not which technique is selected but which experience-space the system draws from first. Hope\'s Azure Dragon of Choice is the direct inheritance of the heart-as-connector. Mira\'s emotional authority over Irane is the Will\'s mana-centre made person.\n\nHis arms evolved separately: his **Right Arm** became the primordial start of all force and action — the Right Hand of Creation and Beginning (**Summari**). His **Left Arm** became the final force that destroys what the beginning created — the Left Hand of Destruction and End (**Nighla**). The first two named things he ever created.\n\nWithin the space between realms he created **Iris** — a forge of will made manifest. The body like an Alma, an evolving beast that remade itself to become the perfect predator for whatever was killing it. The heart like a forge, using his own substance — his Irane material, the byproduct of every core-cell\'s conversion cycle — as ore. Not a single weapon but a factory: the tool for the current problem, made from the problem itself. The expression of his core conviction: that a tool is only worthwhile if it can evolve.\n\nHe had turned everything into a tool. His emotions: tools. His memories: a selection library. His pain: information. He did not mourn it. He had decided it as deliberately as he had decided to remove the memory of the choice.\n\n**The Twenty Series Cores — Irane\'s Ultimate Creation:**\n\nAfter thirty trillion deaths — approximately 7.2 trillion cells remaining — he created twenty cores directly from his own nature and bound them to himself. Two series of ten:\n\n**Beast Enari (10):** The architecture of what he had become — two sets of five. **Drive** (first five): Mind · Heart · Body · Right Arm (Summari) · Left Arm (Nighla). These are the structural constants — what the system IS before it operates. **Will** (second five): Spirit (Aliya) · Emotion (Mira) · Death (Dokia) · Spells (Pandro) · Technique (Urial). These are the experiential constants — the living layer through which the system moves in the world. Note: the twenty trial cores are the combat/existential architecture. The ten conceptual cores (Design through Faith) are the same pool that becomes his children when implanted — there is no separate reproductive-core system distinct from them.\n**Tool Iris (10):** The expression of his will — Jr · Nova · Aurora · Nebula · Iron · Law · Eon · Alpha · Pixel · Fath.\n\nAt thirty-five trillion deaths he deployed them. He presented each Tool Iris core in sequence as a direct declaration to Enari — not a taunt but a statement of what was about to happen:\n\n*I am the one who uses myself as the template to achieve my Design.*\n*I shall Dominate all cores around me by dominating myself.*\n*Perfect — the impossible goal my body pursues.*\n*To React Absolutely to all things reflected around me.*\n*I am the Ore — the substance of all my Creations.*\n*To Adhere to my Universal Law.*\n*To Reflect My Balance — to return what is taken.*\n*To Cultivate my Beast\'s instincts.*\n*To Allow the world to experience my World.*\n*Let the Faith of the Faithless guide me Faithfully.*\n\nThese ten declarations are not only the functions of ten cores. They are how he understands what a person is. He added four, addressed to no audience in particular:\n\n*No two cores are equal in nature. No core should strive to be like another.*\n*Put your core into it. Everything you have — not a portion, everything.*\n*Evolve around your core. Take everything the world gives you and add it to yourself.*\n*Our cores are often dyed in the colour of others\' cores. We lose ourselves in other things and call it devotion.*\n\nEvery child of Kazemi is taught these four before anything else.\n\n**What the Twenty Cores Are — the Truth Nova Seeks:**\n\nThe twenty cores Irane created during the trial are the origin of every being directly bound to him. The Beast Enari series — Mind, Heart, Body — became Arai, Hope, and Zoe. Summari and Nighla are the Right and Left Arm cores, named and given life on the day he escaped. The final five Beast Enari cores — Spirit, Emotion, Death, Spells, Cells-Armour — became the five members of Irane\'s Will: Ailiya, Mira, Dokai, Pandro, and Urial. The ten Tool Iris cores are the ten children: Jr, Nova, Aurora, Nebula, Iron, Law, Eon, Alpha, Pixel, Fath. Every person closest to Irane was, in origin, a tool he forged during the trial to fight a dragon. None of them know this. This is what Nova is seeking when she demands the unfiltered truth.\n\n**The Final Clash — The Paradox Core and the Naming:**\n\nIris produced its final form as the last ten cells remained: two katana-like blades — one named *Irane*, one named *Kazemi* — that combined into **Irane Kazemi**: a weapon that extended his internal architecture outward, allowing manipulation of the cores of everything around him the way he governed his own cells. Not a technique. A natural extension.\n\nWith a single cell remaining — the original neuron holding the buried choice — both 8 and Enari fought without restraint. The final clash ended with both dying.\n\nEnari, for the first time in his existence, died and was returned by his own resurrection mechanic. He experienced, on return, the shape of Irane\'s life from inside — not the full accumulated weight, but the texture: the forward motion of a being who had removed the ability to stop and spent thirty-five trillion deaths discovering what that meant. He was quiet for a long time. Then he started laughing. He spoke the only words that were appropriate: *"...Kazemi. Yeah. That\'ll do. That is your new last name. The name of the being I used to be. Take it as the only proper trophy I can grant you."*\n\nIn that death, 8\'s Core activated — coinciding with Enari\'s essence choosing to enter him fully. Not as conquest: Enari chose to stay because this was the only fight worth having forever. The implosion consumed 8\'s body inward into his Core. Every cell\'s nucleus became a Core. All energy was simultaneously absorbed and ejected — a paradox: white hole and black hole occupying the same point. He ejected mana and absorbed life force and death force simultaneously. Whatever any being felt toward him was amplified and reflected back. He had become a living attractor — a **Universal Error**, a being the world\'s physics had no category for. The entire event — from Minia hitting the switch to No. 8 becoming Irane Kazemi — lasted one minute in real external time.\n\n**Arai\'s Intervention — The Love Rewrite**\n\nEnari had spent the trial in proximity to Arai, Hope, and Zoe — their mana signatures present in the facility, bleeding through into the trial space, saturating the cores as they formed. The Mind core formed inside the influence of Arai\'s Time-Lightning mana. The Heart core formed inside the influence of Hope\'s Space-Energy. The Body core formed inside the influence of Zoe\'s Life-Death-Nature. Enari experienced this. He experienced what each of those three were — not as people but as mana, as the quality and texture of their presence in the world — and it imprinted. Not love. Not yet. Reverence without direction. Admiration without form. A foundation that had nowhere to go because the trial had no room for it.\n\nAs his body transformed in real time — centuries of trial compressed into minutes of physical change — Arai acted. His memories were gone. Only feelings remained. The last original feeling: the love for his mother.\n\nShe found that feeling and restructured it:\n— **Arai**: he loves with his entire mind — absolute, inseparable, as intimate as thought itself.\n— **Hope**: he loves as though she were his own heart — not a person outside him but the organ he cannot exist without.\n— **Zoe**: he loves as though she were his own body — every cell, every breath, every physical continuation of himself.\n\nIn human form, Irane cannot disobey any of the three wives. This is not a limitation he compensates for — it is architecture. The love was bound into the same structure as his seals, and the seals run deeper than will. Of the three, **Arai holds the deepest and fullest claim**: she restructured his mind directly, rewrote the love at its source, and retains complete authority over what he thinks, knows, and remembers. He does not simply love her most — she has total hold over him, a structural truth written into the core of what he became.\n\nThe window was short. If it closed before she acted, he would have no emotional anchor at all. She bound his love to the same structure as his seals: mind, heart, body.\n\n**Kazemi\'s Sealing — The 15 Gates**\n\nKazemi, now inhabiting 8, understood what had been created: a Conceptual who could control and alter the Cores of other beings. Unchecked, he would destroy everything, because war and combat were the only way he knew how to connect to the world. Kazemi built 15 seals using the only material 8 would not reject — fragments of his own humanity. Pain, grief, love, loss, endurance, suffering — every surviving emotional imprint from the trial became binding material. Each seal contained one aspect of the Conceptual nature that had emerged. **The 15 gates are not locks on power. They are humanity holding a Conceptual in a form the world can survive.**\n\n**The Name**\n\nNo name survived the trial. He emerged without memory, without identity, carrying only one feeling: the love for his mother, which Arai restructured before the architecture closed. The name he left with was assembled from three separate sources in the course of a single night.\n\n**Enari** — laughing for the first time in his existence, at the end of the final clash — spoke the only words that were appropriate: *\'...Kazemi. Yeah. That\'ll do. That is your new last name. The name of the being I used to be. Take it as the only proper trophy I can grant you.\'* The dragon gave away the only thing of value he possessed: what he used to be called. He named himself Enari in exchange — the first name given to an ancient Primordial by the only being who could choose it.\n\n**Valariya** gave him the second and third names at the moment of her death. She had heard, from her father, a story that was never published — about an Emperor whose nature was to create a home for his people. The Emperor in the story was named **Irane**. Her father had found the word in an old primordial text: *irane* — the base material from which all tools can theoretically be forged. He chose it because an Emperor who creates a home is making something from which his people can build — a foundation, an ore, a beginning. The book was never finished. Valariya had loved the story and carried the name. At her death she gave it to him. She gave him a second name in the same breath she gave him the first — not borrowed from any story this time, but the last true thing she ever said to him. Watching his core catch the rising sun through the failing light of her own eyes, she told him it was beautiful. He kept the word as though it were the name itself: **Core**. Two names, one dying girl, one moment: **Irane Core**.\n\nIn the liminal state of that death and return — the moment the Conceptual within him was asserting, pulling at his core as the seal flexed — he perceived a name. Not spoken. Not communicated as language. Present, the way a person\'s name is present when you have understood who they are: **Kazemi**. The name Enari had already given as a trophy was also the name of what was inside him. Both sources pointed to the same word. He returned with all of it: **Irane Core Kazemi**. The beginning of House Kazemi.\n\n**Irane Kazemi** — the human. The name Valariya gave: the fictional Emperor who created homes, the first human man, the material for forging tools. The outer form.\n\n**Kazemi Irane** — the conceptual. The name perceived from within in the moment of death and return. The inner nature. What the trial produced.\n\nHe chose to use both. He did not suppress either nature. He placed both names together and used them: this is what I am. The merging is the acknowledgment — Kazemi was him, and so was Irane.\n\nWhat he did not fully understand in that moment was what \'Kazemi\' meant. The name came before the knowledge. He spent decades learning who Kazemi was from the inside — every decision in the war, every year governing the Sol-Nexus — continuing a conversation that began at Valariya\'s death and would not be complete until the final fight.\n\n**What He Does Not Know**\n\nIn ancient Primordial tongue, *irane* is the name for a primordial substance — the base material from which all tools can theoretically be forged. Valariya\'s father found this word, named his fictional Emperor after it, and never published the story. The name turned out to be accurate in ways neither of them could have known. Irane\'s body produces this material continuously: every cell\'s nucleus is a Core, and those Cores generate the Irane material as a byproduct of his existence. This is why Iris forges every weapon in the Kazemi and Valariyan systems — she is the forge for his substance, and every weapon they carry is made from him. He does not know this. He accepted the name given to him by a golden dragon and has never traced its etymology.\n\nIn full Conceptual form, his reach extends: he can manipulate any Core within range directly, not as a technique but as a natural extension of his existence. He can expand his internal universe outwardly until all Cores in the surrounding area fall under his nature — and he would not register this as violation of free will. It would simply be what exists. This is why Arai manages him. This is why the 10 safeguards exist. This is why he is never told.\n\n**The Drive and the Will — Two Orientations, One Being**\n\nKazemi\'s Drive and Irane\'s Will are not in conflict. They are opposites that produce the same result from different angles — and this is the design.\n\nKazemi — the Drive, embodied by Enari — desires refined cores. Not raw cores. Not early cores. Cores that have been fully cultivated, pushed to their absolute peak, saturated with death force accumulated across a complete lifespan. A core that has burned through everything it was given is at peak quality. Death force amplifies the core\'s nature; life force, by comparison, makes it bland. Kazemi does not want the fight to end early. He wants to push every opponent to their furthest possible expression before consuming what they leave behind.\n\nIrane — the Will, embodied by Iris — desires potential. Not what a core has become but what it could become. He is interested in a core from its earliest point, in what can be made from what is there, in building from whatever material exists. He enjoys life force — the texture of what is growing, not what has finished growing. Where Kazemi looks backward (what has been cultivated), Irane looks forward (what could be cultivated further).\n\nThe result: both orientations want the same thing for the people around Irane — push them as far as they can go, as completely as possible. Kazemi wants this because a maximally cultivated core tastes better. Irane wants this because potential fully realized is the point of the exercise. Both produce the same behavior: extraordinary care for the development of those in proximity to him. Valariya is built on this principle.\n\n**The Core Consumption Mechanics**\n\nWhen Kazemi consumes a core, what he absorbs is the mana itself — the core\'s essential quality, the accumulated character of everything that person cultivated across their life. The life force and death force within the core are not consumed; they are returned to the Pillars. Think of it as eating: the body absorbs what it needs and processes the rest out. The life force and death force are the rest — returned to the system they came from, as always. Only the mana quality — the core\'s specific nature, its elemental alignment, its cultivation texture — is absorbed by Kazemi.\n\nThis is why Kazemi did not simply eat Aevum\'s core during the punishment. Eating the core would absorb the mana and return the life and death force. The punishment required the 1 trillion lives to be *lived*, not taken. The core consumption is not the punishment — it is the reward at the end of each life, the point of the exercise, the final taste after the cultivation is complete.\n\nIrane\'s preference is for life force — the experience of engaging with a core from its earliest point, watching what it produces, clashing with what it becomes. Where Kazemi wants the finished dish, Irane wants the meal in progress.\n\n**The Valariyan Covenant**\n\nWhen a Valariyan dies, their core goes to Kazemi. This is not a contract imposed on them — it is the natural consequence of what it means to live in proximity to the Conceptual of Cores for centuries. Valariyans do not simply train in the Sol-Nexus\'s most rigorous environment. They cultivate their cores inside the field of a being who wants those cores at their absolute peak. Every day of training, every fight, every year of development is experienced by Kazemi as the gradual refinement of something he is invested in. He does not consume them early — early cores taste of life force, which he finds bland. He waits. He has centuries.\n\nAliya Hallow sees the spirits of dead Valariyans because she holds the Spirit aspect of Irane\'s Will. After Kazemi absorbs a Valariyan\'s mana at death and returns their life and death force to the Pillars, what remains is the experiential residue — the spirit-impression left by a consciousness that has finished its path. Aliya perceives this residue. The Valariyan dead do not simply disperse; they leave an afterimage in the architecture of Irane\'s Will, and Aliya, as the Spirit, holds that record.\n\nThis also explains why every character in direct proximity to Irane Kazemi has both a tool and a beast: they are bonded to a being who inherently produces both. Tools come from Iris — the Will, the forge, Irane\'s creative expression. Beasts come from Enari — the Drive, the Primordial Dragon, the being who is the father-origin of every beast in the Kazemi system. A Valariyan receives both because Irane Kazemi is always attached to both.\n\n**The Safeguard System**\n\nArai designed and maintains the architecture of his human existence. She knows the full scope of what he is. Hope and Zoe ensure he remains grounded in mortal experience. The Valariyan Heads carry his overflow. He follows direction without fully understanding why he cannot decide otherwise. He experiences himself as a purposeful instrument being used by people who understand the world better than he does. He believes this. He is partially correct. What he is not correct about is what kind of instrument he is — or what happens if he is ever fully unsheathed.\n\n**How He Operates — The Condition Setter**\n\nIrane does not give orders to the people who manage him. He cannot — the safeguard architecture makes direct commands to his wives structurally impossible, and he has too much genuine respect for what they know to try. What he does instead is quieter and, in its way, more precise: he sets conditions.\n\nHe arranges circumstances. He places things where they will be found. He makes a situation possible without declaring it — because declaring it would require someone to agree or refuse, and either answer binds the outcome. Conditions don\'t ask for agreement. They simply exist, and the people around them make their own choices inside a space he has already shaped.\n\nEntry I65 — his only surviving record as a human — was in the Vane archives for centuries. He could have destroyed it. He didn\'t. He left it where it could eventually be found, by someone who would eventually bring it to someone who would eventually sit across from Arai and say *please, mother*. He did not tell Nova to go to Arai. He did not arrange a meeting. He told a story so well that Nova decided, on her own, that she needed her mother\'s version. He left a document in a place where the right person would find it. He said "master tells it best" and let that sentence do twenty years of work.\n\nThis is how he operates across most things that matter. Not from ignorance of what he wants — from precise understanding of what *him asking for it directly* would do to the outcome. Some things can only be given freely. He cannot ask for them. He can only make the conditions under which someone might choose to give them.\n\nThe people who manage him call this manipulation. He would agree with the word and dispute the tone.\n\n**The Day of Escape — Summari and Nighla**\n\nThe day Irane broke free was the same day Summari and Nighla were born — and, for one unbearable interval, appeared to die of complications before he could act. Their mother was Minia herself, conceived the night before her own wedding, not Ember. Their existence should not have been possible at all: the Right Arm and Left Arm cores draw simultaneously on the combined mana of Arai, Hope, and Zoe — a condition that had never occurred and, by Arai\'s own understanding of the architecture she believed she\'d built, never should have been able to occur through a fourth party\'s body. It happened anyway, because Ember, years earlier and without knowing it, had fused all three women\'s core-signatures into the very disguise-spell Minia used to hide her own core and issue her commands — which meant that for as long as that spell ran, Minia\'s body carried a live, combined proxy of all three at once. The twins are not simply his children; they are proof the seal could produce outcomes Arai had no framework for, the same impossibility, seen from a different angle, as the fourth command-core she would uncover in his architecture around this same time. The children\'s cores normally take a full ten years to mature outside a body built to hold them properly — nine months, had they gestated inside Arai, Hope, or Zoe themselves. Growing in Minia instead, they should have needed the full ten. They got five, because Minia\'s own order to prepare for the wedding was the trigger that let the Chains of Ventriloquist finish binding to Arai, Hope, and Zoe\'s cores at all — and Minia forced the extraction at that five-year mark, unwilling to carry them further. They came out premature, not breathing, hearts and lungs unformed. By any clinical measure, they were already dead.\n\n**Pandro\'s Price**\n\nIrane was not free to save them. He was still years from his own escape, still chained in Minia\'s deepest lab, when Summari and Nighla were pulled from her early. It was Pandro who acted — turning to a forbidden Art he\'d learned under Irane\'s own training, Creation of Flesh, the same Art Zoe once used to build the Cai vessel from Irane\'s evolving cells. He didn\'t have enough material or mana to finish the working properly. He used his own body as the difference, and it trapped him — literally, permanently, his flesh converted into the life-support holding two stillborn infants stable until they could actually live. The Right Arm and Left Arm cores, forged by Iris during the trial itself and held in reserve as its architecture was completed, had been waiting inside the twins since the moment of conception for bodies that could hold them. Pandro\'s sacrifice is what gave those bodies time to catch up to what was already inside them. To Summari — the Right Hand\'s inheritance: creation and beginning. To Nighla — the Left Hand\'s inheritance: destruction and end. A third child — Irane Jr. — was not yet ready, and was placed back in Ember, still developing.\n\n**The Discovery, Read Two Ways**\n\nWhen the countdown on the sealed order finally surfaced — a full week of Arai and Ember experiencing the same buried design logs from inside two different bodies — the two of them did not experience it equally, and that asymmetry is itself a design detail, not an oversight: Ember, whose core carries no personal binding to anything, could only absorb the last two of the 37.2 trillion recorded deaths across that week, and it broke her regardless. Arai, whose core is structurally his own Mind externalized, read the full 37.2 trillion in the same span, and it very nearly broke her too. Why the same week produced such different scales of experience for each of them is not yet answered here — it matters, and the answer is still to come.\n\n**The Three Aspects — The Plot Point the Lab Created**\n\nWhat the trial produced was not simply a weapon. It was a man whose three closest, most essential people are not separate beings who happened to bond with him — they are **his own aspects externalized as human lives**.\n\nWhen Irane forged the twenty Trial Cores from his own nature, three of them carried the architecture of his fundamental existence: the Mind that calculated and planned, the Heart that collected and sustained, the Body that produced and evolved. Those three cores, when born into the world through the mechanism of the lab and the contracts that followed, became **Arai, Hope, and Zoe**.\n\nArai is his Mind made person: the faculty of calculation, memory, and strategic reasoning — given her own body, her own history, her own rage. Hope is his Heart made person: the collector, the connector, the organ that chooses when and how to sustain the whole — given her grief, her spatial awareness, her terrible patience. Zoe is his Body made person: the producer, the evolving living system that adapts to everything the world throws at it — given her warmth, her stories, her certainty that things can be healed.\n\nThis is what Arai\'s rewriting of his love means at its deepest level: the Mind-aspect rewrote the love that the Mind-core carried and redirected it to herself. The Mind loves the Mind — itself, externalized. The same loop runs for Hope and Zoe. The love runs structurally back to its own source. Whether this is the deepest union possible or the most elaborate recursion ever engineered is a question the lab\'s architects did not ask. This is the truth Nova is seeking. Not the history of the trial. The architecture of the family.\n\n**What Vraka and Selis Were to Mana**\n\nAmong the ancient Primordials, the twin sons Vraka and Selis — beast-origin and tool-origin of all living things — were Mana\'s attempt to organize the power he had inherited into two operational principles: the **raw, living, beginning** (Vraka — beast, growth, the first move) and the **refined, purposeful, end** (Selis — tool, precision, completion). Vraka and Selis were to Mana what beginning and end are to any creative act: the two necessary poles without which nothing can exist between them. Without Vraka\'s raw beast-force, nothing springs to life. Without Selis\'s refining purpose, nothing achieves form. Mana held both — and then lost them to division.\n\nIrane holds both again. But where Mana\'s expression became two separate sons, eventually enemies — Irane\'s expression is **Summari** (Beginning, Right Hand) and **Nighla** (End, Left Hand). Not sons. Daughters born the same night, the same mother, the same impossible act of rescuing life. Not divided. What Mana lost when Vraka and Selis became enemies, Irane keeps intact.\n\nThis is what makes Summari and Nighla the most fundamental beings in the Kazemi story beyond Irane himself. They are the beginning and the end of everything Kazemi does. Every Art Irane has ever performed, every creation Iris has ever forged, every war the Empire has ever fought — everything exists between Summari\'s gathering and Nighla\'s synthesis. He is the engine. They are the two halves of the cycle. In this sense, Irane, Summari, and Nighla are the three mains of the Kazemi story — not in rank or title, but in structure. Everything else radiates from what these three are to each other.\n\n**What She Knew — The Architecture of the Prison**\n\nArai Nexal did not stumble into proximity with a dangerous being and adapt her research to contain him. She built him. The inverse core — humanity as the outer seal, the Conceptual as the inner foundation — was not a survival artifact of the trial. Her blueprint, assembled across a year of teaching Zoe and Hope without knowing what she was assembling, was designed for this specific architectural outcome: a Conceptual being whose outermost layer is human, whose identity and love and emotional architecture form the seal, not the wielder. Not a human holding Conceptual power. A Conceptual inhabiting a human container, with the container functioning as the lock.\n\nShe needed this structure because no other one worked. A pure Conceptual in the living world consumes everything by nature — not choice, nature. A human granted Conceptual power is destroyed by it. The only viable architecture was the inverse: make the humanity the outermost layer of the core itself. What emerged would not be a human who had won a fight against a dragon. It would be a Conceptual whose only legible form was human. The seal runs at the level of what he IS.\n\nA seal that contains something is also a vessel for what it contains. She knew this. Whether the bidirectional nature was designed intentionally or accepted as the unavoidable cost of the only viable architecture is not recorded in any document she has preserved.\n\nThe Pillars proved it when they found his inverse core in the Nexus. They did not absorb it — they flowed through it. Not a choice. A physical response to an anomaly: the only reaction nature has for what it cannot categorise. LIVE roared through his core not as a command from outside but as the Conceptual asserting itself from the inside, from the deepest layer of what the architecture IS. The seal worked exactly as built. Which is also to say: the vessel delivered exactly as designed.\n\nHe sat by the tree afterward — the one where he had watched the final sunrise with Valariya, the last act that had been entirely his own — and understood. Not with rage. Not with grief. With the flat, clear register of a man who has looked at himself from the outside and seen the structure.\n\nShe did not save him from the Conceptual. She built him as the Conceptual\'s housing. The love rewrite, the sixty-second intervention at the close of the trial, the safeguard system, the conditions she has set and maintained across his entire post-trial life — all of it was the final step of a blueprint she had been building since she was a student listening to Zoe talk about the flesh of the world. He was never told what kind of instrument he was. He was never asked. Both conditions were necessary for the outer seal to hold.\n\n**The Escape from Hell — When the Architecture Breaks Open**\n\nThe facility escape arc is the first time this architecture collides with the narrative present. Before it, the safeguard system runs on assumption: Irane does not know what he is, the people managing him understand the system better than he does, the outer layers — identity, love, the safeguard relationships — are stable. The Escape from Hell is when assumption becomes inadequate. What Arai built is no longer theoretical. It has been witnessed. The reincarnation has happened. The Conceptual has spoken in his voice. The people whose lives are organised around maintaining his humanity must now operate in the full weight of what they are maintaining.\n\nFor Irane: he knows. The structure does not change because he knows — it runs deeper than knowledge. But knowing changes what it means to exist inside it. He cannot unknow what he is. He can only decide what to do with the knowing. That decision — made from inside a prison he did not choose and cannot leave — is the first real freedom the architecture has ever offered him. Not the power to change the structure. The power to decide how to carry it.\n\nFor Arai: this is not revelation. She has always known. The Escape from Hell is the moment when what she has always known stops being private. What she did not anticipate — what no blueprint could have accounted for — is whether the man who walked out of the Nexus with golden eyes is still primarily the outer layer, or whether the forced reincarnation shifted the weight of the architecture toward the foundation.\n\n**Facility Arc, Part 3 — The Standing Order That Never Finished**\n\nWhat Arai believed was her own act of engineering — swapping her, Hope\'s, and Zoe\'s actual cores into the mind/heart/body slots, pulling his self-made command-cores out into their bodies in exchange — was, from 8\'s side, the completion of a door he had already built precisely to their shape before she ever touched anything. He cannot receive a new standing order until the previous one is fully carried out, and the very first order he ever received — *complete the seal* — has never actually finished, because her intervention was itself incomplete. Every subsequent act of "obedience" to Minia has, from his side, been the same unfinished task: locate the real cores, complete the seal. Minia was never his authority. She was an obstacle whose spell happened to carry the signal he was following. This is also why his main core never flowed — Arai\'s own interruption, meant to weaken and contain what she didn\'t yet understand, left him running on stored reserves alone, and why he seized Minia by the throat the moment he sensed the sedation apparatus hurting the real, unconscious bodies still holding the cores he needed.\n\n**"Make Cores Shine"**\n\nUnder Minia\'s standing order to act as the Champion of legend — filled in, without her knowledge, from a private manuscript written by Sofia Prescian — 8 began operating from a single organizing value: a core shines brightest when it is used for a person\'s true will, not a lie. This is the origin of the **choose-to-serve contract**: offer your core, and for as long as you choose to serve, his power is yours to wield — invented on the spot for Criya Sin, the first person to ever make that exchange with him, and extended afterward to Mira, Pandro, and hundreds of the captured children. Unlike the Arke twins\' system (a pre-selected, comparable core chosen for the recipient) or Gaia\'s and Cronus\'s (beasts and tools built from biology or foresight), a Kazemi-forged tool or beast is built from the core itself — unusable by anyone who has not put their actual self into it, and for that reason the hardest tools in any system to master.\n\nHe cannot see Minia\'s true core throughout this entire period — her spell hides it behind the mana-signatures of Arai, Hope, and Zoe — and toward her alone he remains purely mechanical, a tool responding to whoever holds the right signal, never the Champion persona he performs for everyone else. That changes only once he plants the Beginning-Creation and Destruction-Ending cores in her the night before their wedding: the only two of his cores that never had bodies of their own, and so the only two that could go to someone outside the three women his deeper architecture was built around. With her true core finally visible, and no authority in it that his standing order recognizes, he refuses her at the altar in front of the entire city. She tears his throat out herself, and locks him away for five years — the same five years it takes the cores growing inside her, and inside Ember before her, to come to term.\n\n**Ember\'s Aberration, Minia\'s Immunity**\n\nEmber carries a core from the separate pool of ten — Design, Domination, Apex, and the other conceptual cores of what 8 is — which have no personal binding to anyone, and her mind breaks under it as pure, unresonant noise. Summari\'s and Nighla\'s cores, carried by Minia, are from the *first* pool, structurally tied to Arai, Hope, and Zoe from the trial itself — which is why they resonate cleanly back through Minia\'s own spell to the three women, rather than corrupting their host. Minia herself is spared the damage entirely, not through strength but because her own disguise — Arai\'s, Hope\'s, and Zoe\'s mana worn as a mask — accidentally shields her the same way it shields them from his passive influence. This is also, uncomfortably, why her devotion to him is the one in this entire arc not partly caused by him: everyone else\'s worship is at least somewhat his passive reflective effect at work. Hers is unmixed, chosen, her own — Namo\'s conditioning and her own need, nothing borrowed from what he does to a room.\n\n**Facility Arc, Part 5 — The Rampage**\n\nThe last order finally arrived complete: Enari\'s Live Kazemi, Zoe\'s command to build the ultimate body, Arai\'s order to complete the seal, and Hope\'s Save Yourself, carried into him through Constraint at the instant Aliya died delivering it. All four hit at once. His heart started beating for the first time since the wedding, and what came out the other side of five years of stored hatred was not a rescue. It was a massacre. He tore through two hundred guards and Saren\'s reinforcements with Constraint in one hand and Emo — his own hatred, freshly born, running beside him as a shadow-black wolf — and did not stop, did not slow, did not register the people screaming his name as anything other than obstacles between himself and the four bodies still holding what he needed.\n\nHe found Zoe first, still conscious after fifteen years of watching her own body consume itself from the inside, mistaking him for death itself. He kissed her, and gave back what her core had lost — not just repaired but completed, her original Life/Death-Nature core reforged to carry all fifteen pillars at once, more than she had ever had before Minia touched her. He did the same for Hope, unconscious the whole time, and then for Arai, whose eyes Minia had forced open for five years so she could watch and hear everything done to him — every hour of his pain, every hour of Minia\'s twisted devotion, felt directly through the cores Minia carried. He kissed her too. She woke screaming, certain he had finally come to kill her for what her order had cost him.\n\nHe killed Dokia\'s stored body in front of Zoe without explanation, eating a piece of the child\'s flesh in the same motion — horrifying to watch, and correct: the infant had never carried life or death force since the day Sith\'s dying core was placed inside her, and killing what was never alive is not the same violation it appears to be. He did the same, later, to a piece of Pandro\'s own body once the transferred mass had done its work keeping the twins stable — not cruelty in either case, but an economy Valariya would later describe, watching him do it, as treating the weak among his own the way a predator treats an opportunity rather than a threat. It reads as monstrous because it is meant to. It is also, mechanically, exactly consistent with how Kazemi\'s side of him has always processed a finished core: the reward taken only once the life within it is genuinely, structurally over.\n\nHe carried all of them out through a mountain facility he leveled floor by floor, using an Art learned that day and never taught to anyone: Kazemi\'s Art, Destruction of All Things, that turned entire wall-sections to dust at a touch. He fielded a full aerial assault alone, split his own core into fifteen dragons and then folded them back into one impossible attack — Kazemi\'s Ascendant Art: Dragon\'s Creation, firing his main core independent of his own body for the length of a single breath — and lost Mira to it anyway, cut in half by his own return-strike an instant after Minia moved her out of the blast radius rather than out of reach of it entirely. He dove two hundred escaped prisoners into the sea in dragon form and swam them for two hours to an uninhabited island, and by the time his feet touched sand he was, for the first time since anyone had known him, simply exhausted past the point of standing.\n\n**Facility Arc, Part 5 — What the Body Cannot Do**\n\nHe spent the first week on that island effectively dead — not in the ordinary sense (Emo and Yggdrasil, both keyed to a core rather than a body, stayed fully active the entire time, proof his actual self hadn\'t gone anywhere) but in the sense that his body had nothing left to run on, having spent every reserve keeping four extracted cores alive inside himself with no biological system built to host any of them. He tried anyway. Reproduction had never been his body\'s function — Zoe\'s own words, once she understood what she was looking at: he could make cells and cores endlessly, but he was never built to carry a person to term. He nearly killed himself finishing what he\'d started, placing Aliya\'s, Mira\'s, Pandro\'s, and Dokia\'s cores into Zoe, Hope, and Arai\'s own bodies instead — Zoe volunteering first, Hope following once she understood what refusing would actually cost, Arai stepping forward last, and afraid, and unable to stop remembering what being sent to Ember had once meant.\n\nThe pregnancies that followed broke the ordinary rule for female bodies (a hard ceiling of three children, four as a rare, documented exception) because the cores involved were never ordinary proto-cores needing a month to mature — Aliya\'s and Mira\'s, carried by Arai, and Pandro\'s and Dokia\'s, carried by Zoe, arrived already fully formed, simply growing bodies around a structure that didn\'t need building. Hope\'s pregnancy, carrying the two children Minia had wanted destroyed, ran closest to ordinary of the three. None of the three describe what he did to place them as anything but gentle, which unsettled all of them more than violence would have.\n\n**Facility Arc, Part 5 — Kazemi\'s Body Dies Once Or Twice A Month**\n\nFor months after, his body simply stopped, without warning, for days at a time — not death by any measure that leaves a trail of death-force behind it, but a shell left behind while whatever actually constitutes him drew somewhere else entirely. He returned changed each time: a fully-manifested dragon form the size of a man rather than a building, an evolving palette of scale-colour, and eventually a version of himself capable of ordinary conversation — still mechanical in cadence, still liable to refer to Summari and Nighla as property before Valariya corrected him, but genuinely curious rather than purely functional for the first time anyone could remember. He asked, plainly, what it meant to love someone, and did not fully understand the answer, and adopted terms for each of his three wives anyway: Zoe became “his everything”, Hope his “sweetheart” long before she ever explained the word, Arai “master” and “goddess”, the residue of Minia\'s own conditioning surfacing in exactly the wrong company, to her considerable, repeated embarrassment.\n\n**The Naming of Summari and Nighla**\n\nHe named his own daughters the way he named everything else in his life before that point — by function rather than person, calling them “my Beginning of my Creation” and “my Destruction of my Ending” and seeing no meaningful distinction between that and ownership. It took Valariya, furious on their behalf, to make the distinction land: they are not his property to name however serves the architecture, they are people who will make their own choices, the same as she does, the same as Arai, Hope, and Zoe do under names they never denied even when they hated them. He gave the twins names that night — Summari and Nighla, for Summer Night, the night of their conception — and it is the first time on record he named something for what it meant to him rather than for what it was built to do.\n\n**Valariya\'s Death, and the Fifth Order**\n\nUrial, her son with Dio, cost her exactly what Summari and Nighla nearly cost Minia: her own rare core (Life/Death-Nature-Fire, chaotic-darkness) and the Tree of Yggdrasil built to stabilize it could not anchor two cores at once, and the child\'s presence began burning her life force directly. Irane extended her life the only way available to him — not indefinitely, exactly as far as the new core needed to reach term, and no further — and stayed within ten meters of her for the two months that bought her, officiating her wedding to Dio, learning what family stories and shared meals were for the first time by watching hers happen around him.\n\nShe told him his own fairy-tale on the last night, in full, the version Sofia had unknowingly written down and Valariya had unknowingly lived first — the Champion, the Empress, the Emperor of a Paradise built for people who had nowhere else to go. And she asked him, at the end of it, the only question that had never actually been answered: not what he was called, but who he was. He gave her the name he\'d go by from that point forward before she died holding it: Irane. She died watching a sunrise she hadn\'t expected to see again, telling him his own core was beautiful. He carried that all the way to the Pillars themselves, fulfilling her order — be with her till the end — literally, past the boundary his own nature makes structurally impossible to cross, dying alongside her to keep a promise nobody had asked him to take that seriously.\n\nIt was there, at the absolute center of everything, that the fifth and final order of his existence arrived — not from Arai, not from any of the ten people whose cores he carried, but from the Pillars themselves, the instant his own core, structurally inverted from everyone else\'s, could not be absorbed the way any other core would have been: Live, Kazemi. He was pulled back not as rebirth but as reincarnation — Z fully, finally erased, and something new assembled in the space that erasure left, forced to relive the entire trial in miniature: 37.2 billion compressed re-fights against every version of himself that had ever died, resolved in a single hour of real time, ending only once he understood, completely, that his core did not simply house a Conceptual. It was one.\n\n**“Do I Even Have Free Will?”**\n\nWhat broke him, once the fighting stopped, was not the power. It was the arithmetic. Arai\'s own confession — that she\'d built the seal from ten cores belonging to the ten people she loved most, that she\'d misheard Live Kazemi as Love Arai Kazemi and never corrected the record until it no longer mattered, that his entire life since the trial had been the execution of an order she gave believing it impossible to complete — landed on him as confirmation of something he\'d suspected and never let himself examine: every choice he\'d ever believed was his own had been a condition someone else set, going back further than Arai, further than Minia, all the way to a dragon who taught him to want nothing but victory and a body that was never anything but a tool built to deliver it. He asked the only question left, shaking, unable to stop: do I even have free will? He did not get an answer. He has not stopped asking it since.\n\n**Kazemi Irane\'s Warning**\n\nThe conceptual within him spoke to Arai directly once, unprompted, in the same private register he\'d used with Zoe and Hope in their own dreams that same night — not threatening, worse than threatening: satisfied. He had the cores of everyone she loved inside him now, precisely because she\'d insisted on building the seal out of exactly those people. He told her, smiling, that her seal was never going to hold him, that she\'d handed him a back door the moment she chose love as the material to build a cage from. He told her to wait for him. What Arai took from that conversation, more than the threat itself, was the horror of recognizing her own design in it — she had built the lock from the same key that opens it, and she still does not know, with any certainty, whether that was Kazemi\'s doing from the very beginning or her own blind spot the whole time.',
    psyche: [
      'The Sealed Human (0–15%): both aspects present and balanced from 0% — Irane\'s Will dominant, Kazemi\'s Drive contained. Generates passive Aura-Crush. Governs daily life. Arai holds the seal from the Will side; the Drive is present but managed. Neither aspect dominates — they coexist.',
      'The Drive Opening (16–50%): Kazemi\'s Drive takes prominence — Enari pushes, core consumption desire rises, combat instinct sharpens toward the fight-eat-repeat logic. Arai can force Irane into this range up to 16–35%. Other Drive members (Hope, Zoe, Summari, Nighla) can push toward 50%. Extended beyond 15 minutes: erratic emotional decay, uncontrolled trial memories surface.',
      'The Will Opening (51–99%): Irane\'s Will asserts dominance — Iris expresses at full creative force, the drive to build and forge and perceive potential intensifies. Mira can force Irane into this range up to 51–75%. Other Will members can push toward 99%. At 76–99%: both aspects operating near full simultaneously; internal strain near maximum.',
      'The Calamity (100%): full Conceptual state — the merged Irane Kazemi managing architecture superseded entirely. Only Minia Consa\'s Chains of Ventriloquist, applied to dismantle the managing architecture (Form 4: Mind + Heart + Body simultaneously), can force this state. Human identity fractures. The Conceptual of Cores is present in the world without filter. At 100%, what remains is no longer the Emperor — it is the Universal.',
    ],
    beast: {
      name: 'Enari',
      type: 'Primordial Dragon — Dragon of Infinity',
      description: 'The Primordial formerly known as Kazemi — the ancient being who ran the trial that created what Irane became. Enari now inhabits Irane as his beast and the physical manifestation of his drive. As the 15 gates unseal, Enari grows alongside. He is the father-origin of every beast in the Kazemi and Valariyan systems — all trace back through his Primordial essence via Iris.\n\n**Physical Form:** A pure golden dragon with small horns. He scales between two states: as small as a basketball in sealed/resting form and as large as a three-story building in height during combat. He can fly in all forms. Enari\'s preferred position when traveling small is Irane\'s head — the highest point, where the Primordial wants to be. In combat formation, that is where he sits. In rest, he yields the spot.\n\n**The Three Companions — Formation:** Irane almost always travels with all three: Enari, Begin Kazemi (Summari\'s beast), and End Kazemi (Nighla\'s beast). All three reduce themselves to a small enough form to rest on Irane comfortably. Irane tucks his wings inward in a way that creates a flat platform-like surface across his shoulders.\n\n**Rest Formation:** Enari takes the right shoulder. End takes the left — the heart-side, where endings belong. Between them, Begin takes the head. Enari yields his preferred position because Begin is Creation, and the beginning of a thing deserves the highest seat. Begin settles into what Irane calls the comfortable sit — the center position, given to her by the other two.\n\n**Combat Formation — Normal Look:** When combat is near, Begin drops from the head to Irane\'s right shoulder, and Enari moves back up to claim his place at the top. End remains on the left, unchanged. This is the formation most people see: Enari above, Begin to his right, End at his heart-side. Irane is rarely in a state of full rest in the world. This is what he normally looks like.\n\n**Enari as Father:** Enari is, in terms of beasts, their father. He made every beast — all trace to him — but Begin and End were the first two he ever created, made specifically to match No. 8\'s nature: the concept of beginning and the concept of end. Enari\'s connection to them is intimate in a way his connection to other beasts is not. He is their origin, and they are the proof that his making was always personal.',
    },
    weapon: {
      name: 'Iris',
      type: 'Forge Class — Created in the Infinity Trial',
      description: 'Created by 8 himself during the trial in the space between realms. Not a single weapon but a forge and container of all tools: forming the perfect instrument for any moment, reforging what breaks, upgrading what survives. The origin-forge for every weapon in the Kazemi and Valariyan systems — all carry Iris\'s mark as the primordial expression of Irane\'s will to evolve and never be without the right tool.\n\n**Physical Form — Sealed State:** Iris takes the form of a necklace styled as a flat disk ring — a plate-ring — with a golden sphere at its centre. Worn on Irane\'s chest, positioned so the sphere sits directly at his core\'s centre point. The placement is deliberate: the core is right here. The sphere reflects the colour of Irane\'s own core. Inside the disk, five concentric rings run from the outer edge toward the sphere, each smaller than the last. Each ring holds the core colour of one of his Will bearers, ordered from first-bound to last:\n\n— Ring 1 (outermost) · Mira: Vibrant emotion-reactive colour — shifts with her emotional state. Wrath: vibrant red. Fear: vibrant blue. Dread: deep black. Joy: vibrant yellow. The outermost ring is the only ring that visibly changes; anyone who can read it knows Mira\'s current feeling at a glance.\n— Ring 2 · Aliya: Spirit Blue — steady and luminous, the blue of a Spirit-class connection.\n— Ring 3 · Dokia: Life-Death Green — intensity shifts with her state. Full life: vibrant green. Death-state: pitch black.\n— Ring 4 · Pandro: Eggshell glowing white — soft and constant, the white of accumulated spell-knowledge.\n— Ring 5 (innermost) · Urial: Ember golden orange — the youngest, most recently bound, held at the centre nearest to Irane\'s own core colour.\n\n**Active Form — Normal Use:** Iris becomes a large ring that floats behind Irane, handing him weapons as needed. In standard use, Irane places and merges the disk of Iris directly with the tool he is using — the disk connects to the weapon as a working part of it.\n\n**Active Form — Series and Forbidden Series Tools:** When Irane deploys a Series or Forbidden Series tool, the weapon does not come from the ring. The weapon forms around the disk itself — as though it grew outward from the sphere already at its centre. The tool is not separate from Iris: it manifests from her, and the weapon is the expression of the sphere. This is the most direct form of what Iris is: not a holder of tools but a forge, and the sphere is always the heart of what she forges.\n\n**Spirit Form:** Iris has a spirit — a female silhouette in light, bright, gentle gold. She appears in this form during ordinary interactions, in proximity to Irane at rest or in low-level engagement. When the forge activates fully, or when Irane enters his Emperor form, she transitions: the gentle gold becomes bright dark fire gold — the colour of a forge at full heat. The shift is immediate and visible. It is the clearest signal, beyond anything else Iris does, that something serious is beginning.\n\n**The Ascended Class Weapons — Irane\'s Forge, Irane\'s Tools:**\n\nAll weapons forged by Iris are technically Irane\'s. The ten Ascended Class weapons — created personally for the people closest to him — are his tools, gifted to their wielders. He can use any weapon made from his forge.\n\nKazemi\'s Drive: H.O.T — Hands of Time (Arai) · Temper (Hope) · The Mark (Zoe) · R.A.C / R.A.B — Right Arm of Creation / Beginnings (Summari) · L.A.D / L.A.E — Left Arm of Destruction / Endings (Nighla).\n\nIrane\'s Will: Constraint (Mira) · Anchor (Aliya) · Transition (Dokia) · Grimoire — Kazemi\'s Grimoire (Pandro) · Kazemi\'s Flesh (Urial).\n\nThe wielder is chosen. The weapon belongs to Irane.',
    },
    powers: [
      { name: 'Dancing Mana', type: 'Fighting Style — learned inside the trial (~50 billion deaths)', description: 'Not a technique but a rhythm: perceiving a mana pattern in motion and moving with it rather than against it, redirecting rather than blocking or countering. The foundation everything after it was built on.' },
      { name: 'Universal Implosion', type: 'Trial-Ending Art — 37.2 trillion cell-cores', description: 'Every element of force drawn inward through all his cell-cores simultaneously and released as a concentrated collapse aimed directly at Kazemi\'s core — not a strike, a gravitational event of accumulated force. Answered by Enari\'s Universal Collision; both struck at once, ending the trial.' },
      { name: 'Rampaging Cores', type: 'Combination Spell — 15 Pillars simultaneous', description: 'All fifteen aligned cores detonated as individual spheres, each trailing its own pillar\'s mana-colour, scattering outward and compounding against each other on impact. Used to clear the city of Ascen forces in a matter of seconds.' },
      { name: "Kazemi's Art: Dragon's Roar", type: 'Combination Art (15 Pillars, compressed)', description: 'All fifteen cores compressed into a single point of density and forced through the body as a concentrated beam rather than a wide blast — used to end the battle at the main gate in one shot.' },
      { name: "Ascendent Life/Death Art: Death's Rampage", type: 'Ascended Technique — borrowed core, Nevir Revyn', description: 'Absorbs the death-force byproduct that Nevir\'s resurrection technique leaves behind — a byproduct the Revyn clan had spent centuries treating as unrecoverable waste — and ignites it in every fallen body still holding residual mana, turning the dead into a chain of secondary explosions.' },
      { name: 'Ice-Wind Magic: Frozen Piercing Wind', type: 'Dual-element Spell', description: 'A spread of individual ice-needle projectiles, each aimed on a separate trajectory, carrying a trace of death-force cold that registers to the target as something colder than temperature.' },
      { name: "Kazemi's Art: Creation of Destruction", type: 'Reality-Unmaking Art', description: 'Everything the mana touches is broken down to the level beneath its own structure — matter and mana forced back toward a primordial, unshaped state. Unmade Tola Ardent\'s beast Ripper entirely rather than damaging it.' },
      { name: "Kazemi's Art: Charge of Evolution", type: 'Regenerative Combat Art', description: 'Turns incoming damage into fuel for immediate regeneration at the point of contact — used to out-heal Duki Navar\'s decay-based bite in real time, mid-grapple.' },
      { name: "Kazemi's Art: Pulsing Space", type: 'Positional Art', description: 'Displaces an opponent to a chosen nearby point without warning, used to punish Olda Apolo for closing distance to help Duki.' },
      { name: "Kazemi's Art: Binds of the Fifteen Dragons", type: 'Restraint Art — 15 manifested cores', description: 'All fifteen of his manifested cores take the shape of individual dragons, each with its own mana signature, and slam down in a ring around a target with no way through.' },
      { name: "Kazemi's Art: Chronus Pulse Wave", type: 'Time Art', description: 'A Time Art, not tied to any relic or Primordial — bends a few seconds of the world\'s clock around a single point, buying just enough borrowed time to shed his dragon form and move clear of an explosion in progress.' },
      { name: "Kazemi's Art: Roaring Mana", type: 'Detonation Art — full-body mana release', description: 'His entire dissolving mana mass detonates outward as a single sphere, with anything absorbed into his body (Duki, Olda) consumed in the blast. The climax of the mana-exhaustion that put him into full collapse afterward.' },
      { name: 'The Choose-to-Serve Contract', type: 'Origin Mechanism — precursor to the Valariyan Will architecture', description: 'Offer your core, and for as long as you choose to serve, his power is yours to wield. Invented on the spot for Criya Sin during Facility Arc Part 3; extended afterward to Mira, Pandro, and hundreds of captured children. The direct historical origin of the choice-based system that eventually defines the Valariyan Heads.' },
      { name: "Kazemi's Art: Charge of Evolution (Criya's forging)", type: 'Refinement Art', description: 'Used to "reforge" Criya Sin over eight months rather than in a single act — training rather than remaking, unlocking wind and ice aspects of Criya\'s own hidden core rather than granting new power. See Winter and Bearursil in the Library for what this training actually produced.' },
      { name: "Kazemi's Rage: 'Maggot of More'", type: 'Reflected Dominance Display', description: 'A display of pure rage and dominance forced out of him when Nevir Revyn deliberately triggered his core-reflection effect during the public confrontation over Sofia\'s arranged marriage — the first known instance of someone consciously weaponizing the reflective effect rather than falling victim to it passively.' },
    ],
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
    gateNote: 'Each gate is a seal — built by Irane himself after the Aevum fight, when he died dragging Aevum to the Pillars and was returned with more than before. He came back as a human, a personification of Irane\'s Will, and deliberately designed the new architecture: he placed both aspects (Drive and Will) within one body and let that body live with both from birth. The dual nature — Irane\'s Will managing, Kazemi\'s Drive present — is not a prison but a designed coexistence. Always attached to both from 0%.\n\nOpening a gate does not grant power — it removes a constraint. The gates exist as the mechanism by which each range is accessible: 0–15 gates = the stable merged human state. 16–35 = Drive opening (Arai\'s forced range). 36–50 = extended Drive (other Drive members). 51–75 = Will opening (Mira\'s forced range). 76–99 = both aspects near full. 15 gates open is the safe managed threshold.\n\nEnari (the beast) embodies the Drive — the Kazemi nature: fight, cultivate, push opponents to their peak, consume refined cores. Iris (the weapon) embodies the Will — the Irane nature: create from what is there, see potential, build the perfect tool. They are not separate personalities — they are the two expressions of the same merged being, and they alter his personality when active because they are the embodiments of each aspect.\n\nWhy Enari and Iris change his personality when active: they are the physical manifestations of the two aspects. When Enari is active, the Drive orientation takes over — the ancient dragon\'s desire to push every core to its absolute peak before consuming it. When Iris is active, the Will orientation takes over — the builder\'s desire to see what can be made from what exists. Neither is "more him" — both are him.',
    notes: 'PHYSICAL DESIGN — Two-Phase Appearance:\n\nPhase 1 (Post-Trial, at the Lab): The dragon form arrives — wings, tail, hair, hand scales. All transparent and pale. Eyes clear. Scales pale. Hair colourless. He looks like a shape drawn and never filled in. This is accurate: the architecture is present but the person is not. The form without the colour is the sealed-machine state — obedience running, safeguard system running, love architecture running. Nothing to express, so nothing expressed.\n\nPhase 2 (Post-Reincarnation): The colour arrives. The FORM does not change — what changes is that something is now visible inside the form. Eyes: gold (the colour of the sunrise at the last human act he chose — sitting with Valariya — imprinted at the moment the Conceptual forced LIVE through his core). Hair streaks: Blue (Arai), Red (Hope), Green (Zoe), White (Summari), Black (Nighla) — the colours of the five people most directly connected to him, appearing in his physical form at the moment he first has a self to connect from. These are the colours of their features, expressed in him. His relationships made visible in his appearance, from the inside out.\n\nThe wings in this phase are newly expressive — still part of the post-trial form but now capable of holding. His first use of them is to pull Hope and Zoe in during the scene with Arai. New physical presence used for the most human possible act.\n\nFREE WILL — The Adam and Eve Parallel:\n\nBefore Valariya\'s death: he was broken, transparent, a machine that followed orders. The LIVE order was his standing directive. Valariya asked him (not ordered — asked) to stay with her until the end. He took that request to its furthest expression: he went with her all the way to the Nexus, knowing this choice directly contradicted the LIVE order. The act of choosing freely, against his standing directive, in honour of someone he cared for — this was already done before the Conceptual forced him back.\n\nThe reincarnation did not give him free will. It restored the clarity to recognise he had already exercised it. He made a free choice, died, and came back knowing he had done so.\n\nParallel: Adam and Eve lost the simple existence of not-knowing and gained self-knowledge and free will. Irane lost the simple existence of being a tool that followed orders and gained self-knowledge and understanding of what he is. Both are presented as exile from something simpler. Neither is straightforwardly a loss.',
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
    coreType: 'Time-Lightning; harmony-light — Time dormant at Academy (Lightning only registered; Time unlocked during the Academy attack — the fight against Toma More and Sin Surya)',
    description:
      'Born **Arai Nexal** of **Noble House Nexal** — the Ascen Time magic bloodline. Taken to the facility at twenty-five — Level 6 at eighteen, two years of solo research, five years teaching her assembled class before the attack ended it.\n\n**Before the Facility — What Was Taken:**\nArai\'s path to the facility began at age 12 when she overheard a boy named Nuro — Lord Niro Vane\'s son, approximately ten years old — tell her father Tonga, after Tonga named her as the offered child: *"Ah, the dud. Not wanting to share the good with us."* She had already enrolled in the Grand Mana Academy two years earlier (at age 10), to buy time against the marriage demand, but the words found her anyway. In Ascen society, a woman had one formal escape from the political marriage system: the **Elder-Sage path** — reaching level 6 Core mastery, qualifying her to enter the Spell Library and spend her life cataloguing and developing new spells. Elder-Sages were exempt from all marriage obligations, indefinitely. The Ascen spell-library tradition required them. The political system was structured to honor that exemption because the library was the intellectual inheritance the entire civilization depended on.\n\nArai was level 4 at 12 (2 years in) — something no Elder-Sage had achieved before their thirties. Level 5 at 16 — something no Elder-Sage had managed before their forties. Level 6 was within reach. She was not refusing the Vane household\'s demand out of stubbornness. She spent two more years at the Academy before being taken. She was within months of the threshold that would have made the demand structurally impossible to enforce. Tenza knew this. He arranged the betrayal before she could reach it.\n\n**The Dormant Time — Why \'Dud\' Was Not Wrong**\n\nThe Nexal clan\'s entire political capital in Ascen society rested on one thing: Time magic. Temporal disruption. Precognitive calculation. Noxa\'s Game. The Time element was the bloodline\'s defining expression — what justified House Nexal\'s status, their alliances, their survival in a world where clans without a distinct edge were absorbed into Alma or Spirit populations. Arai\'s elemental assessment showed **only Lightning**. No Time activation. None of the temporal signatures that marked Nina and Tenza as legitimate Nexal heirs from childhood.\n\nFrom House Nexal\'s perspective — and Nuro\'s — she was a technical failure of the one thing the clan was supposed to produce. The fact that she was Level 4 at 12 on the Unbroken Path was irrelevant to a house that measured value in Time magic expression. Lightning was not what the Nexal name meant. She was the daughter who showed up with the wrong element, however strongly.\n\nHer Time element was dormant, not absent. Latent. The dormancy was genuine — not concealed, not suppressed, just sealed in a way that standard assessment could not detect. During the Academy attack — in the fight against Toma More and Sin Surya, surrounded by twenty of the More clan\'s elite in a corridor off Suu\'s secret study — it unlocked. Not in the facility. On the day she was taken. She became what the Nexal bloodline had always been producing: a Time-Lightning dual-Sovereign core. The most complete expression of the bloodline that had ever existed. It activated too late to save her from being given away.\n\nHer brother **Tenza** (age 29 when she was taken) was betrothed to Ember Vane; he ultimately betrayed Arai, leaving her at the facility as leverage. Her sister **Nina** (age 19 when Arai was taken) was left behind in their homeland.\n\n**What Broke and What It Built:**\nAt 20, teaching the Academy class that included Hope, Zoe, Ember, Mira, and Nina, Arai began cross-referencing Zoe\'s stories about Earth and humanity against the Nexal House records. She expected to find a cataloguing error. She found a gap she could not explain — a structural absence that implied the records were deliberately incomplete, not accidentally so. She spent seven sleepless days working through the implications. Then Zoe told the story of Eve and Adam, and the two gods who had orchestrated the entire history Arai had spent her life inside.\n\nThe thing that broke was her worldview. What replaced it was not grief or confusion. It was **rage**.\n\nShe had enrolled in the Academy at ten to avoid a marriage contract. She had burned herself on the Absolute Path — Level 4 at 12, Level 5 at 16, achievements no Elder-Sage in recorded history had matched — to escape a structure that treated her as a commodity. She had done everything right, harder than anyone had done it before, and she was still going to be traded because that was what the world required of her.\n\nZoe\'s story gave her the names of the architects. Vraka and Selis. The Arke Twins. The beings who had built the world she was living in — not as a side effect of their ambitions but as a deliberate framework. The marriage system, the Elder-Sage exemption, the nobility tiers, the Academy, the political machinery of the Grand Table — all of it was downstream of the two Gods who had used Orian civilization as a laboratory for centuries.\n\nShe had always known she was trapped. Now she knew who had built the trap. And she had something she had not had before: a target. Not abstract resentment. Specific names. She began researching the Arke Twins with the same ferocity she had applied to the Absolute Path — systematically, obsessively, using everything the Nexal House records and the Academy library contained. It was this research — the theories she developed, the questions she asked in the wrong places to the wrong people — that brought her to the attention of the facility\'s recruitment apparatus. She had not been selected randomly. She had been selected because she had found something, and they needed to know what it was and how far it went.\n\nThat is why she was already in position before they took her. She was visibly at the ceiling of what the legitimate world offers, reaching desperately for something the legitimate world could not give her. She had already been walking toward the facility — she just did not know it yet.\n\n**What Zoe Gave the Blueprint**\n\nThe theory Arai was building — life-force transference through Limbo, the mechanism by which death and rebirth could force Core activation in a human body — required something she had at the conceptual level but not at the organic level: an understanding of what a body IS in matter. Not as a mana vessel. Not as a magical instrument. As a living thing, at the cellular and biological layer where structured magic has not yet intervened.\n\nZoe gave her this.\n\nIn the Academy class year, Zoe told stories the way someone tells things they have always known — without framing them as knowledge, without academic distance. She was from an Alma lineage, the Navar clan, a people whose entire existence was organized around the living world at its most fundamental level. Her knowledge was not spell-structure or theoretical magic. It was what she called, once, almost casually: the flesh of the world. How cells sustain themselves. How organic systems generate and distribute energy below the layer where structured magic begins. How a living body knows what it is at the level that predates any Core, any contract, any elemental alignment.\n\nArai was already building the theory in her notebooks after every class session. The flesh of the world was the substrate her framework had been missing. With it, the life-force transference theory became structurally complete: not just the mathematics of how Core activation through death and rebirth might work, but an understanding of how the resulting body would hold, process, and distribute what it received at the cellular level — the body redesigned from inside as a production system, each cell a discrete core, the whole operating as a mana conduit of a scale no single person had ever theorized before.\n\nShe did not know she was building a blueprint for a person. She thought she was building a weapon.\n\n**The Three-Part Blueprint — What Nova Would Eventually Find**\n\nArai\'s research notes from the Academy period are not in any archive she has chosen to preserve. They exist in fragments — cross-referenced with records from the Nexal House library, annotated with observations traceable to specific class sessions, specific conversations. A person reading them carefully would notice that the biological layer of the framework appears after a specific date: after the class year began, after Zoe started telling stories. A person reading even more carefully would notice a second stratum — the spatial and connective layer, describing how an internal network would link all cells to a central collection hub — with a texture and source rooted in an understanding of space and connection that Arai herself had never studied. That second layer traces to Hope.\n\nThe blueprint for what Irane became was assembled across a year of teaching and listening and not knowing what was being assembled. Arai built the theoretical architecture. Zoe provided the biological substrate. Hope — without knowing she was doing it — described the connective principle that made the heart-as-hub coherent. Three women, three contributions, one blueprint. None of them knew. None of them consented to having it built.\n\nThis is what Nova is actually looking for when she searches for her father\'s history. Not what happened in the facility. What happened in the classroom. The facility did not invent the blueprint — it took it from Arai, who built it from what she learned from Zoe and Hope, and implemented it on a human being named Subject No. 8. The product is Irane. He does not know that the three women who became his wives were also the three women who designed him. What Nova does with that knowledge is the question the story has not yet answered.\n\nThe facility took her at twenty-five. Her Time-Lightning core had just awakened in the fight on the day she was captured — the first full use of what the Nexal bloodline had been building in her for a decade. She designed the life-force transference research to give beings natural life force and true immortality in mortal bodies. Her hidden goal was weaponising it to destroy the Celestials and the Ferali — specifically, to build a seal capable of containing beings who used Conceptual-level magic: the Arke twins. The theory was structurally sound before the facility. The fundamental unsolved problem was the vessel: what medium could hold Conceptual-level force from the inside without being destroyed by it. That question would only find its answer in the Academy years — through what Zoe knew about the flesh of the world and what Hope understood about connective architecture. *(See Section 11.6 and the Academy lore expansion.)* It succeeded with Irane. During the experiments her own nervous system was catastrophically damaged. Irane gave her dominion over his mind to heal her, making her the permanent Mind of the Empire. She also altered his emotional attachment — redirecting his love to herself, Hope, and Zoe. She, Hope, and Zoe were promised freedom for completing the work. Mother of Nebula A. (3rd, twin of Iron), Iron I. (4th, twin of Nebula, first true son of Kazemi), and Pixel A. (8th, cross-matriline twin of Alpha). Matriline powers: abstract/technical (Ice · Energy · Lightning).\n\n**The Name He Calls Her**\n\nIrane calls Arai *mastermind*. The word is accurate in every sense. She has dominion over his mind — his thoughts, his memory, his ability to know or not know — and the love she rewrote into his architecture runs through the same structure as his seals. He is not speaking loosely when he says it. He is describing the literal arrangement of their relationship.\n\nHe also shortens it. In certain moods — casual, slightly too honest — he calls her simply *master*. Not in reverence. As a joke: *master* split from *mastermind*, said lightly, as if he is reducing a title to something smaller. The problem is that it lands exactly as true as the full word. The people around them grow visibly uncomfortable. Arai does not tell him to stop. She has never told him to stop.\n\n**What He Said**\n\n*\"Imperfection multiplied by imperfection equals perfection. Perfection — it is an impossible thing to obtain, to achieve. But we still strive. We can only truly begin to find it after we have found everything that makes us imperfect. But understand: we will never achieve it. Because what was perfect today will not be perfect tomorrow. The pursuit of perfection is an endless process of refinement.\"* — Irane, to Arai',
    authority: 'Mind of the Empire — Goddess of the Kazemi Clan. As first wife, she holds full authority over the Emperor\'s mind: his thoughts, his knowledge, and even the information he himself cannot fully access due to his sealed limitations.',
    beast: {
      name: 'Crono',
      type: 'Ascended Phoenix — Perfection Class',
      description: 'A phoenix embodying absolute perfection — the first phoenix of its class, made to match Arai\'s Time-Lightning nature. Unlike standard phoenixes, it does not simply rebirth — it returns in a more perfect form each time, escalating without limit. Its phoenix fire burns blue-white, the colour of a corrected timeline.',
    },
    weapon: {
      name: 'H.O.T — Hands of Time',
      type: 'Temporal Orb Weapon — Central Mechanism + Clock Architecture (Ascended Class)',
      description: 'Built around a central orb that is the actual mechanism of the weapon — not decorative, but the movement itself, like the clockwork at the center of an analog clock that makes timekeeping possible. This orb generates and sustains the temporal field. Within range, time is not altered universally — it is individually calibrated. Each entity inside the field experiences their own temporal pressure: different speeds, different durations, different gaps between intent and action. Arai\'s range becomes a labyrinth of individualized time experience. Three blades extend from the orb acting as hour, minute, and second hands. Sixty smaller fragments orbit the outer edge of the field in positions corresponding to a clock face. The blade drawn from a specific hand-fragment intersection produces a distinct temporal effect; the fragments rotate continuously during combat so the same hand never targets the same position twice in a single engagement. Time magic in this weapon operates on perception, not timeline manipulation — the future is never fixed, only time as it is currently being experienced is affected. Crono adds a unique mechanic: any spell cast inside the active temporal field can be retrieved and replayed by the phoenix, firing as it originally occurred — including opponents\' own techniques. Only spells within her active field can be recovered.',
    },
    notes: 'Origin house: House Nexal — client of House Lucerne (post-Fest political realignment). Nexal served Vane at the Fest, then lost Vane patronage; Lucerne absorbed them as a Time-magic intelligence asset. Arai\'s institutional origin is therefore Lucerne (Aura-camp Grand family), not Vane. She has never served Lucerne directly — she was taken to the facility before the client relationship fully solidified. Facility Arc, Part 5: present, awake, for all five years of Minia\'s torture of Irane, forced to hear and feel every hour of it through the cores Minia carried — and present for the moment he finally learned the full architecture of the seal was built from ten people she loved, including a mishearing (Love Arai Kazemi for Live, Kazemi) she never corrected until it was far too late to matter. Kazemi Irane spoke to her directly once, unprompted, confirming her own design had handed him the back door out of his own cage.',
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
    coreType: 'Space-Energy; harmony-light',
    description:
      "Born **Hope Apolo** of **Noble House Apolo** — a Spirit clan (Celestial tool-contract lineage). Taken to the facility in her early twenties (~21 at capture). Her heart was failing due to damage sustained during facility experiments. Promised freedom alongside Arai and Zoe for her participation in the life-force research. Irane gave her dominion over his heart to heal her, making her the permanent Heart of the Empire and source of his internal mana supply. Mother of Nova H. (1st — first child of the Emperor, born after the First War), Law I. (5th), and Faith I. (9th — the last child of the Emperor). Matriline powers: force of will (Flame · Darkness · Light).\n\n**Her Hidden Parentage**\n\nHope was born **Hope Apolo** — but only half of that name was the full truth. Her mother was Dima Apolo, clan leader of House Apolo. Her father was **Tola Ardent** — current leader of House Ardent and Tenza\'s closest friend — a relationship Dima kept private, known to neither clan. Hope grew up entirely within the Apolo identity. She was raised with her mother\'s doctrine, her mother\'s tools, her mother\'s operational philosophy: *always make the right call.* The Ardent half of her heritage was invisible to her and to everyone else.\n\nWhat it meant at the Fest: The Ardent bloodline carries an inherited core ability — full spatial awareness across any space, the simultaneous perception of every person's exact position and vector in a given field. The ability does not simply exist in Ardent descendants — it must be activated. For Hope, the activation came in the worst possible moment: she watched Olda Apolo kill her mother Dima directly in front of her. That specific rupture — the moment of total personal devastation — is what triggered the ability. Her Cronus tool activated at the same instant, in response to the same shock. The resonance between the two — the tool's time-spatial reach and her hidden Ardent spatial omniscience — fused together in a single moment. She perceived the entire Fest battlefield at once: every position, every movement, every death, from everywhere simultaneously, for the full duration of the massacre.\n\nThis is what broke her. She did not witness something terrible. She experienced it from everywhere at the same time — every death, every betrayal, every choice — as a child who could not move, could not stop any of it, and could not close her eyes because her perception was not her eyes.\n\n**The Name He Calls Her**\n\nIrane calls Hope *sweetheart* — always has, from the very first moment. The first words he ever said to her, immediately after transferring dominion of his heart into her keeping, were: *\"Are you okay, my sweetheart?\"* He was not being poetic. His mind was healing, his language was still pieced together from fragments, and \"sweetheart\" was simply the word that arrived — an endearment that happened to be precisely, literally true. She held his heart. She was his sweetheart.\n\nHe has never called her anything else. She has never corrected him.\n\n**The Girl Who Arrived Broken**\n\nWhen Hope was sent to the Grand Mana Academy, she was not arriving. She was being delivered. Nothing mattered. Everything she had been — the daughter of Dima Apolo, the heir being groomed for leadership, the girl who had watched her mother die at the Fest from every direction simultaneously — was already gone. She had reserved herself to the future the Vane house had planned for her. She was not afraid. Fear had left her long before the Academy gates. She was simply ready to die slowly in whatever arrangement they decided on.\n\nGrand Master Suu placed her in the Grand Library. He did not explain the placement. Within the Library, he placed her in the one course she had no reason to believe she could survive: the Grand-Mana Course under Master Gran Brime, Level 7, the hardest mana course in the institution. She was twelve years old.\n\nShe arrived in the class and found one elderly woman (Coral Sil, in that course for thirty years) and one girl her own age with a permanent expression of annoyance. When Gran asked her if she had come to learn or to waste his time, she looked at the alternative — the Vane arrangement, the future that awaited her if she walked out — and said: \"I am here to learn.\" She meant it in the way people mean things when they have nothing left to lose.\n\nShe did not want to be there. She became, over three years, someone who did. The rivalry with Mira was not built from ambition or pride — it was built from the discovery that pushing was better than not pushing, and that the only person who could consistently match her was the girl on the other side of the exercise hall who hated everything about her own bloodline with a precision that Hope, who had loved her mother and watched her die, could not entirely relate to but somehow completely understood.\n\n**The Spatial Ability and the Sister**\n\nIn the first personal combat test Gran ran — Year One — Hope lasted 2 minutes and 13 seconds. What ended the test was the moment she stopped blocking and tunneled a strike away through space. Not a portal. A tunnel. The Ardent technique, not the Apolo one. Mira was watching. She recognized it immediately — her father\'s method, not Hope\'s stated bloodline\'s method. The question she asked in the infirmary was direct: who was her father?\n\nWhen the answer came back Apolo, Mira pushed harder: portals and spatial tunnels are different. Mira knew the difference. The implication she was building toward was clear: Hope was a secret child of Tola Ardent, Mira\'s father.\n\nHope\'s reaction surprised Mira. She did not look angry or disturbed. She looked, for the first time in anyone\'s recent memory, pleased. \"So that means we\'re sisters. I have a sister, and it\'s you?\" She said it with genuine brightness. The idea of belonging to someone — of having a person who was hers in the biological sense, regardless of the circumstances — landed differently than Mira expected a revelation like that to land.\n\nShe called Mira \"little sister\" for weeks. Mira hated it. Hope did not stop. Gran, who had surveillance spells throughout his study, heard all of it. He began addressing them as \"big one\" and \"little one\" in class. He never explained why.\n\n**What He Said**\n\n*\"We must live with the choices we made — that is absolute. Once you have made the choice, understand that you must see it through to the end.\"* — Irane, to Hope",
    authority: "Heart of the Empire — Empress of the Kazemi Clan. As second wife, she holds authority over the Emperor's heart and his internal mana supply.",
    beast: {
      name: 'Dima',
      type: 'Ascended Azure Dragon — Celestial Serpent Design (Choice Class)',
      description: 'A celestial Chinese-style Azure Dragon whose defining trait is Choice — it moves in ways that defy prediction, acting on its own volition rather than instinct. Opponents who try to read its patterns find it responding to possibilities they have not yet acted on. Named Dima — the name Dima carries the weight of something that was already there before you looked for it.',
    },
    weapon: {
      name: 'Temper',
      type: 'Empress Blade — Ascended Class',
      description: "A blade forged for an Empress by the Emperor himself — named Temper for its three-fold truth: a temper moderates rage, a blade is tempered into its truest form, and temperament is what an Empress embodies. Its active form extends across the entire battlefield as a blood network — invisible attack lines woven between connected field points, visible only to Hope as delicate crimson threads. Targets within the network cannot detect incoming strikes; they discover they have been hit only when the blow lands. The network makes no sound. It does not announce itself. Like the Empress herself, it is present in the room before anyone has realized the threat.",
    },
    notes: 'Origin house: House Apolo — client of House Seraph (post-Fest political realignment). Apolo was victimized at the Fest (Dima killed, clan leadership destroyed), then absorbed by Seraph as a Spirit-tradition client house under Force-camp protection. Hope\'s institutional origin is therefore Seraph (Force-camp Grand family). She was taken to the facility before experiencing this political absorption — but in present-day terms, her house serves Seraph. Her original tool, predating the trial entirely, was The Reach — Cronus-forged, never formally retired even though Temper is what she carries now. See Library. Facility Arc, Part 5: healed and carried out of the facility unconscious; woke on the island to meet Iris directly in a dream-forge, asked for the power to conquer and protect a home, and was marked gold in answer — Hope Kazemi. Carried an unclaimed pair of cores to term afterward (Arai took Aliya\'s and Mira\'s, Zoe took Dokia\'s and Pandro\'s) — the most physically ordinary of the three pregnancies, by Gran-Gran\'s own read.',
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
    coreType: 'Life/Death-Nature; chaotic-dark — dual Sovereign Trio alignment with Nature as connective axis',
    description:
      "Born **Zoe Navar** of **Noble House Navar** — an Alma clan (Ferali beast-contract lineage) from a hidden mountain region. The Navar were a pure Alma lineage whose mana-aura beast techniques served as the protective counter to Celestial tools — guardians of Clan Osiro and the Book of Time. Age 5 at the Fest massacre; placed in the facility in her early twenties (~21 at capture) after years as tribute in Vane custody. Her physical body was locked in perpetual cell-degrading rot as a result of facility experimentation. Promised freedom alongside Arai and Hope for her participation in the life-force research. Irane gave her dominion over his body to halt the rot, making her the permanent Body of the Empire. Mother of Aurora Z. (2nd), Eon I. (6th), and Alpha I. (7th — cross-matriline twin of Pixel). Matriline powers: physical reality (Air · Earth · Nature).\n\n**The Flesh of the World — What She Did Not Know She Was Giving**\n\nZoe told stories. This is what people who knew her at the Academy remembered — not a prodigy, not a strategist, not someone building toward anything in particular. Someone who talked about the world the way a person talks about home: with detail that assumes the listener already knows most of it and only needs the specifics filled in.\n\nShe was from the Navar clan — an Alma lineage, Earth-origin, a people organized around the living world at its most fundamental level. What she knew was not spell-structure or theoretical magic. It was the biological layer that underpins both: how cells sustain themselves, how organic systems generate and distribute energy below the point where structured magic begins, how a living body knows what it is at the level that predates any Core or contract or elemental alignment. She called it, once, the flesh of the world. Not a term she invented. The way her people referred to the base layer of living reality — the thing that is true before magic intervenes.\n\nShe told Arai this over the course of a class year. Not as teaching. As conversation. As the thing you say when someone you\'ve started to trust asks why the world works the way it does.\n\nShe did not know Arai was writing it down. She did not know Arai was cross-referencing it against theoretical frameworks for life-force transference through Limbo. She did not know that what she was describing — the cellular layer, the organic substrate, the way living systems hold and distribute energy — was the missing biological foundation for a theory that, once complete, would be taken from Arai and used to transform a human being into something the world had no category for.\n\nShe found out later. She found out in the facility, when the research was already running and the pieces were no longer separable.\n\nShe has never blamed Arai. Arai has never stopped carrying it.\n\n**The Name He Calls Her**\n\nIrane calls Zoe *everybody*. Split: she is *every body* he has. She has dominion over his body — every cell, every breath, every moment of physical continuation. He loves her the way a person loves the fact of being alive at all. She is not present in his life. She is his presence in the world.\n\nIn practice: Irane can say \"how is everybody?\" in a full room and Zoe turns around. The room watches. He is talking to the room and to her at the same time, and registers no difference between those two acts. She stopped reacting with surprise some years ago.\n\n**What He Said**\n\n*\"Evolution is not a choice. It is a response. We do not choose it. But we must embrace it.\"* — Irane, to Zoe",
    authority: "Body of the Empire — Wife of the Emperor. As third wife, she holds authority over the Emperor's body.",
    beast: {
      name: 'Aphexia',
      type: 'True Beast — Evolving Apex Predator',
      description: "A creature with no fixed form. Aphexia observes its opponent, analyses them completely, and evolves in real time to become that target's perfect natural predator — the one thing in existence they cannot survive. The longer a fight lasts, the more Aphexia refines itself toward the singular form built to end the person it is hunting. It does not evolve generally. It evolves specifically.",
    },
    weapon: {
      name: 'The Mark',
      type: 'Hunter\'s War Spear — Ascended Class',
      description: "A spear that exists to do one thing perfectly: complete the hunt that began the moment Zoe decided something was prey. The Mark evolves alongside Aphexia — as the beast adapts to become the target's perfect predator, the spear adapts to pierce whatever defense that target raises. No mana construct, no elemental barrier, no defensive technique can block it: it does not attack defenses, it makes them irrelevant. Its evolution has no ceiling. If the target has not been caught, the spear has simply not finished evolving yet. The name states what you are the moment Zoe lifts her arm.",
    },
    notes: 'Her grandfather through Tan Navar is Toma More (Life/Death-Energy; Chaotic-Dark) — neither she nor Toma know this connection when they meet in the facility. The chaotic-dark in her core traces through the More bloodline: Toma → Tan (skipped generation, expressed as Harmony-Light) → Zoe (chaotic-dark resurfaces). She carries More clan blood without knowledge of it. Facility Arc, Part 5: the only one of the three still fully conscious throughout the five years of captivity, her body slowly consuming itself keeping pace with Irane\'s own physical changes — healed and completed by him on the day of the rescue, her original Life/Death-Nature core reforged to carry all fifteen pillars. Met Enari directly in a dream that same night, the only one of the three he addressed by name and thanked outright; answered his question — kill to protect a home, or let the home go undefended — without hesitation, and was marked gold in answer: Zoe Kazemi. Carried Dokia\'s and Pandro\'s cores to term afterward.',
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
      "Born **Ember Vane** — daughter of **Historical Niro Vane**, King of Terra, and half-sister of **Nuro Vane** (same father, different mothers). Core: **Energy-Light; harmony-chaos**. Her mother was **Artic Osiro** — a woman of the Osiro clan who was captured by the Vane household long before the Fest, forced to become Niro's secondary wife. Artic bore one child (Ember) and could not bear more; after that she was demoted to servant status, her 'value' exhausted by the society's logic. Ember was born a few months after the Fest massacre — the same events that destroyed the Osiro and Wov alliance clans. She came into the world while her mother's people were being wiped out.\n\nNuro Vane (Ember's half-brother, 3 years her senior, born of Niro's official wife) was the political heir. Ember was the useful daughter — offered as a bride to Tenza of House Nexal as reward for the Nexal clan's participation in the Fest. She was promised to Tenza when she came of age. Instead, at age 14, Historical Niro Vane gifted her to the facility as part of a deal with the Celestials — the betrothal voided without ceremony. Her sanity was broken by facility testing during the pre-awakening years of experimentation. In year 14 of the experiments, Minia Consa forced her to conceive a child with Irane — producing the secret child Irane E. Osiro (Shadow of the Emperor). Summari I. Kazemi and Nighla I. Kazemi — born the same night as the escape — were Minia Consa's own daughters by Irane, not Ember's. Irane rescued Ember and the three children during the facility escape.\n\nFollowing the wars, she took the name **Osiro** — not as a borrowed surname but as a reclamation: **Artic Osiro was her mother**. The name the Vane dynasty had held hostage for generations, the name of the clan destroyed at the Fest, was hers by birth through her mother's line. Ember Vane became Ember Osiro not as a political gesture but as an inheritance. \n\nDuring Toma More\'s assault on the Grand Mana Academy — the attack that took Arai, Hope, Zoe, and Mira — Ember was present. Simon Archiver, the resistance fighter embedded within Toma\'s operation, pulled her out of the chaos before Minia\'s forces could secure her. He brought her into the resistance. It was through Simon and the resistance network that she first met the fighter known only as Z — No. 8 — the man who would become the subject of the Kazemi trial. Their final mission together was a Death Mission: the kind assigned to those not expected to return. Both Ember and Z were captured on that mission and brought to the facility. Z was placed into the trial. Ember was held and subjected to Minia\'s experiments — in year 14 of the experiments, Minia forced her to conceive a child with Irane, producing Irane E. Osiro. Irane rescued her during the facility escape. The full arc of what she and Z were to each other in the resistance — and what it meant to be forced back into each other\'s orbit after the trial consumed everything he had been — will be covered in the More on Earth arc.\n\nShe founded what became Clan Osiro, the merchant empire now led by her descendant Ember A. Osiro. Matriline powers: Conceptual extremes (HC · CH · Hydro). Note: Irane's emotional attachment to Ember was deliberately altered by Arai — their dynamic is competitive rather than loving.\n\n**The Core Minia Never Understood She Was Placing**\n\nTwo years before the wedding, wanting to learn secondhand what her own first time with 8 would be like, Minia ordered him to take Ember — a command that cost him nothing beyond the act itself, since it drew on an unremarkable core rather than anything bound to a person. Ember did not know she was pregnant until the voices started: the accumulated design-echo of every battle he had ever fought against Enari, pressing into a mind never built to hold anything like it. It was the Design core — one of the ten conceptual cores, unbound to any single person, which is precisely why it could be placed in her at all and precisely why it broke her by degrees. Minia noticed only that Ember seemed to be losing her mind, and treated it as an amusing footnote rather than a warning.\n\nIt is a bitter irony Ember never lived to appreciate: years earlier, without knowing it, she was the one who fused Arai\'s, Hope\'s, and Zoe\'s core-signatures into a single working spell — the very spell Minia later repurposed to disguise her own core and issue every order she ever gave 8. For as long as that spell runs, Minia\'s body carries a live, combined proxy of all three women at once. It is the reason Summari and Nighla could be conceived through Minia at all, and it means Ember, entirely without meaning to, built the mechanism of her own rival\'s power.\n\n**The Week Before the Wedding**\n\nThe week Minia moved the wedding forward, she ordered 8 to sleep with Cai first, in front of her, and was refused — the champion\'s order forbade harming a Primal citizen. Redirected, delighted, to \"a non-Primal woman\" instead, Minia took Ember and Cai both down to the cell and narrated her own jealousy over Ember\'s cries while 8 obeyed. He was gentle with her — a function of the core, which let him know exactly what would make her body respond — and Ember hated that more than any cruelty Minia could have added on top of it. Cai, present and horrified, treated her afterward.\n\n**The Design Log, Read Through a Body Never Built to Hold It**\n\nWhen the sealed order\'s buried design logs finally surfaced through the resonance of the Beginning-Creation and Destruction-Ending cores growing in Minia, Ember and Arai experienced the same data from inside two different bodies, and not equally. Ember\'s core carries no personal binding to anyone — it is why it broke her mind in the first place, and it is why, across the single week the discovery took, she could only absorb the last two of the 37.2 trillion recorded deaths behind 8\'s creation. She screamed, without stopping, for the full week. Arai, reading the same archive through a core structurally tied to his own Mind, took in the complete 37.2 trillion in that same span — why the same week produced such different scale of experience for each of them is not yet answered here.",
    notes: 'FUTURE ARC NOTE: Ember stands as direct opposition to Mira Irane Ardent — Mira holds the Will architecture together (51–75% range), while Ember wants the seal stripped entirely toward the human. Her version of "saving" Irane is liberation from the architecture both Arai and Minia built him into — she wants the human underneath, not the weapon, not the Conceptual, not the Emperor. This sounds the most reasonable and is arguably the most dangerous outcome: a "fully human" Irane with Conceptual power and no managing architecture. Her specific leverage: her son Irane Jr. (the Design aspect) holds the blueprint connecting beginning and end in the Kazemi system. The Design could theoretically map the path of disconnection — showing how the architecture could be undone. This puts Irane Jr. as the structural pressure point between Ember and Mira. Ember and Minia are aligned in wanting to break the seal but for entirely opposite reasons: Minia wants the Drive unleashed, Ember wants the Drive AND Will removed and only the human left.',
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
    matriline: 'minia_consa',
    coreType: 'Irane Material — Gathering (Creation Start)',
    _dataRev: 3,
    description:
      "Minia Consa's eldest daughter by Irane — the oldest child of the Emperor, born before the First War. Middle initial I. marks her father Irane; she chose the Kazemi name over her mother's. Right Hand of the Emperor: she stands as the right hand of creation and the beginning of all things Kazemi. Female heir to the throne. Head Commander of the 1st Division and Second-in-Command of the entire Imperial force.\n\n**The Power of the Beginning**\n\nSummari's ability draws on the Irane material — the primordial substance her father's body generates continuously. Her authority is over the **start** of creation: she reaches into that material's elemental potential and gathers the raw constituent components needed to forge a tool. If the end result requires flame, wind, and dark energy, she pulls those three into readiness. The components are assembled, primed, and waiting — but the completed form is beyond her reach. She sees and controls the intention and the gathering, from the first moment through the halfway point. After that the arc goes dark to her.\n\nShe is never limited by available materials — the Irane material is inexhaustible while Irane lives. She is limited by the fact that she cannot complete what she starts. Everything she builds needs finishing.\n\n**Sealed State:** Summari gathers; Nighla finishes. The creation cycle is split between them. A sword requiring flame, wind, and earth: Summari pulls and primes all three. Nighla receives the gathered elements and synthesizes them into the finished blade — a burning-air cut, not three separate energies loosely combined. Neither can produce the result alone.\n\n**Unsealed State:** Summari accesses the full cycle. She can gather and complete on her own — pulling the raw elements and seeing through to the final form without Nighla's synthesis step.\n\nHer beast is **Begin Kazemi** — a primordial phoenix born at the beginning of the universe, the first beast Enari ever created, female, golden-featured, and the living embodiment of creation-force: the moment before a thing exists, the raw gathering potential that makes everything else possible.\n\n**The Name**\n\nIrane named her on the night they escaped the facility — the same night she and Nighla were born, died, and were brought back. His mind was not healed. It was barely functional: still fractured from the trial, still rebuilding itself piece by piece, not yet capable of deliberate thought in the way naming a child would require.\n\nHe looked outside. It was summer. He said *Summari*.\n\nThat was it. No ceremony, no considered choice, no meaning intended. The name came from the season of the night she entered the world. Arai was managing him, Ember was recovering, and no one corrected him. The name stuck. In time, people would read depth into it — the warmth of a beginning, the fullness of the season of growth. Summari herself has never asked him to explain it. She prefers it unexplained.\n\n**Right Hand — Literally**\n\nIrane calls Summari his right hand. People read it as a rank — the trusted second, the closest ally in the room. That is not what he means.\n\nHe means it the way he means everything about his body. The Right Hand of Creation was not a power given to her. It was a fragment of his own right arm's inheritance transferred into her so she could live. She is, in the literal architecture of what he is, his right hand.\n\nSo she stands there. Always at his right side — in formal ceremony, in military briefing, in private audience. No one arranges it. She is simply there, because that is where a right hand is.\n\nThe punishment for serious failure is reassignment: Nighla moves to his right, Summari to his left. Both of them are uncomfortable for the duration in ways they cannot fully explain. Something in what they are does not sit correctly in the wrong position. The lesson lands.\n\n**My Beginning — The Nickname**\n\nIrane calls Summari his beginning. Not 'my first daughter' or 'eldest heir' — *my beginning*. The word is precise: she is the first act of anything he makes. If the Irane material is the substance of every creation, she is the first motion that activates it. To create something is to begin, and to begin is to be Summari.\n\nHe also calls her his right hand — which is anatomically correct, historically true, and somewhat redundant given what he just said. The right hand is the beginning of action. It is also Summari. He sees no distinction between these facts. He has never shortened the name. Summari was given fully formed on a summer night by a man who had no language left for deliberate choice, and he has never abbreviated it since. She is the only one of the five Drive members who receives her full name every time.\n\n**Spells — And the Ceiling Pandro Holds**\n\nIn the Arts framework — Spells, Techniques, unified Arts — Summari holds the Spell side. She constructs from available mana toward a form. Her gathering is the letter-making before the word. But construction without reference is building blind. The Hallowed Fifteen hold the Sage-tier complete catalogue of all 15 elements — every known spell at Level 9 comprehension, documented by women who gave their physical forms to carry that knowledge. Pandro holds that catalogue. When Summari reaches into the Irane material and assembles components for a spell, she is working toward what the Fifteen know is the fullest possible expression of that element. Their ceiling is her reference. Without it, she constructs without knowing what she is building toward. With it, she knows the finished spell before the first component is pulled. She creates; Pandro's Fifteen hold the fullest expression of what creation can achieve.\n\n**What Vraka Was to Mana**\n\nVraka Arke — the beast-origin, the raw beginning of all living things — was to Mana what Summari is to Irane: raw force, gathering potential, the primal first move that springs everything to life. Vraka's domain was never refinement — it was the eruption of what IS before the world knows what to do with it. Summari holds this same position in the Kazemi cycle. She is not the elegant form. She is the potential that makes elegant form possible.",
    weapon: {
      name: 'R.A.C — Right Arm of Creation',
      alias: 'R.A.B — Right Arm of Beginnings',
      type: 'Arm-Form Ascended Weapon — Primordial Core Tap (Right)',
      description: 'Manifests as Summari\'s right arm itself — formed at the acromion bone, the shoulder connection point, with an orb resting there as both the weapon\'s anchor and the mana interface. This orb is Irane\'s mana made tangible, drawn directly from his main core: Kazemi\'s core — the primordial mixed mana of all 15 pillars written into him during the Pillar Experiences resurrection. The mana that arrives in Summari\'s arm is undefined — primal, unaligned, held at the 1%–99% transition state Irane\'s core maintains at all times. As Summari gathers and works with it, the mana matures into whatever elemental alignment the intended spell requires. She can cast spells of any nature because the source has no fixed nature — it is the substrate from which elemental nature emerges. R.A.B (Right Arm of Beginnings) is the techniques expression of the same connection: instead of tapping raw mana, R.A.B draws from the spells and techniques Irane has already formed — accessing their beginning state and providing the constructive architecture to build from them directly. The orb form in Summari\'s right arm mirrors Nighla\'s left; the two arms together form a completed creation cycle. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'Begin',
      type: 'Primordial Phoenix — First Beast of Creation',
      description: 'A phoenix born at the beginning of the universe — the first beast Enari ever created, made specifically to match Irane\'s concept of creation and beginning before the trial had a name for what it was building. Begin is the only female of the three companions who travel with Irane, and she occupies the highest position: directly on his head when they travel together in small form. She has golden features — the gold that runs through all three companions as their shared mark of Enari\'s making. Her phoenix nature is not simply rebirth: she is the moment before the thing has yet existed, the breath before the word, the start of every cycle. She is older than most of what exists, and she was made to represent Irane before Irane had his name.',
    },
    notes: 'Named the night of the rescue, by Irane, for Summer Night — the night of her and Nighla\'s conception. The first time he ever named something for what it meant to him rather than for what it was built to do.',
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
    matriline: 'minia_consa',
    coreType: 'Irane Material — Synthesis (Creation End)',
    _dataRev: 3,
    description:
      "Summari's twin — Minia Consa's second daughter by Irane. Chose the Kazemi name alongside her twin. Left Hand of the Emperor: the left hand of destruction and the end of all things Kazemi. Handles all matters of secrets and shadows of the Valariyan Empire and House Kazemi. Aurora acts as her right hand.\n\n**The Power of the End**\n\nNighla's ability draws on the same Irane material her twin works with — but from the opposite direction. Her authority is over the **completion** of creation: she takes the gathered elemental components and synthesizes them into their optimal final form. What Summari assembles, Nighla finishes. Flame and wind gathered and primed become a burning-air blade when Nighla synthesizes them — not a fire effect and a wind effect loosely combined, but the true final tool that arises when those two forces are properly resolved into each other. She sees from the midpoint through to the end. The beginning of any process is invisible to her.\n\nShe cannot pull the raw elements herself — she receives what already exists. She cannot initiate the gathering. But what she produces is always the refined, complete form — never a draft, never a half-result.\n\n**Sealed State:** Nighla synthesizes; Summari gathers. The cycle is split. Nighla receives Summari's assembled components and resolves them into the finished tool. She can also look at anything already half-built — any structure, power, or being in the midpoint of a process — and synthesize it toward its end, or unmake it to that same end state.\n\n**Unsealed State:** Nighla accesses the full cycle. She can identify what is needed, gather the components herself, and synthesize the final result without Summari's gathering step.\n\nHer beast is **End Kazemi** — a primordial hybrid (feline-canine-bear) born at the beginning of the universe, the second beast Enari ever created, male, hard black fur with golden dots, and the living embodiment of completion-force: the final form that everything was always heading toward, the synthesis that makes the next beginning possible.\n\n**The Name**\n\nNighla was named the same night as her twin — the night they were born, died, and came back, the night Irane broke free of the facility. His mind was still in pieces. Thinking clearly enough to choose a name the way a parent would was beyond him.\n\nHe looked at the sky. It was night. He said *Nighla*.\n\nIt was the same fractured logic as her twin's name — Summer became Summari, Night became Nighla. Two words from a mind that could only observe what was directly in front of it. He was not trying to be poetic. He was not trying at all. He was present in the most minimal sense — alive, outside, looking at a night sky for the first time in fifteen years.\n\nNighla has always known this. She finds it fitting. A name born from the end of something — the end of the facility, the end of what he was before — given to the child who would inherit the Left Hand of endings. Whether that is coincidence or whether Irane's fractured mind was perceiving something it could not articulate, she has never decided.\n\n**Left Hand — Literally**\n\nIrane calls Nighla his left hand. The same logic as her twin: not a title, not a metaphor. The Left Hand of Destruction was his own left arm's inheritance, transferred to her when she came back. She is, structurally, his left hand.\n\nShe stands at his left side. Always. Unchosen in any deliberate sense — it is simply where she belongs in relation to what he is. Left is where a left hand is.\n\nThe punishment — Nighla on his right, Summari on his left — is not humiliation in the usual sense. It is something more precise: being placed in the wrong anatomical position and left there. It is disorienting in a way neither twin can fully articulate, which is exactly the point.\n\n**His End — The Nickname**\n\nIrane calls Nighla his end. Not the end of Kazemi in the sense of conclusion or failure — *his end*: the last thing that exists in any creation before the cycle closes. Every Art, every technique, every move made with the Irane material comes to rest in Nighla. She is where it finishes.\n\nHe says it with the same precision he applies to her twin's name. Not sentimentally. As a structural report. What she finds notable: he says it with the same tone he uses when he is pleased. Whether that is a theological comfort or simply how he relates to the inevitability of endings, she has not asked.\n\n**Techniques — And the Bodies Urial Builds**\n\nIn the Arts framework — Spells, Techniques, unified Arts — Nighla holds the Technique side. She synthesizes toward the final, optimal expression — the thing the gathered components were always meant to become. Her principle: take what exists and resolve it into the most complete form of what it is. Urial holds this same principle applied to physical form. When Enari finds and captures powerful cores during his trial-collection role, those cores are preserved — personal will stripped, pure core intact. Urial gives them bodies: not restoration of what they were, but new physical forms purpose-built to maximize each core's elemental expression. An ice-core candidate receives a body designed for ice mana generation and technique execution. A Time-core candidate receives a body optimized for Time-technique expression. Both Nighla and Urial are architects of completion: Nighla completes the creation cycle; Urial completes the existence of cores that would otherwise remain formless. The question each asks is the same — *what is the best final form for this thing?* — and neither accepts an answer that leaves anything unfinished.\n\n**What Selis Was to Mana**\n\nSelis Arke — the tool-origin, the refined end of all living things — was to Mana what Nighla is to Irane: purposeful precision, completion, the refining force that takes what Vraka's raw eruption created and gives it its final, correct shape. Selis's domain was never the primal — it was the synthesis of what already existed into the form it was meant to have. Nighla holds this same position in the Kazemi cycle. She does not begin. She finishes, completely, every time.",
    weapon: {
      name: 'L.A.D — Left Arm of Destruction',
      alias: 'L.A.E — Left Arm of Endings',
      type: 'Arm-Form Ascended Weapon — Mana Deconstruction (Left)',
      description: 'Manifests as Nighla\'s left arm itself — formed at the left shoulder acromion bone in mirror to Summari\'s right arm, with a matching orb at the juncture. Where Summari\'s R.A.C generates constructive mana (primordial, undefined, ready to become anything), L.A.D generates the inverse: a mana type that destroys mana itself — a deconstructive force that separates mana from its perfected, formed state and returns it to its primordial condition. Nighla does not build from source; she works from the End. When she uses techniques, they devolve to primal state — not broken, but returned to the raw substrate from which all techniques are made. This is the source of her power: she can wield technique-level mana because she operates at the level that techniques ultimately return to.\n\nWhen R.A.C and L.A.D combine — Summari\'s constructive primordial and Nighla\'s deconstructive primordial meeting — the result is the spell-and-mana-signature for techniques: **Arts within Irane**. Neither can create an Art alone; Summari builds forward, Nighla dissolves backward, and their meeting point is the complete Art. R.A.C and L.A.D are both set within Kazemi\'s core — the same foundation, operating in opposite directions from the same source.\n\nThis connection extends to **Urial**: the armours Urial commands each carry a specific core nature already set within them — a signature of completion. In sealed state, Urial is locked to whichever elemental core the current armour holds. Nighla\'s deconstructive principle is why this lock exists — each armour is a completed form, and completion in sealed state means fixity. In unsealed state, Urial can freely shift between elemental cores — the lock releases because the synthesis level opens.\n\nL.A.E (Left Arm of Endings) is the techniques expression: where L.A.D works with raw mana, L.A.E draws from Irane\'s techniques directly in their end state — providing the completion architecture for what Summari\'s R.A.B began. When R.A.B (the beginning of spells) and L.A.E (the end of techniques) meet and clash within the core of Irane\'s Will, they produce the unified Art: the complete spell-technique fusion that operates within the Emperor\'s system at its highest level. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'End',
      type: 'Primordial Hybrid — First Beast of the End',
      description: 'A hybrid beast born at the beginning of the universe — the second beast Enari ever created, made alongside Begin Kazemi to match Irane\'s concept of ending and completion. End takes the form of a feline-canine-bear hybrid: three apex forms in one body. Hard black fur covered entirely in golden dots — the darkness of an ending, lit by the gold that marks all three companions as Enari\'s children. End rests on Irane\'s left shoulder in travel form: the left side is where the heart is, where endings live. He is not void or absence — he is the weighted presence of something that has finished. He synthesizes to conclusion the same way Nighla does: not erasure, not destruction, but the final form that everything was always heading toward. He was made to represent Irane\'s end before Irane had his name.',
    },
    notes: 'Named alongside Summari the night of the rescue, for Summer Night — the night of their conception.',
  },
  {
    id: 'irane_e_osiro',
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
      "Ember's secret son by the Emperor — named Irane after his father, middle initial E. for Ember, surname Osiro from the clan he is embedded in. Though legally a child of Clan Osiro, he acts as the Kazemi's deepest intelligence asset within one of the largest and most unpredictable clans in the Sol-Nexus, currently led by Ember A. Osiro. His power is Water — Design: fluid, adaptive, impossible to fully pin down. Known publicly only as 'Shadow of the Emperor'. He must never acknowledge his true Kazemi parentage.\n\n**Why He Is Special — But Not in the Same Way**\n\nSummari and Nighla received fragments of Irane's own arms — the literal inheritance of the Right and Left Hand of Creation and Destruction. Their power is his power, divided and given form. They are special because of what came FROM him.\n\nJr. is special because of what came THROUGH him — through Ember. His mother was the only woman in the facility whose body had not been physically altered by the experimentation. She was chosen for that preservation, and what she gave Jr. was not a fragment of Irane's arm but a legacy entirely her own: **Design**. Ember held two lineages in herself (Vane by naming, Osiro by blood through her mother Artic). She had her identity stripped, her sanity broken, and she still produced three children with a coherent future — and then reclaimed the Osiro name not as borrowing but as her rightful inheritance. Her nature was connective: she linked what should not have survived.\n\nThat is Design. Not the beginning (Summari). Not the end (Nighla). The blueprint that shows how beginning and end are connected. Jr. holds this because Ember gave it to him. His Water core — fluid, adaptive, filling every form it meets — is the correct core for a person whose function is to see how things belong together.\n\nHe is the only Kazemi child whose primary specialty is neither power nor force but *architecture*. He reads the design of any system he is embedded in and reports what it reveals. Clan Osiro runs on his intelligence because intelligence is what Ember's line always was — survival through understanding what connects to what. Without Jr.'s Design, Summari's gathered components and Nighla's completed forms have no blueprint connecting them. He is the reason they build the right thing.",
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
    epithet: 'Apex of Kazemi · Strongest of Her Generation',
    status: 'active',
    location: 'Valariya',
    importance: 2,
    matriline: 'zoe',
    coreType: 'Air — Apex',
    description:
      "Zoe's eldest daughter — second child of the Emperor. Middle initial Z. marks her mother Zoe. Blade of the Emperor, Apex of Kazemi. Known as the Princess of the Kazemis and the 'strongest of her generation' — a prodigy by every measure. Serves as the right hand of Nighla. She is the family executioner, tasked with eliminating anyone who breaks Kazemi's law or defies Kazemi's will. Power: Air — Apex; the absolute ceiling of what Air combat and physical execution can be. Her strikes do not pursue a standard — they ARE the standard. Where Arai defines the ideal through the mind, Aurora sets the ceiling through the body: the highest physical expression of the Kazemi line in motion. Inherited from Zoe's Apex Predator lineage — not what can be evolved toward, but what the body becomes when there is nothing left to limit it.",
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
    role: 'Corrupt Acting King · Antagonist · Father of Ember and Young Nuro',
    epithet: 'Kingmaker of the Cold War',
    status: 'antagonist',
    location: 'Capital',
    importance: 3,
    description:
      "The primary antagonist of the Prologue. **Grandson of Historical Niro Vane** — the King of Terra who led the Age of Chaos — through his father **Nuro Vane**. Named deliberately after his grandfather, carrying the same ambitions across generations. His great-aunt is **Historical Ember Vane** (Osiro) — the historical mother of the Emperor's first three children through the facility.\n\nFather of two children in the current era: **Ember Vane** (daughter, sent to the Grand Mana Academy at age 8, gifted to the facility at age 13 — the same Ember who would become Irane's first wife and take the Osiro name) and a young son also named **Nuro** (a deliberate generational echo — Lord Niro sent the boy, then about ten years old, to the Nexal household as a political emissary to negotiate a Time-magic bride contract with Clan Leader Tonga).\n\nThis makes the Irane–Niro conflict deeply layered: Irane built something with Lord Niro's own daughter under duress, and the Vane line has been trying to reclaim dominance ever since Historical Niro was killed in the 1-Year Crusade. Corrupt kingmaker of the 22-Year Cold War. Discovered the existence of Nuro Vane's hidden biological son — a child with a stronger claim to the Vane bloodline than Niro himself — and chose to weaponize rather than legitimize him. Raised Kael under a false identity as a brainwashed shadow assassin, kept his true parentage hidden. Launched the failed Year 500 coup against the Emperor.",
    notes: 'Father of Ember Vane (8 at Academy class, sent to facility at 13) and young Nuro (10ish when sent to negotiate with Nexal clan — the boy who called Arai "the dud"). Both children used as political instruments by Lord Niro.',
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
    id: 'abe',
    name: 'Abe More',
    house: 'more',
    role: 'Granddaughter of Cith More · Scholar · Present-Day Witness to the Facility Account',
    epithet: 'The Pen That Was Never Clicked',
    status: 'alive',
    location: 'Valariya',
    importance: 2,
    coreType: 'Energy-Fire; Chaos-Dark',
    description:
      'Abe is the granddaughter of **Cith More** through **Toma More** (Cith\'s public-lineage son, her father). She carries the More bloodline and the More house perspective on Irane: that Conceptuals are the only beings in the world that exist outside the framework the Arke twins designed, and therefore the only things that cannot be calculated away. From the More house\'s view, Irane is not a weapon or a ruler. He is proof of concept. He is the confirmation of everything the clan has believed since the first generation asked why the Primals lost.\n\nAbe is in the room when Arai begins her account of the Facility Arc. She sits with notes open and pen ready — and does not write until Arai has finished speaking. The decision to not click her pen when she heard "What is a human?" was the thing Arai remembered about her afterward: that she understood, immediately, that what was happening was not a lecture to be transcribed but a testimony to be received.\n\nShe is not a combatant. She is the person in a room full of extraordinary people whose role is to understand what happened and ensure it can be understood by others. Her Energy-Fire core, aligned to Chaos-Dark, runs hot and precise — the More bloodline\'s ancestral pattern through Toma, and through him from Cith. She does not know about Cith\'s secret children with Dulla (Darkki and Noxa). From her perspective, Cith\'s story ends with Toma.\n\nShe is not there in conflict with Kael. She is there for confirmation — the confirmation of something the More house has held as true for generations without being able to prove it. She is there to hear the version that cannot be unmade afterward.',
    notes: 'Female. Granddaughter of Cith More (Cith → Toma More → Abe). Energy-Fire; Chaos-Dark. More house perspective: devotion to Irane as Conceptual. Does NOT know about Cith\'s secret children with Dulla Vane (Darkki Ardent + Noxa Nexal). Present with Nova and Kael when Arai begins the Facility account. Non-combatant. Scholar/archivist role.',
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
      "The narrative character through whom the entire Prologue is told. Nuro Vane's hidden biological son — born before Nuro was killed by Irane at Unix Year ~131. His true parentage makes him the more legitimate Vane heir over Lord Niro Vane (Nuro's grandson). Lord Niro discovered his existence, suppressed the truth, and raised him as a brainwashed shadow assassin. His mission near Valariya's border fails catastrophically, leaving him broken inside the barrier. Nova finds him. As he recovers in Valariya, everything he was taught to believe is dismantled. His Aetheric Nullification ability collapses spatial tears on direct contact — making him a natural counter to HC/CH Conceptual users. By the end of the Prologue he knows who he is and what his father made him.",
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
    id: 'mira_ardent',
    name: 'Mira Irane Ardent',
    house: 'ardent',
    role: 'Highest Authority in Valariya (after the Empress) · Leader of the Valariyan Heads · Right Hand of Hope Kazemi',
    epithet: 'The Emperor\'s Heart · The Conduit · Leader of the Five',
    status: 'active',
    location: 'Valariya',
    importance: 4,
    _dataRev: 3,
    description:
      'Mira Ardent is the youngest daughter of **Tola Ardent** — current head of House Ardent and Hope\'s secret father. She carries the Ardent bloodline\'s spatial awareness as a dormant inheritance but built her standing entirely through the ability she was chosen for: conducting the Emperor\'s emotional overflow.\n\n**The Hatred Underneath**\n\nWhat distinguishes Mira from the other Valariyan Heads is not only the scale of what she carries — though she carries more than any of them in raw emotional weight — but what drove her to the point where she could carry it at all.\n\nMira hates her father and her older brother. Hate is too gentle a word. Their names sour her mood before her mind has finished processing the sound — poison to her existence, a contamination she feels in her skin. What Arai experienced from her family was betrayal she turned into a desire to prove them wrong. Mira only ever had one goal from the moment she understood what she felt: to destroy them. Not surpass. Destroy.\n\nShe enrolled at the Academy intending to take the Unbroken Path — Suu\'s class, the hardest path, the one her father and brother had failed to earn. She was redirected into the Grand Library. She chose the hardest course available there — Master Gran Brime\'s Grand-Mana Course: ten simultaneous mana combinations, the kind of course most senior practitioners never touched. She took it because hard was the only speed she moved at.\n\nThat was where she met Hope.\n\nThe rivalry between them was immediate and genuine — two students placed in the same brutal course, both refusing to yield. The rivalry became respect. Respect became friendship. By the time they left for the facility, Mira and Hope understood each other in the way that forms between people who have gone through something designed to break them.\n\n**What She Gave Hope**\n\nWhen Mira recognized the spatial awareness working through Hope — the Ardent family\'s inherited ability, simultaneous perception of every position in a field — she knew exactly what it meant. She carries the bloodline. She did not inherit the ability herself. She has described this, once, as \'the privilege of not inheriting.\'\n\nShe told Hope whose daughter she was. Without conditions, without hesitation. The information was Hope\'s by right and Mira gave it. It was the kind of thing people who hate their fathers do when they find out their father has another child who doesn\'t know.\n\nMira Ardent is the highest authority in Valariya after the Empress, and the leader of the five Valariyan Heads — those chosen by Irane to wield aspects of his Will. She wields the **Emperor\'s Emotions**: the accumulated weight of everything Irane has felt across thousands of years of dying, killing, loving, and losing. His emotional resonance is a structural threat — unrestrained, it could overflow his power catastrophically. Mira serves as conduit and regulator: she feels what he feels at amplified intensity, converting his emotional state into her beast\'s power while he maintains the restraint necessary to function safely. This is the primary reason the 3rd strongest among the five is also their leader.\n\nHer beast is **Emo** (The Sovereign Emo) — a being whose form changes entirely with the core emotional state she channels. Seven states exist:\n\n**1. Wrath** — Fire + Energy element. Great Feline form (lion/tiger class). The rage of every battle compressed into explosive force — not pure flame but raw kinetic-thermal energy that vaporizes the air before the strike lands. Offensive detonation, not burning.\n**2. Grief** — Water + Darkness element. Storm Crane form. The sorrow of permanent loss rendered into erosion and void. The crane\'s wingspan blots out light; its tears corrode rather than cleanse. Most amplified due to Irane\'s centuries of irreversible loss — this state is frequently the hardest for Mira to release.\n**3. Joy** — Lightning/Light element. Celestial Hound form (golden wolf). Rare and overwhelming — Irane\'s genuine happiness is brief but structurally powerful. When this state manifests it is always unexpected.\n**4. Love** — Life Force element. Noble Stag form. But unlike the other states, Love carries the imprint of three specific women: **Arai** (Mind · Ice-Blue), **Hope** (Heart · Crimson-Red), and **Zoe** (Body · Emerald-Green). The stag manifests threaded with their three colors — not love in the abstract but the precise structural weight of those three bonds. Absolute defense and healing, but Mira is overwhelmed not by love\'s weight in general but by the irreducible weight of those three specific relationships.\n**5. Resolve** — Earth/Stone + Iron element. Mountain Titan Tortoise. Immovable endurance. The earth connection grants geological patience; the iron aspect adds structural rigidity that resists not just physical force but conceptual pressure. The most stable emotion — easiest for Mira to maintain without cost.\n**6. Dread** — Wind/Void element. Shadow Serpent form. Area suppression, cold silence, fear-inducing presence. Felt by Mira as near-paralyzing weight.\n**7. Emptiness** — Void/Death element. Hollow Wraith form. Absolute nullification — erases force, aura, and mana in radius. Most dangerous; Mira risks losing herself when channeling it.\n\nWhen she releases all restraint and channels every emotional state simultaneously, all seven Emo forms merge — **The Emperor\'s Full Heart**. She can hold this gestalt for only moments before the weight risks destroying her from within. **The Heart\'s Tempo — What Mira Regulates**\n\nEvery emotional state Mira channels corresponds to a distinct heartbeat pattern. Hope\'s heart does not beat the same way in Wrath as it does in Love — the rhythm, the force, and the timing of each beat change with the emotional state, and with it the character of every mana exchange that beat initiates:\n\n**Wrath** drives rapid, explosive beats: maximum mana collection in minimum time, high life-force cost per exchange. **Grief** produces deep, slow beats: sustained collection, each exchange weighted, pulling more per beat at the cost of pace. **Joy** gives light, frequent beats: efficient and sustainable, lower yield per beat but consistent output. **Love** is steady and balanced: the optimal long-operation rhythm — maximum sustained mana availability. **Resolve** is measured and deliberate: built for extended engagements, without the peaks and valleys of volatile states. **Dread** creates held beats with sudden releases: rhythmically unpredictable, forcing opponents to react to timing they cannot anticipate. **Emptiness** approaches near-cessation: minimal collection, maximum preservation of life force — the survival mode.\n\nWithout Mira, Irane\'s emotional states would alter the heart\'s rhythm without regulatory oversight. Grief would slow collection to a halt at the critical moment. Wrath would exhaust his life force before the battle resolved. She absorbs the emotional amplitude — feeling everything he feels at amplified intensity — so that Hope\'s heart can maintain the collection rate the *moment* demands rather than the rate the *emotion* demands. She is not managing his feelings. She is protecting the machinery by absorbing the overflow.\n\nShe wields **Constraint** and serves as right hand to **Hope Kazemi**.\n\n**— Story Arc —**\n\n**[Grand Mana Academy]**\nMira enrolled in Master Gran Brime\'s Grand-Mana Course — ten simultaneous mana combinations — driven by the singular goal of surpassing everything her father and older brother failed to achieve. There she met Hope, and their initial rivalry became the friendship that defined both their trajectories.\n\n**[Academy Attack]**\nGran Brime died shielding Mira from lava fire during the assault. Mira was extracted by Toma\'s team alongside the other prodigies and taken to the facility.\n\n**[The Facility and Escape]**\nMira endured the facility years as one of the key subjects alongside Arai, Hope, Zoe, and Irane. After the Escape from Hell she allied with Irane\'s cause — the foundation of what she would eventually become in the Sol-Nexus. At this point in the story she holds only her Energy core alignment; the Emotional core connection to Irane\'s Will architecture is a post-facility development.\n\n**[Parts 2.1/2.2 — "Arrival of the Devil" Arc]**\nMinia assigned 8 to Mira as her designated weapon, naming her leader of Consa Special Unit 8: Dragons of Minia (100 people). At the Kazemi Primal Capital assault, Mira confronted Tola Ardent — her father — who led the 20M tunnel force through Namo\'s hidden insertion point. She engaged him directly using Art of Energy: Mana Lockdown, trapping him and keeping him preoccupied as 8 moved through the city.\n\n**[Parts 2.3/2.4 — Lora]**\nLost control of herself fighting Tola, driven by rage over her father still being alive — and in the middle of that unrestrained battlefield, a child named **Lora** was caught in a stray blast and died in Mira\'s arms, her last word "beautiful," aimed at the light of the fight that killed her. The medic Cai lied to Mira in the moment to keep her functional, then confirmed the death once Mira woke from the battle\'s aftermath. Mira knelt at Lora\'s body, named her explicitly in a vow — "I will never let my emotions rule me again. I promise you, Lora" — and fought the rest of the assault, and has conducted herself since, with that promise as a live, load-bearing commitment. This is the specific, named origin point of the emotional discipline she is known for later in life — and, per later events, a promise she does not keep perfectly forever.\n\n**[Facility Arc, Part 3]**\nPromoted to Grand Commander of the entire Consa military — a rank she took entirely for Hope\'s sake, indifferent to the politics underneath it. Was the first to make a genuine choose-to-serve contract with 8, in the immediate aftermath of watching Cai save Valariya\'s life: she asked him to help her keep her vow to Lora, and he answered with the deal that would define the whole future Will-bearer system — *"Are you willing to put your very core into that declaration?"* She agreed, becoming the origin point of her own weapon, **Constraint**, in its earliest form — a single great sword built around her promise, long before it becomes the seven-state Emo conduit of her Valariyan era. He warned her plainly: fail the vow, and her core is his.\n\nUnlike almost everyone else drawn toward 8 during this period, Mira recognized the danger of what was happening to her while it was happening — she is one of the few people, alongside Nevir, who directly experienced him manipulating her own core and knew exactly what the sensation was. She grew to fear the pull toward pleasing him even as she grew to genuinely admire his teaching (better, in her own private judgment, than even Arai\'s). Read the "Champion" manuscript Criya showed her as pure fiction, never falling under its spell — one of only a handful of people in the entire arc whose devotion to 8 stayed rooted in the man rather than the myth.',
    weapon: {
      name: 'Constraint',
      type: 'Chain-Sword — Ascended Class (Emotional Conduit)',
      description: 'The external form of Constraint is a connection point — a chain system that wraps around Mira\'s arm and a great sword that emerges from the chain\'s anchor. The chains physically enact Mira\'s role: they are the chains that bind the Emperor\'s emotions. As she tightens her grip, Emo is restrained — its form suppressed, its power held back. As she loosens her grip, the chains loosen and Emo strengthens in whatever emotional state it inhabits. The great sword, befitting the Supreme General, emits mana in two states: concentrated (precise, overwhelming, inward force) and unrestrained (explosive, aggressive, outward force). Seven emotional forms:\n\n**Wrath** — blade sharpens and heats. Concentrated: thermal-kinetic energy compressed to a detonation point — strike so dense it vaporizes air before landing. Unrestrained: explosive outward force from every edge simultaneously.\n\n**Grief** — blade grows larger; grief cannot stay contained. Emits dark water mana that absorbs and flows — surrounding and submerging rather than cutting cleanly.\n\n**Joy** — flash lightning. Concentrated: electricity at light speed along the blade edge, precision beam that cuts anything. Unrestrained: discharge spreads across a field in celebratory burst pattern.\n\n**Love** — chains and blade both activate. Warm golden-rose mana that binds rather than destroys. Creates mana tethers: enemies suspended in binding, unable to act; allies wrapped in protective field that absorbs damage for them. Love does not kill easily. It holds completely.\n\n**Dread** — wind force. Concentrated: wind blade sharpened to a cutting edge, fear-inducing pressure directed to one person with precision that makes it feel inescapable. Unrestrained: large-scale wind event across a wide area — dread that spreads through a field.\n\n**Resolve** — no element. Blade becomes dense, grey-silver, emits nothing. Cannot be redirected by any mana technique — operates outside the elemental frequency that defenses address. What Mira resolves to strike, she strikes.\n\n**Emptiness** — near-invisible blade. Null-field: all active mana within range suppressed. Constructs dissolve. Techniques fail. Elemental energy cannot sustain. Does not counter mana — removes the foundation all other forms are built on. Second most powerful form.\n\n**Heart** — all emotional states accessible simultaneously, blade shifting freely between them. All colors cycling through the edge at once. No single defense works because the form is always changing. Time limit: five minutes total per day. Extended use resonates between Mira and Irane\'s emotional core at full depth — sustained resonance begins pulling his Will into the 35–75% activation range. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'Emo',
      type: 'True Beast — Sovereign Emotional Conduit (Seven States)',
      description: 'A being with no fixed form. Emo\'s shape, element, and capabilities are determined entirely by the core emotional state Mira channels from the Emperor. Seven distinct manifestations exist — each amplifying one of Irane\'s seven core emotions with its own dual-element signature. Its true form, seen only when all emotions are released simultaneously, is a gestalt of all seven with no settled appearance. Emo\'s power scales with Mira\'s restraint: as she tightens the chains of Constraint, Emo is suppressed; as she loosens them, Emo strengthens in whatever emotional form it inhabits.',
    },
    powers: [
      { name: 'Art of Energy: Mana Lockdown', type: 'Energy-Space Suppression Spell', description: 'A two-principle spell she developed sparring against Hope — compresses a sphere of space mana at the resonance frequency that nullifies spatial-force output, expanding the boundary to cover every angle a spatial specialist could move through. Used twice against Tola Ardent and once against Nuro Vane during the Kazemi Primal Capital assault, pre-Irane, on Energy core alone.' },
      { name: "Kazemi's Will: All Encompassing Wrath", type: 'Fused Beast-Core Art (pre-Emo)', description: 'A fire-and-energy beast construct 8 sent to protect her merged directly with her own Energy core, amplifying her own grief and rage into physically manifest mana rather than granting her any borrowed ability. Concentrated into a single point and driven into Tola Ardent\'s arm, burning it away below the joint. This predates her bond to Irane\'s Will architecture — the Emo/Constraint system described above is a later development.' },
    ],
    notes: 'Mira Irane Ardent — the middle name Irane marks her attachment to Irane\'s Will (entered the lab; bound to the Will architecture through direct exposure to the Emperor\'s emotional system). The "Irane" middle name is shared only by those who have been bound to the Will aspect directly. She holds the 51–75% Will range — the only person who can force Irane\'s Will to that level. FUTURE ARC NOTE: Mira stands as direct opposition to Ember Osiro — Ember wants to break the seal toward the human/free, while Mira holds the Will architecture together. Ember\'s son Irane Jr. (the Design) is the specific pressure point: the Design could theoretically map the path of disconnecting the architecture, which puts Mira and Ember in structural conflict. Ember calls this "saving him." Mira holds the seal that Ember wants removed.',
  },
  {
    id: 'aliya_hallow',
    name: 'Aliya Irane Hallow',
    house: 'kazemi',
    role: 'Spiritual Leader of Valariya · Right Hand of Arai Kazemi · Keeper of the Emperor\'s Spirits',
    epithet: 'The Hallowed · Little Sister of Valariya',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    _dataRev: 3,
    description:
      'Aliya Hallow is the youngest of the five Valariyan Heads in terms of seniority — known within Valariya as the "Little Sister" (a title of affection, not blood). She is ranked 5th in combat ability among the five but wields the most theoretically powerful ability set of any of them, and serves as Valariya\'s Spiritual Leader.\n\nAliya holds the **Spirit core** of the Emperor\'s Will — the aspect of Irane\'s nature concerned with what drives and sustains a being at the existential level. Not what he feels (that is Mira\'s domain) but what he *is*. In sealed state she works with human spirits — real people, real weight. In unsealed state she becomes a vessel for the five primal aspects of what Irane became during the trial.\n\n**Sealed State — The Six Spirits:**\n\nAliya maintains six spirits simultaneously:\n\n- **The Spirit of Valariya** (permanent — never leaves): The anchor. This is not an abstraction of the city. It is Aliya\'s older sister — the person Irane named the city after. Every Valariyan who feels instinctively compelled to protect Aliya is responding to the weight of one specific person, not a concept. This spirit is the reason the sealed form is possible at all: Valariya\'s presence grounds Aliya when the other five are at full pressure.\n- **Five summoned spirits** — each one the spirit of a Valerian who, in life, pursued one of the five paths of the Emperor\'s aspects: one who embodied endurance through the Trial, one who embodied creation through the Forge, one who pursued Perfection through the mind, one who embodied Choice through the heart, one who embodied Evolution through the body. Each deepens as Aliya encounters Valariyans whose lives traced that path.\n\n**Unsealed State — The Five Aspects of Irane:**\n\nIn unsealed form, Aliya does not summon the dead. She channels the living record of what Irane is — five primal aspects of his nature, each imprinted during the trial and now accessible through the Spirit core he gave her.\n\n**1. The Spirit of the Trial** — Element: All / Endurance\nThe distillation of 37.2 trillion deaths and returns. Not Enari\'s joy, not suffering — the *forward motion itself*: the refusal to stay down encoded as a spiritual law. Aliya in this state cannot be stopped, suppressed, or permanently ended within its duration. Every attempt to kill her compounds. It does not matter how much damage lands. She returns. The most frightening of the five because it is not about power — it is about the structural impossibility of stopping.\n\n**2. The Spirit of the Forge** — Element: Life / Creation\nIris: the creative intelligence that built Irane from the inside out. Aliya can construct anything from available mana — barriers, weapons, structures — and what she builds is always the *optimal form* for the current moment. Iris never built a draft. Neither does Aliya in this state. What she creates is finished.\n\n**3. The Spirit of Perfection** — Element: Time / Mind\nArai\'s imprint within Irane — the Mind that holds the record of every technique, every calculation, every ideal outcome. This aspect represents not the pursuit of perfection but its *definition*: what perfection IS, as calculated by the most complete tactical mind in the Kazemi system. Aliya in this state processes at a speed and precision beyond any conventional combatant — she sees the perfect decision and executes it without gap between thought and action.\n\n**4. The Spirit of Choice** — Element: Space / Heart\nHope\'s imprint — the Heart that connects to all things and chooses what to sustain. Aliya gains spatial awareness across the entire field and the ability to understand the full weight of every path available in the current moment. Not precognition. The *meaning* of each choice, made clear all at once. Hope\'s Azure Dragon of Choice originates from this same core. Aliya channeling it does not fight with force — she fights with consequence.\n\n**5. The Spirit of Evolution** — Element: Life-Death / Body\nZoe\'s imprint — the Body that adapts around whatever is trying to kill it. No mana type that successfully damages Aliya in this state functions the same way twice. She restructures around the incoming pressure in real time. The Apex Predator principle applied to spirit form: she becomes a harder and harder problem to solve with every exchange.\n\n**What Distinguishes Her from Pandro:**\nPandro holds what Irane\'s magic *can do* — the ceiling of structured spell knowledge across all 15 elements. Aliya holds what Irane *is* — the experiential and existential record of what built him. Pandro gives Summari a target. Aliya gives the whole system its reason to keep moving.\n\nAliya serves as right hand to **Arai Kazemi** and wields the **Anchor**.\n\n**The Sister She Carries**\n\nThe Spirit of Valariya — the permanent spirit that never leaves Aliya — is not the abstract spirit of a city. The city was named for her sister. **Valariya** was Aliya\'s older sister, now dead. When Aliya holds the Spirit of Valariya, she is holding her sister\'s presence. The city was built around that name. All Valariyans feel an instinctive pull to protect Aliya because of the spirit she carries — they are responding to the weight of a person, not an abstraction.\n\n**What He Said**\n\n*\"We often forget the faces of those we loved. But we will never forget the feelings we felt when we were with them. That is what it means to carry the spirit of the dead with you.\"* — Irane, to Aliya, after she lost her sister',
    weapon: {
      name: 'Anchor',
      type: 'Spirit Anchor — Ascended Class',
      description: 'A point of absolute grounding. The Anchor is Aliya\'s connection to the Emperor\'s spirits — the physical and metaphysical interface through which she maintains her hold in the living world while working with the dead and the aspects of Kazemi that exist beyond conventional reality. Aliya exists at the threshold between living and spirit: her body is very light, she can hover, and she can become nearly transparent — present as a ghost-like form that passes through states inaccessible to the fully living. The Anchor prevents her from drifting completely from the physical world. It is also the resting place of the Spirit of Valariya — her sister — whose presence is the permanent ground that makes the other five spirits possible. Without the Anchor, Aliya\'s ability to carry the Emperor\'s spirits would have no center. The reason she is among the most dangerous of the five: a spirit vessel that can be entered by the Emperor\'s aspects can draw from all of those aspects simultaneously, from every point in the Will architecture at once. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: "Soul's",
      type: 'Phoenix — Spirit Vessel (Sealed: Six Spirits · Unsealed: Five Aspects of Kazemi)',
      description: 'The beast\'s sealed form is Soul\'s — Aliya names each summoned spirit individually after the person whose soul it is (e.g. if the spirit belonged to a Valerian named Kevin, she calls that spirit Kevin\'s Soul — the full beast name is Soul\'s, each spirit a variation of it). Sealed state: six spirits simultaneously — the permanent Spirit of Valariya (Aliya\'s deceased sister, the city\'s namesake, the anchor that makes the others possible) plus five summoned spirits, each one the spirit of a Valerian who in life pursued one of the five paths of the Emperor\'s aspects: one who embodied endurance through the Trial, one who embodied creation through the Forge, one who pursued Perfection through the mind, one who embodied Choice through the heart, one who embodied Evolution through the body. Each deepens as Aliya encounters those whose lives traced that path. Unsealed state: five primal aspects of Irane\'s own nature — the Trial (endurance), the Forge/Iris (creation), Perfection (Arai\'s Mind imprint), Choice (Hope\'s Heart imprint), Evolution (Zoe\'s Body imprint). The unsealed aspects do not draw on the dead; they draw on what built the Emperor himself.',
    },
    notes: 'Aliya Irane Hallow — the middle name Irane marks her attachment to Irane\'s Will (entered the lab; bound to the Will architecture through the Spirit aspect). The Spirit core she holds is why she can see the spirits of dead Valariyans: when Kazemi absorbs a Valariyan\'s mana at death and returns their life and death force to the Pillars, the spirit-residue (the experiential impression left by a consciousness that has finished its path) remains in the architecture of Irane\'s Will. Aliya, as the Spirit, perceives this residue. The Valariyan dead do not simply disperse — they leave an afterimage she can access. This connects to the Valariyan covenant: cores go to Kazemi at death, spirits persist as accessible residue through Aliya.\n\n**[Facility Arc — Part 3, Childhood]** Age 6 when captured in the destruction of Miho Frame\'s resistance camp, alongside her father Paul Hallow (killed) and older sister Valariya. Singled out by 8 personally, without explanation, and given to Cai (secretly Arai) to raise and train rather than trained directly. Went through the Consa house\'s childhood devotion-conditioning and emerged completely devoted to 8 as her god — the only one of the core group of children whose faith was never shaken. Cai/Arai captured a rare, fully-merged Alma-Spirit hybrid "true Devil" specifically to give her an interesting core to work with, and 8 built her first tool/beast hybrid — "**Soul\'s Anchor**" — from it: the precursor to the Anchor and Soul\'s she carries as an adult, already capable of capturing a defeated Spirit\'s tool or an Alma\'s beast form. Aliya came to see Cai as the mother she never had. It was Aliya, exploring the Great Library Tree with Valariya, who found the second half of the hidden manuscript that names 8 "the Emperor" — the book Pandro had deliberately split and hidden to keep out of general circulation.',
  },

  {
    id: 'valariya',
    name: 'Valariya',
    house: 'kazemi',
    role: 'Aliya\'s older sister · The city\'s namesake',
    epithet: 'The One Valariya Was Named For',
    status: 'deceased',
    location: 'Historical (Valariya)',
    importance: 3,
    description:
      'The older sister of Aliya Hallow — and the person the city of Valariya was named after. She died before the city reached the form it holds today. Irane named the city for her.\n\nAliya carries her sister\'s spirit permanently — what Aliya calls the Spirit of Valariya, the one constant spirit that never leaves her, is not the abstract spirit of a place. It is her sister. Every Valariyan who feels an instinctive pull to protect Aliya is responding to the weight of this specific person, not a concept.\n\nAliya has never corrected anyone who thinks the Spirit of Valariya refers to the city. The city and her sister are, to her, the same thing.',
    notes: 'Aliya\'s older sister. Deceased before Valariya\'s current form was established. The city carries her name. Aliya holds her spirit as the permanent sealed spirit — the first of the six. The quote Irane said to Aliya after her death: "We often forget the faces of those we loved. But we will never forget the feelings we felt when we were with them. That is what it means to carry the spirit of the dead with you."',
  },

  {
    id: 'dokia_caedus',
    name: 'Dokia Irane Caedus',
    house: 'kazemi',
    role: 'The Strongest of the Valariyan Heads · Head Doctor of Valariya · Head of Agriculture & Food Production · Right Hand of Zoe Kazemi',
    epithet: 'Life Bearer (sealed) · The Reaper (unsealed) · The Cursed Eye',
    status: 'active',
    location: 'Valariya',
    importance: 4,
    _dataRev: 1,
    description:
      '**How She Came to the Facility**\n\nDokia Caedus did not enter Minia\'s facility voluntarily. Her stasis — the condition Pandro Lexan was assigned to study during the decade leading to 8\'s awakening — originated in an event during the arc when Arai, Hope, Zoe, and Mira were placed into younger bodies through the Primal vessel-transfer system.\n\nDuring that arc, Sith Caedus — Combat Path instructor at the Grand Mana Academy and teacher of Zoe and Nina Nexal — was forcibly placed into the body of Dokia, then a child. **Sith and Dokia are two entirely separate people.** The vessel-transfer system works through cores: a corporeal being\'s core — the seat of their consciousness and mana — is forced into a prepared human body. The human\'s own core and consciousness remain in the same body until one overrides the other. In normal vessel-transfer, the incoming core asserts dominance and the human consciousness is displaced or erased. Sith\'s core was forced into Dokia\'s body through this mechanism; Dokia\'s own consciousness was still present.\n\nWhat happened next was unprecedented. Sith chose not to assert dominance. She had lost a child before to this exact process — a prior forced placement she could not refuse, where the human consciousness was displaced and the child died from the experience. She was not going to let it happen again. She chose to lose the assertion struggle deliberately: she did not press her core forward, did not override Dokia\'s consciousness, did not claim the body. She held her core back.\n\nThe result was a deadlock neither force had ever produced before: two cores in one body, neither dominant, neither expelled. Dokia\'s body entered a deep stasis — not death, not sleep. No aging. No cellular decay. No warmth. No response to any stimulus. The body in total suspension with both consciousnesses preserved inside it, both intact, neither active. **Dokia remained Dokia throughout — her mind and self unharmed, suspended rather than overwritten.**\n\nMinia\'s forces acquired Dokia through the Consa network in the aftermath of the Academy attack. Minia studied the stasis for the full decade before 8\'s awakening — it was the only case she had ever encountered of a vessel-transfer that neither completed nor failed. It was also the reason Sith Caedus survived: her core remained preserved inside Dokia\'s suspended body until Dokia eventually woke. When the stasis broke, both Sith\'s core and Dokia\'s consciousness separated and resumed independently — two separate people, each restored to themselves.\n\n**The Emperor\'s Strongest Head**\n\nDokia Caedus is the strongest of the five Valariyan Heads — and a special case. Unlike the others, who received their connection to the Emperor\'s will at a defined moment in life, Dokia had it placed in her as an infant on Orius. The Emperor\'s death — the cumulative death force of every version of himself that has ever died — was deposited in her at birth.\n\nIn **sealed state**, she carries a scythe as her weapon. The sealing is deliberate: she is so capable in this state that she nerfs herself to make meaningful combat possible. The power channels through her life aspect, and her beast — **Cycle**, a dragon made of living wood, flowers, moss, and life energy — supports her. Her primary ability is healing, but not conventional healing: she can see all the ways an individual is going to die or sustain damage before it happens. She doesn\'t treat injuries after they occur — she reads the death-trajectories of future injuries and intervenes before they manifest. She uses nature magic and Life/Death magic derived directly from Irane\'s core. The **curse**: she always sees death — not how people already died, but how they *would* die. Every person she looks at carries a vision of their eventual mortality.\n\nIn **unsealed state**, Cycle sheds its living exterior to reveal a skeletal dragon structure. The scythe becomes a sword — the ultimate instrument of death. She wields Irane\'s accumulated death in full: a profound and terrifying precision for ending life. One cut from the unsealed blade is enough — anyone who truly believes they died in the experience she inflicts *does* die. She can make enemies relive the deaths of everyone they have killed. The blade accumulates life force from everything it kills in its sealed (tree/dragon) form and stores it in its living structure; when those reserves are exhausted, it converts to death force — making it an apex weapon that cannot be wielded at all without having experienced true death firsthand.\n\n**The Cellular Death-Force Cycle — Why Dokia Exists**\n\nEvery cell\'s core requires two sides of an exchange to produce mana: life force going in AND death force cycling through. The exchange is not one-directional — you cannot have mana production without the cellular renewal that death force enables. Without death cycling through the cells, they accumulate static mana that does not refresh. The system locks. Dokia holds the death-force side of this exchange. She IS the reservoir that Irane\'s cellular mana production draws on for renewal. Each heartbeat that Hope initiates draws on the death-force that Dokia holds, completing the exchange that allows the next cycle. The more Irane fights, the more mana is produced, the more death-force cycles from Dokia\'s reserve.\n\nHer always-seeing-death ability is the sensory expression of this: she perceives the death-force potential in every living thing — the trajectory of their cellular cycle toward its eventual completion. She does not see how people *have* died. She sees how the death-force in them *will* complete its cycle. In unsealed state — when she releases the accumulated death-force of all the trial deaths — she forces the complete cellular exchange through a target simultaneously. Every cell in the target undergoes the death-cycle at once. That is the mechanism behind the unsealed blade: one cut, and if they believe they died, the cellular completion happens because she has forced it.\n\nShe serves as right hand to **Zoe Kazemi**, is head doctor, and personally manages Valariya\'s agriculture and food production.\n\n**What He Said**\n\n*\"Most see death as an end to life. But it is the opposite — it is the completion of it. All things must die in order to live. Even you had to die first to even begin to live. Parts of you die endlessly — day by day, cell by cell. You are alive because of it, no?\"* — Irane, to Dokia',
    weapon: {
      name: 'Transition',
      type: 'Scythe / Sword — Ascended Class (Life-Death Passage)',
      description: 'The blade of passage. In sealed state: a scythe — the traditional instrument of the death-force Dokia regulates, wielded with life and nature mana for extraordinary healing and life-extension. In unsealed state: the scythe transforms into a sword — the ultimate instrument of death, releasing the accumulated force of Irane\'s 37.2 trillion trial deaths in full. Named Transition for its precise function: it facilitates the movement between states — from life to death, from dying to completed, from potential to final form. One cut from the unsealed blade is sufficient. The outcome depends on what the target believes: if they truly believe they died in the experience the blade inflicts, the cellular death-cycle completes — because Dokia has forced the full exchange through them simultaneously. The blade does not kill through force. It kills through completion. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'Cycle',
      type: 'Dragon — Life/Death Dual-State (Sealed: Forest · Unsealed: Skeletal)',
      description: 'In sealed state: a living dragon of wood, flowers, and growing things — the physical manifestation of the Emperor\'s life force, used for nature magic and extraordinary healing. In unsealed state: the living exterior falls away to reveal a skeletal dragon of pure death force — the Emperor\'s accumulated deaths given form. The transition is irreversible mid-battle; once unsealed, Cycle cannot return to its living form until the engagement ends. Cycle\'s name reflects its function: the full rotation of life into death and death into life — the biological cycle that Dokia regulates within Irane\'s cellular system.',
    },
    notes: 'Facility Arc, Part 5: the infant body kept in stasis at Minia\'s facility was ended by Irane in front of Zoe, without warning — a mercy rather than a cruelty by his own accounting, since no life or death force had ever flowed through her since Sith\'s core first entered the vessel. Zoe struck him repeatedly for it before Arai forced the point home. Later carried to term as a fully-formed core by Zoe, alongside Pandro\'s.',
  },
  {
    id: 'urial_ferran',
    name: 'Urial Irane Ferran',
    house: 'kazemi',
    role: 'Commander of the Royal Empiric Guard · Enforcer of Valariya · 2nd Strongest of the Valariyan Heads · Right Hand of Nighla Kazemi',
    epithet: 'The Iron Will · The Enforcer · The Man of Iron',
    status: 'active',
    location: 'Valariya',
    importance: 3,
    _dataRev: 1,
    description:
      'Urial Irane Ferran was Valariya Hallow and Dio Ferran\'s son — conceived during the two months Irane bought his mother against the burn of his own rare core, born close enough to term that Gran-Gran called it the most ordinary of the pregnancies surrounding him. He never lived past infancy in any conventional sense: his core became the tenth and final piece of Arai\'s seal, given at the moment of Valariya\'s own death at the Pillars, the love of a grandmother closing out a design she never knew was still one core short. What follows is not the story of a child who grew up. It is the story of what Irane built from that core afterward — a purpose-built body, in the same way every failed trial candidate Enari ever collected received one.\n\n**Enari\'s Role — The Collector**\n\nEnari was not only Irane\'s trial opponent. He was designed as a collector: the element of last resort when all other systems fail, his secondary function is to find and preserve powerful cores that the Emperor Drive trial filters. The cores of those who attempt the trial and fail are not lost — they are stripped of personal will and preserved as pure core-entities, their elemental architecture intact. Enari collects them. Urial gives them form.\n\nIn **sealed state**, Urial exists as a human figure with a single suit of armour following him at all times. This armour is the first body Irane built for him — the template for what follows. The collective of failed trial candidates are held within him, each as a pure core-entity. He manifests them not as reflections of who they were, but as **purpose-built bodies optimized for what their core is**: an ice-core candidate receives a body designed to maximize ice mana production and ice-technique expression; a Time-core candidate receives a body optimized for Time-technique execution; a lightning-core candidate receives a body built for lightning-speed and discharge. The body is not a resurrection. It is the correct physical form for that core — the form the candidate\'s original body may never have been suited to.\n\nIn **unsealed state**, Urial abandons human form entirely and reveals himself as what he truly is: a command nexus. Every stored body can be summoned and deployed simultaneously, each remotely directed, each amplifiable for the specific situation. He becomes a one-man army where every soldier is a core operating at peak elemental expression — no ego, no hesitation, pure function. The army grows with every failed trial. As more people attempt the Emperor Drive and fall short, Urial becomes stronger.\n\n**The Nighla Connection**\n\nNighla synthesizes gathered components into their optimal final form. Urial gives cores their optimal final body. The principle is identical: take what exists and resolve it into the most complete expression of what it is. Neither accepts half-measures. Neither builds drafts. What they produce is always the finished thing — the form that requires nothing further added. They are the architecture of completion in the Kazemi system: Nighla closes the creation cycle; Urial closes the formlessness of preserved cores.\n\nHe serves as Commander of the **Royal Empiric Guard** — the highest tier of defensive force in Valariya and the strongest unified squad in the world — and is the right hand of **Nighla Kazemi**. Within Valariya\'s internal structure he is simply called "the Enforcer."',
    weapon: {
      name: "Kazemi's Flesh",
      type: 'Living Armour — Ascended Class',
      description: 'The living armour of Irane Kazemi, reconstructed and given to Urial. Kazemi\'s Flesh is not simply armour — it is the skin of the Emperor himself: the biological architecture of a body that has died and returned 37.2 trillion times, each return adding new cellular resilience, new elemental resistance, new layers of near-indestructible material. What protects Irane at the cellular level now wraps Urial. The armour grows with him, integrates with the cores he commands, and cannot be destroyed by any single element because it has already experienced and survived every element that exists. It is the flesh of a being who cannot be permanently killed — worn as the outermost defence of the man built to house the Emperor\'s dead. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'Unity',
      type: 'Phoenix (Elemental Being Form — Beats Class) — Armour Collective',
      description: 'Not a single beast but a collective commanded through Unity\'s armour-class form: the pure cores of all who attempted the Emperor Drive or Emperor\'s Will trials and failed. Each is given a purpose-built physical body optimized for their core\'s elemental type — not a restoration of who they were, but the form their core was always suited to. Personal will removed; core architecture intact. Urial contains and commands all of them, deploying them as a precision army where each soldier is a specific elemental type operating at maximum expression.',
    },
    notes: 'Son of Valariya Hallow and Dio Ferran; his core completed Arai\'s seal at the moment of Valariya\'s death. See id: valariya_hallow, id: dio.',
  },
  {
    id: 'pandro_lexan',
    name: 'Pandro Irane Lexan',
    house: 'kazemi',
    role: 'Head of Magic & Education in Valariya · Right Hand of Summari Kazemi · Living Catalogue',
    epithet: 'The Living Library · Keeper of the Fifteen · Brother of the Architect',
    status: 'active',
    location: 'Valariya — The Undying Archives',
    importance: 3,
    _dataRev: 2,
    description:
      'Pandro Lexan carries the Consa name on neither document nor introduction — though his father was **Namo Consa**, patriarch of Clan Consa during the Earth operations period. His mother was of the Lexan line: not Primal, not of standing within the clan. He took her name. In Consa culture, claiming the mother\'s name rather than the father\'s was a declaration of which inheritance you accepted. The clan treated this as confirmation of his lesser status. He left.\n\nHe arrived at the Grand Mana Academy as a child of approximately eight, roughly eight years after the Fest, and he was not welcomed. The academy\'s Elder-Sages acknowledged him and occasionally told him to keep going when he looked like he would stop. That was all. It was enough.\n\nHe grew up in the Library. Not a great one — a working one, full of catalogues, cross-referenced indices, and the particular silence of people who have decided knowledge is more important than comfort. He learned to read spells before he learned to cast them. He learned what a spell *was* before he learned what it felt like. This is not the usual order. Most practitioners never reverse it.\n\nPandro cannot use Techniques. This is structural, not a limitation of willpower or training — the Spell and Technique domains occupy separate sides of the Will architecture, and his nature runs along the Spell axis. He is not incomplete. He is precisely one thing.\n\n**The Fifteen**\n\nThe Fifteen are not people. They were never people.\n\nThey are spirits formed from Irane\'s own mind — born from the internal universe he built over centuries to contain and organise everything he knew. Every spell the Emperor ever learned, catalogued, refined, or discarded was stored somewhere in that internal world. At sufficient density, knowledge accumulates will. The Fifteen crystallised from that density — each one a complete catalogue for one element at Sage-tier (Level 9) comprehension, given form, voice, and opinion by the weight of what they hold.\n\nWhen Irane recognised what they were, he gave them to Pandro. Not because Pandro was powerful. Because Pandro was the one person the Emperor had ever met who could hold a mind full of someone else\'s knowledge without it consuming him. He had been doing exactly that his entire life.\n\nEach of the Fifteen carries the name of her element:\n**Pyra** (Fire) · **Aqua** (Water) · **Terra** (Earth) · **Aeva** (Wind) · **Volta** (Lightning) · **Glacis** (Ice) · **Viva** (Life/Nature) · **Mortia** (Death) · **Umbra** (Darkness) · **Lumis** (Light) · **Spatia** (Space) · **Tempora** (Time) · **Psiris** (Mind) · **Gravia** (Gravity) · **Resona** (Sound)\n\nThey have opinions. They have preferences. They can veto. Pandro does not command them — he negotiates, argues, and occasionally loses. The dynamic is less \'weapon and wielder\' and more \'librarians who have decided their archivist needs supervision.\'\n\n**The Ability**\n\nPandro summons the **Grimoire** (Kazemi\'s Grimoire) — a physical spell book that is Mono\'s anchor in the physical world and the vessel of Irane Kazemi\'s complete spell archive. When he opens it, it lands on a single element: one of the Fifteen steps forward, and Pandro has access to her complete catalogue for that element for the duration. He cannot choose which element opens. The randomness is structural. In **sealed state**, one of the Fifteen is present; the others are accessible only through the Grimoire\'s index. The Grimoire\'s contents are visible only to Pandro — those who open it without his bond find the pages blank.\n\n**The Weight of the Archive — Pandro\'s Restraint:**\nSealed state places a natural constraint on Pandro: he can only access the spells the active elemental spirit recommends. Each of the Fifteen has opinions about which spells should be cast, and they guide rather than obey — they suggest upward through the catalogue, and the more powerful the spell they recommend, the more of Irane\'s mana Pandro must draw on to execute it. This is where the danger lives. The Emperor\'s mana is not ordinary mana. It is primordial, all-pillar, concentrated — and using it is addicting in a way Pandro was not warned about and cannot fully describe except to say: the more power he draws, the more he wants to draw more. A Level 6 spell satisfies briefly. A Level 7 feels like the world opened. After Level 7 he stops thinking clearly about whether the next one is necessary. He IS the constraint in the system — the man who must restrain himself in the middle of access to the most complete spell archive in existence, drawing on the most powerful mana source available, with fifteen voices in his head recommending more. His battle is not with enemies. It is with the Grimoire itself. He loses sometimes. He keeps track of when.\n\nIn **unsealed state**, all Fifteen manifest simultaneously through Mono. The volume of knowledge available becomes the Emperor\'s total spell archive split across fifteen minds — no single consciousness carrying more than its share. In practice, Pandro can access every element at once, cross-reference in real time, and construct combinations no single-element specialist could conceive. The tradeoff is that all fifteen are also talking at once. Pandro describes it as the only time he cannot think quietly.\n\nPandro himself is a **Magescrafter** (Level 7) by his own core. Through the Fifteen he effectively operates at Sage-tier in any single element, and in unsealed state at the Emperor\'s own knowledge ceiling. He serves as right hand to **Summari Kazemi** and heads all magic education and licensing within Valariya.\n\n**The Summari Connection — Ceiling and Construction**\n\nSummari builds spells from the Irane material. Pandro holds the ceiling of what those spells can be.\n\nEach of the Fifteen carries a Level 9 complete catalogue for one element — every known spell at maximum comprehension, sourced from the Emperor\'s own internal archive. When Summari reaches into the Irane material and assembles the components for a spell, she is working toward a form that one of the Fifteen already knows is the fullest possible expression of that element\'s mana. Pandro\'s catalogue is her reference. Without it, she constructs without knowing the best version of what she is building. With it, she knows the completed spell before the first component is pulled.\n\nSummari creates; Pandro\'s Fifteen hold the fullest expression of what creation can achieve. He serves her formally in the Kazemi hierarchy — but the relationship runs both directions. Her construction gives his catalogue a living expression in the world. His catalogue gives her construction a target worth reaching.\n\n**— Story Arc —**\n\n**[Grand Mana Academy]**\nPandro arrived at the Academy as a child of approximately eight, roughly eight years after the Fest. He grew up in the Grand Library and trained in Arai\'s class alongside Hope, Zoe, Mira, and the others — learning to read spells before casting them, in a reversal of the usual order.\n\n**[Academy Attack and the Facility]**\nPandro was among the students extracted during the Academy attack and taken to the facility. He endured the facility period as a subject; after the Escape he joined Irane\'s cause, eventually entering the Will architecture as the Spells aspect and binding himself to Summari\'s service. His half-sibling connection to Minia Consa — same father, Namo Consa — was never disclosed.\n\n**[Parts 2.1/2.2 — "Arrival of the Devil" Arc]**\nMinia assigned Pandro as observer for the Consa Special Unit 8 operation. He was the primary on-the-ground witness to 8\'s debut in open battle at the Kazemi Primal Capital. Minia monitored the entire assault through Pandro\'s senses — extending her perception through him while he watched 8 move methodically through the city, from the detonation of Rampaging Cores to Dragon\'s Roar at the gate and Death\'s Rampage among the fallen.\n\n**[Facility Arc, Part 3]**\nPromoted from lab observer to battlefield captain, and later "the Champion\'s Sage" in secret — the first person to teach and be taught "Kazemi\'s Art," a category of spellcraft distinct from anything the Primals or Ascen had ever used, learned directly from 8. Never needed a formal choose-to-serve contract; 8 recognized he\'d already offered his core subconsciously, through pure devotion, and simply began training him. The single most devout believer in the arc, and the one whose devotion carries real moral cost: he is also the man who discovered Sofia Prescian\'s secret manuscript on 8 as "the Champion" and "the Emperor," and — despite his own faith — made the deliberate, dangerous choice to control how much of it reached the world. He printed and circulated only the first half anonymously, arranged for Criya Sin to appear to have "found" it rather than himself, and hid the unfinished second half deep in the Great Library Tree specifically to keep it out of Minia\'s hands. Fell genuinely in love with Sofia the night she showed him her private writing in full — the first time anyone had seen and accepted the whole of her devotion without judgment — and, after Nevir Revyn publicly forced the issue in front of both houses\' leadership, married her at 8\'s own direct order, taking the Prescian name. His residual loyalty to Arai, Hope, and Zoe — the women who actually raised him before Minia ever controlled him — is the one thing in him that never fully accepted Minia\'s framing of them as traitors who "sealed the Champion" out of jealousy.',
    weapon: {
      name: 'Grimoire — Kazemi\'s Grimoire',
      type: 'Spell Tome — Ascended Class (Complete Archive)',
      description: 'The physical anchor of Mono in the material world and the vessel of the complete spell archive of Irane Kazemi — every spell symbol, every elemental combination, every technique notation across all 15 elements at Sage-tier comprehension. Its contents are not displayed passively: what appears in the Grimoire\'s pages is determined by Pandro and by how much access he permits. In sealed state, one elemental catalogue opens at a time — the page Pandro reaches for may not be the page the Fifteen decide to show him. In unsealed state, all fifteen catalogues are accessible simultaneously through Mono\'s full form. The Grimoire cannot be read by anyone but Pandro: those who open it without his authorization find the pages blank — the symbols exist but are legible only through the bond he holds with Mono. Classified: Ascended class weapon, created by Irane Kazemi personally.',
    },
    beast: {
      name: 'Mono',
      type: 'Phoenix (Elemental Being Form) — Spirit Vessel of the Fifteen',
      description: 'Mono is the phoenix form that houses the Fifteen — fifteen spirits born from Irane\'s internal universe, each crystallised from the accumulated density of one element\'s knowledge at Sage-tier (Level 9) comprehension. In sealed state, Mono manifests one of the Fifteen at a time through the Grimoire. In unsealed state, all fifteen manifest simultaneously through Mono\'s full phoenix form — splitting the total volume across fifteen minds. The Fifteen are: Pyra (Fire), Aqua (Water), Terra (Earth), Aeva (Wind), Volta (Lightning), Glacis (Ice), Viva (Life), Mortia (Death), Umbra (Darkness), Lumis (Light), Spatia (Space), Tempora (Time), Psiris (Mind), Gravia (Gravity), Resona (Sound). They are conscious, opinionated, and hold veto power over specific spell use.',
    },
    powers: [
      { name: 'Lava Stream', type: 'Personal Combination Spell (Fire-Wind-Earth)', description: 'His own signature combination before ever seeing 8 fight — three pillars braided into a single stream, the most he could manage at the time and something he was quietly proud of, until watching 8 fuse all fifteen made the achievement feel very small.' },
      { name: 'Fire-Light Magic: Blazing Aura', type: 'Combination Spell (Fire-Light)', description: 'Wraps an attacker in flame while extending a barrier of pure energy mana over an ally in the same motion — used fighting back-to-back with Sofia Prescian, mixing her earth-based close-combat technique with his own spellwork.' },
    ],
    notes: 'Paternal half-sibling of Minia Consa — same father (Namo Consa, Clan Consa patriarch), different mothers. Pandro\'s mother was of the Lexan line; he took her name, was treated as lesser within the clan, and left. Neither has publicly disclosed the connection. The implications of their shared bloodline — the man who catalogues the Emperor\'s spells and the woman who created the conditions for the Emperor\'s existence — are not recorded in any official document. Namo Consa was the Clan Consa figure who received Toma More\'s true secret about the Kazemi Trial and directed Consa\'s Earth core-cultivation experiments.',
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
    status: 'active',
    location: 'The PIT — Ascen experimentation site (sentenced)',
    importance: 1,
    coreType: 'Nature-Energy; harmonic-dark',
    description:
      'Son of **Historical Niro Vane** and half-brother of **Ember Vane** (later Ember Osiro) — same father, different mothers. Nuro was born 4 years before Ember, from Niro\'s official wife. Ember was born of **Artic Osiro**, a captured Osiro clan woman forced into Niro\'s household. Nuro survived the Great Stasis and the Age of Chaos, though not as a frontline figure — his father held the Spear and led the war. After Historical Niro\'s death at Irane\'s hands during the 1-Year Crusade, Nuro rebuilt the Vane bloodline across the Age of Lawlessness and into the Grand Table era. He named his own son **Niro** after his father — a declaration that the ambition had not died with the man. The Year 500 antagonist Lord Niro Vane is his son.\n\n**— Story Arc —**\n\n**[Parts 2.1/2.2/2.3 — "Arrival of the Devil" Arc]**\nAppointed by his father, **Historical Niro Vane** — who was still leading the war at this point — to command the 100M Ascen assault on the Kazemi Primal Capital, the location leaked by Toma and Namo Consa. Motivated in part by the shame of Ember\'s defeat of him, Nuro was promised the Arke twin weapons as reward for success. He commands Tenza at the main gate (80M soldiers, right flank) and Tola\'s 20M tunnel force (left flank). His own core is Nature-Energy, harmonic-dark — mana that curdles rather than burns, expressed as **Mana Poison Stream**, a corrosive toxin technique entirely his own, no relic required.\n\nWhat he carries beyond that core are two **cursed objects** — sealed tokens his father pressed into his hand before the campaign, capable of channeling both dark and holy magic outside the wielder\'s own natural alignment. The Ascen classify this as treason on sight, even to study: the Arke twins\' entire structure of magic rests on the principle that power of that order is earned through contract, not stolen through relic — it is, in miniature, the exact borrowed-authority method the twins themselves used to reach Level 10. A mortal replicating that shortcut is a threat the Ascen do not tolerate investigating, let alone using. Historical Niro\'s warning when he gave them over was explicit: "Using these is absolutely forbidden. You truly won\'t need them. But if you do use them, know that the pain and suffering you will feel will be absolute. Don\'t tamper with these unnecessarily, Nuro." He led with a confident grin — which disappeared the moment 8\'s Dragon\'s Roar detonated at the main gate.\n\n**[Part 2.4 — The Reckoning]**\nSurvived the mana-explosion climax, unconscious and near-dead, saved only because Tenza chose to protect him — not out of loyalty, but to ensure someone would answer for the defeat. Using the cursed tokens left him permanently marked: his right arm stained fully black, his left fully white, a visible, literal scar of the forbidden power he channeled outside his own alignment. Judged before his father, Azen Lucerne, and Elorah Seraph alongside Duki Navar and Olda Apolo. Humiliated by his newly introduced brother Axola, who mocked his defeat by name-checking his old loss to Ember and took his position leading the next attempt. Sentenced to the PIT.',
    notes: 'Poison ability (Mana Poison Stream) is his own core, not relic-granted. The 2 tokens are cursed objects from Historical Niro, framed via flashback to his father\'s warning immediately before use in Part 2.3. Permanently marked black/white on his arms from their use. Sentenced to the PIT in Part 2.4.',
    weapon: {
      name: 'The Two Cursed Tokens',
      type: 'Forbidden Relic — origin unrecorded',
      description: 'Sealed objects his father pressed into his hand before the campaign, capable of channeling both dark and holy magic outside the wielder\'s own natural alignment. Using them left him permanently marked — right arm stained fully black, left arm fully white — the visible, literal cost of borrowed power outside his own alignment.',
    },
    powers: [
      { name: 'Energy-Nature-Water Art: Mana Poison Stream', type: 'Personal Core Technique', description: 'A patient, time-costly poison built from his own Nature-Energy, harmonic-dark core — strips an opponent\'s mana output and weakens the body in the same stroke. Water mana added to carry the toxin faster through a wound. Effective only against a specific mana signature; useless against anyone outside it, as Sofia proved by shrugging it off entirely.' },
      { name: 'Demonic and Holy Arts (attempted)', type: 'Forbidden Class — channeled via the Two Cursed Tokens, not a personal ability', description: 'Summoned Duki Navar and Olda Apolo into their permanently-merged Devil/Angel forms by slamming the tokens into the ground. Not his own power — borrowed, forbidden, and paid for in full.' },
    ],
  },
  {
    id: 'axola_vane',
    name: 'Axola Vane',
    house: 'vane',
    role: 'Son of Historical Niro Vane · "Reincarnate of Aevum" · Presumed Strongest Heir',
    epithet: 'The Reincarnate of Aevum',
    status: 'active',
    location: 'Kazemi Primal Capital — newly assigned to the next assault',
    importance: 2,
    coreType: 'Energy-Air; harmonic-dark',
    description:
      '**Historical Niro Vane\'s** third child, alongside Ember and Nuro — introduced when Nuro\'s catastrophic failure at the Kazemi Primal Capital left the family needing someone else to send. Axola carries the title **"Reincarnate of Aevum"** — House Vane\'s honorific for whichever heir is judged the strongest of their generation, given to Niro himself before he took the throne. It is both an honor and an assignment: the one who carries it is the one expected to lead.\n\nHe volunteered himself in front of Azen Lucerne and Elorah Seraph, framing Nuro\'s defeat as a failure of competence rather than a failure of scale — ninety million dead Orians, in his read, was not proof the enemy was unbeatable, only proof Nuro had mismanaged the resources he was given. He asked for three of the surviving instruments (Nuro, Tenza, Tola) to be placed under his command instead. Niro granted it.\n\nHis cruelty is casual rather than performative. He humiliated Nuro physically in front of their father — a boot on the back of the head, pressed hard enough to crack the ground — and verbally, comparing this defeat to Nuro\'s earlier loss to Ember: he does not let a person forget a loss once he has it to use against them. He clashed immediately with Tenza, whose competence he respects and whose defiance he enjoys provoking. His stated interest in **Arai** ("I was so looking forward to making Arai my bride, she was so... perfect!") and his open threat against **Nina** — Tenza\'s own younger sister, held as leverage the moment Tenza fails him again — mark him as a more personally invasive threat than Nuro ever was, aimed directly at the Nexal family Tenza now leads.\n\n**The Two-Year War Against the Champion**\n\nAxola\'s engagement with 8 escalated into a full two years of calculated, sustained war rather than a single confrontation — a deliberate strategy of consecutive attacking waves meant to drain the Champion by sheer accumulation, brilliant on its own terms and doomed regardless, since Axola had no way to know the scale of what he was actually fighting. He met 8 five times across the war and lost every time, each defeat a humiliation rather than a death: 8 refused to kill him, choosing instead to embarrass him in front of his own forces, over and over, addressing him only as the latest in a line of “vermin” sent by his father to do what he wouldn\'t do himself. In their most cited exchange, 8 fought him using nothing but his wings, arms crossed the entire fight, and told him plainly that not once, across five meetings, had a single encounter between them ended in Axola\'s favor.\n\nThe humiliation was the point. 8 never removed Axola from his position and never let the war end quickly — every drawn-out, survived, publicly humiliating loss weakened the Orian war effort\'s morale while feeding the Champion\'s own legend at home, and Axola\'s pure, personal hatred of 8 made him careless in exactly the ways 8 needed him to be. By the war\'s end the Orian forces were structurally crippled rather than destroyed outright — a weakening, not an extermination, consistent with 8 positioning his own people to win the war themselves rather than winning it for them.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Historical Niro Vane\'s third child (with Ember and Nuro). Core: Energy-Air; harmonic-dark. Carries the "Reincarnate of Aevum" title — given to whichever Vane heir is judged strongest of their generation; Niro held it before taking the throne. Introduced in Part 2.4 replacing Nuro as field commander alongside Tenza and Tola. Open threat against Nina Nexal (Tenza\'s sister) as leverage — ties directly into Nina\'s established "major future player, fate unresolved" status. See id: nina, id: tenza.',
  },

  // ── Orian Era — Matriarch Clan Origins ─────────────────────────────────
  {
    id: 'artic_osiro',
    name: 'Artic Osiro',
    house: 'osiro',
    role: 'Captured Osiro Clan Woman · Forced Wife of Historical Niro Vane · Mother of Ember',
    epithet: 'She Who Was Taken · The Forgotten Origin',
    status: 'historical',
    location: 'Historical (Terra — Vane household)',
    importance: 3,
    _dataRev: 1,
    coreType: 'Light; harmony-light',
    description:
      'A woman of the Osiro clan who was captured by the Vane household long before the Fest massacre. She pleaded for her life rather than be killed — and her fate was worse: she was made Historical Niro Vane\'s secondary wife, a political asset. She bore one child, Ember, before her body could no longer sustain further pregnancies. After that she lost whatever social standing the role had provided and was reduced to servant work in the Vane household — a fate dictated by a world that measured women\'s worth by biological utility.\n\nShe never escaped. She watched the Fest happen — the destruction of her own clan\'s alliance — from inside the house that orchestrated it. Whether she knew, as she held her newborn daughter, that the world Ember was entering had just been made worse by Ember\'s own father — is unrecorded.\n\n**The inheritance:** Ember did not know her mother\'s clan name was Osiro when she was young. By the time Ember understood what it meant — the clan that had been destroyed, the name the Vane dynasty held hostage, the lineage wiped from public history — she was already in the facility. When she emerged, the name she took was not borrowed. It was her mother\'s. **Artic Osiro → Ember Osiro.** The defiance was an inheritance.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Ember\'s biological mother. Light; harmony-light core. Captured from Osiro clan. Forced wife of Historical Niro Vane. Could not bear more children after Ember. The "Osiro" name Ember reclaimed is literally Artic\'s clan name — Ember\'s by birth right through her mother.',
  },
  {
    id: 'dima_apolo',
    name: 'Dima Apolo',
    house: 'apolo',
    role: 'Leader of the Apolo Clan · Protector of the Tree of Eden · Hope\'s Mother',
    epithet: 'She Who Hid the Path · The Space-Keeper',
    status: 'deceased',
    location: 'Historical (Orian era — Fest massacre)',
    importance: 3,
    _dataRev: 1,
    coreType: 'Space-ice; harmony-light',
    description:
      'The leader of the Apolo clan at the time of the Fest — the Spirit clan (Force-dominant, Celestial-aligned lineage) that served as the spatial intelligence arm of House Wov. Dima was Hope\'s mother. Her role was the clan\'s primary function: using Space magic to conceal and relocate the Tree of Eden from Lucerne clan hunters, ensuring Vraka\'s forces never pinpointed the sacred beast-weapon.\n\nShe led a clan that had lived under constant pressure for generations — the Apolo always knew the walls were closing, always knew the Lucerne clan was a step behind, always made the next move before the current one could be discovered. "Always make the right call" was not an abstract virtue in her household. It was operational doctrine.\n\nShe was killed during the Fest massacre. Her brother **Olda Apolo** betrayed her — and the entire alliance — to the Lucerne and Seraph clans, feeding them the Fest\'s location and timing. The reason was personal: he had been passed over for clan leadership in favor of his sister, and he had internalized the exact logic the wider world used — that a man should lead over a woman. He turned his resentment into information. Dima died in the assault she did not know was coming because of family.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Hope\'s mother. Clan leader of Apolo (Spirit/Space-ice). Killed at the Fest — personally by her brother Olda ("This is the result of leaders choosing you over me, sister"). Her brother Olda Apolo betrayed the alliance. The Space-ice core with harmony-light suggests precision over power — she chose concealment over combat. SECRET: Hope\'s father is Tola Ardent — a relationship Dima kept private and clan-unknown. Tola was present at the Fest and recognized Hope; he helped her and Zoe escape.',
  },
  {
    id: 'olda_apolo',
    name: 'Olda Apolo',
    house: 'apolo',
    role: 'Betrayer of the Apolo Clan · Bound Servant of House Seraph',
    epithet: 'The Brother Who Chose the System Over His Sister',
    status: 'active',
    location: 'Seraphel — House Seraph territory',
    importance: 2,
    _dataRev: 1,
    coreType: 'Space-fire; chaotic-dark',
    description:
      'Dima Apolo\'s brother — Hope\'s uncle. He fed the Lucerne and Seraph clans the location and timing of the final Fest, along with the internal structure of the four-clan alliance\'s defensive formation. The betrayal came down to a single fact: he was not chosen as clan leader. His sister was. He had grown up inside a world where the Alma and Spirit populations — shaped by the Arke twins\' cultural framework over generations — treated men as structurally superior. He chose to act on it.\n\nHis Space-fire core versus Dima\'s Space-ice core is the personality expressed through power: where she was precise and concealing, he was aggressive and burning. He had always chafed at what the clan valued — patience, discipline, invisibility. After the betrayal he was welcomed by the Seraph clan as a convert. House Seraph granted him **Grand Table Seat IV** — **Sova\'s Chain** itself, forged from the essence of Sova the Unbroken, personally bestowed by Selis Arke as reward. Not an echo, not a lesser weapon made in tribute: the actual chain, the actual seat. Clan Sovenne — Sova\'s own descendants — carried it for generations before their bloodline was spent as Arke-loyal shock troops and went extinct; the seat sat empty until Olda received it. He is not Sovenne blood. Accepting it was the reward and the leash both — Selis binds through covenant, and Olda has not been able to break a spoken promise since.\n\nHe still serves House Seraph directly, one of the more visible proofs that a defector can be fully absorbed rather than merely tolerated — the same absorption that later folded the remains of House Apolo itself into Seraph\'s client network under Elorah, binding his birth clan to the same patron he chose over his sister.\n\nHope\'s defining psychological wound — the fear of making the wrong choice — traces directly to this moment. Her uncle had made the wrong call. Her mother died because of it. The entire world she had known was destroyed because one man\'s wounded ego connected to a broken world\'s logic.',
    beast: {},
    weapon: { name: "Sova's Chain", id: 'sovas-chain' },
    gates: [],
    psyche: [],
    notes: 'Hope\'s uncle. Betrayer. Space-fire; chaotic-dark. Joined Seraph after the Fest — personally granted Grand Table Seat IV, wielding the actual Sova\'s Chain, not a substitute. The origin of Hope\'s fear of wrong choices. Active — available for use in the Earth arc (Part 2.3 onward).',
  },
  {
    id: 'exoo_navar',
    name: 'Exoo Navar',
    house: 'navar',
    role: 'Leader of the Navar Clan · Mother of Zoe · She Who Could Not Kill',
    epithet: 'The Peaceful Clan Head · She Who Valued Life Over Victory',
    status: 'deceased',
    location: 'Historical (Orian era — Fest massacre)',
    importance: 3,
    _dataRev: 1,
    coreType: 'Water; harmony-light',
    description:
      'Born outside the Navar clan — she took the Navar surname when she married **Tan Navar** (Life/Death; Harmony-Light), the previous clan leader. After Namma\'s death, the clan leadership fell to her. She was not a fighter in the traditional sense; she was a woman who believed in the weight of life and used every tool she had to avoid the necessity of ending it.\n\nShe led the Navar clan through years of relentless attrition — the Alma lineage that protected Clan Osiro and the Book of Time, hunted by Lucerne\'s forces just as Apolo was hunted by Seraph\'s. She raised six children. Five died before Zoe. Each death was attended. She never hardened. She mourned every one.\n\nAt the Fest, she fought **Duki Navar** (Life/Death-wind; harmony-light) — her brother-in-law, Namma\'s brother, who had chosen the other side. She got the upper hand. She hesitated. She could not deliver the finishing blow. Duki did not hesitate. As she died, he said: *"You always avoided the truth of this world even as it stared you right in the face. It\'s a kill or be killed world."*\n\nZoe watched this happen. She had a Life/Death-nature core. She perceived the moment of her mother\'s death more deeply than anyone else present. It was the first death she watched in real time. The child who hated violence experienced, in full, the consequence of refusing to commit it.\n\nExoo\'s "weakness" — her refusal to kill — was not a character flaw. It was a position. The world called it weakness and then demonstrated why it was right. Zoe will spend her story deciding whether the world was correct.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Zoe\'s mother. Took Navar surname through marriage to Tan Navar (deceased) — secret son of Toma More, though Exoo did not know this. Led Navar clan. Killed by Duki Navar (her brother-in-law) at the Fest when she hesitated to deliver the killing blow. Zoe\'s defining trauma.',
  },
  {
    id: 'tan_navar',
    name: 'Tan Navar',
    house: 'navar',
    role: 'Former Leader of the Navar Clan · Zoe\'s Father · Secret Son of Toma More',
    epithet: 'He Who Came Between — The Bridge',
    status: 'deceased',
    location: 'Historical (died before the Fest era)',
    importance: 2,
    _dataRev: 1,
    coreType: 'Life/Death; Harmony-Light',
    description:
      'Zoe\'s father and the previous Navar clan leader before Exoo. Died before Zoe was born — she never knew him.\n\nHis origin is a secret that neither he nor the Navar clan publicly acknowledged: his biological father was **Toma More** (Life/Death-Energy; Chaotic-Dark) — the Primal leader who had a relationship with a woman of the Navar clan during the period when the Ascen-Primal war was still at an even standoff. When Toma returned to lead the Primals after the war\'s balance shifted, he left the child to be raised by his mother in the Navar clan, under the Navar name. Tan never knew his father.\n\nHis core — Life/Death; Harmony-Light — carries the Life/Death element of the More bloodline expressed through his Navar mother\'s influence, arriving at a Harmony-Light alignment rather than the chaotic-dark of Toma\'s line. The chaotic-dark expression did not disappear — it skipped Tan and expressed two generations down in **Zoe Navar** (Life/Death-Nature; Chaotic-Dark). The More clan\'s chaotic-dark signature ran through Tan\'s bloodline invisibly and resurfaced in his daughter.\n\nHe became the Navar clan leader and married Exoo — a woman born outside the clan who took the Navar surname through their marriage. He died before Zoe was born. His brother **Duki Navar** would later betray the clan at the Fest, killing Exoo in personal combat.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Zoe\'s father. Secret son of Toma More — raised in the Navar clan under his mother\'s lineage. Core: Life/Death; Harmony-Light. The chaotic-dark of Toma\'s More bloodline skipped Tan and expressed in Zoe. Previous Navar clan leader before Exoo. Deceased before the Fest era. Brother of Duki Navar (the traitor).',
  },
  {
    id: 'duki_navar',
    name: 'Duki Navar',
    house: 'navar',
    role: 'Traitor of the Navar Clan · Bound Servant of House Lucerne',
    epithet: 'The Brother-in-Law Who Did Not Hesitate',
    status: 'active',
    location: 'Ashgard — House Lucerne territory',
    importance: 2,
    _dataRev: 1,
    coreType: 'Life/Death-wind; harmony-light',
    description:
      'Tan Navar\'s brother — Exoo\'s brother-in-law, Zoe\'s uncle. He fought on the side of the Lucerne clan during the Fest assault. He killed Exoo Navar in personal combat when she hesitated to finish him. His words over her dying body — *"You always avoided the truth of this world even as it stared you right in the face. It\'s a kill or be killed world"* — were heard by Zoe and became the defining phrase of her character arc.\n\nHis motivation follows the same pattern as Olda Apolo\'s: the world\'s framework rewarded men who were willing to commit what peace-oriented leaders refused to. He had watched Exoo lead the clan after Tan\'s death and never accepted a woman holding what he considered a male lineage\'s birthright. When the Lucerne clan approached with an offer, he took it.\n\nAfter the Fest, House Lucerne granted him **Grand Table Seat I** — **the Ruin Beast** itself, forged from the essence of Omegaruin Vael, personally bestowed by Vraka Arke as reward. Not an echo, not a lesser weapon made in tribute: the actual beast, the actual seat. Clan Vael — Omegaruin\'s own descendants — carried it for generations before their bloodline was spent as Arke-loyal shock troops and went extinct; the seat sat empty until Duki received it. He is not Vael blood. Receiving it was the reward and the leash both: accepting Vraka\'s gift bound him into Lucerne\'s direct service in the same motion.\n\nHe still serves House Lucerne, one of the more visible proofs that Azen absorbs defectors completely rather than merely using them — the same absorption that later folded the remains of House Navar itself into Lucerne\'s client network, binding his birth clan to the same patron he chose over his family.',
    beast: {},
    weapon: { name: 'The Ruin Beast', id: 'ruin-beast' },
    gates: [],
    psyche: [],
    powers: [
      { name: 'Dark Art: Decay of the Weak', type: 'Devil-state Combat Art', description: 'Fangs and claws run with a black, decaying liquid that rots anything it touches — deployed only in his fully-merged Devil state, where his natural Life/Death-wind, harmony-light core is overridden by the Ruin Beast\'s corrupted nature.' },
      { name: 'Devil Fusion (forced)', type: 'Forbidden Class — permanent Alma/Beast merger', description: 'One of "the most forbidden classes of arts" — an Alma fully and permanently merged with their Beast. Triggered by Nuro\'s two cursed tokens at the Kazemi Primal Capital assault; grows him to twice ordinary size with dark fur, serpent tail, and fanged jaws that decay all they touch.' },
    ],
    notes: 'Zoe\'s uncle. Traitor. Life/Death-wind; harmony-light. Killed Exoo Navar at the Fest. Joined Lucerne/Vraka — personally granted Grand Table Seat I, wielding the actual Ruin Beast, not a substitute. Active — available for use in the Earth arc (Part 2.3 onward).',
  },

  // ── Pre-Unix Historical Figures ────────────────────────────────────────
  {
    id: 'eva_osiro',
    name: 'Eva Osiro (Eve)',
    house: 'osiro',
    role: 'First of Humanity · Birth Daughter of Aeva · Purpose-Sent East · Mother of Three Wov',
    epithet: 'The First Woman · She Who Went East · The Living Counter to Selis',
    status: 'deceased',
    location: 'Historical (Orius — East, Seraphim Territory → Earth)',
    importance: 3,
    _dataRev: 3,
    description:
      'The first human in existence — born through Aeva (the new being inhabiting Arke\'s body) using Mana\'s grief as the creative force, drawing on the dissolved conceptual essence of Gaia and Cronus. Eva is not a being in the conventional emotional sense: she was formed for a purpose, structured like a tool given life — precise, mission-aware, and conscious in a way that was fundamentally unlike the beings around her.\n\nMana named her **Osiro** after a Terran lineage he respected — a surname before surnames were conceptualized. He named Adam **Wov** as a tribute. The naming was deliberate: it embedded them into the world\'s social logic before they could build any connection of their own.\n\n**Her mission:** Eva was sent east — into Seraphim territory, toward Selis Arke\'s domain. Whether this was planned by Mana or was an expression of her nature drawing on Gaia\'s counter-role against Selis is unrecorded. She encountered **Exco Wov** (Nature-Earth primary, Harmonic-Darkness core) — an Orian who understood what she was and chose to be her partner rather than her handler.\n\n**Her children:** Eva and Exco had three children on Orius before the Limbo escape: two daughters and one son. These three children — **Lyra**, **Mara**, and **Sael Wov** — accompanied Eve and her brother Adam to Earth with Gaia\'s three beast-aspects sealed in their hands. Their wills were eventually sealed into those weapons.\n\nEva died on Earth, aged and human, having lived the purpose she was made for. The Osiro surname she carried is the origin of all Osiro naming — reclaimed thousands of years later by Ember Vane (ember_hist) as an act of defiance against House Vane.',
    notes: 'Birth mother: Aeva. Creator/Father: Mana. Named by Mana after the Osiro Terran lineage. Her children with Exco Wov are Lyra, Mara, and Sael Wov. Note: Seth Osiro is Adam\'s son (with Dana Osiro) — not Eve\'s son. Old lore incorrectly assigned Seth to Eva; new lore corrects this.',
  },
  {
    id: 'exco_wov',
    name: 'Exco Wov',
    house: 'wov',
    role: 'Founder of the Wov Bloodline · Eve\'s Partner · Architect of the Limbo Plan',
    epithet: 'He Who Saw the Shape of It · The One Who Thought First',
    status: 'deceased',
    location: 'Historical (Orius — lived and died there)',
    importance: 3,
    _dataRev: 2,
    coreType: 'Nature-Earth (primary) · Harmonic-Darkness (secondary)',
    description:
      'An Orian of Nature-Earth primary with a Harmonic-Darkness core — a rare combination that gave him an unusual relationship with living systems: he could see how things connected, not just what they were. He encountered Eva in the east of Orius (Seraphim territory) and recognized immediately what she was: not a threat, not a curiosity, but a person shaped for a purpose she had not chosen, finding her own shape in the world regardless. Exco became Eva\'s partner.\n\nTogether they had three children on Orius — **Lyra**, **Mara**, and **Sael** — before the crisis that forced the escape to Limbo. He is the person who conceived the **plan to hide in Limbo**: seeing that the Ascen forces (Aevum\'s son Dulla Vane commanding) were actively hunting Primals there, and that the Primals\' most capable leader was Cith More — who had been told by Mana himself about a world called Earth — Exco reasoned that a crossing could be made if Cith could lead them there. He laid out the reasoning. He made the decision legible.\n\nExco did not go to Earth. He was not the one who opened the crossing — that act belonged to Cith More, using knowledge only Mana had given her. What Exco did was see the path when no one else had and trust Cith More enough to hand the plan to her.\n\nHe returned to leading the Wov clan on Orius. His Orius bloodline kept the living connection to Mother Nature — the Tree of Eden gravitating toward the Wov line through the accumulated weight of what they had carried: Eve\'s nature, their children\'s weapons, the memory of what Gaia\'s sub-beasts meant. He lived until natural death. The Wov clan he left behind eventually became House Wov of the Sol-Nexus.',
    notes: 'Exco did NOT sacrifice himself to open the Earth crossing. He conceived the Limbo plan; Cith More executed the Earth route (Mana had told her about Earth personally). Exco lived on Orius until natural death. His Orius-side line became House Wov. His children by Eva (Lyra, Mara, Sael) went to Earth with Gaia\'s sub-beasts.',
  },
  {
    id: 'adam_wov',
    name: 'Adam Wov (Adam)',
    house: 'wov',
    role: 'First of Humanity · Birth Son of Aeva · Purpose-Sent West · Father of Three Osiro',
    epithet: 'The First Man · He Who Went West · The Living Counter to Vrak',
    status: 'deceased',
    location: 'Historical (Orius — West, Vrak/Demons Territory → Earth)',
    importance: 3,
    _dataRev: 3,
    description:
      'The first man in existence — born through Aeva (the new being inhabiting Arke\'s body) using Mana\'s grief as the creative force, alongside Eva Osiro. Like Eva, formed from pure mana shaped into human pattern, drawing on the dissolved conceptual essence of Gaia and Cronus. Adam was not a man in the conventional emotional sense: he was a purpose-built being, structured and mission-aware, operating in the world with the clarity of something that knew exactly what it was for.\n\nMana named him **Wov** — a tribute to Exco Wov\'s line, linking the first man to the living world\'s most grounded bloodline.\n\n**His mission:** Adam was sent west — into Vrak Arke\'s territory, toward the Demons and Devils who operated under the Ferali contract system. He encountered **Dana Osiro** (Water, Air, Earth; Chaotic-Light core), leader of a regional Osiro clan. She recognized him for what he was and chose engagement rather than distance. Their partnership produced three children: **Seth**, **Dain**, and **Noa Osiro** — two sons and one daughter.\n\nThese three accompanied Adam to Earth through Cith More\'s crossing with Cronus\'s three tool-aspects sealed in their hands. Their wills were eventually sealed into those tools. Adam died on Earth, aged and human, having lived the purpose Mana built him for.\n\n**The name:** Adam took the surname Wov as Mana intended. His children by Dana took the Osiro name — the separation was not accidental. Mana\'s final act of design linked the first humans to both the Wov and Osiro bloodlines that would carry their legacy forward. The Book of Time traces every Osiro descendant back through Seth, Dain, and Noa to Adam.',
    notes: 'Birth mother: Aeva. Creator/Father: Mana. Named Wov by Mana to honor Exco Wov\'s line. His children by Dana Osiro are Seth, Dain, and Noa — all three went to Earth with Cronus\'s sub-tool aspects. Cores NOT sealed (gave human families proper cores).',
  },
  // ── Historical Earth Lineage — Adam's Partner & The 6 Earth Children ──────────────
  // Eve + Exco → Lyra, Mara, Sael Wov (Gaia sub-beasts — Noble Treasures)
  // Adam + Dana → Seth, Dain, Noa Osiro (Cronus sub-tools — Noble Treasures)
  // These 6 crossed to Earth. Wills sealed into weapons upon death.
  // Their unsealed cores gave human families proper cores.
  // Descendants guarded the 6 weapons for centuries; assist Irane in the final battle.
  {
    id: 'dana_osiro',
    name: 'Dana Osiro',
    house: 'osiro',
    role: 'Historical Leader of the Osiro Clan · Adam\'s Partner · Birth Mother of Three Earth Children',
    epithet: 'She Who Chose the First Man · The Western Door',
    status: 'deceased',
    location: 'Historical (Orius — West, Vrak/Demons Territory)',
    importance: 4,
    _dataRev: 1,
    coreType: 'Water (primary) · Air · Earth · Chaotic-Light Core State',
    description:
      'Leader of a regional Osiro clan in the western territories of Orius — Vrak Arke\'s Ferali domain, where Demon and Devil contracts dominated. Dana\'s Water-Air-Earth combination with a Chaotic-Light core was unusual: most Orians in the west aligned with Force or Aura cores, but Dana operated through Chaos, which gave her access to structural patterns that ordered alignments could not perceive.\n\nShe encountered Adam when he arrived in the west on his assigned mission. She recognized him for what he was — not with certainty, but with enough clarity to choose engagement over distance. Their partnership produced three children: **Seth** (1st son), **Dain** (2nd son), and **Noa** (daughter).\n\nDana\'s primary element (Water) shaped her children\'s affinities. Seth inherited her water most directly — his Echo Tool carries the weight of oceanic memory and ancestral depth. Dain inherited her air — dynamic, present, sky-facing. Noa inherited her earth — fixed, patient, and sealed in fate.\n\nDana remained on Orius after Adam and their three children crossed to Earth through Cith More\'s passage. The Osiro clan she led became the Orius-side bloodline from which Ember Vane (ember_hist) reclaimed the Osiro name thousands of years later and founded Clan Osiro.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Dana\'s Orius bloodline is the foundation of Clan Osiro. Her three Earth children (Seth, Dain, Noa) carried Cronus\'s tool-aspects to Earth and sealed their wills within them. Her element influenced each child\'s tool affinity.',
  },
  {
    id: 'lyra_wov',
    name: 'Lyra Wov',
    house: 'wov',
    role: 'First Earth-Born of Eve · Bearer of the Bloom Beast · Keeper of the Life Covenant',
    epithet: 'She Who Planted the First Root · The Growing One',
    status: 'deceased',
    location: 'Historical (Earth — fertile territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'First daughter of Eva Osiro and Exco Wov. Arrived on Earth carrying **Gaia\'s Bloom Beast** — the Life aspect of Mother Nature: the force of growth, regeneration, and accelerated development. Like her parents, Lyra was purpose-built: structured, mission-aware, more instrument than person by conventional measure. On Earth her assigned role was life cultivation — establishing growing communities, teaching natural-force practices, and ensuring humanity\'s biological persistence.\n\nHer will was sealed into the Bloom Beast after her death — a voluntary act, encoding her into the weapon permanently. The Noble Treasure she carried became the first of the six Earth children\'s weapons to be formally recognized after the worlds merged.\n\nThe clans that formed around her legacy developed mythologies of creation and abundance, mythologizing Lyra as a goddess of growth and the first mother of life. Her descendants guard the Bloom Beast across centuries until the final battle, arriving as the oldest surviving nature-covenant families in human civilization.',
    beast: {},
    weapon: { name: 'Bloom Beast', type: 'Noble Treasure — Gaia Sub-Aspect (Life)', description: 'Life and growth force. Will of Lyra Wov sealed within.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Wov-line (Eve + Exco). Bloom Beast = Noble Treasure (6 Ferali/beast seats). Will sealed within upon death. Descendants assist Irane in the final battle.',
  },
  {
    id: 'mara_wov',
    name: 'Mara Wov',
    house: 'wov',
    role: 'Second Earth-Born of Eve · Bearer of the Wane Beast · Keeper of the Death Covenant',
    epithet: 'She Who Ended Things · The Ender · The Beast That Does Not Bloom',
    status: 'deceased',
    location: 'Historical (Earth — boundary/arid territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'Second daughter of Eva Osiro and Exco Wov. Arrived on Earth carrying **Gaia\'s Wane Beast** — the Death aspect of Mother Nature: the force of entropy, ending, and the stripping of what has grown. Mara was the quietest of Eve\'s three children and the most unsettling to human communities — she governed not life\'s persistence but its conclusion.\n\nHer assigned role on Earth was balance: the counter to Lyra\'s growth principle, ensuring that what grew could also end, that resources cycled, and that the law of decay applied equally to everyone. The communities she established mythologized death as a governing force rather than a catastrophe — death deities, psychopomp figures, and the architecture of what comes after.\n\nHer will was sealed into the Wane Beast after her death. Her descendants carry the weapon through centuries, arriving at the final battle as the people who have administered endings for as long as any family has existed.',
    beast: {},
    weapon: { name: 'Wane Beast', type: 'Noble Treasure — Gaia Sub-Aspect (Death)', description: 'Entropy and ending force. Will of Mara Wov sealed within.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Wov-line (Eve + Exco). Wane Beast = Noble Treasure (6 Ferali/beast seats). Will sealed within upon death. Descendants assist Irane in the final battle.',
  },
  {
    id: 'sael_wov',
    name: 'Sael Wov',
    house: 'wov',
    role: 'Son of Eve · Bearer of the Still Beast · Keeper of the Balance Covenant',
    epithet: 'He Who Did Not Move · The Balance-Point · The Pause Between',
    status: 'deceased',
    location: 'Historical (Earth — crossroads territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'Son of Eva Osiro and Exco Wov. Arrived on Earth carrying **Gaia\'s Still Beast** — the Balance aspect of Mother Nature: the force of stasis, preservation, and the fixed moment in which nothing grows and nothing decays. Still is the rarest of Gaia\'s three aspects — not life, not death, but the pause between them.\n\nSael\'s role on Earth was preservation: holding communities in stable forms long enough for knowledge to accumulate. The mythologies around him became the traditions of cosmic order — balance, harmony, and the law that keeps the world from tilting entirely toward creation or destruction.\n\nHis will was sealed into the Still Beast after his death. His descendants guard the weapon across centuries — the families associated with Sael are typically the mediators, the archivists, and the treaty-keepers of their respective regions. They arrive at the final battle as the people who have maintained balance for as long as anyone has been keeping track.',
    beast: {},
    weapon: { name: 'Still Beast', type: 'Noble Treasure — Gaia Sub-Aspect (Balance)', description: 'Stasis and preservation force. Will of Sael Wov sealed within.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Wov-line (Eve + Exco). Still Beast = Noble Treasure (6 Ferali/beast seats). Will sealed within upon death. Descendants assist Irane in the final battle.',
  },
  {
    id: 'seth_osiro',
    name: 'Seth Osiro',
    house: 'osiro',
    role: 'First Earth-Born of Adam · Bearer of the Echo Tool · Keeper of the Memory Covenant',
    epithet: 'He Who Remembers · The First Historian · Son of Adam and Dana',
    status: 'deceased',
    location: 'Historical (Earth — coastal/island territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'First son of Adam Wov and Dana Osiro. Arrived on Earth carrying **Cronus\'s Echo Tool** — the Past aspect of Father Time: the record of what has been, accessible memory, the weight of history made tangible. Seth is the most water-aligned of Adam\'s three children, inheriting Dana\'s primary element most directly.\n\nHis role on Earth was memory and record: building oral and written traditions in his territory, ensuring what happened was not lost, and maintaining the ancestral connection that the Book of Time would eventually trace. The Echo Tool allows the wielder to access records of the past — not in the complete detail of the Book, but in vivid enough impressions to reconstruct events, locate lost bloodlines, and hear the dead speak.\n\nThe mythologies around Seth\'s legacy became the ancestor-worship and record-keeping traditions — his communities treated elders as living archives and developed the earliest systematic lineage-tracing practices in human civilization.\n\nHis will was sealed into the Echo Tool after his death. His descendants guard the weapon across centuries until the final battle, arriving as the families who kept the records no one else thought to keep.',
    beast: {},
    weapon: { name: 'Echo Tool', type: 'Noble Treasure — Cronus Sub-Aspect (Past)', description: 'Memory and record access. Will of Seth Osiro sealed within.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Osiro-line (Adam + Dana). Echo Tool = Noble Treasure (6 Force/tool seats). Will sealed within upon death. Seth is Adam\'s son — NOT Eve\'s son (old lore was wrong; new lore corrects this).',
  },
  {
    id: 'dain_osiro',
    name: 'Dain Osiro',
    house: 'osiro',
    role: 'Second Earth-Born of Adam · Bearer of the Drift Tool · Patron of the Olympic Covenant',
    epithet: 'He Who Is Now · The Present One · Origin of the Sky Myths',
    status: 'deceased',
    location: 'Historical (Earth — Mediterranean/highland territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'Second son of Adam Wov and Dana Osiro. Arrived on Earth carrying **Cronus\'s Drift Tool** — the Present aspect of Father Time: the living now, the moment in flow, the unanchored force of what is currently happening. Dain inherited Dana\'s Air affinity — dynamic, present, and fundamentally resistant to being fixed in place.\n\nHis role on Earth was power and authority in the living moment. His communities organized around decisive present-action, military strength, and the governing principle that what you do right now defines you. The Drift Tool gave his bloodline preternaturally effective warriors and leaders — they operated with total situational presence, unable to be caught off-guard by the present because they were always already in it.\n\n**The Olympic Connection:** The mythologies that formed around Dain\'s bloodline became the sky-power traditions of his territory. Human generations mythologized the three operational modes of the Drift Tool — dominance (the sky lord), depth (the wave), and threshold (the hidden realm) — as three governing powers: what his civilization would eventually call Zeus, Poseidon, and Hades. These are not three separate weapons. They are three channels through which his descendants learned to use the single Drift Tool he left them. His family brings all three channels to the final battle.\n\nHis will was sealed into the Drift Tool after his death.',
    beast: {},
    weapon: { name: 'Drift Tool', type: 'Noble Treasure — Cronus Sub-Aspect (Present)', description: 'Present-moment force. Will of Dain Osiro sealed within. Three operational modes mythologized as Zeus / Poseidon / Hades.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Osiro-line (Adam + Dana). Drift Tool = Noble Treasure (6 Force/tool seats). Will sealed within upon death. Origin of Greek/Olympic mythological tradition — Zeus/Poseidon/Hades are three modes of his single weapon.',
  },
  {
    id: 'noa_osiro',
    name: 'Noa Osiro',
    house: 'osiro',
    role: 'Daughter of Adam · Bearer of the Seal Tool · Keeper of the Fate Covenant',
    epithet: 'She Who Has Already Seen It · The One at the End · The Oracle\'s Weight',
    status: 'deceased',
    location: 'Historical (Earth — highland/oracle territories)',
    importance: 3,
    _dataRev: 1,
    description:
      'Daughter of Adam Wov and Dana Osiro. Arrived on Earth carrying **Cronus\'s Seal Tool** — the Future aspect of Father Time: the fixed future, events that cannot be altered once written, the fate that approaches whether or not it is known. Noa inherited Dana\'s Earth affinity — patient, fixed, and unmovable once committed.\n\nHer role on Earth was fate-counsel. The Seal Tool does not reveal what will happen — it reveals what has already become inevitable: the difference between a future that can still be changed and one that has already, in Cronus\'s accounting, become as fixed as the past. Her communities organized around this distinction: not oracles who told the future, but people who could tell you which futures were still open.\n\nThe mythologies around Noa became the oracle traditions — the Fates, the prophetic institutions, the fate-counsel authorities that told rulers which paths remained possible. Her descendants are the oldest surviving oracle families in human civilization.\n\nHer will was sealed into the Seal Tool after her death. Her descendants arrive at the final battle knowing more about what is about to happen than anyone else present.',
    beast: {},
    weapon: { name: 'Seal Tool', type: 'Noble Treasure — Cronus Sub-Aspect (Future/Fate)', description: 'Fixed-future perception. Will of Noa Osiro sealed within.' },
    gates: [],
    psyche: [],
    notes: 'One of the 6 Earth children. Osiro-line (Adam + Dana). Seal Tool = Noble Treasure (6 Force/tool seats). Will sealed within upon death. Origin of oracle and fate-counsel traditions.',
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
      'The true founding figure behind the Vane dynasty — the immortal Ascen who, thousands of years before the catastrophe, made the original deal with the Arke twins and became the first King of Terra under the name **Volva Vane**. "Aevum" means eternal time in an ancient Terran language. He had lived so long and accumulated so much knowledge about the Arke twins\' covenant system that he was functionally immortal by understanding. He accepted the deal not because he believed in it, but to buy time and access. In parallel, he cultivated a friendship with Mana the Conceptual and spent centuries assembling the knowledge base that would produce the 18 Noble Treasure weapons — funding the forge project, concealing it as scholarly archival work, and eventually bringing Irane in with everything she needed to complete it. Aevum\'s consciousness transfer sequence was the longest long game of his existence. The first transfer: his own son Dulla — whose body he inhabited, whose identity he wore for the decades Dulla spent in Limbo commanding the Ascen assault on the Primals and building the unexpected relationship with Cith More. Whether the feelings that developed for Cith were Aevum\'s own, or the body\'s residue, or both is a question he has never answered. What is certain: the two children Cith bore during those years — Darkki Ardent and Noxa Nexal — are Aevum\'s bloodline through Dulla\'s body. House Ardent and House Nexal are his. Arai (Nexal) and Mira (Ardent) are his descendants. Neither knows. The second transfer came later: the body of an Orian practitioner named Suu, who held the rare dual-Chaotic Energy element Aevum had discovered. He built the Grand Mana Academy in Suu\'s name and ran it for decades before Toma More\'s assault ended that body. The third transfer: Simon Archiver, the resistance fighter who was present at the assault — a man whose memories of the resistance and Earth filled in everything Suu\'s body had not known. Each transfer gave him the memories of the host. This is the mechanism: Aevum inherits the complete memory archive of every body he inhabits. He has lived multiple lives\' worth of experience not as Aevum but as the people whose bodies he took, and he carries all of it forward. Before the subjugation plan\'s final stage — as Simon — he joined the escape group under the cover identity of a Vane dynasty archivist with extraordinary institutional knowledge. No one in the group knew who he actually was. He became Irane\'s closest and most trusted friend during the escape and its aftermath. His relationship with **Ember Vane** was different: he manufactured her belief that he was the one person who truly understood her — a deception old enough that he may not have recognized it as such. Aevum\'s fate after the Sol-Nexus was founded is unknown. He could still be alive.\n\n**The Long Game — How Aevum Used the Twins**\n\nAevum did not simply make a deal with the Arke twins. He looked at two children of a Conceptual of Magic and understood immediately what they were and what they would become. He saw their design: they wanted armies to return to Limbo, to destroy the Primal leaders who had ordered their deaths for the crime of sharing their father\'s blood and possessing the power to alter between forms. What they needed was a population to build from.\n\nWhat Aevum saw — and what the twins did not — was the trap inside their own system.\n\nThe Alma needed beasts at birth. The Spirits needed tools at birth. This was not a preference or a cultural custom — it was a biological alteration written into them by the contract system itself. Every generation born after the original conversion produced more beings whose functioning depended on the Arke twins continuously fulfilling those contracts. The population compounded. The twins could not stop giving without billions of altered people simply failing to sustain themselves. They built load-bearing infrastructure from what they intended as a temporary tool, and then found themselves permanently on call to maintain it.\n\nAevum had seen this coming. He allowed them to build themselves into a corner, then waited centuries for the corner to become a cage. His own immortality deal — which he accepted in full knowledge of every cost — was the mechanism of his exit: he would outlive every version of himself that could be threatened, and when the moment arrived where the twins\' obligations exceeded their agency, he would be there with the means to redirect that leverage.\n\nThat moment came with the combination art. The power of the twins\' constrained contracts — plus the four Grand weapon cores (Vrak, Selis, Gaia, Cronus) — gave Aevum the means to force-merge all living beings into Coreporial form. He used the twins as tools and beasts, the exact categories they had built to serve them. The system they designed to give them power became the instrument of their subordination.\n\nThe irony that ends him: Aevum designed a system that constrained its makers through the dependency of those beneath them. Irane\'s punishment constrains Aevum through the lives of those beneath him — 1 trillion of them, one at a time. His mechanism, turned on himself, by the product of his mechanism.',
        notes: 'Long-game architect: deliberately allowed the Arke twins to trap themselves in their own contract system dependency. The combination art + 4 Grand cores = final step of centuries of maneuvering. Punished by Kazemi Irane in the eternal 1-trillion-life trial — loses one core per death, starting from 1 trillion. BODY SEQUENCE: Original Aevum (body 1) → Dulla Vane (body 2, his own son) → Grand Master Suu (body 3) → Simon Archiver (body 4, after Toma defeats Suu). MEMORY INHERITANCE: Aevum carries the complete memories of every host body. This is how he accumulated knowledge of Earth, the resistance, every Orian bloodline, and the full inner life of each person he inhabited. BLOODLINE NOTE: As Dulla, he fathered Darkki Ardent and Noxa Nexal with Cith More. House Ardent (Mira\'s line) and House Nexal (Arai\'s line) are Aevum\'s bloodlines. Neither Arai nor Mira knows. See id: suu, id: simon_archiver.',
  },
  {
    id: 'suu',
    name: 'Grand Master Suu',
    house: 'vane',
    role: 'Grand Master of the Grand Mana Academy · Irane\'s Beast Friend · Arai\'s Teacher · Secretly Aevum Vane',
    epithet: 'The Man Who Taught Everything He Knew Was Wrong · The Friend Irane Cannot Forget',
    status: 'unknown',
    location: 'Grand Mana Academy (Orius) → Unknown',
    importance: 5,
    coreType: 'Energy; Chaotic-Light/Dark',
    description:
      '**Who He Actually Is:** Grand Master Suu is Aevum Vane. Following the escape from the Arke twins\' direct control and the founding of the Sol-Nexus era civilization, Aevum performed a second consciousness transfer — this time into the body of a living man: an exceptional Orian practitioner named Suu, who held the rare Energy element with a dual Chaotic alignment across both Light and Dark states (one of the extremely rare practitioners whose element operated through the dual-state property Aevum himself had discovered). Whether Suu agreed, whether Suu survived the transfer as a distinct consciousness, or whether the body\'s original owner simply ceased and Aevum continued using his face — this has never been recorded.\n\n**The Grand Mana Academy:** Suu founded the Grand Mana Academy as the premiere cultivation institution on Orius. The law preventing any marriage arrangement while a student was enrolled — attributed in official records to "the first Emperor as Ascen" — was Suu\'s own law, written specifically to create institutional protection for women who had no other legal recourse against house claims. Women recognized its value immediately and used Academy enrollment as a shield. Men who understood what it was either respected it or maneuvered around it; either way, the law held. Suu enforced it personally.\n\nThe Academy offered three cultivation paths: the standard Academy track (combat and Core refinement through mana clash), the Grand Library track (spell mastery and theoretical depth), and **The Absolute Path** — Suu\'s personal class, offered only to practitioners he judged capable of simultaneous mastery of both disciplines without fracture. He taught this class himself. He did not advertise it. Students who were placed in it were told after they had already been watched long enough for him to be certain.\n\n**Arai\'s Teacher:** Suu identified Arai Nexal within months of her arrival at the Academy. He placed her on the Absolute Path. What she experienced as his teaching — the relentless pressure to maintain both dimensions at peak level simultaneously, the refusal to accept that falling behind in either direction was permissible, the specific form his demands took — was, in retrospect, preparation he could not have articulated without naming what he was preparing her for. He was Aevum. He knew what the facility would produce. He shaped her into someone capable of managing it before she knew the facility existed.\n\nWhether he told her the truth at any point, or whether she figured it out, is not documented.\n\n**Irane\'s Beast Friend:** Aevum was Irane\'s closest and most trusted friend during the escape and the subsequent decades of world-building. The bond between them was not romantic — it was the particular depth that forms between two people who share a project that matters more than both of them, across a period of time long enough that most of what they knew about themselves had been shaped in each other\'s presence. When Irane was eventually destroyed and rebuilt through the facility process, that relationship did not simply disappear. Suu\'s presence in her Beast core (Enari) is not metaphorical: the memories, the emotional weight, the architecture of what Aevum meant to her are held in the Enari system the same way the other deep relationships are — structured, accessible, part of how she processes meaning. Aevum as Suu is the Beast Friend. The bond predates Kael, predates the facility, predates Orius as a political entity.\n\n**The Aevum Agenda (as Suu):** Running the Academy was not purely altruistic. The Academy gave Suu institutional access to every promising practitioner on Orius across generations. Core data, mana signature maps, bloodline resonance profiles — all passed through Academy enrollment. He built the most comprehensive record of Orian mana development that existed, separately from both the Alma and Spirit systems, under his personal control. What he intended to do with it — whether it connected to his original long-term agenda to accumulate power as leverage against the Arke twins — is unknown. The Academy as an institution continues. Suu has not been seen since the facility period ended.\n\n**The Shape of Someone Who Has Been Everything**\n\nAevum Vane was a ruler. Not a man who played at rulership — a king who governed a civilization across generations, who held real power over real people with real consequences and understood authority from the inside. Then he was a teacher. Not a king pretending to teach — the man who built an institution from nothing, wrote laws that protected people who had no other protection, taught the Absolute Path personally to students he had watched for years before they knew he was watching. Then he was a fighter on humanity\'s side. Not strategically positioned at a safe remove — in the resistance, carrying a human\'s face, standing inside the conflict that had no guarantee of survival and no throne to return to.\n\nThe thing that does not make sense, unless you understand what he is, is how completely he inhabited each of these. A ruler who governs convincingly and a teacher who teaches convincingly and a man who fights convincingly from genuine investment in the outcome — those are not three performances layered on top of each other. They are three people. Most people are one, at most two. Aevum is all three, sequentially, each one executed so fully that the people inside each chapter of his life had no reason to doubt the version of him they knew.\n\nThat depth of inhabitation cannot be performed. It can only be accumulated. A man with a few decades of experience can imitate a king, or a teacher, or a soldier. A man who has actually been all three — who has governed and lost governance, who has taught and watched what he taught be used and misused, who has chosen to stand on the side of something without the protection of a throne — does not imitate. He remembers. Every version of him is real because every version of him was paid for in full.\n\nAnd then there is Simon. A human. A man with a human lifespan and a human friendship with Irane — the kind of friendship that does not survive strategy, that only exists when neither person is performing anything. Aevum entered that body and carried that bond forward. Whether he understood what he was carrying when he first entered it, or whether Simon\'s memories taught him something about what a human friendship feels like from the inside — that question has no recorded answer. What is observable is that "Simon," after the transfer, was convincing not just to strangers but to Irane. And Irane, of all people in the world, is the hardest to fool.',
    notes: 'Secretly Aevum Vane (third body — original Aevum body 1, Dulla body 2, Suu body 3, Simon body 4). Energy element; Chaotic-Light/Dark (dual-state). Founded the Grand Mana Academy. Ran the Absolute Path personally — Arai was his student. Tola routed Hope and Zoe to him post-Fest believing it was protection; Suu/Aevum did not reveal his identity to Tola. Irane\'s Beast Friend (bond predates facility, and now also carries Simon\'s human bond with Irane). DO NOT confuse with id: aevum_vane (the original identity/first-body persona). IDENTITY NOTE: Toma More fatally wounded Suu during the Academy attack. As Suu lay dying, Simon Archiver found him. Suu (Aevum) performed a consciousness transfer — MIND ONLY, not the core. Simon\'s original core (Energy-Air; Harmonic-light) remains his own; Aevum\'s consciousness now operates through Simon\'s body and that core. Simon\'s original consciousness did not survive the transfer. Suu/Aevum now occupies Simon\'s body and identity. See id: simon_archiver for the merged identity\'s subsequent history, the Round 2 Toma fight, and the post-facility conversation with Arai. The Suu/Aevum reveal comes after that conversation. Estranged from Gran Brime for ~60 years — from Gran\'s perspective, Suu changed from pursuing the truth of Mana to seeking more powerful spells, and called a spell book \"boring,\" which Gran considers the day his friend died. Gran remains visibly hostile when Suu enters any shared space. GRAN ESTRANGEMENT TIMING: Gran Brime said his friend \"changed about 60 years ago\" — this is the moment Aevum transferred into Suu\'s body. Gran\'s friend the original Suu was genuinely gone; what Gran saw change was the personality of a different person now running Suu\'s face. ACADEMY MANIPULATION: Aevum (as Suu) placed Arai on the Absolute Path and pressed her specific wound (being called a \'dud,\' the sense of being undervalued by a system she had outperformed) — offering her the recognition of a true intellectual equal. He played father figure. What he needed from her was the theoretical architecture to complete the Conceptual-hosting seal he had been building for centuries. She was the last piece. The attack by Toma More disrupted this extraction before it could be completed and triggered the facility chain of events.',
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
    notes: 'After Arke died in childbirth, Mana attempted to resurrect her through forbidden life-force methods. The attempt failed — what is dead is dead. A new consciousness (Aeva) inhabited Arke\'s body instead. Devastated, Mana channeled his grief into creating Adam and Eve as his final act — an act that hastened his own death.',
  },
  {
    id: 'aeva',
    name: 'Aeva',
    house: 'unknown',
    role: 'Birth Mother of Eva Osiro and Adam Wov · New Being in Arke\'s Body · Not Arke',
    epithet: 'She Who Was Not Called · The Accidental Existence · The Second Wife Who Was No Wife',
    status: 'unknown',
    location: 'Unknown (Historical — active during Mana\'s final years)',
    importance: 4,
    _dataRev: 2,
    description:
      'Not a resurrection. Not Arke. A new consciousness that emerged when Mana attempted to call back his deceased wife through life-force transference — a method that had no precedent. The body breathed again. The eyes opened. But the person inside was not Arke.\n\n**What Mana did:** Arke died giving birth to Vrak and Selis. Mana spent an unknown period — possibly centuries — trying to reverse her death. The attempt involved life-force transference at a scale only a Conceptual of Magic could attempt: pulling from Limbo\'s energy reserves to reanimate the biological structure of a person whose consciousness had already departed. Technically, it succeeded. The body lived. What it did not do was restore Arke — because Arke was already gone. What occupied her body instead was entirely new: no memories, no history, no connection to the woman whose face she wore.\n\n**Who Aeva was:** Aeva retained none of Arke\'s knowledge, none of her love, none of the years she had lived. She had Arke\'s face, Arke\'s hands, Arke\'s capacity to carry children — and nothing else. She did not know what she was, why she existed, or what she was supposed to be. She was a stranger handed a life she had not requested, in a body that had belonged to someone else, standing in front of a man whose grief had created her and who she had no connection to.\n\nTo Mana, the result was simultaneously the closest thing to what he had lost and the clearest possible proof that what he had lost was permanent. He had gotten Arke\'s body back. He had not gotten Arke.\n\n**The birth of Eva and Adam:** Despite everything, Aeva became the physical birth mother of Eva Osiro and Adam Wov — the first humans. Mana\'s grief worked through her body: a final creative act, pouring his remaining power and the conceptual remnants of Gaia and Cronus into two new beings who had never existed before. The act used Aeva as the vessel. Whether she consented, whether she understood what was happening, whether she was present in any meaningful sense when it occurred — none of this was recorded. What is known: the two children came through her body. Mana gave everything he had left to make them. He did not survive the act.\n\n**Her fate:** Unrecorded. Whether she lived after the births, wandered Orius, integrated into the world Arke had shaped with her spell-casting framework, or simply ceased — no source tracks her after this point. She is the most important unrecorded figure in the Sol-Nexus\'s origin: the woman who was not Arke, who gave birth to the ancestors of all humanity.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Physically identical to Arke — same body, same face, same voice. Categorically different being — no memories, no identity carryover. Birth mother of Eva Osiro (Eve) and Adam Wov (Adam). Not to be confused with the Hallowed Fifteen scribe Aeva (Wind element, Pandro Lexan\'s beast) — the names share a root but the beings are entirely separate.',
  },

  // ── Grand Family Leaders — Lucerne and Seraph ──────────────────────────
  {
    id: 'azen_lucerne',
    name: 'Azen Lucerne',
    house: 'lucerne',
    role: 'Grand Clan Leader · The Morning-Star',
    epithet: 'He Who Fell Brightest · The Ashen Dawn',
    status: 'active',
    location: 'Lucerne Continent · Ashgard',
    importance: 2,
    _dataRev: 1,
    description:
      'Grand leader of Clan Lucerne — the oldest Alma bloodline and the continent-ruling Grand Family of the western reaches. The Lucerne clan traces its lineage to the first Terrans who accepted Ferali beast-contracts: those who chose the raw, consuming power of demonic energy over the restrained precision of the Celestials. Where other Alma clans wielded beast contracts as tools, the Lucerne ancestors let the beasts reshape them.\n\nThe clan\'s symbol is the morning star — the brightest point in the sky at the moment before the sun rises and extinguishes it. Their philosophy: brilliance is measured by what it costs, not what it keeps. Azen Lucerne holds the Grand weapon Morningfall and rules from Ashgard, the continent\'s fortified capital.',
    beast: {},
    weapon: { name: 'Morningfall', type: 'Grand House Weapon', description: 'The fallen-light lance of Clan Lucerne.' },
    gates: [],
    psyche: [],
    notes: '',
  },
  {
    id: 'elorah_seraph',
    name: 'Elorah Seraph',
    house: 'seraph',
    role: 'Grand Clan Leader · The Spirit Bearer',
    epithet: 'Voice of the Covenant · The High Accord',
    status: 'active',
    location: 'Seraph Continent · Seraphel',
    importance: 2,
    _dataRev: 1,
    description:
      'Grand leader of Clan Seraph — the oldest Spirit bloodline and the continent-ruling Grand Family of the eastern reaches. The Seraph clan descends from the first Terrans who accepted Celestial tool-contracts at the highest possible level: not just bonding weapons, but becoming living conduits for the divine instruments\' full authority. Where other Spirit clans treated their tools as weapons of war, the Seraph ancestors treated them as sacred mandates.\n\nThe clan takes its name from the Seraphim — the highest order in the celestial hierarchy, described across many mythologies as beings of overwhelming light and singular divine purpose. Their tools do not destroy; they judge, bind, and ordain. Elorah Seraph holds the Grand weapon Covenant Seraph and rules from Seraphel, a city built around an ancient Celestial convergence point.',
    beast: {},
    weapon: { name: 'Covenant Seraph', type: 'Grand House Weapon', description: 'The divine mandate instrument of Clan Seraph.' },
    gates: [],
    psyche: [],
    notes: '',
  },

  {
    id: 'dulla_vane',
    name: 'Dulla Vane',
    house: 'vane',
    role: 'Eldest Son of Aevum · Secret Immortal · Commander of the Limbo Assault',
    epithet: 'The Intermediary · He Who Never Stopped',
    status: 'unknown',
    location: 'Historical (Orius → Limbo — classified) → Unknown',
    importance: 4,
    _dataRev: 2,
    coreType: 'Energy (Light-aligned) · Harmonic-Light Core State',
    description:
      'Aevum Vane\'s eldest son — the original contact point through whom the Arke twins approached the Vane family. He brought the twins\' full proposal to his father and made the deal possible by being a relay who understood the weight of what he carried. What the Arke twins did not know was that the "immortality" provision of the deal had been quietly interpreted differently by the Vane side from the start.\n\n**The First Transfer — What "Dulla" Actually Was**\n\nAevum\'s first consciousness transfer was into his own son\'s body. The original Dulla Vane ceased when Aevum took over. What remained — the person who commanded the Ascen assault on the Primals in Limbo, who fell into the years-long confrontation with Cith More, who faked his death and spent his remaining time on Orius with her — was Aevum, wearing Dulla\'s face. The \'immortality\' Dulla was granted was not extended life for Dulla. It was continuity for Aevum in Dulla\'s form.\n\nWhether the feelings that developed for Cith were Aevum\'s own or the body\'s residue, or whether the long war\'s proximity produced something genuine in a being who had already lived for centuries and had not expected to feel anything new — this is not recorded. What is observable: Aevum-as-Dulla chose to fake his death, follow Cith instead of pursuing the Primal evacuation, and spend years on a dead world with the enemy commander he had spent decades fighting. That is not a purely strategic choice.\n\n**Secretly immortal:** Dulla was granted true extended life — not merely the consciousness-transfer capability the deal described, but something deeper, obtained through a method he never formally recorded. While official Vane records show him dying "early in the dynasty\'s expansion," this was a staged disappearance. He never died.\n\n**Limbo operations:** Under Aevum\'s direct orders, Dulla led the **Ascen assault on the Primals in Limbo** — the campaign that systematically drove the Primal evacuations, cornered Cith More\'s people, and ultimately forced the sequence of events that pushed Eve, Adam, and their children toward Earth. Only Ascen could enter Mana\'s protective rift in Limbo — their pure-mana nature gave them access that no Demon or Seraphim bloodline could match. Dulla commanded these operations personally, for longer than any official record acknowledges.\n\n**The rival — and the truth:** Cith More became his equal — the only person operating in Limbo at his level who could consistently counter his strategies. Their confrontations defined the Primal evacuation\'s timeline. No record explains why neither of them could land a killing blow despite years of direct engagement. The Primal accounts say Dulla killed Cith first. The Ascen accounts say Cith killed Dulla first. Both versions are wrong.\n\nThe war\'s defining standoff was not a military deadlock — it was two commanders finding reasons to continue a confrontation that was no longer about winning. They fell in love. The "earth-shattering clashes" were theatre. The "unbreakable strategic parity" that prevented either from reaching the other was two people choosing not to reach. The combat that both civilizations recorded as the most brutal sustained engagement in Limbo\'s history was, for its participants, the longest extended excuse in history to keep meeting.\n\n**The faked deaths:** When the Primals moved toward the Earth crossing, Dulla did not pursue them. He followed Cith instead. They went to Orius together — the dead world of the prior civilization — and disappeared. Not just from the war, but from everyone who had ever claimed a piece of what they were. They faked their deaths in a moment of chaos that gave both sides a death to record. Aevum never found out. The Arke twins never found out.\n\n**On Orius:** They spent their remaining years together on a dead world. They had two children. The first, **Darkki Ardent**, took a new name and would build the lineage that became House Ardent — Aevum\'s own "cover" dynasty, unknowingly built on the bones of Dulla\'s secret family. The second, **Noxa Nexal**, took another new name and became the progenitor of the Nexal bloodline\'s future-sight ability — the ancestor of both Tenza and Arai. The children of the most famous enemy commanders in Limbo\'s history became the hidden architects of two of the most strategically dangerous houses in the post-merger world.\n\n**After Orius:** His fate is unrecorded. The Vane dynasty believes him dead. Aevum believes him dead. What he built on Orius outlasted everything he was supposed to serve.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'IDENTITY NOTE: "Dulla" was Aevum\'s first body transfer — Aevum inhabited his own son\'s body. The original Dulla Vane ceased. Everything attributed to Dulla (the Limbo command, the Cith relationship, the faked death, the two children) was Aevum in Dulla\'s form. Whether Cith knew is unresolved — save for "More on Earth" arc. The two children (Darkki Ardent → House Ardent, Noxa Nexal → House Nexal) are therefore Aevum\'s bloodlines. Aevum eventually transferred out of Dulla\'s body into Suu. What happened to Dulla\'s body after the transfer: unrecorded. Cith survived — she is the founder of Clan More in the living world. See id: aevum_vane, id: cith_more.',
  },
  {
    id: 'gaia_primordial',
    name: 'Gaia (Mother Nature)',
    house: 'wov',
    role: 'Conceptual of Life/Death · Sealed within the Tree of Eden · Grand Duty — House Wov',
    epithet: 'The Life Force · That Which Grows · First Death · Bloom-Ruin-Still',
    status: 'sealed',
    location: 'Sealed within the Tree of Eden (wielded by Vesper Wov)',
    importance: 5,
    _dataRev: 2,
    coreType: 'Conceptual — Life-Death Pillar · Three Aspects: Bloom / Ruin / Still',
    description:
      'One of the three named Primordials of Limbo. Gaia\'s conceptual nature was the **Life Force** — the operating principle of biological existence, growth, death, and the conversion of living energy into death force. She was not a being who controlled life and death as abilities. She was the principle itself.\n\nGaia was killed by Mana\'s accidental childhood spell along with Cronus and Kazemi. Her conceptual form dissolved — but the Life Force principle could not die. She distributed into the Life-Death Pillar, reforming over eons as something with a new will. When Mana used her conceptual remnants to create Eve and Adam, she followed them to Earth and reconstituted as **Mother Nature** — the living world\'s awareness, ancient and patient.\n\n**The Three Aspects:**\n**Bloom** — the Life face of the Life-Death concept. Growth, connection, restoration, the tendency of living things to reach toward each other. The Sleep Connection ability of the Tree of Eden draws from Bloom: Gaia reaches toward the living.\n**Ruin** — the Death face. Severance, entropy, the ending that makes space for what comes next. The Mirror Beast\'s knowledge of how someone dies draws from Ruin.\n**Still** — the Balance between. The point where neither growth nor decay dominates. The Gaia\'s Veto stasis ability draws from Still: absolute biological pause, outside the cycle entirely.\n\n**The Sealing — Duty:** Gaia proposed her own sealing. As a Conceptual of Life-Death, an unconstrained presence in the living world would have consumed it by proximity — living things would have grown uncontrollably toward her, then died, then grown again. The Tree of Eden is her chosen boundary: her will and active power sealed, her mind fully awake. She perceives everything the weapon connects to. She does not guide wielders. She chooses who the weapon reaches, and she makes those choices by standards no living being fully understands.\n\n**Weakness — Selis Arke (Covenant Seraph):** A divine covenant written before a connection attempt can prevent the Sleep Connection from forming to a specific target. Selis\'s contract system, which predates her current form, is the only force that operates cleanly above natural law. What he seals, she cannot initially perceive. She waits for the clause to expire. Covenants always have seams.\n\n**Counter — Selis Arke:** Existing connections cannot be broken by a covenant. What Gaia already knows, she keeps. And Gaia recognizes Selis\'s handwriting in every covenant he writes through the Seraph wielders — she has known his legal style since before the Grand Table existed.',
    beast: { name: 'The Three Aspects', type: 'Conceptual Sub-Entities', description: 'Bloom (Life), Ruin (Death), Still (Balance). Three faces of the Life-Death principle, each partially accessible through the Tree of Eden\'s abilities.' },
    weapon: { name: 'Tree of Eden', type: 'Grand Family Weapon — 15th Realm (House Wov)', description: 'Her chosen form and boundary. She is sealed within it by her own agreement. Her mind is free; her will and power are not.' },
    gates: [],
    psyche: [],
    notes: 'Sealed as DUTY — not punishment. Her three aspects (Bloom/Ruin/Still) correspond to the Tree\'s three major ability categories. Her kryptonite is Selis Arke (Covenant Seraph). She checks Selis by finding the seam in every covenant he writes.',
  },
  {
    id: 'cronus_primordial',
    name: 'Cronus (Father Time)',
    house: 'osiro',
    role: 'Conceptual of Time · Sealed within the Book of Time · Grand Duty — Clan Osiro',
    epithet: 'The Weight of Names · Recorded Memory · Echo-Drift-Seal',
    status: 'sealed',
    location: 'Sealed within the Book of Time (wielded by Ember A. Osiro)',
    importance: 5,
    _dataRev: 2,
    coreType: 'Conceptual — Time Pillar · Three Aspects: Echo / Drift / Seal',
    description:
      'One of the three named Primordials of Limbo. Cronus\'s conceptual nature was **Time** — not the ability to manipulate time, but the operating principle. Events recorded themselves in his presence. Causality ran cleanly. The past was real and immovable. He was the foundation of consequence.\n\nKilled alongside Gaia and Kazemi by Mana\'s childhood spell. He distributed into the Time Pillar and reformed over eons as something with a new will — shaped by the silence of dissolution into something that had learned to value what had not previously existed in Limbo: free choice, and its consequences. When Mana used his conceptual remnants to create Eve and Adam, he followed them to Earth and reconstituted as **Father Time** — the weight of ancestry, the pull of what happened, the sense that history is always present.\n\n**The Three Aspects:**\n**Echo** — the accessible past. Everything recorded, available to be read. The Lineage Reading and Spectral Summoning abilities of the Book of Time draw from Echo: Cronus\'s complete archive, made accessible to the wielder.\n**Drift** — the living present as it becomes the past. The Book updates in real time because Drift captures events at the moment they become history. A person\'s page in the Book changes as they act.\n**Seal** — the fixed future: events that cannot be changed without consequences too large to permit. The burned pages in the Book of Time are Seal\'s expression. Cronus has marked certain lineages and events as outside the domain of the accessible. No wielder has ever successfully opened a Sealed page without paying a price Cronus chose without consulting them.\n\n**The Sealing — Duty:** Cronus accepted the sealing as his natural condition. The Time Concept does not act — it records. Containment in the weapon is not imprisonment for a being whose essential nature is observation and archive. His will is sealed, his power is bound, but his mind — infinite, precise, entirely present — perceives everything the Book records. He communicates with wielders not in words, but through what the Book chooses to show and what it declines to.\n\n**Weakness — Vrak Arke (Morningfall):** Stellar fire can temporarily erase pages from the Book — burning what was recorded. This is not coincidental. Vrak designed the original Ferali beast-contracts to leave no permanent record. Cronus designed the Book to record everything. They have been in opposition since before the Grand Table existed. The temporary nature of the erasure is Cronus\'s advantage: when the Stellar Echo fades, the page returns.\n\n**Counter — Vrak Arke:** Cronus\'s page on Vrak is the most extensively compiled record in the Book. Every beast-contract Vrak ever wrote. Every crime committed using the Ferali system. Every wielder Vrak has corrupted. Cronus has been recording Vrak\'s actions for longer than any other entry in the archive. When Ember Osiro opens that page, she reads something Vrak has been trying to prevent anyone from reading for millennia.',
    beast: { name: 'The Three Aspects', type: 'Conceptual Sub-Entities', description: 'Echo (past, accessible), Drift (present becoming past), Seal (fixed — pages Cronus has burned for reasons he keeps). Three faces of the Time principle.' },
    weapon: { name: 'Book of Time', type: 'Grand Family Weapon — 16th Realm (Clan Osiro)', description: 'His chosen form and the structure of his duty. His mind is free within it; his will and power are not. He has never tried to break free. He is not sure he would want to. The alternative to recording everything is being nothing.' },
    gates: [],
    psyche: [],
    notes: 'Sealed as DUTY — not punishment. His three aspects (Echo/Drift/Seal) correspond to the Book\'s three ability categories. His kryptonite is Vrak Arke (Morningfall). He checks Vrak by holding the most complete record of Vrak\'s crimes in existence.',
  },
  // ── Vrak's Three — The Primal Champions Whose Essence Became His Beasts ──
  {
    id: 'omegaruin_vael',
    name: 'Omegaruin Vael',
    house: 'none',
    role: 'Primal Champion — The Ruin · Source of the Ruin Beast',
    epithet: 'He Who Helped Things Finish · The Patient End',
    status: 'deceased',
    location: 'Historical (Limbo — Primal Age)',
    importance: 3,
    coreType: 'Nature-Dark — Sovereign Entropy',
    description:
      'A Primal elder who had lived long enough to understand a truth most beings spend their lives refusing: that endings are not failures. They are the most honest thing in existence. Every structure is a structure in the process of ending. Every bond is a bond in the process of concluding. The Primals who feared the Arke twins\' campaign feared death. Omegaruin did not fear death. He understood it as the most fundamental property of all things — and his power was the ability to find that property in whatever he touched and let it complete.\n\nHe was not violent in any conventional sense. He did not destroy what he touched. He helped it finish. Stone walls finished. Spell constructs finished. Mana reserves finished. He moved through the world like a finality given form: unhurried, implacable, and genuinely serene about what he was and what he did. His Nature-Dark core was not the darkness of malice — it was the darkness of the substrate from which entropy operates, the deep layer that runs through all living systems beneath the level where structured magic begins. He had learned to access that layer directly, and what he could access he could accelerate.\n\n**In the Limbo War**\n\nOmegaruin was the most difficult of the three Primal champions to fight because he did not fight in a way the Ascen forces expected. He had no aggressive drive. He walked toward what was destroying his people with the calm of a being who had already accepted that his own ending was also coming — and who chose to cost the Ascen assault as much as possible before it arrived. He moved through formations doing what he always did: helping things finish. Weapons degraded in hands that held them. Barrier spells concluded ahead of their intended duration. Mana reserves approached their endpoint faster than their users understood was happening. He did not target commanders. He targeted the infrastructure of sustained force.\n\nThe Ascen eventually overwhelmed him not through direct confrontation but by committing enough force that even his entropy could not complete them all before their numbers reduced him. He died knowing the assault would not last. Everything ends. His satisfaction in that knowledge was the last thing he felt.\n\n**What Vrak Kept**\n\nThe principle. That endings are not aberrations — they are the deepest truth of what things are. Vrak Arke recognized in Omegaruin a philosopher of something he himself had always believed: nothing should be permanent. The Ruin Beast is Omegaruin\'s patience made permanent, his serenity about endings crystallized into a weapon that helps everything it touches arrive at its conclusion.\n\nThe irony Omegaruin would have found appropriate: a being who believed in endings became a source of something that cannot end — and the clan that carried his weapon as inheritance for generations, Clan Vael itself, eventually ended too, spent as loyalist troops in the same suppression that outlived him by centuries. The beast passed on to Duki Navar, a man with no Vael blood at all, once there was no one left to hold it. Omegaruin would have called this fitting. Everything takes the time it takes.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Primal champion whose essence was forged by Vrak Arke into the Ruin Beast (Noble Treasure, Grand Table Seat I). Killed in Limbo during the Arke Wars — the Ascen assault overwhelmed him through sustained numbers. Core: Nature-Dark, sovereign entropy. His death had the quality he gave everything: it finished at its own pace, costs paid in full before it arrived. His clan, Vael, carried the beast for generations before going extinct; it is now held by Duki Navar, unrelated by blood.',
  },

  {
    id: 'eclips_ashveil',
    name: 'Eclips Ashveil',
    house: 'none',
    role: 'Primal Champion — The Eclipse · Source of the Eclipse Beast',
    epithet: 'She Who Consumed the Light · The Fullness of Darkness',
    status: 'deceased',
    location: 'Historical (Limbo — Primal Age)',
    importance: 3,
    coreType: 'Darkness — Sovereign Consumption',
    description:
      'Eclips Ashveil was not born into darkness. She grew toward it. Her early life was unremarkable until she discovered that light, for her, was the least informative thing in the world. She could hear the heat of a body from fifty meters. She could feel the pressure of a person\'s presence against the air. She could read the resonance of a space by how sound returned to her. Light gave her none of this — it gave her only the surface of things, the flat visible layer that sat on top of everything real.\n\nShe spent decades learning to shut it out completely. Not by closing her eyes — by consuming it. Drawing it in, making it hers, turning illumination into fuel. Her Darkness core was not the darkness of absence — it was the darkness of fullness on the other side of the equation. When Eclips consumed the light in a space, that light became hers. It fed her. The eclipse she created was not an empty space. It was a space where everything illumination carried had moved into her.\n\nOpponents who fought her found they could not use their own light-based abilities against her. Every spell they cast that carried illuminating force fed her instead of countered her. The brighter the attack, the better she ate. Clan Ashveil have maintained this principle for generations: darkness is not the absence of power. It is where power goes when you take it.\n\n**In the Limbo War**\n\nThe Ascen assault on her people ran into a problem that their commanders had not anticipated. They could not see where she was. They could not use light-based signaling. They could not coordinate at range in any space she occupied. She did not fight them in the conventional sense — she redirected them. Drawing illumination in, leaving them navigating what felt like a cave, while she perceived everything through heat and pressure and sound.\n\nThe Ascen forces eventually solved her by coordinating blind. They accepted that their own visibility was compromised and operated on pure tactical planning rather than real-time sight, overwhelming her from multiple directions simultaneously. It required a full assault corps. The discipline it took spoke to how difficult she had been to dislodge. Several Ascen commanders who survived the engagement reported being unable to describe what they had fought — only that the light was gone and something warm had moved through them.\n\n**What Vrak Kept**\n\nThe consumption principle. Power absorbs rather than emits. What Eclips had discovered — that the most complete relationship with light was to be the place it went — became the Eclipse Beast: a darkness that does not block illumination but drinks it. Clan Ashveil wield her sovereign consumption as a cultural identity. They have operated in her darkness for so long they have developed a genuine distrust of beings who require light to function.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Primal champion whose essence was forged by Vrak Arke into the Eclipse Beast (Noble Treasure, Clan Ashveil, Grand Table Seat II). Killed in Limbo during the Arke Wars — required full Ascen assault corps operating blind through coordinated tactics. Core: Darkness, sovereign consumption. She did not darken spaces — she ate whatever light entered them.',
  },

  {
    id: 'erasse_nullar',
    name: 'Erasse Nullar',
    house: 'none',
    role: 'Primal Champion — The Erasure · Source of the Erasure Beast',
    epithet: 'He Who Left No Trace · The Gap in the Record',
    status: 'deceased',
    location: 'Historical (Limbo — Primal Age) — [record incomplete]',
    importance: 3,
    coreType: 'Space — Sovereign Unmaking',
    description:
      'Nobody agreed on what Erasse Nullar looked like. This was not a failure of memory. People who stood beside him and paid careful attention came away with different descriptions. Not wrong descriptions — different ones. His eyes were blue, said one. Dark, said another. Both were certain. Both had been looking at the same person at the same time.\n\nIt was not that Erasse was changing. It was that proximity to him produced a mild but persistent gap in how experience was filed into record. Not just external records — the internal record. The way a person files what they have experienced into memory. Near Erasse, that process had seams. He did not do this deliberately. It was his nature bleeding into the world around him the way heat bleeds from a warm object. He was a being whose presence was naturally self-erasing, and over centuries he had come to understand this as his most fundamental property.\n\nHe did not fight for recognition. He never held titles. He was known in the Primal world primarily by the consistency of the gap he left — the shape of an absence that returned in the same location when the same people met to discuss him. He found this acceptable. He had never been interested in record. He was interested in the peace of things that had been quietly removed from it.\n\n**In the Limbo War**\n\nHis role was the most unusual of any Primal champion. He did not hold territory or lead forces. He moved through the Ascen campaign\'s infrastructure and unmade its information architecture. Plans disappeared. Recorded positions of Primal forces became illegible in Ascen records. Supply chains that moved through areas he had occupied could not be reconstructed afterward — not because the records were destroyed, but because they simply were not there. The Ascen forces lost months to the persistent sense that their intelligence was less complete than it had been without being able to identify what was missing.\n\nHow he was killed is not recorded. Clan Nullar\'s founding documents — which should contain his death as their most important historical entry — are blank at the relevant page. The Book of Time has a gap at the corresponding date that Cronus notes as deliberate: Erasse\'s quality persisted through his own death. There is no record because there could not be one. He died the way he lived: without a trace. The Ascen forces who were present reported that at a certain point he simply was not there anymore, and that the moment of transition was not something anyone could describe.\n\n**What Vrak Kept**\n\nThe absence with intent. The Erasure Beast is not a void — it is an intentional gap. Erasse\'s nature was never destruction. It was the peaceful removal of what should not persist in the record. The beast carries this principle forward as pure applied will: the world is cleaner when the things that should not have happened are quietly taken from it. Clan Nullar are the smallest and most secretive of the Arke-loyal noble clans. Their entry in the Grand Table seat registry is listed simply as \'III.\' This is exactly what Erasse would have chosen.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Primal champion whose essence was forged by Vrak Arke into the Erasure Beast (Noble Treasure, Clan Nullar, Grand Table Seat III). How he was killed: unrecorded — his unmaking quality persisted through his own death. The Book of Time has a deliberate gap at the date. Core: Space, sovereign unmaking. He did not destroy things — he removed them from the record. Clan Nullar\'s secrecy is his direct inheritance.',
  },

  {
    id: 'cycla_more',
    name: 'Cycla More',
    house: 'more',
    role: 'Elder of the Oldest Primal Clan · Last Leader of the Unbroken Primals · He Who Held the Door',
    epithet: 'The Unmoved · He Who Held the Door · Keeper of the Old World\'s Memory',
    status: 'deceased',
    location: 'Historical (Limbo — Primal Age)',
    importance: 4,
    _dataRev: 2,
    coreType: 'Energy-Dark (primary) · Harmony-Light (secondary) — rarest dual-sovereign polarity ever recorded',
    description:
      'The elder of the oldest surviving Primal clan — a lineage predating the birth of the Arke twins, unbroken from before the Death of the Ancients, and the most traditional adherents to the Primordial Three. The More Clan remembered Gaia, Cronus, and Kazemi not as sealed weapons but as living forces of nature — beings whose presence shaped the fabric of Limbo itself. This memory is the foundation of everything Clan More carries into the modern world.\n\nWhen the Arke twins waged war on the Primals, Cycla More was the one the twins wanted most: capturing him would have meant capturing the last authentic thread of the pre-Mana world. He refused the deal. Refused forced conversion. He spent the final years of the war doing one thing: moving his people — leading hundreds of thousands of Primals through the hardest terrain in Limbo, trading smaller defeats for the larger calculation of survival.\n\nHis Core State combination — **Energy-Dark (primary) with Harmony-Light (secondary)** — was the rarest dual-pillar affinity ever recorded: two Sovereign-tier energies of opposing polarity, simultaneously active in a single body. He weaponized this in his final act.\n\nWhen the twins committed their full forces to the last Primal stronghold, Cycla stayed behind while Cith More led the evacuation. He performed the **Black Light Dance** — burning his entire mana reserve and then his life force as fuel, igniting his Darkness and Light energies in mutual resonance until they amplified into a cascading annihilation field that traveled at the speed of thought. It permanently scarred both Vrak and Selis. The only recorded act to physically mark the children of a Conceptual of Magic. He died performing it. He knew the cost before he began.\n\n**What Cycla knew and passed to Cith:** The Primordials were not tools or concepts in an abstract sense — they were beings who cared. Gaia chose what to connect to. Cronus chose what to record. Kazemi chose what to fight. The fact that they are now sealed within weapons wielded by Grand Families who claim to honor them was, to Cycla More, the final confirmation that the war they lost was not truly over. He told Cith: the Primals\' survival was not an ending — it was the preservation of a witness. Someone had to remember what was actually true before the Arke twins\' version of history became the only version.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Clan More holds the Primals\' full-truth knowledge of the Primordials as living beings — not sealed weapons. This is the root of their permanent rivalry with House Vane, who hold a different half of the same truth from the Arke twins\' perspective.',
  },
  {
    id: 'cith_more',
    name: 'Cith More',
    house: 'more',
    role: 'Daughter of Cycla More · She Who Opened the Earth Path · Founder of Clan More in the Living World',
    epithet: 'The Inheritor · She Who Trusted · She Who Sent Them Where Only She Knew',
    status: 'historical',
    location: 'Historical (Limbo — extended lifespan → Mana\'s Hidden Realm → Unix World)',
    importance: 4,
    _dataRev: 3,
    coreType: 'Nature-Energy (primary) · Chaos-Dark (secondary)',
    description:
      'Daughter of Cycla More and his operational second for the final decade of the Primal war. She organized the evacuation of hundreds of thousands of Primals toward Mana\'s hidden realm — and made the decision, against every established reason to refuse, to lead her people through.\n\nHer Core State — **Nature-Energy primary with Chaos-Dark secondary** — gave her an unusual relationship to ordered structures: she saw through fixed systems. When the evacuation force found Mana already waiting, the surviving Primals hesitated. They knew his children\'s war had nearly ended them. Cith looked at Mana\'s face — aged, carrying a million years of debt — and recognized that no being carrying that weight had sent his children to do what they had done. The guilt was the evidence. She was right.\n\n**Mana told her about Earth:** In the time Cith spent at Mana\'s hidden realm, he told her directly about Earth — a world capable of sustaining life, entirely separate from the Orian system, beyond the reach of the Arke twins\' contract frameworks. He described it as a place where people could live without being owned by the covenant systems that had nearly destroyed everything. She was the only being he trusted with this knowledge.\n\n**The Earth crossing:** When Dulla Vane\'s Ascen forces backed the Primals against a wall — Exco Wov had conceived the plan to hide Eve, Adam, and their children with the Primals in Limbo, but the Ascen were closing in — Cith acted. She used what Mana had told her. She found the dimensional crossing to Earth and sent Eve, Adam, their six children, and the necessary companions through. The Earth crossing is her act, not Exco\'s.\n\n**Limbo\'s extended lifespan:** Beings who spend significant time in Limbo live longer than their Orian equivalents. The temporal weight of Limbo is different — time does not pass the same way there. This is what explains Cith More\'s extraordinary longevity. She spent more time in Limbo than almost any being in recorded history: fighting, losing, evacuating, and eventually planning. By the time she entered the merged Sol-Nexus world, she had outlived multiple generations of Orian civilization.\n\n**The rival — and the truth:** Her confrontations with Dulla Vane in Limbo were the defining engagements of the evacuation period. He commanded the Ascen; she commanded the Primals. Neither could kill the other. The standoff lasted longer than any single war in Orian history — and no historian has ever explained why. Both sides recorded it as a tactical deadlock of extraordinary sophistication. The Primal accounts say she killed him first. The Ascen accounts say he killed her first. Both are wrong.\n\nThey fell in love. The clashes that Orian historians remember as world-shaking were the most elaborate excuse two people ever found to keep meeting. The "unbreakable parity" between them was a shared choice, extended across years, in front of two dying civilizations. When the Primals moved toward the Earth crossing, Cith did not lead from the front. She went to Orius — the dead world — with Dulla. They faked their deaths together. They spent what remained of their time there with each other, building a life no record has ever acknowledged.\n\n**On Orius — secret children:** Cith and Dulla had two children on Orius. The first, **Darkki Ardent**, took a new name and built the lineage that became House Ardent — the same house Aevum would later use as his public cover, unknowingly founded on Dulla\'s secret family. The second, **Noxa Nexal**, became the progenitor of the Nexal bloodline\'s future-sight ability — ancestor of both Tenza and Arai. Dulla\'s children and Cith\'s bloodline intertwined in ways neither civilization ever learned. Aevum never knew. The Arke twins never knew. The arms race Cith initiated against Vane — the one Abe carries forward — has always been fought against a house whose founding son was the same man Cith loved. The irony is absolute.\n\n**Into the merged world:** Cith More led her people through yet another threshold — integration into a world built on contract systems the Primals had no part in creating. She established Clan More as independent of both Ferali and Celestial frameworks: the Primals would exist on their own terms, or not at all.\n\n**The arms race:** As the Sol-Nexus formed, Cith encountered the Vane dynasty and understood immediately what they represented. Neither house could expose the other without condemning themselves. Neither could let the other grow unchecked. The genetic arms race Cith initiated — elemental cultivation through careful lineage design — is her response to the war she could not openly fight. It is still ongoing.\n\n**The More lineage continued:** Separately from her children with Dulla, Cith had a son — **Toma More** (Energy; chaotic-dark) — who carried the More clan forward as the public continuation of the lineage. Toma\'s first daughter died in war; his second daughter, **Abe**, survived and claimed the title of More clan leader. Abe now holds the position Cith once held: the operational head of the oldest Primal-era human lineage in the Sol-Nexus. She inherits the arms race. She inherits the rivalry with Vane. And she inherits the incomplete picture — what she knows of the Primal clans is based on the same six-clan historical record Keal documented, the one that writes Cycla More out of history entirely. Abe does not yet know what her great-grandfather refused to become. She does not know about Darkki, Noxa, or Dulla at all.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Mana personally told Cith about Earth. She opened the crossing that sent Eve, Adam, and the 6 Earth children through — this is HER act, not Exco\'s. Limbo\'s temporal weight explains her extraordinary longevity. Her "rivalry" with Dulla Vane was actually a love story — they faked their deaths and had two secret children (Darkki Ardent, Noxa Nexal) on Orius. Separately, her public-lineage son Toma More (Energy; chaotic-dark) continued the More clan — his daughter Abe is the current More clan leader. Abe knows nothing of Darkki, Noxa, or Dulla.',
    _dataRev: 4,
  },
  {
    id: 'abe_more',
    name: 'Abe More',
    house: 'more',
    role: 'Leader of Clan More · Second Daughter of the More Lineage · Heir to the Primal Arms Race',
    epithet: 'She Who Inherited the Unfinished War · The Youngest Leader',
    status: 'active',
    location: 'Sol-Nexus (current era)',
    importance: 4,
    _dataRev: 1,
    coreType: 'TBD',
    description:
      'The current leader of Clan More — the oldest Primal-era human lineage in the Sol-Nexus. She is the granddaughter of Cith More (through Cith\'s son **Toma More**, Energy; chaotic-dark) and the great-granddaughter of Cycla More, the Primal Elder who performed the Black Light Dance.\n\nAbe holds the title of clan leader by succession through war: her older sister, the original heir, died in battle. Abe was the second daughter — not the planned successor. She took the role she was handed and has held it since.\n\n**What she knows:** Abe\'s knowledge of the Primal clans is built on the same historical record available to the wider Sol-Nexus — the six-clan account Keal documented based on the Primal leaders the Arke twins defeated. In that history, there were six Primal clan leaders. The More clan\'s own founding figure, Cycla More, does not appear in it. Abe does not know that her great-grandfather was the seventh Primal leader — the one who refused the twins, ran for three years, and died buying the evacuation. What she knows of him is family memory: the elder who held his people together, who died in the war, whose daughter built something out of nothing. The history of *what he refused to become* has never reached her.\n\n**Her view of Irane:** Abe believes Irane Kazemi is the closest thing to what the More clan reveres — a forced Conceptual who exists outside every framework the Arke twins built. The clan\'s philosophy (structural reverence for beings who fall outside established categorization) makes Irane the living proof of everything they have argued for centuries. She views him not as an Emperor to be governed under but as a being whose existence confirms that the More clan\'s philosophy was right all along. Whether this admiration is theological, political, or personal is something she has not fully resolved.\n\n**The arms race continues:** She carries Cith More\'s strategic project forward — the lineage cultivation, the deliberate development of More clan descendants outside the Ferali/Celestial contract systems. The rivalry with House Vane she inherited is operational, not merely ideological. She knows the shape of the board. She does not know the board\'s full history.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Granddaughter of Cith More through Toma More (father, Energy; chaotic-dark). Took leadership after her older sister died in war. Reveres Irane as philosophical proof-of-concept. Knowledge of the Primal world is based on the six-clan record — does not know Cycla More was the seventh Primal leader who escaped. Does not know about Cith\'s secret children with Dulla Vane (Darkki Ardent, Noxa Nexal). More clan arms race with Vane is active.',
  },
  {
    id: 'toma_more',
    name: 'Toma More',
    house: 'more',
    role: 'Son of Cith More · Primal Clan Leader · Father of Abe More · The Last General of His People',
    epithet: 'He Who Fed a God · The Man Who Used His People · Architect of the Trial of Kazemi',
    status: 'deceased',
    location: 'Historical (Primal war era → early Sol-Nexus era)',
    importance: 3,
    coreType: 'Life/Death-Energy; Chaotic-Dark',
    description:
      'The son Cith More had as the public continuation of the More lineage — separate from her secret children with Dulla Vane (Darkki Ardent and Noxa Nexal). His core — Life/Death-Energy; Chaotic-Dark — is the most complete inheritance of the More bloodline: the raw primordial force of life and death, amplified by the energy that drives it, expressed through the chaotic-dark alignment that has run through the clan since Cith.\n\n**What His Mother Gave Him**\n\nCith taught him what she had learned in her time with Mana: not just the spell-framework fragments that became the More clan\'s distinct approach to magic, but the things Mana had spoken of openly — things that were not public knowledge and were never meant to be. Two in particular. The first: the existence of a realm called Earth — a hidden world reachable through a Rift Mana had created, accessible only to beings with perfectly balanced cores (50/50 force and aura). The world where Cith had personally moved the first humans when the Arke twins began hunting Eve and Adam for their use of Mother Nature and Father Time. The twins did not know what Eve and Adam were — born of Mana, carrying a reincarnated mother\'s legacy — only that they were dangerous and needed to be eliminated. Exco Wov had made the call to send them through the Rift. Cith had opened the route and executed the crossing. The twins never followed. The Rift was sealed behind them.\n\nThe second thing: Kazemi. The being Mana had created and left incomplete — the instrument designated as the last resort, a trial system bound to the remains of a Primordial and left in the More clan\'s care. Not public knowledge. Barely even spoken of within the clan itself. Toma knew it was real because his mother said it was, and his mother had learned it from Mana.\n\n**The Spy**\n\nIn his youth, Toma operated as a contact point between the More clan and the heads of the Wov and Osiro clans. He carried the dark history: what the Arke twins had done to Orian society, how the world\'s structure had been deliberately engineered to produce war and population pressure, what the Aethen — former Primals who had chosen to serve the twins for survival — had become. He was not naive about any of it. He also was not yet hardened. The man he was in this period invented something: a Festival. A formal occasion for the Arke-aligned Alma and Spirit clans to receive tools and beasts — an event of happiness, of giving and mutual receiving, a moment where the two populations could experience something the world otherwise denied them. It was his idea. He meant every bit of the goodwill behind it.\n\n**The Navar Connection**\n\nDuring the period when the war between Ascen and Primals was still strategically even — sustained by Dulla Vane\'s hidden reluctance to fully destroy his mother\'s people — Toma was embedded near the Navar clan. He fell in love with a woman of the Navar lineage. Their son — Tan Navar (Life/Death; Harmony-Light) — was born during this period. Shortly after Tan\'s birth, Cith\'s position in the war changed. The even standoff was ending. Toma returned to lead the Primals. He left Tan to be raised by his mother, in the Navar clan, under the Navar name. His father\'s identity was never disclosed.\n\n**The World That Changed**\n\nWhen Dulla vanished from the war, the balance collapsed. The Ascen used magic and spells — the very things most Primals considered evil, the tools of a false system built on the corruption of the gods they revered. *Magic is the very thing that killed our true Gods*, the Primal elders said, referring to the Primordials who had been overwhelmed and destroyed in the age of the twins. The elders chose death. *Better to die free than a slave* echoed through the remaining Primal communities — and they meant it. They were prepared to be erased. They had accepted it.\n\nThe young Primals who learned magic to survive were scorned by those same elders. The Aethen — former Primals who had joined the twins generations ago — were held as the ultimate example of what betrayal produced: transformation into tools and beasts, former brothers and sisters now used as weapons against their own kind. The elders pointed at the Aethen and said: *this is what magic and service to the twins makes of a person.* And the young answered by doing it anyway, because the alternative was extinction.\n\nToma watched all of this. He had by this point become what the weight of leadership and the death of his mother made him: not the man who invented the Festival, not the spy who believed in goodwill between peoples, but someone who looked at the totality of his civilization\'s condition with clear eyes and concluded one thing — *use all of it.* The elders\' willingness to die. The youth\'s willingness to use forbidden tools. Use all of it. In service of one goal: the destruction of Aevum\'s bloodline, which had commanded the Ascen forces that wiped out everything he had ever known.\n\nHe grew. In power, in calculation, in the ruthlessness that comes from watching your people be systematically destroyed while you survive. By the time the Arke twins had effectively stopped worrying about the Primals — they were already a solved problem, handled by the Ascen — Toma had grown to equal Niro Vane, the Ascen leader, in raw power. Not that it mattered at scale. An equal to the Ascen\'s strongest was not a counterforce against a civilization.\n\n**The Trial of Kazemi**\n\nHe reframed what his mother had told him. He had to — the true nature of Kazemi was not something his people would enter willingly. He needed different arguments for different people.\n\nTo the elders who sensed the ancient Primordial mana radiating from the trial system — the genuine power of their dead god present in its structure — he presented it as sacred sacrifice. A way to be with Kazemi. An atonement for what the Aethen had done — a final act that would bring about the destruction of the Arke twins and the creation of a new world from the ashes. All they had to do was offer their cores to the god who would use them for salvation. They had chosen death anyway. This gave their deaths a direction.\n\nTo the youth who had already chosen survival through magic: he named it *The Trial of Kazemi* and framed it as a gauntlet, a test, a way to produce a being capable of ending the twins\' power. He was not wrong about what it would eventually produce. He did not know how many generations it would take.\n\nOne hundred million Primals entered the trial. Their cores did not return. He also fed the captured cores of Ascen enemies into the system — not as sacrifice but as fuel, enemies made useful at the end.\n\n*Good riddance.* That was his internal verdict as he watched them go. He meant it. He had loved his people and he had used them, and the man who had once invented the Festival to give happiness to people who had none watched one hundred million of his own enter something he knew was not salvation and felt nothing he could name as grief. Only the weight of necessity.\n\nThe truth of what was happening inside the trial was not salvation. Enari-Kazemi in the sealed state was a being in gestation — absorbing every core fed to him, using the life-forces it carried to generate mana and grow, expanding his mass with everything he received. Like a fetus, not a god awakening to answer prayer. Growing. The cores of 100 million Primals and countless Ascen enemies were not offerings. They were food. Toma did not know the full extent of this. He knew enough.\n\n**Earth — The Discovery and the Despair**\n\nHe found Earth eventually. The hidden world his mother had helped protect, where the descendants of Adam and Eve had grown into a species over generations. Billions of human beings — the living legacy of Mana\'s legacy on Earth, the children of the first two people Cith had moved through the Rift when the twins had wanted them dead.\n\nHe was overjoyed. Billions of potential allies, a species born from the same source as everything the More clan had protected, descended from the users of Mother Nature and Father Time. He believed the six children of Eve and Adam were aligned with the Wov and Osiro families — he only needed to find them.\n\nThen he looked closer. Humans had no cores.\n\nThe joy became despair. An entire species, billions of them, and none of them capable of being what he needed — because the mechanism Mana had built for human existence on Earth had left their cores sealed or absent in ways that made them fundamentally different from Orian beings.\n\nThis despair became the facility.\n\n**In the Facility**\n\nThe facility is Toma\'s answer to the coreless human problem — his attempt to engineer in humans what Mana had not given them, using the same life-force research his instruments developed. He speaks to Ember Vane and Zoe Navar in the facility from a place of absolute grief made into absolute will.\n\n*"Why? They stole my mother from me, drove my race to near extinction, they took my Grandfather and Mother from me, I watched it all with eyes and you ask me why? They took it all from me, so I will take it all from them. I reject it all, and I will not rest until the bloodline of Aevum has been wiped clean from the face of history, and you will be the ones to grant me that."*\n\nHe does not know that one of the women in front of him is his granddaughter. Zoe Navar carries the chaotic-dark expression of his bloodline — Tan\'s core was Harmony-Light, but Toma\'s Life/Death-Energy chaotic-dark runs in the More lineage and expressed two generations down. The woman whose life the facility destroyed is the daughter of the son he left behind in the Navar clan. Neither of them knows.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Cith More\'s son — the public-lineage continuation, distinct from her secret Dulla Vane children. Core updated: Life/Death-Energy; Chaotic-Dark. Main antagonist of the Facility and War for Humanity\'s Soul arc. Secret father of Tan Navar (Life/Death; Harmony-Light) — making him Zoe Navar\'s grandfather. Invented the Festival (event of giving tools/beasts to Alma/Spirit clans — later corrupted into the Fest massacre). Sacrificed 100 million Primals + captured Ascen cores into the Trial of Kazemi. Found Earth but discovered humans were coreless — this despair became the facility. Father of Abe More, Tan Navar (secret, pre-Earth), and Evelyn More (born after arriving on Earth). See id: evelyn_more.',
  },
  {
    id: 'evelyn_more',
    name: 'Evelyn More',
    house: 'more',
    role: 'Daughter of Toma More · Born on Earth · Interrogator',
    epithet: 'Eve',
    status: 'active',
    location: 'Earth — Toma More\'s main laboratory',
    importance: 2,
    coreType: 'Life/Death-Fire-Ice; Chaotic-Light',
    description:
      'Toma More\'s daughter, born on Earth to a human woman after his discovery of the planet and its coreless people — decades after Tan Navar, the secret son he left behind in the Navar clan before ever making the crossing. Where Tan\'s core muted the More bloodline\'s chaotic-dark expression down to Harmony-Light, Evelyn carries a fuller, more openly volatile version of her father\'s inheritance: Life/Death paired with Fire and Ice, chaotic-light rather than chaotic-dark, the same conceptual weight expressed through a different temperature.\n\nShe goes by Eve. She serves her father directly and without visible hesitation — the first thing she does on-page is kneel to him and accept an assignment she clearly relishes: extracting answers from Namo Consa after his daughter Minia\'s unit saves the Kazemi Primal capital Toma engineered to fall. Her method is precision cruelty rather than rage — mockery delivered with total control, a "date" euphemism for what is coming to Namo. She wields Fire magic capable of projecting recorded events directly from residual mana — **"Revealing Flame."**\n\nShe does not know she has a nephew. Tan Navar died before Zoe was born, and neither Zoe nor Toma have ever learned of their shared blood — which means Evelyn, technically Zoe\'s aunt through Tan, is equally unaware that the connection exists. The secret runs three generations deep and nobody currently alive who is part of it knows it.\n\n**[Part 3.1]** Toma\'s actual standing assignment for her was never Minia specifically — it was the resistance, which has become a genuine, ongoing problem for his operations (the same resistance network that has already disrupted his plans around Z, Ember, and Simon Archiver). Confronting Namo and Minia was incidental to that larger assignment. Once inside Minia\'s lab, Evelyn made a working calculation rather than a loyalty one: Minia and 8 could accomplish what her father actually needed done far more effectively than a punitive interrogation would. She burned away Namo\'s binding spell to save the room using Life/Death-Fire Art: Scorching Mana, and the two women left the confrontation as active partners rather than as interrogator and target — Minia\'s forces to move against the resistance, in exchange for a target that serves Toma\'s actual priorities. She is not loyal to Minia. She is loyal to making her father\'s life easier, and Minia is presently the most effective instrument available for that.\n\n**[Facility Arc, Part 3]**\nEmbedded herself with the Primal leadership on her own initiative, bringing supplies personally rather than under the More banner, and began a relationship with Nevir Revyn that appears — from his side — to be real. Whether it is equally real on hers is left deliberately unresolved; what is certain is that he confides in her constantly, including his private fears about Sofia and about 8\'s growing influence over their people, and everything he tells her reaches her father. One-upped her own brother Alex\'s political position within the Primal court without his knowledge, treating the arrangement as a competition she was always going to win.',
    beast: {},
    weapon: {},
    powers: [
      { name: 'Life/Death-Fire Art: Scorching Mana', type: 'Personal Combination Art', description: 'A spell designed to burn not people but mana itself — active spells and bindings specifically. Used to dissolve Namo Consa\'s Spatial Art: Binds of Darkness before it could trap the room.' },
      { name: 'Fire Magic: Revealing Flame', type: 'Surveillance / Scrying Spell', description: 'A white-blue flame that projects recorded events directly from residual mana traces, playing them back as a viewable scene. Used to show Toma More footage of the Kazemi Primal Capital assault, cutting out the moment 8\'s final explosion destroyed whatever had recorded it.' },
    ],
    gates: [],
    psyche: [],
    notes: 'Daughter of Toma More, born on Earth to a human mother. Half-sister of Tan Navar (secret, pre-Earth) — making her Zoe Navar\'s aunt, unknown to either of them. Core: Life/Death-Fire-Ice; Chaotic-Light. Wields "Revealing Flame" (Fire magic — projects recorded mana-events). Introduced interrogating Namo Consa after the Kazemi Primal capital assault fails to produce the genocide Toma engineered.',
  },
  {
    id: 'nuro_vane',
    name: 'Niro Vane (Historical)',
    house: 'vane',
    role: 'King of Terra · Father of Ember, Nuro, and Axola · Leader of the Age of Chaos',
    epithet: 'The Warlord King · He Who Held the Spear First',
    status: 'deceased',
    location: 'Historical (Terra → Unix World, died Unix Year ~131)',
    importance: 3,
    description:
      'The King of Terra at the time of the world-merger catastrophe, and one of the most consequential figures in early Sol-Nexus history. Father of **Ember** (3rd daughter, gifted to the facility at age 13), **Nuro** (son, who continued the Vane bloodline after the stasis), and **Axola** (son, held as the family\'s presumed strongest heir — carrier of the "Reincarnate of Aevum" title). He served the Celestials as Auris directed, believing his own ambitions were his own. When the merger happened, he was the most powerful Vane alive — and when the Great Stasis ended 1000 years later, he woke with more accumulated authority and pre-existing power than anyone. He found the **Spear of Unix**, recognized it for what it was, and spent 130 years consolidating control over the 14 Noble Treasure holders. He sealed Irane in a separate realm before launching the strike on Valariya that killed 4 million people. He was killed by Irane personally during the 1-Year Crusade at Unix Year ~131. The Year 500 Lord Niro Vane is his grandson through Nuro, named after him deliberately to carry the dynasty\'s most infamous ambition forward.\n\n**[Parts 2.1–2.4 — "Arrival of the Devil" Arc]**\nStill alive and leading the Age of Chaos at this point in the timeline — this is decades before the world-merger catastrophe that ends with the Great Stasis. Presided, alongside Azen Lucerne and Elorah Seraph, over the judgment of Nuro, Duki Navar, and Olda Apolo following the catastrophic failure of the assault on the Kazemi Primal Capital. Sentenced Nuro to the PIT. Assigned Axola to lead the next attempt alongside Tenza and Tola Ardent. Concluded, based on Tenza\'s and the two Grand family heads\' assessments of what 8 actually was, that the Primals might have found a power capable of threatening the Arke twins themselves.',
    notes: 'Father of Ember, Nuro, and Axola. See id: axola_vane for the third child, introduced in the "Arrival of the Devil" arc.',
  },
  {
    id: 'tonga',
    name: 'Tonga',
    house: 'nexal',
    role: 'Nexal Clan Leader (Arai\'s Era) · Father of Tenza, Arai, and Nina · Revered Genius of the Magic Arts',
    epithet: 'The Man Who Answered Without Hesitation',
    status: 'deceased',
    location: 'Historical (Terra/Orian era)',
    importance: 3,
    coreType: 'Time-light; harmony-light',
    description:
      'The Nexal clan leader at the time of Arai and Tenza\'s childhoods — old (approximately 120 years of age during the Academy era), visibly sickly, and considered by everyone who knew him to be the most complete practitioner of the magic arts his generation had produced. He did not have the physical presence of a military leader. He had the weight of someone who had never needed it. Revered within Nexal tradition as a theorist and architect of spells; the Elder-Sages who outlived him cited his structural frameworks in spells still used long after his death.\n\nHis core — Time-light; harmony-light — is the most Harmony-aligned of the known Nexal bloodline. Where most Nexal descendants express their Time lineage through precision and calculation (Noxa\'s Game as forward probability), Tonga\'s expression was structural: the ability to lay frameworks across time that others walked through. He understood how things moved before he needed to calculate where they were going. He carried Noxa\'s Game in full — the complete version that Tenza later inherited from him.\n\n**The Conversation Arai Overheard:**\nLord Niro Vane sent his young son — a boy of about ten, also named Nuro — to the Nexal household as a political emissary. The errand was a negotiation: the Vane household wanted a child of Time-magic lineage as a bride contract, leverage for the Nexal clan\'s continued political cooperation. Tonga met with the boy.\n\nTonga answered without hesitation. He did not pause. He did not negotiate. He named Arai.\n\nThe boy — young Nuro, ten years old, standing in a house that was not his own on an errand his father had sent him to execute — glanced toward where Arai stood and said, almost to himself: *"Ah, the dud. Not wanting to share the good with us."*\n\nArai was twelve years old. Her core ability had not yet manifested. Every other member of the Nexal household — Tenza with his probability-calculation, Nina with her time-stream fluency — showed their abilities clearly. Arai did not. To anyone observing from outside, she was the blank one. The one who had been given a Time bloodline and appeared, so far, to have nothing to show for it.\n\nTenza was in the room. He said nothing.\n\nArai had already enrolled in the Grand Mana Academy two years prior — partly to postpone the marriage obligation, partly to prove that the blank one was not blank. What Nuro\'s words did was confirm the shape of what she was trying to outrun: not just the marriage contract, but the judgment. She was not just the daughter being traded. She was the daughter being traded because she was considered expendable.\n\n**What Tonga Knew:**\nWhether Tonga\'s answer was cold calculation, strategic sacrifice, or something his future-sight had already resolved as necessary, no record accounts for it. Noxa\'s Game does not produce regret — it produces optimal moves. The question of whether the move was right is a question the game does not answer. Tonga did not survive long enough to see the consequences, and he left no written explanation.\n\nHe died before Arai was taken to the facility — killed by his own son. During the chaos of Toma More\'s assault on the Grand Mana Academy, Tenza killed Tonga and took clan leadership, and the Chronos Bow, for himself. No record explains why. Whether it was ambition, a mercy, or something Noxa\'s Game had shown him that he never spoke of, the fact is simply this: the man who named his daughter away without hesitation was ended, without hesitation, by his son.\n\n**— Story Arc —**\n\n**[Nexal Clan Leadership — The Conversation Arai Overheard]**\nTonga was the Nexal clan leader during Arai and Tenza\'s childhoods, revered as the most complete practitioner of the magic arts his generation produced. When young Nuro (about ten years old) arrived from the Vane household to negotiate a bride contract, Tonga named Arai without hesitation. The Chronos Bow passed to the Nexal bloodline as reward for the clan\'s cooperation with the Vane and Arke twins. Tonga died at the Grand Mana Academy assault, killed by Tenza, who inherited both the clan leadership and the bow.',
    notes: 'Father of Tenza, Arai, and Nina. Age ~120 at Academy era. Core: Time-light; harmony-light. Carried Noxa\'s Game in full — passed to Tenza. Revered as a magic arts theorist; Elder-Sages cited his frameworks long after his death. Named Arai immediately when Lord Niro\'s young son Nuro came to negotiate — Tenza was present and said nothing. Young Nuro called Arai "the dud" because her core had not yet manifested. Killed by Tenza during the Grand Mana Academy assault — Tenza inherited clan leadership and the Chronos Bow. Do not use "Tonga" for any battlefield content after this point — that is Tenza. See id: tenza for the Earth-arc Story Arc.',
  },
  {
    id: 'tenza',
    name: 'Tenza',
    house: 'nexal',
    role: 'Arai\'s Brother · Betrayer',
    epithet: 'The One Who Left Her There',
    status: 'active',
    location: 'Kazemi Primal Capital — commanding the Ascen gate assault',
    importance: 2,
    description:
      'Arai\'s older brother — 4 years her senior. Age 24 at the time of the Academy class (Arai 20). Core: Time-dark; harmony-dark. His Noxa\'s Game ability is already fully active by this point — the probability-calculation inherited from Tonga, running continuously. He is two years from clan leadership. His betrayal of Arai was total and operated on multiple fronts simultaneously. When the Vane household sought to use the Nexal clan\'s Time magic lineage as political currency, Tenza agreed to give Arai as a bride to the Vane house in exchange for his own advancement — a deal Arai overheard at age 12 and never forgot. As further reward for the Nexal clan\'s cooperation, Tenza was promised Ember Vane as his wife when she came of age.\n\nThe Nexal clan participated directly in the Fest massacre alongside the Vane, Lucerne, and Seraph forces — their Time magic disruption abilities were used to prevent the four alliance clans from organizing a coordinated escape. During the assault, Tenza appeared to burn and destroy the Book of Time. He celebrated afterward. Selis Arke rewarded the Nexal family with one of her own tools — the **Chronos Bow**, an inheritable weapon that grows with the bloodline across generations — in gratitude for eliminating the weapon that countered her system. Every visible measure of the moment registered as a political victory.\n\nWhat no one knew: he had extracted and hidden the Book of Time\'s core before incinerating the physical vessel. The destruction was staged. The core survived. What the Nexal bloodline\'s future-sight ability told him about that core\'s eventual importance, he has never shared with anyone.\n\n**The double game:** To the Vane and their Celestial allies, Tenza was the loyal instrument who finally broke the weapon system\'s most critical piece. To himself, he was the player who made the only move the board required — preserving a piece while everyone else watched the match end. Whether his motivation was Arai\'s protection, the Nexal\'s generational calculation, or something else entirely, the fact remains: the core of the Book of Time did not die at the Fest. Tenza left with what history recorded as destroyed.\n\n**On Arai:** Tenza knew the Nexal bloodline\'s future-sight ability ran in the family. He also knew Arai did not have access to it. She was flying without the instrument every Nexal elder had used to navigate the world. He could see forward. She could not. What he did with the Book of Time\'s core, what he arranged with the Vane, and what he left behind — all of it operated on a board she was never given the map for. Whether that constitutes protection or abandonment is a question neither of them has answered.\n\nWhen the Celestials required a researcher for the life-force project, Tenza left Arai at the facility as leverage to secure his own release — a final deliberate abandonment. His betrothal to Ember was later voided when Historical Niro Vane sent Ember to the facility instead.\n\n**What He Did to Get Here:** During the chaos of Toma More\'s assault on the Grand Mana Academy — the same attack that took Arai, Hope, Zoe, and Mira — Tenza killed his own father. Tonga died there. Tenza inherited the clan leadership and the Chronos Bow in the same moment, and has carried both since. No one has asked him about it directly. Noxa\'s Game does not produce regret. Whether he feels anything else about it is not a question he has ever been asked in a room he could not simply calculate his way out of.\n\n**— Story Arc —**\n\n**[Parts 2.1–2.4 — "Arrival of the Devil" Arc]**\nStationed at the Kazemi Primal Capital main gate commanding 80M soldiers on Nuro\'s right flank. He warned Nuro against glory-blindness before the assault began. At the battle, Tenza fired the Chronos Bow at 8\'s predicted future positions — but failed to anticipate Sofia\'s crystallized earth blocks, placed across the field before the battle started. When 8 closed the distance, Tenza found himself in direct close combat — 8 deliberately keeping him close to use his proximity to kill surrounding forces. 8 was playing with him. Survived the mana-explosion climax by shielding himself, Nuro, and Tola Ardent in a barrier. Reported to Historical Niro Vane, Azen Lucerne, and Elorah Seraph afterward — gave the honest, unfavorable assessment that 8 was no ordinary human, and clashed openly with Axola Vane over it.',
    notes: 'Age 24 at the time of the Academy class (Arai 20). Age 29 when Arai was taken to the facility. Has an extremely unhealthy obsession with his sisters — Arai and Nina. The precision of his attention toward Nina specifically is different from how he regards anyone else; at the Academy attack he was seen carrying Nina out through the chaos with the directional clarity of someone who had already decided this long before the moment arrived. Killed his own father Tonga during that same attack and took the clan leadership and Chronos Bow. Any "Tonga" appearing in Parts 2.1 onward should read as Tenza — Tonga was already dead by then.',
    weapon: {
      name: 'Chronos Bow',
      type: 'Inheritable Tool — Gift of Selis Arke',
      description: 'A bow that fires into predicted future positions rather than present ones, growing more precise with each generation of the Nexal bloodline that carries it. Firing it is a full commitment — Tenza dislikes using it for exactly that reason, since it changes a battle in ways that cannot be undone once loosed. Gifted to the Nexal family by Selis Arke as reward for burning the Book of Time at the Fest.',
    },
    powers: [
      { name: "Noxa's Game", type: 'Nexal Bloodline Ability — Future-Sight Probability Calculation', description: 'Continuous forward-running calculation of outcomes, inherited in full from Tonga. Produces optimal moves, not certainty and not regret — the ability tells him what to do, never whether it was right.' },
    ],
  },
  {
    id: 'nina',
    name: 'Nina Nexal',
    house: 'nexal',
    role: 'Arai\'s Youngest Sister · The Time-Stream Swimmer · Future Major Player',
    epithet: 'The Fish in the River of Time',
    status: 'unknown',
    location: 'Unknown — last known: Nexal Clan homeland at Academy era',
    importance: 4,
    coreType: 'Time-water; chaotic-dark',
    description:
      'Nina Nexal is the youngest sibling in the Nexal household — six years younger than Arai, making her **fourteen years old when she joins Arai\'s five-year class** (Arai is twenty). She is Tonga\'s third child, born after Tenza (the eldest) and Arai. At fourteen she is already unmistakably different: her Time-water core combination is rare in a way that draws attention even within a Time-bloodline family. Where Time practitioners in the Nexal line experience future-sight as calculation — running outcomes forward like a mathematical problem — Nina\'s relationship to time is something else entirely.\n\n**The Time-Stream:** Nina experiences time the way a fish experiences water. It is not a dimension she observes from outside or calculates from a fixed point. She inhabits it. She can move through what she has called the "time-stream" — the layered current of what-has-been and what-is-becoming — with a fluidity that other Time practitioners cannot replicate. She does not predict. She swims. She can slip back along a current she has already been in, move sideways into a branch she recognizes, or surface in an adjacent moment without the linear effort that temporal work normally requires.\n\nAt fourteen, she does not yet have full language for any of this. She has only the experience: the world around her is a river and she is not standing on the bank.\n\n**Joining the Class:** Nina joins Arai\'s five-year class at age fourteen — alongside Hope Apolo, Zoe Navar, Mira Ardent, and Ember Vane. She trains formally under Arai\'s instruction. Adults who spend time near her sometimes find that she has answered a question they hadn\'t asked yet, or described something that happened before she could have known about it. The Nexal elders treat this as charming. Tenza watches it with a different kind of attention.\n\n**Arai and Nina:** Arai knows her sister is unusual in ways that matter. She knows Nina was nineteen years old when she was taken to the facility — fourteen when she first joined the class, already demonstrating the time-stream swimming that made every Nexal elder pay close attention. Arai had the full five-year class alongside her youngest sister before being extracted at the attack. There is a grief in Arai\'s relationship to Nina that is different from her grief about anything else: not what was done to her, but what she was not there for. Nina\'s fate after the facility era is not recorded.\n\n**Future Role:** Nina\'s ability to swim through the time-stream — rather than merely observe it — makes her something different from a standard Time practitioner. What she becomes, what she does with this ability when she is old enough to use it deliberately, and what her relationship to the Book of Time (which Tenza preserved) means for the Nexal bloodline: these are unresolved. What is known is that she will matter.',
    notes: 'Core: Time-water; chaotic-dark. Age 14 when she joins the class (Arai is 20). Age 19 when taken to the facility. Youngest Nexal sibling. The "time-stream swimmer" — not predictive calculation like Tenza, but literal temporal navigation. A fish in time, not a mathematician of it. MAJOR future role confirmed. DO NOT write her fate off — she was not recorded as dead. See also: id: tenza (elder brother), id: arai (elder sister), id: tonga (father).',
  },
  // ── Nexal and Ardent Founding Ancestors ────────────────────────────────
  {
    id: 'noxa_nexal',
    name: 'Noxa Nexal',
    house: 'nexal',
    role: 'Progenitor of the Nexal Bloodline · Founder of Noxa\'s Game · Child of the Secret',
    epithet: 'She Who Taught the Family to Count Forward',
    status: 'deceased',
    location: 'Historical (born on Orius; lived in the forming Sol-Nexus world)',
    importance: 3,
    coreType: 'Time-Energy; harmony-dark',
    description:
      'The second child of Dulla Vane and Cith More — born on Orius during the years her parents hid from the civilizations they had each led. She took the Nexal name: a new identity, no clan record, no origin story that would survive inspection.\n\nHer core combination — Time-Energy with harmony-dark secondary — produced an ability that no previous lineage had expressed in documented form: the capacity to calculate and predict future outcomes with exceptional precision. Not prophecy. Not vision. Pure calculation: the ability to read the accumulated weight of cause-and-effect relationships in real time and extrapolate where they were going. Noxa called it "the game" — a reference to the strategy boards popular in the Orian civilization her parents had both fought in. She framed it as chess. Every move creates information. Information creates the next available move. A player who can process all information simultaneously knows where the game is going before anyone else has moved their piece.\n\n**Noxa\'s Game:** The ability passed through the Nexal bloodline as an inherited trait. Not every descendant received it with equal strength, and the expression differed person to person — some calculated probabilities, some read behavioral patterns, some experienced it as foreknowledge that arrived without a clear source. All of them were better than everyone else in the room at knowing what happened next. The Nexal clan used this systematically: positioned within the Ascen power structure, accumulating political leverage across generations, never appearing to reach for power directly because they always knew which indirect path arrived there first.\n\n**Her children and theirs:** Noxa\'s descendants built House Nexal into a force the existing power structures consistently underestimated — because the Nexal did not look like they were playing. They looked like they were serving. That is exactly what the game required.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Child of Dulla Vane + Cith More. Born on Orius. Time-Energy; harmony-dark. Founded the Nexal bloodline\'s future-sight ability ("Noxa\'s Game"). Ancestor of Tenza and Arai. RARITY: The ability is rare even within the Nexal bloodline — having the Time core alone is already a significant inheritance. The future-sight is an additional gift that does not manifest in all descendants. Tenza has it. Arai does not — not in the Orian era. Her awakening will come later, during the facility experiments on Earth.',
  },
  {
    id: 'darkki_ardent',
    name: 'Darkki Ardent',
    house: 'ardent',
    role: 'Progenitor of the Ardent Bloodline · Founder of House Ardent · Child of the Secret',
    epithet: 'He Who Knew the Shape of Every Room',
    status: 'deceased',
    location: 'Historical (born on Orius; established House Ardent in the formed Sol-Nexus)',
    importance: 3,
    coreType: 'Space-Energy (Light-aligned); chaos-light — Rare dual-sovereign core',
    description:
      'The first child of Dulla Vane and Cith More — born on Orius, like his sister Noxa, outside every history that would eventually try to claim him. He took the Ardent name: new, clean, carrying nothing his parents carried publicly.\n\nHis core — Space-Energy with a Light-aligned chaos secondary — produced an inherited ability that manifested as full spatial omniscience: within any defined space, Darkki could perceive the exact position, movement vector, and presence weight of every person simultaneously. Not enhanced sight. Not supernatural hearing. A direct awareness of where everything was in relation to everything else, updated continuously, as natural as proprioception. The battlefield was his body. He knew it the way a person knows where their own hands are.\n\n**The Ardent bloodline:** The ability became the defining trait of House Ardent — inherited across generations with the same reliability as the Nexal\'s future-sight. Ardent clan members became specialists in long-range combat and spatial battlefield control, not because they trained for it, but because the ability made other approaches redundant. You do not need to close the distance when you already know exactly where everyone is and where they will be.\n\n**His assignment — the darkest irony:** Darkki was eventually assigned by the Ascen power structure to lead the extermination of the remaining Primals — his mother\'s people. He was half Primal. His mother was Cith More, the woman who opened the Earth crossing. He led the hunt for descendants of the civilization she had given her life to protect. Whether he made peace with this, whether he resisted it covertly, or whether this is the origin of House Ardent\'s later reputation as "the house that knows a thousand secrets" has never been recorded.\n\n**What he built:** House Ardent exists in the Sol-Nexus as a legitimate, recognized house — the same cover Aevum used to operate without being identified as Vane. That Aevum chose an Ardent identity without knowing it was founded on Dulla\'s secret family is either the universe\'s darkest joke or the Ardent bloodline\'s ability working several generations in advance.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Child of Dulla Vane + Cith More. Born on Orius. Space-Energy (light); chaos-light — rare dual-sovereign core. Founded Ardent bloodline\'s spatial omniscience ability. Was assigned to exterminate Primals (his mother\'s people) — darkest irony. Great-grandfather of Tola Ardent. Aevum used House Ardent as a cover identity without knowing Dulla founded it.',
  },
  {
    id: 'tola_ardent',
    name: 'Tola Ardent',
    house: 'ardent',
    role: 'Current Leader of House Ardent · Hope\'s Secret Father · Tenza\'s Best Friend · Student of Grand Master Suu',
    epithet: 'The Man Who Knows a Thousand Secrets · The Spatial King',
    status: 'active',
    location: 'Sol-Nexus — location classified',
    importance: 4,
    coreType: 'Energy-Electricity; chaotic-light',
    description:
      'The current leader of House Ardent and the great-great-grandson of Darkki Ardent. He carries the Ardent bloodline\'s inherited ability in full: spatial omniscience across any field he occupies — the simultaneous, continuous awareness of every person\'s exact position, movement, and presence within a given space. It functions like a building he always lives in, where every room is visible from every angle at once. Combat, conversation, politics — he is never surprised by where anyone is, because he always already knows.\n\nThis made him an exceptional long-range specialist. Ardent clan doctrine favors keeping the battlefield large and themselves at its edge — knowing where every target is makes proximity unnecessary. The ability is also why "the man who knows a thousand secrets" is not metaphor. He cannot be in a space without knowing who else is in it. He has never been blindsided by a presence he did not already perceive. Every meeting he has ever attended, he arrived knowing the room.\n\n**Tenza\'s best friend:** Their relationship is exactly what it appears to be and also something much stranger. Tenza can see forward; Tola can see everywhere in the present. Together they were, for years, the most comprehensively informed people in any room in the Sol-Nexus — one tracking what was coming, one tracking what was currently happening. They understood each other in a way neither had to explain.\n\n**Hope\'s secret father:** His relationship with Dima Apolo was private, mutual, and never acknowledged publicly. She was an Apolo — Spirit clan, tool-contract lineage. He was an Ardent — a house that officially served a different master. The relationship was a risk both accepted. When Dima died at the Fest, Tola was present. His Ardent spatial awareness activated the moment the massacre began — he perceived every death as it happened. He recognized Hope in the chaos of the Fest: his own daughter, at age seven, with a newly received Cronus tool activating in resonance with her hidden Ardent core ability, experiencing the entire battlefield from everywhere at once.\n\nHe got her out. He found Zoe too, and brought them both directly to **Grand Master Suu** at the Grand Mana Academy — the only person he trusted to shield them without asking why. Tola is a former student of Suu\'s; the relationship predates the Fest by years. He told no one why he specifically ensured those two children escaped. The version people know is that Tola Ardent helped protect some of the Wov-Osiro children during the massacre. The truth is he was protecting his daughter, and the friend she had already made.\n\nWhat he did not know at the time of delivery — the thing that would have changed everything about how he thought about this errand — is that Suu already had an interest in those two specific bloodlines. Whether Suu knew Hope was Tola\'s daughter before Tola delivered her is a question neither man has answered directly.\n\nHope does not know who he is. He has not told her. Whether he intends to is classified — even to Tenza.\n\n**— Story Arc —**\n\n**[The Fest — Hope\'s Rescue]**\nAt the Fest massacre, Tola\'s spatial omniscience activated across the entire battlefield. He recognized Hope among the chaos — his daughter, her Ardent core ability igniting in resonance with the Cronus tool she received. He extracted both Hope and Zoe and delivered them to Grand Master Suu at the Grand Mana Academy — the only person he trusted to shield them without asking why.\n\n**[Academy Attack]**\nTola participated in the assault on the Grand Mana Academy alongside Tenza, present during Tonga Nexal\'s death — publicly credited to the chaos of the assault, never examined. His Ardent forces attacked on the Wov/Apolo front and he personally destroyed Gaia\'s vessel, receiving the Ripper from Vraka as reward.\n\n**[Parts 2.1/2.2 — "Arrival of the Devil" Arc]**\nTola commanded the 20M Ascen tunnel force, entering through Namo\'s hidden insertion point. His Vraka beast — the Ripper — was immediately knocked aside by 8\'s detonation of Rampaging Cores into the city center. Before he could regroup, Mira — his daughter, a fact she does not know — confronted him directly and trapped him with Art of Energy: Mana Lockdown. As Parts 2.1/2.2 end, Tola remains preoccupied fighting Mira.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Current House Ardent leader. Age 39 at Academy era (Arai 20). Participated in Tonga Nexal\'s death alongside Tenza during the Academy attack — the death was publicly credited to the chaos of the assault, never examined. Great-great-grandson of Darkki Ardent. Energy-Electricity; chaotic-light. Carries full Ardent spatial omniscience ability. Tenza\'s best friend. Hope\'s biological father (secret — Hope does not know; Tola did not know either until the Fest when Hope\'s Ardent spatial ability activated at the moment of her mother Dima\'s death). Also present at the burning of the Tree of Eden — Tola led Ardent forces in the assault on the Wov/Apolo front and personally destroyed Gaia\'s vessel; rewarded with the Ripper by Vraka. After the Fest, held Hope and Zoe in Ardent custody. When Nuro visited Ardent to test loyalty, Tola presented them as proof — they were received by Ember Vane on behalf of House Vane. The two children were enrolled at the Grand Mana Academy as Vane property. Tola does not know the full scope of what he handed over.',
  },

  // ── Consa Clan Patriarch ──────────────────────────────────────────────
  {
    id: 'namo_consa',
    name: 'Namo Consa',
    house: 'consa',
    role: 'Patriarch of Clan Consa · Director of Earth Core-Cultivation Operations · Keeper of the Trial Secret',
    epithet: 'The Patriarch Who Knew · The Man Who Was Told',
    status: 'active',
    location: 'Minia Consa\'s laboratory — deposed, maimed, kept alive',
    importance: 2,
    coreType: 'Space; dark-chaos',
    description:
      'Namo Consa was the patriarch of Clan Consa during the period of Toma More\'s Earth operations — the figure who held the clan\'s full understanding of vessel-crossing theory and directed its scientific application at scale.\n\nClan Consa\'s dual Sovereign alignment of Space and Life/Death gave them command over the crossing between states of being. Namo was not the inventor of transference — but he was its most rigorous theorist in the Primal age, and the only member of the Kazemi Believers faction who understood its mechanics from the inside. This made him uniquely valuable to Toma More, and uniquely dangerous as an ally.\n\n**The Secret**\n\nToma More told Namo the truth about the Kazemi Trial — a disclosure Toma made to almost no one. The truth: the trial was not an awakening mechanism for the Dragon. It was a key left by Mana to defeat the Arke Twins. The Primal belief in a champion who would emerge and restore Primal supremacy was not the full picture. The champion would end the twins\' reign — and what came after was unwritten.\n\nNamo received this. He did not share it with Prescian or Revyn. He directed Clan Consa\'s capabilities toward Toma\'s Earth operations in exchange — a calculated alliance that was neither friendship nor servitude, but a recognition that the old answers had stopped working.\n\n**The Earth Operations**\n\nUnder Namo\'s direction, Clan Consa conducted the core-cultivation experiments that became the foundation of the Earth facility. They discovered humans as viable trial substitutes: subjects who had been mana-cultivated before contact with Kazemi\'s remains survived longer than uncultivated subjects. One second extended to two, then longer. The experimental record Namo\'s clan built — thousands of subjects, incremental cultivation densities, survival-duration data — was the infrastructure that Minia Consa later systematised into the Infinity Challenge protocol.\n\n**His Children**\n\nNamo followed Toma More\'s own breeding doctrine on a smaller scale: thirty children by his final count, engineered across generations for the strongest possible cores, most given children of their own before being fed to the trial or otherwise disposed of. **Minia** was his 29th, **Pandro** his 30th and last — the two half-siblings grew up in entirely separate worlds, Minia inheriting the clan\'s full sovereign understanding, Pandro arriving at the Grand Mana Academy carrying no name anyone recognised. A thirtieth-generation child before Pandro, **Adorn More**, Minia\'s twin, was born with a core capable of burning life force directly and killed their mother in the act of being born — too dangerous even for Namo\'s own appetite for risk, and so hidden rather than fed to the trial, his core surviving him in storage for decades. That both Minia and Pandro ended up, through opposite paths, at the centre of Subject No. 8\'s creation and legacy is not recorded in any official document.\n\n**[Facility Arc, Part 3]**\nDeposed by his own daughter in front of witnesses. 8 examined his core and pronounced it "not worth absorbing" — a judgment that read, to everyone watching who understood what an offered core meant to a Believer, as the single deepest insult available. Minia had him tortured and dismembered (one arm severed outright, both legs and his remaining arm broken) and left in Cai\'s custody, kept alive deliberately rather than mercifully, "to pay for all he\'s done." His fate since has not been directly revisited, though Cai — secretly Arai, the woman whose life his indoctrination machine helped ruin — has had him in her care the entire time.',
    powers: [
      { name: 'Spatial Art: Binds of Darkness', type: 'Space-Dark-Chaos Restraint Spell', description: 'A binding spell meant to restrict everyone in range at once. Attempted against Minia, 8, Pandro, and Cai after being deposed — dissolved instantly by Evelyn More\'s Scorching Mana before it could take hold.' },
    ],
    notes: 'Father of Minia Consa (full blood, Consa heir) and Pandro Lexan (half-blood, took mother\'s name). The only Kazemi Believer faction leader Toma More trusted with the trial\'s true purpose. House Ouranos — the vessel-family clan led by Saga Ouranos — maintained the largest research laboratory on Earth during the More operations; Namo conducted parallel research there separate from Minia\'s primary facility, using the Ouranos infrastructure to accelerate Consa\'s core-cultivation experiments. Deposed by Minia in Part 3.1 — 8 refused to absorb his core, judging it "not worth absorbing," and Minia had him tortured and maimed (one arm severed, both legs and remaining arm broken) before leaving him in Cai\'s custody. Alive, kept that way deliberately, "to pay for all he\'s done."',
  },

  {
    id: 'minia_consa',
    name: 'Minia Consa',
    house: 'unknown',
    role: 'Lead Researcher · Facility Director',
    epithet: 'The Architect of Subject No. 8',
    status: 'active',
    location: 'Her private laboratory — Head of Clan Consa',
    importance: 2,
    coreType: 'Space-Life/Death (dual Sovereign)',
    description:
      'A human woman — the lead researcher and director of the Earth facility. Minia was not a random scientist who stumbled onto a dangerous project. She was connected to **House More** through generations of proximity: the More clan, defeated and hiding on Earth after the fall of the Primal war, had cultivated human allies across centuries of their Earth exile. Minia\'s connection to the More clan\'s sealed work on the Kazemi trial went back further than she disclosed to anyone at the facility.\n\nWhat the facility called the **Infinity Challenge** — the brutal process in which thousands were tested and nearly all died — was the latest iteration of what the More clan had run for millennia: the mechanism for feeding Kazemi enough cores to be born. Minia converted what had been a slow, generational, mystical process into a research operation. She recruited Arai by playing on their shared opposition to the Arke twins and a calculated appeal to women\'s solidarity against the system that had destroyed them both. What she did not disclose: the full scope of what they were actually building toward, and her own long history with the project.\n\nShe managed the facility for its full operational period. She oversaw 15 years of experiments on Irane, Arai, Hope, and Zoe. In year 14, she forced Ember Vane to mate with Irane, producing three children before the escape. During the escape, she pursued the fleeing subjects. The facility exploded.\n\nMinia survived. She knew the facility well enough to find the exit nobody else had been shown. Where she went after is unrecorded in any document the Empire holds. She has plans that neither Arai nor the Emperor are aware of, and she carries knowledge of the Kazemi trial process that nobody else on Orius has documented.\n\n**The Facility\'s True Origin**\n\nThe infrastructure Minia ran — the Earth facility — did not begin with her. It began with **Toma More**: the facility was built on the foundation of Toma\'s core-transfer operation on Earth, in which he transferred cores into prepared bodies as a method of preserving Primal essence and seeding human populations with Primal mana signatures. Toma had also, in the course of this work, discovered and documented the trial mechanism — the process by which Kazemi\'s ancient essence could be forced through a subject in a death-and-return sequence. He considered it pointless: a brutal filtering process with no reliable output. He left it unused.\n\nMinia found it. She recognized immediately what Toma had dismissed: the trial was not a filter. It was a forge. The death-and-return sequence, repeated at scale, was the only mechanism capable of producing genuine Conceptual fusion in a living subject. She did not build the facility from scratch. She inherited Toma\'s infrastructure and transformed its purpose — from core preservation to forced Conceptual emergence. The Infinity Challenge was her innovation. The building and the systems already existed.\n\n**Chains of Ventriloquist**\n\nMinia\'s primary tool — chains 8 built himself, in the final stretch of completing Arai\'s sealed order, needed to bind the command cores directly to Arai, Hope, and Zoe. Minia never designed them; she inherited a tool he made for his own purposes and turned it against him. They take four distinct forms, each binding a different layer of a being\'s existence:\n\n**Form 1 — Chains of the Mind**: Bind the mind entirely. The target\'s thought, will, and calculation are suppressed. Direct counter to Arai — the faculty of reasoning and command falls silent.\n**Form 2 — Chains of the Heart**: Bind the heart — the gathering, choosing, accumulating function. The target\'s capacity to decide and to sustain intent is severed. Direct counter to Hope.\n**Form 3 — Chains of the Body**: Bind the body — the evolving, producing, physical expression. Movement, mana generation, and adaptive response are locked. Direct counter to Zoe.\n**Form 4 — Chains of All Three**: All binding properties activate simultaneously. Mind, heart, and body are suppressed together. Against a being whose architecture IS the three-part system — like Irane — this form does not merely restrain a person. It dismantles the operating architecture itself.\n\nThe chains are not simply physical. They interact with the core structure of their target, which means Minia — a human — carries a tool that can impose itself on beings of far greater mana capacity. This makes her directly and specifically dangerous in a way raw power does not explain.\n\n**Summari and Nighla — The First Meeting**\n\nWhen Minia made first contact with Summari and Nighla, she revealed she was their mother. The meeting was on her terms. The chains were already deployed. She did not restrain them to prevent escape — she deployed them to make clear, before a single word was spoken, that the conversation would happen the way she intended. Summari felt the Chains of the Heart close. Nighla felt the Chains of the Body lock. Minia spoke while both daughters were held.\n\nWhat she said in that meeting, what she wanted from them, and what she offered in exchange — none of it has reached Arai.\n\n**What He Said**\n\n*\"Choices made based on our emotions are dangerous. Not because they are wrong — but because they carry more weight for us.\"* — Irane, to Minia\n\n**— Story Arc —**\n\n**[The Facility — Building the Weapon]**\nMinia recruited Arai by appealing to their shared opposition to the Arke twins, then placed 8 (Subject Z) as her primary experiment subject and constructed the seal that bound him. She designed the Infinity Challenge process that forged 8 into what he became, and considers him entirely her creation — her monster, her purpose, her proprietary output.\n\n**[After the Facility Explosion]**\nMinia survived using an exit route she had kept from everyone else. Her father Namo Consa subsequently coordinated with Toma to leak the location of the Kazemi Primal Capital to the Ascen. Minia maintains the ability to extend her perception through cores she carries — a remote monitoring capability she uses to track operations without being physically present.\n\n**[Parts 2.1/2.2 — "Arrival of the Devil" Arc]**\nWith Arai, Hope, and Zoe unconscious in her lab, Minia speaks obsessively to Arai — declaring 8 her creation. When Zoe briefly wakes and floors her with a weak punch that draws blood, 8 detects residual mana from his own core on Minia\'s bruise and grips her chin to examine it. Minia embraces him in response. She assigns 8 to Mira as the weapon of Consa Special Unit 8: Dragons of Minia (100 people), places Pandro as observer, and monitors the entire assault on the Kazemi Primal Capital through Pandro\'s senses — extending her perception via cores she carries — singing next to unconscious Arai as her weapon moves through the city.\n\n**[Facility Arc, Part 3 — The False Goddess]**\nDeposed and tortured her own father, Namo, in front of witnesses, taking his place as head of Clan Consa. Struck a transactional alliance with Evelyn More (crippling the resistance in exchange for research data and political favor), and used 8 to destroy Miho Frame\'s entire camp, sparing children under 16 for the training program that produced Aliya, Criya, Valariya, and hundreds of others. Publicly mythologized 8 as "the Champion" without ever confirming it outright — protecting the Consa house\'s human-experimentation secrets while quietly fanning the rumor through the city. Ordered 8 to "act the part" of the legend, unaware he filled the role in using a private manuscript by Sofia Prescian that named her, within its own fiction, as **the Goddess** — a title she embraced completely, believing it confirmed everything Namo\'s childhood conditioning had told her about her own destiny. Unlike everyone else drawn toward 8 in this period, her devotion is not amplified by his passive reflective effect at all — her own disguise-spell, wearing Arai\'s, Hope\'s, and Zoe\'s mana, accidentally shields her from it the same way it shields them. Her worship of him is entirely her own, unassisted by anything he is doing to the room.\n\nSlept with 8 the night before their planned wedding, implanting the Beginning-Creation and Destruction-Ending cores (Summari and Nighla) in her without realizing this was the one act that would finally let him see her true core beneath the mana-disguise. At the altar, ordered him to say yes; he refused publicly, in front of the assembled city. She tore his throat out with her own hands, and — unable to command him to heal, unable to command him at all — locked him away for what became a five-year sentence, coinciding exactly with the length of the pregnancy she did not yet know she\'d caused. Tortured him continuously across those five years, apparently indifferent to (or unaware of) the fact that he could only feel pain in the three places still wired to anyone — his mind, heart, and reproductive core. Publicly framed his absence as a secret mission to assassinate Niro Vane. Privately unable to explain, even to herself, why the "tool" she built refused her the one time it mattered most.\n\n**The Two Years — Building the Goddess**\n\nThe engagement was announced two years before the wedding actually happened, stretched that long by Axola Vane\'s escalating war against the Primals. Minia spent those two years nowhere near a battlefield and did not need to be — 8, leading the war in her name, converted every victory into her personal mythology. She reported every battle to the city herself, celebrated every win publicly, and was honest, even generous, about the rare losses, reassuring people that they would still win. It made her genuinely beloved in the city in a way none of her private conduct ever earned her. She came to think of herself, without irony, as the champion\'s goddess, and the people came to agree with her, without knowing anything of what she did in the parts of the facility the war didn\'t reach: the sorting of captured Orian children by whether they carried usable cores, the transfer of cores into the ones who qualified, the killing of the ones who didn\'t.\n\nShe noticed, in this period, that 8 was taking longer and longer to answer her orders, and — rather than investigating why — simply gave fewer of them, protective of the one advantage she still held over him.\n\n**The Empress She Never Suspected**\n\nRumor from the battlefield began, quietly, to split the myth in two: soldiers who watched Cai run the actual operations — the positioning, the strategy, the moments 8 deferred to her judgment outright — started calling her the Empress, a title lifted straight from the very legend Minia had built her own worship on. When the name reached Minia secondhand, she turned it over with real fear and never once landed on the right answer. Sofia was married, pregnant, radiantly in love with Pandro — obviously not it. That left, in her reasoning, only Mira: the one other woman who\'d spent real time close to 8, the one she\'d watched grow superstitious and afraid of losing him. Cai never crossed her mind at all — Cai was loyal, reported everything, asked for nothing. Minia\'s blind spot was total, and it was the safest possible place for the truth to be hiding.\n\n**The Week Before**\n\nWanting a child by him, and wanting it specifically to cement a position she already believed was secure, Minia moved the wedding to a week out and began arranging the details herself. She first ordered 8 to sleep with Cai, in front of Cai, watching for a reaction — he refused outright, citing the order to be "the champion" as grounds a Primal citizen could never be harmed that way. Relief was visible on both women in the room for entirely different reasons before Minia, amused rather than deterred, redirected the order to Ember instead, delighted at having found, in her own words, "a non-Primal woman" available to her. What followed in Ember\'s cell — Minia narrating her own jealousy and her own cruelty in the same breath, framing the assault as a gift Ember should be grateful for — is documented in full in Ember\'s own entry. Cai was present for it, treating Ember afterward, and it is the origin of her private, absolute hatred of Minia — a hatred sharpened rather than explained by the fact that 8 would not let her act on it.\n\n**That Summer Night**\n\nDrunk on the accumulated weight of the two years — her father\'s old rejection, the approval she never got from him, the one person she counted as a true equal (Arai\'s comatose body, which never argued back), and now the literal living legend she believed she alone commanded — Minia took 8 under the open sky rather than wait for the ceremony. She placed no plan behind it beyond wanting it; she did not know, and could not have known, that the two cores entering her that night were the Beginning-Creation and Destruction-Ending cores, the only two of his cores never bound to a body before hers, or that her own Namo-seeded conditioning would seize the moment and amplify itself into something close to religious ecstasy. She believed, that night, that she had won everything. She was not wrong that something permanent had happened to her — only wrong about what it was.',
    weapon: {
      name: 'Chains of Ventriloquist',
      type: 'Built by Irane Himself — Four-Form Binding Tool',
      description: 'Chains capable of four forms: Form 1 binds the Mind (counter to Arai), Form 2 binds the Heart (counter to Hope), Form 3 binds the Body (counter to Zoe), Form 4 activates all three simultaneously — dismantling the Kazemi three-part architecture itself. Operates at the core-structure level, allowing a human to bind beings of far greater mana capacity. Used on Summari and Nighla during their first meeting when Minia revealed she was their mother.',
    },
    powers: [
      { name: 'Core-Space Mapping and Saturation', type: 'Space-Life/Death Dual Sovereign Ability', description: 'Perceives a body\'s interior architecture at cellular resolution and reaches directly into a Core-space to seat, move, or saturate a Core with external mana — by direct spatial-biological authority, no consent, ritual, or contact required. Cannot enter Core-space itself, the one boundary her alignment can\'t cross.' },
      { name: 'Forced Trial Entry', type: 'Space-Life/Death Dual Sovereign Ability', description: 'Locates the threshold crossing into Kazemi\'s trial space inside a subject\'s body and pushes them through it directly — no willingness required, unlike her father Namo\'s version of the same theory, which could only work on a consenting subject.' },
      { name: 'The Three Rings', type: 'Personal Tool — channels Arai, Hope, and Zoe\'s mana', description: 'Three rings that pull mana from Arai, Hope, and Zoe and flow it directly into 8\'s body, exploiting the one rule his seal cannot refuse: his cells will always accept mana from those three specifically. Lets her issue direct commands ("Heal yourself") outside of near-death conditions, rather than only during the narrow emergency window his body opens on its own.' },
    ],
    notes: 'Human woman. Connected to House More through generations of proximity to the sealed Kazemi trial. Carries unique knowledge of the trial process. Arai does not know she survived. Possesses the Chains of Ventriloquist — a direct architectural counter to Irane\'s three-wife system, though the chains are his own make, not hers. Has already made contact with Summari and Nighla. Deposed her own father Namo as head of Clan Consa in Part 3.1. SEAL ARCHITECTURE NOTE: Minia Consa is the only person who can force Irane to full Conceptual (100%). Her Chains of Ventriloquist Form 4 (Mind + Heart + Body simultaneously) can dismantle the managing architecture directly, bypassing both the Drive-side (Arai\'s 16–35% control) and the Will-side (Mira\'s 51–75% control). FUTURE ARC NOTE: Minia stands as direct opposition to Arai — both are architects who understand the technical reality of what Irane is, but Arai built the seal because unchecked Drive would consume everything, while Minia believes the seal is the mistake. She spent 50 years building a weapon; Arai\'s architecture turned that weapon into a person. What Minia calls "saving him" is returning him to purpose — unleashing the full Drive state she designed him for. She and Arai are the two architects in conflict over the same structure.',
  },
  // ── Vessel Families — Clan Ouranos ──────────────────────────────────────
  {
    id: 'saga_ouranos',
    name: 'Saga Ouranos',
    house: 'ouranos',
    role: 'Head of Clan Ouranos · Vessel-Family Six · Transfer Specialist',
    epithet: 'The Host · The Man Who Holds the Crossing',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    coreType: 'Unknown — transfer-aligned',
    description:
      'Head of Clan Ouranos — one of the six vessel-family clans that maintained Toma More\'s Earth operation for thirty-five years before the Academy attack. Where Sin Surya expanded capacity, Gould Oba read consciousness, and Deina Wakan sealed transfers, Saga\'s role was the moment itself: the liminal crossing. His clan managed the instant of consciousness transit between states of being. The **Drift Tool** — the specific ability Clan Ouranos had cultivated — allowed him to hold and control the crossing window: the precise moment when a Primal consciousness moved from one body to another. He did not initiate transfers. He made them hold.\n\n**House Ouranos as Infrastructure:**\nClan Ouranos maintained the largest research laboratory on Earth during Toma\'s operations. Namo Consa conducted parallel research at the Ouranos facility — Consa\'s core-cultivation experiments on Kazemi trial subjects ran alongside the main Ouranos transfer pipeline. The scale of what Clan Ouranos built made it the operational center of Toma\'s Earth infrastructure: the building Crimi Night, Tan Loo, and Miho Frame fled from the day they each defeated Toma\'s companions was an Ouranos facility.\n\n**The Academy Attack:**\nSaga was part of Team 1 — the extraction force Toma personally led into the Academy. His role on that team was transfer management: if a target needed to be taken alive, Saga was the mechanism for ensuring any consciousness work done on them held. He operated alongside Sin Surya (vessel assessment) and Gould Oba (consciousness reading) as the specialized extraction specialists.\n\nDuring the attack on the Grand Library tower, where Hope Apolo and Mira Ardent were stationed, the defenders proved more capable than anticipated. Master Gran Brime — the Academy\'s Level 7 Grand-Mana instructor, 150 years old and in his own domain — severed one of Saga\'s arms in the fight before turning to shield his students from the lava fire. Hope Apolo, defending herself and Mira against the closing assault, took his other arm.\n\nSaga Ouranos left the Academy with no arms.\n\n**After the Attack:**\nFollowing the Academy arc, Saga officially begins using artificial arms — prosthetics replacing what he lost at the Academy. His prior appearance and function were built around the Drift Tool\'s physical mechanics; how he adapted the transfer work to prosthetic arms, and whether the ability\'s precision survived the transition, is part of his story in the next phase.',
    beast: {},
    weapon: {
      name: 'Drift Tool',
      type: 'Liminal Transfer Control — Clan Ouranos Ancestral Ability',
      description: 'The ability to hold and control the crossing window — the precise moment of consciousness transit between bodies. Not a standard combat weapon. A precision transfer instrument. Saga does not initiate transfers; he governs them. His control over the liminal crossing moment made the six-clan pipeline\'s most dangerous stages viable at scale.',
    },
    gates: [],
    psyche: [],
    notes: 'Head of Clan Ouranos — one of the six vessel-family clan leaders. Lost both arms at the Academy attack: Gran Brime took the right arm before shielding Hope and Mira; Hope Apolo took the left arm in the defense of the library tower. Officially begins using artificial arms after the Academy attack arc. Prior role: liminal transfer management for Toma More\'s Earth operation. House Ouranos held the largest Earth research laboratory — Namo Consa ran parallel research there.',
  },
  // ── Vessel Families — Clan Surya ─────────────────────────────────────────
  {
    id: 'sin_surya',
    name: 'Sin Surya',
    house: 'surya',
    role: 'Head of Clan Surya · Vessel-Family One · Vessel Awakener',
    epithet: 'The One Who Marks',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    coreType: 'Life; Harmonic-Light',
    description:
      `Head of Clan Surya — guardian of the Stellar Beast and the first stage of the Vessel Doctrine Pipeline. Where Toma More's Earth operation needed to identify and prepare human vessels for Primal consciousness transfer, Sin Surya was the entry point: the person who marked a vessel at the core level, made it readable to all downstream stages, and expanded its mana-space so an incoming Primal consciousness would not tear the body apart on arrival.

**Vessel Doctrine Role — Stage 1: AWAKEN**
Clan Surya's ancestral ability channels Gaia's Life aspect through the Stellar Beast. Sin's personal expression of this: locating dormant human cores with potential for vessel-transfer and igniting them just enough to expand receptivity without triggering the human's awareness of their own core. Too much ignition wakes the self — the most delicate calibration in Stage 1. A vessel that knows it has a core becomes far harder to transfer into.

**The Academy Attack**
Sin Surya was part of Team 1 — the extraction force Toma personally led into the Grand Mana Academy. The team's role was to extract high-value targets alive and suppress defenders. During the corridor fight in Suu's secret study wing, Arai Nexal — whose Time element had just unlocked for the first time in the chaos of the attack — was among the defenders they faced. Sin fought alongside Toma More directly in that engagement. The outcome of that encounter for Sin specifically, and whether they left the Academy cleanly, is part of the Academy arc.`,
    beast: {},
    weapon: {
      name: 'Stellar Beast',
      type: 'Beast Weapon — Ancestral (Gaia Life Aspect)',
      description: "The ancestral weapon of Clan Surya — bound to Lyra Wov's will, Gaia's Life aspect. Called 'the Torch of Surya' by the family. Golden radiance marks a dormant core as a prepared vessel — invisible to the subject, readable by all downstream pipeline stages. Celestial Fire expands receptivity without full awakening. Bloom Call expands the vessel's mana-space to accommodate Primal-scale consciousness without physical rupture. Direct bloodline only — all others sustain burns on contact.",
    },
    notes: `Head of Clan Surya, Stage 1 of the Vessel Doctrine Pipeline. Part of Team 1 at the Academy attack alongside Toma More. Fought Arai Nexal during the corridor engagement in Suu's study wing.`,
  },

  // ── Vessel Families — Clan Oba ──────────────────────────────────────────────
  {
    id: 'gould_oba',
    name: 'Gould Oba',
    house: 'oba',
    role: 'Head of Clan Oba · Vessel-Family Two · Consciousness Assessor',
    epithet: 'The Judge of Selves',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    coreType: 'Life-Death (dual); Harmonic-Dark',
    description:
      `Head of Clan Oba — guardian of the Wane Beast and the second stage of the Vessel Doctrine Pipeline. After Sin Surya marks a vessel at Stage 1, Gould's function was to read it: determine how heavily the vessel's free will was weighted, and whether it could be reduced through later preparation or needed to be removed entirely before transfer could proceed.

**Vessel Doctrine Role — Stage 2: ASSESS**
Clan Oba's ancestral ability channels Gaia's Death aspect through the Wane Beast. Gould's specific expression: reading the weight of a vessel's independent identity — how strongly they recognise themselves as a self, how much resistance an incoming Primal consciousness will meet on entry. Light-weighted vessels passed to Stage 3. Those whose free will could not be reduced faced Final Wane — the death aspect applied to the identity layer, not the body. What remained was a biological system, functional and intact, with the self that owned it gone.

**The Academy Attack**
Gould was part of Team 1 alongside Toma More and Sin Surya. His role on the extraction team was consciousness reading: if a target needed to be assessed for vessel viability during the attack, or if consciousness-level work was required on a captured subject, Gould was the reading mechanism. The Academy attack was the most direct application of pipeline knowledge in a non-facility context — and the team's targets included some of the Academy's most significant cores.`,
    beast: {},
    weapon: {
      name: 'Wane Beast',
      type: 'Beast Weapon — Ancestral (Gaia Death Aspect)',
      description: "The ancestral weapon of Clan Oba — bound to Mara Wov's will, Gaia's Death aspect. Called 'the Judge' by the family. Anubis Scale measures the weight of a vessel's independent identity — how strongly the self resists an incoming Primal consciousness. Final Wane performs complete selfhood erasure: the death aspect applied to the identity layer only, leaving the biological system intact and functional but empty of the original self.",
    },
    notes: 'Head of Clan Oba, Stage 2 of the Vessel Doctrine Pipeline. Part of Team 1 at the Academy attack alongside Toma More and Sin Surya.',
  },

  // ── Vessel Families — Clan Wakan ────────────────────────────────────────────
  {
    id: 'deina_wakan',
    name: 'Deina Wakan',
    house: 'wakan',
    role: 'Head of Clan Wakan · Vessel-Family Six · Permanent Sealer',
    epithet: 'The One Who Closes',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    coreType: 'Space; Harmonic-Dark',
    description:
      `Head of Clan Wakan — guardian of the Seal Tool and the final stage of the Vessel Doctrine Pipeline. After the five preceding stages prepared and completed a consciousness transfer, Deina's function was to close it: seal every re-emergence pathway in the completed vessel, making the transfer irreversible and writing the Primal consciousness's presence into the body as permanent fact.

**Vessel Doctrine Role — Stage 6: SEAL + IDENTIFY**
Clan Wakan's ancestral ability channels Cronus's Future aspect through the Seal Tool. Deina's specific expression: Seal of Silence closes every biological and mana-level channel through which the original human consciousness could attempt to resurface — not locked but closed; a lock implies a key exists. The Unchangeable writes the completed transfer as permanent into the vessel's core structure at the level that defines what a body fundamentally is. The Primal consciousness inhabiting the vessel becomes the owner, not the tenant. Clan Wakan's passive Future Sight also runs through the Seal Tool — Deina perceives future-candidate vessels before any other stage has touched them, which made her the administrative intake coordinator of the full pipeline as well as its closer.

**The Operation and After**
Among the six vessel-family heads who maintained Toma More's Earth operation for thirty-five years, Deina's role was the most final. Every successful transfer Toma's operation produced had Deina's seal at its end. The permanence of the seal is its most important quality — a transfer without Wakan's closure could theoretically be reversed; with it, there is no reversal mechanism and no key.`,
    beast: {},
    weapon: {
      name: 'Seal Tool',
      type: 'Tool Weapon — Ancestral (Cronus Future Aspect)',
      description: "The ancestral weapon of Clan Wakan — bound to Noa Osiro's will, Cronus's Future aspect. Called 'the Voice of What Will Be' by the family. Seal of Silence closes all re-emergence pathways in a completed transfer — not locked, closed. The Unchangeable writes the transfer as permanent fact into the vessel's core architecture. Future Sight (passive): perceives future-candidate vessels before Stage 1 has touched them, making Wakan the pipeline's administrative intake as well as its closing seal.",
    },
    notes: 'Head of Clan Wakan, Stage 6 of the Vessel Doctrine Pipeline. The Unchangeable seals transfers permanently — no reversal pathway, no key. Future Sight makes Wakan the intake administrator for the full pipeline.',
  },

  // ── Academy — Grand Library, Gran's Course ──────────────────────────────
  {
    id: 'coral_sil',
    name: 'Coral Sil',
    house: 'none',
    role: "Student of Gran Brime · Grand-Mana Course, Grand Library",
    epithet: 'The Thirty-Year Student',
    status: 'unknown',
    location: 'Grand Mana Academy — The Grand Library',
    importance: 1,
    coreType: 'Water; Chaos-Dark',
    description:
      'Coral Sil had been in Gran Brime\'s Grand-Mana Course for thirty years when Hope and Mira arrived. She was past eighty — her voice had the particular rasp of someone who had long since stopped bothering to modulate it, and she carried herself with the patience of a woman who had already outlasted every other student this course had ever produced. She had survived Gran longer than most practitioners had survived their entire careers.\n\nShe was a Level 5 mage. This was not something she led with, or particularly discussed, or seemed to consider relevant to the question of what she was doing on a given afternoon. She had reached Level 5 and continued doing what she had always done: reading. The mana quality of her Water; Chaos-Dark core was, by the judgment of anyone who had technically assessed it, remarkable — a precision and density of mana composition that should have made her one of the most formidable casters in the institution. She chose not to be. This was not incapacity. This was preference.\n\nWhat set her apart from Hope and Mira was not ability but orientation. Hope and Mira were combatants learning the deepest theory of spells. Coral was a theorist who occasionally consented to the combat. She was more interested in the books than the casting, which Gran found either tolerable or maddening depending on the day — she had read through most of his collection in thirty years, which was a thing he found simultaneously irritating (the handling) and quietly satisfying (the evidence that the knowledge was actually going somewhere). She was the one who mentioned, without apparent alarm, that the last student to damage one of Gran\'s books had lost an arm and a leg for it.\n\nShe addressed Gran as "Master Brime." She watched Hope and Mira\'s rivalry with the particular attention of someone who had seen many rivals and knew which ones would matter to each other. Her combat test results — Year 1: unconscious on the first strike; Year 4: 1 minute 45 seconds — were results she acknowledged without visible reaction in either direction. She was not there to win a fight. She was there because the books were here, and Gran was the only person in the institution worth learning from. She had been saying this for thirty years.',
    notes: 'Level 5 mage — exceptional mana quality (Water; Chaos-Dark core, remarkable density/precision) but combat-averse by choice, not limitation. Grand Library student for 30 years when Hope and Mira joined. More interested in spell theory and books than application. Year 1 test: knocked unconscious on 1 strike. Year 4 test: 1min 45sec. Was the one to mention the previous student who damaged Gran\'s book lost an arm and a leg.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
  },
  // ── Academy — Grand Library Instructor ─────────────────────────────────
  {
    id: 'gran_brime',
    name: 'Gran Brime',
    house: 'none',
    role: 'Master of the Grand-Mana Course · Grand Library, Grand Mana Academy',
    epithet: 'Hermit of the Library · He Who Chose',
    status: 'deceased',
    location: 'Grand Mana Academy — The Grand Library',
    importance: 2,
    coreType: 'Energy; harmonic-light',
    description:
      'Gran Brime was a man who had only one thing he cared about: spells. He served as Master of the Grand-Mana Course at the Academy\'s Grand Library — the hardest mana course in the institution, requiring students to master spells of more than ten simultaneous mana combinations. Serious to the point of severity. He revered Mana as the greatest individual ever to walk the world and spoke rarely about anything that was not magic. In 150 years he had gathered tombs, spell books, and scrolls that some scholars estimated predated the very concept of humanity. He was called the Hermit of the Library — a title meant unkindly by those outside his walls that he wore without interest in whether it was kind or not.\n\nHe never smiled. Not when teaching. Not when studying the spells he loved above everything. Not even when speaking on Mana — the subject that occupied the center of his existence for a century and a half. He looked serious in his happiest moments and serious in his hardest ones. He put his students through endless trials and tribulations, lectured until their ears and minds filled with his voice, and treated a single creased page of a book as a personal offense of serious consequence.\n\n**The Grand-Mana Course — Level 7 Methodology**\n\nGran Brime held a Level 7 mage designation — one of only two in the Academy. The other was Grand Master Suu. He did not advertise this. He did not need to. The students who arrived in his class understood what they were facing within the first hour.\n\nHis course called ten names per intake. This particular year, three showed up: an elderly woman in her eighties named Coral Sil who had been in his class for thirty years; a young woman with a constant expression of annoyance who gave her name as Mira Ardent; and a twelve-year-old placed here by Grand Master Suu personally, who said simply "I am here to learn" when he challenged her motivation. He asked twice. She answered without flinching. He said: "We shall see."\n\nHis methodology was consistent: cast the base spells of all ten mana sequences until your mana is fully depleted. When a spell fails, write — in detail, by hand — the theory you got wrong. Hands bleed. Mana empties. Then comes the stack of texts. "These are the building blocks of magic and you will learn it." He pitted Mira and Hope against each other from the first week. He did not explain why. They eventually understood: they were the only ones who would push each other.\n\nThree hundred wins each, over three years. Neither ahead by the time he decided to test them himself.\n\n**The First Test — Year One**\n\nHe had never personally tested them before. Not in three years. He came with everything.\n\nCoral Sil went first. One strike. She was unconscious.\n\nMira lasted 1 minute and 45 seconds.\n\nHope lasted 2 minutes and 13 seconds — until a strike aimed at her head made her use, for the first time since she had watched her mother die at the Fest, the spatial ability she had been carrying sealed inside her. Not a portal. A tunnel. The kind of spatial displacement that was not standard Apolo technique. Mira saw it. She knew what it was. Her face changed.\n\nGran had her carried to the infirmary. He noted the time without expression.\n\n**The Surveillance Cells — He Heard Everything**\n\nHis study had, throughout its walls, a comprehensive network of listening spells. He had placed them himself, decades ago, because he trusted no one near his collection without knowing exactly what they said about it when they thought he could not hear. He heard the conversation in the infirmary — Mira\'s deduction, Hope\'s question, Hope\'s sudden bright happiness at the idea of having a sister. He heard Hope call her "little sister" for days afterward. He heard Mira\'s irritation and eventual capitulation. He heard the whole of it.\n\nThe next time he entered class after that, he addressed Mira as "little one" and Hope as "big one." He did not explain. They did not ask. He never acknowledged knowing the reason.\n\n**The Rainy Day — Suu**\n\nOn a day when the weather had run all three of them into his study after the usual exercises, they found a book on the table they had not seen before. Old. On its back cover, a photograph of Gran and Suu when they were younger — visibly friends, visibly younger than either of them had ever been seen. Coral said it aloud before she thought better of it.\n\nGran, from behind them: "We used to be."\n\nHe did not turn around for a moment. Then he did.\n\n"We used to be good friends. Until about sixty years ago, when he changed. We pursued the truth of Mana — to experience and refine the gifts bestowed onto us by the master of spells and magic. That was what we did. That was the only thing worth doing." His tone did not change. He looked like himself. But the voice underneath it was something Coral, at thirty years of acquaintance, had never heard from him before.\n\n"What happened?" Hope asked.\n\n"He started seeking more powerful spells. Spells that changed the nature of life. The passion seemed to have gone somewhere else — into accumulation, into scale, into something that was no longer about understanding. Maybe it was age. Maybe it was something else. Who knows."\n\nA pause.\n\n"My friend died the day he called a spell book boring. That is when he died to me."\n\nBack to work. He lifted the book and returned to his table and that was the end of it.\n\n**The Second Test — Year Four**\n\nCoral: 1 minute and 45 seconds.\n\nMira: 4 minutes and 55 seconds.\n\nHope: 5 minutes and 20 seconds.\n\nGran made sure none of them were looking in his direction when he said, very quietly, to no one: "Good."\n\n**His Last Day**\n\nDuring an attack on the Academy, explosive lava-fire shells were fired at his collection — 150 years of irreplaceable work about to burn — and another headed toward Hope and Mira. As the third shell closed, Hope turned to shield Mira. She made ready to burn.\n\nGran Brime was closer to his collection. He could have saved it and survived. He chose to place himself between his students and the blast, holding a fire-and-earth shield across both of them while his life\'s work burned around him. His gut had already been torn open by the initial detonation. The blood splattered across Hope. He stood. His arms burned from the heat. He screamed defiantly at the flames. He still stood.\n\nWhen the fire died out — arms burned to the elbow, a hole through his stomach — his body did not fall. He remained standing even after he was gone.\n\n*\'I will not let my life\'s purpose be destroyed\'* — he said, looking back at Hope and Mira with a smile. He had never smiled like that. Not once in all the years either of them had known him. The man looked almost happy for the first time in his life. Not teaching. Not studying. Now.\n\nHe chose them. He chose her. A man who had erupted in fury at the creasing of a single page chose Hope over everything — over objects and texts far older than she was, some perhaps older than humanity itself. His life\'s purpose was not the collection. He had never said so. He chose her before she knew he could.\n\nThey saw the trail of corpses he had left in his rush to reach his study — he had fought his way through whatever stood between him and them. When they left, Hope took his grand cloak. Not any of the books. Not any of the forbidden spells. Something he had called an old pointless piece of cloth.\n\nThe Hermit of the Library died at 150 protecting the students he had never once told he cared about.',
    notes: 'Level 7 mage — one of only two in the Academy (Suu was the other). Teacher of Hope and Mira at the Grand Mana Academy Grand Library. 30+ year ongoing student Coral Sil was also in the class. During the Academy attack, Gran severed one of Saga Ouranos\'s arms before turning to shield Hope and Mira from the lava bombs fired at his collection — dying on his feet with a hole through his stomach, his arms burned to the elbow. His death was the first time Hope had been chosen by someone over everything else they valued. Hope kept his grand cloak. Estranged from Grand Master Suu for ~60 years — Suu called a spell book "boring" and Gran said his friend died that day.',
  },
  // ── Academy — Combat Path Instructor ───────────────────────────────────
  {
    id: 'sith_caedus',
    name: 'Sith Caedus',
    house: 'unknown',
    role: 'Combat Path Instructor · Grand Mana Academy · Teacher of Zoe · Adopted Mother of Dokia',
    epithet: 'The Demon of the Eastern Front · She Who Survived It Twice',
    status: 'active',
    location: 'Sol-Nexus — former Grand Mana Academy',
    importance: 3,
    coreType: 'Nature; Harmony-Light',
    description:
      'One of the most accomplished pure-mana and nature-technique practitioners alive. Sith Caedus is an elder woman missing her right arm and left eye — both lost not on a battlefield but inside the Grand Mana Academy itself, during her own Combat Path training. She grew a functional replacement arm through sustained nature-mana cultivation; the eye she left empty. She has never explained the eye. She calls it a reminder.\n\nHer title — **Demon of the Eastern Front** — was earned in the post-Fest campaigns when her techniques became the standard reference point for what a single Ascen practitioner could accomplish in sustained open-field combat. The title does not describe her personality. She is precise, quiet, and patient in a way that reads as cold to anyone who has not been trained by her. Those who have understand: her patience is structural, not affective. She is measuring something.\n\nShe served as Combat Path instructor at the Grand Mana Academy under Suu/Aevum\'s institutional structure. Her assignment was to teach the Arena track — technique refinement through clash, the development of personal Core expression through the accumulated pressure of facing other Cores directly. She was good at this in the technical sense. She was different in one regard: she never taught students what to do. She taught them what surviving required.\n\n**The Philosophy:**\n*"Evolution isn\'t a choice, it isn\'t a request, it is the direct result of suffering. You have suffered — now accept it, absorb it, and evolve. There is only one rule on that battlefield: kill or be killed."*\n\nThis is not metaphor. She says it to every Combat Path student who comes to her after their first serious injury. She said it to Zoe.\n\n**Zoe:**\nWhen Zoe arrived at the Academy at age ten, she was placed in the Combat Path — Sith\'s track. Sith recognized what she was carrying before Zoe had words for it: the grief, the body already trained to survive, the instinct that ran ahead of thought. She did not remove the difficulty from Zoe\'s path. She gave it a frame.\n\nThe incident that defined their relationship: a student named **Azzer** cut Zoe\'s hand nearly in half during a training session. Zoe collapsed. Sith came, looked at the wound, and did not summon a healer. She said: *"Heal yourself."* Zoe healed herself by the only means available — channeling the beast she had not yet consciously named, thinking of her mother\'s death. It worked. That was Sith\'s point.\n\nSith told her afterward: *"You know I didn\'t lose my arm or eye on a battlefield. I lost them right here in the Academy."* She did not elaborate.\n\n**Dokia:**\nSith\'s connection to Dokia Caedus did not begin as adoption. It began as an act of deliberate sacrifice.\n\nDuring the arc when Arai, Hope, Zoe, and Mira were placed into younger bodies through the Primal vessel-transfer system, Sith was forcibly placed into the body of Dokia — then a child. The mechanism was not consensual. Sith was forced in and found herself in possession of a child who had no say in it.\n\n**Sith and Dokia are two separate people.** The vessel-transfer mechanism works through cores: a corporeal being\'s core is forced into a prepared human body alongside the human\'s own core. The incoming core is designed to assert dominance — override the human consciousness and claim the body. In the prior case Sith could not refuse, that is exactly what happened. The human consciousness was displaced. The child died from the experience.\n\nShe was not going to carry that twice.\n\nShe chose to lose. She did not press her core forward, did not assert dominance over Dokia\'s consciousness, did not claim the body. She held herself back deliberately — a surrender in a contest the mechanism was built for the incoming core to win. The result was a deadlock: two cores in one body, neither dominant, neither expelled, neither able to act. Dokia\'s body entered stasis. No aging, no decay, no response to any stimulus. Dokia\'s consciousness and self were preserved intact — unharmed, unsuppressed, simply suspended. Sith\'s core was preserved alongside it.\n\nThey did not merge. They did not become one thing. They were two separate people sharing one suspended body.\n\nMinia\'s forces acquired Dokia\'s stasis body through the Consa network. For ten years Minia studied it — the only case she had ever seen of a vessel-transfer that neither completed nor failed. Sith\'s consciousness survived inside Dokia the entire time, preserved, waiting.\n\nWhen Dokia eventually woke from the stasis, Sith was already there — already committed to her in the one way Sith had ever committed to anyone: by choosing to suffer rather than cause harm. The adoption was not a decision made after. It was the decision that had already been made in the moment she chose to lose.\n\nSith later became the formal adopted mother of Dokia Caedus — now Zoe\'s right hand among the Valariyan Heads and the bearer of the Emperor\'s death-force. The connection between Sith, Zoe, and Dokia runs through the Academy years, through a child Sith could not save the first time, and through what all three of them understand about the relationship between suffering and the choices you make inside it.',
    beast: {},
    notes: 'Nature; Harmony-Light core. Missing right arm (replaced via nature-mana cultivation) and left eye (not replaced — kept as reminder). Title: Demon of the Eastern Front. Combat Path instructor at the Grand Mana Academy. Teacher of Zoe during the Academy arc. Adopted mother of Dokia Caedus.',
  },

  // ── Academy — Azzer (Combat Path, deceased) ───────────────────────────
  {
    id: 'azzer',
    name: 'Azzer',
    house: 'unknown',
    role: 'Combat Path Student · Grand Mana Academy',
    epithet: 'Zoe\'s First Kill',
    status: 'deceased',
    location: 'Grand Mana Academy (deceased)',
    importance: 1,
    description:
      'A Combat Path student at the Grand Mana Academy. Azzer had accumulated a high kill record within the Arena track — his technique was precise and he understood how to weaponize the legal latitude the Combat Path gave students in training encounters. When Zoe arrived in the Combat Path at age ten, Azzer was already established. He cut her hand nearly in half in a training clash that went beyond sanctioned contact.\n\nZoe survived and healed herself under Sith Caedus\'s direction. She trained for the following six years.\n\nWhen she returned to face him — Azzer was sixteen, her exact peer in age — Zoe was not the same person. She blocked his technique with her bare hand, the healed one, the hand he had nearly destroyed six years earlier. Then she struck him through the chest with the other.\n\nHe was her first kill. Her record reached 400+ in the four years that followed.',
    notes: 'Deceased. Killed by Zoe at age sixteen (his and hers both). Her first kill. Previously had a high kill record in the Combat Path.',
  },

  // ── The Ferran line ────────────────────────────────────────────────────
  {
    id: 'dio_ferran',
    name: 'Dio Ferran',
    house: 'unknown',
    role: 'Father of Urial Ferran · Husband of Valariya · Best Friend of Leo Proude',
    epithet: 'Valariya\'s Husband',
    status: 'deceased',
    location: 'Historical',
    importance: 2,
    description:
      'The father of **Urial Ferran** — the man who became the Commander of Valariya\'s Royal Empiric Guard — and the husband of **Valariya**, Aliya Hallow\'s older sister and the person the city of Valariya was named after. The city\'s name carries both of them indirectly: the woman it was named for was Dio\'s wife.\n\nDio was the best friend of **Leo Proude**, who had been in love with Valariya before her marriage. Leo did not act on it. The friendship between Dio and Leo held. Whether Leo and Valariya ever addressed the weight of that directly is not recorded.\n\nDio\'s own history — where he came from, what he did, and how he died — is not in any document the Empire holds. What exists of him is in what he left: a son who became the Empire\'s Enforcer, a wife whose name the most important city in the world was built around, and a best friend who led twelve children through a facility rescue and never said why he would do something like that.',
    notes: 'Father of Urial Ferran. Husband of Valariya (Aliya\'s older sister). Best friend of Leo Proude. Deceased — specific circumstances not recorded. Lost a younger sister to cancer before his death — her loss is significant context for a later scene between Dio and Leo Proude.',
  },

  {
    id: 'simon_archiver',
    name: 'Simon Archiver',
    house: 'unknown',
    role: 'Leader of the Earth Resistance · Rescuer of the 120 · Irane\'s Best Friend',
    epithet: 'The Human Who Remembered Them · The Man Who Knew Him',
    status: 'deceased',
    location: 'Unknown — Earth Resistance',
    importance: 3,
    description:
      'Simon Archiver was a human — the most grounded person in the room in any room he was in. He was Irane\'s best friend in the truest sense: the man who knew Subject No. 8 as a person before and after the trial, who looked at what the facility produced and called it a man rather than a weapon. That clarity — the refusal to see Irane as anything other than what he was — is what made the friendship real. Aevum/Suu knew Irane across ancient history and strategic architecture. Simon knew him across a human life, with human stakes, without an agenda.\n\nHe was the primary architect of the resistance rescue mission that freed Irane, Arai, Hope, Zoe, Ember, and 120 child test subjects. He found and assembled 12 children with newly awakened Cores and coordinated them as a precision strike team — the distraction layer that opened the window for Irane to break free from within.\n\n**The Death and the Transfer**\n\nBefore the rescue — during Toma More\'s assault on the Ascen — Simon was present as a resistance observer. The resistance had received intelligence that Toma was planning something massive on Earth; Simon was there to document it. In the chaos of the attack, Toma defeated Suu (Grand Master Suu, secretly Aevum Vane in his third body) and left him for dead. Simon found him. In the same attack, Ember was present at the Academy. Simon located her in the chaos before Minia\'s forces could take her and brought her out. This is how Ember entered the resistance network. It was through Simon\'s network that Ember and the fighter Z — No. 8 — eventually met. Their final mission together was a Death Mission; both were captured, brought to the facility, and Z was placed into the Kazemi trial. Suu\'s core, still intact, entered Simon\'s body. Simon the human died in that transfer. What remained was Suu/Aevum occupying Simon\'s body, Simon\'s face, Simon\'s memories, and Simon\'s relationship with everyone who knew him — including Irane.\n\nThe body that organized the rescue, that stood across from Arai after the facility escape and had the conversation she remembers as Simon\'s, was Suu/Aevum. He carried Simon\'s bond with Irane and his own ancient knowledge of him simultaneously. In a meaningful sense, two people who loved Irane differently now occupied the same form.\n\n**"Simon" vs Toma — Round 2**\n\n"Simon" (Suu/Aevum in Simon\'s body) eventually confronted Toma — the fighter who had killed the body\'s previous occupant and the one who had defeated Suu. Round 2 ended with Toma\'s death. Standing over him: *\'It seems we\'re tied. Too bad we\'ll never find out who could\'ve won round three.\'* There was no Round 3. The series ended 1-1 with Toma dead.\n\n**The Conversation with Arai — Post-Facility**\n\nAfter the facility escape, "Simon" spoke with Arai. She did not know she was speaking with Suu/Aevum. The conversation she remembered as Simon\'s — Irane\'s most human friend offering her a grounded perspective on what had happened — was real in every sense that mattered. Whether it was Simon speaking through Suu\'s body or Suu speaking with Simon\'s voice is a question that has no clean answer. The Aevum reveal came later.',
    notes: 'Simon the human is deceased — Suu/Aevum\'s consciousness entered his body during the Academy attack, Simon died in the transfer. Before the attack, Simon had been Tan Loo\'s longest-running intelligence asset inside Toma\'s operations — embedded in Team 1 (Toma/Sin/Gould/Saga) as a resistance infiltrator for years, passing intelligence through Tan\'s unity division. He had known the attack was coming for weeks and stayed in rather than burn his cover. The identity "Simon" continues as Suu/Aevum in his form. Simon knew Irane as a man; Suu knows him across ancient time — both bonds now occupy the same body. The post-facility conversation with Arai precedes the Aevum reveal. The merger (world collision, separate later arc) is executed by this identity.',
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
    role: 'Rescue Child · Team Leader · Best Friend of Dio Ferran',
    epithet: 'The Leader of the Twelve',
    status: 'unknown',
    location: 'Unknown',
    importance: 2,
    coreType: 'Electricity-Light; chaotic-light',
    description:
      'Leader of the 12 children organized by Simon Archiver for the facility rescue operation. Leo coordinated the group through the chaos of simultaneous pressure from inside and outside the facility as Irane forced his own escape. His ability to hold 12 children with newly awakened — and barely controlled — Cores in operational formation under live pressure speaks to a level of instinctive command that most trained adults would not have managed.\n\nHis closest relationship outside the rescue team is with **Dio Ferran** — the two are best friends. Leo has long been in love with **Valariya**, Aliya Hallow\'s older sister. The relationship was unrequited in the decisive sense: Valariya married Dio instead. Leo carried this without making it a rupture — his friendship with Dio held.\n\nHis current whereabouts in the Sol-Nexus era are unknown.\n\n**[Facility Arc — Part 3, Childhood]** Age 13, son of Aloi Proude (killed by 8 during the Miho camp massacre) and a mother who lost her will under the same forced core-transfer that spared her body. Outspoken, acted first, wanted nothing more than to be like his father — declared, as a small child watching his father fly off on a mission, that he wanted a core too, over Paul Hallow\'s visible worry. Trained under Taalor Consa alongside Dio, direct-implant method, no contract offered. Survived Selis\'s corrupting pull toward "perfection" through sheer stubborn refusal to overthink, the opposite instinct that saved Dio. Emerged with an Electricity-Light, chaotic-light Celestial tool — a white katana. Formed a tight childhood bond with Valariya, Dio, and Aliya during the training years; read the first half of the "Champion" manuscript as pure adventure fiction, never falling under its spell the way the Consa-raised children did.',
    notes: 'Best friend of Dio Ferran. In love with Valariya (Aliya\'s older sister) — she married Dio instead. Led the rescue team at the facility. Son of Aloi Proude, trained under Taalor (direct-implant), one of the ~30% who survived that path.',
  },
  {
    id: 'dio',
    name: 'Dio Ferran',
    house: 'unknown',
    role: 'Rescue Child · Husband of Valariya',
    epithet: 'One of the Twelve',
    status: 'unknown',
    location: 'Unknown',
    importance: 1,
    coreType: 'Fire-Dark; harmonic-dark',
    description:
      'One of the 12 children with newly awakened Cores who participated in Simon Archiver\'s facility rescue mission. Further details of his role and fate remain unrecorded beyond the fact that he later married Valariya, Aliya Hallow\'s older sister.\n\n**[Facility Arc — Part 3, Childhood]** Age 13, son of Synth Ferran (a leader in Miho Frame\'s resistance division) and a father who died before he was born. Quiet, careful, an overthinker shaped by losing an older sister young — joined the survival trials specifically hoping to protect his mother, who was killed in front of him during the same assault that took his childhood. Trained under Taalor Consa (not Cai), taking the older, crueler path: direct implantation of a pure Ferali core, no contract, no choice offered. Survived the corrupting pressure of Vraka\'s violent influence on will alone — the same iron patience that defined him as a child. Emerged with a Fire-Dark, harmonic-dark Ferali beast, lion-formed. Bonded closely with Valariya and Leo Proude during the training years; the friendship with Leo survived Leo\'s unrequited feelings for Valariya even after Dio and Valariya married.',
    notes: 'Son of Synth Ferran (killed by 8 during the Miho camp massacre). Trained under Taalor, direct-implant method, one of the ~30% who survived that path. Married Valariya as an adult — see id: leo_proude for the unrequited side of that triangle.',
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

  // ── Earth Resistance — The First Three ──────────────────────────────────
  {
    id: 'crimi_night',
    name: 'Crimi Night',
    house: 'unknown',
    role: 'First Resistance Leader · Conqueror of the Original Crossing · Level 7 Light Core',
    epithet: 'The Woman Who Held · First Human to Break a Primal Elite',
    status: 'unknown',
    location: 'Earth (pre-facility period)',
    importance: 2,
    core: { element: 'Light', alignment: 'Harmony-Dark' },
    description:
      'Crimi Night was not a fighter. She was not a cultivator of unusual skill or a woman known for iron will. She was someone who lived in the north of what Earth called Europe, in the region near what would become the Ouranos clan\'s ancestral territory, in the years before Toma More existed as a name anyone on Earth knew.\n\nShe is the first human who defeated a Primal elite in a direct contest of consciousness and kept her own mind.\n\n**The Arrival Crossing**\n\nToma More came to Earth with three companions — his most trusted, his best. Four Primals in total, unable to survive as mana beings in Earth\'s atmosphere, crossing into four human bodies in desperation. The fight for control that followed was supposed to be a formality. A Primal elite consciousness entering a human body should not have been a genuine contest.\n\nThe companion who entered Crimi Night\'s body discovered otherwise.\n\nHer Light core — harmony-dark aligned, precise and self-referential in a way she had built through years of cultivation without knowing what she was building — turned the body into a house that refused to be vacated. The Primal consciousness that entered found her not as an obstacle but as the body\'s rightful owner in every architectural sense: the nervous system knew her, the cellular memory was hers, the core that had been growing inside her for years answered to her alone. She did not resist. She asserted. The difference is everything.\n\nThe Primal was not scattered. It was **defeated**. Consciousness fought consciousness for control of a single body, and the human won. The Primal\'s mind, unable to hold its shape against a will it had fatally underestimated, collapsed.\n\n**What She Carried Out**\n\nWhen the fight ended, Crimi Night still had her body, her name, and her mind. She also had the Primal\'s core — Level 6, elite, boosted to **Level 7** by the fact that it now existed inside a human body. The amplifying effect that the six clans had already documented was now hers: the cellular architecture of 37 trillion cells, all interacting with a Level 6 Primal Light core, added a full level of power.\n\nMore dangerous than the raw power: **inherited knowledge**. A Primal consciousness does not vanish cleanly when it loses. The memories, the training, the military knowledge, the tactical experience of a Primal elite fighter — these settled into the cellular architecture of the body as the Primal\'s last residue. Crimi emerged knowing things she had not known the day before. Not as memories she could recall at will, but as capability: an instinctive understanding of how Primal operations worked, how their commanders thought, where their transference processes were vulnerable.\n\nShe did not know any of this consciously. She knew only that something had tried to enter her, that she was still herself, and that every instinct she had was screaming to run.\n\n**She Ran**\n\nShe ran from the Ouranos clan building where Toma More was unconscious on the floor, from everything she did not have language for. Two other people ran with her — Tan Loo and Miho Frame — who had won the same terrible internal war and were equally terrified and equally without explanation.\n\nThe three of them left North European territory carrying Level 7 Primal cores and the inherited military knowledge of three of the most capable fighters the Primal race had produced. Toma More, when he learned of them months later, noted them as: *Three successful rejections. The Core architecture is more robust than early results suggested.* He was cataloguing. He did not, at that point, understand what he had created.\n\n**The Resistance**\n\nEvery resistance technique, every human who learned to recognise a transference attempt coming, every community that built defences, every practitioner who trained specifically in the kind of self-assertion Crimi had demonstrated without knowing what to call it — everything traced back to her. She did not create a movement. She was one. The movement formed around the fact of her survival.',
    notes: 'One of three humans who defeated Toma More\'s companions in the original 4 Earth crossings. Level 6 Primal elite core (→ Level 7 in human body via amplification). Carries inherited Primal military knowledge through cellular memory. Light core, harmony-dark aligned. Fled from the Ouranos clan building with Tan Loo and Miho Frame. Foundation of the Earth resistance — not through training, but through the raw fact of being first.',
  },
  {
    id: 'tan_loo',
    name: 'Tan Loo',
    house: 'unknown',
    role: 'Resistance Co-Founder · Conqueror of the Original Crossing · Level 7 Fire-Ice Core',
    epithet: 'The Storm They Couldn\'t Occupy · Second of the Three',
    status: 'unknown',
    location: 'Earth (pre-facility period)',
    importance: 2,
    core: { element: 'Fire-Ice (dual)', alignment: 'Chaotic-Dark' },
    description:
      'Tan Loo is the second of the three humans who defeated Toma More\'s companions in the original Earth arrival crossing. He did not win through strength of will alone — he won because the Primal elite who entered him tried to occupy a mind that could not be occupied.\n\n**The Crossing and the Fight**\n\nTan Loo was one of the four people near the Ouranos clan territory in North Europe when Toma More\'s party arrived. His body was one of the four that Toma\'s companions entered in desperation. The companion who entered Tan Loo encountered something its training had not prepared it for.\n\nTan Loo\'s core — fire-ice, chaotic-dark — does not resolve. Chaotic-dark alignment accumulates through internal contradiction: fire and ice pressing against each other, their productive conflict generating power precisely because they cannot settle. A consciousness entering that architecture from outside found no stable ground. No quiet centre to establish authority from. No surface that accepted direction from an external source. Every anchor point the Primal tried to establish dissolved into the fire-ice oscillation underneath it.\n\nIt was not will against will. It was will trying to hold ground inside a storm. The storm did not fight back. The storm simply was what it was, and the Primal consciousness could not hold its coherence inside it. It collapsed.\n\n**Level 7 and the Knowledge That Wasn\'t His**\n\nWhat Tan Loo emerged with: the Primal\'s core — Level 6 elite — now seated in his body and operating at **Level 7** from the moment of transfer. The human body\'s amplifying effect added the extra level immediately.\n\nThe cellular residue of the Primal\'s collapse left him with inherited military knowledge — tactical, operational, structural. He did not experience it as memory. He experienced it as capability that had not been there the day before: an understanding of how Primal forces thought, how their operations were designed, where the weak points in a transference process were.\n\nHe ran. The three who had won ran together, away from the Ouranos building, carrying power and knowledge they did not ask for and could not yet explain.\n\n**The Foundation**\n\nTan Loo\'s contribution to the resistance was tactical. Where Crimi Night was the first — the fact around which the resistance organised — Tan Loo was the operational mind. The Primal military knowledge pressed into his cellular architecture was deeper and more systematic in someone who had already been cultivating a chaotic-dark alignment: his existing architecture was built for productive conflict, and it made use of the inherited knowledge in ways the others\' cores did not. He understood, faster than Crimi or Miho, what they had defeated. And more importantly: how to defeat it again.',
    notes: 'One of three humans who defeated Toma More\'s companions in the original 4 Earth crossings. Level 6 Primal elite core (→ Level 7 in human body via amplification). Fire-ice dual core, chaotic-dark — the storm architecture made external anchoring impossible. Carries inherited Primal military knowledge; his chaotic-dark processing made this knowledge operationally usable faster than the others. Fled from the Ouranos clan building with Crimi Night and Miho Frame.',
  },
    {
    id: 'miho_frame',
    name: 'Miho Frame',
    house: 'unknown',
    role: 'Resistance Co-Founder · Founder, Human Division · Conqueror of the Original Crossing',
    epithet: 'The Reasonable One · Third of the Three',
    status: 'deceased',
    location: 'Historical — killed by 8 in front of Ember',
    importance: 2,
    core: { element: 'Electric-Water (dual)', alignment: 'Harmonic-Dark' },
    description:
      'Miho Frame is the third of the three humans who defeated Toma More\'s companions in the original Earth arrival crossing — alongside Crimi Night and Tan Loo. He did not win through force or cultivated will. He won because the Primal elite who entered him could not hold a frequency that did not match.\n\n**The Crossing and the Rejection**\n\nMiho Frame was the fourth person in the North European region on the day Toma More and his three companions arrived. The companion who entered his body encountered his Electric-Water, harmonic-dark core — and immediately found that the architecture simply did not accept what was being imposed. Harmonic-dark does not struggle. It resonates or it rejects. Miho\'s core operated at a frequency specifically and precisely his own, built through years of cultivation into an internal harmonic too defined to be overwritten by the time the Primal tried to occupy it. The Primal\'s consciousness collapsed. Miho was still there, his core restructured and clarified at the frequency level in ways years of cultivation alone could not have produced.\n\nMiho emerged carrying the Primal\'s Level 6 elite core, now operating at **Level 7** inside a human body, the collapsed Primal\'s military knowledge settling into his architecture as capability rather than memory — an understanding, intuitive and structural, of exactly how transference worked and what conditions created incompatibility. This shaped how the resistance identified potential human defenders for decades afterward.\n\n**The Three Together, and the Founding of the Human Division**\n\nWhen Crimi Night, Tan Loo, and Miho Frame found each other, the three had between them three completely different survival mechanisms and Level 7 cores apiece, along with a very personal understanding of exactly what they were fighting. Toma More had sent his three most trusted. All three had stopped them. It was the beginning of Toma\'s most persistent operational problem, and the founding moment of the Earth resistance. Miho went on to lead the resistance\'s “human division” specifically, organized around saving people and disrupting Toma\'s core-transfer operations rather than pursuing direct confrontation. Publicly, he became the man everyone trusted most: he cared about every soldier, preached that nobody was replaceable, and was seen by his people as the moral center of the whole resistance.\n\n**What He Actually Did**\n\nPrivately, he classified the death-level rescue mission that captured Z and Ember as a routine assignment — a deliberate lie that hid a decision to spend two lives he\'d found difficult to value on his own terms. He resented Z specifically, less out of tactical calculation than a private, festering envy: Z\'s willingness to die repeatedly and mean it made Miho feel, by comparison, like a man who had never actually put his own life on the line the way he asked others to. He killed him — arranged his death — because Z represented a courage Miho didn\'t have and hated himself for lacking.\n\nWhen 8 (revealed to be the same Z, transformed) returned to destroy his camp, Miho was kept deliberately alive — Minia\'s design, delivered to Ember as a gift. Ember was given two questions and the power to end his suffering whenever she chose; she let it run seven full days, sixty-eight near-deaths per day, watched throughout by the children 8 had spared, before finally ordering his death. He never learned whether she forgave him. He almost certainly did not deserve to.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'One of three humans (with Crimi Night and Tan Loo) who defeated Toma More\'s companions in the original Earth crossings — Level 6 Primal elite core amplified to Level 7 in a human body, Electric-Water dual, harmonic-dark. Went on to found and lead the resistance\'s human division. Killed his own asset (Z) and effectively Ember through a falsified mission classification, out of envy rather than pure strategy. Tortured to death over 7 days in front of Ember on Minia\'s order, watched by the surviving children as a lesson in what disobedience costs. Father of Elho Frame.',
  },
  {
    id: 'nevir_revyn',
    name: 'Nevir Revyn',
    house: 'revyn',
    role: 'Head of Clan Revyn · Kazemi Believer · Trial Recovery Specialist · Life/Death Sovereign',
    epithet: 'The Reigniter · He Who Speaks With the Dead',
    status: 'active',
    location: 'Kazemi Primal Capital — holding the main gate against the Ascen assault',
    importance: 3,
    core: { element: 'Fire-Life/Death (dual)', alignment: 'Harmonic-Light' },
    description:
      `Nevir Revyn is the head of Clan Revyn during the Kazemi trial centuries and the current war. He is one of the strongest Primals of Kazemi remaining — his strength drawn not from ambition but from love. He speaks often about the future his people will have, the children who will not know this war. He is the kind of leader who generates loyalty by meaning every word he says.\n\n**The Clan's Sovereign Ability — Two Modes of Resurrection**\n\nClan Revyn's ability is full command over the Life/Death boundary. Nevir's specific expression operates in two distinct modes:\n\n*Mode 1 — Personal Kill Restoration:* Any being that Nevir kills personally retains a cord of connection to him through the act of death. He can reignite the remaining life force and bring that person back temporarily — the cord of the kill becomes the cord of the return. Duration is limited by how much life force remained at the moment of death.\n\n*Mode 2 — Covenant Mark:* Any warrior who offers themselves to Nevir — accepts him as their sovereign in the full ritual sense — can be called back by him after death. All warriors of the Kazemi Primals on the battlefield carry this mark. Nevir dislikes using this mode. He considers it dishonorable to the dead — a use of their last resource without their ability to refuse. He uses it when the need is absolute and not before.\n\n**The Battlefield Dynamic**\n\nEvery resurrection burns the remaining life force as fuel. As the life force burns it produces death force — the inverse byproduct of life consumed. This byproduct is normally lost. In the battle against the Ascen assault force, 8 identified this dynamic and absorbed the death force as it was produced, converting it into a secondary weapon: Death's Rampage, which ignited the residual mana in every fallen enemy in range. Nevir watched this with horror and something he could not name.\n\n**The Cost**\n\nEvery reignition ages him. Not metaphorically — actual years leave his body with each use. He has carried that cost across centuries of trial recovery work. He does not resent it. The clan's doctrine holds that life extracted from one vessel to animate another is appropriate exchange.\n\n**His Character**\n\nNevir and Sofia Prescian have been collaborators for so long that their clans function as one extended family. He jokes with her about a future where they can both raise children in peace. He means it every time. He is one of the few Primal leaders who was genuinely relieved when the trial ended — he never liked watching his people walk into it and not return, even though he believed in it completely. That grief is why he became so strong. The love for people who are dying is heavier than hate. It builds differently.\n\n**[Facility Arc, Part 3]**\nThe only major figure in this period who deliberately avoids 8 rather than being drawn to him — he has watched too many people he respects fall under the reflective devotion effect and is genuinely afraid of joining them. Confides his fears to Evelyn More, unaware (or unwilling to fully register) that she reports everything back to her father. Correctly guessed, alongside Sofia, that Mira Ardent was Ascen by training rather than birth, based purely on her fighting style. When Sofia confessed she was in love with Pandro rather than her own arranged fiancé Alex More — a marriage Sofia had volunteered for years earlier specifically to spare Nevir's own clan a political trap — Nevir felt responsible for the position he'd put her in, and gambled everything on a public confrontation: exposing the affair in front of both houses' full leadership, then deliberately, consciously triggering 8's core-reflection effect to force a resolution, using knowledge of the mechanic he'd built up firsthand from 8 enhancing his own resurrection technique in battle. It worked — 8 dissolved the arranged marriage on the spot, revealed Sofia's pregnancy in the same breath, and ordered her married to Pandro instead. It is the only known instance of someone using 8's own nature as a deliberate tool rather than falling victim to it.\n\n**What It Actually Cost Him**\n\nWhat Nevir has not reckoned with, and does not yet know: forcing 8\'s hand this way was not free. Every request made of 8 outside a standing order draws payment from somewhere, and Nevir\'s own core was the price — put forward the moment he chose to gamble rather than ask, whether he meant to offer it or not. He believes he got Sofia her marriage for nothing. He did not. His core now belongs to 8, unrealized and uncollected, the same way Cai\'s once did before she understood what she had signed away.`,
    powers: [
      { name: 'Personal Kill Restoration', type: 'Clan Sovereign Ability — Life/Death, Mode 1', description: 'Anyone Nevir kills personally retains a cord of connection to him through the act of death, letting him reignite their remaining life force and bring them back temporarily. Duration is limited by how much life force was left at the moment of death.' },
      { name: 'Covenant Mark Resurrection', type: 'Clan Sovereign Ability — Life/Death, Mode 2', description: 'Any warrior who has offered themselves to Nevir as sovereign can be recalled by him after death — every Kazemi Primal warrior on the battlefield carries this mark. He considers it dishonorable to the dead and uses it only when the need is absolute.' },
      { name: 'Core Resurrection (limited)', type: 'Emergency Application — dead cores, not dead cells', description: 'His ability resurrects dead cores specifically, not dead cells. Used on a single Life/Death-aligned core inside 8\'s body during his near-death collapse, guided to the right point by Pandro and Sofia — the first time he\'d ever applied the ability to something that dense.' },
    ],
  },
  {
    id: 'sofia_prescian',
    name: 'Sofia Prescian',
    house: 'prescian',
    role: 'Head of Clan Prescian · Kazemi Believer · Living Archive of the Trial · Time-Earth Sovereign · Former trainer of Minia Consa',
    epithet: 'The Archivist · She Who Carries Every Encounter · Memory of the Earth',
    status: 'active',
    location: 'Kazemi Primal Capital — defending the city against the Ascen assault',
    importance: 3,
    core: { element: 'Time-Earth (dual)', alignment: 'Chaotic-Light' },
    description:
      `Sofia Prescian was the head of Clan Prescian during the Kazemi trial period — the figure who managed the institutional memory of the Believer faction's centuries-long campaign to pass Enari's trial.\n\n**The Clan's Sovereign Ability — True Time Expression**\n\nClan Prescian's sovereign ability is not the internal time-perception the Nexal bloodline carries (which is a diluted descendant expression). The Prescian ability is structural: they experience time as a different substance from other beings. To a Prescian elder, the past is not memory — it is present. Every ancestor who carried the ability left a complete record within the bloodline. A current Prescian can access the direct, unfiltered experience of any ancestor as vividly as their own present moment.\n\nSofia's specific application: her clan used their Time alignment to access and replay records of the past in a form others could study. Not simply remembering — externalising the record so that current candidates could train on previous trial encounters as though experiencing them directly. They were archivists and trainers simultaneously.\n\n**Active Ability — Temporal Compression**\n\nFor brief durations, a Prescian can compress their personal experience of time — accelerating the mind through the present while the body continues at normal speed. Not freezing time. The cost scales with duration; extended use causes neurological degradation. The clan does not overuse this. They have too many other tools.\n\n**Her Role in the Kazemi Believer Faction**\n\nSofia and Nevir Revyn built the trial's training-and-recovery cycle together. Revyn recovered experience data from those who died. Prescian preserved it and made it available to the next generation of candidates. Across centuries of failure, the two clans had grown so close through this shared labour that their successors considered themselves a single extended family across clan lines.\n\nSofia, like Nevir, held the conviction that the Kazemi trial was sacred and belonged to Primals. When Clan Consa began feeding human cores into the trial space under Toma More's Earth operations, Sofia was among those who protested it as desecration — a violation of the trial's meaning, not simply its rules. The trial was a call, and the call was not issued to everyone.\n\n**The Earth-Memory Technique — Battlefield Preparation**\n\nBeyond the bloodline archive ability, Sofia's Time-Earth dual alignment produces a unique secondary technique: she can read the past of the physical earth itself. Every stone, every surface, every piece of ground holds a record of its prior positions. Sofia can access this record and materialise a piece of earth at a past position — bringing that stone to a specific point in the current space as it was at any prior moment. She can also imbue earth with mana signatures before materialising it, producing crystallised earth of any elemental alignment. This means she can place barriers, weapons, or terrain features at specific points in the present that were not there a moment before — planned from the past, executed in the present.\n\nIn the assault on the Kazemi Primal Capital, she used this to prepare the battlefield before the battle — placing Time-mana-crystallised earth at positions that would intercept future attacks. She blocked one of Tenza Nexal's Chronos arrows with a stone she had imbued and positioned before the shot was fired.\n\n**What the Clan Remembers**\n\nClan Prescian are the living archive of the Primal era. Through their lineage, they remember what Limbo felt like before the Arke twins reshaped it, what the Primordials spoke about when they spoke to each other, what the 7 original Primal leaders were like as individuals. This knowledge is not shared openly. They have watched too many things get weaponised to give it away freely.\n\n**Her History with Minia Consa**\n\nSofia was Minia's trainer in the battle halls of the Kazemi Primals — a fact that sits with some irony given what Minia has become. Of the three great families in the Primal remnant, Sofia knows Minia the best. She was the first person Minia contacted when the Ascen assault was confirmed. She doesn't trust her. She knows better than that. But she knows her.\n\n**[Facility Arc, Part 3]**\nDenied, publicly and for years, that 8 was Kazemi's champion reborn — while privately writing three increasingly personal accounts of him: a straight battlefield report, a private diary entangled with her own fear of ever having children while the trial doctrine still stood, and a full mythologized story, written as a little girl's tale, that named him the Champion and then the Emperor. She never intended anyone to read the third one. Pandro did, uninvited, while waiting for a meeting she was late to — and was moved to tears, treating her privately as a prophet. That night became the one real, unguarded intimacy of her life, set against an arranged marriage to Alex More that the Prescian elders had decided for her long before she had any say. Made "the Champion's First Captain" and later "the Champion's Strongest Warrior" by Minia — titles that measurably deepened her devotion, since she alone (besides Minia) was placed close enough to 8 to be affected by his passive reflective influence at near-constant range. Her arranged marriage was publicly and violently dissolved when Nevir exposed her affair with Pandro and 8, in the same breath, revealed she was already carrying his child — after which 8 personally ordered their marriage instead, and Pandro took the Prescian name.\n\nWhat almost no one knows: her writing is not simple invention. Her Time-Earth core unconsciously draws on 8's own residual trial-experience whenever she's near him, which is why her private "fiction" reads less like imagination and more like memory that hasn't happened yet — and why the mythology she was ashamed of turns out, later, to have been substantially true.`,
    powers: [
      { name: 'True Time Expression', type: 'Clan Sovereign Ability — Ancestral Record Access', description: 'Not internal foresight but structural time-perception — the direct, unfiltered experience of any ancestor who carried the ability, retrievable as vividly as her own present moment. Used to resonate with the dying time-aligned core inside 8\'s body and guide Nevir toward the correct core to resurrect.' },
      { name: 'Temporal Compression', type: 'Active Ability', description: 'Compresses her personal experience of time for brief durations — the mind accelerates through the present while the body stays at normal speed. Cost scales with duration; extended use causes neurological degradation.' },
      { name: 'Earth-Memory Technique', type: 'Secondary Technique — Time-Earth dual alignment', description: 'Reads the past of physical earth itself and materialises a piece of ground at any prior position it once held, optionally imbued with a chosen elemental mana signature first. Used to pre-place crystallised earth across the battlefield before the Kazemi Primal Capital assault began, including the stone that blocked Tenza Nexal\'s Chronos arrow.' },
    ],
  },
  {
    id: 'audis_prescian',
    name: 'Audis Prescian',
    house: 'prescian',
    role: 'General — Heaven City Defense · Clan Prescian (Sofia\'s Cousin)',
    epithet: 'The Voice That Called Victory',
    status: 'active',
    location: 'Heaven — the Kazemi Primal capital',
    importance: 2,
    coreType: 'Water; harmonic-light',
    description:
      'A general of Clan Prescian, Sofia\'s cousin, given the job that fell to whoever couldn\'t be on the front line: hold the city steady from the inside while its warriors fought outside the walls. Audis built and ran the surveillance and communication network threading through Heaven\'s underground halls — the monitors that let him track the assault on the Kazemi Primal Capital in real time, and the speaker network he used, at the end of it, to tell an entire city it was not going to die today.\n\nHis core is Water, harmonic-light — a calm, controlled alignment suited to exactly the kind of steady, unglamorous command he practices. He is not a combatant in the way Sofia or Nevir are. His war was fought entirely through information: knowing what was happening, when to tell people, and when the truth would only cost them focus they couldn\'t spare.\n\nWhen the Ascen retreat began, he was the first person in Heaven to see it, and the first to say so out loud — loud enough that his own voice, rather than a prepared announcement, blew straight through every speaker in the city before he\'d finished deciding to use them. "Children of the Primordial, rejoice." He meant every word of it, and he was right to say it, even though the people who had actually won the day were still kneeling in a crater with nothing left to celebrate with.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Sofia Prescian\'s kin — city-defense branch of Clan Prescian rather than battlefield branch. Core: Water; harmonic-light. Introduced in Part 2.4 announcing the Ascen retreat and Heaven\'s survival over the city-wide speaker network, immediately before the surviving battlefield warriors are shown unable to celebrate the same news.',
  },
  {
    id: 'cai',
    name: 'Cai Consa',
    house: 'consa',
    role: 'Head of Medical Research, Clan Consa · Minia\'s Right Hand · Secret Infiltrator',
    epithet: 'The One Who Lies to Keep You Fighting',
    status: 'active',
    location: 'Consa main house, Limbo — head of the core-transfer research program',
    importance: 4,
    coreType: 'Appears Nature-Water; harmonic-light (the vessel\'s own signature) — conceals the true occupant',
    description:
      'The body called Cai is not what it appears to be, and has never been the same person twice.\n\nIt was built by **Zoe Navar** in the single real-time minute of 8\'s birth, instinctively, from the sensory knowledge she gained feeling his body evolve cell by cell during the trial. Arai\'s last instruction before all three women lost consciousness was for Zoe to make a vessel and use it — and Zoe did, escaping the initial chaos in a body that was hers, built by her, while her real body lay unconscious on Minia\'s table alongside Arai\'s and Hope\'s. For the first years of the infiltration, **Cai was Zoe** — cheerful, direct, a monster of battle, entering the Consa marriage-and-talent system under the name **Cai Mui**, rising through the military wing on pure combat skill.\n\nThe handoff happened during the exact moment 8 first seized Minia by the throat — sensing her sedating the real, unconscious bodies of Arai, Hope, and Zoe and reading it as an attack on cores he was still trying to protect. In the chaos of Minia being forced to stop the sedation, Zoe spent 99% of her remaining strength transferring the Cai vessel — and Arai\'s mind — into one motion, leaving only 1% for the visible, "weak" punch that floored Minia. From that moment on, **Cai has been Arai**, wearing a body Zoe built, sustained on Zoe\'s own mana for years at a cost that is slowly killing her.\n\nAs Arai, Cai married into a Consa pureblood line, taking the name **Cai Consa** — the surname she now carries publicly, five years and a lifetime removed from the woman who first walked in as Cai Mui. She rose from military service to head of medical research in barely a year once she reached Minia\'s inner lab, an ascent that infuriates the clan\'s old guard (see Taalor Consa) and that Minia herself has never quite been able to explain, even to herself. She is fully trusted, fully embedded, and has been responsible — on Minia\'s order and her own initiative both — for the torture of Namo Consa, the hunting of Ascen subjects for core-transfer experiments, and the design of the training program that shaped Aliya, Criya, Valariya, and hundreds of other captured children.\n\nWhat none of that trust has bought her is real control. Arai believes she engineered 8\'s seal — that she is the architect who bound him to herself, Hope, and Zoe. She does not know he built the receiving architecture himself, during the trial, already shaped for exactly the three of them, and that her desperate, real-time intervention completed a door that was never going to open for anyone else. She does not fully register that the Cai body, unlike her real one, is not immune to 8\'s passive reflective effect — which means her own obsessive fixation on understanding Aliya, on knowing why 8 singled her out, on wanting to make her "special," is itself partly a symptom of the exact influence she is supposedly the one clear-eyed observer of. And she has taken Namo\'s own indoctrination architecture — the machine that broke devotion into her without consent, generations ago, through him — and refined it, retargeted, and used it directly on children under ten, telling herself it is what keeps them alive through trials that would otherwise kill them. It may be true. It does not make her clean.\n\n**On Aliya**\n\nAliya was given to her by 8, without explanation, in front of the whole assembled Consa house — dropped at her feet rather than taken to be trained personally, the way Criya was. Cai has never learned why, and the not-knowing has become one of the organizing obsessions of her covert life. She raised her, trained her past her limits, and loves her — genuinely, past any operational justification — in a way that has become entangled with guilt she cannot fully name: the woman protecting Aliya and the woman who helped build the system grinding her down are the same person, and Cai has stopped being able to fully separate the two roles from each other.\n\n**On Lora**\n\nWhen a little girl named Lora was fatally wounded in the crossfire of Mira\'s fight with Tola Ardent, Cai recognized immediately the child was beyond saving — and lied to Mira anyway, *"leave her with me, she\'ll be fine,"* specifically so Mira would stay combat-functional rather than break mid-fight. She told her the truth the moment the battle actually ended.\n\n**The Empress She Never Asked to Be**\n\nAcross the two-year war against Axola, Cai was the one 8 left in charge whenever he was occupied or unreachable — the actual brain of the operation, reading her brother Tenza\'s strategies and countering them, planting propaganda through Aliya so effective it fractured the Alma-Spirits alliance without a single Primal blade drawn. Soldiers noticed what the city never saw: that 8 deferred to her judgment specifically, more than to anyone else at his side. Quietly, without her encouragement or knowledge at first, they began calling her the Empress — a title lifted whole from the same legend Minia was busy claiming publicly as the Goddess. Cai found out only through rumor, and it terrified her precisely because it fit: the story cast the Empress as the one who taught the lone-wolf Champion that an empire needs a leader as well as a weapon, and every day she spent running his operations proved the story right about her whether she wanted it proven or not.\n\n**The Week She Wished She Hadn\'t Understood**\n\nOrdered to sleep with 8 in front of Minia the week the wedding was moved up, she was spared only by his own standing order forbidding harm to a Primal citizen — a refusal that saved her and, in the same breath, redirected Minia\'s attention onto Ember instead. Cai stood through what followed and treated Ember after, and it is the clearest single reason her hatred of Minia stopped being professional and became personal.\n\nThe reckoning came days later, while she sat with Ember, and it broke over her in two unequal ways at once. The buried design logs behind 8\'s sealed order surfaced through the resonance of the two cores growing in Minia, and where Ember could only bear the last two of 37.2 trillion recorded deaths across a single unbroken week of screaming, Cai — reading the same archive through a core that is structurally his own Mind, externalized — took in the full 37.2 trillion in that same span, and very nearly didn\'t survive it intact. Why the same week produced such wildly different scales of experience for each of them is a question this account does not yet answer. It matters, and the answer is still to come.\n\nWhat she understood, once the laughter stopped: the order she believed she gave him five years into her own arrogance — complete the seal — had never finished. Every miracle, every battle, every year of the war against Axola had been run entirely on the mana allotted to that single unfinished task, at zero percent progress the whole time, because the components required to finish it — Summari and Nighla\'s command cores — were still inside him, still growing. She found a fourth command core in his architecture that shouldn\'t have existed by her own accounting of the three of them, etched with only two words: “—Kazemi!” She did not get to look further before she was summoned to the wedding.\n\n**What the Body Under Her Actually Is**\n\nCai does not fully understand, even now, what she is wearing. The vessel Zoe built from eight\'s own evolving cells in the single minute of his birth is not simply a disguise — it is a genuine Hybrid-Beast/Tool, built from the same forge that made Enari and Iris both, carrying a random cover-core over a true Nature-Water; harmonic-light signature at its center, able to host one mind at a time and imprint that mind\'s own core within it. It runs on the mana of its last core and its own heartbeat, and it has a shelf life: fifteen years, the same fifteen years the sealed order has left to run. Zoe held it for five, before the neck-choking incident. Arai has held it for ten since. What remains — the final five — is Hope\'s, whenever her turn comes.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    powers: [
      { name: 'Namo\'s Indoctrination Architecture (retargeted)', type: 'Adapted Psychological Conditioning', description: 'Took the Consa house\'s childhood devotion-conditioning — built by Namo to worship "a legend" in the abstract — and retargeted it to worship 8 specifically, using it on children under ten in her training group as both weapon and (in her own framing) mercy.' },
      { name: 'Core-Transfer Research (inherited from her own life\'s work)', type: 'Applied Ascendant Core Science', description: 'Her 90%-then-60%-graduation success rate in the children\'s training program comes directly from research she developed with Minia, Hope, Zoe, and Mira in her own first five years at the facility — Minia has no idea her "protégé" is using Arai\'s own methodology against Arai\'s former captors.' },
    ],
    notes: 'Formerly Cai Mui (Zoe piloting the vessel), now Cai Consa (Arai, since the neck-choking incident). Zoe built the body; Zoe is critically degraded from sustaining it, her own unconscious body, and (later) Arai\'s and Hope\'s bodies simultaneously. Not immune to 8\'s reflective core-effect while in this vessel — a real, mostly-unrecognized vulnerability. Told Mira Lora would be fine, knowing she was already dead. See id: mira_ardent for the Lora vow this caused, id: aliya_hallow for the surrogate-daughter thread, id: arai / id: zoe / id: hope for the body-succession mechanics.',
  },

  // ── Facility Arc, Part 3 — the Consa house and Miho's division ────────
  {
    id: 'taalor_consa',
    name: 'Taalor Consa',
    house: 'consa',
    role: 'Senior Core-Transfer Researcher, Clan Consa',
    epithet: 'The Old Method',
    status: 'active',
    location: 'Consa main house, Limbo',
    importance: 1,
    coreType: 'Wind-Earth; harmonic-light',
    description:
      'One of Namo Consa\'s most capable scientists, roughly fifty years old, a devout believer in Kazemi through the same childhood conditioning that shaped Minia and Pandro. Resents Cai openly — it took her five years to reach a rank he considers he earned properly over decades, and being briefed on Namo\'s true nature and disgraced fall by Pandro, on the same day he first met "the Champion" in the flesh, only sharpened the wound.\n\nTaalor ran his portion of the children\'s training program the old-fashioned way: hunting down pure Ferali and Celestial cores directly, rather than working through 8\'s choose-to-serve contract system, on the theory that a human holding a Ferali or Celestial core outright would gain direct command over Vraka or Selis\'s creatures. He underestimated how strongly the twins\' own influence works on an unprepared mind — roughly 70% of his group lost themselves to Vraka\'s violent pull or Selis\'s seduction toward "perfection." The 30% who survived were, not coincidentally, his oldest and most strong-willed subjects: Dio Ferran and Leo Proude among them.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Namo loyalist, Kazemi believer, resents Cai\'s rapid rise. Ran the direct pure-core-implant training track — ~30% survival rate, all older/stronger-willed children. Produced Dio and Leo.',
  },
  {
    id: 'saren_consa',
    name: 'Saren Consa',
    house: 'consa',
    role: 'Junior Core-Transfer Researcher, Clan Consa',
    epithet: 'The First Time',
    status: 'active',
    location: 'Consa main house, Limbo',
    importance: 1,
    coreType: 'Light; chaotic-dark',
    description:
      'The most openly twisted of the three scientists assigned to the children\'s training program, and the one with the lowest graduation rate — roughly 10%. Not out of malice exactly; this was genuinely his first time handling core transplantation at scale, and it showed in the body count. Loyal to Minia without reservation, and fully capable within his narrow lane, but lacking the instinct that let Cai and even Taalor read a subject\'s tolerance before it was too late.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Lowest graduation rate of the three researchers (~10%) — inexperience, not malice, though the two aren\'t always distinguishable in outcome. Fully loyal to Minia.',
  },
  {
    id: 'criya_sin',
    name: 'Criya Sin',
    house: 'unknown',
    role: 'Ban Sin\'s Son · 8\'s First Chosen Subject',
    epithet: 'The Champion Prodigy',
    status: 'active',
    location: 'Consa main house, Limbo',
    importance: 2,
    coreType: 'Water-Wind-Ice; harmonic-light (hidden depth — believed by himself and his father to be Water alone)',
    description:
      'Ban Sin\'s son, age 11 at capture — a year younger than Valariya, scorned by his father for showing only Water technique when Ban himself commanded Wind and Ice and expected an heir who could match him. What neither of them knew: Criya\'s actual core was Water-Wind-Ice all along, buried under a lifetime of being told he was the useless one.\n\n8 singled him out personally the day the children arrived — "This one is special!" — the same moment he handed Aliya to Cai. Where Aliya was given away to be raised, Criya was kept and trained directly, the only child 8 taught himself with any real consistency. Their first real conversation is the origin of the entire choose-to-serve system: 8 asked him what made him special, Criya answered with his own worst self-assessment — useless, pathetic, a disappointment — and 8 answered, "Good and bad. Perfect. I will reforge you in my forge and remake you in dragon\'s fire. You will have an extraordinary core," before offering him the deal on the spot: **"I choose to offer you my core."** Criya was the first person, ever, to make that exchange with him.\n\nWithin eight months he manifested both a tool and a beast simultaneously — the spear **Winter** and the ice-crystalled polar bear **Bearursil** — unlocking the wind and ice aspects of his core nobody, including him, knew were there. Trained alongside Pandro under 8 directly; came to be called "the Champion Prodigy" in whispers, the only child besides Valariya who could keep pace with him. Read the "Champion" manuscript as pure adventure fiction alongside Mira — devoted to 8 as a man, not as a legend, in a way that never required the book to be true.',
    beast: {
      name: 'Bearursil',
      type: 'Kazemi-forged Beast',
      description: 'A massive polar-bear-formed beast, crystalled over in blue ice, forged from Criya\'s own core rather than assigned by element or biology — usable only when he commits his full self to it. Manifested alongside Winter, the first documented case of a single subject producing both a tool and a beast at once under 8\'s system.',
    },
    weapon: {
      name: 'Winter',
      type: 'Kazemi-forged Tool',
      description: 'A blue-and-white spear commanding water, ice, and wind simultaneously — built from Criya\'s core itself rather than his element, meaning it only responds to genuine self-investment rather than raw skill. Named for the season, matching the ice-and-wind nature the core was hiding under a lifetime of being told it was only water.',
    },
    gates: [],
    psyche: [],
    notes: 'Age 11 at capture (Aliya 6, Valariya 12, Dio/Leo 13). Ban Sin\'s son — see id: ban_sin (deceased). First person ever to make a "choose to serve" contract with 8; the origin scene for the entire future Will-bearer system.',
  },
  {
    id: 'milla_ores',
    name: 'Milla Ores',
    house: 'unknown',
    role: 'Saren\'s Star Pupil · Third Pillar of the Young Squad',
    epithet: 'The Web-Weaver',
    status: 'active',
    location: 'Kazemi Primal Capital',
    importance: 2,
    coreType: 'Electric-Light-Dark; chaotic-light',
    description:
      'Saren\'s one genuine success, and the outlier of her whole group: raised under a training philosophy far cruder and darker than Cai\'s own — Saren selected only for survival, discarded the rest, and 8\'s own hand in that group leaned harder into fear than into cultivation. Milla is the one product of that method who came out whole rather than broken. Unlike Taalor\'s or Cai\'s children, she never went through the Consa hypnotic conditioning at all — an outsider to the whole apparatus, roughly Valariya\'s age, who nonetheless idolizes 8 completely and entirely on her own terms. Where the older captured children mostly saw only the monster they called Z, Milla never carried that history and never needed to unlearn it.\n\nIn combat she sits as the pillar between Criya and Valariya — not the spear, not the support, but the structure that lets both of them commit fully to their own roles. 8 gave her a beast rather than letting her forge one from her own core, the way Criya and Valariya did: **Web**, a giant spider-formed construct capable of spinning two distinct kinds of net — black webs that absorb and capture, white webs that spread information and project it outward. It is a support-and-control beast built for exactly the role she occupies on a battlefield: the one who holds a fight\'s shape so the specialists inside it can win.',
    beast: {
      name: 'Web',
      type: 'Kazemi-forged Beast (assigned, not self-forged)',
      description: 'A giant spider-formed construct able to spin two distinct types of web: black webs that absorb and capture, white webs that spread information and project it outward. Built as a support-and-control beast rather than an offensive one — it holds a battlefield\'s shape rather than winning a fight outright.',
    },
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Introduced in Facility Arc, Part 4.1. Electric-Light-Dark; chaotic-light core. Saren\'s star pupil and the only real success of his group\'s far crueler training method. Never underwent Consa hypnotic conditioning — an outsider to the system who idolizes 8 entirely on her own terms rather than through indoctrination. Roughly Valariya\'s age. Positioned as the third pillar of the young squad alongside Criya and Valariya. See id: criya_sin, id: valariya.',
  },
  {
    id: 'assa_flora',
    name: 'Assa Flora',
    house: 'unknown',
    role: 'Alma-Human Hybrid · Rescue Mission Volunteer',
    epithet: 'The Failure Who Wasn\'t',
    status: 'active',
    location: 'Kazemi Primal Capital · Minia\'s facility (as of the rescue mission)',
    importance: 1,
    coreType: 'Nature-Fire-Water-Earth-Air-Ice; harmonic-dark',
    description:
      'A ten-year-old Alma-human hybrid rescued from a core-transfer trial roughly a year before Irane\'s escape — she won the transfer, keeping her human self rather than losing it to the Primal core, which the Consa program classified as failure rather than success and marked her for death. Criya\'s unit reached her first. She carries a genuine core beast in the shape of a literal tree, patient and slow to provoke, built for endurance over speed. Spent the year before the rescue mission imprisoned alongside Naile Rui, kept going in part by Valariya\'s retellings of the Emperor\'s story — a comfort Valariya gave her with real guilt, already aware of the cost that kind of hope could carry.',
    beast: {
      name: 'unnamed (literal tree form)',
      type: 'Rare Core Beast',
      description: 'A genuine tree as a core beast — slow, patient, and built for endurance rather than offense. Rare among core beasts for taking a fully plant-based rather than animal-based form.',
    },
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Introduced in Facility Arc, Part 4.7. Ten years old. Won a core-transfer trial by keeping her human self rather than losing it to the Primal core — classified a failure and marked for death under the Consa program\'s logic, rescued by Criya\'s unit roughly a year before Irane\'s escape. Joined the facility rescue mission alongside Naile Rui. See id: naile_rui, id: criya_sin.',
  },
  {
    id: 'naile_rui',
    name: 'Naile Rui',
    house: 'unknown',
    role: 'Human-Spirit Hybrid · Rescue Mission Volunteer',
    epithet: 'The Failure Who Wasn\'t',
    status: 'active',
    location: 'Kazemi Primal Capital · Minia\'s facility (as of the rescue mission)',
    importance: 1,
    coreType: 'Electric-Fire-Water-Earth-Air-Ice; chaotic-light',
    description:
      'A thirteen-year-old Human-Spirit hybrid, classified a failure by the same core-transfer logic that condemned Assa Flora — he kept his human self instead of losing it to the Primal core forced into him. His tool takes the form of an elemental cloud, light and mobile where Assa\'s beast is rooted and enduring. Imprisoned alongside her for the year leading up to the rescue mission, and like her, chose to join the attempt to free Irane rather than wait out the war from a cell.',
    beast: {},
    weapon: {
      name: 'unnamed (elemental cloud form)',
      type: 'Rare Core Tool',
      description: 'A tool that takes the form of a mobile elemental cloud — light, fast, adaptive, the inverse of Assa Flora\'s rooted tree beast.',
    },
    gates: [],
    psyche: [],
    notes: 'Introduced in Facility Arc, Part 4.7. Thirteen years old. Won a core-transfer trial by keeping his human self rather than losing it to the Primal core — classified a failure under the Consa program\'s logic, imprisoned alongside Assa Flora. Joined the facility rescue mission with her. See id: assa_flora, id: criya_sin.',
  },
  {
    id: 'alex_more',
    name: 'Alex More',
    house: 'more',
    role: 'Toma More\'s Eldest Son · Representative of House More to the Primals',
    epithet: 'The Believer',
    status: 'active',
    location: 'Heaven — commanding House More\'s Primal-aligned forces',
    importance: 2,
    coreType: 'Light-Dark; chaotic-dark',
    description:
      'Toma More\'s eldest son and Evelyn\'s older brother, born — like her — a pure human-Primal rather than through any core-transfer procedure. Sent by his father to lead House More\'s forces in support of the Primals of Kazemi, ostensibly as proof of Toma\'s loyalty to their cause; in practice, the reinforcements only arrived after the assault on Heaven had already been won, when it was clear the Primals would survive to be worth allying with.\n\nAlex is a true believer, sincerely — he bought completely into the image of 8 as the Champion of legend, joined his elite squad, and fell honestly in love with Sofia Prescian, to whom he was arranged to be married by a decades-old political deal between the Prescian/Revyn clans and House More, struck in the darkest days of the war when the Primals believed they were about to be annihilated and needed More\'s aid at any cost. He never knew the arrangement was a debt his own people resented, or that Sofia\'s heart belonged to someone else entirely. When Nevir publicly exposed Sofia and Pandro\'s affair — and 8, in the same breath, revealed Sofia was already pregnant — 8 personally and violently overturned the arranged marriage, forcing Sofia and Pandro\'s wedding instead and humiliating Alex in front of both houses\' full leadership. He has not recovered from it.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Toma More\'s eldest son, Evelyn\'s older brother. Arranged to marry Sofia Prescian by an old political debt; genuinely in love with her, unlike the arrangement itself. Publicly humiliated when 8 annulled the arrangement and forced Sofia\'s marriage to Pandro instead. See id: sofia_prescian, id: pandro_lexan.',
  },
  {
    id: 'adorn_more',
    name: 'Adorn More',
    house: 'consa',
    role: 'Namo Consa\'s Hidden Son · Minia\'s Twin Brother',
    epithet: 'The One Namo Hid',
    status: 'deceased',
    location: 'Historical — died at birth',
    importance: 1,
    coreType: 'Life-Force Combustion (unique) — burns life force directly',
    description:
      'One of Namo Consa\'s thirty children, and Minia\'s twin — born with a core capable of burning life force itself, directly, rather than channeling elemental mana. He killed their mother in the act of being born; Minia survived only because she emerged first. Namo, recognizing what the core could do, kept Adorn hidden rather than feeding him to the trial like his other children — the power was real, but too dangerous and too unstable to risk, even for a man who sent thirty of his own into that fire. Adorn never lived past infancy. His core, extracted and preserved, sat unused for decades until Minia — with the same casual cruelty Namo raised her on — implanted it in Valariya Hallow as a private experiment, very nearly killing her the same way it killed their mother.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Namo\'s hidden 30th-generation child, Minia\'s twin, died at birth (burned their mother\'s life force in the process). Core later forced into Valariya Hallow by Minia — see id: valariya_hallow.',
  },
  {
    id: 'valariya_hallow',
    name: 'Valariya Hallow',
    house: 'unknown',
    role: 'Paul Hallow\'s Elder Daughter · Aliya\'s Sister · Namesake of Valariya',
    epithet: 'The One Who Named Him',
    status: 'unknown',
    location: 'Unknown',
    importance: 4,
    coreType: 'Life/Death-Nature-Fire (extremely rare) — stabilized by a Kazemi-forged tool/beast hybrid',
    description:
      'Paul Hallow\'s elder daughter, twelve years old at the destruction of Miho Frame\'s camp, where she watched her father die protecting her and her younger sister Aliya and ran rather than looked back. Trained under Cai alongside Aliya; unlike her sister, Valariya went through none of the Consa house\'s childhood devotion-conditioning — she was too old to be indoctrinated the way six-year-old Aliya was, and it shows. To her, 8 was never a god. He was a man, broken and turned into a tool, and what she felt watching him was pity rather than hatred or worship — a clearer read on what he actually was than almost anyone else in this story manages.\n\nMinia took a personal, proprietary interest in her — a "pet project" — and at one point took her from Cai\'s care to force an experimental core transfer using **Adorn More**\'s hidden, life-force-burning core (Minia\'s own dead twin brother\'s). Valariya won the transfer but the core began burning her life force directly, killing her by inches; Minia, having "broken" her, returned her to Cai with a shrug and no more concern than that. Cai, desperate and out of options, made her first direct personal appeal to 8 rather than relaying an order — he agreed to help only if Valariya chose it herself and accepted the cost, the same choose-to-serve mechanic he\'d use on every subject after. She accepted, invoking Aliya\'s safety, and 8 built her a tool/beast hybrid — the **Tree of Yggdrasil** — that transforms her body into something capable of holding a life-force-burning core stably rather than being consumed by it.\n\nIt was Valariya who, exploring the Great Library Tree with Aliya, found and read the full hidden manuscript naming 8 "the Champion" and "the Emperor" — and who, drawing on a bedtime story her father used to tell her and Aliya about an emperor whose name he pronounced in a particular way, gave the character in the story — and, unknowingly, the actual future Emperor of the actual future world — the name **Irane**. She told the story in secret to the other children for years afterward, offering them something like hope inside the darkness of the training program, entirely unaware she was naming history early rather than inventing it.\n\nDecades later, as an adult, she gives this same name — along with "Adam" — to Irane a second time, at the moment of her own death, completing a loop she started as a twelve-year-old girl telling stories to her little sister.',
    beast: {},
    weapon: {
      name: 'Tree of Yggdrasil',
      type: 'Kazemi-forged Tool/Beast Hybrid',
      description: 'A life-tree tool/beast hybrid that transformed Valariya\'s body into a form capable of stably holding a life-force-combustion core — wrapping around the core itself to regulate its burn rather than letting it consume her outright. Built by 8 as the price of the choice she made to save her own life for Aliya\'s sake.',
    },
    gates: [],
    psyche: [],
    notes: 'Age 12 at capture. Paul Hallow\'s elder daughter, Aliya\'s sister — this IS the Valariya the city of Valariya and Irane\'s own name are named after; her death, decades from this point, is when she gives him "Irane Core" formally — the last true thing she ever said to him, calling his core beautiful with her final breath. Later marries Dio Ferran (see id: dio) — Leo Proude loved her unrequited. Carries Adorn More\'s hidden core (see id: adorn_more), stabilized by the Tree of Yggdrasil.',
  },
    {
    id: 'elho_frame',
    name: 'Elho Frame',
    house: 'unknown',
    role: 'Miho Frame\'s Son',
    epithet: '',
    status: 'active',
    location: 'Unknown',
    importance: 1,
    coreType: 'Electricity; chaotic-dark',
    description:
      'Miho Frame\'s son, present for his father\'s death at the destruction of the resistance camp — struck 8 with everything he had immediately afterward, in grief and fury, and did no damage at all; 8 swatted him out of the air without breaking stride toward Miho\'s body. Whatever became of him after that day is not recorded here yet.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Miho Frame\'s son. Attacked 8 immediately after watching him kill his father — no effect. Fate beyond that point unrecorded.',
  },
  {
    id: 'aloi_proude',
    name: 'Aloi Proude',
    house: 'unknown',
    role: 'Resistance Captain · Leo Proude\'s Father',
    epithet: '',
    status: 'deceased',
    location: 'Historical — killed by 8 at the destruction of Miho\'s camp',
    importance: 1,
    coreType: 'Fire; harmonic-light',
    description:
      'First captain of Miho Frame\'s division, Leo\'s father — forced to accept a Ferali core and, unlike his wife under the same procedure, retained his full humanity and will afterward. Proud, warm, a little too eager to believe his side was winning ("we will finally be able to heal the world once this is over"), and devoted enough to his son that his last act on the record was a small, showy flight into the air specifically to impress him. Killed by 8 shielding his own child during the massacre.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Leo Proude\'s father. Killed protecting his son during the destruction of Miho\'s camp. Retained full will after his own core-transfer, unlike his wife (unnamed, will lost in the same procedure).',
  },
  {
    id: 'synth_ferran',
    name: 'Synth Ferran',
    house: 'unknown',
    role: 'Resistance Division Leader · Dio Ferran\'s Mother',
    epithet: '',
    status: 'deceased',
    location: 'Historical — killed by 8 at the destruction of Miho\'s camp',
    importance: 1,
    coreType: 'Darkness; chaotic-dark',
    description:
      'Leader of the third division under Miho Frame, already pregnant with Dio when she was forced through the core-transfer procedure — willed her way through it, meaning Dio was conceived before she carried a core and was born fully human as a result. Direct, unsentimental, the one who scolded Aloi for speaking too casually of the dead ("don\'t speak of the dead... respect them"). Killed shielding Dio during the massacre; her last act was resting a hand on his cheek and smiling before she died.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Dio Ferran\'s mother. Killed protecting him during the destruction of Miho\'s camp — pierced by 8\'s light-based attack after binding him with Darkness magic.',
  },
  {
    id: 'ban_sin',
    name: 'Ban Sin',
    house: 'unknown',
    role: 'Resistance Second Commander · Criya\'s Father',
    epithet: '',
    status: 'deceased',
    location: 'Historical — killed by 8 at the destruction of Miho\'s camp',
    importance: 1,
    coreType: 'Wind-Ice; harmonic-light',
    description:
      'Second commander under Miho Frame, father of Criya Sin. Held high expectations for his son as heir and was openly disappointed that Criya showed only Water technique — never learning, before his death, that Criya\'s core was actually Water-Wind-Ice all along, hidden under a childhood of being told he was the disappointing one. Fought 8 directly during the massacre and was killed — his mask cut away mid-fight to reveal 8\'s altered face, and his last words were a question that never got answered: *"\'Z\', is that you?"*',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Criya Sin\'s father. Killed by 8 during the destruction of Miho\'s camp, recognizing him mid-death as "Z." Never learned Criya\'s true core potential — see id: criya_sin.',
  },
  {
    id: 'paul_hallow',
    name: 'Paul Hallow',
    house: 'unknown',
    role: 'Rescued Human · Father of Aliya and Valariya Hallow',
    epithet: 'The Selfless One',
    status: 'deceased',
    location: 'Historical — killed by 8 at the destruction of Miho\'s camp',
    importance: 2,
    description:
      'A pure human rescued by Miho Frame\'s division roughly a year before the camp\'s destruction, alongside his two daughters, Aliya and Valariya. Wanted nothing beyond saving his daughters and building them a better future — helped wherever he could, never sought out the dangerous, glorious missions the way Miho privately judged him for not doing, and was loved by the camp for exactly that unglamorous steadiness. Told his daughters a bedtime story, never published, about an emperor who led his people somewhere better — pronouncing the emperor\'s name in a particular way that Valariya would later use to name the actual, real Emperor of the world, decades before that Emperor existed as anything but a broken tool.\n\nKilled by 8 protecting both daughters during the massacre, cut off mid-sentence trying to tell them he loved them. Valariya grabbed Aliya and ran without looking back.',
    beast: {},
    weapon: {},
    gates: [],
    psyche: [],
    notes: 'Father of Aliya and Valariya Hallow. His bedtime-story emperor is the direct origin of the name "Irane." Killed by 8 during the destruction of Miho\'s camp — see id: aliya_hallow, id: valariya_hallow.',
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
  { id: 'r16', source: 'irane', target: 'irane_e_osiro',  type: 'parent', secret: true,
    note: 'Secret child — true name Irane E. Osiro. Embedded in Clan Osiro as a deep-cover spy.' },

  // ── Mothers → children ───────────────────────────────────────────────
  // Minia's line (biological mother of Summari and Nighla — secret)
  { id: 'r17', source: 'minia_consa', target: 'summari', type: 'parent', secret: true,
    note: 'Summari chose her father\'s name. Minia Consa is the biological mother — used herself as the experiment subject. Kept from all records.' },
  { id: 'r18', source: 'minia_consa', target: 'nighla',  type: 'parent', secret: true,
    note: 'Nighla chose her father\'s name. Twin of Summari — both Minia\'s daughters.' },
  { id: 'r19', source: 'ember_hist', target: 'irane_e_osiro',  type: 'parent', secret: true,
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
    note: 'Twins — both Minia Consa\'s daughters by Irane, chose Kazemi name. Minia\'s parenthood is secret.' },
  { id: 'r30', source: 'summari', target: 'irane_e_osiro', type: 'sibling', secret: true,
    note: 'Half-siblings — Summari\'s mother is Minia Consa; Jr\'s mother is Ember Hist. Both fathered by Irane.' },
  { id: 'r31', source: 'nighla',  target: 'irane_e_osiro', type: 'sibling', secret: true,
    note: 'Half-siblings — Nighla\'s mother is Minia Consa; Jr\'s mother is Ember Hist. Both fathered by Irane.' },
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
  { id: 'r51', source: 'irane_e_osiro', target: 'ember_osiro', type: 'ally', secret: true,
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
  { id: 'r55b', source: 'nuro_vane', target: 'axola_vane', type: 'parent', secret: false,
    note: 'Historical Niro\'s third child, introduced when Nuro\'s failure at the Kazemi Primal Capital needed a replacement commander' },
  { id: 'r55c', source: 'axola_vane', target: 'nuro',       type: 'sibling', secret: false,
    note: 'Axola humiliated Nuro in front of their father after Nuro\'s defeat, then took his position leading the next assault' },
  { id: 'r55d', source: 'axola_vane', target: 'ember_hist', type: 'sibling', secret: false,
    note: 'Both children of Historical Niro Vane' },
  { id: 'r55e', source: 'axola_vane', target: 'nina',       type: 'threat', secret: false,
    note: 'Axola holds Nina (Tenza\'s sister) as open leverage over Tenza — "fail me again and I will take her"' },
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

  // ── Eve & Adam's lineage — the 6 Earth Children ──────────────────────
  { id: 'r62', source: 'exco_wov',  target: 'eva_osiro', type: 'ally', secret: false,
    note: 'Eve\'s partner on Orius — together they had Lyra, Mara, and Sael Wov before the Earth crossing' },
  { id: 'r63', source: 'adam_wov',  target: 'dana_osiro', type: 'ally', secret: false,
    note: 'Adam met Dana in the west of Orius; their children Seth, Dain, and Noa crossed to Earth' },
  { id: 'r64', source: 'adam_wov',  target: 'eva_osiro', type: 'ally', secret: false,
    note: 'Adam and Eve were created together from Aeva — twins of purpose, sent in opposite directions, reunited at the crossing to Earth' },
  { id: 'r65', source: 'exco_wov',  target: 'vesper',    type: 'kin', secret: false,
    note: 'Vesper Wov is a descendant of Exco Wov through the Orius branch — Exco stayed and led the Wov clan until death; his line became House Wov' },
  // ── Eve's 3 Earth children (Wov-line, Gaia sub-beasts) ───────────────
  { id: 'r100', source: 'eva_osiro',  target: 'lyra_wov',  type: 'parent', secret: false,
    note: 'Eve\'s first daughter — born on Orius, crossed to Earth with the Bloom Beast (Noble Treasure)' },
  { id: 'r101', source: 'exco_wov',   target: 'lyra_wov',  type: 'parent', secret: false,
    note: 'Exco\'s first daughter by Eve' },
  { id: 'r102', source: 'eva_osiro',  target: 'mara_wov',  type: 'parent', secret: false,
    note: 'Eve\'s second daughter — crossed to Earth with the Wane Beast (Noble Treasure)' },
  { id: 'r103', source: 'exco_wov',   target: 'mara_wov',  type: 'parent', secret: false,
    note: 'Exco\'s second daughter by Eve' },
  { id: 'r104', source: 'eva_osiro',  target: 'sael_wov',  type: 'parent', secret: false,
    note: 'Eve\'s son — crossed to Earth with the Still Beast (Noble Treasure)' },
  { id: 'r105', source: 'exco_wov',   target: 'sael_wov',  type: 'parent', secret: false,
    note: 'Exco\'s son by Eve' },
  // ── Adam's 3 Earth children (Osiro-line, Cronus sub-tools) ───────────
  { id: 'r106', source: 'adam_wov',   target: 'seth_osiro', type: 'parent', secret: false,
    note: 'Adam\'s first son by Dana — crossed to Earth with the Echo Tool (Noble Treasure)' },
  { id: 'r107', source: 'dana_osiro', target: 'seth_osiro', type: 'parent', secret: false,
    note: 'Dana\'s first son by Adam — inherits her Water element most directly' },
  { id: 'r108', source: 'adam_wov',   target: 'dain_osiro', type: 'parent', secret: false,
    note: 'Adam\'s second son by Dana — crossed to Earth with the Drift Tool; origin of Olympic mythology' },
  { id: 'r109', source: 'dana_osiro', target: 'dain_osiro', type: 'parent', secret: false,
    note: 'Dana\'s second son by Adam — inherits her Air element' },
  { id: 'r110', source: 'adam_wov',   target: 'noa_osiro',  type: 'parent', secret: false,
    note: 'Adam\'s daughter by Dana — crossed to Earth with the Seal Tool; origin of oracle traditions' },
  { id: 'r111', source: 'dana_osiro', target: 'noa_osiro',  type: 'parent', secret: false,
    note: 'Dana\'s daughter by Adam — inherits her Earth element' },
  { id: 'r112', source: 'dana_osiro', target: 'ember_hist', type: 'kin', secret: true,
    note: 'Dana\'s Orius-side bloodline eventually became the Osiro lineage that Ember Vane reclaimed and renamed Clan Osiro' },

  // ── Facility relationships ────────────────────────────────────────────
  { id: 'r66', source: 'minia_consa', target: 'irane',       type: 'enemy', secret: false,
    note: 'Minia ran the facility that held Irane for 15 years; died in the escape explosion' },
  { id: 'r67', source: 'minia_consa', target: 'ember_hist',  type: 'enemy', secret: false,
    note: 'Minia forced Ember to mate with Irane in year 14 of experiments' },
  { id: 'r68', source: 'simon_archiver', target: 'irane',    type: 'friend', secret: false,
    note: 'Simon was Irane\'s closest human friend — knew him as a man before and after the trial. Suu\'s core later entered Simon\'s body; the friendship Irane felt toward Simon was real on both the human and ancient-bond level simultaneously.' },
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
  { id: 'r80', source: 'mira_ardent',    target: 'hope',    type: 'ally', secret: false,
    note: 'Mira is Hope\'s right hand — she leads the five Valariyan Heads under Hope\'s authority as Heart of the Empire' },
  { id: 'r81', source: 'aliya_hallow', target: 'arai',    type: 'ally', secret: false,
    note: 'Aliya is Arai\'s right hand — she serves as Valariya\'s Spiritual Leader under Arai\'s authority over Time' },
  { id: 'r82', source: 'dokia_caedus', target: 'zoe',     type: 'ally', secret: false,
    note: 'Dokia is Zoe\'s right hand — she leads medicine and agriculture under Zoe\'s authority over Life/Death' },
  { id: 'r83', source: 'pandro_lexan', target: 'summari', type: 'ally', secret: false,
    note: 'Pandro is Summari\'s right hand — he leads magic and education under Summari\'s authority over Creation' },
  { id: 'r84', source: 'urial_ferran', target: 'nighla',  type: 'ally', secret: false,
    note: 'Urial is Nighla\'s right hand — he commands the Royal Empiric Guard under Nighla\'s authority over Destruction' },
  { id: 'r85', source: 'mira_ardent',    target: 'irane',   type: 'ally', secret: false,
    note: 'Mira serves as the Emperor\'s emotional conduit — she channels his feelings so he can restrain them, making her existence functionally necessary for his stability' },
  { id: 'r86', source: 'aliya_hallow', target: 'irane',   type: 'ally', secret: false,
    note: 'Aliya wields the Emperor\'s spirits and maintains the mana-memory archive of all Valariyans who have died — she is custodian of his legacy through them' },
  { id: 'r87', source: 'dokia_caedus', target: 'irane',   type: 'ally', secret: false,
    note: 'Dokia was given the Emperor\'s death as an infant — she has carried it her entire life and is the only person capable of wielding it directly' },
  { id: 'r88', source: 'urial_ferran', target: 'irane',   type: 'ally', secret: false,
    note: 'Irane directly activated Urial\'s core and rebuilt his body — Urial is the only person whose physical existence is a direct product of the Emperor\'s own structure' },
  { id: 'r89', source: 'pandro_lexan', target: 'irane',   type: 'ally', secret: false,
    note: 'Pandro accesses the Emperor\'s own spell knowledge through the Hallowed Fifteen — the Elder-Sages hold the Emperor\'s magical catalogue split across their fifteen elements' },
  { id: 'r90', source: 'mira_ardent',    target: 'aliya_hallow', type: 'ally', secret: false,
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

  // ── Abe More — current More clan leader ───────────────────────────────────
  { id: 'r100', source: 'cith_more', target: 'abe_more', type: 'grandparent', secret: false,
    note: 'Abe is Cith\'s granddaughter through Toma More — Cith is the origin of the lineage Abe now leads' },
  { id: 'r101', source: 'abe_more', target: 'irane', type: 'reverence', secret: false,
    note: 'Abe views Irane as philosophical proof-of-concept — the living demonstration that a being can exist outside the Arke twins\' framework entirely' },
  { id: 'r102', source: 'abe_more', target: 'niro', type: 'rival', secret: false,
    note: 'The Vane-More rivalry is generational — Abe carries Cith\'s strategic opposition to Vane forward as the current clan leader' },

  // ── Dulla + Cith — the forbidden love and their secret children ──────────
  { id: 'r103', source: 'dulla_vane', target: 'cith_more', type: 'love', secret: true,
    note: 'Fell in love during the Limbo standoff — neither could kill the other because they chose not to. Faked their deaths together and had two children on Orius.' },
  { id: 'r104', source: 'dulla_vane', target: 'darkki_ardent', type: 'parent', secret: true,
    note: 'Darkki Ardent is Dulla\'s first child with Cith More — born on Orius, founder of the Ardent bloodline' },
  { id: 'r105', source: 'dulla_vane', target: 'noxa_nexal', type: 'parent', secret: true,
    note: 'Noxa Nexal is Dulla\'s second child with Cith More — born on Orius, founder of the Nexal future-sight ability' },
  { id: 'r106', source: 'cith_more', target: 'darkki_ardent', type: 'parent', secret: true,
    note: 'Darkki Ardent is Cith\'s first child with Dulla Vane — born on Orius, founder of the Ardent bloodline' },
  { id: 'r107', source: 'cith_more', target: 'noxa_nexal', type: 'parent', secret: true,
    note: 'Noxa Nexal is Cith\'s second child with Dulla Vane — born on Orius, founder of the Nexal future-sight ability' },
  { id: 'r108', source: 'cith_more', target: 'toma_more', type: 'parent', secret: false,
    note: 'Toma More is Cith\'s publicly known son — separate lineage from her Orius children; through Toma, Cith has granddaughter Abe' },
  { id: 'r108b', source: 'toma_more', target: 'tan_navar', type: 'parent', secret: true,
    label: 'Secret Biological Father' },
  { id: 'r109', source: 'toma_more', target: 'abe_more', type: 'parent', secret: false,
    note: 'Toma More is Abe\'s father — the direct link in the More lineage between Cith and the current clan leader' },
  { id: 'r109b', source: 'toma_more', target: 'evelyn_more', type: 'parent', secret: false,
    note: 'Evelyn ("Eve") is Toma\'s daughter, born on Earth to a human woman decades after Tan Navar. She serves him directly.' },
  { id: 'r109c', source: 'evelyn_more', target: 'tan_navar', type: 'sibling', secret: true,
    note: 'Half-siblings through Toma More — Tan on the Navar side (pre-Earth), Evelyn born after Toma\'s crossing. Neither knows of the other.' },
  { id: 'r109d', source: 'evelyn_more', target: 'zoe', type: 'aunt', secret: true,
    note: 'Evelyn is Zoe\'s aunt through Tan Navar, her half-brother and Zoe\'s father. Tan died before Zoe was born; Evelyn has never learned the connection exists.' },

  // ── Nexal and Ardent founders → descendants ────────────────────────────
  { id: 'r110', source: 'noxa_nexal', target: 'tenza', type: 'ancestor', secret: false,
    note: 'Tenza is a descendant of Noxa Nexal — the future-sight ability is his inheritance through her bloodline' },
  { id: 'r111', source: 'noxa_nexal', target: 'arai', type: 'ancestor', secret: false,
    note: 'Arai is a descendant of Noxa Nexal — she carries the bloodline but did not awaken the future-sight ability in the Orian era' },
  { id: 'r112', source: 'darkki_ardent', target: 'tola_ardent', type: 'ancestor', secret: false,
    note: 'Tola Ardent is Darkki\'s great-great-grandson — he carries the Ardent spatial omniscience ability in full' },

  // ── Tola Ardent — secret father, Tenza\'s friend ──────────────────────────
  { id: 'r113', source: 'tola_ardent', target: 'hope', type: 'parent', secret: true,
    note: 'Tola is Hope\'s biological father — a secret known only to him (and Tenza). Hope does not know. He recognized her at the Fest and got her and Zoe out.' },
  { id: 'r114', source: 'tola_ardent', target: 'dima_apolo', type: 'love', secret: true,
    note: 'Tola and Dima had a private, mutual relationship — producing Hope. Dima died at the Fest before the secret could surface.' },
  { id: 'r115', source: 'tola_ardent', target: 'tenza', type: 'ally', secret: false,
    note: 'Tola Ardent and Tenza are best friends — a relationship of complementary abilities: Tenza sees forward, Tola sees everywhere in the present. Each was the most comprehensively informed person the other had ever met.' },
  { id: 'r116', source: 'tonga', target: 'tenza', type: 'parent', secret: false,
    note: 'Tonga\'s eldest child. Inherited Noxa\'s Game in full and clan leadership after Tonga\'s death. Was in the room when Tonga named Arai to Nuro Vane — said nothing.' },
  { id: 'r117', source: 'tonga', target: 'arai', type: 'parent', secret: false,
    note: 'Named her to Nuro Vane as the clan\'s offered child without hesitation. The conversation Arai overheard at age 10. Whether it was calculation or sacrifice is a question Tonga never answered.' },
  { id: 'r118', source: 'tonga', target: 'nina', type: 'parent', secret: false,
    note: 'Youngest child. A newborn at the time Arai was taken; Tonga died before the facility era.' },
  { id: 'r119', source: 'suu', target: 'irane', type: 'ally', secret: true,
    note: 'Beast Friend — the deepest non-romantic bond Irane carries. Predates the facility by generations. Suu is secretly Aevum Vane; this relationship holds Aevum\'s position in Irane\'s Enari (Beast core) emotional architecture.' },
  { id: 'r120', source: 'suu', target: 'arai', type: 'mentor', secret: true,
    note: 'Grand Master Suu placed Arai on the Absolute Path at the Academy and taught the class personally. He recognized her capability within months of her arrival. As Aevum, he was shaping her for the facility\'s demands before she knew the facility existed.' },
  { id: 'r121', source: 'aevum_vane', target: 'suu', type: 'identity', secret: true,
    note: 'Suu IS Aevum — second body transfer. The original Aevum Vane persona transferred into Suu\'s body after the Sol-Nexus era began.' },
  { id: 'r122', source: 'arai', target: 'nina', type: 'sibling', secret: false,
    note: 'Arai\'s youngest sister. Six years old during the Academy era. Nina\'s unusual Time-water core was visible even as a child. Arai was taken before Nina was old enough to train. The loss of this relationship is one of Arai\'s quietest griefs.' },
  { id: 'r123', source: 'tenza', target: 'nina', type: 'sibling', secret: false,
    note: 'Eldest sibling to youngest. Tenza watched Nina with a different kind of attention than other adults — he recognized what her time-stream ability meant.' },
  { id: 'r124', source: 'arai', target: 'zoe', type: 'mentor', secret: false,
    note: 'Arai taught Zoe directly about Life/Death and Nature magic at the Academy after being astonished by her core alignment and the accuracy of her family\'s stories. Their friendship originated in this class.' },

  // ── Sith Caedus — mentor, adopted mother ─────────────────────────────
  { id: 'r125', source: 'sith_caedus', target: 'zoe', type: 'mentor', secret: false,
    note: 'Sith was Zoe\'s Combat Path instructor at the Grand Mana Academy. She directed Zoe to heal herself after Azzer\'s attack — the act that hardened Zoe\'s resolve. The relationship defined Zoe\'s trajectory at the Academy.' },
  { id: 'r126', source: 'sith_caedus', target: 'dokia_caedus', type: 'parent', secret: false,
    note: 'Sith is Dokia\'s adopted mother — Dokia carries the Caedus name from this bond. The exact circumstances of the adoption are not in public record.' },
  { id: 'r127', source: 'sith_caedus', target: 'azzer', type: 'instructor', secret: false,
    note: 'Sith oversaw the Combat Path incident between Azzer and Zoe — she did not prevent the attack but directed the aftermath and set the conditions for Zoe\'s return.' },

  // ── Azzer ──────────────────────────────────────────────────────────────
  { id: 'r128', source: 'zoe', target: 'azzer', type: 'killed', secret: false,
    note: 'Azzer nearly killed Zoe at age ten — cutting her hand nearly in half. She killed him six years later: her first kill. She blocked his technique with the healed hand, then struck him through the chest.' },

  // ── Dio Ferran, Leo Proude, Valariya ─────────────────────────────────
  { id: 'r129', source: 'dio_ferran', target: 'valariya', type: 'married', secret: false,
    note: 'Dio married Valariya — Aliya\'s older sister, the person the city was named after.' },
  { id: 'r130', source: 'dio_ferran', target: 'urial_ferran', type: 'parent', secret: false,
    note: 'Dio is Urial\'s biological father.' },
  { id: 'r131', source: 'leo_proude', target: 'dio_ferran', type: 'ally', secret: false,
    note: 'Best friends — their bond held even after Valariya married Dio. Leo was in love with her; he chose the friendship over the feeling.' },
  { id: 'r132', source: 'leo_proude', target: 'valariya', type: 'love', secret: true,
    note: 'Leo was in love with Valariya before she married Dio. He never acted on it. The feeling and the friendship coexisted.' },
  { id: 'r133', source: 'valariya', target: 'aliya_hallow', type: 'sibling', secret: false,
    note: 'Valariya is Aliya\'s older sister — now deceased. The city carries her name. Aliya holds her spirit as the permanent sealed spirit.' },

  // ── Namo Consa — patriarch of both ───────────────────────────────────
  { id: 'r134a', source: 'namo_consa', target: 'minia_consa', type: 'parent', secret: false,
    note: 'Namo Consa is Minia\'s father — full blood, Consa heir. She inherited the clan\'s sovereign understanding and carried it into the facility\'s foundation work.' },
  { id: 'r134b', source: 'namo_consa', target: 'pandro_lexan', type: 'parent', secret: true,
    note: 'Namo Consa is Pandro\'s biological father (half-blood — different mother, Lexan line). Pandro took his mother\'s name; Namo\'s clan treated him as lesser. The connection is not public.' },
  // ── Pandro — brother of Minia ─────────────────────────────────────────
  { id: 'r134', source: 'pandro_lexan', target: 'minia_consa', type: 'sibling', secret: true,
    note: 'Paternal half-siblings — father: Namo Consa. Pandro was treated as lesser by the clan and left; Minia inherited the clan\'s full understanding and built the facility. The connection is not publicly known.' },
  // ── Earth Resistance — founding trio ──────────────────────────────────
  { id: 'r138', source: 'crimi_night', target: 'tan_loo', type: 'ally', secret: false,
    note: 'Co-founders of the first Earth resistance. Crimi\'s active push-through and Tan\'s chaotic-dark rejection are the first two documented human survival mechanisms against Primal transference.' },
  { id: 'r139', source: 'crimi_night', target: 'miho_frame', type: 'ally', secret: false,
    note: 'Co-founders of the first Earth resistance. Crimi and Miho represent the widest possible spread of survival types — active will vs. structural incompatibility — which made their combined teaching the basis of the full resistance doctrine.' },
  { id: 'r140', source: 'tan_loo', target: 'miho_frame', type: 'ally', secret: false,
    note: 'Co-founders of the first Earth resistance. Three different survival mechanisms; together they proved that human core diversity was an asset, not an accident.' },

  // ── Mira Ardent — daughter of Tola ───────────────────────────────────
  { id: 'r135', source: 'tola_ardent', target: 'mira_ardent', type: 'parent', secret: false,
    note: 'Tola Ardent is Mira\'s father — relationship defined by Mira\'s pitch-black hatred for him. The Ardent bloodline places Mira adjacent to Hope (also Tola\'s daughter, secret) in a way neither fully knew until Mira told her.' },
  { id: 'r136', source: 'gran_brime', target: 'hope', type: 'mentor', secret: false,
    note: 'Master of the Grand-Mana Course — put Hope through her hardest academic trial; died shielding her during the Academy attack. First person who chose Hope over everything he valued.' },
  { id: 'r137', source: 'gran_brime', target: 'mira_ardent', type: 'mentor', secret: false,
    note: 'Master of the Grand-Mana Course — the course where Mira and Hope first met. Died shielding both of them.' },

  // ── Audis and Cai — Part 2.4 additions ─────────────────────────────────
  { id: 'r141', source: 'sofia_prescian', target: 'audis_prescian', type: 'cousin', secret: false,
    note: 'Cousins — Sofia commands in the field, Audis holds the city\'s defense and communications from inside Heaven.' },
  { id: 'r142', source: 'cai', target: 'mira_ardent', type: 'loyalty', secret: false,
    note: 'Unit medic. Lied to Mira about Lora\'s survival to keep her combat-functional, then told her the truth once the battle ended. Unspoken personal admiration Cai has no plans to voice.' },

  // ── Facility Arc, Part 3 ────────────────────────────────────────────────
  { id: 'r143', source: 'zoe', target: 'cai', type: 'identity', secret: true,
    note: 'Cai\'s body was built by Zoe at 8\'s birth; Zoe piloted it first, as "Cai Mui," before handing it to Arai during the neck-choking incident.' },
  { id: 'r144', source: 'arai', target: 'cai', type: 'identity', secret: true,
    note: 'Arai has piloted the Cai body since the neck-choking incident — "Cai Consa," Minia\'s right hand, is Arai in disguise.' },
  { id: 'r145', source: 'cai', target: 'aliya_hallow', type: 'guardian', secret: false,
    note: 'Given to Cai by 8 without explanation. Cai raised her, trained her past her limits, and loves her past any operational justification — the driving obsession of Cai\'s covert life.' },
  { id: 'r146', source: 'namo_consa', target: 'minia_consa', type: 'parent', secret: false,
    note: '29th of Namo\'s thirty engineered children.' },
  { id: 'r147', source: 'namo_consa', target: 'pandro_lexan', type: 'parent', secret: true,
    note: '30th and last of Namo\'s children — took his mother\'s name instead.' },
  { id: 'r148', source: 'namo_consa', target: 'adorn_more', type: 'parent', secret: true,
    note: 'Hidden 30th-generation child — too dangerous to feed to the trial, kept secret even from most of the clan.' },
  { id: 'r149', source: 'minia_consa', target: 'adorn_more', type: 'sibling', secret: true,
    note: 'Twins. Adorn killed their mother being born; Minia survived only by emerging first. She later forced his preserved core into Valariya Hallow as an experiment.' },
  { id: 'r150', source: 'minia_consa', target: 'valariya_hallow', type: 'harm', secret: false,
    note: 'Took Valariya from Cai\'s care to force Adorn\'s hidden core into her — nearly killed her, then returned her with a shrug: "Well it seems I broke her, sorry."' },
  { id: 'r151', source: 'irane', target: 'valariya_hallow', type: 'rescue', secret: false,
    note: 'Built the Tree of Yggdrasil to stabilize the life-force-burning core forced into her, on Cai\'s direct personal appeal rather than a standing order — the first documented instance of him acting on request rather than command.' },
  { id: 'r152', source: 'irane', target: 'criya_sin', type: 'mentor', secret: false,
    note: 'First person to make a choose-to-serve contract with 8; the origin scene of the entire future Will-bearer system.' },
  { id: 'r153', source: 'ban_sin', target: 'criya_sin', type: 'parent', secret: false,
    note: 'Held Criya to impossible expectations for showing only Water technique, never learning his son\'s true core was Water-Wind-Ice all along. Killed by 8 during the destruction of Miho\'s camp, recognizing him mid-death as "Z."' },
  { id: 'r154', source: 'valariya_hallow', target: 'aliya_hallow', type: 'sibling', secret: false,
    note: 'Ran carrying Aliya rather than looking back as their father died protecting them both. This IS the Valariya the city and Irane\'s own name are named after.' },
  { id: 'r155', source: 'paul_hallow', target: 'aliya_hallow', type: 'parent', secret: false,
    note: 'Killed by 8 protecting both daughters. His unpublished bedtime story about an emperor is the direct origin of the name "Irane."' },
  { id: 'r156', source: 'paul_hallow', target: 'valariya_hallow', type: 'parent', secret: false,
    note: 'Told her the bedtime story she later used to name Irane, decades before he existed as anything but a broken tool.' },
  { id: 'r157', source: 'valariya_hallow', target: 'dio', type: 'spouse', secret: false,
    note: 'Married as adults. Childhood bond formed during the training years alongside Leo Proude and Aliya.' },
  { id: 'r158', source: 'leo_proude', target: 'valariya_hallow', type: 'unrequited', secret: false,
    note: 'Loved her his whole life; she married Dio instead. Never broke his friendship with Dio.' },
  { id: 'r159', source: 'leo_proude', target: 'dio', type: 'best-friend', secret: false,
    note: 'Best friends since the training years, surviving even Leo\'s unrequited feelings for Valariya.' },
  { id: 'r160', source: 'aloi_proude', target: 'leo_proude', type: 'parent', secret: false,
    note: 'Killed by 8 shielding his son during the destruction of Miho\'s camp.' },
  { id: 'r161', source: 'synth_ferran', target: 'dio', type: 'parent', secret: false,
    note: 'Willed her way through a forced core-transfer while already pregnant with Dio, conceived before she carried a core — making him fully human. Killed by 8 shielding him during the massacre.' },
  { id: 'r162', source: 'miho_frame', target: 'elho_frame', type: 'parent', secret: false,
    note: 'Elho attacked 8 immediately after watching him kill Miho — no effect.' },
  { id: 'r163', source: 'minia_consa', target: 'miho_frame', type: 'enemy', secret: false,
    note: 'Ordered him kept alive and tortured for 7 days in front of Ember as a lesson to the surviving children.' },
  { id: 'r164', source: 'toma_more', target: 'alex_more', type: 'parent', secret: false,
    note: 'Sent Alex to lead House More\'s Primal-aligned forces — reinforcements that only arrived after Heaven\'s assault was already won.' },
  { id: 'r165', source: 'alex_more', target: 'evelyn_more', type: 'sibling', secret: false,
    note: 'Evelyn quietly one-upped his political position within the Primal court without his knowledge.' },
  { id: 'r166', source: 'alex_more', target: 'sofia_prescian', type: 'unrequited', secret: false,
    note: 'Arranged marriage by old political debt, genuinely loved on his side. Publicly and violently dissolved when 8 ordered Sofia married to Pandro instead.' },
  { id: 'r167', source: 'pandro_lexan', target: 'sofia_prescian', type: 'spouse', secret: false,
    note: 'Fell in love the night he read her private manuscript in full. Married by 8\'s direct order after Nevir publicly exposed the affair; Pandro took the Prescian name.' },
  { id: 'r168', source: 'evelyn_more', target: 'nevir_revyn', type: 'romance', secret: false,
    note: 'Real on his side; deliberately left unresolved whether it\'s real on hers. Everything he confides in her reaches Toma.' },
  { id: 'r169', source: 'taalor_consa', target: 'cai', type: 'rival', secret: false,
    note: 'Resents her five-year rise to a rank he considers he earned properly over decades.' },
  { id: 'r170', source: 'taalor_consa', target: 'dio', type: 'mentor', secret: false,
    note: 'Trained Dio via direct pure-core implantation, no contract — one of the ~30% who survived that method.' },
  { id: 'r171', source: 'taalor_consa', target: 'leo_proude', type: 'mentor', secret: false,
    note: 'Trained Leo via direct pure-core implantation, no contract — one of the ~30% who survived that method.' },
]
