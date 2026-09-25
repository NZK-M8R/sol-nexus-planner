// ── The Grand Table (Rebuilt) · Kazemi Political Hierarchy · Active Ruler Command Structure ──
//
// This file replaces the old 18-seat/50-house Grand Table ring with the locked 20-node
// compass-layout table, and adds the data backing two new tabs:
//   1. GRAND_TABLE_NODES / RIGHT_LEFT_HAND_SEATS — the 20-node compass table (Part 1)
//   2. KAZEMI_HIERARCHY / KAZEMI_ELEMENTAL_SEATS  — the Kazemi/Valariya political ladder (Part 2)
//   3. ACTIVE_RULER_SQUADS / HAND_PAIRINGS        — the 13-squad military command structure (Part 3)
//
// The old 50-house registry (defaultClans in clans.js) is NOT deleted — it remains the
// data source for the "Roster" sub-view and for the Right/Left Hand clan pickers below.

// ── PART 1 — Grand Table compass geometry ──────────────────────────────────
//
//        N  — King's Throne (Spear of Unix) — assignable seat
//   NW ─┼─ NE
//        |         NW: Vraka (sealed/bound to Azen Lucerne)  · NE: Father Time / Cronus
//   W  ──┼── E      W: Arai — Goddess of Kazemi (fixed)      · E: Irane — The Emperor (fixed)
//        |         SW: Mother Nature / Gaia                  · SE: Selis (sealed/bound to Elorah Seraph)
//   SW ─┼─ SE
//        S  — Blade Terminus holder — assignable seat
//
// 12 outer-ring sub-nodes (3 each, arced around the 4 corner entities):
//   NE (Father Time / Cronus)  → drift-tool, echo-tool, seal-tool           (Cronus's 3 Hidden Tools)
//   NW (Vraka)                 → ruin-beast, eclipse-beast, erasure-beast  (Vraka's 3 Noble Beasts)
//   SW (Mother Nature / Gaia)  → stellar-beast, wane-beast, root-beast     (Gaia's 3 Hidden Beasts)
//   SE (Selis)                 → sovas-chain, keths-brand, tevans-edict    (Selis's 3 Noble Tools)
//
// Groupings verified directly against src/data/weapons.js header comment + each entry's
// description text — Vrak/Selis/Gaia/Cronus attribution confirmed, no corrections needed.

export const HOUSE_KAZEMI_GOLD  = '#D4AF37' // matches HOUSE_COLORS.kazemi in characters.js exactly
export const HOUSE_VANE_WINE    = '#7B2D3A' // deliberately distinct from HOUSE_COLORS.vane ('#e84855') — deep wine/burgundy
export const HOUSE_MORE_SILVER  = '#8FA5BD' // deliberately distinct from HOUSE_COLORS.more ('#4A6E8A') — cool silver-blue

// The 4 bound/sealed entities — colors chosen deliberately per established lore precedent:
export const ENTITY_COLORS = {
  // Father Time / Cronus — Osiro's Grand weapon lineage uses sea-green/gold in this app
  // (ember_osiro is '#2E7A3E' Sea Green in CHAR_COLORS); paired with the Book of Time's
  // "record/history" association, a muted antique gold-green reads as archival/temporal.
  fatherTime: '#C9A227',
  // Mother Nature / Gaia — Wov's inquisition purple is already taken; Gaia is Life/Death +
  // nature-beast coded throughout weapons.js (Bloom/growth imagery). Deep verdant green,
  // matching gaia_primordial's own CHAR_COLORS entry ('#2D8F4E') for direct continuity.
  motherNature: '#2D8F4E',
  // Vraka — Ferali/Duraki faction color in this app's existing GrandTable.jsx legend is
  // '#9B30FF' (Duraki purple). Vraka is the architect of that entire system — using the
  // faction's own signature purple, darkened, keeps him legible as "Duraki incarnate."
  vraka: '#6B1FB8',
  // Selis — Celestial faction color in the existing legend is '#D4AF37' (Celestial gold).
  // Selis is Kazemi-gold-adjacent already via WEAPON_FACTION_COLORS.celestial; using
  // elorah_seraph's own established silver-violet ('#C8C0FF') keeps Selis visually paired
  // with the Seraph clan that now binds him, while staying distinct from Kazemi gold.
  selis: '#C8C0FF',
}

// ── The 8 inner-ring (compass) seats ───────────────────────────────────────
// kind: 'assignable' (clan/house picker) | 'fixed-character' (permanent, non-editable)
// | 'sealed-entity' (a bound Primordial/Arke twin, weapon-linked, non-editable)
export const GRAND_TABLE_NODES = [
  {
    nodeId: 'compass-n',
    compass: 'N',
    label: "The King's Throne",
    kind: 'assignable',
    weaponId: 'spear-of-unix',
    color: HOUSE_KAZEMI_GOLD,
    hasHands: true, // Right Hand / Left Hand clan pickers shown in detail panel
  },
  {
    nodeId: 'compass-ne',
    compass: 'NE',
    label: 'Father Time',
    subtitle: 'Cronus',
    kind: 'sealed-entity',
    weaponId: 'father-time-reborn',
    color: ENTITY_COLORS.fatherTime,
  },
  {
    nodeId: 'compass-e',
    compass: 'E',
    label: 'Kazemi Irane',
    subtitle: 'The Emperor',
    kind: 'fixed-character',
    characterId: 'irane',
    color: HOUSE_KAZEMI_GOLD,
    hasHands: true,
  },
  {
    nodeId: 'compass-se',
    compass: 'SE',
    label: 'Selis',
    subtitle: 'Celestial Arke Twin — bound to Elorah Seraph',
    kind: 'sealed-entity',
    // Selis is sealed within Covenant Seraph and expressed through the 3 Noble Tools
    // orbiting this node; no standalone weapon id represents "Selis himself" outside
    // of covenant-seraph (a Grand Table weapon, not part of this 20-node ring).
    weaponId: 'covenant-seraph',
    color: ENTITY_COLORS.selis,
    boundNote: "Sealed as Punishment within the Covenant Seraph, presently bound in service to House Seraph under Elorah Seraph. His mind is active; his will and power remain sealed.",
  },
  {
    nodeId: 'compass-s',
    compass: 'S',
    label: 'Blade Terminus Holder',
    kind: 'assignable',
    weaponId: 'blade-terminus',
    color: HOUSE_MORE_SILVER,
    hasHands: true,
  },
  {
    nodeId: 'compass-sw',
    compass: 'SW',
    label: 'Mother Nature',
    subtitle: 'Gaia — borne by Taliya Wov, House Wov',
    kind: 'sealed-entity',
    weaponId: 'mother-nature-reborn',
    color: ENTITY_COLORS.motherNature,
    boundNote: "Reawakened and returned to Taliya Wov, head of Clan Wov, as the Tree of Eden reborn — see id: taliya_wov, id: mother-nature-reborn.",
  },
  {
    nodeId: 'compass-w',
    compass: 'W',
    label: 'Arai Kazemi',
    subtitle: 'The Goddess of Kazemi',
    kind: 'fixed-character',
    characterId: 'arai',
    color: HOUSE_KAZEMI_GOLD,
    hasHands: true,
  },
  {
    nodeId: 'compass-nw',
    compass: 'NW',
    label: 'Vraka',
    subtitle: 'Ferali Arke Twin — bound to Azen Lucerne',
    kind: 'sealed-entity',
    weaponId: 'morningfall',
    color: ENTITY_COLORS.vraka,
    boundNote: "Sealed as Punishment within Morningfall, presently bound in service to Clan Lucerne under Azen Lucerne. His mind is active; his will and power remain sealed.",
  },
]

// ── The 12 outer-ring sub-item nodes — 3 arced around each of the 4 corner entities ──
export const GRAND_TABLE_SUB_NODES = [
  // Around Father Time (NE) — Cronus's 3 Hidden Tools
  { subNodeId: 'sub-drift',  parent: 'compass-ne', weaponId: 'drift-tool', color: ENTITY_COLORS.fatherTime },
  { subNodeId: 'sub-echo',   parent: 'compass-ne', weaponId: 'echo-tool',  color: ENTITY_COLORS.fatherTime },
  { subNodeId: 'sub-seal',   parent: 'compass-ne', weaponId: 'seal-tool',  color: ENTITY_COLORS.fatherTime },

  // Around Vraka (NW) — his 3 Noble Beasts
  { subNodeId: 'sub-ruin',    parent: 'compass-nw', weaponId: 'ruin-beast',    color: ENTITY_COLORS.vraka },
  { subNodeId: 'sub-eclipse', parent: 'compass-nw', weaponId: 'eclipse-beast', color: ENTITY_COLORS.vraka },
  { subNodeId: 'sub-erasure', parent: 'compass-nw', weaponId: 'erasure-beast', color: ENTITY_COLORS.vraka },

  // Around Mother Nature (SW) — Gaia's 3 Hidden Beasts
  { subNodeId: 'sub-stellar', parent: 'compass-sw', weaponId: 'stellar-beast', color: ENTITY_COLORS.motherNature },
  { subNodeId: 'sub-wane',    parent: 'compass-sw', weaponId: 'wane-beast',    color: ENTITY_COLORS.motherNature },
  { subNodeId: 'sub-root',    parent: 'compass-sw', weaponId: 'root-beast',    color: ENTITY_COLORS.motherNature },

  // Around Selis (SE) — her 3 Noble Tools
  { subNodeId: 'sub-sovas', parent: 'compass-se', weaponId: 'sovas-chain',  color: ENTITY_COLORS.selis },
  { subNodeId: 'sub-keths', parent: 'compass-se', weaponId: 'keths-brand',  color: ENTITY_COLORS.selis },
  { subNodeId: 'sub-tevans',parent: 'compass-se', weaponId: 'tevans-edict', color: ENTITY_COLORS.selis },
]

// The 4 seats that get Right Hand / Left Hand clan-assignment fields in their detail panel.
// Stored as { seatNodeId: { rightHandClanId, leftHandClanId } } — persisted alongside the
// table's own seat assignments via the same save pattern as clans.js seatId assignment.
export const RIGHT_LEFT_HAND_SEAT_IDS = ['compass-n', 'compass-e', 'compass-s', 'compass-w']

export const defaultGrandTableAssignments = {
  // seatNodeId -> { clanId | characterId (fixed nodes don't use this), rightHandClanId, leftHandClanId }
  'compass-n': { clanId: null, rightHandClanId: null, leftHandClanId: null },
  'compass-e': { rightHandClanId: null, leftHandClanId: null }, // fixed to 'irane', no clanId
  'compass-s': { clanId: 'more', rightHandClanId: null, leftHandClanId: null }, // Clan More historically holds Blade Terminus
  'compass-w': { rightHandClanId: null, leftHandClanId: null }, // fixed to 'arai', no clanId
}

// ── PART 2 — Kazemi Family & Valariya Power: ranked political hierarchy ───────
// tier: shared rank-tier number; tiedWith: array of other rank ids at the same tier (display only)
export const KAZEMI_HIERARCHY = [
  {
    rank: 1, tier: 1,
    characterId: 'irane',
    title: 'Kazemi Irane — The Emperor',
    note: 'Highest authority in Valariya and the Sol-Nexus Empire. Absolute.',
  },
  {
    rank: 2, tier: 2,
    characterId: 'arai',
    title: 'Arai — The Goddess of Kazemi',
    note: 'Second in standing, ranked only below Irane.',
  },
  {
    rank: 3, tier: 3, tiedWith: [4],
    characterId: 'hope',
    title: 'Hope — The Empress of Kazemi',
    note: 'Equal in standing with Zoe (rank 4).',
  },
  {
    rank: 4, tier: 3, tiedWith: [3],
    characterId: 'zoe',
    title: 'Zoe — The Queen of Kazemi',
    note: 'Equal in standing with Hope (rank 3).',
  },
  {
    rank: 5, tier: 4,
    characterId: 'irane',
    title: 'Irane Kazemi — The Human King of Apexia, the Empiric Champion',
    note: "Deliberately the same character as rank 1 (id: irane). Represents Irane's human-facing / lower-power-state persona — distinct from the Emperor's full conceptual authority at rank 1. Cross-references the same character entry rather than a separate person.",
    crossReference: true,
  },
  {
    rank: 6, tier: 5,
    characterId: 'mira_ardent',
    title: "Mira Ardent — Kazemi's General",
  },
  {
    rank: 7, tier: 6,
    characterId: 'pandro_lexan',
    title: "Pandro — Kazemi's Mage/Sage",
  },
  {
    rank: 8, tier: 7,
    characterId: 'aliya_hallow',
    title: "Aliya — Kazemi's Soul",
  },
  {
    rank: 9, tier: 8, tiedWith: [10],
    characterId: 'summari',
    title: 'Summari — Right Hand of the Emperor',
    note: 'Equal in standing with Nighla (rank 10).',
  },
  {
    rank: 10, tier: 8, tiedWith: [9],
    characterId: 'nighla',
    title: 'Nighla — Left Hand of the Emperor',
    note: 'Equal in standing with Summari (rank 9).',
  },
  {
    rank: 11, tier: 9,
    characterId: 'dokia_caedus',
    title: "Dokia — Kazemi's Reaper/Medic",
    note: 'Death.',
  },
  {
    rank: 12, tier: 10,
    characterId: 'urial_ferran',
    title: "Urial — Kazemi's Armoury",
  },
]

// ── The 10 blank elemental seats below the ranked 12 ──────────────────────
// Canonical 10-element base list per characters.js's own Concept breakdown:
// Primordial 5 (Fire/Water/Air/Earth/Ice) + Ascended 3 (Lightning/Nature/Energy) + Light/Darkness.
// Start empty — assigned via a character picker (Apexian/Valariyan-affiliated characters).
export const KAZEMI_ELEMENTAL_SEAT_ELEMENTS = [
  'Fire', 'Water', 'Air', 'Earth', 'Ice', 'Lightning', 'Nature', 'Energy', 'Light', 'Darkness',
]

export const defaultKazemiElementalSeats = KAZEMI_ELEMENTAL_SEAT_ELEMENTS.map((element, i) => ({
  seatId: `kaz-elem-${i + 1}`,
  element,
  characterId: null, // assigned via picker; persisted in App state
}))

// ── PART 3 — Active Ruler: 13-squad command structure ─────────────────────

// Squad 0 — Irane's own Supreme Command position (distinct from Squad 8, the all-captains
// muster squad described below). The user's initial framing called this "Squad 8" loosely;
// the numbered list resolves it as Squad 0 for Irane's personal command seat.
export const SQUAD_ZERO = {
  squadId: 'squad-0',
  label: 'Squad 0 — Supreme Command',
  leaderCharacterId: 'irane',
  description: 'Irane Kazemi holds absolute authority over all Imperial resources. This is his own supreme-command position — distinct from Squad 8 ("Destroyer Squad"), the special all-captains muster squad described below. Squad 0 is a command seat, not a troop formation.',
}

export const ACTIVE_RULER_SQUADS = [
  {
    squadId: 'squad-1',
    number: 1,
    label: 'Main Military & Special Security',
    leaderCharacterId: 'summari',
    description: "Summari Kazemi's squad. Main military and special security operations.",
  },
  {
    squadId: 'squad-2',
    number: 2,
    label: 'Special Threats & Special Targets',
    leaderCharacterId: 'nighla',
    description: "Nighla Kazemi's squad. Shadow and covert work against special threats and special targets.",
  },
  {
    squadId: 'squad-3',
    number: 3,
    label: 'Destroyer Squad (Last Resort)',
    leaderCharacterId: 'dokia_caedus',
    description: "Dokia Caedus's squad. Deployed only as a last resort — dangerous.",
  },
  {
    squadId: 'squad-4',
    number: 4,
    label: 'Main Armoury Squad',
    leaderCharacterId: 'urial_ferran',
    leaderDisplayName: 'Urial Ferran',
    description: "Urial Ferran's squad — main Armoury squad. NOTE: source material names this leader \"Urial Hallow,\" but the established character id/surname used elsewhere in this app is urial_ferran (\"Urial Ferran\"). Represented here under the established id; the naming inconsistency is flagged rather than inventing a second Urial.",
  },
  {
    squadId: 'squad-5',
    number: 5,
    label: "Zoe's Main Squad",
    leaderCharacterId: 'zoe',
    secondCharacterId: 'assa_flora',
    secondLabel: 'Second / Right-Hand (this squad)',
    description: "Zoe Kazemi's main squad, with Assa Flora as her named second within this squad specifically.",
  },
  {
    squadId: 'squad-6',
    number: 6,
    label: "Hope's Main Squad",
    leaderCharacterId: 'hope',
    secondCharacterId: 'milla_ores',
    secondLabel: 'Second (this squad)',
    description: "Hope Kazemi's main squad, with Milla Ores as her named second within this squad specifically.",
  },
  {
    squadId: 'squad-7',
    number: 7,
    label: "Arai's Squad",
    leaderCharacterId: 'arai',
    secondCharacterId: 'nina',
    secondLabel: 'Second (this squad)',
    description: "Arai Kazemi's squad, with Nina Nexal as her named second within this squad specifically.",
  },
  {
    squadId: 'squad-8',
    number: 8,
    label: 'Destroyer Squad — All-Captains Muster',
    leaderCharacterId: 'irane',
    isCompositeSquad: true,
    // Its "members" are the other 12 squad captains, not independent troops.
    memberSquadIds: ['squad-1', 'squad-2', 'squad-3', 'squad-4', 'squad-5', 'squad-6', 'squad-7', 'squad-9', 'squad-10', 'squad-11', 'squad-12'],
    description: "Irane Kazemi's special squad. Its membership is all 12 other squad captains combined — not independent troops. Deployed only in wartime as a full muster of the Empire's forces. Sits within the empire's special reserve structure. Compositionally distinct from every other squad on this list.",
  },
  {
    squadId: 'squad-9',
    number: 9,
    label: 'The Unknown Squad',
    leaderCharacterId: 'aliya_hallow',
    description: "Aliya Hallow's squad. Known for silent missions, information gathering, and infiltration. Works closely with Squad 2 (Nighla's).",
  },
  {
    squadId: 'squad-10',
    number: 10,
    label: 'Special Reincarnate Division',
    leaderCharacterId: 'apolo',
    leaderNote: "Dio Ferran's reincarnated form (id: apolo, cross-references id: dio_ferran).",
    memberCharacterIds: ['niro_vane_current', 'tunde_ardent', 'forge_neel'],
    memberNote: "Converted/bound members per the locked brief: Niro Vane (id: niro_vane_current — captured and bound as a golden-armored guard by Summari), Tunde Ardent (id: tunde_ardent), and the captured Neel brother (id: forge_neel — the converted brother; Konnar Neel, id: konnar_neel, remains under Hope's command and is NOT part of this division). DATA DISCREPANCY FLAGGED: characters.js relationship r253 explicitly binds Tunde Ardent to Nighla as her own personal guard ('captured and bound to Nighla... during the coronation crisis'), not to this division. Represented here per the explicit locked instruction; the underlying character data disagrees and may need reconciliation in a future pass.",
    description: "Currently led by Dio in his reincarnated form, Apolo. Composed of converted/bound former enemies.",
  },
  {
    squadId: 'squad-11',
    number: 11,
    label: "Pandro Prescian's Squad",
    leaderCharacterId: 'pandro_lexan',
    description: 'Main special magic/caster-class unit. Highly specialist — deploys only specific members for specific tasks.',
  },
  {
    squadId: 'squad-12',
    number: 12,
    label: "Mira Ardent's Squad — Grand Commander",
    leaderCharacterId: 'mira_ardent',
    secondInCommandOverall: true, // second only to Squad 0 / Irane in the whole architecture
    description: "Handles all major military and state movement; internal security and homeland-security-equivalent duties (police, internal assistance); executes tasks set by Irane directly. Explicitly second in the whole architecture only to Squad 0 (Irane himself) — not a peer to the other 11 squads.",
  },
]

// ── Left Hand / Right Hand pairing system — a general connective pattern ──
// Applies beyond just Squads 5-7; shown as annotations on relevant squad-cards and on the
// Kazemi hierarchy tier for Arai/Zoe/Hope.
export const HAND_PAIRINGS = [
  { characterId: 'arai', rightHandCharacterId: 'aliya_hallow', leftHandCharacterId: 'nina' },
  { characterId: 'zoe',  rightHandCharacterId: 'dokia_caedus', leftHandCharacterId: 'assa_flora' },
  { characterId: 'hope', rightHandCharacterId: 'mira_ardent',  leftHandCharacterId: 'dio_ferran' },
]

// Brief cross-reference note: Summari and Nighla connect similarly to the children of
// Nina and Pandro, described as "their right hands" — a smaller, summary-level note only.
export const SUMMARI_NIGHLA_HAND_NOTE =
  "Summari and Nighla connect similarly to the children of Nina and Pandro, described as their right hands — Nara Nexal and/or Sethma/Julia Prescian in this capacity. Brief cross-reference only; not a fully fleshed subsystem."
