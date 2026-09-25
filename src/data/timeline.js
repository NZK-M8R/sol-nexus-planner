export const defaultTimelineEras = [
  // ── Pre-Unix Origins ────────────────────────────────────────────────────────
  {
    id: 'pre-unix-origin',
    name: 'Pre-Unix Origins',
    period: 'Ancient — Before Year 0',
    color: '#6A0DAD',
    events: [
      {
        id: 'death-of-ancients',
        year: 'Ancient — Primordial Era',
        title: 'Death of the Ancients — Mana Kills Three Primordials',
        description:
          "Mana — the first and only being ever simultaneously blessed by both Harmony and Chaos — accidentally kills all three Primordials of Limbo (Kazemi the Universal Dragon, Gaia the Life Force, Cronus the Architect of Time) in a single childhood spell. He did not understand the scale of his own nature. Gaia and Cronus dissolve into their Pillars and reconstitute over eons as Mother Nature and Father Time. Kazemi's remains scatter across dimensions. The Primals — who had lost their founding gods — pursue Mana for centuries. He flees into Orius badly injured.",
        characters: ['gaia_primordial', 'cronus_primordial'],
        significance: 'foundation',
      },
      {
        id: 'mana-arke-orius',
        year: 'Ancient — Orian Stone Age',
        title: 'Mana Meets Arke — The Birth of Structured Magic',
        description:
          'An Orian woman named Arke finds the injured Mana and brings him to her community. Watching his instinctive spell use, she systematically formalizes what she observes into repeatable structures — inventing structured magic as a discipline. Mana is astonished. They marry. Arke dies in childbirth bearing twins Vraka and Selis. Mana gives both children her name — the first intentional family surname in Orian history. Mana, carrying grief and guilt for the Primordials, takes the twins to Limbo and leaves them with the Primals before returning to his hidden space.',
        characters: ['arke'],
        significance: 'critical',
      },
      {
        id: 'arke-twins-rise',
        year: 'Ancient — Limbo',
        title: 'The Arke Twins Rise — The Vethara Factions Form',
        description:
          'The Vethara species — native to Limbo — split into two factions through chosen alteration: Ferali (Aura-dominant, beast forms) and Celestials (Force-dominant, tool-forms). Vraka Arke (Ferali) and Selis Arke (Celestials) — twin children of Mana the Conceptual — are raised among the Primals. They discover their unique Mana-inversion power: Vraka converts mana into Mana-Aura (manifesting beasts), Selis into Mana-Force (forging tools). They wage war on the Primals, build armies through contract alteration, and establish themselves as the Arke twin rulers of Limbo. They discover Orius and recognize it as an unlimited mana-supply pipeline.',
        characters: ['volva_vane', 'aevum_vane'],
        significance: 'foundation',
      },
      {
        id: 'two-hundred-year-war',
        year: 'Ancient — Orius',
        title: 'The 200-Year War — Birth of Alma, Spirits, and Ascen',
        description:
          "Aevum Vane — informed of the full plan upfront by the Arke twins — manufactures wars across Orius. The twins plant beast and tool contracts in two chosen nations: Eura Clan (West, Vraka/Alma) and Chin Clan (East, Selis/Spirits). The war runs 200 years. Six billion people die. Ten billion are born. At the war's end, three peoples emerge: Alma (Aura-dominant 60/40, beast-merge, 20–40 yr lifespan), Spirits (Force-dominant 60/40, tool-merge, 20–40 yr lifespan), Ascen (those who refused contracts, 50/50, 200–300 yr lifespan). Aevum Vane is 'killed' in battle — in truth he transfers his consciousness to a new body and continues ruling from the shadows. The Vane dynasty is established as the living-world instrument of the Arke twins, managed through their primary agent Auris.",
        characters: ['aevum_vane', 'dulla_vane'],
        significance: 'critical',
      },
      {
        id: 'eva-osiro-born',
        year: 'Ancient',
        title: "Mana's Sacrifice — The First Humans",
        description:
          "Mana the Conceptual discovers what the Arke twins have turned his teachings into. He spends years preparing his answer: a self-sacrificial final spell that creates the first two humans — Eve (Eva Osiro) and Adam — from pure mana shaped into human pattern, untethered from any Vethara covenant. Mana ceases to exist; the universal substance of Limbo-mana is named after him as tribute. Eve and Adam carry no beast-contracts, no tool-contracts, no innate abilities — only free will unclaimed by any covenant system. The 14 Gods (7 Ferali + 7 Celestials, the Arke twins' most powerful agents) immediately hunt them.",
        characters: ['eva_osiro', 'adam_wov'],
        significance: 'critical',
      },
      {
        id: 'exco-sacrifice',
        year: 'Ancient',
        title: "Exco Wov's Sacrifice — The Crossing to Earth",
        description:
          "With the 14 Gods closing in, Exco Wov — an Ascen who had aided Mana's work — sacrifices himself. He contracts simultaneously with three Supreme Concepts (Time, Space, Life/Death) to tear a dimensional crossing to Earth, a world beyond the 14 Gods' reach. Eve and Adam pass through; the crossing permanently seals their Cores. This sealed-Core trait becomes the inheritance of all humanity. Eve's son Seth Osiro, born before the escape, is left on Orius and captured by the Vane dynasty. Three Ascen clans loyal to Mana's cause survive the Gods' purges: Wov (Exco's bloodline, keepers of Mother Nature's weapon), Apolo Clan (Spirit-side, survived by suppressing all powers), Navar Clan (Alma-side, survived the same way).",
        characters: ['exco_wov', 'eva_osiro', 'adam_wov'],
        significance: 'critical',
      },
      {
        id: 'toma-primal-sacrifice',
        year: 'Ancient — Pre-Earth',
        title: 'Toma More and the Kazemi Trial — One Billion Dead',
        description:
          "As the Primal-Ascen war reaches its terminal phase, Toma More executes a plan spanning both Primal factions. He manipulates 500 million of his own followers into walking willingly into Kazemi's trial space — staged as their final act of faith, in truth a calculated sacrifice. Every one of them burns on contact with the Dragon's remains. Combined with the 500 million cores the Kazemi Believers had fed into the trial across centuries, the total cores absorbed into Kazemi's trial space reaches one billion. This is the weight that will wait inside when the champion arrives. Toma More is now the last commander of a civilization that no longer exists at scale. With nowhere left on Orius or Limbo, he turns to the Rift.",
        characters: ['toma_more'],
        significance: 'critical',
      },
      {
        id: 'toma-arrives-earth',
        year: 'Ancient — ~35 Years Before the Academy Attack',
        title: 'Arrival of the Devil — Toma More Reaches Earth',
        description:
          "Toma More crosses into Earth with three companions — four Primals total, unable to survive as mana beings in Earth's atmosphere. In desperation they enter four human bodies in the North European region. What follows is an internal war of consciousness: Toma's companion tries to occupy Crimi Night's body and loses. A second loses to Tan Loo. A third loses to Miho Frame. Only Toma himself wins his fight, but the cost is permanent. Crimi Night, Tan Loo, and Miho Frame flee carrying Level 7 Primal elite cores and the inherited military knowledge of Toma's most trusted fighters. Toma, too weak to move, collapses and is found by Sage Ouranos.",
        characters: ['toma_more', 'crimi_night', 'tan_loo', 'miho_frame'],
        significance: 'critical',
      },
      {
        id: 'six-family-meeting',
        year: 'Ancient — ~35 Years Before the Academy Attack',
        title: 'The Six Families Convene — The Vessel Doctrine Revealed',
        description:
          "Sage Ouranos calls the five other Vessel Family heads to meet Toma More: Sin Surya (House Surya), Gould Oba (House Oba), Drum Long (House Long), Mapoo Rongo (House Rongo), and Deina Wakan (House Wakan). The six families have been preparing human vessels for generations — building a pipeline to receive Coreporial consciousness, maintaining the doctrine that humanity was created as hosts. They also share a discovery: human bodies amplify Cores. A Level 4 Core placed in a human body operates at Level 5. Toma immediately understands the strategic value. The six families and Toma More align. His supply of Primal consciousness meets their centuries of vessel preparation. The original ideology — religious, belief-based, treating transfer as sacred — is quietly replaced by Toma's operational logic.",
        characters: ['toma_more', 'saga_ouranos'],
        significance: 'major',
      },
      {
        id: 'earth-resistance-forms',
        year: 'Ancient — ~35 Years Before the Academy Attack',
        title: 'The Human Resistance — Three at Level 7',
        description:
          "Crimi Night, Tan Loo, and Miho Frame — the three humans who won the fight for control against Toma's companions — find each other within months of the original crossing. They carry Level 7 Primal elite cores (one full level above the Level 6 originals, due to the human body amplification effect) and the inherited military knowledge of the fighters they defeated. They understand Primal operations from the inside. Within a year, they are running precision interference against Toma's transference work: disrupting cultivation camps, destroying lab facilities before they become operational, attacking transfer operations at the moment of crossing.",
        characters: ['crimi_night', 'tan_loo', 'miho_frame', 'toma_more'],
        significance: 'major',
      },
      {
        id: 'earth-operations-35-years',
        year: 'Ancient — 35 Years Pre-Attack',
        title: 'Earth Operations — The 35-Year Build',
        description:
          "Toma More spends 35 years building his Earth force. The six families prepare human vessels through their pipeline; Primal consciousnesses cross into prepared bodies and operate one level above their natural ceiling. Clan Consa — led by Namo Consa, who alone among the Kazemi Believers knows Toma's true purpose for the trial — runs parallel experiments on human contact with Kazemi's remains. Minia Consa is assigned to lead research AND hunt the three resistance founders. Wars on three fronts slow everything down.",
        characters: ['toma_more', 'namo_consa', 'minia_consa', 'crimi_night', 'tan_loo', 'miho_frame'],
        significance: 'major',
      },
      {
        id: 'z-joins-resistance',
        year: 'Ancient — ~7 Years Before the Academy Attack',
        title: 'Z Joins the Resistance — The Man Who Could Not Die',
        description:
          "A young man known only as Z — true name never recorded — returns from his first year at war to find his home destroyed and his family buried among the casualties. His mother, who raised him alone after his father was recruited before Z could speak, and the girl next door — Aura — who had made him promise to put his soul into everything, to never give up. He had left without taking them to safety. Simon Archiver finds him in the wreckage and introduces him to the resistance. Z becomes the resistance's most effective operative over the following years: he chooses the highest-mortality missions not out of heroism but out of grief — a part of him wants to die and return to the people he lost, and he is too much of a coward to end his own life directly. Death keeps refusing him. Ember Vane, arriving on Earth after her facility escape at nineteen, meets Z through Simon's network.",
        characters: ['simon_archiver', 'ember_hist'],
        significance: 'major',
      },
      {
        id: 'ember-z-conversation',
        year: 'Ancient — ~4 Years Before the Academy Attack',
        title: "Z Tells Ember His Story — The Rooftop Conversation",
        description:
          "Three years after Ember arrived on Earth, she asks Z the question no one else had: why he always chooses the most lethal missions. He tells her. His mother's voice: 'You can do it. Just don't give up.' Aura's promise before he left for the war: 'Put your soul into everything.' The ruins he came home to. The graves. He tells her he chooses death missions because he wants to die and is too much of a coward to end his own life. 'Death always seemed to reject me.' Ember holds him. Two people who lost everything, finding in each other the only person who understood from the inside. The words Z carries — 'never give up,' 'put your soul into everything' — are the words that will shape what the trial builds. He is twenty-two. So is she.",
        characters: ['ember_hist'],
        significance: 'major',
      },
      {
        id: 'consa-888888887',
        year: 'Ancient — ~5 Years Pre-Attack',
        title: "Consa's Trial Count Reaches 888,888,887",
        description:
          "Clan Consa's human experimentation program has fed 888,888,887 people into contact with Kazemi's remains. Survival time has extended — seconds, then minutes — but no human has passed through. What Consa does not understand: Kazemi is not a sleeping power to be fueled. He is a will with specific criteria. The humans are not batteries. They are candidates. None of them until the final subject carries the architecture the will requires. Subject No. 888,888,888 does not yet exist.",
        characters: ['minia_consa', 'namo_consa'],
        significance: 'major',
      },
      {
        id: 'academy-class',
        year: 'Ancient — ~5 Years Pre-Attack',
        title: "The Grand Mana Academy — Arai's Five-Year Class",
        description:
          "Arai Nexal — of Noble House Nexal, Time magic bloodline, Level 6 Core at age 20, racing toward Level 7 — assembles an extraordinary class at the Grand Mana Academy: Hope Apolo (Space, Level 5, ~16 at class start), Zoe Navar (Life/Death, Level 5, ~16 at class start), Mira Ardent (Emotion, Level 5, ~16), Ember Vane (Energy-Light, Level 5, ~14 at class start — made her deal with Namo Consa that same year), and Nina Nexal (Time, age 14, Arai's youngest sister). Over five years, all students advance significantly. Their core alignments cover almost exactly what Clan Consa has determined the Kazemi trial requires: Time, Space, and Life/Death. Toma More's informants identify them. The five prodigies are the target.",
        characters: ['arai', 'hope', 'zoe', 'mira_ardent', 'ember_hist', 'nina'],
        significance: 'critical',
      },
      {
        id: 'academy-attack',
        year: 'Ancient — Pre-Facility',
        title: 'The Academy Attack — The End of the Ascen World',
        description:
          "Toma More organizes the operation: Team 1 (Toma, Sin Surya, Gould Oba, Saga Ouranos) extracts the five prodigies from the Academy; Team 2 (Mapoo Rongo, Deina Wakan, Drum Long) hammers the city as distraction. In the Academy interior: Toma confronts Suu, Sin Surya intervenes. Before Toma can finish, Arai appears — her Time-Lightning core awakens for the first time. Surrounded by Toma, Sin, and twenty More elites, she kills eighteen before Toma and Sin bring her down together. Gran Brime — senior Elder-Sage — fights Saga Ouranos's extraction team and severs one of Saga's arms before being killed by lava bombs. Hope takes Saga's other arm before being subdued. Gould Oba loses both eyes to Sith Caedus in the battle arena before capturing Zoe and Sith. Captured and shipped to the facility: Arai (25), Hope (~21), Zoe (~21), Mira Ardent (~21), Sith Caedus. Nina Nexal is NOT captured — Tenza arrives during the chaos, saves Nina, leaves. Same day: Tenza and Tola kill Tonga Nexal. Ember Vane (19) escapes with Simon Archiver — before dying, Suu (Aevum Vane) transfers his consciousness into Simon. They extract Ember, reach the resistance. First contact with Z — already embedded in Simon's network.",
        characters: ['toma_more', 'arai', 'hope', 'zoe', 'mira_ardent', 'nina', 'tenza', 'ember_hist', 'suu', 'aevum_vane', 'gran_brime', 'saga_ouranos'],
        significance: 'critical',
      },
      {
        id: 'z-captured',
        year: 'Ancient — Pre-Facility',
        title: 'Z Captured — Subject No. 888,888,888: The 1,888,888,888th',
        description:
          "Minia Consa captures Z during a resistance operation. He becomes Subject No. 888,888,888 — the 888,888,888th human put through the trial, but the 1,888,888,888th individual total: one billion from the Primal age and 888,888,887 from the Earth experiments. Minia performs the pre-trial mana saturation to bring his sealed Core to threshold. He laughs at being called '8' — it's his favorite number. His last words: 'I'll put my very soul into this. I won't give up.' Minia's response: 'Sure you won't.' He enters the trial. Kazemi greets him as the 1,888,888,888th.",
        characters: ['minia_consa'],
        significance: 'critical',
      },
      {
        id: 'facility-established',
        year: 'Pre-Facility Era',
        title: 'The Facility — The Five Researchers and the Infinity Trial',
        description:
          "Minia Consa runs the facility on Earth. Five Orian researchers captured in the Academy attack are coerced as facility staff: Arai Nexal (Time, 25), Hope Apolo (Space, ~21), Zoe Navar (Life/Death, ~21), Mira Ardent (Emotion, ~21). Sith Caedus — held as leverage, placed in a newborn infant as punishment. The trial runs for one minute in external time across 37+ trillion subjective deaths. Key milestones: 20 deaths — grammar shifts (death as data); 100B — Dancing Mana; 1T — first blood ('So you can bleed, then you can die'); 10T — Level 6, Kazemi's Primordial forms; 36.2T — first mutual kill; final pause; Irane Kazemi great sword; Enari genuinely defeated for the first time in all existence. Enari chooses to submit voluntarily. 'Live Kazemi' spoken. Spirit Aliya forms in the fractured mind. Arai acts through the 30-second window of the seal she designed with Suu (Aevum Vane), restructuring the last feeling. Wings, tail, horns emerge. Minia says: 'What are you?' The seal closes. The transformation is complete. Irane Kazemi exists.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'minia_consa'],
        significance: 'critical',
      },
      {
        id: 'great-escape',
        year: 'Pre-Year 0',
        title: 'The Great Escape — Irane Breaks Free',
        description:
          "Simon Archiver — an old Vane archivist with extraordinary institutional knowledge of both the facility and the dynasty's history, carrying Aevum Vane's consciousness since the Academy attack — coordinates 12 children with newly-awakened Cores to execute the rescue. Alaiya (the youngest) injects the neutralizing drug. Irane shatters his containment, heals Arai, Hope, and Zoe one by one, and liberates 120 child test subjects. At a sea cliff, golden dragons rise from the water and carry the children to safety. The facility detonates. A golden dragon whispers to Irane: Irane Core Kazemi. He becomes a house. Simon Archiver's true identity — Aevum Vane — is never revealed to the group.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'ember_hist', 'simon_archiver', 'aevum_vane'],
        significance: 'critical',
      },
      {
        id: 'kazemi-soul',
        year: 'Pre-Year 0 — Day of the Escape',
        title: 'Kazemi Soul! — Irane Wakes as Himself',
        description:
          "Six hours after the reincarnation, Irane wakes fully as Irane rather than Lord Kazemi or '8' — Aliya Hallow the first to see him as himself. He keeps his promise to the dying Valariya: her son Urial is placed in Dio's care, his core reserved as Irane's own, with Milla Ores agreeing to carry him to term as surrogate via Iris rather than through any more direct method. Aliya receives a modified Yggdrasil seed carrying a true memory-echo of Valariya — explicitly not her sister returned, only a retrievable memory. Alone afterward, Irane's unresolved self-hatred manifests as Emo cycling into a massive, self-directed Malice/Hatred-Wolf form that turns on Mira Ardent; Dima (Hope's dragon beast) manifests in active combat for the first time to intervene, and Zoe's beast Aphexia separates and grounds both. Hope finds Irane by the tree afterward and draws out the reincarnation-vs-rebirth distinction that defines his relationship to 'Z' going forward: nothing that has ever lived can be returned: what woke up is a new being carrying Z's emotional residue, not Z restored.",
        characters: ['irane', 'aliya_hallow', 'milla_ores', 'urial_ferran', 'mira_ardent', 'hope', 'zoe'],
        significance: 'major',
      },
      {
        id: 'rise-of-apexia',
        year: 'Pre-Year 0 — Founding of Apexia',
        title: "Rise — Kazemi's Empire — The Apexia Empire Founded",
        description:
          "Simon briefs the group on a world that has not stopped moving in their absence: Toma More consolidating the Primals of Heaven, Niro Vane uniting the Orians toward one final war. Irane draws out what Arai, Hope, and Zoe each truly want at their cores and proposes a three-way plan — the three wives return to their birth clans to recover Gaia's and Cronus's lost cores while Irane founds an Empire in Paradise. Ember confronts Arai publicly over the true cost of the seal; the corrected account of its five formative orders finally surfaces. A funeral for Valariya and an invented, deliberately unconfirmed name for 'Z' — Zyiphor — marks Irane's own first order, Forget Yourself, as fully complete. The island founds itself as the Apexia Empire, split between Apexian citizens and Valariyan core-devotees at a ratio Irane neither wanted nor prevented. In Paradise, Mira Ardent and Pandro Lexan publicly unveil Irane in Toma More's own court as the Eighth Champion of Primals and First Emperor of Apexia, forcing a treaty: open travel between Heaven and Paradise, recognition of Apexia as a nation, and legal registration of 'Kazemi' as a clan name. Irane publicly confirms Cai's death to the Primals of Paradise, triages a plague-stricken population of thirteen million, and watches his own myth override his effort to keep the Valariyan tier small the instant his identity is confirmed true.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'mira_ardent', 'pandro_lexan', 'simon_archiver', 'toma_more', 'criya_sin', 'evelyn_more'],
        significance: 'critical',
      },
      {
        id: 'paradise-spell-pre',
        year: 'Pre-Year 0 — First Great War',
        title: 'The First Great War and the Paradise Spell',
        description:
          "The First Great War begins as Irane and the free clans fight the 14 Gods and the Ascen Alliance. In desperation, the Alliance casts the Paradise Spell — designed to merge Earth and the realm of Terra (Orius) into one habitable world. Instead it tears a permanent rift to Limbo, flooding both worlds with uncontrolled Mana. The merged planet is catastrophically uninhabitable. Auris uno-reverses the 14 Gods, completing the corrupted ritual himself. Irane kills Auris and seals his spirit into the Spear of Unix as eternal punishment — the Arke twins lose their primary living-world agent. The Emperor dies — but his Core lives on, sustaining the Valariyans' pocket realm.",
        characters: ['irane', 'auris'],
        significance: 'critical',
      },
      {
        id: 'great-stasis',
        year: 'Pre-Year 0 — 1,000-Year Sleep',
        title: 'The Great Stasis',
        description:
          "The merged world requires 1,000 years to stabilize. Billions of survivors are placed into Mother Nature's and Father Time's inner realms to sleep through the instability. The Valariyans do not sleep — trapped inside the dead Emperor's pocket realm, hunted by his Core's autonomous defense systems, dying and resurrecting endlessly. They emerge after 1,000 years as the most battle-hardened warriors in existence. The world wakes. Year 0 of the Unix World Calendar begins.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'age-of-chaos',
        year: 'Year 0 – Year 130',
        title: "The 130-Year Age of Chaos — Niro Vane's Rise",
        description:
          "Billions wake in an alien landscape with no civilization or governing structure. Violence is immediate and overwhelming. Historical Niro Vane emerges as the most powerful figure, finds the Spear of Unix (briefly), and spends 130 years consolidating authority. Apex (where the Valariyans are) remains dimensionally sealed. Niro gains allegiance of 14 of 17 Noble Treasure holders but cannot complete the coronation ritual without Wov, Osiro, and Kazemi.",
        characters: ['nuro_vane'],
        significance: 'major',
      },
      {
        id: 'great-war-unix',
        year: 'Year 130 – 131',
        title: 'The Great War on Unix — The 1-Year Crusade',
        description:
          "When Apex's dimensional lock finally lifts, Niro immediately seals Irane and strikes Valariya — 4 million Valariyans killed in a single assault. The Kazemi/Wov/Osiro alliance forms. Irane returns. The 1-Year Crusade follows — the bloodiest single year in post-Stasis history. Historical Niro Vane is killed. Approximately 3 billion people die.",
        characters: ['irane', 'nuro_vane', 'summari', 'nighla'],
        significance: 'critical',
      },
      {
        id: 'age-of-lawlessness',
        year: 'Year 131 – 150',
        title: "The Age of Lawlessness — Irane's 19-Year Confinement",
        description:
          "Peace terms: Irane accepts 19 years confined to Valariya as a condition of ceasefire. Without his direct presence, the world enters its most lawless period since the Stasis ended. The three remaining Noble Treasure houses splinter into armed factions. Warlords consolidate control over territory by force. The Vane dynasty, leaderless after Niro's death, fractures internally — with Nuro Vane (surviving heir) beginning the long rebuilding of the dynasty's legitimacy. During Irane's confinement, Arai, Hope, and Zoe work from within Valariya to lay the institutional framework for what will become the Grand Table.",
        characters: ['irane', 'arai', 'hope', 'zoe'],
        significance: 'major',
      },
      {
        id: 'grand-table-founded',
        year: 'Unix Year 150',
        title: 'Grand Table Year 0 — The New World Order',
        description:
          "Irane's confinement ends at Unix Year 150. The Grand Table is formally established: a governing body binding the Four Sovereign Houses (Kazemi, Wov, Osiro, Vane) through biologically-enforced Noble Treasure loyalty. The 18 Noble Treasures are distributed to their bloodline holders. The Grand Table Calendar begins — Year 0 of the current era. The Sol-Nexus world as it exists in the present story starts here.",
        characters: ['irane', 'arai', 'hope', 'zoe'],
        significance: 'critical',
      },
    ],
  },
  // ── First Great War ─────────────────────────────────────────────────────────
  {
    id: 'first-war',
    name: 'First Great War',
    period: 'Year 0 – 478',
    color: '#e84855',
    events: [
      {
        id: 'irane-breaks-free',
        year: 'Year 0',
        title: 'Subject 8 Breaks Free — The First War Begins',
        description:
          "Irane Kazemi shatters his confinement after the facility's failure to contain what he became. The violent liberation ignites the First Great War. The facility's greatest experiment becomes its destroyer.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'paradise-spell',
        year: 'Year ~5',
        title: 'The Paradise Spell — Earth and Terra Fuse',
        description:
          "In a desperate attempt to survive Irane's wrath, the Ascen Alliance casts the Paradise Spell — a mass mind-transference matrix. Earth and the realm of Terra permanently fuse into the Sol-Nexus, a Jupiter-scale hyper-dense planet. Human lifespans expand dramatically due to the metaphysical fusion.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'fenrir-schism',
        year: 'Year ~50',
        title: 'The Fenrir-Chimera Schism',
        description:
          "House Fenrir's eldest daughter, recognizing that her father's fanatical loyalty to a dying status quo will cause their extinction, steals sacred weapon techniques and defects with half the family's forces. Her splinter faction rebrands as House Chimera, carving out an independent nation in the outer rims. Fenrir and Chimera will hate each other with murderous intensity for centuries.",
        characters: [],
        significance: 'major',
      },
      {
        id: 'ascen-defeated',
        year: 'Year ~200',
        title: 'Ascen Alliance Decimated',
        description:
          "The Emperor persona of Irane fully unleashes against the Ascen Alliance. Their forces are decimated. The scale of collateral damage is catastrophic — genocidal in scope. This event will become the source of Irane's guilt-born Conceptual Blindness Curse.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'three-wives-found',
        year: 'Year ~250',
        title: 'Irane Recovers the Three Survivors',
        description:
          "Irane locates Arai, Hope, and Zoe — the three researchers who survived the facility. Their bodies carry the permanent damage of years of experimentation: Arai's nervous system has been systematically destroyed, Hope's heart is failing, Zoe's body is locked in perpetual cellular rot. Irane's relationship with these three becomes the emotional anchor of House Kazemi.",
        characters: ['irane', 'arai', 'hope', 'zoe'],
        significance: 'major',
      },
      {
        id: 'aqura-seized',
        year: 'Year ~450',
        title: 'Aqura Vane "Seized"',
        description:
          "Irane invades House Vane's primary estate and publicly seizes Lord Niro's younger sister Aqura. The world sees it as an act of tyrannical malice. The truth: Irane recognizes that Niro's warmongering will eventually destroy the Vane bloodline, a bloodline required for the Grand Table's planetary stability. Aqura lives in peace in Valariya.",
        characters: ['irane', 'aqura', 'niro'],
        significance: 'major',
      },
      {
        id: 'genetic-pact',
        year: 'Year ~460',
        title: 'Genetic Insurance Pact Formed',
        description:
          "Irane Kazemi, House Wov's leadership, and Lady Ember Osiro form the top-secret Genetic Insurance Pact. Children are secretly exchanged across bloodlines to ensure no house can be fully exterminated. Lord Niro Vane is intentionally excluded — his reckless ambitions make him a structural liability. (House Wov's co-architect was previously named as a legacy figure, \"Lady Vesper Vestarin,\" distinct from the current-arc Vesper Wov; the legacy figure has been removed as no longer relevant, and this role is currently unassigned to a specific individual.)",
        characters: ['irane', 'ember_osiro'],
        significance: 'critical',
      },
      {
        id: 'kazemi-children-born',
        year: 'Year ~300–470',
        title: 'Kazemi Children Born Across Three Matrilines',
        description:
          "Irane's eleven recognized children are born across the three matrilines of Arai, Hope, and Zoe. Each mother's facility damage shapes the personality of their children.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'summari', 'nighla', 'nova', 'aurora', 'iron', 'law', 'nebula', 'eon', 'pixel'],
        significance: 'major',
      },
      {
        id: 'war-ends',
        year: 'Year 478',
        title: 'First Great War Ends',
        description:
          "The war concludes. Irane retreats to Valariya, self-isolating to prevent further bloodshed. The Grand Table's Bounded Laws cannot activate until the next Cosmic Eclipse in 22 years.",
        characters: ['irane'],
        significance: 'critical',
      },
    ],
  },
  // ── 22-Year Cold War ────────────────────────────────────────────────────────
  {
    id: 'cold-war',
    name: '22-Year Cold War',
    period: 'Year 478 – 500',
    color: '#d4af37',
    events: [
      {
        id: 'lawless-era',
        year: 'Year 478',
        title: '"Fed But Feral" — The Lawless Era Begins',
        description:
          "With Irane hidden away and the Inquisition resting, the world has food and water but zero moral oversight. Noble houses openly murder rivals, run black-market mana rings, and steal lesser artifacts with no consequences.",
        characters: ['niro', 'ember_osiro'],
        significance: 'major',
      },
      {
        id: 'niro-kingmaking',
        year: 'Year 478–500',
        title: "Niro's Corrupt Kingmaking",
        description:
          "Lord Niro Vane, as Acting King, deliberately withholds fallen houses' Noble Treasures from worthy successors. Instead he distributes these ultimate weapons to upstart families swearing personal allegiance to House Vane. The balance of the Grand Table is quietly, catastrophically corrupted.",
        characters: ['niro'],
        significance: 'major',
      },
      {
        id: 'kael-conditioned',
        year: 'Year ~485',
        title: "Kael Conditioned as Niro's Shadow Weapon",
        description:
          "Niro subjects his own biological son Kael to severe psychological conditioning, feeding him a singular lie: the Kazemi family are mindless, horrific beasts who want to devour the world. Kael is trained as a shadow assassin and executes high-profile political targets, genuinely believing he is protecting humanity.",
        characters: ['kael', 'niro'],
        significance: 'critical',
      },
      {
        id: 'kael-infiltration-fails',
        year: 'Year 499',
        title: "Kael's Infiltration Catastrophically Fails",
        description:
          "Kael's high-stakes infiltration mission near the Valariya border goes catastrophically wrong. Left broken, bleeding, and stranded inside the empire's energetic barrier with no extraction.",
        characters: ['kael'],
        significance: 'major',
      },
      {
        id: 'nova-nurses-kael',
        year: 'Year 499',
        title: 'Nova Finds Kael — The Truth Begins',
        description:
          "Nova Kazemi finds the stranded Kael and nurses him back to health. Rather than the tyrannical military dictatorship he was conditioned to expect, Kael experiences an organic, community-first utopia. He sees the 'Demon' Irane as a deeply broken father in self-imposed isolation. His brainwashing begins to fracture.",
        characters: ['kael', 'nova'],
        significance: 'critical',
      },
      {
        id: 'kael-identity-reveal',
        year: 'Year 499–500',
        title: "Kael's True Identity Revealed",
        description:
          "Kael meets Aqura Vane in Valariya. Her latent bloodline detection ability triggers a perfect genetic resonance. Irane uses his absolute perception to confirm the staggering truth: Kael is the true biological son of Lord Niro Vane. Niro deliberately hid his identity and turned his own child into a disposable weapon. As a pure-blooded Vane, Kael now holds the legal right to challenge his half-siblings for succession and claim the Ripper.",
        characters: ['kael', 'aqura', 'irane', 'niro'],
        significance: 'critical',
      },
      {
        id: 'vow-of-fifteen',
        year: 'Year 500',
        title: 'The Vow of the Fifteen',
        description:
          "Nova and Kael present the outside world's moral rot to the family. A massive ideological split occurs between the older pragmatists (Summari and Nighla) and the younger idealists. The family resolves this with a sacred, unbreakable pact: 3 Wives + 11 recognized children + the Shadow of the Emperor combine their spiritual essences to form a permanent moral anchor council. They agree to unleash the Emperor — but swear to stand between him and the psychological abyss.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'summari', 'nighla', 'nova', 'aurora', 'iron', 'law', 'nebula', 'eon', 'pixel', 'irane_e_osiro', 'kael'],
        significance: 'critical',
      },
    ],
  },
  // ── Year 500 ────────────────────────────────────────────────────────────────
  {
    id: 'year-500',
    name: 'Year 500 — Prologue Climax',
    period: 'Year 500',
    color: '#9b5de5',
    events: [
      {
        id: 'cosmic-eclipse',
        year: 'Year 500',
        title: 'The Cosmic Eclipse',
        description:
          "The Cosmic Eclipse turns the sky pitch black across the entire Sol-Nexus. Lord Niro Vane's fifteen-year term as High King officially concludes. The Bounded Law of the Grand Table is ready to be activated — but only if Irane returns to lock it in.",
        characters: ['niro'],
        significance: 'critical',
      },
      {
        id: 'coup-launched',
        year: 'Year 500',
        title: 'The Military Coup',
        description:
          "Believing the absent Emperor will never leave his valley, a massive coalition of corrupt Royal Families launches a coordinated, heavily armed military coup to seize the High Throne by force and permanently dissolve the incoming Grand Table rules.",
        characters: ['niro'],
        significance: 'critical',
      },
      {
        id: 'irane-returns',
        year: 'Year 500',
        title: '"Sit Down." — Irane Returns',
        description:
          "The ambient temperature drops to a freezing chill. Atmospheric pressure spikes to crushing degree, forcing elite soldiers to their knees. A spatial rift tears open in the center of the Grand Chamber. Irane Kazemi steps through. He removes the coup leader's head in a single movement. He slams the Spear of Unix into the mosaic floor, permanently locking the Bounded Law into the planet's core. Then: \"Sit down. The law is active. Play by the rules, or I will finish what I started twenty-two years ago.\"",
        characters: ['irane'],
        significance: 'critical',
      },
    ],
  },
  // ── Post-Prologue ────────────────────────────────────────────────────────────
  {
    id: 'post-500',
    name: 'Post-Prologue',
    period: 'Year 500+',
    color: '#06d6a0',
    events: [
      {
        id: 'grand-table-active',
        year: 'Year 500+',
        title: 'Grand Table Goes Live',
        description:
          "The Bounded Laws are now active. The High Decemvirate is formally seated. The real political game begins — houses that played dirty during the lawless era must now answer for their crimes under a fully operational legal framework.",
        characters: ['irane'],
        significance: 'major',
      },
      {
        id: 'kael-vane-succession',
        year: 'Year 500+',
        title: "Kael's Succession Challenge (Upcoming)",
        description:
          "As a pure-blooded Vane heir, Kael returns to challenge his corrupt half-siblings for the House Vane succession and the Ripper. His Aetheric Nullification makes him uniquely dangerous against their Spatial Magic.",
        characters: ['kael', 'niro'],
        significance: 'upcoming',
      },
    ],
  },
]
