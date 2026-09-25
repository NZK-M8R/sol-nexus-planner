// Clans of the Sol-Nexus world
//
// ── What is a Great House ──────────────────────────────────────────────────
//   Any clan, dynasty, or governing body commanding 10 million or more souls.
//   All 50 registered Great Houses are listed here. This is the BASE class —
//   Kazemi, Vane, Osiro are all Great Houses by population.
//
// ── Rank designations ─────────────────────────────────────────────────────
//   Empiric Seat       — Irane Kazemi only. Permanent. Above King, above Grand.
//                        Not won — cursed into being. Terminus is their Grand weapon.
//   Royal Throne       — Earned by combat trial every 15 years. From Noble pool only.
//                        The King holds the Spear of Unix. On ascension they vacate their Noble seat.
//   Grand Family       — 4 continent-ruling bloodlines. Each holds a pre-Unix Grand weapon
//                        bound to their bloodline, not to the seat system.
//                        Wov (Tree of Eden) · Osiro (Book of Time) · Lucerne (Morningfall) · Seraph (Covenant Seraph)
//                        Cannot claim the King's Throne. Grand weapons predate the Noble seat system.
//   Noble Great House  — One of the 50 Great Houses who holds a weapon seat at the
//                        Grand Table (16 weapon seats total). Eligible for King candidacy.
//   Great House        — Any of the 50 governing 10M+ souls without a weapon seat.
//
// ── Permanent roles (cannot claim throne) ─────────────────────────────────
//   Kazemi  — Enforcer. Emperor's Seat (Empiric). Grand Title permanent (cursed).
//   Wov     — Grand Family. Eura Continent. Tree of Eden (Mother Nature's weapon).
//   Osiro   — Grand Family. Terra Continent. Book of Time (Father Time's weapon).
//   Lucerne — Grand Family. Lucerne Continent (Ashgard). Morningfall (Alma Grand weapon).
//   Seraph  — Grand Family. Seraph Continent (Seraphel). Covenant Seraph (Spirit Grand weapon).
//
// ── Throne succession mechanic ────────────────────────────────────────────
//   The King is selected from the eligible weapon-seat holders (Grand Houses excluded).
//   The victor MUST vacate their weapon seat upon claiming the throne.
//   They may gift that vacated seat to any Great House of their choosing.
//   The receiving house becomes Noble and enters direct vassalage to the Crown.
//   NOTE: Hidden Treasure holders (Earth families, Seats II–IV and VI–VIII) are not
//   yet integrated into the Sol-Nexus system — their eligibility is a future plot point.

export const CLAN_RANKS = {
  empiric: 'Empiric Seat',
  royal:   'Royal Throne',
  grand:   'Grand Family',
  noble:   'Noble Great House',
  great:   'Great House',
}

export const CLAN_RANK_COLORS = {
  empiric: '#F5C542', // Kazemi gold — above all
  royal:   '#C84B4B', // King crimson
  grand:   '#D4AF37', // Grand family gold
  noble:   '#4AAFE0', // Noble blue
  great:   '#7AABCC', // Great house slate
}

// The Grand Table Covenants — shown when the table surface is clicked
export const TABLE_LAW = `THE COVENANTS OF THE GRAND TABLE

Inscribed by the Spear of Unix in the First Year.
Enforced by House Wov through the Tree of Eden.
All 50 Great Houses are bound by the following laws without exception.

─────────────────────────────────────────────

ARTICLE I — THE PEACE OF THE TABLE
No Great House seated at this Table may declare armed conflict against another within Imperial borders without a formal Challenge recognized by two-thirds of Noble seats. Violation is grounds for immediate seat removal and dissolution of weapon bond.

ARTICLE II — THE CYCLE OF KINGS
The King's Throne is a 15-year mandate, not a birthright. At cycle's end, any eligible Noble Great House may present a champion before the full Table. Houses Osiro, Wov, Kazemi, Lucerne, and Seraph are permanently excluded from candidacy. The victor must immediately vacate their weapon seat. That seat passes to any Great House of the new King's choosing — binding the recipient in direct vassalage to the Crown. The Grand Title passes by trial and by witness. It does not pass by blood.

ARTICLE III — THE AUTHORITY OF THE ENFORCER
House Kazemi holds the Seat of Absolute Enforcement under the permanent Grand Title of Enforcer. The Enforcer's word supersedes any vote at this Table. House Kazemi may remove a sitting King without consultation and without vote. This authority was not given — it was cursed into being. It has been exercised once in the Table's history.

ARTICLE IV — THE TREASURY LAW
House Osiro manages all Imperial financial flow and the mana economy of the Sol-Nexus. No seated house may demand an audit of Treasury records without first presenting documented evidence of fraud before House Wov's Inquisition. Unsubstantiated audits are treated as declarations of hostility. House Osiro has permanently relinquished any claim to the King's Throne in exchange for this permanent seat.

ARTICLE V — THE INQUISITION COVENANT
All oaths, treaties, and accusations sworn or presented before the full Table pass through House Wov's Tree of Eden — the Living Record of natural truth. No lie may be told at this Table without being known and recorded. Deliberate deception before the full Table is grounds for permanent removal from the 50 Great Houses registry and confiscation of all Imperial titles. House Wov has permanently relinquished any claim to the King's Throne in exchange for this permanent seat.

ARTICLE VI — WEAPON SOVEREIGNTY
Noble Treasure weapons are bound to their seats, not to the houses who hold them. When a house vacates its seat — whether by loss, forfeit, or ascension to the throne — the weapon remains at the seat. The incoming house wields the weapon but may never claim personal ownership. No weapon may be removed from the Imperial registry without unanimous Grand-Title holder approval.

ARTICLE VII — THE VASSAL COVENANT
When a new King gifts their vacated weapon seat to a Great House, that house enters binding vassalage to the Crown for the duration of the mandate. The vassal house must vote in alignment with the Crown on all matters before the Table. Upon the next succession cycle, the vassal bond dissolves and the seat returns to open competition.

ARTICLE VIII — AETHER BALANCE CLAUSE
No holder of a Noble Treasure may use their weapon to alter the floating continent migration patterns, destabilize the Great Mana Reservoirs, or trigger localized dimensional collapse without unanimous Grand-Title holder approval. The stability of the planet is not a political instrument.

─────────────────────────────────────────────

ARTICLE IX — THE FOUR PILLARS
The Grand Table operates through four permanent structural authorities, each held by one of the four Grand Families. These Pillars are not subject to the 15-year mandate cycle. They survive changes in King and the death of individual champions. No Grand Family may hold more than one Pillar simultaneously.

PILLAR I — NATURAL TRUTH (House Wov): All oaths, accusations, and law-drafts presented to this Table pass through Wov's truth-verification. No legislation may be enacted if deliberate deception is detected in its drafting. Wov holds a standing truth-veto over all Grand Table legislation. Wov's Inquisition requires Lucerne's travel warrant to conduct investigations outside Eura.

PILLAR II — HISTORICAL VALUE (Clan Osiro): All mana currency, financial instruments, and beast-contract valuations are set and administered by Clan Osiro. No military campaign or continental project may be funded without Osiro's authorization. All financial covenants require Seraph's counterseal to hold binding cross-continental force.

PILLAR III — TERRITORIAL AUTHORITY (Clan Lucerne): No declaration of continental war or formal border enforcement action holds Grand Table recognition without Lucerne's War Sanction. Lucerne may designate any region outside Grand Table jurisdiction, suspending other Pillars' authority there. All War Sanctions are subject to Wov truth-review within 30 days of execution.

PILLAR IV — COVENANT RATIFICATION (Clan Seraph): No treaty, compact, prosecution framework, or cross-continental agreement holds binding force without Seraph's countersignature. Seraph may not refuse ratification indefinitely without presenting cause before the full Table. Seraph covenants hold force only within territory Lucerne recognizes as under Grand Table jurisdiction.

─────────────────────────────────────────────

ARTICLE X — MUTUAL LIMITATION
The four Pillars are designed to require each other. No single Grand Family may act with full unilateral authority:
— Wov may not conduct cross-continental investigations without Lucerne's travel warrant.
— Osiro may not issue binding cross-continental financial law without Seraph's counterseal.
— Lucerne may not sustain a military campaign without Osiro's funding authorization.
— Seraph may not legislate Inquisition authority without Wov's confirmation that the law was drafted without deception.

This mutual limitation is not a flaw in the system. It is the system.`

// The 15 Grand Table seats — 4 grand families (3 weapons each) + Emperor + Primal + King
//
// Origin-grouped design: each Grand House leads a group of 3 weapons (1 Grand + 2 sub).
//
//   GAIA GROUP (Seats I–III)    — Beast weapons · Gaia origin · House Wov leads
//     I:  Wov          / Tree of Eden   (Gaia sealed — Grand Beast — DUTY)
//    II:  (Earth · Gaia) / Stellar Beast (Lyra Wov sub-beast)
//   III:  (Earth · Gaia) / Wane Beast   (Mara Wov sub-beast)
//
//   CRONUS GROUP (Seats V–VII)  — Tool weapons · Cronus origin · Clan Osiro leads
//     V:  Osiro        / Book of Time   (Cronus sealed — Grand Tool — DUTY)
//    VI:  (Earth · Cronus) / Echo Tool  (Seth Osiro sub-tool)
//   VII:  (Earth · Cronus) / Drift Tool (Dain Osiro sub-tool)
//
//   VRAK GROUP (Seats IX–XI)    — Beast weapons · Vrak Arke origin · Clan Lucerne leads
//    IX:  Lucerne      / Morningfall    (Vrak sealed — Grand Beast — PUNISH)
//     X:  (Arke-loyal) / Ruin Beast
//    XI:  (Arke-loyal) / Eclipse Beast
//
//   SELIS GROUP (Seats XIII–XV) — Tool weapons · Selis Arke origin · Clan Seraph leads
//  XIII:  Seraph       / Covenant Seraph (Selis sealed — Grand Tool — PUNISH)
//   XIV:  (Arke-loyal) / Sova's Chain
//    XV:  (Arke-loyal) / Keth's Brand
//
//   PRIMAL SEAT                 — Clan More / Blade Terminus (outside all contract systems)
//
export const TABLE_SEATS = [
  // ── Sovereign ──────────────────────────────────────────────────────────
  { seatId: 'seat-emperor', label: "Emperor's Seat",          weaponId: null,              special: true,  specialRole: 'emperor' },

  // ── Gaia Group — Nature Beasts (Wov leads) ────────────────────────────
  { seatId: 'seat-wov',     label: 'Seat I — Gaia Grand',     weaponId: 'tree-of-eden',    special: false, faction: 'grand_house', group: 'gaia' },
  { seatId: 'seat-g2',      label: 'Seat II — Gaia',          weaponId: 'stellar-beast',   special: false, faction: 'none',        group: 'gaia' },
  { seatId: 'seat-g3',      label: 'Seat III — Gaia',         weaponId: 'wane-beast',      special: false, faction: 'none',        group: 'gaia' },

  // ── Cronus Group — Time Tools (Osiro leads) ───────────────────────────
  { seatId: 'seat-osiro',   label: 'Seat V — Cronus Grand',   weaponId: 'book-of-time',    special: false, faction: 'grand_house', group: 'cronus' },
  { seatId: 'seat-c6t',     label: 'Seat VI — Cronus',        weaponId: 'echo-tool',       special: false, faction: 'none',        group: 'cronus' },
  { seatId: 'seat-c7t',     label: 'Seat VII — Cronus',       weaponId: 'drift-tool',      special: false, faction: 'none',        group: 'cronus' },

  // ── Vrak Group — Chaos Beasts (Lucerne leads) ─────────────────────────
  { seatId: 'seat-lucerne', label: 'Seat IX — Vrak Grand',    weaponId: 'morningfall',     special: false, faction: 'grand_house', group: 'vrak' },
  { seatId: 'seat-v2',      label: 'Seat X — Vrak',           weaponId: 'ruin-beast',      special: false, faction: 'duraki',      group: 'vrak' },
  { seatId: 'seat-v3',      label: 'Seat XI — Vrak',          weaponId: 'eclipse-beast',   special: false, faction: 'duraki',      group: 'vrak' },

  // ── Selis Group — Covenant Tools (Seraph leads) ───────────────────────
  { seatId: 'seat-seraph',  label: 'Seat XIII — Selis Grand', weaponId: 'covenant-seraph', special: false, faction: 'grand_house', group: 'selis' },
  { seatId: 'seat-s2',      label: 'Seat XIV — Selis',        weaponId: 'sovas-chain',     special: false, faction: 'celestial',   group: 'selis' },
  { seatId: 'seat-s3',      label: 'Seat XV — Selis',         weaponId: 'keths-brand',     special: false, faction: 'celestial',   group: 'selis' },

  // ── Primal Seat — outside the contract systems ─────────────────────────
  { seatId: 'seat-more',    label: 'Primal Seat — More',      weaponId: 'blade-terminus',  special: true,  specialRole: 'primal' },

  // ── Sovereign ──────────────────────────────────────────────────────────
  { seatId: 'seat-king',    label: "King's Throne",           weaponId: 'spear-of-unix',   special: true,  specialRole: 'king' },
]

export const defaultClans = [

  // ── Grand Title holders ──────────────────────────────────────────────────
  {
    id: 'kazemi',
    name: 'House Kazemi',
    rank: 'empiric',
    canClaimThrone: false,
    permanentRole: 'enforcer',
    color: '#D4AF37',
    role: 'The Enforcer — Permanent Grand Title',
    description: "The only house whose Grand Title was not won — it was cursed into being. Irane Kazemi stands as the Enforcer of the Grand Table: the single authority capable of removing a sitting King without vote or consultation. Does not hold a Noble weapon seat. Commands more souls than any other house. Cannot run for the throne by design.\n\n**Clan Motto — \"The Ultimate Tool\"** (founding definition written by Irane): \"To be Kazemi is to be an addition to the whole. It is to accept a role — to become, in all essence, a living tool. The tool does not diminish by being used. It fulfills itself.\" The twelve Kazemi children are trained from childhood around this principle: purpose is not a cage, it is the architecture of belonging. A Kazemi does not ask what they are for — they already know.",
    seatId: 'seat-emperor',
    champion: 'irane',
    vassalOf: null,
    notes: "Irane's Grand Title is permanent and non-transferable. Their authority sits above the weapon system entirely. Clan motto: 'The Ultimate Tool.' Kazemi instincts — those who follow Irane's will without fail, absolute tools — are the living expression of this motto.",
  },
  {
    id: 'vane',
    name: 'House Vane',
    rank: 'royal',
    canClaimThrone: true,
    permanentRole: null,
    color: '#e84855',
    role: 'Acting King (illegitimate claim) · Keeper of the Arke Twins\' Full Truth',
    description: "Holds the King's Throne under Niro Vane following the coup at Year 500. Vacated their former Noble weapon seat upon seizing the throne and gifted it to a Great House of their choosing. The Grand Title they claim is disputed — the permanent houses do not formally recognize the legitimacy of the Year 500 succession.\n\n**The Full Truth House Vane Carries:** The Vane dynasty traces back to Aevum Vane — the immortal Ascen who made the original deal with the Arke twins. This means the Vane bloodline has known, from its founding, what the Ferali and Celestial systems were actually designed to do, why the Arke twins built them, and what the \"immortality\" deal really cost. The history the Grand Table presents is Vane's curated version: accurate in facts, selective in causes. No other house in the Sol-Nexus has the institutional depth of knowledge House Vane carries.\n\n**The Bitter Rival — Clan More:** Clan More holds the other half of the world's complete truth: what Limbo was before the Arke twins reshaped it, what the Primordials (Gaia, Cronus, Kazemi) actually were before they became sealed weapons. Together, Vane and More possess the full picture — but neither can expose the other without condemning themselves. The rivalry is total: political, genealogical, and generational.\n\n**The Arms Race:** Following the world-merger and the formation of the Sol-Nexus, both House Vane and Clan More entered an undeclared genetic competition — strategic breeding to produce the strongest possible descendants before the other clan could. Vane uses its control of the Ferali/Celestial institutional framework: cross-contract marriages, Ascen bloodline cultivation, and political positioning to produce children who can operate within and above the Grand Table system. More uses ancient Primal knowledge: elemental purity, dual-pillar affinity cultivation, and deep mana architecture to produce descendants who operate outside the contract system entirely. The goal of both houses is the same: to win a war neither side can yet openly fight.",
    seatId: 'seat-king',
    champion: 'niro',
    vassalOf: null,
    notes: "Rank is Royal. The Grand Title is claimed but contested. Lord Niro Vane is the primary antagonist. Bitter arms-race rival: Clan More. Both houses know the full truth of the world's origin from opposite sides.",
  },

  // ── Noble Great Houses — permanent roles ────────────────────────────────
  {
    id: 'osiro',
    name: 'Clan Osiro',
    rank: 'grand',
    canClaimThrone: false,
    permanentRole: 'treasurer',
    color: '#00b4d8',
    role: 'Grand Pillar II — The Treasury · Historical Value · Continent: Terra (Capital: Osirion)',
    description: "One of the four Grand Families and keeper of the Second Pillar: Historical Value. Governs the Terra continent from Osirion, where the Grand Table itself sits. Led by Ember A. Osiro.\n\n**The Treasury's Power:** Osiro controls all mana currency, financial flow, and the official valuation of every beast-contract and tool-bond in the Sol-Nexus. Nothing costs what Osiro hasn't priced — they set the exchange rate between Ferali beast-value and Celestial tool-value. No military campaign can be sustained without Osiro-issued funds. Their Grand weapon, the Book of Time (16th Realm), houses Father Time (Cronus) — whose absolute record of history makes forgery of financial records structurally impossible.\n\n**What Osiro checks:** Lucerne's War Council. Military campaigns cannot be funded without Osiro authorization. Osiro can enact economic embargoes that cut Lucerne's supply lines without a single soldier moving. They hold the purse of every army in the Sol-Nexus.\n\n**What checks Osiro:** Seraph's Covenant Authority. Osiro's financial covenants — trade agreements, debt instruments, cross-continental currency treaties — are only legally binding if Seraph has ratified them. Osiro prints the money. Seraph makes it valid. An Osiro-issued bond without Seraph's counterseal is just paper.\n\nCo-architect of the Genetic Insurance Pact. Permanently relinquished any claim to the King's Throne. The Shadow of the Emperor (Irane E. Osiro) is embedded within this house.",
    seatId: 'seat-osiro',
    champion: 'ember_osiro',
    vassalOf: null,
    group: 'cronus',
    notes: "Grand weapon: Book of Time (16th Realm) — Cronus (Father Time) sealed within as Duty. Leads the Cronus Group (Seats V–VIII): Book of Time + Echo/Drift/Seal Tools (held by Earth families who serve Osiro). Continental capital: Osirion.",
  },
  {
    id: 'wov',
    name: 'House Wov',
    rank: 'grand',
    canClaimThrone: false,
    permanentRole: 'inquisitor',
    color: '#9b5de5',
    role: 'Grand Pillar I — The Inquisition · Natural Truth · Continent: Eura (Capital: Eura)',
    description: "One of the four Grand Families and keeper of the First Pillar: Natural Truth. Governs the Eura continent from its namesake capital.\n\n**The Inquisition's Power:** All oaths, accusations, and law-drafts presented to the Grand Table pass through Wov's Oracle's Eye (Noble Seat XVI). No law can be enacted if the Oracle's Eye detects deception in its drafting — Wov holds a truth-veto over all legislation. Their Grand weapon, the Tree of Eden (15th Realm), houses Mother Nature (Gaia) — whose living knowledge of people supersedes any written record.\n\n**What Wov checks:** Seraph's Covenant Authority. The Oracle's Eye (connected to Gaia) can expose covenants ratified in bad faith. Natural truth supersedes written divine law — what Gaia knows about a person cannot be contractually silenced.\n\n**What checks Wov:** Lucerne's War Council. The Inquisition cannot operate militarily in Ferali territory without Lucerne's travel warrant. An investigation conducted outside Eura without Lucerne's endorsement is legally inadmissible at the Grand Table. Lucerne can shelter a suspect Wov is investigating by granting them territorial safe harbor.\n\nCo-architect of the Genetic Insurance Pact. Long-standing rivalry with House Vane. (Legacy continuity note: this entry's earlier draft named a champion, \"Lady Vesper Wov,\" as a distinct legacy-era figure from the current-arc Vesper Wov, son of Nex Wov and Kia Osiro — the legacy figure has been removed as no longer relevant; this seat's champion is currently unassigned.)",
    seatId: 'seat-wov',
    champion: null,
    vassalOf: null,
    group: 'gaia',
    notes: "Grand weapon: Tree of Eden (15th Realm) — Gaia (Mother Nature) sealed within as Duty. Leads the Gaia Group (Seats I–IV): Tree of Eden + Stellar/Wane/Root Beasts (held by Earth families who serve Wov). Continental capital: Eura.",
  },

  // ── Grand Families — Lucerne and Seraph ─────────────────────────────────
  {
    id: 'lucerne',
    name: 'Clan Lucerne',
    rank: 'grand',
    canClaimThrone: false,
    permanentRole: 'morning-star',
    color: '#D4460A',
    role: 'Grand Pillar III — The War Council · Territorial Authority · Continent: Lucerne (Capital: Ashgard)',
    description: "One of the four Grand Families and keeper of the Third Pillar: Territorial Authority. The oldest Demon bloodline — Terrans who entered Devils (Ferali) beast-contracts at the deepest level, letting the beasts reshape their very blood over generations. Grand Family of the Aura Camp. Governs the Lucerne continent from Ashgard. Led by Azen Lucerne.\n\n**The War Council's Power:** No continental war, territorial expansion, or border enforcement action is legally recognized without Lucerne's formal War Sanction. They arbitrate all Devils-contract disputes between Demon clans across the Sol-Nexus. They hold the power to designate any region 'outside Grand Table jurisdiction' — a declaration that simultaneously removes Seraph covenants, Wov investigations, and Osiro financial law from that territory. Their Grand weapon, Morningfall (13th Realm), houses Vrak Arke — creator of the Devils/Ferali system, sealed within as punishment, his knowledge of beast-contracts now serving the very bloodline he created.\n\n**What Lucerne checks:** Osiro's Treasury. Lucerne can mobilize military blockades that prevent Osiro's trade routes from functioning — strangling economic flow without touching the currency itself. They can also grant Devils-contract exemptions that make Osiro's official valuations irrelevant in specific territories.\n\n**What checks Lucerne:** Wov's Inquisition. Lucerne's War Sanctions are subject to Oracle's Eye review. If Wov determines a military action was built on false intelligence or violated Table law, the Sanction is retroactively voided — and the commanders who acted on it become criminally liable at the Grand Table.",
    seatId: 'seat-lucerne',
    champion: 'azen_lucerne',
    vassalOf: null,
    group: 'vrak',
    notes: "Grand weapon: Morningfall (13th Realm) — Vrak Arke sealed within as Punishment. Leads the Vrak Group (Seats IX–XII): Morningfall + Ruin/Eclipse/Erasure Beasts (held by Arke-loyal clans who serve Lucerne). Continental capital: Ashgard. Historically first recognized Grand Family.",
  },
  {
    id: 'seraph',
    name: 'Clan Seraph',
    rank: 'grand',
    canClaimThrone: false,
    permanentRole: 'spirit-bearer',
    color: '#C8C0FF',
    role: 'Grand Pillar IV — Covenant Authority · Divine Ratification · Continent: Seraph (Capital: Seraphel)',
    description: "One of the four Grand Families and keeper of the Fourth Pillar: Divine Ratification. The oldest Seraphim bloodline — Terrans who entered Hallowed (Celestial) tool-contracts at the deepest level, becoming living conduits for divine instruments. Grand Family of the Force Camp. Governs the Seraph continent from Seraphel. Led by Elorah Seraph.\n\n**The Covenant Authority's Power:** No inter-house treaty, Grand Table law, or territorial compact is legally binding without Seraph's countersignature. Osiro's financial instruments, Lucerne's War Sanctions, Wov's Inquisition prosecution frameworks — all require Seraph ratification to hold force across the Sol-Nexus. They also arbitrate all Hallowed tool-contract disputes between Seraphim clans. Their Grand weapon, Covenant Seraph (14th Realm), houses Selis Arke — creator of the Hallowed/Celestial system, sealed within as punishment, his legal knowledge of divine contracts now serving the bloodline he created.\n\n**What Seraph checks:** Wov's Inquisition. Seraph can delay or refuse to ratify Inquisition-drafted prosecution laws, creating a legislative veto over how the Inquisition is empowered to act. The Inquisition's authority derives from Table law — and Table law needs Seraph's seal. An Inquisition that loses Seraph's cooperation loses its legal teeth.\n\n**What checks Seraph:** Lucerne's War Council. Seraph's covenants apply only within territory Lucerne has recognized as under Grand Table jurisdiction. If Lucerne removes a region from that jurisdiction, Seraph covenants lose force there entirely. Seraph cannot write universal covenants without Lucerne's implicit territorial endorsement — which means the Seraph clan needs Lucerne's goodwill to make their divine law mean anything outside their own continent.",
    seatId: 'seat-seraph',
    champion: 'elorah_seraph',
    vassalOf: null,
    group: 'selis',
    notes: "Grand weapon: Covenant Seraph (14th Realm) — Selis Arke sealed within as Punishment. Leads the Selis Group (Seats XIII–XVI): Covenant Seraph + Sova's Chain/Keth's Brand/Tevan's Edict (held by Arke-loyal clans who serve Seraph). Continental capital: Seraphel. Second oldest recognized Grand Family.",
  },

  // ── Non-Table Houses / Primal Seat ────────────────────────────────────
  {
    id: 'more',
    name: 'Clan More',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#4A6E8A',
    role: 'Last Great Primal House · Keeper of Pre-Arke Memory · Arms Race Rival to House Vane',
    description: "The last great Primal house in the Sol-Nexus — descended from the people who existed in Limbo before the Arke twins were born. They were not created by the Ferali system or the Celestial system. They predate both. They do not hold a Noble weapon seat and do not participate in the Grand Table's mandate cycles. They exist outside the contract framework entirely, by choice and by design.\n\n**What Clan More Knows:** The Primordials — Gaia, Cronus, Kazemi — were not abstractions or forces. They were beings. Clan More's elders knew them as neighbors in Limbo, understood their natures before they became sealed weapons in Grand Family weapons. The More Clan carries living memory of what was lost in the Arke Wars: not just the Primals who died, but the world as it functioned before the contract systems were imposed. This knowledge is irreplaceable and irreproducible. No contract-based bloodline can access it because it was never written down — it is transmitted through lineage, through practice, through the deep elemental techniques Cycla More preserved until his death.\n\n**The Bitter Rival — House Vane:** Clan More and House Vane are the two houses in the Sol-Nexus that hold the complete origin truth of the world — just from opposite sides. Vane knows why the Arke twins built the systems. More knows what those systems destroyed to exist. Neither can expose the other without condemning themselves. This mutual destruction pact has kept an open war from starting for centuries — but it has not stopped either side from fighting.\n\n**The Arms Race:** Both houses are engaged in an undeclared genetic competition that predates the Grand Table. More's approach: preserve and cultivate ancient Primal elemental knowledge through careful bloodline selection. Their goal is to produce descendants capable of dual-sovereign elemental affinities (the kind Cycla More carried) — beings who operate at a level the contract system was never designed to address. Vane's approach is institutional: cross-contract bloodline breeding, Ascen cultivation, political marriages. The goal of both is to produce children who can win a war neither side can yet openly fight.",
    seatId: 'seat-more',
    champion: 'cith_more',
    vassalOf: null,
    notes: "Holds the Primal Seat at the Grand Table — outside the contract systems, outside the mandate cycle. Bitter rival: House Vane. Both houses hold the world's full origin truth from opposite angles. The arms race between them is the silent war beneath the Sol-Nexus's surface. Grand Table weapon: Blade Terminus. Also holds the Blade of Virtue (Mana-Born combat weapon) — one of two Pure Mana weapons in the setting.",
  },

  // ── Primal Sovereign Clans — outside all contract systems ────────────────
  {
    id: 'prescian',
    name: 'Clan Prescian',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#9B9BAF',
    role: 'Primal Time Sovereign Clan · Living Archive of the Pre-Arke Age · Keepers of Ancestral Memory',
    description: "A major surviving Primal sovereign clan — the bearers of the Time sovereign element in its true, unreduced form. Clan Prescian predates the Arke twins' binary system entirely. They do not participate in the Grand Table's contract framework, hold no Noble weapon seat, and operate outside both the Ferali and Celestial structures. They exist because they remembered how not to be absorbed.\n\n**The Time Sovereign — True Expression:** Clan Prescian's sovereign ability is not the internal time-perception the Nexal bloodline carries (which is a diluted descendant expression). The Prescian ability is structural: they experience time as a different substance from other beings. To a Prescian elder, the past is not memory — it is present. Every ancestor who carried the ability left a complete record within the bloodline. A current Prescian can access the direct, unfiltered experience of any ancestor as vividly as their own present moment. They do not simply know what happened before them. They remember being there.\n\n**What This Produces:** The accumulated experience of a Prescian elder is staggering. They have lived, through their lineage, longer than any individual in the Sol-Nexus. Every combat technique, every negotiation, every death their ancestors experienced is available to them. They don't predict the future — they have already seen so many versions of the past that pattern recognition approaches it. The difference between Prescian 'foresight' and actual prophecy is irrelevant in practical terms: they have usually already seen a close approximation of what is about to happen, because it has already happened to someone in their line.\n\n**Active Ability — Temporal Compression:** For brief durations, a Prescian can compress their personal experience of time — slowing their perception of the present while their body continues at normal speed. Not freezing time. Accelerating the mind through it. The cost scales with duration; extended use causes neurological degradation. The clan does not overuse this. They don't have to.\n\n**Cultural Identity:** The Prescians are the living archive of the Primal era. They remember things that no other race can access — what Limbo felt like before the Arke twins reshaped it, what the Primordials spoke about when they spoke to each other, what the 7 original Primal leaders were like as individuals. This knowledge is not shared openly. The Prescians have watched too many things get weaponized to give it away.",
    seatId: null,
    champion: 'sofia_prescian',
    vassalOf: null,
    notes: 'Primal sovereign clan — Time element in its full unreduced form. Sovereign ability: perfect ancestral memory (every ancestor\'s experience accessible as present) + local temporal compression. No Grand Table seat. Outside Ferali/Celestial framework. Living archive of the pre-Arke age. Characters to be added later.',
  },
  {
    id: 'revyn',
    name: 'Clan Revyn',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#6B5472',
    role: 'Primal Life/Death Sovereign Clan · Wardens of the Threshold · Masters of Unfinished Death',
    description: "A major surviving Primal sovereign clan — the bearers of the Life/Death sovereign element in its full, undivided form. Where the Navar bloodline carries a Death-tilted descendant expression, Clan Revyn holds both sides of the boundary simultaneously, as a single thing. To them, Life and Death are not opposites. They are the same threshold approached from different directions.\n\n**The Life/Death Sovereign — True Expression:** Clan Revyn's ability is sovereignty over the boundary itself — the crossing between states. They cannot reverse a completed death. They cannot grant immortality. What they can do is command **unfinished death**: those who died before their time — killed in violence, taken by illness, cut short by accident — did not cross completely. Their presence persists for a period in the space between states. Revyn can reach into that space and pull a body back into function, animating it with the remaining presence of what was there.\n\n**The Raised:** What returns is not the person. It is a construct built from the remnant — capable of following instructions, capable of instinctive combat responses, carrying fragmented personality in a way that is deeply unsettling to those who knew them. The fresher the death, the more complete the construct. Hours-dead: near-full capability, minimal decay, the fragmented personality is most pronounced. Years-dead: significant degradation, reduced capacity, mostly instinct. Decades-dead: barely functional, nearly just animating force. The boundary has a window. Past a certain point — and when someone died of old age or by willing sacrifice — there is nothing to reach.\n\n**The Cost:** Every raising costs the practitioner biological aging — not metaphorical, not symbolic. Actual years leave the raiser's body. Minor raisings (short duration, recently dead) cost weeks. Significant raisings cost years. The most powerful Revyn elders look three centuries older than they are. They do not resent this. They consider it appropriate: life extracted from one vessel to animate another.\n\n**Cultural Identity:** The Revyn are the wardens of every death in their community and adjacent communities that know to call them. When someone significant dies near a Revyn settlement, the clan is contacted. Not to raise the dead indefinitely — that is not what they offer — but to ensure the crossing was complete, to speak briefly with what remains in the threshold if there is unfinished business, and to release it properly. They treat this as the most sacred work they do. They are not feared by the communities who know them, though they are deeply unsettling to those who don't.",
    seatId: null,
    champion: 'nevir_revyn',
    vassalOf: null,
    notes: 'Primal sovereign clan — Life/Death element in full undivided form. Sovereign ability: command over unfinished death (raise those killed before their time as constructs), construct fidelity scales with time since death, cost = biological aging for the practitioner. No Grand Table seat. Outside Ferali/Celestial framework. Sacred threshold-wardens in Primal communities. Characters to be added later.',
  },
  {
    id: 'consa',
    name: 'Clan Consa',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#5F9EA0',
    role: 'Primal Dual-Sovereign Clan (Space · Life/Death) · Masters of the Crossing Between Vessels · Guides of the Threshold Transit',
    description: "A major Primal sovereign clan carrying the rarest documented Core configuration in the pre-Arke era: a **dual Sovereign alignment** of **Space and Life/Death** held simultaneously. Neither element alone produces what Clan Consa does. It is the intersection of the two — what happens when the Sovereign of spatial movement and the Sovereign of the threshold between states act together — that gives the clan its unique capability. The world calls it Transference. That is a description, not a new element.\n\n**The Dual Sovereign — What the Intersection Produces:** Space governs movement: positioning, transit, the relationship between one location and another. Life/Death governs the threshold: the boundary between what something is and what it ceases to be. When both Sovereigns operate together, the practitioner gains command over the space BETWEEN states — not the origin, not the destination, but the crossing itself. What moves when a consciousness leaves one vessel and enters another. The liminal moment. Clan Consa does not move matter. They govern the transit of what inhabits matter, across the boundary that separates one form of existence from another.\n\n**Core State — Harmonic Dark:** The clan's characteristic mana state is Harmonic Dark — ordered and inward, precise and accumulative, building quietly before resolving with force. Abilities manifest with control rather than spectacle. A Consa practitioner working at full capacity looks like nothing is happening until the crossing is already complete.\n\n**What Practitioners Perceive:** Clan Consa members experience the relationship between a core and its vessel as sensory information — legible texture rather than invisible metaphysics. A settled core feels like a resolved chord. A core that arrived recently and hasn't fully integrated carries dissonance. A transfer in progress is a moving pressure with direction. A transfer failing is a specific kind of collapse — distinguishable from natural death, from forced ejection, from incomplete crossing. They know the difference the way a musician knows the difference between notes.\n\n**Active Ability — Vessel Bridge:** A Consa practitioner opens a temporary Space/Life-Death channel between two compatible vessels — a guided pathway through which consciousness can move without the violent collapse that unmediated transfer causes. The pathway has a window. Within it, the moving consciousness crosses under supervision rather than by force. At high mastery: a practitioner can hold consciousness stable in the liminal state between departure and arrival — suspended mid-crossing — allowing precise preparation of the receiving vessel before the crossing completes. This is what the six Earth families' six-stage pipeline approximates with multiple weapons and generations of doctrine. A Consa elder achieves it alone, in the space between two heartbeats.\n\n**What Minia Is:** Minia Consa is not a human researcher who studied transference academically. She is a Primal core inhabiting a human body — a crossing she performed herself, before the facility existed. She chose this deliberately. She is the most personal proof of her clan's ability: a successful Vessel Bridge that she both opened and walked through. She knows what a completed crossing feels like from the inside, which means she also knows — immediately, on contact — when a crossing is failing and exactly which part of the crossing is the failure.\n\n**Why the Facility Was Possible:** The forge mechanism Toma More dismissed as uncontrolled and unrepeatable was, to Minia, a legible process. Every subject who entered the Kazemi trial passed through a transference event — each cell replaced by Kazemi's essence in a sequence of micro-crossings, each one a death and re-entry. She could feel each crossing in every subject: which were stabilising, which were rejecting, where Conceptual fusion was taking root and where the human self was re-asserting. What Toma theorised, Minia read as direct sensory data through her dual Space/Life-Death awareness. The facility was the most detailed empirical study of consciousness transit ever conducted.\n\n**Summari and Nighla — The Transit Poles:** Minia's daughters with Irane Kazemi — Summari (Beginning) and Nighla (End) — embody the two reference points that define every crossing: what a consciousness is before it moves, and what it becomes after. The Space/Life-Death dual Sovereign maps directly onto those poles. Transference is the space between Beginning and End. Their mother is the force that defines what that crossing is.",
    seatId: null,
    champion: 'minia_consa',
    vassalOf: null,
    notes: "Primal dual-Sovereign clan — Space + Life/Death held simultaneously (same rare dual-sovereign architecture as Zoe Navar's Life/Death-Nature, but Consa pairs Space with Life/Death). Core state: Harmonic Dark — precise, inward, accumulative. Their 'Transference' ability is the intersection of those two Sovereigns: Space (transit between positions) + Life/Death (the threshold between states) = governance of consciousness crossing between vessels. Active ability: Vessel Bridge — guided crossing pathway, can hold consciousness stable mid-transit. Minia Consa is a Primal core inhabiting a human body. Daughters Summari (Beginning) and Nighla (End) are the two poles of any transit. Long alliance with Clan More. No Grand Table seat. Outside Ferali/Celestial framework entirely.",
  },

  // ── Primals Original 7 — The Seven Founding Clans of the Primal World ──────
  // Clan More is the 7th and is documented under the Primal Seat section above.
  // Primurs (8th entry below) is the Capticel City — the capital of the Primal world,
  // center of their civilization in Limbo, where the Primordials resided.
  {
    id: 'vael',
    name: 'Clan Vael',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#8B4A3A',
    role: 'Primal Original 7 · Sovereign Entropy · Seat I (Vraka Group)',
    description: "One of the seven founding clans of the Primal world in Limbo. Clan Vael was the house of **Omegaruin Vael** — the Primal champion of sovereign entropy, the being who understood endings not as failures but as the deepest truth of what things are. The Vael philosophy runs through everything the clan is: nothing should persist past its time, and the recognition of an ending is not resignation but clarity.\n\n**After the War:** Omegaruin was captured by Vraka Arke during the Limbo War, forced into a war-beast form and bound to Vraka's Aura-nature. His essence was later forged into the **Ruin Beast** — the Noble Treasure weapon of Grand Table Seat I — which the surviving Vael lineage carried as their house weapon and cultural inheritance for generations after his death. The beast was never a symbol of defeat to them. It was their founder's patience made permanent: the principle that all things must end, carried forward as force.\n\n**Clan Character:** Vael descendants were calm in a way that unsettled others — not cold, but genuinely unbothered by outcomes that would shake anyone else. They did not rush endings; they waited for them. In combat, they were the most patient of the seven Primal clans, and the most difficult to destabilize emotionally. They also never, in recorded history, expressed fear of their own deaths.\n\n**Current Status — Extinct:** Clan Vael's loyalty to Vraka did not exempt them from the centuries of grinding attrition that followed the twins' victory. As Arke-loyal shock troops, they were spent generation after generation in the long suppression of the remaining free Primal population and in the twins' own thirty-year war against each other once no external enemy remained. By the current era, the Vael bloodline is gone — the last confirmed descendant died out well before the Fest. Grand Table Seat I sat without a clan behind it until House Lucerne, which inherited administration of Vraka's three seats, granted the actual Ruin Beast to **Duki Navar** as personal reward after the Fest. He is not Vael blood. He holds what the clan once held because the clan no longer exists to hold it.",
    seatId: 'seat-v2',
    champion: 'omegaruin_vael',
    vassalOf: null,
    weapon: 'ruin-beast',
    status: 'extinct',
    notes: 'Primal Original 7. House of Omegaruin Vael — sovereign entropy. Noble Treasure: Ruin Beast (Grand Table Seat I, Vraka Group). Omegaruin was captured by Vraka, bound as a war-beast, essence forged into the weapon after the war. Clan philosophy: patient acceptance of endings as truth. EXTINCT — bloodline died out generations before the Fest, spent as Arke-loyal shock troops. Seat I now personally held by Duki Navar (not Vael blood), granted by House Lucerne.',
  },
  {
    id: 'ashveil',
    name: 'Clan Ashveil',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#2A2A4D',
    role: 'Primal Original 7 · Sovereign Darkness · Seat II (Vraka Group)',
    description: "One of the seven founding clans of the Primal world in Limbo. Clan Ashveil was the house of **Eclips Ashveil** — the Primal champion of sovereign darkness, the being who learned that light was the least informative thing in the world and spent centuries learning to eat it instead of perceive through it. Where most beings use light to understand their environment, Eclips understood through heat, pressure, and sound — light was noise, the surface of things, a distraction from what was real.\n\n**After the War:** Eclips was captured by Vraka Arke during the Limbo War, her bound form operating through dimensional seams and erasing the concept of visibility within her presence. Her essence was later forged into the **Eclipse Beast** — the Noble Treasure weapon of Grand Table Seat II. The Ashveil lineage carried this weapon and, with it, Eclips's foundational conviction — true power absorbs rather than emits — for generations after her death.\n\n**Clan Character:** Ashveil descendants operated in or near darkness long enough that the clan developed a genuine cultural distrust of beings who require light to function. They did not consider this a bias — they considered it pattern recognition. Their sensory adaptation was generational; Ashveil members perceived through multiple non-visual channels as a baseline capability, light being an optional supplement rather than a primary sense. They were the most difficult of the seven Primal clans to ambush.\n\n**Current Status — Extinct:** Like Vael, Ashveil's loyalty to Vraka did not spare them from the centuries of attrition that followed the twins' victory — spent as front-line loyalists in the long suppression of the remaining free Primal population. The bloodline is gone. Grand Table Seat II currently sits vacant; House Lucerne, which inherited administration of Vraka's three seats, has not yet granted it to anyone.",
    seatId: 'seat-v3',
    champion: 'eclips_ashveil',
    vassalOf: null,
    weapon: 'eclipse-beast',
    status: 'extinct',
    notes: 'Primal Original 7. House of Eclips Ashveil — sovereign darkness, consumption. Noble Treasure: Eclipse Beast (Grand Table Seat II, Vraka Group). Eclips was captured by Vraka, her darkness bound into his war-construct; essence forged into the weapon after the war. Clan philosophy: power absorbs rather than emits. EXTINCT — bloodline died out generations before the Fest. Seat II currently vacant.',
  },
  {
    id: 'nullar',
    name: 'Clan Nullar',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#5A5A6E',
    role: 'Primal Original 7 · Sovereign Unmaking · Seat III (Vraka Group)',
    description: "One of the seven founding clans of the Primal world in Limbo — the smallest, the most secretive, and the hardest to trace. Clan Nullar was the house of **Erasse Nullar** — the Primal champion of sovereign unmaking, a being whose presence was naturally self-erasing. Records of him are incomplete not because they were lost but because being near him produced gaps in how experience was filed into memory. This quality persisted through his death: there is no record of how he died.\n\n**After the War:** Erasse was captured by Vraka Arke during the Limbo War, his forced war-form a continental sky-predator generating spatial distortion — the single greatest counter to Selis's side in direct confrontation, which speaks to how Vraka valued him. His essence was later forged into the **Erasure Beast** — the Noble Treasure weapon of Grand Table Seat III. The Nullar clan's entry in most registries read simply as 'Seat III.' This was exactly what Erasse would have chosen.\n\n**Clan Character:** Clan Nullar were the hardest of the seven Primal clans to locate, track, or document. Their population count was always contested. Their leadership structure was unknown to outsiders. Their entry in the Book of Time has gaps that Cronus describes as deliberate — the Nullar lineage carried Erasse's self-erasing quality as a heritable trait. They never declared war. They never needed to. Things that threatened Clan Nullar tended to stop being recorded before they could act.\n\n**Current Status — Extinct:** Fittingly, given the clan's nature, there is no clear record of exactly when Nullar died out — only that at some point in the centuries of attrition following the twins' victory, no one was left to be untraceable. Grand Table Seat III currently sits vacant; House Lucerne has not yet granted it to anyone.",
    seatId: 'seat-v4',
    champion: 'erasse_nullar',
    vassalOf: null,
    weapon: 'erasure-beast',
    status: 'extinct',
    notes: 'Primal Original 7. House of Erasse Nullar — sovereign unmaking, absence. Noble Treasure: Erasure Beast (Grand Table Seat III, Vraka Group). Erasse captured by Vraka, forced into a spatial-distortion war-form; essence forged into weapon after the war. Smallest and most secretive of the 7. Clan Nullar\'s Book of Time entry has deliberate gaps. EXTINCT — even the exact end of the bloodline is unrecorded. Seat III currently vacant.',
  },
  {
    id: 'sovenne',
    name: 'Clan Sovenne',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#2C6E8A',
    role: 'Primal Original 7 · Sovereign Current · Seat IV (Selis Group)',
    description: "One of the seven founding clans of the Primal world in Limbo. Clan Sovenne was the house of **Sova the Unbroken** — the Primal champion of sovereign current, the principle of water not as a flowing force but as the thing that holds and binds. Sova's power was not the wave that crashes — it was the current that catches and does not let go. The name 'the Unbroken' did not come from surviving things. It came from the fact that what Sova bound did not break free.\n\n**After the War:** Sova was captured by Selis Arke during the Limbo War, converted into a living tool-spirit of permanent Force-nature — a chain manifestation that made escape structurally impossible within her field. Killed by Dulla Vane during the Ascen assault on Limbo. Her essence was forged into **Sova's Chain** — the Noble Treasure weapon of Grand Table Seat IV. The Sovenne lineage carried both her weapon and her foundational principle — that the strongest hold is the one the target doesn't recognize as a hold until they've already stopped moving — for generations after her death.\n\n**Clan Character:** Sovenne descendants were patient tacticians with an instinctive preference for control over confrontation. They rarely escalated conflict directly — they redirected it, contained it, let it exhaust itself inside boundaries they had already drawn. Other Primal clans considered them the most strategically minded of the seven. The Sovenne considered this a compliment.\n\n**Current Status — Extinct:** Sovenne's loyalty to Selis bought them centuries, not permanence — spent the same way Vael and Ashveil were spent on Vraka's side, as front-line loyalists in the long suppression of the free Primal population. The bloodline is gone. Grand Table Seat IV sat without a clan behind it until House Seraph, which inherited administration of Selis's three seats, granted the actual Sova's Chain to **Olda Apolo** as personal reward after the Fest. He is not Sovenne blood. He holds what the clan once held because the clan no longer exists to hold it.",
    seatId: 'seat-s2',
    champion: null,
    vassalOf: null,
    weapon: 'sovas-chain',
    status: 'extinct',
    notes: 'Primal Original 7. House of Sova the Unbroken — sovereign current, binding. Noble Treasure: Sova\'s Chain (Grand Table Seat IV, Selis Group). Sova captured by Selis as a tool-spirit; killed by Dulla Vane in the Ascen Limbo assault. Clan philosophy: the strongest hold is the one not recognized as a hold. EXTINCT — bloodline died out generations before the Fest, spent as Arke-loyal shock troops. Seat IV now personally held by Olda Apolo (not Sovenne blood), granted by House Seraph.',
  },
  {
    id: 'kethis',
    name: 'Clan Kethis',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#B84A1A',
    role: 'Primal Original 7 · Sovereign Flame · Seat V (Selis Group)',
    description: "One of the seven founding clans of the Primal world in Limbo. Clan Kethis was the house of **Keth of the Burning Ground** — the Primal champion of sovereign flame, a being whose fire did not simply burn the physical but burned the mana structure beneath it. A mark from Keth did not heal like an ordinary wound — it persisted through recovery techniques, scorching mana channels and reducing elemental output long after the surface damage was gone. The name 'of the Burning Ground' was not a title he chose. It was what the ground was, wherever he had been.\n\n**After the War:** Keth was captured by Selis Arke during the Limbo War, converted into a living tool-spirit whose brand-manifestation targeted the mana architecture beneath the physical. Killed by Dulla Vane during the Ascen assault on Limbo. His essence was forged into **Keth's Brand** — the Noble Treasure weapon of Grand Table Seat V. The Kethis lineage carried both his weapon and his understanding of fire — that the most destructive burn is the one that does not go out when you stop burning — for generations after his death.\n\n**Clan Character:** Kethis descendants were the most outwardly aggressive of the seven Primal clans — not reckless, but direct. They did not prefer indirect approaches. They considered patience a virtue and waiting an insult. When they committed to something, the commitment was complete and visible. The clan produced the largest proportion of front-line combatants of any of the seven — which is, fittingly, what eventually consumed them.\n\n**Current Status — Extinct:** Kethis's own aggression was their undoing. As the seven Primal clans' most front-line-heavy combat lineage, they bore disproportionate losses across the centuries of continued suppression that followed the twins' victory. The bloodline is gone. Grand Table Seat V currently sits vacant; House Seraph, which inherited administration of Selis's three seats, has not yet granted it to anyone.",
    seatId: 'seat-s3',
    champion: null,
    vassalOf: null,
    weapon: 'keths-brand',
    status: 'extinct',
    notes: 'Primal Original 7. House of Keth of the Burning Ground — sovereign flame, mana-burn. Noble Treasure: Keth\'s Brand (Grand Table Seat V, Selis Group). Keth captured by Selis as a tool-spirit; killed by Dulla Vane in the Ascen Limbo assault. Fire that burns the mana structure beneath the physical — marks that outlast the wound. EXTINCT — highest combat losses of the seven Primal clans. Seat V currently vacant.',
  },
  {
    id: 'tevanis',
    name: 'Clan Tevanis',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#7A6344',
    role: 'Primal Original 7 · Sovereign Weight · Seat VI (Selis Group)',
    description: "One of the seven founding clans of the Primal world in Limbo. Clan Tevanis was the house of **Tevan the Foundation** — the Primal champion of sovereign weight, the principle of earth not as terrain but as law. Tevan's power was not mass — it was the principle beneath mass, the declaration that what exists in a place is required to remain there. His name was the Foundation because whatever Tevan decided was fixed, was fixed. Not heavy. Permanent.\n\n**After the War:** Tevan was captured by Selis Arke during the Limbo War, converted into a living tool-spirit of gravitational authority — what he declared fixed could not be displaced, destroyed, or moved by any technique in existence. Killed by Dulla Vane during the Ascen assault on Limbo. His essence was forged into **Tevan's Edict** — the Noble Treasure weapon of Grand Table Seat VI. The Tevanis lineage carried this weapon and his governing philosophy — that the strongest position is the one that requires no maintenance because it cannot be moved — for generations after his death.\n\n**Clan Character:** Tevanis descendants were the most stable and the most immovable of the seven Primal clans — politically, physically, and temperamentally. They did not change positions easily. When they took a stance, it was because they had already decided it was the correct one and saw no reason to revisit it. Other clans found this frustrating. Tevanis found other clans' flexibility suspicious.\n\n**Current Status — Extinct:** Immovability was not the same as permanence. Tevanis, like its five sister clans, was ground down across the centuries of continued Primal suppression that followed the twins' victory — the position they refused to abandon was eventually the one that ended with them. The bloodline is gone. Grand Table Seat VI currently sits vacant; House Seraph has not yet granted it to anyone.",
    seatId: 'seat-s4',
    champion: null,
    vassalOf: null,
    weapon: 'tevans-edict',
    status: 'extinct',
    notes: 'Primal Original 7. House of Tevan the Foundation — sovereign weight, permanence. Noble Treasure: Tevan\'s Edict (Grand Table Seat VI, Selis Group). Tevan captured by Selis as a tool-spirit; killed by Dulla Vane in the Ascen Limbo assault. His edict: what he declares fixed cannot be moved. EXTINCT — ground down across centuries of Primal suppression. Seat VI currently vacant.',
  },

  // ── Primurs — The Capticel City (8th of the Original) ──────────────────────
  {
    id: 'primurs',
    name: 'Primurs',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: 'Capticel City — Capital of the Primal World',
    color: '#C8A82C',
    role: 'The Capticel City · Heart of the Primal World · Former Seat of the Primordials',
    description: "Primurs is not a clan. It is the center. The capital city of the Primal world in Limbo — the point from which everything else in the Primal civilization radiated. Where the seven founding clans each held a territory, Primurs held them all: the converging point, the shared ground, the place that belonged to no single clan because it belonged to all of them.\n\n**The Primordials' Seat:** The Primordials — Gaia, Cronus, and Kazemi — did not live among any single clan. They resided in Primurs when they were present in the Primal world, because Primurs was the only place built to hold beings of that scale. Not a palace. Not a fortress. A city designed around the reality that its most important residents were conceptual beings whose presence altered the environment around them. The architecture of Primurs was built to accommodate that — the spaces were not simply large, they were structured to allow Conceptual-level entities to exist within them without distortion.\n\n**What It Meant:** The seven clan leaders would travel to Primurs for meetings, for disputes, for the decisions that affected all seven territories simultaneously. It was the only place in the Primal world where all seven sat at the same level — no clan's territory, no home advantage, no inherited precedence. Primurs was the neutral ground that made the seven function as a civilization rather than seven separate peoples.\n\n**After the Arke Wars:** Primurs was the last thing standing when the Primal world in Limbo fell. The Arke twins did not destroy it — they occupied it. The city that had been the heart of Primal civilization became the command center for the campaign that ended that civilization. Cith More led the survivors away from it. Whether Primurs still exists in Limbo, or what it has become under Arke occupation and the centuries that followed, is not known to any surviving Primal lineage. It is the one piece of their world they were not able to take with them.",
    seatId: null,
    champion: null,
    vassalOf: null,
    notes: 'The capital city of the Primal world in Limbo — the 8th site of the Original 7, the center from which the seven clans operated. Where the Primordials (Gaia, Cronus, Kazemi) resided when present in the Primal world. Neutral ground for the seven leaders. Occupied by the Arke twins after the Primal world fell. Current status unknown. Not a clan — a place.',
  },

  // ── Off-Table Houses with Special Class / Mana-Born weapons ────────────
  {
    id: 'nexal',
    name: 'House Nexal',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#A0C4D8',
    role: 'Time Element Assault Clan · Vanguard Intelligence for the Ascen Sphere',
    description: "House Nexal are the temporal specialists of the Ascen sphere — a clan whose entire combat and intelligence doctrine is built around time-element manipulation. Where other clans fight in the present, Nexal fights 3 seconds in the future at all times. They are Clan Vane's forward information arm: deployed before any major engagement to read probable outcomes, identify extraction routes, and eliminate threats that have not yet acted.\n\n**The Chronos Bow:** Nexal's defining weapon is a Force-aligned time covenant — arrows that do not travel through space but through temporal space, striking where the target will be rather than where they are. Combined with the wielder's own time-element affinity, Nexal operatives are practically impossible to engage in a fair fight. Clan Vane keeps them out of public knowledge precisely because knowing how they work would still not help you fight them.\n\n**Allegiance:** Nexal serves the Ascen sphere under Clan Vane. They are not a military assault house in the direct sense — they are the reason assaults succeed. The intelligence they gather through Temporal Vision has never been wrong. It has only ever been correctly used or incorrectly acted upon.",
    seatId: null,
    champion: null,
    vassalOf: null,
    weapon: 'chronos-bow',
    notes: "Holds the Chronos Bow (Special Class, Celestial faction). Serves Clan Vane / Ascen sphere. Time element specialists. No Grand Table seat — operates outside the formal weapon seat framework.",
  },
  {
    id: 'apolo',
    name: 'House Apolo',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#C8D8B0',
    role: 'Spatial Intelligence Clan · Spirit Tool Arm of the Wov Inquisition',
    description: "House Apolo are space-core specialists — a clan whose core affinity is spatial manipulation and dimensional reading. They serve as the spatial intelligence arm of House Wov's Inquisition: where House Wov investigates, Apolo opens the paths and closes them behind. Their contract is with the Force side (Celestial tools), giving them a precision-instrument relationship with space rather than a beast-contract one.\n\n**The Dimensional Shear:** Apolo's weapon is a pale geometric blade that cuts through space rather than matter. Its edge exists slightly outside the physical plane — any strike it delivers is structurally unblockable because the blade occupies two spatial positions simultaneously. The Rift Step capability makes Apolo operatives functionally untraceable. No Inquisition record is kept of how they arrived at or departed from any location.\n\n**Connection to Hope Kazemi:** House Apolo is the ancestor clan of Hope Kazemi. The spatial intelligence relationship between Apolo and Wov is the historical root of Hope's eventual position within the Wov sphere. Generations of Apolo service to the Inquisition created a bloodline whose instincts are already calibrated to Wov's priorities.\n\n**Allegiance:** Aids House Wov as their spatial intelligence arm. Not a vassal in the formal Table sense — the relationship predates the Table structure and operates on different terms. Apolo does not appear in Inquisition records because they are the reason certain records disappear.",
    seatId: null,
    champion: null,
    vassalOf: 'wov',
    weapon: 'dimensional-shear',
    notes: "Holds the Dimensional Shear (Special Class, Celestial faction — spatial covenant instrument). Aids House Wov as Spirit/Tool spatial intelligence. Ancestor clan of Hope Kazemi. No Grand Table seat. Post-Fest: also bound to House Seraph as a client clan via the Covenant Seal, gifted by Elorah Seraph — see notes on that weapon and the post-Fest political realignment record.",
  },
  {
    id: 'navar',
    name: 'House Navar',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#1A6B1A',
    role: 'Mountain Beast-Guardian Clan · Alma Enforcement Arm of the Wov–Osiro Alliance',
    description: "House Navar are a pure Alma lineage from a hidden mountain region — a beast-contract clan whose mana-aura techniques were built, over generations, as the protective counter to Celestial tools. Where House Apolo answers instruments with instruments, Navar answers them with beasts: they served as guardians of Clan Osiro and the Book of Time, the muscle standing behind a record that only means something if someone is willing to defend it.\n\nThey were among the four clans broken at the Fest. Clan leader Exoo Navar was killed by her own brother-in-law, Duki Navar, when she hesitated to finish him in personal combat — a betrayal that followed the same logic as Olda Apolo's: a man unwilling to accept a woman's claim to leadership, given an offer by the winning side and taking it. Duki defected to House Lucerne and was personally rewarded by Vraka Arke with Ruin's Wake, a lesser echo of the Ruin Beast's entropy essence.\n\n**Post-Fest — Client of House Lucerne:** With Exoo dead and Zoe Navar routed away from the clan entirely (extracted by Tola Ardent alongside Hope Apolo, later taken to the Earth facility), House Navar had no functioning leadership for decades. Azen Lucerne absorbed what remained, mirroring Seraph's absorption of Apolo on the other side of the Grand Table. The binding gift was the Chimera Core — a weapon that assumes the exact form of anything it has touched, the purest possible expression of Navar's inherited role as a protective counter to whatever the Force camp brings against them. House Navar is now formally a servant clan of the Alma under Lucerne.\n\n**Allegiance:** Ancestrally allied with House Wov and Clan Osiro as Alma beast enforcement, alongside sister house Naval. Since the Fest, also bound to House Lucerne as a client clan — the Aura-camp mirror of Apolo's binding to Seraph.",
    seatId: null,
    champion: null,
    vassalOf: 'lucerne',
    weapon: 'chimera-core',
    notes: "Holds the Chimera Core (Special Class, Ferali/duraki faction — mimicry beast, gifted by Azen Lucerne post-Fest). Ancestrally allied with Wov/Osiro as Alma beast enforcement, alongside House Naval. No Grand Table seat. Zoe Navar's birth house; Exoo Navar (mother, deceased) was clan leader before the Fest.",
  },
  {
    id: 'naval',
    name: 'House Naval',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#4A4A6A',
    role: 'Death–Life Beast Clan · Alma Enforcement Arm of the Osiro Sphere',
    description: "House Naval are death-and-life core specialists — a clan whose fundamental affinity straddles the threshold between living and dying. They operate on the Alma/beast side of the mana divide, which makes them structurally unusual as allies of Clan Osiro, whose formal power is built on Force-aligned tools and records. But Osiro's records are only worth keeping if they are enforced — and Naval is how they are enforced.\n\n**The Hollow Dirge:** Naval's contract is with the Hollow Dirge — a vast wraith-entity whose passive field drains life force from everyone in its radius continuously. It is not a weapon that requires activation. It requires sustained arrangement. House Naval maintains this arrangement: the Dirge feeds, and in exchange, it serves. Every enforcement operation Naval runs carries the wraith with it. Most targets cannot see it. They simply begin to tire, then weaken, then comply.\n\n**Allegiance:** Aids Clan Osiro as their Alma beast enforcement arm — the muscle behind the Treasury's mandate cycles. Osiro maintains the books; Naval ensures the books are respected. Formally they are allies rather than vassals, though the practical relationship is one of contracted service. The arrangement is old enough that neither side remembers who approached whom first.",
    seatId: null,
    champion: null,
    vassalOf: 'osiro',
    weapon: 'hollow-dirge',
    notes: "Holds the Hollow Dirge (Special Class, Ferali/duraki faction — redesigned as beast contract). Aids Clan Osiro as Alma beast enforcement. No Grand Table seat. Death-life core affinity.",
  },
  {
    id: 'ardent',
    name: 'House Ardent',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#8B2020',
    role: 'Ascen Assault Vanguard · Strike Force for the Campaign Against the Primals',
    description: "House Ardent was created as an instrument, not a bloodline. Founded by Dulla Ardent — the man who changed his name to hide who he was — House Ardent exists for one purpose: to prosecute the Ascen campaign against the Primals at the sharpest possible edge. They are Clan Vane's assault house, answering directly to the Ascen war council. Within the Ascen sphere, they are treated as a new and independent house; outside it, they are largely unknown.\n\n**The Spear of Sin (Mana-Born):** Dulla carries one of only two Mana-Born weapons in the known world — weapons that generate Pure Mana rather than drawing on Ferali or Celestial contracts. The Spear of Sin manifests seven discrete forms corresponding to the seven Deadly Sins, each selectable by will. The choice of form reveals something about what the wielder wants most in a given moment. After years of use, Dulla defaults to Pride.\n\n**Dulla Ardent — True Identity:** The leader of House Ardent is Dulla Ardent publicly. In truth he is Dulla Vane — the first son of Aevum, born into Clan Vane, who changed his name and founded a house to operate freely without his lineage attracting scrutiny. He serves Clan Vane as if he were an aligned ally. He is, in the most literal sense, serving his own family while pretending to be a stranger. The reason for this arrangement is known only to Aevum and Dulla. Whether it was Aevum's instruction or Dulla's choice is not recorded.\n\n**Status:** Secretly immortal. Not deceased, despite old records claiming otherwise. Rival to Cith More of the Primal side.",
    seatId: null,
    champion: null,
    vassalOf: null,
    weapon: 'spear-of-sin',
    notes: "Holds the Spear of Sin (Mana-Born). Founded by Dulla Ardent (true identity: Dulla Vane, first son of Aevum — identity concealed). Serves Clan Vane / Ascen sphere as assault vanguard. No Grand Table seat. One of only two Mana-Born weapon holders in the setting.",
  },

  // ── Earth Guardian Houses — Hidden Treasure holders (on Earth, unaware of Sol-Nexus) ──────
  {
    id: 'surya',
    name: 'House Surya',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#E8B84B',
    role: 'Guardian of the Stellar Beast · South Asia',
    description: "House Surya are the custodians of the Stellar Beast — the sub-beast forged from Gaia's Life aspect, bound to Lyra Wov's will. They call their charge \"the Torch of Surya\" and have built their entire cultural identity around its radiance. The family tradition draws deeply from Hindu and Vedic solar cosmology, understanding the weapon as a fragment of the sun's living intelligence rather than a constructed artifact.\n\nOnly those of direct Surya bloodline can handle the weapon without sustaining burns — a restriction that has kept it secure for generations without any understanding of why the rule exists. House Surya has no knowledge of the Sol-Nexus, of Gaia, or of Lyra Wov. They are faithful guardians of a thing they were told must be kept safe and never fully unsheathed. The oral tradition surrounding the weapon is remarkably accurate in its warnings and completely mythologized in its explanations.",
    seatId: null,
    champion: 'sin_surya',
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Stellar Beast (Hidden Treasure — Gaia Life aspect, Lyra Wov sub-beast). Located in South Asia. Bloodline restriction on weapon contact enforced by solar-tradition lore. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
  },
  {
    id: 'oba',
    name: 'House Oba',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#8B5E3C',
    role: 'Guardian of the Wane Beast · Africa',
    description: "House Oba are the custodians of the Wane Beast — the sub-beast forged from Gaia's Death aspect, bound to Mara Wov's will. They call their charge \"the Judge\" and have developed the most comprehensive death customs and medical knowledge of any Earth family, specifically around understanding what cannot be healed, reversed, or argued with.\n\nThe family's cultural sophistication around death rituals, end-of-life practice, and the ethics of dying is genuinely extraordinary — it emerged directly from centuries of proximity to a weapon that embodies death's finality. House Oba does not fear the weapon; they respect it with a clarity most humans cannot access. They have no knowledge of Mara Wov or the Sol-Nexus, but their oral traditions around what the weapon \"wants\" track Mara's actual nature with unsettling accuracy.",
    seatId: null,
    champion: 'gould_oba',
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Wane Beast (Hidden Treasure — Gaia Death aspect, Mara Wov sub-beast). Located in Africa. Developed exceptional death-ethics and medical knowledge through proximity to the weapon. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
  },
  {
    id: 'long',
    name: 'House Long',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#4A8B6E',
    role: 'Guardian of the Root Beast · East Asia',
    description: "House Long are the custodians of the Root Beast — the sub-beast forged from Gaia's Balance aspect, bound to Sael Wov's will. They call their charge \"the Ancestor\" and maintain the oldest continuous written record in East Asian human history. The Record is not entirely about the weapon — it is about everything — but the weapon's presence is woven throughout, always described as the source of the family's particular gift for finding the center of things.\n\nHouse Long is known across their region for producing leaders of exceptional rationality and composure. This reputation is earned; something about the weapon's influence on generations of proximity has cultivated a genuine constitutional steadiness in the bloodline. They cannot be shaken from their positions through emotional pressure. They have no knowledge of Sael Wov or the Sol-Nexus, but they have maintained their stewardship more precisely than any other Earth guardian family.",
    seatId: null,
    champion: null,
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Root Beast (Hidden Treasure — Gaia Balance aspect, Sael Wov sub-beast). Located in East Asia. Oldest continuous written record; known for producing unshakeable rational leaders. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
  },
  {
    id: 'ouranos',
    name: 'House Ouranos',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#6B8BB8',
    role: 'Guardian of the Drift Tool · Europe',
    description: "House Ouranos are the custodians of the Drift Tool — the sub-tool forged from Cronus's Present aspect, bound to Dain Osiro's will. They call their charge \"the Sovereign\" and possess the most complete human account of the Sol-Nexus that exists anywhere on Earth — still mostly wrong, but closer than anyone else has managed.\n\nThe family has spent centuries constructing and suppressing this account simultaneously: maintaining it in private internal records while ensuring the public version is officially dismissed as mythology. The reason for the suppression is not political — it is protective. Those family members who have spent sustained time with the Drift Tool, attempting to understand it, have developed fragmented personalities: multiple inner voices, difficulty determining which thoughts are their own. House Ouranos knows this risk and manages it carefully. They have not stopped trying to understand the weapon; they have simply built elaborate protocols around who is allowed to try and for how long.",
    seatId: null,
    champion: 'saga_ouranos',
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Drift Tool (Hidden Treasure — Cronus Present aspect, Dain Osiro sub-tool). Located in Europe. Holds most complete (still mostly wrong) human account of the Sol-Nexus. Prolonged weapon use causes personality fragmentation. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
  },
  {
    id: 'rongo',
    name: 'House Rongo',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#5B9B8A',
    role: 'Guardian of the Echo Tool · Oceania',
    description: "House Rongo are the custodians of the Echo Tool — the sub-tool forged from Cronus's Past aspect, bound to Seth Osiro's will. They have never lost their oral lineage — not once, not through displacement, natural disaster, or generational disruption. Every generation of House Rongo has memorized and transmitted the same core passage without deviation: \"a stranger came from across the sky; he left something with us; we must keep it safe until the sky opens again.\"\n\nThis passage is older than the family's written records and predates their formal name. The family does not know who the stranger was, what \"the sky opening\" means, or when it will happen. They know only that the responsibility is real, the timeline is unknown, and their job is to keep the object safe and the words alive. Among all the Earth guardian families, House Rongo's oral fidelity is the most remarkable — and the most likely to be recognized as meaningful when contact with the Sol-Nexus finally comes.",
    seatId: null,
    champion: null,
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Echo Tool (Hidden Treasure — Cronus Past aspect, Seth Osiro sub-tool). Located in Oceania. Never broke their oral lineage; oldest surviving verbal account of the original weapon handoff. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
  },
  {
    id: 'wakan',
    name: 'House Wakan',
    rank: 'great',
    canClaimThrone: false,
    permanentRole: null,
    color: '#9B7B55',
    role: 'Guardian of the Seal Tool · Americas',
    description: "House Wakan are the custodians of the Seal Tool — the sub-tool forged from Cronus's Future aspect, bound to Noa Osiro's will. They call their charge \"the Voice of What Will Be\" and are the most geographically dispersed of all six Earth guardian families — a consequence of historical displacement across a vast continent that the family navigated while never losing custody of the weapon.\n\nThe internal warning passed down every generation in House Wakan is specific and severe: \"never use the Unchangeable for small things.\" The word \"Unchangeable\" is their name for the weapon. The warning implies the weapon has been used before, in limited ways — or that the family's ancestors understood from early experience that the cost of misuse was not proportionate to the benefit. House Wakan's elders are the most cautious of the six guardian families about the weapon itself; they treat it as something to be protected from use rather than simply from loss.",
    seatId: null,
    champion: 'deina_wakan',
    vassalOf: null,
    notes: 'Earth-based guardian family. Holds the Seal Tool (Hidden Treasure — Cronus Future aspect, Noa Osiro sub-tool). Located in the Americas; most geographically dispersed of the six Earth families. Internal tradition warns against using the weapon for small things. Earth-based guardian family, will be integrated into Sol-Nexus in a later arc.',
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
