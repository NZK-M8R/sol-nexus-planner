// Clans of the Sol-Nexus world
//
// ── What is a Great House ──────────────────────────────────────────────────
//   Any clan, dynasty, or governing body commanding 10 million or more souls.
//   All 50 registered Great Houses are listed here. This is the BASE class —
//   Kazemi, Vane, Osiro, Vestarin are all Great Houses by population.
//
// ── Rank designations ─────────────────────────────────────────────────────
//   Grand Title        — Earned, never inherited. Only two paths:
//                        1. Win the King's Throne (15-yr mandate, from Noble pool only,
//                           excluding permanent-role houses)
//                        2. Irane Kazemi — permanent Enforcer, cursed to serve.
//   Noble Great House  — One of the 50 Great Houses who earned a weapon seat and
//                        holds one of the 16 Noble Treasures.
//   Great House        — Any of the 50 governing 10M+ souls without a weapon seat.
//
// ── Permanent roles (cannot claim throne) ─────────────────────────────────
//   Kazemi — Enforcer. Emperor's Seat. Grand Title is permanent (not a throne win).
//   Osiro  — Treasurer. Seat I. Relinquished throne candidacy in perpetuity.
//   Wov    — Inquisitor. Seat XVI. Relinquished throne candidacy in perpetuity.
//
// ── Throne succession mechanic ────────────────────────────────────────────
//   The King is selected from the 14 eligible Noble Great Houses.
//   The victor MUST vacate their weapon seat upon claiming the throne.
//   They may gift that vacated seat to any Great House of their choosing.
//   The receiving house becomes Noble and enters direct vassalage to the Crown.

export const CLAN_RANKS = {
  grand:  'Grand Title',
  noble:  'Noble Great House',
  great:  'Great House',
}

export const CLAN_RANK_COLORS = {
  grand:  '#D4AF37',
  noble:  '#4AAFE0',
  great:  '#7AABCC',
}

// The Grand Table Covenants — shown when the table surface is clicked
export const TABLE_LAW = `THE COVENANTS OF THE GRAND TABLE

Inscribed by the Spear of Unix in the First Year.
Enforced by House Wov through the Oracle's Eye.
All 50 Great Houses are bound by the following laws without exception.

─────────────────────────────────────────────

ARTICLE I — THE PEACE OF THE TABLE
No Great House seated at this Table may declare armed conflict against another within Imperial borders without a formal Challenge recognized by two-thirds of Noble seats. Violation is grounds for immediate seat removal and dissolution of weapon bond.

ARTICLE II — THE CYCLE OF KINGS
The King's Throne is a 15-year mandate, not a birthright. At cycle's end, any eligible Noble Great House may present a champion before the full Table. Houses Osiro, Wov, and Kazemi are permanently excluded from candidacy. The victor must immediately vacate their weapon seat. That seat passes to any Great House of the new King's choosing — binding the recipient in direct vassalage to the Crown. The Grand Title passes by trial and by witness. It does not pass by blood.

ARTICLE III — THE AUTHORITY OF THE ENFORCER
House Kazemi holds the Seat of Absolute Enforcement under the permanent Grand Title of Enforcer. The Enforcer's word supersedes any vote at this Table. House Kazemi may remove a sitting King without consultation and without vote. This authority was not given — it was cursed into being. It has been exercised once in the Table's history.

ARTICLE IV — THE TREASURY LAW
House Osiro manages all Imperial financial flow and the mana economy of the Sol-Nexus. No seated house may demand an audit of Treasury records without first presenting documented evidence of fraud before House Vestarin's Inquisition. Unsubstantiated audits are treated as declarations of hostility. House Osiro has permanently relinquished any claim to the King's Throne in exchange for this permanent seat.

ARTICLE V — THE INQUISITION COVENANT
All oaths, treaties, and accusations sworn or presented before the full Table pass through House Wov's Oracle's Eye. No lie may be told at this Table without being known and recorded. Deliberate deception before the full Table is grounds for permanent removal from the 50 Great Houses registry and confiscation of all Imperial titles. House Wov has permanently relinquished any claim to the King's Throne in exchange for this permanent seat.

ARTICLE VI — WEAPON SOVEREIGNTY
Noble Treasure weapons are bound to their seats, not to the houses who hold them. When a house vacates its seat — whether by loss, forfeit, or ascension to the throne — the weapon remains at the seat. The incoming house wields the weapon but may never claim personal ownership. No weapon may be removed from the Imperial registry without unanimous Grand-Title holder approval.

ARTICLE VII — THE VASSAL COVENANT
When a new King gifts their vacated weapon seat to a Great House, that house enters binding vassalage to the Crown for the duration of the mandate. The vassal house must vote in alignment with the Crown on all matters before the Table. Upon the next succession cycle, the vassal bond dissolves and the seat returns to open competition.

ARTICLE VIII — AETHER BALANCE CLAUSE
No holder of a Noble Treasure may use their weapon to alter the floating continent migration patterns, destabilize the Great Mana Reservoirs, or trigger localized dimensional collapse without unanimous Grand-Title holder approval. The stability of the planet is not a political instrument.`

// The 18 Grand Table seats
export const TABLE_SEATS = [
  { seatId: 'seat-emperor', label: "Emperor's Seat",  weaponId: null,                special: true,  specialRole: 'emperor' },
  { seatId: 'seat-d1',      label: 'Seat I',           weaponId: 'spear-of-sin',     special: false, faction: 'duraki'    },
  { seatId: 'seat-d2',      label: 'Seat II',          weaponId: 'rift-cleaver',     special: false, faction: 'duraki'    },
  { seatId: 'seat-d3',      label: 'Seat III',         weaponId: 'severance-blade',  special: false, faction: 'duraki'    },
  { seatId: 'seat-d4',      label: 'Seat IV',          weaponId: 'chimera-core',     special: false, faction: 'duraki'    },
  { seatId: 'seat-d5',      label: 'Seat V',           weaponId: 'calamity-engine',  special: false, faction: 'duraki'    },
  { seatId: 'seat-d6',      label: 'Seat VI',          weaponId: 'rune-of-ragnarok', special: false, faction: 'duraki'    },
  { seatId: 'seat-d7',      label: 'Seat VII',         weaponId: 'plague-censer',    special: false, faction: 'duraki'    },
  { seatId: 'seat-d8',      label: 'Seat VIII',        weaponId: 'abyssal-maul',     special: false, faction: 'duraki'    },
  { seatId: 'seat-c1',      label: 'Seat IX',          weaponId: 'blade-of-virtue',  special: false, faction: 'celestial' },
  { seatId: 'seat-c2',      label: 'Seat X',           weaponId: 'chronos-bow',      special: false, faction: 'celestial' },
  { seatId: 'seat-c3',      label: 'Seat XI',          weaponId: 'absolute-aegis',   special: false, faction: 'celestial' },
  { seatId: 'seat-c4',      label: 'Seat XII',         weaponId: 'omnis-codex',      special: false, faction: 'celestial' },
  { seatId: 'seat-c5',      label: 'Seat XIII',        weaponId: 'pantheon-crown',   special: false, faction: 'celestial' },
  { seatId: 'seat-c6',      label: 'Seat XIV',         weaponId: 'netjeru-scepter',  special: false, faction: 'celestial' },
  { seatId: 'seat-c7',      label: 'Seat XV',          weaponId: 'halo-of-genesis',  special: false, faction: 'celestial' },
  { seatId: 'seat-c8',      label: 'Seat XVI',         weaponId: 'oracles-eye',      special: false, faction: 'celestial' },
  { seatId: 'seat-king',    label: "King's Throne",    weaponId: 'spear-of-unix',    special: true,  specialRole: 'king'  },
]

export const defaultClans = [

  // ── Grand Title holders ──────────────────────────────────────────────────
  {
    id: 'kazemi',
    name: 'House Kazemi',
    rank: 'grand',
    canClaimThrone: false,
    permanentRole: 'enforcer',
    color: '#D4AF37',
    role: 'The Enforcer — Permanent Grand Title',
    description: "The only house whose Grand Title was not won — it was cursed into being. Irane Kazemi stands as the Enforcer of the Grand Table: the single authority capable of removing a sitting King without vote or consultation. Does not hold a Noble weapon seat. Commands more souls than any other house. Cannot run for the throne by design.",
    seatId: 'seat-emperor',
    champion: 'irane',
    vassalOf: null,
    notes: "Irane's Grand Title is permanent and non-transferable. Their authority sits above the weapon system entirely.",
  },
  {
    id: 'vane',
    name: 'House Vane',
    rank: 'noble',
    canClaimThrone: true,
    permanentRole: null,
    color: '#A8A8B0',
    role: 'Acting King (illegitimate claim)',
    description: "Holds the King's Throne under Niro Vane following the coup at Year 500. Vacated their former Noble weapon seat upon seizing the throne and gifted it to a Great House of their choosing. The Grand Title they claim is disputed — the permanent houses do not formally recognize the legitimacy of the Year 500 succession.",
    seatId: 'seat-king',
    champion: null,
    vassalOf: null,
    notes: "Rank is Noble. The Grand Title is claimed but contested. Niro Vane is the primary antagonist.",
  },

  // ── Noble Great Houses — permanent roles ────────────────────────────────
  {
    id: 'osiro',
    name: 'House Osiro',
    rank: 'noble',
    canClaimThrone: false,
    permanentRole: 'treasurer',
    color: '#2E7A3E',
    role: 'The Treasurer — Permanent Noble seat',
    description: 'Governs all Imperial financial flow and the mana economy of the Sol-Nexus. Led by Ember A. Osiro. Co-architect of the Genetic Insurance Pact. Holds Seat I (The Spear of Sin). The Shadow of the Emperor is embedded within this house. Permanently relinquished any claim to the King\'s Throne in exchange for the perpetual Treasurer seat.',
    seatId: 'seat-d1',
    champion: null,
    vassalOf: null,
    notes: "Cannot claim the throne. Permanent Noble seat holder. The Spear of Sin is theirs as long as they serve.",
  },
  {
    id: 'wov',
    name: 'House Wov',
    rank: 'noble',
    canClaimThrone: false,
    permanentRole: 'inquisitor',
    color: '#8B6532',
    role: 'The Inquisitor — Permanent Noble seat',
    description: "The judicial arm of the Grand Table. Led by Lady Vesper Wov. All oaths sworn at the Table pass through their Oracle's Eye. Co-architect of the Genetic Insurance Pact alongside Irane Kazemi and Ember Osiro. Holds Seat XVI (The Oracle's Eye) through their champion Vesper. Permanently relinquished any claim to the King's Throne in exchange for the perpetual Inquisitor seat. Long-standing rivalry with House Vane stretching back to the original Terra era.",
    seatId: 'seat-c8',
    champion: 'vesper',
    vassalOf: null,
    notes: "Cannot claim the throne. Their weapon seat makes them the only Noble house with a judicial function. The Wov/Vane rivalry predates the Unix world.",
  },

  // ── Noble Great Houses — Ferali Seats II–VIII (7 seats) ─────────────────
  {
    id: 'noble-d2', name: 'Noble House (Seat II)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#6A4A9A',
    seatId: 'seat-d2', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d3', name: 'Noble House (Seat III)',  rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#7A3A8A',
    seatId: 'seat-d3', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d4', name: 'Noble House (Seat IV)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#6A3A7A',
    seatId: 'seat-d4', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d5', name: 'Noble House (Seat V)',    rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#7A4A6A',
    seatId: 'seat-d5', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d6', name: 'Noble House (Seat VI)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#8A5A5A',
    seatId: 'seat-d6', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d7', name: 'Noble House (Seat VII)',  rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#9A6A4A',
    seatId: 'seat-d7', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-d8', name: 'Noble House (Seat VIII)', rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#8A7A3A',
    seatId: 'seat-d8', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },

  // ── Noble Great Houses — Celestial Seats IX–XV (7 seats) ────────────────
  {
    id: 'noble-c1', name: 'Noble House (Seat IX)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#3A6A8A',
    seatId: 'seat-c1', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c2', name: 'Noble House (Seat X)',    rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#3A7A7A',
    seatId: 'seat-c2', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c3', name: 'Noble House (Seat XI)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#4A8A6A',
    seatId: 'seat-c3', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c4', name: 'Noble House (Seat XII)',  rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#5A8A5A',
    seatId: 'seat-c4', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c5', name: 'Noble House (Seat XIII)', rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#6A8A4A',
    seatId: 'seat-c5', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c6', name: 'Noble House (Seat XIV)',  rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#7A7A3A',
    seatId: 'seat-c6', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },
  {
    id: 'noble-c7', name: 'Noble House (Seat XV)',   rank: 'noble', canClaimThrone: true, permanentRole: null, color: '#6A7A4A',
    seatId: 'seat-c7', champion: null, description: '', vassalOf: null, notes: 'Placeholder — assign a house name.',
  },

  // ── Great Houses (no weapon seat) ───────────────────────────────────────
  {
    id: 'wolva',
    name: 'House Wolva',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#6B8E6B',
    role: 'Wov Sphere',
    description: 'Aligned with House Wov. Vaal V. Wolva married Law I. Kazemi, creating a political bridge between the Wov inquisition sphere and the Kazemi imperial line. Governs over 10 million souls across the northern territories.',
    seatId: null, champion: null, vassalOf: 'wov', notes: '',
  },

  // ── Great House placeholders (31 remaining to fill the 50) ───────────────
  ...Array.from({ length: 31 }, (_, i) => ({
    id: `great-house-${i + 1}`,
    name: `Great House ${i + 1}`,
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#3A4A5A',
    description: '',
    role: '',
    seatId: null,
    champion: null,
    vassalOf: null,
    notes: 'Placeholder — assign a house name and description.',
  })),
]
