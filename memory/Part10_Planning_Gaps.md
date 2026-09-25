# Part 10 Planning — Gap Audit & Cleanup Checklist

**Purpose of this document:** you asked for a pre-Part-10 pass specifically surfacing missing info and characters you haven't accounted for yet, plus a look at future-phase planning — separate from the Part 9.5 review itself, which covers craft and story analysis. This is meant to function as a checklist you can work through to "clean it up and make sure it's perfect" before committing to Part 10 proper. Everything below is organized by category, not by file, so you can work through it in whatever order makes sense to you.

---

## 1. Known Data Bugs — Fix These Regardless of Anything Else

These aren't planning gaps, they're straightforward errors already caught (in one case, by your own inline note in the Part 9.5 draft) that should be fixed before Part 10 builds on top of them.

- **"Web" (Milla Ores's beast) is entered as a Beast in the app, but your own Part 9.5 draft explicitly self-corrects this to a Tool** — the exact line in your notes is `{Note: Alter Web to be Tool note a beast...}`. Currently in `characters.js`, Milla's `beast` field holds Web with a description that says "Kazemi-forged Beast (assigned, not self-forged)." This needs to move to her `weapon` field instead. Small fix, but worth doing before anything else references Web going forward.
- **The Energy-seat transfer mechanism doesn't match its own stated rule.** Covered in the Part 9.5 review (Section 4) — "the loser becomes the new vessel for Mana" is stated as the stakes of the Irane/Aevum Energy-seat duel, but the actual outcome has Mana take Irane Jr.'s body instead of the loser's (Aevum's). Needs a decision: fix the stated rule, fix the outcome, or add the missing beat that explains the discrepancy.
- **The percentage-tier model for Irane's states has now been restated a fourth distinct way** in the Part 9.5 material (1–15/15/16–35/36–49/50/100/0%). This has needed a single reconciliation pass since the Part 9 review and still doesn't have one. Recommend doing this before Part 10 adds a fifth version on top.

---

## 2. Characters Named in Your Notes But Not Yet in the App

Cross-checked against the current `characters.js` — these are mentioned by name in the Part 9.5 material but don't have entries yet:

- **Tina Consa** — the Consa-clan doctor/healer assigned to watch over Irane Jr., who gets a real scene (Irane interrogating her directly, a genuinely dark beat) and reveals that Minia is the one who knows what was done to Junior's core. She's load-bearing enough to a real scene that she probably needs an entry before Part 10, not just a mention.
- **Nuro Vane** (the ritual anchor used in Rhaeg/Solenne's creation, described as Axola's brother, held captive) — worth double-checking this isn't a naming collision with the already-existing `nuro_vane_brother` id from earlier session work, since that character was created for almost exactly this description. If it's the same person, this is just confirming an existing id rather than a new character; if it's meant to be someone distinct, that needs to be stated explicitly since the names are otherwise identical.
- **"Aeva"** — named as the forger of Irane's new blade Ziphora (the great sword, not Yumi's Ziphora — see the naming collision flagged in Section 3) in the Part 10 outline section. No entry exists, and there isn't yet enough detail to build one — flagging as a name to track, not something to build out yet.
- **"Vera"** — the new form Arke takes after being "brought back and sealed away by Mana," per the Purgatory definition. Also just a name at this point, no other detail given.

---

## 3. Naming Collisions to Resolve

- **Two different things are now both called "Ziphora."** Yumi Consa's blade (already in the app, forged from the memories of the human who succeeded in the trial before Kazemi) and Irane Kazemi's own new great sword introduced in the Part 10 outline (forged by "Aeva" from his old blade, meant to channel all elemental cores). These need to be distinguished before both exist in the data at once — either one gets renamed, or there's an intentional connection between them (is Irane's new sword named *after* Yumi's, or vice versa, or is this a coincidence in the draft that needs resolving) that should be decided now rather than discovered as a conflict later.
- **Irane Jr.'s eventual full name/title** — the Part 10 outline renames him "Irane Ziphora Vane Junior" once he becomes leader of House Vane and wields the blade Terminus. Given the Ziphora collision above, this compounds the naming question: does his new middle name reference Yumi's blade, Irane's blade, or something else entirely?
- **"Terminus" is now a third weapon of that name to track.** The app already has Blade Terminus as Clan More's pre-Grand-Table weapon (flagged in earlier session work as potentially the same or a different weapon from a similarly-named one referenced in even earlier Part 10 planning), and now the Part 9.5 material introduces a new blade called Terminus forged during Rhaeg/Solenne's creation ritual, bonded to the Vane bloodline and wielded by Nuro Vane. This needs a firm decision: is this the same Blade Terminus reappearing under new circumstances, or a second, distinct weapon that happens to share a name? If distinct, it needs its own id to avoid the two getting merged by accident later.

---

## 4. Systems That Exist in Your Notes But Aren't in the App Yet

These are genuinely new and well-developed in the Part 9.5 material, not placeholder ideas — worth prioritizing for actual data entry since the design work is already done:

- **The Drive/Will core-mastery system** (5 Drive cores, 5 Will cores, named current masters and trainees) — nothing like this currently exists as structured data anywhere in the app. This is probably the single highest-value thing to add before Part 10, since it retroactively gives several existing thin characters (Milo, Tyler, Jade, Isoke, Adri) real mechanical identity they currently lack.
- **The ten wedding-ring abilities** — same situation. Well-specified, character-specific, not yet reflected anywhere in `characters.js`.
- **The 12-rank Apexia governance hierarchy and city-leadership assignments** (Sethia/Tulla/Hades/Ether plus the 10 named elemental cities) — you have a full list of who leads what and where they're stationed, but this isn't reflected in any location/clan data currently. This would also directly feed the World Map's per-Part location filter built earlier this session, which currently has no way to show "who governs which city."
- **The full 13-squad military structure** — this was already flagged as a "reconcile against the existing Grand Table/Active Ruler tab" task from an earlier session checkpoint that never got done. The Part 9.5 material gives it in much fuller detail now (specific right/left hands for every squad), which makes this more urgent, not less, since there's more to reconcile than there was before.
- **The Grand Royal House criteria** (produce a son and daughter + hold one of 5 seats of Power) and the current 5 qualifying clans — this is a clean, discrete piece of lore that isn't reflected anywhere yet and would slot cleanly into the clan data.

---

## 5. Explicitly Unresolved / Still Being Polished (Do Not Lock Down Yet)

Carried forward from the Part 9.5 review, restated here since this is the checklist document:

- All Vraka/Selis/Gaia/Cronus weapon-wielder assignments except Rhaeg's, Solenne's, and Artemis's (and even Artemis's is self-flagged "temporary").
- The full 15-beings-under-Mana/Purgatory/Energy-seat system — only 5 of 15 seats are even named, seats 1–7/9/10 are complete gaps, and the mechanism itself has the unresolved inconsistency noted in Section 1.
- The entire Part 10 outline section, which ends mid-sentence and is explicitly note-form rather than finished planning.

---

## 6. Questions Worth Answering Before Part 10 Locks

Rather than guessing at these myself, these feel like genuine authorial decisions:

1. **Should Leo and Rui's fate get an on-page discovery scene**, now that the backstory is fully written? Right now a reader/viewer of the app would see the outcome (Leo with Wov, Rui with Consa) with no in-story explanation unless this backstory gets dramatized somewhere.
2. **Is Mana's placement at seat 15 (Space) intentional**, or does it read wrong given Mana is otherwise described elsewhere as the entity behind the Pillars/Purgatory rather than merely one of the 15 seated within it? This might just be an artifact of writing the outline quickly rather than a real intended demotion, but it's worth confirming either way since it has real cosmological weight if it's meant literally.
3. **Does Alex's death in the Part 10 outline's Part 1 section conflict with Aevum (in Alex's body) surviving into Part 3's climax?** The read-through agent flagged this as likely intentional (Aevum relocating bodies, Isaac then his own old body) but it's compressed enough in the outline to be genuinely ambiguous — worth a one-line clarification whenever you next touch that section.

---

## 7. Future-Phase Planning — Beyond Part 10

You mentioned wanting to think about future phases as well. Based on what's already seeded in the data and the Part 9.5/Part 10 material, here's what already exists as forward-pointing material that would need its own planning pass eventually, roughly in likely sequence:

- **Purgatory itself as an explorable arc** — you've said this will be where the 15-beings system gets properly explored, and Irane's 1000-year internal experience there (per the "Irane returns" framing) is a huge amount of unwritten material on its own — likely deserving of its own "Part 10.5"-style intermediate treatment the same way Part 9.5 now sits between Part 9 and Part 10.
- **The post-Energy-seat status quo** — once Irane holds the 8th seat, what changes structurally about Apexia's relationship to the other 14 seats/beings is a big open question with a lot of downstream story potential (diplomatic, cosmological, or both) that isn't touched on at all yet beyond the seat-transfer mechanic itself.
- **The next generation's own arcs once they're adults** — Julia, Sethma, Milo, Tyler, Aura are all currently framed as "training toward mastery," which sets up a natural future phase where they graduate into their own storylines the way Summari/Nighla/Dokia/Urial did this generation. Worth deciding roughly when that handoff happens structurally (during Part 10, or reserved for whatever comes after).
- **The "Grand Royal House" system's long-term implications** — five clans now qualify, with Kazemi's own clan pointedly excluded under its own rules. That's a clean setup for a future succession-crisis or legitimacy-question storyline if you want to use it, but it's currently just a defined rule with no story attached yet.

This last section is meant as a running list to add to, not a commitment to any of it — flagging what's already implicitly set up so it doesn't get lost before you're ready to plan it properly.
