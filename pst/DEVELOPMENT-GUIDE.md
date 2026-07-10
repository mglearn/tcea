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
`guide.html` (generated by `../breakouts/gen-pd-pages.js`), `policy.html`, this guide, `README.md`,
`assets/pst.css`. **`info/` is git-ignored.**

Every page loads the shared engine `../breakouts/assets/i18n.js` (depth-adjusted `../../assets/…` inside a
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
own hub under `pst/hs-<course>/`. Confirm SEs against `ch113c-0.pdf` before authoring.
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
3. Wire the suite into the PD pipeline: add a `pst` key to `../breakouts/_pd/suite/en.json`, add `pst` to
   `../breakouts/gen-pd-pages.js` `SUITES`, then run `node ../breakouts/build-pd.js && node ../breakouts/gen-pd-pages.js`.
4. Register the suite card in `../breakouts/build-catalog.js` `SUITES` and run `node ../breakouts/build-catalog.js`
   (per-unit search indexing is deferred — units have no lock `CONTENT` for the scanner).
5. **Open every page in a headless browser**: the 🌐 picker renders, switching to a non-English
   language + one RTL language (ar/ur) flips `dir` and translates chrome with **no console errors**;
   `?lang=` deep links work.
6. Once the `ch113` PDFs are confirmed, spot-check every TEKS citation against the source.

---

## 6. PST Project Pack (planned deliverable)

Build a **self-contained PST Project Pack**, modeled on `../breakouts/ctob_project_pack.md` +
`../breakouts/ctob-starter-kit/` + `../breakouts/ctob-starter-kit.zip`, so anyone (or any chatbot) can generate a new
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

## 7. ACE Image Inquiry — historical art-analysis unit (`pst/analysis/`, BUILT & LIVE 2026-07-10)

**Built:** `pst/analysis/{index,gallery,facilitator-guide}.html` + `i18n-analysis.js` (137 keys ×
7 langs). Routine hub (ACE table, step-by-step, exit ticket, rubric, "run it tomorrow"), an
11-painting gallery (each an `.act` card with a verified museum/collection link + TEKS hook +
`⚠️` difficult-history framing per TEC §28.0022), and a facilitator guide. All 11 external links
verified live (Met object IDs checked via the open Met API — Benton *America Today* = 499559;
NGA *Both Members* = artworks/30667; Rockwell *Moon* = airandspace.si.edu image-details/9817).
Wired into the splash as an "Image Inquiry" card + About-panel quick link (`i18n-toc.js`, 7 langs,
now 64 keys). NOT counted by `build-dashboard.js` (it is a routine, not a phase-structured PBL unit).
Original spec below.



A distinct unit type at **`pst/analysis/`**: a short (10–15 min) routine for reading
**American history paintings as historical sources**. Audience: **grades 9–12, AP, IB, dual-credit,
early-college** (TEKS has no "grade 13" — treat as early-college/dual-credit extension). Strongest
TEKS ties: **HS U.S. History Since 1877 (§113.41), AP U.S. History, IB History of the Americas,
U.S. Government (§113.44)** — the standards explicitly encourage artworks/museum resources, primary
& secondary sources, multiple points of view, evaluating sources for validity/credibility/bias, and
communicating a claim with evidence.

**ACE = Articulate → Connect → Extend** (maps to **surface → deep → transfer**; pairs with
high-effect strategies). This is the same ACE through-line as the ACE Powered Jigsaw Organizer.

| ACE step | Student move | Teacher prompt | Student stems |
|----------|-------------|----------------|---------------|
| **Articulate It** (surface) | Describe only what is visible — no lecture first | "List eight things you notice. What is happening in the image?" | "I notice…" · "The first thing my eye goes to is…" · "The artist makes ___ look important by…" |
| **Connect It** (deep) | Link visual evidence to historical context (title/artist/date revealed now) | "What event, issue, era, or TEKS topic does this connect to? What evidence supports that?" | "This connects to ___ because…" · "One detail that supports this is…" · "The artist's point of view may be…" |
| **Extend It** (transfer) | Transfer to a new source/question | "What does this painting leave out? What source would you need next?" | "A source I would need next is…" · "This painting leaves out…" · "A question this raises is…" |

**Student product** — a 3-line exit ticket (Articulate / Connect / Extend). Watch the *Extend* line
most: naming the missing source = thinking like a historian.
**Rubric:** Surface = lists details, no importance · Developing = connects details to the topic with
some evidence · Strong = makes a claim, supports it with visual evidence, and names what the image
leaves out.

**Starter set of paintings (image → TEKS hook):**
- *Washington Crossing the Delaware* (Leutze, 1851) — Revolutionary memory, leadership, AP USH.
- *Declaration of Independence* (Trumbull) — founding documents, Celebrate Freedom Week, art & memory.
- *Signing of the Constitution* (Christy) — constitutional republic, representative gov't, US Gov.
- *American Progress* (after Gast) — westward expansion, Manifest Destiny, displacement, **bias/omission — use carefully**.
- *America Today* (Benton) — industrialization, urbanization, labor, 1920s popular culture.
- *Both Members of This Club* (Bellows) — urban life, Progressive Era, race, law, public/private space.
- *The Passion of Sacco and Vanzetti* (Shahn) — Red Scare, immigration, nativism, civil liberties.
- *The Migration Series, Panel 1* (Jacob Lawrence) — WWI home front, Great Migration, race, labor.
- *Rosie the Riveter* (Rockwell) — WWII, women in the workforce, home-front mobilization, propaganda.
- *The Problem We All Live With* (Rockwell) — civil rights, school desegregation, Brown v. Board, Ruby Bridges.
- *Man's First Step on the Moon* (Rockwell) — Space Race, Apollo, Cold War, science & identity.

**"Run it tomorrow" model:** open with *The Problem We All Live With* (no backstory) → 8 observations
→ reveal title/artist/Ruby Bridges → connect to civil rights/desegregation → "What source would you
need next to understand this event more fairly?" — which turns looking-at-a-painting into building an
investigation.

**Build notes:** reuse `assets/pst.css`, the i18n engine (7 languages), the vetted-resource `.res`
pattern (link the paintings to their museum/collection pages — The Met, Smithsonian, LoC, NPS,
Norman Rockwell Museum — curl/verify each), and honest-history framing (TEC §28.0022) for
*American Progress*, *The Problem We All Live With*, the Migration Series, etc. Cite the ACE routine's
source framing (Carol Jago / K-12 Dive on slow-looking; ACE → surface/deep/transfer). Do not use
copyrighted images directly — **link to the hosting museum/collection page** rather than embedding.

---

## 8. PST Arcade Tickets — entry/exit "games" (`pst/games/`, ENGINE + G5 STARTER LIVE 2026-07-10)

**Built:** reusable engine `games/assets/arcade.js` + `arcade.css` — 4 formats (**mcq**=Beat the
Clock w/ timer, **match**=Quick Match, **sort**=Sort It, **cloze**=Fill the Gap), score/streak/
progress/stars, keyboard-operable, RTL, **nothing stored or sent**. Data-driven from
`games/tickets.js` (`window.PST_TICKETS`); each ticket = `{id, grade, unit, unitTitle, phase, type:
entry|exit, format, teks, strat, d, i18n:{en,…,zh}}` — 7-lang content inline, **answer indices
(`a`, `c`) identical across langs**. Public API `window.PSTArcade.{mount,byId,tickets,fmtLabel}`.
Hub `games/index.html` (filterable catalog + inline player; deep-link `?t=<id>` plays a ticket) and
`games/correlation.html`, both 7-lang inline registers (`pst-games`, `pst-games-corr`). **Starter
set = 6 tickets** for Grade 5 immigration (entry+exit × surface/deep/transfer, all 4 formats).
Entry/exit **pills** (`.tkpill` in pst.css) wired into the immigration phase pages linking
`../../games/index.html?t=…`; label keys `tk.entry`/`tk.exit` added to that unit's i18n-unit.js (7
langs). Splash About-panel link `about.link.games`. `build-dashboard.js` now counts tickets from the
registry (loads tickets.js in a Function sandbox) → 6 tickets; dashboard-data.js regenerated.
**To add more tickets:** append objects to `games/tickets.js` (same shape, 7 langs, preserve `a`/`c`
indices), add pills to that unit's phase pages + `tk.entry/tk.exit` keys, re-run build-dashboard.js.
Original spec below.



Lightweight, **arcade-style entry and exit tickets** for **each unit component** (the surface, deep,
and transfer phases of every unit). They get **their own space** (`pst/games/`) with their
own catalog + correlations, **and** are **linked from where they're most useful** — an *entry* ticket
at the top of each phase page (activate prior knowledge / quick pre-check) and an *exit* ticket at the
bottom (retrieval-practice check for understanding). Bidirectional: phase pages link to their tickets;
the games hub links back to the units.

**Why:** entry/exit tickets are high-leverage retrieval practice — *effects of testing* **d≈0.54–0.63**
and *feedback* **d≈0.62**. Each ticket names its strategy + TEKS, like the activities do.

**Architecture (data-driven — one engine, many tickets):**
- `pst/games/assets/arcade.js` + `arcade.css` — a small reusable **arcade engine** (self-contained,
  no logins, no data collected, keyboard-operable, 7 languages via the shared `assets/i18n.js`, RTL
  for ar/ur, matches `pst.css` look). A handful of reusable **formats**: *Quick Match* (tap/drag
  pairs), *Beat the Clock* (timed multiple-choice), *Sort It* (category sort), *Fill the Gap* (cloze).
  Score/streak/timer for the "arcade" feel; results shown to the student only (nothing stored/sent).
- Per-ticket **content data** keyed to the unit + phase (vocabulary, key facts, claims, the KWHL), in
  a `games/<grade>/<unit>.js` (or per-ticket) data file, English-first with the same 7-language
  dictionary pattern as the units. Each ticket declares: grade, unit, phase, `type: entry|exit`,
  format, TEKS SE(s), effect-size tag.
- `pst/games/index.html` — the **games hub**: catalog of all tickets grouped by grade → unit → phase,
  filterable by grade/type/format; links into each ticket and back to its unit.
- `pst/games/correlation.html` — a **games correlation**: Ticket → Unit → Phase → type → TEKS SE →
  high-effect strategy (retrieval/feedback), mirroring the suite correlation page.
- **Linking:** on each `surface/deep/transfer.html`, add a small "🎮 Entry ticket" pill near the top
  and "🎮 Exit ticket" near the bottom (open the arcade ticket for that phase); the unit hub lists the
  unit's tickets; the games hub and suite splash cross-link.

**Conventions:** same as units — no "confirm before adoption / not legal advice"; `.disc` "aligned to";
accessible + RTL; verified any external links; content English-first then the phased native
translation. **Fold the arcade engine into the PST Project Pack (§6)** as a reusable engine.

---

*Content CC BY 4.0; code MIT. Aligned to the Texas Essential Knowledge and Skills for Social Studies
(19 TAC Ch.113); paraphrased in good faith. Effect sizes from Visible Learning MetaX.*
