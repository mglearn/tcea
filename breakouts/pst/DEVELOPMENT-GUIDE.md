# Problem-Solving Teaching (PST) — Development Guide

Teacher-facing **Problem-Based Learning (PBL) units** for the Texas history / social-studies
classroom, aligned to the **19 TAC Chapter 113** TEKS. These are **not** Critical Thinking Online
Breakouts — there are **no locks, clues, or answer keys**. Each unit is a multi-day *ill-structured
problem* that students work as **stakeholders** while the teacher guides (Stepien & Pyke, 1997;
Hmelo-Silver, 2004).

> **Status:** All six grades are **built + verified** — one flagship unit each:
> - **G3** §113.14 Communities — *The Town Square Problem* (`grade3/town-square/`)
> - **G4** §113.15 Texas History — *1835: What Should Our Family Do?* (`grade4/1835/`)
> - **G5** §113.16 US History — *A New Life: the Immigration Question, 1914* (`grade5/immigration/`) — the reusable template
> - **G6** §113.18 World Cultures — *The Shared River* (`grade6/shared-river/`)
> - **G7** §113.19 Texas History — *Spindletop, 1901* (`grade7/spindletop/`)
> - **G8** §113.20 US History to 1877 — *Philadelphia, 1787* (`grade8/philadelphia-1787/`)
>
> Next phase: additional units per grade (each grade hub already shows a "more coming" slot), then
> native translation passes for the unit bodies.

Source material lives in `info/` (local only, git-ignored — never deployed): the PBL method
(`pbl.md`, `Problem-Solving Teaching.pdf`), the effect-size evidence (`metax_pst.md`,
`metax_pbl.md`, `CheckEffectSizes.md`, the Saqr et al. 2023 transfer study), the assessment rubrics
(`PBL-problem-rubric.pdf`, `resources-individual-assessment-in-groups.pdf`,
`resources-rubric-tips-on-grading.pdf`), and the TEKS PDFs (`ch113a-d`).

---

## 1. Why this design — the research spine

Problem-Solving Teaching is a high-leverage move: **PST *d* ≈ 0.61**, **PBL *d* ≈ 0.53** (Visible
Learning MetaX). But PBL only pays off *after* students have something to reason with. So every unit
follows the **surface → deep → transfer** progression (`info/CheckEffectSizes.md`):

| Phase | What students do | Example high-effect strategies (*d*) |
|-------|------------------|--------------------------------------|
| **Surface** | Acquire vocabulary + facts | Jigsaw 0.92 · Direct instruction 0.56 · Vocabulary/feedback 0.62 |
| **Deep** | Relate & organize ideas | Concept mapping 0.64 · Argumentation 0.86 · Classifying 0.60 |
| **Transfer** | Apply to a novel real problem | Transfer strategies 0.75 · Problem-solving teaching 0.61 · PBL 0.53 |

**Rule:** the transfer (PBL) activity must be *gated* behind surface + deep. The unit hub and
`transfer.html` say this explicitly and visibly. Do not let students "meet the problem" before they
have the knowledge to reason about it.

**Jigsaw standard (every unit's Surface phase):** the surface jigsaw uses the **ACE Powered Jigsaw
Organizer** for students (Google Drive:
`https://drive.google.com/file/d/1QDMCkQryKHWdo5qCIeQRslXneJcyWhLE/view?usp=sharing`). Each expert
group gets **vetted, grade-appropriate article + video links** (LoC, NPS, HISTORY, etc.) on the
Surface page — one set per topic, `target="_blank" rel="noopener"`, with a "confirm access through
your district" note. Teacher jigsaw how-to lives in the facilitator guide: the **Gamma** guide
(*Implementing the Jigsaw Method*, `gamma.app/docs/...riss443gzf45138`) and the TCEA blog posts
(*The Power of the Jigsaw*, *PBL Your Jigsaw*, *Will Jigsaw help on individual tests?*). Flow:
expert groups → home groups → each teaches → **individual** check for accountability.

---

## 2. The PBL flow inside the Transfer phase (from `info/pbl.md`)

Every transfer page walks Stepien & Pyke's arc:
1. **Meet the Problem** — an ill-structured narrative (real historical/social dilemma).
2. **Take a stakeholder role** — students reason *as* someone inside the problem.
3. **Hunches → Know → Need-to-Know** (feeds a **KWHL** chart).
4. **Inquiry & investigation** — locate, gather, and use sources.
5. **Solution / product** — propose and defend a resolution (assessment happens *during* the
   process, not only at a culminating product).
6. **Debrief** — metacognition on the reasoning and the solution.

A **Map of Possibilities** (teacher pre-planning) and a **Curriculum Map** (problem → TEKS) sit in
the facilitator guide.

---

## 3. Files per unit (the template to copy)

```
grade5/
  index.html              # GRADE HUB: unit list, grade TEKS table, three-phase legend
  i18n-index.js
  immigration/            # a UNIT
    index.html            # UNIT HUB: big idea, driving question, phase map (gated), TEKS,
                          #   teacher prep, timeline/materials, links to every page
    surface.html          # PHASE 1 activities (each tagged with its effect-size strategy + TEKS)
    deep.html             # PHASE 2 activities
    transfer.html         # PHASE 3 — the PBL scenario (the six-step arc above)
    facilitator-guide.html# teacher moves per phase, map of possibilities, role cards, debrief
    assessment.html       # PBL problem rubric + individual-in-group assessment + product criteria
    i18n-unit.js          # chrome dictionary (BreakoutI18n.register)
    locales/immigration.js# window.PST_UNIT structured content (English-first; 7-lang via fallback)
```

Suite-level: `index.html` (splash) + `i18n-toc.js`, `correlation.html`, `udl.html` / `elps.html` /
`guide.html` (generated by `../gen-pd-pages.js`), `policy.html`, this guide, `README.md`,
`assets/pst.css`. **`info/` is git-ignored.**

Every page loads the shared engine `../assets/i18n.js` (depth-adjusted `../../assets/…` inside a
unit folder), has a `[data-i18n-picker]` langbar, and carries the aligned-to / not-legal-advice
disclaimer. **English-first**: author English; the engine serves all 7 languages immediately via
per-key fallback; native `vi/ar/hi/ur/zh` layers are a later pass (same disclaimer as the breakouts).

---

## 4. Grade roadmap (specced — anchors chosen for a strong ill-structured problem)

**Grades 3–5 (§113.A) — build first:**
- **G5 · §113.16 · US History — *A New Life* (BUILT).** 1914 immigration/Ellis Island. Anchors:
  (c)(4)(F) immigrant contributions, (c)(5)(A) industrialization/urbanization, (c)(7)(A) settlement
  patterns, (c)(12)(C) immigration & economic growth, (c)(16)(D) Statue of Liberty, (c)(21) group
  contributions, (c)(23) source-analysis skills, and **(c)(26)(B) — the problem-solving process
  itself** (the TEKS names the PBL arc verbatim).
- **G4 · §113.15 · Texas History.** Candidate: an 1830s settlement / land-grant or Texas-Revolution
  stakeholder dilemma (empresario, colonist, Tejano, Mexican official).
- **G3 · §113.14 · Communities.** Candidate: a local shared-need problem (a growing town must decide
  how to meet a need — water, a park, a market) tied to goods/services and local government.

**Grades 6–8 (§113.B) — next band:**
- **G6 · §113.18 · Contemporary World Cultures.** A world-region resources/economics or migration
  problem across physical geography + human systems.
- **G7 · §113.19 · Texas History.** A deeper Texas dilemma (revolution → statehood → change,
  economics of cotton/cattle/oil).
- **G8 · §113.20 · US History to 1877.** A founding-era or expansion-era problem of rights,
  compromise, and union (constitutional compromise, westward expansion, abolition).

**High School (§113.C) — next band after 3–8.** Course-based, not grade-based; each course is its
own hub under `breakouts/pst/hs-<course>/`. Confirm SEs against `ch113c-0.pdf` before authoring.
- **US History Since 1877 · §113.41.** Candidate anchors: imperialism & the **Panama Canal**
  (T. Roosevelt, "big stick", 1903 Panama independence, the canal-zone question — a rich
  ill-structured stakeholder problem: *should the U.S. build and control a canal across Panama, and
  how?*); also the Progressive Era, the Depression/New Deal, the Cold War, and Civil Rights.
  Reference for the Panama Canal unit:
  `https://www.studenthandouts.com/american-history/apush-readings/0810-panama-canal-americas.htm`
- **World History · §113.42.** A turning-point dilemma (revolution, industrialization, decolonization).
- **World Geography · §113.43.** A resource/urbanization/human–environment problem at global scale.
- **US Government · §113.44.** A constitutional/rights/federalism policy problem.
- **Economics (Free Enterprise) · §113.45.** A market/scarcity/policy trade-off problem.
HS problem-solving anchor SE = each course's social-studies-skills "problem-solving and
decision-making" SE (confirm the exact `(c)(NN)(B)` per course in `ch113c-0.pdf`).

Each new grade/course band should re-confirm the anchor SEs against the `ch113a-d` PDFs before authoring.

---

## 5. Build & verify (do not skip)
1. Author English content for all six unit pages; make the **surface → deep gate** explicit before
   transfer; tag each activity with a **TEKS SE** and a **named high-effect strategy**.
2. Register chrome dictionaries via `BreakoutI18n.register`; keep structured content in
   `locales/*.js` as `window.PST_UNIT`. Author English; other languages fall back per-key.
3. Wire the suite into the PD pipeline: add a `pst` key to `../_pd/suite/en.json`, add `pst` to
   `../gen-pd-pages.js` `SUITES`, then run `node ../build-pd.js && node ../gen-pd-pages.js`.
4. Register the suite card in `../build-catalog.js` `SUITES` and run `node ../build-catalog.js`
   (per-unit search indexing is deferred — units have no lock `CONTENT` for the scanner).
5. **Open every page in a headless browser**: the 🌐 picker renders, switching to a non-English
   language + one RTL language (ar/ur) flips `dir` and translates chrome with **no console errors**;
   `?lang=` deep links work.
6. Once the `ch113` PDFs are confirmed, spot-check every TEKS citation against the source.

---

## 6. PST Project Pack (planned deliverable)

Build a **self-contained PST Project Pack**, modeled on `../ctob_project_pack.md` +
`../ctob-starter-kit/` + `../ctob-starter-kit.zip`, so anyone (or any chatbot) can generate a new
PST unit from scratch without this repo. Deliver three artifacts:

**(a) `pst_project_pack.md`** — the authoring bible. Sections to cover:
1. What Problem-Solving Teaching / PBL is (not a breakout — no locks); the research spine
   (PST *d*≈0.61, PBL *d*≈0.53; surface→deep→transfer) and the effect-size table.
2. **The non-negotiable structure:** surface → deep → transfer, with the transfer problem **gated**;
   the six-step transfer arc (Meet the Problem → stakeholder roles → Hunches/Know/Need-to-Know KWHL
   → inquiry → 8-part solution brief → debrief); the anchor SE = the grade/course's
   "problem-solving and decision-making" TEKS `(c)(NN)(B)`.
3. **Content craft:** how to pick an ill-structured, TEKS-anchored driving problem; stakeholder role
   design; activity tags (effect-size + TEKS); grade-band reading ladder; honest-history framing
   (TEC §28.0022) for slavery/race/contested topics; "aligned to" wording; **no "confirm before
   adoption / not legal advice" disclaimer**.
4. **The files per unit** (index/surface/deep/transfer/facilitator-guide/assessment + i18n-unit.js),
   the grade/course hub, and exact relative paths.
5. **The language engine** (`assets/i18n.js` → `BreakoutI18n`): data-i18n / data-i18n-html, the
   7-language dictionary, per-key fallback, auto-RTL for ar/ur, and the **body-translation mechanism**
   (page-prefixed keys ix./sf./dp./tr./fg./as.; 7-lang parity; typographic quotes; validity checks)
   established in the translation pass.
6. **The jigsaw standard:** ACE Powered Jigsaw Organizer + the Gamma/TCEA teacher guides + the
   vetted per-expert-group source pattern (see [[pst-jigsaw-resources]]).
7. **Vetted-resource rule:** every activity carries a `.res` line; curl/browser-verify every URL
   (note the .gov/.org bot-blockers).
8. **Reused infra:** `assets/pst.css` classes; the PD pipeline (UDL/ELPS/guide via `_pd` +
   `build-pd.js` + `gen-pd-pages.js`); the correlation page; `policy.html`; catalog registration.
9. **Assessment pack** (student solution rubric + Deb Allen individual-in-group + ITUE
   problem-quality rubric) and the facilitator-guide shape (map of possibilities, curriculum map,
   pacing, prompts, sources).
10. Build & verify workflow; palette; and a **copy-paste starter prompt for a chatbot** that
    produces a complete, verified PST unit.

**(b) `pst-starter-kit/`** — a runnable kit: `assets/` (`i18n.js`, `pst.css`, PD cores + `pd.css`),
the PD `_pd/*` JSON + `build-pd.js` + `gen-pd-pages.js`, a `policy.template.html`, a `validate.js`
(checks 7-language key parity + link resolution + no-banned-phrases + gate present), a **worked
example unit** (all 6 pages, one language layered), the ACE-organizer reference, `README.md`, and a
copy of the pack `.md`.

**(c) `pst-starter-kit.zip`** — the zipped kit for download; surface it on the suite splash and in
the top-level `breakouts/index.html` alongside the CTOB starter kit.

Keep it in lockstep with the live suite: whatever conventions the built units use (this guide) are
what the pack teaches.

---

*Content CC BY 4.0; code MIT. Aligned to the Texas Essential Knowledge and Skills for Social Studies
(19 TAC Ch.113); paraphrased in good faith. Effect sizes from Visible Learning MetaX.*
