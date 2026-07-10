# Problem-Solving Teaching (PST) Project Pack

A complete blueprint for building **Problem-Solving Teaching** units: teacher-facing
**Problem-Based Learning (PBL)** activities where students work a real, ill-structured problem as a
**stakeholder** while the teacher guides. Every unit is self-contained (runs in a browser, no logins,
no data collected), ships a **7-language switcher** (English, Spanish, Vietnamese, Arabic, Hindi,
Urdu, Chinese; Arabic & Urdu right-to-left), and is **aligned to** — not reproduced from — a
standards framework (the reference suite targets Texas social-studies TEKS, 19 TAC Ch.113).

> The engine and translations are commodity. The **quality of a PST unit lives in the problem design
> and the surface → deep → transfer sequence** (§2–§4). Read those first.

The reference implementation is the TCEA PST suite: 18 units across grades 3–8 (three per grade) plus a
five-unit High-School US-History course (§113.C), an ACE Image-Inquiry routine, and 138 arcade tickets — all in
7 languages. This pack distills how it is built so you can replicate it in a repo or in any chatbot.

---

## 1. What a PST unit is

- **Problem-Based Learning, not a worksheet or a locked breakout.** Students meet a real,
  ill-structured problem, adopt a **stakeholder** role, define the problem, gather information, weigh
  options, and propose and defend a solution. The teacher **guides rather than tells**
  (Stepien & Pyke, 1997; Hmelo-Silver, 2004).
- **Teacher-facing.** The pages are the teacher's plan + the student-facing activities. There is no
  score engine, no login, nothing stored or sent.
- **A unit is six pages + one dictionary:** a hub, three phase pages, a facilitator guide, and an
  assessment pack — plus `i18n-unit.js` (the 7-language dictionary). See §5.

## 2. The non-negotiable spine — surface → deep → transfer

Every unit builds in this order, and the **transfer (PBL) problem is gated behind surface + deep**:

| Phase | Move | What students do |
|-------|------|------------------|
| **① Surface** | Build knowledge | Vocabulary, key facts, a jigsaw read, map/source work — the raw material to reason with. |
| **② Deep** | Connect & organize | Concept maps, primary-source analysis, points of view, a structured argument. |
| **③ Transfer** | Solve the problem | Meet the problem, take a role, investigate, propose & defend a solution, debrief. |

**Why the order and the gate:** problem-solving is a **transfer** skill — it only pays off once
students have built and organized knowledge. Meeting the problem too early turns inquiry into
guessing. Make the gate explicit on the hub and at the top of the transfer page (a `.gate` block).

**Effect-size grounding (Visible Learning MetaX):** Problem-Solving Teaching *d* ≈ 0.61; Problem-Based
Learning *d* ≈ 0.53; transfer strategies *d* ≈ 0.75. These pay off *after* surface/deep, not instead
of them.

## 3. Content craft — how to write a GOOD unit

### 3.1 The driving question
One **ill-structured, stakeholder-anchored** question with no single right answer. Put a year and a
concrete decision in it. Examples from the reference suite:
- *"The year is 1914. Should the Baldoni family be allowed to build a new life here — and how?"*
- *"It is 1903. Should the United States build and control a canal across Panama — and on whose terms?"*

### 3.2 What goes in each phase
- **Surface** (~1–2 periods): 3–4 fast, front-loaded activities — a vocabulary sort, anchor facts, a
  **jigsaw** reading, map/geography work. Goal is *acquisition*, not analysis.
- **Deep** (~1–2 periods): a **concept map** (cause/effect, push–pull, benefits/costs), **primary-source
  analysis** (question the source, name the point of view), compare perspectives, a **structured
  argument** (claim + evidence).
- **Transfer** (~2–4 periods): the PBL arc (§3.4).

### 3.3 The gate
Don't open the transfer problem until surface + deep are done. State it plainly:
`⛔ Gate: finish the surface and deep activities before opening the problem.`

### 3.4 The PBL arc (inside transfer)
1. **Meet the Problem** — a short narrative that drops students into the situation.
2. **Take a stakeholder role** — 4–6 distinct roles with real, conflicting interests.
3. **Hunches → Know → Need-to-Know** (a KWHL chart) — define the problem, plan the inquiry.
4. **Investigate** — students research the need-to-knows with vetted sources.
5. **Solution product** — a proposal that names the problem, weighs options, cites evidence, and
   states trade-offs.
6. **Debrief & metacognition** — what did we decide, how, and what would we need to know to be sure?
Assessment happens **during** the process, not only at a culminating product.

### 3.5 Stakeholder design
Give each role a genuine stake and a different point of view, so the problem can't collapse into one
"correct" answer. Name the role, its interest, and one source it would cite.

### 3.6 Tag every activity
Each activity names **(a) a TEKS student expectation** and **(b) a named high-effect strategy with its
*d*.** Put them in a `.meta` row: `<span class="es">Jigsaw method · d 0.92</span><span class="teks">§113.16(c)(4)(F)</span>`.
The transfer phase's anchor SE is the standard's **problem-solving / decision-making process** SE —
confirm its exact number against the source standard (in the reference: grade units use
`§113.1x(c)(NN)(B)`; HS US History uses `§113.41(c)(31)(B)`).

## 4. High-effect strategy palette (name the move, cite the d)

| Strategy | *d* | Where it fits |
|----------|-----|---------------|
| Jigsaw method | 0.92 | Surface reading |
| Argumentation / claim–evidence | 0.86 | Deep, Transfer |
| Elaboration & organization | 0.72 | Deep source analysis |
| Concept mapping | 0.64 | Deep |
| Vocabulary & feedback | 0.62 | Surface |
| Feedback | 0.62 | Transfer debrief |
| Problem-solving teaching | 0.61 | Transfer |
| Direct instruction | 0.56 | Surface facts |
| Problem-based learning | 0.53 | Transfer |
| Effects of testing (retrieval) | 0.54–0.63 | Arcade tickets (§12) |

Effect sizes are from the Visible Learning MetaX synthesis. Link strategy names to their MetaX
influence page where you can; verify each slug (a curl 404 can be a bot-block, so trust the MetaX
site over curl).

## 5. Unit file structure

```
<suite>/<grade-or-course>/<unit>/
  index.html              UNIT HUB: big idea, driving question, phase map + gate, TEKS table, prep
  surface.html            ① build knowledge
  deep.html               ② connect & organize
  transfer.html           ③ the PBL problem
  facilitator-guide.html  teacher moves, role cards, debrief prompts
  assessment.html         solution rubric + peer/self group-work form + problem-quality rubric
  i18n-unit.js            the 7-language dictionary (BreakoutI18n.register)
```

Every page loads the **shared** engine and the unit dictionary at the end of `<body>`:
```html
<link rel="stylesheet" href="<path>/assets/pst.css">
...
<script src="<path>/assets/i18n.js" defer></script>
<script src="i18n-unit.js" defer></script>
```
and opens with a langbar + breadcrumb:
```html
<div class="langbar"><span class="globe" aria-hidden="true">🌐</span><div data-i18n-picker></div></div>
<div class="crumb"><a href="../index.html" data-i18n="crumb">‹ …</a></div>
```
Adjust `<path>` to your depth. In the reference suite a unit is two levels under the suite root, so
CSS is `../../assets/pst.css` and the engine is `../../../<shared>/assets/i18n.js`.

## 6. The language engine and the body-translation mechanism

The engine is `assets/i18n.js` → `window.BreakoutI18n`. It resolves language as
`?lang=` → `localStorage` → browser → `en`, renders a `[data-i18n-picker]` dropdown, flips
`dir="rtl"` for Arabic/Urdu, and translates the DOM. **Per-key fallback to English** means you can
ship English first and layer languages in later.

**Two-step translation (the whole trick):**
- **STEP 1 — key the content.** Add `data-i18n="KEY"` (textContent) or `data-i18n-html="KEY"`
  (elements with inline `<b>/<i>/<a>/<br>`) to every human-readable element. Use per-page prefixes:
  `ix.` (index), `sf.` (surface), `dp.` (deep), `tr.` (transfer), `fg.` (facilitator-guide),
  `as.` (assessment), plus shared `crumb`/`nav.*`/`footer`/`disc`. **Never key:** TEKS codes,
  effect-size labels (`d 0.92`), the text inside `.es`/`.teks` spans, phase chips, or URLs.
- **STEP 2 — register the dictionary.** `BreakoutI18n.register('pst-<unit>', { en:{…}, es:{…}, … })`
  with an **identical key set and order** in every language. For `data-i18n-html` values, translate
  only the human-readable text — keep every HTML tag, attribute, and URL byte-identical.

**Dynamic (JS-rendered) strings** (dashboards, arcade, catalogs): don't hardcode English. Build them
with `BreakoutI18n.t('key', {vars})` (interpolates `{var}`) and re-render on the
`breakout-i18n:changed` event.

**Verify every unit (do not skip):**
1. **Parity** — all 7 languages have the identical key set:
   `node -e '…register stub…; check Object.keys per lang === en'` → "PARITY OK".
2. **HTML coverage** — every HTML `data-i18n` key exists in the `en` dict → "ALL HTML KEYS PRESENT".
3. **Render** — headless-load `surface.html?lang=es` (dir=ltr, Spanish h1) and `?lang=ar`
   (dir=rtl, Arabic h1) with no console errors.
`validate.js` in this kit runs checks 1–2 for a unit and for arcade tickets.

**Commit rule:** commit the **whole unit folder** (keyed HTML *and* `i18n-unit.js` together).
Shipping the dictionary without the keyed HTML — or vice-versa — ships a broken unit.

## 7. Framing sensitive or contested topics

Teach difficult history **factually, respectfully, and without inflaming** (Texas educators: TEC
§28.0022). Do not sanitize and do not editorialize — teach the omission. Put a `⚠️` `.note` where a
source carries bias or hard subject matter, and make "what does this leave out?" an explicit move.
The reference suite handles the 1903 secession of Panama, the "in perpetuity" Canal Zone, worker
deaths and racial segregation, westward-expansion displacement, and abolition/reform this way.
**Do not** surface "AI-seeded / pending native review" language on the site — English-first with
per-key fallback is the shipping model, silently.

## 8. Accessibility, color & RTL

- Use **logical CSS properties** (`margin-inline-start`, `text-align: start`) so Arabic/Urdu mirror
  cleanly; the engine sets `dir` for you.
- Keep text on `pst.css`'s light theme readable (black / plum `#4f3a8c` / gold `#b9820c` on white).
- Descriptive `alt` text; keyboard-operable controls; visible focus rings.

## 9. Privacy & compliance

Ship a `policy.html` (template included: `policy.template.html`) covering FERPA / COPPA / SCOPE /
GDPR / CIPA — everything runs client-side, no accounts, nothing collected or sent. Link it from every
footer. Standards are "aligned to," not reproduced from; not legal advice.

## 10. Jigsaw / ACE standard + the vetted-resource rule

- Every surface/deep/transfer activity that sends students to a source uses a `.res` line linking a
  **real, verified** resource (Library of Congress, National Archives DocsTeach, NPS, Office of the
  Historian, museum collection pages). **Verify every external link** — AI drafts invent
  plausible-looking dead URLs; a 404 must be replaced, a 403 from a known host is usually a bot-block.
- The **ACE Powered Jigsaw Organizer** (Articulate → Connect → Extend) is the standard jigsaw
  scaffold; link it and the teacher jigsaw guides.

## 11. ACE Image Inquiry (a reusable routine)

A short (10–15 min) art-analysis routine for reading history paintings as sources:
**Articulate → Connect → Extend = surface → deep → transfer.** Students describe before they are told
(articulate), tie evidence to context once the title is revealed (connect), then name what the image
leaves out and what source is needed next (extend). Ships a painting gallery (each image **linked** to
its hosting museum — never reproduce copyrighted images) and a 3-line exit ticket + rubric. Same
`pst.css`, engine, and honest-history rules.

## 12. PST Arcade — entry/exit retrieval tickets

Lightweight arcade tickets give each phase a 1-minute **entry** (activate prior knowledge) and
**exit** (retrieval check). High-leverage: effects of testing *d* ≈ 0.54–0.63, feedback *d* ≈ 0.62.

- **Engine:** `assets/arcade.js` + `arcade.css` (unchanged, reusable). Four formats — **mcq**
  (Beat the Clock, timed), **match** (Quick Match), **sort** (Sort It), **cloze** (Fill the Gap) —
  with score/streak/stars, keyboard-operable, RTL, nothing stored. API:
  `PSTArcade.mount(hostEl, ticket)`, `.byId(id)`, `.tickets()`, `.fmtLabel(fmt)`.
- **Data:** one file per unit, `games/data/<grade>-<unit>.js`, each
  `window.PST_TICKETS = (window.PST_TICKETS||[]).concat([ …6 tickets… ])`. A ticket:
  `{ id, grade, unit, unitTitle, phase, type:'entry'|'exit', format, teks, strat, d, i18n:{ en:{…}, … } }`.
  Content shapes: `mcq {title,seconds,questions:[{q,choices:[…],a}],takeaway}`;
  `match {title,pairs:[[l,r],…]}`; `cloze {title,items:[{before,after,choices:[…],a}]}`;
  `sort {title,cats:[…],items:[{t,c}]}`.
- **THE translation rule for tickets:** translate the human-readable text into all 7 languages but
  **copy the answer index `a` and category index `c`, and keep `choices` in the same count and
  order, byte-identical across every language.** Reordering choices silently breaks the "correct"
  answer. `validate.js` checks this.
- **Assemble:** `node build-tickets.js` concatenates `games/data/*.js` into the generated
  `games/tickets.js` (do not hand-edit tickets.js). The hub (`games/index.html`) + a games
  correlation load `tickets.js`.
- **Wire:** add an entry `.tkpill` near the top of each phase page and an exit `.tkpill` at the
  bottom, linking `…/games/index.html?t=<id>` (deep-link plays that ticket); add `tk.entry`/`tk.exit`
  label keys to the unit's `i18n-unit.js` (7 languages).

## 13. Correlation + the live dashboard

- **Correlation page:** an Activity → Skill → TEKS → high-effect-strategy table; 7 languages.
- **Dashboard:** `build-dashboard.js` scans the units and emits `dashboard-data.js` (activity counts
  by phase, strategies with *d*, per-grade table, and arcade ticket counts from the ticket registry).
  Re-run it after adding units or tickets.

## 14. Teacher-support pages (UDL / ELPS / lesson-plan guide)

Generated by the PD pipeline. The **cores are generic** (CAST UDL v3.0, Texas ELPS, a lesson-plan
scaffold) — reuse them unchanged. Only `_pd/suite/en.json` is suite-specific (it carries a `pst` key
with `common`/`udl`/`elps`/`guide` overrides). Workflow:
```bash
# edit _pd/suite/en.json (your suite key + wording); to ship 7 langs add es/vi/ar/hi/ur/zh beside each en.json
node build-pd.js       # → assets/*-core-i18n.js + assets/pd-suite-i18n.js
node gen-pd-pages.js   # → <suite>/udl.html, elps.html, guide.html   (set the SUITES map first)
```
Link the three pages from the unit hubs / the correlation page / an "About" panel.

## 15. Suite shape

- **Grades 3–8:** a grade hub per grade (`<suite>/grade<N>/index.html`) listing that grade's units.
- **High School (§113.C):** course-based — a hub per course (`<suite>/hs-<course>/index.html`), units
  inside. Confirm each course's problem-solving-process SE against the standard before authoring.
- **Splash:** a suite landing page grouping the bands (elementary / middle / high-school courses /
  image inquiry) with an "About this strategy" panel (what PBL/PST is, why surface→deep→transfer,
  quick links to the ACE organizer, correlation, dashboard, arcade, and teacher supports).

## 16. Build & verify workflow (do NOT skip)

1. Author English for all six unit pages; make the surface→deep→transfer gate explicit; tag each
   activity with a TEKS SE + a named strategy (with *d*).
2. Key the content (STEP 1) and register the `en` dictionary.
3. **Verify links** — curl/browser every external URL; replace 404s.
4. Translate to 7 languages (STEP 2); run `validate.js` (parity + HTML coverage).
5. Headless-render `surface.html` in `en`, one non-English (`es`), and one RTL (`ar`) — no console
   errors, correct `dir`, translated `h1`.
6. Add arcade tickets (§12), wire pills, `node build-tickets.js`, `node build-dashboard.js`.
7. Add the unit to its grade/course hub and the splash; regenerate PD pages if the suite key changed.
8. Commit the **whole unit folder** together.

## 17. Palette (`pst.css` variables)

`--navy:#2a2a6c · --plum:#4f3a8c · --gold:#e0a418 / --gold-d:#b9820c · --paper:#f5f4fb · --ink:#1b1f3b`.
Learning phases: `--surface:#2f6fe0 · --deep:#7c4fbf · --transfer:#c2410c` (each with a light `-bg`).

## 18. Copy-paste starter prompt for a chatbot

> Build a **Problem-Solving Teaching (PST)** unit about **<TOPIC>** for **<GRADE/COURSE>**, following
> the **PST Project Pack**. It is teacher-facing Problem-Based Learning — NOT a quiz or a locked
> breakout. Reuse the shared `assets/i18n.js`, `assets/pst.css`, `assets/arcade.js`/`arcade.css`
> unchanged. Produce **six pages** — `index.html` (hub with the driving question, a three-phase map,
> and an explicit surface→deep gate), `surface.html`, `deep.html`, `transfer.html`,
> `facilitator-guide.html`, `assessment.html` — plus `i18n-unit.js`. Build **surface → deep →
> transfer**, with the **PBL problem gated behind surface + deep**: surface = vocabulary + anchor
> facts + a jigsaw read + map/source work; deep = a concept map + primary-source analysis + a
> claim-evidence argument; transfer = Meet the Problem → 4–6 **stakeholder** roles → Hunches/Know/
> Need-to-Know → investigate → a solution product → debrief. **Tag every activity** with a real TEKS
> student expectation and a **named high-effect strategy with its *d*** (jigsaw 0.92, argumentation
> 0.86, concept mapping 0.64, vocabulary/feedback 0.62, problem-solving teaching 0.61); the transfer
> phase's anchor SE is the standard's problem-solving/decision-making process SE. Frame difficult
> history factually and respectfully (TEC §28.0022) — teach the omission, add a ⚠️ note, never
> sanitize. Link only **verified, real** sources (`.res` lines) — do not invent URLs. **Key the body**
> with `data-i18n`/`data-i18n-html` (page prefixes `ix./sf./dp./tr./fg./as.`; never key TEKS codes,
> effect-size labels, `.es`/`.teks` spans, or URLs), register an **English** dictionary, then
> translate into Spanish, Vietnamese, Arabic, Hindi, Urdu, and Chinese with an **identical key set/
> order per language** and HTML tags/URLs untouched. Optionally add six **arcade tickets** (entry+exit
> × the three phases) in `games/data/<unit>.js` — translate the text but **copy the answer index `a`,
> category index `c`, and choice order byte-identical across all languages** — and wire entry/exit
> pills onto the phase pages. **Verify before declaring done:** dictionary parity across all 7
> languages, every HTML key present in the English dict, and a headless render of the surface page in
> English + one non-English + one RTL language with no console errors.

---

*Distilled from the TCEA Problem-Solving Teaching suite (18 grades-3–8 units + a five-unit HS US-History course,
an ACE Image-Inquiry routine, and 138 arcade tickets — all 7 languages, each with UDL/ELPS/lesson-plan
teacher-support pages). Content CC BY 4.0; code MIT. Standards are "aligned to," not reproduced from,
official standards — confirm before adoption; not legal advice.*
