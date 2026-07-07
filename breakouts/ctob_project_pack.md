# Critical Thinking Breakout Project Pack

A reusable blueprint for building **self-contained, browser-based educational
"breakout" activities** (Critical Thinking Online Breakouts — CTOBs) — no accounts,
no server, no data collection — with a built-in **7-language switcher** (English,
Spanish, Vietnamese, Arabic, Hindi, Urdu, Chinese; Arabic & Urdu right-to-left).

Hand this whole file to a chatbot along with the three shared assets
(`assets/i18n.js`, `assets/breakout.css`, `assets/breakout.js` — plus `assets/pd.css`
and `assets/pd-supports.js` for the teacher-support pages in §12) and it has
everything needed to produce a new, polished, standards-aligned breakout suite.
A ready-to-run copy of the engine, the build pipeline, the reusable teacher-support
cores, and a complete working example ships in **`ctob-starter-kit/`**.

> **Read §2 (Content craft) before writing anything.** The engine and translations
> are commodity; the *quality* of a CTOB lives entirely in the clue/lock writing.

---

## 1. What a critical thinking breakout is

A single HTML page where a student:
1. Opens a board of **6 clues** (short, tappable cards; exactly one is a decoy).
2. Solves **4 locks**, each answerable *only from the clues*.
3. Gets a short **"why"** explanation on each solved lock (reasoning sticks, not just the answer).
4. Sees a celebratory **win** screen when all four are open.

Design philosophy: reward *"prove it from the clue"* thinking. Students separate
**relevant evidence from true-but-irrelevant facts**, and separate **what a text says
from what a reader believes**. Every lock ends with a one-sentence rationale that
*names the thinking move*.

---

## 2. Content craft — how to write a GOOD breakout

This is the section that determines quality. A structurally valid breakout that is
pedagogically flat is a failure.

### 2.1 The clue set (exactly 6 cards)
- Each clue: `ico` (one emoji), `nm` (1–3 word name), `title` (short), `body` (2–4 sentences).
- Clues must **collectively contain everything needed** to solve all four locks. No lock may
  require outside knowledge.
- **Include exactly one decoy**: a clue that is *true but off-topic* — a fun fact from an
  unrelated domain (an animal fact, a weather record, a materials-science detail). It should
  be tempting but provably irrelevant to what the texts/topic are teaching. One lock must
  force students to exclude it.
- Order clues so the narrative/logic builds; number references in locks (e.g. "According to
  Clue 5…") should match.

### 2.2 The four locks — use ONE OF EACH TYPE
For pacing and skill variety, a strong breakout uses **one `seq`, one `mc`, one `multi`, one
`word`** (see §3). Order them for a good arc (often: an ordering/identification lock first, the
evidence-sort `multi` in the middle, a naming `word` lock to close).

- **`multi` is the heart of critical thinking.** Give it **4 items: exactly 3 `strong:true`
  + 1 `strong:false`** (the decoy). The prompt asks students to "check ONLY the strong
  evidence and leave out the true-but-off-topic one."
- **Every lock's `reason` names the move**: "Reading in order is how we follow a story,"
  "Strong evidence is only what actually supports the claim," "Separating textual fact from
  interpretation is the heart of academic study." This makes the CLEAR step explicit and is
  what students should be able to articulate.

### 2.3 Grade-band skill ladder
Pitch the reasoning to the band. A proven progression:

| Band  | Reading level | Skill focus (what the locks train)                                          |
|-------|---------------|-----------------------------------------------------------------------------|
| K–2   | ages ~5–8     | **sequence**, story-vs-fact, close listening, **naming the source**         |
| 3–5   | upper-elem.   | **theme** (often shared across texts), **evidence gathering**, counter-example, source/context |
| 6–8   | middle        | **genre**, grounded **claim**, literary **technique/rhetoric**, **connection** to another text |
| 9–12  | high school   | **archetype**, **allusion**, **textual fact vs. interpretation**, why a text is studied academically |

Keep K–2 language warm and short; keep 9–12 analytically demanding (name devices, trace
allusions, hold the fact/interpretation line).

### 2.4 Answer-writing rules (avoid silent gameplay bugs)
- **`word`**: keep answers short and **lowercase**; the engine trims + lowercases input.
  Include reasonable variants **and an English fallback** (e.g. `["génesis","genesis"]`,
  `["التكوين","تكوين","genesis"]`) so a student typing in their language *or* English succeeds.
- **`seq`**: list `pads` in a **shuffled** display order; `answer` holds the correct key order.
  Keep an emoji prefix in each pad label. 3 pads is typical; 4 is fine for a longer story.
- **`mc`**: 3 options; the two distractors should be *plausible-but-unsupported* (pulled from a
  detail or a common misread), not silly.
- Give every clue an `id` (`c1…c6`) and every lock an `id` (`L1…L4`). A missing `id` renders
  nothing — and only a real-browser solve will catch it (see §15).

---

## 3. The five lock types

| type   | UI                              | data fields                                             |
|--------|---------------------------------|---------------------------------------------------------|
| `digit`| numeric boxes (dates, counts)   | `len`, `answer:['1852']` (Western numerals)             |
| `word` | free-text input                 | `answer:['rochester', …localized + English spellings]`  |
| `mc`   | multiple-choice buttons (auto)  | `options:[…]`, `answerIndex:1`                           |
| `multi`| evidence sort (check all right) | `items:[{t,strong:true/false}]` (3 true + 1 false)      |
| `seq`  | tap in order                    | `pads:[{k,e,c}]`, `answer:['k1','k2',…]`                |

`mc`, `multi`, `seq`, `digit` are **click/number based** → identical logic in every language
(only labels translate). `word` needs language-aware answers.

### Data schema (per breakout, per language)

```js
window.BREAKOUT = {
  id: 'bible-k2-noah-ark',
  band: 'K–2',                                     // optional but handy for manifests
  confetti: ['#054c8c','#2f6cae','#fbd239', …],    // optional win colors
  UI: {                                            // flat data-i18n keys, per language
    en: { 'header.h1':'…', 'brief.p':'…', 'ui.check':'Check', 'fb.mc':'…', … },
    es: { … }, vi:{…}, ar:{…}, hi:{…}, ur:{…}, zh:{…}
  },
  CONTENT: {                                       // structured clue/lock data, per language
    en: {
      clues: [ {id,ico,nm,title,body}, … 6 items, one a decoy … ],
      locks: [ {id:'L1',type,color,title,q,answer/options/items/pads,reason}, … 4 … ]
    },
    es: { clues:[…], locks:[…] }, …               // may be omitted → falls back to en (see §5)
  }
};
```

**Gameplay-critical fields must be IDENTICAL across languages** — `id`, `ico`, `type`, `len`,
`color`, `answerIndex`, item **order + `strong`**, seq **`pads[].k` + `answer` order**, `digit`
`answer`. Translate only text: `nm, title, body, q, reason, options[], items[].t, pads[].e`, and
the localized `word` answers. A generator that zips translated text onto the English structure
(§7) guarantees this automatically.

---

## 4. The language engine (`assets/i18n.js` → `BreakoutI18n`)

- **7 languages**, Arabic + Urdu are RTL (sets `<html dir="rtl">`).
- Resolution order: **`?lang=` query** → `localStorage['tcea.breakouts.lang']` → browser → English.
  The query param wins, so **`…student.html?lang=es` deep-links a page straight into Spanish.**
- Auto-builds a `<select>` from `<div data-i18n-picker></div>`.
- Static chrome uses attributes: `data-i18n` (textContent), `data-i18n-html`,
  `data-i18n-placeholder/title/aria-label/alt`.
- **Entities vs. textContent — a real bug class.** A `data-i18n` value is written via
  `textContent`, so it must hold **literal characters, never HTML entities**: use `"Skills & TEKS"`,
  **not** `"Skills &amp; TEKS"` (the latter renders the literal text `Skills &amp; TEKS`). Only
  `data-i18n-html` values (and inline HTML) may carry `&amp;`/`&lt;`/`&gt;`. The same rule applies to
  any card built in JS through an `esc()` helper (catalog/library grids): `esc()` re-escapes `&`, so
  its source strings must be raw (`&`) — an `&amp;` in the data double-escapes to `&amp;amp;`. When you
  capture text out of existing HTML to seed a dictionary, **decode entities first**. Rule of thumb: if
  a value contains no `<tag>`, it should contain no `&amp;`.
- `BreakoutI18n.t('key',{vars})` for JS-built strings (`{n} of {total}`).
- Fires `breakout-i18n:changed` so dynamic UI (clue/lock boards) re-renders.
- `BreakoutI18n.extend(widgetKey, dict)` **merges** extra keys into an already-registered
  dictionary (per language) without clobbering it — used to drop localized links (e.g. the
  teacher-support labels in §12) onto a page whose main dictionary was registered elsewhere.

**Fallback is graceful and load-bearing** — this is what makes "English now, translate later"
viable: UI keys fall back to English (`dict[lang] || dict.en`), and `breakout.js` uses
`CONTENT[lang]` only when it has clues, else `CONTENT.en`. So you can ship high-quality English
content that *works in all 7 languages immediately*, then layer native translations in later.

**Page skeleton** (student breakout): inline `:root` palette → `breakout.css` → `data-i18n`
chrome + containers (`#clueGrid #locks #lockdots #pcount #resetBtn #modalBg #modal #win
#winReplay #confetti`) → then, in order:
```html
<script src="<slug>.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
```

---

## 5. Recommended build pipeline — specs + translation files + a generator

Hand-writing 7-language locale files is error-prone. The reliable pattern (proven on the 31-
breakout Bible suite — every K–12 required-list Bible item, in 7 languages):

1. **English spec files** — one compact JSON array per band holding pure English content
   (`_specs-<band>.json`): each breakout is `{slug,h1,sub,brief,win,clues[6],locks[4]}` with **no
   ids/colors** (the generator injects them).
2. **Translation files** — one per breakout (`_i18n-<band>-<slug>.json`): `{es:{chrome,clues,
   locks}, vi:{…}, …}` carrying **only translated text**, arrays in the same order/count as English.
3. **A generator** (`build-more.js`) reads both, injects ids/colors/palette/shared UI, **zips**
   translated text onto the English structure (preserving all gameplay fields), and writes the
   `window.BREAKOUT` `.js` + the student `.html` + a **manifest** (`window.SUITE_LIB` + per-language
   `window.SUITE_LIB_<LANG>`) used by landing/library pages.

Benefits: content lives in one place, boilerplate is generated, translations can't corrupt
gameplay fields, and everything is reproducible (`node build-more.js`).

### Translation authoring (parallel agents work well — one breakout each)
- Give each agent the English spec + the exact output schema + the grade-band reading level.
- **JSON-SAFETY RULE (critical):** inside any translated string, **never use a straight ASCII
  double-quote (`"`)** — it breaks the JSON. Use the language's typographic quotes instead
  (Chinese `“ ”` / `「 」`, Spanish `« »`, Arabic/Urdu `« »` / `“ ”`). Straight apostrophes are
  fine. (Unescaped `"` in Chinese strings was a real failure mode.)
- Keep every array the **same length and order** as English so it zips back cleanly.
- Translations are AI-generated. Surfacing a "pending native-speaker review" disclaimer to end
  users is **optional and off by default** (TCEA chose to omit it); note review status in repo
  docs instead if needed.

---

## 6. Multilingual showcase pages (shareable per-language URLs)

To "show off" translations, generate **one landing page per language** (`es.html`, `vi.html`,
`ar.html`, `hi.html`, `ur.html`, `zh.html`) from the per-language manifest. Each page:
- Has fully localized chrome (title, intro, tallies, footer); Arabic/Urdu set `dir="rtl"`.
- Lists every activity by band with **native-language titles**, each linked `…student.html?lang=<code>`
  so it opens in that language.
- Cross-links the others via a small **language bar**.

In the main nav, collapse languages into a compact **`<select>` dropdown** (not a row of links)
so the header doesn't overflow. Drive it with `onchange="if(this.value)location.href=this.value"`.

### 6.1 Landing-page IA — search-first, split the heavy stuff out

Once a suite grows past ~10 activities the landing gets long. Two patterns keep it usable:

- **Search-first, results-on-demand.** Give the landing a search box that filters the library by
  title, topic, source text, and grade — but **render no result cards until the user types or picks a
  filter** (show a one-line prompt instead, or the few *featured* items). Dumping the whole grid on load
  buries everything else and reads as clutter. Back the search with a small per-item **keyword string**
  (source reference + concept + required-list name) so a search for a concept that isn't in the visible
  title/blurb (e.g. "humility", "anxious") still finds it. Add grade-band **filter chips** with
  free-text synonyms ("grade 4" → the 3–5 band, "high school" → 9–12).
- **Split long explainer sections into their own pages.** Keep the landing to hero + a searchable
  library; move framing / method / strategies / correlation onto dedicated pages reached from a row of
  numbered **nav pills**. Extract shared styling to one CSS file and the search logic to one JS file,
  mode-flagged (`search` = hidden until active on the gateway; `browse` = show all on the library page)
  so both reuse the same code.

---

## 7. Framing sensitive or contested topics

CTOBs often touch material that must be handled with care. Match the framing to the topic.

### 7.1 Slavery, racism, U.S. history (Texas — TEC §28.0022)
Present injustice as **"deviations from, betrayals of, or failures to live up to the authentic
founding principles of the United States, which include liberty and equality"**
(§28.0022(a)(4)(A)(viii)), explored **objectively and free from political bias** (§28.0022(a)(2)).
- Frame injustice as the nation *failing to live up to* its ideals — not as proof those ideals
  are false (Frederick Douglass's 1852 address models this).
- Foreground primary-source evidence; avoid assigning present-day guilt by identity.
- Add a red-bordered **"Texas framing (TEC §28.0022)"** note to teacher/policy/correlation pages.

### 7.2 Religious texts, studied as literature (academic, not devotional)
When a suite studies scripture (e.g. Texas-adopted Bible stories), study it **academically — as
story, genre, theme, archetype, allusion, history — never devotionally**:
- No prayer, no truth claims, no "what this means for your faith." Attribute *within* the
  narrative ("in the story, God…"); never assert religious claims as fact.
- Teach the **textual-fact vs. interpretation** line explicitly. Where a text and a common
  interpretation diverge, have students **notice the gap, not resolve it**.
- Keep it **inclusive of students of every faith and none**. Cite the legal basis: *Abington
  School District v. Schempp* (1963) permits objective study of the Bible for its literary/historic
  qualities; note the agency states the same for adopted materials.
- **Bible-connected ≠ biblical.** A required list may pair scripture with **modern works that echo a
  biblical value but are not scripture** (e.g. Kindergarten's *You Are Special* by Max Lucado and *The
  Berenstain Bears and the Golden Rule*). If you build a breakout on one, **label it explicitly** as a
  modern allegory/story studied as literature — in its intro, its source clue, and the correlation —
  so it is never mistaken for the biblical text itself.

### 7.3 Always
Standards are **"aligned to"** TEKS/CCSS strands — never reproduce official standard text. State
that + "good-faith, paraphrased; confirm before adoption; not legal advice."

---

## 8. Accessibility, color & RTL

- **Contrast:** never dark-text-on-dark or light-on-light. Verify large accent numerals/letters
  too (they still need ~3:1 on their background).
- **Beware CSS-variable drift:** if a theme's variable *names* imply a dark theme but their
  *values* are light (a converted theme), regions that kept dark backgrounds end up pulling
  dark text → invisible. Check each region's background against the color it actually resolves to.
- **RTL:** use **logical CSS properties** (`margin-inline-start`, `border-inline-start`,
  `text-align:start`) so Arabic/Urdu mirror correctly; put directional arrows into the translated
  string (`→` vs `←`).
- **Images/infographics:** give full **descriptive alt text** (spell out the content, not "an
  image"), and add `onerror="this.closest('figure').style.display='none'"` so a missing asset
  never shows a broken-image icon on the live site.
- Keep icon glyphs decorative (`aria-hidden`) with text alternatives; semantic headings; keyboard-
  operable locks.

---

## 9. Privacy & compliance (every suite)

Collect **nothing**: no accounts, logins, analytics. Session state lives only in the browser. The
single outside request is Google Fonts (removable by self-hosting for zero egress). Ship a
`policy.html` mapping this to **FERPA, COPPA, the Texas SCOPE Act, TEC §32.151–32.156, GDPR,
CIPA**, plus a VPAT-lite accessibility statement. Set `<meta name="referrer" content="no-referrer">`
on every page.

---

## 10. Teacher answer key (AES-256, client-side)

One password-protected `answer-key.html` per suite decrypts all breakouts' answers in the browser
(password never sent anywhere). **Generate it from the breakout files** so it always covers every
breakout, and **pass the password at run time — never commit it:**

```js
// node build-answer-key.js '<password>'   (password from argv/env, NOT hardcoded)
// PBKDF2-SHA256 (250k) → AES-256-GCM; ct = ciphertext || 16-byte tag, all base64
const salt=crypto.randomBytes(16), iv=crypto.randomBytes(12), iter=250000;
const key=crypto.pbkdf2Sync(Buffer.from(pw),salt,iter,32,'sha256');
const c=crypto.createCipheriv('aes-256-gcm',key,iv);
const enc=Buffer.concat([c.update(Buffer.from(plaintextHTML,'utf8')),c.final()]);
const payload={salt:b64(salt),iv:b64(iv),iter,ct:b64(Buffer.concat([enc,c.getAuthTag()]))};
```
The page's inline script mirrors it: `importKey('PBKDF2')` → `deriveKey(AES-GCM)` → `decrypt` →
inject HTML. Rotating the password = re-run the builder with the new value. Add a line telling
teachers **how to request the passcode** (e.g. a linked Google Form) on the gate and the landing
"For teachers" note. Keep the key page unlinked from student pages.

---

## 11. Correlation guide

`correlation.html` covers **every** breakout (generate it — don't hand-maintain). Group by band;
per breakout, a table: **Lock | Skill | ELAR strand (aligned to) + citation | CLEAR focus +
effect-size strategy**. CLEAR = Claim · Lens · Evidence · Alternatives · Response. Use band-
appropriate TEKS families (K–2 §110.2–4, 3–5 §110.5–7, 6–8 §110.22–24, 9–12 §110.36+), and name a
high-effect-size move per lock from Hattie's *Visible Learning* (Feedback d≈0.70, Classifying/
sorting d≈0.60, Concept mapping d≈0.64, Transfer d≈0.86, Advance organizers d≈0.42, etc.). Include
the citations disclaimer and the relevant framing callout (§7). A marker-based generator
(`<!--CORR:START/END-->` + inline DATA, titles read live from the breakout files) keeps it in sync.

---

## 12. Teacher support pages — UDL, ELPS & lesson-plan guides

Beyond the breakouts themselves, ship three **teacher professional-development pages per suite**,
each in all 7 languages, built on the same `BreakoutI18n` engine:

- **`udl.html` — UDL supports.** The CAST *Universal Design for Learning Guidelines* v3.0: the
  three principles (Engagement, Representation, Action & Expression), nine areas, and 30 design
  options, each paired with concrete *"in these breakouts"* moves. Cite CAST (2024).
- **`elps.html` — ELPS supports.** The Texas *English Language Proficiency Standards* for emergent
  bilingual (EB) students: the four language domains (listening, speaking, reading, writing), the
  five proficiency levels with per-level scaffolds, and the linguistic-accommodation the engine
  already provides (home-language display, chunked clues, variant-tolerant `word` lock).
- **`guide.html` — lesson-plan implementation guide.** A standard Texas lesson-plan format,
  breakout-centered (the activity is the *engage* or *collaborative-practice* phase), with a
  per-suite **worked example** (big idea, essential question, objectives, vocabulary, procedure).

**Architecture — translate the universal content once.** The UDL/ELPS/guide bodies are identical
across suites (they describe a framework and the shared engine), so keep them in **shared cores**
and only override the suite-specific chrome + worked example:

1. English sources in `_pd/{udl-core,elps-core,guide-core}/en.json` (framework text) and
   `_pd/suite/en.json` (nested **by suite → page**: a small `common`/`udl`/`elps`/`guide` override).
2. Translate each into the 6 other languages (`<lang>.json` beside `en.json`; parallel agents,
   same keys) — obey the JSON-safety rule (§5).
3. `node build-pd.js` bundles them into `assets/{udl,elps,guide}-core-i18n.js` +
   `assets/pd-suite-i18n.js` (globals `window.PD_UDL/PD_ELPS/PD_GUIDE/PD_SUITE`).
4. `node gen-pd-pages.js` emits `<suite>/udl.html`, `elps.html`, `guide.html` — thin i18n shells
   that, per language, merge `core[lang]` + `suite[key].common` + `suite[key][page]` and register
   it. `assets/pd.css` styles them, themed per suite via an inline `:root`.

**Wire them from the correlation page** (§11) so teachers find them. Where the page's dictionary was
registered elsewhere, use `assets/pd-supports.js` + `BreakoutI18n.extend()` (§4) to merge localized
link labels without clobbering it. Verify like everything else (§15): every page renders in all 7
languages, correct RTL, no empty i18n keys, no console errors. A ready-to-run copy of this whole
pipeline (engine + cores + a working example) ships in **`ctob-starter-kit/`**.

---

## 13. Catalog / manifest & site integration

- Emit a **manifest** (`window.SUITE_LIB`) and render landing "full library" grids from it, so
  adding a breakout needs no page edits. A top-level `build-catalog.js` can auto-discover every
  breakout `.js` for a site-wide search index.
- If the suite lives in a larger site, add its landing + correlation pages to the site's data
  source (e.g. `projects.js`) and rebuild the feed (`node build-feed.js`).
- **Don't over-expose:** keep the option to stage unpublished breakouts out of public "all
  breakouts" lists until ready.

---

## 14. Suite shape (flexible)

Bands and counts are not fixed. Two proven shapes:
- **12** = 3 bands (3–5, 6–8, 9–12) × 4 breakouts.
- **24** = 4 bands (add **K–2**) × 6 breakouts, with a **featured + full-library** model: one
  hand-crafted "featured" breakout per band on the landing hero, the rest in a data-driven library
  grid below.

---

## 15. Build & verify workflow (do NOT skip verification)

1. **Author** English content first — read §2; 6 clues (one decoy) + 4 locks (one of each type,
   each `reason` naming the move), solvable from clues alone.
2. **Translate** into the other 6 languages (parallel agents, one breakout each). Same array
   order/count as English; localized + English `word` answers; **obey the JSON-safety rule (§5).**
3. **Generate** (`node build-more.js`), then rebuild the catalog/correlation/answer-key generators.
4. **Validate** every generated `.js`: parses as JS; **all 7 languages present**; per language,
   equal clue/lock counts, **type parity**, **`multi` = 3 strong + 1 false**, **`seq` pad-keys +
   answer order match English**, `mc.answerIndex` unchanged, `word.answer` non-empty.
5. **Solve in a real browser** (Playwright/Chromium, headless) for *each* breakout: drive the DOM
   to open all four locks and assert the win fires with **no console/JS errors** — in English *and*
   one non-English *and* one RTL language. (A lock that never renders — e.g. a missing `id` — only
   shows up here.)
6. **Decrypt-test** the answer key with the password.
7. **Link-check** every relative `href`/`src`; confirm `?lang=` deep links open in-language and no
   broken images (the `onerror` guard hides missing assets but fix the path).

---

## 16. Palette

Structural CSS uses variables; set them per suite via an inline `:root`. Examples:
- Patriotic (July 4): `--navy:#0a2463; --red:#c1121f; --gold:#e6b400; --paper:#fbf9f3` …
- Freedom / Pan-African (July 5): `--navy:#0b6b3a; --red:#b21e28; --gold:#e0a409; --paper:#fbf7ef` …
- Scholarly (Bible-as-literature): `--navy:#054c8c; --navy-d:#023266; --gold:#fbd239; --paper:#f4f8fc` …

Also set `--bg-a`/`--bg-b` (background radial tints) and `--c1..--c5` (lock-badge colors). Student
pages use Fredoka (display) + Nunito (body); landing/marketing pages can use Playfair Display + DM
Sans + DM Mono for a more editorial feel.

---

## 17. Copy-paste starter prompt for a chatbot

> Build a Critical Thinking Online Breakout (CTOB) suite about **<TOPIC>** for grades **K–12**,
> following the **Critical Thinking Breakout Project Pack**. Reuse the shared `assets/i18n.js`,
> `assets/breakout.css`, `assets/breakout.js` unchanged. Produce breakouts across 3–4 grade bands
> (pitch each to the band's skill ladder in §2.3), each with **6 clues (exactly one true-but-off-
> topic decoy)** and **4 locks using one of each type** (`seq`, `mc`, `multi` with 3 strong + 1
> false, `word`), where **every lock's `reason` names the thinking move**. Author **English first**
> in per-band spec files, generate the `window.BREAKOUT` `.js` + student pages + a manifest with a
> build script, and render the landing/library grids and per-language showcase pages from the
> manifest (activities deep-linked with `?lang=`). Then translate every breakout into Spanish,
> Vietnamese, Arabic, Hindi, Urdu, and Chinese via per-breakout `_i18n` files — **same array order/
> count as English, gameplay fields untouched, and NO ASCII double-quotes inside translated
> strings** (use typographic quotes). Frame sensitive material per §7 (TEC §28.0022 for U.S.
> history; academic-not-devotional + text-vs-interpretation for religious texts). Add per-band
> privacy policies, a generated standards-correlation guide covering every breakout, and a
> generated password-protected AES-256 answer key (password passed at run time, never committed;
> link a passcode-request form). Also generate the three **teacher-support pages per suite** (§12) —
> `udl.html` (CAST UDL v3.0), `elps.html` (Texas ELPS), and `guide.html` (lesson-plan implementation
> guide) — in all 7 languages, and link them from the correlation page. Respect §8 (contrast, RTL
> logical properties, descriptive alt text, `onerror` image guard). **Verify by solving every
> breakout in a headless browser in English + one non-English + one RTL language, and by the
> structural checks in §15, before declaring done.**

---

*Provenance: distilled from the TCEA "Fourth of July," "July 5 & Other Black Freedom Holidays,"
CLEAR, "Bible as Literature" (24-breakout), and K–8 "Science" (99-breakout) critical thinking
breakout suites — all K–12, 7-language, each with UDL/ELPS/lesson-plan teacher-support pages.
Content CC BY 4.0; code MIT.*
