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
          'Mana — the first and only being ever simultaneously blessed by both Harmony and Chaos — accidentally kills all three Primordials of Limbo (Kazemi the Universal Dragon, Gaia the Life Force, Cronus the Architect of Time) in a single childhood spell. He did not understand the scale of his own nature. Gaia and Cronus dissolve into their Pillars and reconstitute over eons as Mother Nature and Father Time. Kazemi\'s remains scatter across dimensions. The Primals — who had lost their founding gods — pursue Mana for centuries. He flees into Orius badly injured.',
        characters: ['gaia_primordial', 'cronus_primordial'],
        significance: 'foundation',
      },
      {
        id: 'mana-arke-orius',
        year: 'Ancient — Orian Stone Age',
        title: 'Mana Meets Arke — The Birth of Structured Magic',
        description:
          'An Orian woman named Arke finds the injured Mana and brings him to her community. Watching his instinctive spell use, she systematically formalizes what she observes into repeatable structures — inventing structured magic as a discipline. Mana is astonished. They marry. Arke dies in childbirth bearing twins Vraka and Selis. Mana gives both children her name — the first intentional family surname in Orian history. Last names in the Orian world exist because of this act. Mana, carrying grief and guilt for the Primordials, takes the twins to Limbo and leaves them with the Primals before returning to his hidden space.',
        characters: ['arke'],
        significance: 'critical',
      },
      {
        id: 'limbo-terra-exchange',
        year: 'Ancient',
        title: 'Vethara, Mana the Conceptual, and the Arke Twins',
        description:
          'The Vethara species — native to Limbo — split into two factions through chosen alteration: Ferali (Aura-dominant, beast forms) and Celestials (Force-dominant, tool-forms with ghost bodies). Vraka Arke (Ferali) and Selis Arke (Celestials) are the founding twin — son and daughter of Mana the Conceptual, a Primal and Conceptual of Magic. Mana flees Limbo after accidentally killing Kazemi (the last great Primordial), crosses into Orius, and teaches the Ascen the language of spells. He has twin children with an Orian woman named Arke — who also formalized the structured spell system — then returns to Limbo with the twins after Arke\'s death in childbirth. The twins follow, are accepted by the Primals as coreporial beings, and discover their unique Mana-inversion power: Vraka converts mana into Mana-Aura (manifesting beasts), Selis converts mana into Mana-Force (forging tools). They wage war on the Primals, building armies through forced and voluntary alteration. With a steady mana supply established through Orian contracts, they push the Primals to near-extinction. The Arke twins make a deal with Aeyum Vane — leader of the largest Orian clan and fully informed of every detail of the plan — who agrees in exchange for absolute rulership of Orius and his family line as permanent ruling dynasty. The Vane dynasty is established as the living-world instrument of the Arke twins, managed through their primary agent Auris (an ancient pre-split Vethara).',
        characters: ['volva_vane', 'aevum_vane', 'auris'],
        significance: 'foundation',
      },
      {
        id: 'two-hundred-year-war',
        year: 'Ancient — Orius',
        title: 'The 200-Year War — Birth of Alma, Spirits, and Ascen',
        description:
          'Aeyum Vane — informed of the full plan upfront by the Arke twins through his son Dulla Vane — manufactures wars across Orius. The twins plant beast and tool contracts in two chosen nations: Eura Clan (West, Vraka/Alma) and Chin Clan (East, Selis/Spirits). The war runs 200 years. Six billion people die. Ten billion are born. Women are reduced to social instruments of reproduction; children become soldiers; Core farms breed ability-optimized people. The Vane run forbidden magic: resurrection techniques, body modification, consciousness transfer. At the war\'s end, three peoples emerge: Alma (Eura/West, Aura-dominant 60/40, beast-merge, 20–40 yr lifespan), Spirits (Chin/East, Force-dominant 60/40, tool-merge, 20–40 yr lifespan), Ascen (those who refused contracts, 50/50, 200–300 yr lifespan, max 2 children). Aeyum Vane is "killed" in battle — in truth he transfers his consciousness to a new body and continues ruling from the shadows.',
        characters: ['aevum_vane', 'dulla_vane'],
        significance: 'critical',
      },
      {
        id: 'eva-osiro-born',
        year: 'Ancient',
        title: "Mana's Sacrifice — The First Humans",
        description:
          'Mana the Conceptual discovers what the Arke twins have turned his teachings into. He spends years preparing his answer: a self-sacrificial final spell that creates the first two humans — Eve (Eva Osiro) and Adam — from pure mana shaped into human pattern, untethered from any Vethara covenant. He names the woman Osiro after a Terran lineage he respected. Mana ceases to exist; the universal substance of Limbo-mana is named after him as tribute. Eve and Adam carry no beast-contracts, no tool-contracts, no innate abilities — only free will unclaimed by any covenant system. The 14 Gods (7 Ferali + 7 Celestials, the Arke twins\' most powerful agents) immediately hunt them.',
        characters: ['eva_osiro', 'adam_wov'],
        significance: 'critical',
      },
      {
        id: 'exco-sacrifice',
        year: 'Ancient',
        title: "Exco Wov's Sacrifice — The Crossing to Earth",
        description:
          "With the 14 Gods closing in, Exco Wov — an Ascen who had aided Mana's work — sacrifices himself. He contracts simultaneously with three Supreme Concepts (Time, Space, Life/Death) to tear a dimensional crossing to Earth, a world beyond the 14 Gods' reach. Eve and Adam pass through; the crossing permanently seals their Cores. This sealed-Core trait becomes the inheritance of all humanity. Eve's son Seth Osiro, born before the escape, is left on Orius and immediately captured by the Vane dynasty as a controlled bloodline asset. Three Ascen clans loyal to Mana's cause survive the Gods' purges: Wov (Exco's bloodline, keepers of Mother Nature's weapon), Apolo Clan (Spirit-side, survived by suppressing all powers), Navar Clan (Alma-side, survived the same way).",
        characters: ['exco_wov', 'eva_osiro', 'adam_wov'],
        significance: 'critical',
      },
      {
        id: 'earth-plan',
        year: 'Ancient — Pre-Facility',
        title: 'Earth Discovered — The Conquest Plan and the Counter-Forge',
        description:
          "Generations after Eve and Adam's escape, the Vane dynasty and the 14 Gods (directed by Auris) discover Earth: a world whose humans carry permanently sealed Cores and unique pre-mana life force, unclaimed by any covenant. Auris and the Arke twins see them as perfect hosts for mass Alma/Spirit transfers. Aevum Vane — who had accepted the original deal with full knowledge and watched the cost compound across centuries — secretly commissions the forge of 18 Noble Treasure weapons as the first act of a long debt repayment: 14 to counter the 14 Gods, 2 linked to Mother Nature and Father Time, 1 Spear of Unix, 1 Blade of Absolution. He funds and conceals the operation as a scholarly archival project. Before the final stage, Aevum transfers his consciousness into a new body through a facility procedure and disappears from public record as 'Simon Archiver.' The three Eve-loyal clans (Wov, Apolo, Navar) are identified and captured alongside Niro Vane's daughter Ember (age 13), all shipped to a facility on Earth.",
        characters: ['auris', 'nuro_vane', 'aevum_vane'],
        significance: 'major',
      },
      {
        id: 'facility-established',
        year: 'Pre-Facility Era',
        title: 'The Facility — The Infinity Challenge',
        description:
          "Minia Consa runs the facility on Earth. Three Terra-born researchers are coerced with promises of freedom: Arai (Nexal, age 16), Hope (Apolo, age 12), Zoe (Navar, age 10). The Infinity Challenge is designed to force a compatible human to bond with the Dragon Infinity's Conceptual Core — 9,999 of every 10,000 subjects die. Subject No. 8 survives by removing the concept of death from his own mind, becoming the only successful subject in facility history.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'minia_consa'],
        significance: 'critical',
      },
      {
        id: 'fifty-years-hell',
        year: 'Pre-Year 0 (50-year period)',
        title: 'Fifty Years of Experiments',
        description:
          "Over 50 years, the facility experiments on Subject No. 8 — using Arai, Hope, and Zoe as emotional leverage. Their bodies deteriorate from the strain: Arai's nervous system is systematically destroyed, Hope's heart is failing, Zoe's body is locked in perpetual cellular rot. Arai secretly redirects Subject No. 8's emotional dependency toward the three women — an act of manipulation and survival. In year 49, Nuro Vane's daughter Ember (age 13 when captured) is forced to bear three children with him.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'ember_hist', 'minia_consa'],
        significance: 'major',
      },
      {
        id: 'great-escape',
        year: 'Pre-Year 0',
        title: 'The Great Escape — Subject No. 8 Breaks Free',
        description:
          "Simon Archiver — an old Vane archivist with extraordinary institutional knowledge of both the facility and the dynasty's history — coordinates 12 children with newly-awakened Cores to execute the rescue. Alaiya (the youngest) injects the neutralizing drug. Subject No. 8 shatters his containment, heals Arai, Hope, and Zoe one by one, and liberates 120 child test subjects. At a sea cliff, golden dragons rise from the water and carry the children to safety. Mira is briefly recaptured during the sea crossing but recovered by a golden dragon. The facility detonates. Minia Consa survives the destruction. A golden dragon whispers a name to Subject No. 8: Irane Adam Kazemi. Simon Archiver's true identity — Aevum Vane, the immortal progenitor of House Vane, now in a new body — is never revealed to the group.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'ember_hist', 'simon_archiver', 'aevum_vane'],
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
        title: 'The 130-Year Age of Chaos — Niro Vane\'s Rise',
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
        title: 'The Age of Lawlessness — Irane\'s 19-Year Confinement',
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
  // ── Legacy Pre-War Notes ───────────────────────────────────────────────────
  {
    id: 'pre-war',
    name: 'Pre-War Era',
    period: 'Before Unix Year 0',
    color: '#6c757d',
    events: [
      {
        id: 'cosmic-division',
        year: 'Ancient',
        title: 'Vethara Factions and the Orian Contract System',
        description:
          'The Arke twins — Vraka (Ferali, West/Eura Clan) and Selis (Celestials, East/Chin Clan) — establish two contract factions across Orius through a manufactured 200-year war. Six billion people die; ten billion are born. The biological rewrite produces three new peoples: Alma (Aura-dominant, 20–40 year lifespan), Spirits (Force-dominant, 20–40 year lifespan), and Ascen (50/50, 200–300 year lifespan, max 2 children). The Vane dynasty is installed as the permanent governing class. The 14 Gods — the twins\' most powerful agents — hold authority over all contracts.',
        characters: ['aevum_vane'],
        significance: 'foundation',
      },
      {
        id: 'earth-discovery',
        year: 'Ancient',
        title: 'Earth Discovered — The Conquest Plan',
        description:
          'Auris and the Arke twins locate Earth: a world whose humans carry permanently sealed Cores and unique pre-mana life force, unclaimed by any covenant. The plan: use the Vane dynasty\'s military and the 14 Gods to turn Earth\'s human population into permanent host vessels for Alma and Spirit consciousness transfers. The three Orian clans loyal to Mana\'s legacy (Wov, Apolo, Navar) are identified as threats. All are captured alongside Niro Vane\'s daughter Ember and transported to a facility on Earth.',
        characters: ['auris', 'aevum_vane'],
        significance: 'major',
      },
      {
        id: 'invasion',
        year: 'Pre-Year 0',
        title: 'The Facility — Cross-Dimensional Arrival on Earth',
        description:
          'The Vane dynasty and the 14 Gods execute the first phase of the Earth plan: establishing the facility. Humanity is subjected to experimental trials testing Core-compatibility and consciousness transfer. The Infinity Challenge — designed to find a human host for the Dragon Infinity\'s Conceptual Core — kills 9,999 of every 10,000 subjects. The three captive Orian researchers (Arai, Hope, Zoe) are coerced as facility staff under threat to their people.',
        characters: [],
        significance: 'major',
      },
      {
        id: 'irane-captured',
        year: 'Year -150',
        title: 'Subject 8 Captured',
        description:
          "Irane Kazemi is captured by the facility. Designated Subject 8. The next 50 years of experimentation will shatter his psyche into three permanent operational layers.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'ember-forced-breeding',
        year: 'Year ~-80',
        title: 'Forced Breeding Experiment',
        description:
          "Ember, daughter of the King of Terra, is forced to breed with a pre-awakened Irane to test if his unique core traits can be passed down biologically. She is driven insane by the facility. The experiment produces what will later be known as the Shadow of the Emperor.",
        characters: ['irane', 'ember_hist', 'shadow'],
        significance: 'major',
      },
    ],
  },
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
          "Irane Kazemi shatters his confinement after 50 years of experimentation and war. The violent liberation ignites the First Great War. The facility's greatest experiment becomes its destroyer.",
        characters: ['irane'],
        significance: 'critical',
      },
      {
        id: 'paradise-spell',
        year: 'Year ~5',
        title: 'The Paradise Spell — Earth and Aethelgard Fuse',
        description:
          "In a desperate attempt to survive Irane's wrath, the Ascen Alliance casts the Paradise Spell — a mass mind-transference matrix. Earth and the realm of Terra permanently fuse into the Sol-Nexus, a Jupiter-scale hyper-dense planet. Human lifespans expand from 100 to 300 years.",
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
        id: 'three-wives-facility',
        year: 'Year ~250',
        title: 'Irane Recovers the Three Survivors',
        description:
          "Irane discovers Arai, Hope, and Zoe — three survivors of the facility's neural experiments. Their bodies were permanently damaged: Arai's mind shattered, Hope's heart destroyed, Zoe's body locked in cell-degrading rot. Irane's relationship with these three becomes the emotional anchor of House Kazemi.",
        characters: ['irane', 'arai', 'hope', 'zoe'],
        significance: 'major',
      },
      {
        id: 'aqura-seized',
        year: 'Year ~450',
        title: 'Aqura Vane "Seized"',
        description:
          "Irane invades House Vane's primary estate and publicly seizes Lord Niro's younger sister Aqura. The world sees it as an act of tyrannical malice. The truth: Irane recognizes that Niro's warmongering will eventually destroy the Vane bloodline, a bloodline that is required for the Grand Table's planetary stability. Aqura lives in peace in Valariya.",
        characters: ['irane', 'aqura', 'niro'],
        significance: 'major',
      },
      {
        id: 'genetic-pact',
        year: 'Year ~460',
        title: 'Genetic Insurance Pact Formed',
        description:
          "Irane Kazemi, Lady Vesper Vestarin, and Lady Ember Osiro form the top-secret Genetic Insurance Pact. Children are secretly exchanged across bloodlines to ensure no house can be fully exterminated. Lord Niro Vane is intentionally excluded — his reckless ambitions make him a structural liability.",
        characters: ['irane', 'vesper', 'ember_osiro'],
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
          "Kael meets Aqura Vane in Valariya. Her latent bloodline detection ability triggers a perfect genetic resonance. Irane uses his absolute perception to confirm the staggering truth: Kael is the true biological son of Lord Niro Vane. Niro deliberately hid his identity and turned his own child into a disposable weapon. As a pure-blooded Vane, Kael now holds the legal right to challenge his half-siblings for succession and claim the Rift Cleaver.",
        characters: ['kael', 'aqura', 'irane', 'niro'],
        significance: 'critical',
      },
      {
        id: 'vow-of-fifteen',
        year: 'Year 500',
        title: 'The Vow of the Fifteen',
        description:
          "Nova and Kael present the outside world's moral rot to the family. A massive ideological split occurs between the older pragmatists (Summari and Nighla) and the younger idealists. The family resolves this with a sacred, unbreakable pact: 3 Wives + 11 recognized children + the Shadow of the Emperor combine their spiritual essences to form a permanent moral anchor council. They agree to unleash the Emperor — but swear to stand between him and the psychological abyss.",
        characters: ['irane', 'arai', 'hope', 'zoe', 'summari', 'nighla', 'nova', 'aurora', 'iron', 'law', 'nebula', 'eon', 'pixel', 'shadow', 'kael'],
        significance: 'critical',
      },
    ],
  },
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
          "As a pure-blooded Vane heir, Kael returns to challenge his corrupt half-siblings for the House Vane succession and the Rift Cleaver. His Aetheric Nullification makes him uniquely dangerous against their Spatial Magic.",
        characters: ['kael', 'niro'],
        significance: 'upcoming',
      },
    ],
  },
]
