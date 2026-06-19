export const defaultStories = [
  // ── Pre-Unix Origin Arc ────────────────────────────────────────────────────
  {
    id: 'origin-arc',
    title: 'The Origin Arc: From the Beginning to the Great War',
    subtitle: 'Pre-Unix History — The World Before Year 0',
    color: '#B8860B',
    status: 'planning',
    description:
      "The complete history of how the Sol-Nexus came to be — from the Vethara species and Mana the Conceptual's time on Orius, through the Arke twins' corruption of the Ascen, Mana's sacrifice to create the first humans, the facility on Earth, Irane's awakening, the great escape, the Paradise Spell catastrophe, the Great Stasis, and the 1-Year Crusade that ended with Irane standing over a world forever changed.",
    arcs: [
      {
        id: 'orig-limbo-terra',
        title: 'Limbo, Orius, and the Vethara',
        color: '#6A0DAD',
        characters: ['eva_osiro', 'exco_wov', 'adam_wov', 'volva_vane', 'aevum_vane', 'auris'],
        summary: "The Vethara species — native to Limbo — are divided into two constitutional factions: Ferali (pure Aura, beast forms) and Celestials (pure Force, humanoid with tools). The Arke twins — Vrak Arke (Ferali) and Selis Arke (Celestials), sons of Mana the Conceptual — rule Limbo and discover Orius (Terra). Mana himself crosses into Orius out of fascination with the Ascen: a species with perfect 50/50 Aura/Force balance and no contracts. He teaches them the language of spells (levels 0–10). The Arke twins follow him and see the resource potential. They make a deal with Aevum Vane — the most powerful Ascen alive — to systematically corrupt the Ascen species into Alma (Ferali-bound) and Spirits (Celestials-bound). Aevum becomes the first King of Terra as 'Volva Vane,' Auris (the Arke twins' ancient pre-split agent) begins operating behind the throne. Mana discovers what his teachings are being used for.",
      },
      {
        id: 'orig-eva',
        title: 'Mana\'s Sacrifice — The First Humans',
        color: '#B8860B',
        characters: ['eva_osiro', 'exco_wov', 'adam_wov', 'aevum_vane'],
        summary: "Mana the Conceptual prepares his answer to the Arke twins' corruption. His final act: a self-sacrificial spell that creates the first two humans — Eve (Eva Osiro) and Adam — from pure mana shaped into human pattern, untethered from any Vethara covenant. Mana ceases to exist. The universal substance of Limbo-mana is named after him as tribute. The 14 Gods hunt Eve and Adam immediately. Exco Wov — an Ascen who aided Mana's work — sacrifices himself, contracting simultaneously with three Supreme Concepts to tear a dimensional crossing. Eve and Adam escape to Earth with permanently sealed Cores. Their son Seth Osiro, born before the escape, is left behind and captured by the Vane dynasty. Three Ascen bloodlines survive the Gods' purges on Orius: Wov (Exco's line, survivors through keepers of Mother Nature's weapon), Apolo (Spirit-side, survived by suppressing all powers), Navar (Alma-side, survived the same way).",
      },
      {
        id: 'orig-earth-discovery',
        title: 'Earth Discovered — The Conquest Plan',
        color: '#5F9EA0',
        characters: ['nuro_vane', 'auris', 'minia_consa', 'aevum_vane'],
        summary: "Generations after Eve and Adam's escape, the Vane dynasty and the 14 Gods (directed by Auris, the Arke twins' living-world agent) discover Earth and humanity — beings with inactive sealed Cores whose unique mana carries properties unlike anything Vethara contracts were designed to capture. The 14 Gods plan to use humans as the perfect hosts for mass Alma/Spirit transfers. Meanwhile, Aevum Vane has been secretly building the counter-operation: commissioning the forge of 18 Noble Treasure weapons using knowledge accumulated across his immortal life. When the plan approaches its final stage, Aevum transfers his consciousness into a new body and disappears from public record. Three Eva-loyal clans on Orius — Wov, Apolo, Navar — are identified and their key members captured alongside Niro Vane's daughter Ember (age 13) and sent to the facility on Earth.",
      },
      {
        id: 'orig-facility',
        title: 'The Facility — 50 Years of Hell',
        color: '#CC5500',
        characters: ['irane', 'arai', 'hope', 'zoe', 'ember_hist', 'minia_consa', 'nuro_vane'],
        summary: "On Earth, Minia Consa runs the facility. Three Terra-born researchers are promised freedom: Arai (Nexal, age 16), Hope (Apolo, age 12), Zoe (Navar, age 10). The Infinity Challenge kills 9,999 of 10,000 subjects — Subject No. 8 survives by removing the concept of death from his own mind. The Dragon Infinity places his Conceptual Core into Subject No. 8's body. Over 50 years of experiments, the three researchers' bodies are broken: Arai's nervous system destroyed, Hope's heart failing, Zoe's body in perpetual rot. Arai secretly redirects Irane's emotional attachment toward herself, Hope, and Zoe. In year 49, Ember is forced to bear three children with him.",
      },
      {
        id: 'orig-escape',
        title: 'The Great Escape — From the Facility',
        color: '#DAA520',
        characters: ['irane', 'arai', 'hope', 'zoe', 'ember_hist', 'simon_archiver', 'alaiya', 'leo_proude', 'dio', 'hina', 'aevum_vane'],
        summary: "Simon Archiver — an old Vane archivist with extraordinary knowledge of the facility's internal systems and the Vane dynasty's history — organizes 12 children with newly-awakened Cores for the rescue. Alaiya (youngest) injects the drug. Irane breaks free and heals Arai, Zoe, and Hope one by one. 120 child test subjects are freed. The escape ends at a sea cliff — golden dragons rise from the water to carry the children to safety. Hina is briefly captured but rescued. The facility explodes. Minia Consa dies. A golden dragon whispers a name to Subject No. 8: Irane Adam Kazemi. Simon Archiver's true identity — Aevum Vane, the immortal progenitor of House Vane who transferred his consciousness into this body to join the escape group — remains undiscovered.",
      },
      {
        id: 'orig-catastrophe',
        title: 'The Paradise Spell — The World Breaks',
        color: '#E84855',
        characters: ['irane', 'auris'],
        summary: "The First Great War begins. In desperation, the Ascen Alliance casts the Paradise Spell to merge Earth and Terra (the realm of Orius). The spell tears a permanent rift to Limbo — uncontrolled Mana floods both worlds simultaneously. The merged planet is catastrophically uninhabitable. Auris uno-reverses the 14 Gods and completes the subjugation ritual himself. Irane kills Auris and seals his spirit into the Spear of Unix as eternal punishment. With Auris sealed, the Arke twins lose their primary living-world agent. The Emperor dies in the confrontation — but his Core continues to sustain the Valariyans' pocket realm for 1,000 years.",
      },
      {
        id: 'orig-stasis',
        title: 'The Great Stasis — 1,000 Years',
        color: '#4A30A8',
        characters: ['irane'],
        summary: "The world requires 1,000 years to stabilize. Billions sleep inside Mother Nature's and Father Time's inner realms. The Valariyans do not sleep — trapped inside the Emperor's dead pocket realm, hunted by his own Core's defense systems, dying and resurrecting endlessly. They emerge 1,000 years later as the most battle-hardened warriors in existence. Year 0 of the Unix World begins.",
      },
      {
        id: 'orig-chaos',
        title: 'The 130-Year Age of Chaos — Niro Vane\'s Rise',
        color: '#DC143C',
        characters: ['nuro_vane', 'vesper', 'ember_osiro'],
        summary: "Year 0: billions wake in an alien landscape with no framework for understanding. Violence is immediate. Historical Niro Vane emerges as the most powerful figure — he finds the Spear of Unix and spends 130 years consolidating authority. Apex (where the Valariyans are) remains sealed for all 130 years. Niro gains 14 of 17 Noble Treasure allegiances but cannot complete the coronation ritual without Wov, Osiro, and Kazemi.",
      },
      {
        id: 'orig-great-war',
        title: 'The Great War on Unix — The 1-Year Crusade',
        color: '#9B30FF',
        characters: ['irane', 'nuro_vane', 'vesper', 'ember_osiro', 'summari', 'nighla'],
        summary: "When Apex's dimensional lock finally lifts, Niro immediately seals Irane and launches a strike on Valariya — 4 million Valariyans killed in one assault. The Kazemi/Wov/Osiro alliance forms. Irane returns. The 1-Year Crusade follows. Historical Niro Vane is killed. Approximately 3 billion people die across the year. The war ends at Unix Year 131. Irane accepts 19 years of confinement to Valariya. The Grand Table is formed at Unix Year 150.",
      },
    ],
  },

  {
    id: 'book1',
    title: 'Book 1: Year 500 — Sit Down',
    subtitle: 'The Prologue Arc',
    color: '#4AAFE0',
    status: 'active',
    description:
      "The world is lawless. Lord Niro Vane reigns as a corrupt Acting King. A shadow assassin named Kael infiltrates the wrong border — and a community utopia shatters everything he was made to believe.",
    arcs: [
      {
        id: 'b1-kael-mission',
        title: "Kael's Failed Infiltration",
        color: '#00A5CC',
        characters: ['kael', 'niro'],
        summary: "Kael's mission near the Valariya border goes catastrophically wrong. He is left broken inside the energetic barrier with no extraction route.",
      },
      {
        id: 'b1-truth-valariya',
        title: 'The Truth of Valariya',
        color: '#E87B22',
        characters: ['kael', 'nova', 'irane', 'arai', 'hope', 'zoe'],
        summary: "Nova nurses Kael to health. He experiences Valariya firsthand — a community utopia, not the tyranny he was taught to destroy.",
      },
      {
        id: 'b1-identity',
        title: "Kael's True Identity",
        color: '#9B30FF',
        characters: ['kael', 'aqura', 'irane', 'niro'],
        summary: "Aqura detects a bloodline resonance. Irane confirms: Kael is Niro Vane's biological son — raised as a disposable weapon by his own father.",
      },
      {
        id: 'b1-vow',
        title: 'The Vow of the Fifteen',
        color: '#D4AF37',
        characters: ['irane', 'arai', 'hope', 'zoe', 'summari', 'nighla', 'nova', 'aurora', 'nebula', 'iron', 'law', 'eon', 'alpha', 'pixel', 'faith', 'shadow', 'kael'],
        summary: "The Kazemi family forms a sacred unbreakable pact — all seventeen children and the three mothers. They agree to unleash the Emperor — but swear to act as his moral anchor.",
      },
      {
        id: 'b1-coup',
        title: 'The Year 500 Coup & "Sit Down"',
        color: '#E84855',
        characters: ['irane', 'niro'],
        summary: "The Cosmic Eclipse. The coup. Irane steps through a spatial rift and ends it in seconds. The Bounded Law activates.",
      },
    ],
  },
  {
    id: 'book2',
    title: 'Book 2: The Grand Table in Motion',
    subtitle: 'The Law Arc',
    color: '#9B30FF',
    status: 'planning',
    description:
      "The Bounded Laws are now active. Kael returns to House Vane to claim succession. The corruption of the Cold War years must now be answered for under a fully operational legal framework.",
    arcs: [
      {
        id: 'b2-kael-vane',
        title: "Kael's Succession Challenge",
        color: '#00A5CC',
        characters: ['kael', 'niro', 'aqura'],
        summary: "Kael returns to the Vane estate to challenge his half-siblings. His Aetheric Nullification strips away their spatial magic.",
      },
      {
        id: 'b2-table-politics',
        title: 'Grand Table Politics',
        color: '#D4AF37',
        characters: ['irane', 'vesper', 'ember_osiro'],
        summary: "The first sessions of the fully active Grand Table. Old scores surface. Niro's corrupt legacy must be dismantled.",
      },
    ],
  },
  {
    id: 'side-mana-tax',
    title: 'Side Story: The Core-Hollow District',
    subtitle: 'Street Level Perspective',
    color: '#B87333',
    status: 'planning',
    description:
      "A commoner family in a Core-Hollow district struggles against the Mana Tax while the grand political games play out above them. The human cost of the empire.",
    arcs: [
      {
        id: 'ss-hollow-family',
        title: 'The Hollow Family',
        color: '#B87333',
        characters: [],
        summary: "A new family of commoners — unnamed yet — divide their mana reserves against the tithe. Their arc connects to the broader political story when Kael's reforms reach their district.",
      },
    ],
  },
]
