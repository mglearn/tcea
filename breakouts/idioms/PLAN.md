# Idioms & Sayings for Multilingual Learners — Plan (Grades 3–12)

A self-contained, browser-based, multilingual resource (in the CTOB model) that teaches **idioms
and sayings** two ways at once:

- **ESL / MLs → English:** decode high-frequency English idioms — literal vs. figurative meaning, in
  context — using each learner's **home language (L1) as an asset**.
- **Multilingual & world-language classrooms:** study idioms/sayings **within and across languages**,
  building metalinguistic awareness.

The engine is **cross-linguistic comparison**: *"English says it this way — how does your language say
it?"* This is the differentiator, and it's exactly what the research supports.

---

## 0. Status & roadmap — continue here

**Live now** (`breakouts/idioms/`, all deployed):
- [x] Suite scaffold + **search-first landing** with a **7-language switcher** (BreakoutI18n, incl. RTL)
- [x] **12 breakouts, fully translated into all 7 languages** (EN/ES/VI/AR/HI/UR/ZH) — 3–5: body, animal, food · 6–8: sports/school, time/money, color/emotion, weather · 9–12: proverbs+Latin, literary (Shakespeare), register/tone, **French idioms (LOTE)**, **Latin roots & sayings (Classical Languages)**
- [x] **Escalating difficulty** on the 6–12 breakouts (context MC → subtle-misconception multi → two-idiom synthesis seq → comprehensive word)
- [x] **Random idiom spotlight** — **66 idioms**, English + Spanish + French, same/different-picture tag; curated from englishstudyonline / 7esl / cogweb proverbs and screened for K–12 appropriateness; optional images auto-display if present (spec in `SPOTLIGHT-IMAGES.md`)
- [x] **Idiom Arcade** — three self-contained arcade games featured below the search on `index.html`: **Match Blitz** (timed matching), **Meaning Meteors** (canvas catcher), **Trap Escape** (literal-vs-real reflex). Shared dataset `games/idiom-data.js`.
- [x] **Teacher-support pages** — `udl.html` / `elps.html` / `guide.html`, generated via the shared PD system (`_pd/suite/*.json` → `build-pd.js` + `gen-pd-pages.js`), all 7 languages
- [x] **Standards alignment page** (`correlation.html`) — ELPS + ELAR + SLAR + LOTE + K–12 appropriateness statement
- [x] **Companion pieces** — printable idiom **card deck** (`cards.html`) and a **"Bring an Idiom From Home"** family/L1 task (`family.html`)
- [x] **Privacy page** (`policy.html`) + **teacher answer key** (`answer-key.html`, password-gated; passcode held by the author, not in the repo)
- [x] Wired into the unified catalog + root launch-page search + RSS

**To do (pick up here, roughly in priority order):**
- [x] **Answer key** regenerated to cover all 12 breakouts (incl. french-idioms, latin-proverbs).
- [x] **Idiom spotlight images** — all **66 of 66 drawn** and in `img/`; auto-displayed by the spotlight (reference: `SPOTLIGHT-IMAGES.md`).
- [ ] **Optional: fuller Phase 1** — g35 has 3 breakouts; add 1–2 more for symmetry with 6–8/9–12 (now 4 / 5).
- [ ] **Optional: more world languages** — extend the FR-style spotlight map (German, Mandarin `zh`, ASL) and add full German/Mandarin breakouts.

**Build commands:** `node breakouts/idioms/build.js` (breakouts + manifest) · `node breakouts/idioms/build-answer-key.js '<passcode>'` (answer key) · `cd breakouts && node build-catalog.js` (site catalog).

---

## 1. Why idioms, and why this design (evidence-grounded)

- **Idioms are a documented barrier and a required standard.** Colorín Colorado classifies everyday
  idioms as **Tier-1 vocabulary** that "can quickly become confusing and frustrating for ELLs" and must
  be explicitly taught. WIDA (2020) places interpreting/expressing figurative language (metaphor,
  simile, **idioms**) at proficiency level ~4.
- **ELPS names idioms directly — and is changing now.** Current ELPS (19 TAC §74.4) expects advanced-high
  ELLs to "use many of the same **idioms** and colloquialisms as their native English-speaking peers."
  The **new ELPS (2026–2027)** expects students to "use context to construct the meaning of **figurative
  language such as idiomatic expressions**." → This resource is standards-timely.
- **The research says leverage L1 + transparency + context.** Cross-linguistic similarity, transparency,
  and supportive context predict L2 idiom knowledge. Best sequence: **teach transparent / L1-similar
  idioms first**, with rich context, then introduce opaque, no-parallel idioms as proficiency grows.
  Translanguaging and inter-linguistic comparison (cognates, shared imagery) raise metalinguistic
  awareness and engagement.

## 2. Standards alignment

| Framework | Hook |
|---|---|
| **Texas ELPS** (current §74.4 + new 2026–27) | Idiomatic expressions / figurative language via context; learning strategies; L/S/R/W domains |
| **TEKS ELAR** | Figurative language incl. idioms (grades 3–8 & English I–IV author's craft) |
| **WIDA ELD 2020** | Figurative language across PLDs; interpretive & expressive modes |
| **World Languages TEKS** (French, Latin, …) | Cultural products/practices/perspectives; proverbs & sayings as culture windows |

## 3. Scope & phasing

- **Phase 1 — English + Spanish (MVP).** The two dominant TX classroom languages; richest cross-linguistic
  payoff. Build the three grade bands here first. *(This scaffold ships the first Phase-1 breakout.)*
- **Phase 2 — complete the 7 suite languages.** Add Vietnamese, Arabic (RTL), Hindi, Urdu (RTL), Chinese
  — reusing the existing 7-language engine.
- **Phase 3 — high-school world languages.** Add **French** and **Latin** (Latin as *sayings/proverbs &
  etymology* — the seedbed of English idioms), with room for German/Mandarin.

## 4. Content architecture (by grade band + difficulty)

Difficulty rises with the research's transparent → opaque path:

| Band | Idiom focus | Sample themes |
|---|---|---|
| **3–5** | Transparent, high-frequency, concrete; literal-vs-figurative | body ("lend a hand"), animals ("copycat"), food ("piece of cake") |
| **6–8** | Content-area & academic idioms; context clues; register | school/sports ("hit the books," "ballpark figure"), money, time |
| **9–12** | Opaque idioms, proverbs, register/tone; etymology; allusion | sayings & proverbs, Latin roots ("carpe diem"), idioms in literature |

Each idiom card carries: **the idiom · literal image · figurative meaning · a sentence in context · the
L1 equivalent · a "same image / different image / no parallel" tag.**

## 5. The cross-linguistic comparison engine (the heart)

Every idiom is presented as a comparison, sorted into three metalinguistic buckets:

- **Same image** — *cost an arm and a leg* → French *coûter les yeux de la tête* / Spanish *costar un
  ojo de la cara* (both: cost an **eye**). "Piece of cake" ↔ French *c'est du gâteau* (**cake** too).
- **Different image, same meaning** — *it's raining cats and dogs* → Spanish *llueve a cántaros* (raining
  **pitchers**) / French *il pleut des cordes* (raining **ropes**).
- **No parallel / culturally unique** — idioms with no clean equivalent → discuss *why* (culture, history).

**Latin** enters as the bridge: proverbs/mottoes that seeded English (*carpe diem, festina lente, in vino
veritas, ad astra*) → etymology + "where our sayings come from," ideal for HS Latin/ELA crossover.

## 6. Activity model (reuses the CTOB engine)

Each unit = a **breakout** on the existing engine (6 clue cards + 4 CLEAR locks), retooled for idioms:

- **`seq`** — order a short dialogue so the idiom makes sense in context
- **`mc`** — pick the figurative meaning (distractor = the literal trap)
- **`multi`** — check the true statements / same-image languages (decoy = a false-friend or word-for-word myth)
- **`word`** — supply the meaning or the L1 equivalent (**language-aware answers**, e.g. `hand`/`mano`)

Plus lightweight companions: an **"Idiom of the Week"** routine, printable **idiom card decks**, and a
**"Bring an idiom from home"** family/L1 task (translanguaging + family engagement).

## 7. Teacher supports & framing

- Reuse the **UDL / ELPS / lesson-plan-guide** support pages and **TEKS correlation** generator.
- **Translanguaging routines** + sentence frames ("In my language we say ___, which means ___").
- **Sensitivity:** some sayings carry cultural/religious content — study as culture, avoid stereotyping a
  language/culture by its idioms.

## 8. Build plan (fits the pipeline — see README.md)

1. Suite lives in `breakouts/idioms/`, reusing `../assets/i18n.js` + `../assets/breakout.js` and a
   `_specs`/`_i18n`/generator pattern (`build.js`) plus a **search-first gateway** (`index.html`).
2. **Phase 1 deliverable:** ~6 breakouts × 3 bands (18), English + Spanish content, each with the
   3-bucket comparison; gateway + correlation + answer key.
3. Add to the **root launch-page search** (`projects.js`) and RSS — same as the Bible/Science suites.
4. Phase 2/3: layer in the remaining languages and French/Latin via `_i18n` files (parallel-agent
   translation).

## Sources drawn upon

- Texas ELPS — 19 TAC §74.4 (TEA / txrules); ELPS Update 2026–2027 (txel.org)
- Colorín Colorado — Vocabulary Instruction; Teaching ELLs
- WIDA English Language Development Standards Framework, 2020 Edition; WIDA Proficiency Level Descriptors
- Idiom acquisition & cross-linguistic similarity (Language Learning Journal); cross-language similarity &
  transparency (ScienceDirect / System)
