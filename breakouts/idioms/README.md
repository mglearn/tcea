# Idioms & Sayings for Multilingual Learners

A multilingual CTOB suite that teaches **idioms and sayings** to multilingual learners (ESL) and in
world-language / multilingual classrooms, **grades 3–12**, using each learner's home language as a
resource. See **[PLAN.md](PLAN.md)** for the full instructional plan, standards alignment, and sources.

**Status:** scaffold + Phase-1 sample (English + Spanish). One breakout shipped:
`3–5 · Body Idioms: Say It Without Saying It`.

## Layout

```
idioms/
├── PLAN.md              The instructional plan (why, standards, phasing, sources)
├── README.md            This file
├── index.html           Search-first landing (reads breakouts.js → window.IDIOMS_LIB)
├── build.js             Generator: _specs (+ _i18n) → breakout .js + student .html + breakouts.js
├── breakouts.js         window.IDIOMS_LIB — landing manifest (generated)
└── grades/
    ├── _specs-<band>.json          English source specs per band (g35 / g68 / g912)
    ├── _i18n-<band>-<slug>.json    Translations {es:{chrome,clues,locks}, …} (optional per breakout)
    ├── <band>-<slug>.js            window.BREAKOUT data (generated)
    └── <band>-<slug>-student.html  Student page (generated) — loads ../../assets/{i18n,breakout}.js
```

Bands: **g35 (3–5), g68 (6–8), g912 (9–12)** — no K–2 (this suite is grades 3–12).

## Build

```bash
node breakouts/idioms/build.js
```

Reads each `grades/_specs-<band>.json`, zips in any `grades/_i18n-<band>-<slug>.json` translations, and
writes the breakout `.js` + `-student.html` + the landing manifest `breakouts.js`. Shared UI chrome (all 7
languages) is imported from `../build-ml.js`'s `COMMON`; the engine falls back to English for any missing
language, so **English-only content works in all 7 languages immediately** and translations layer in later.

## Add a breakout

1. Append a spec to the right `grades/_specs-<band>.json`:
   ```json
   {
     "slug": "kebab-unique", "h1": "...", "sub": "...", "kw": "search terms idiom names languages",
     "brief": { "label": "Your mission", "h": "...", "p": "..." },
     "win":   { "stamp": "...", "h": "...", "p": "..." },
     "clues": [ { "ico": "🖐️", "nm": "...", "title": "...", "body": "..." }, … ×6 ],
     "locks": [ <one seq, one mc, one multi, one word — omit ids/colors> ]
   }
   ```
   Keep **6 clues** (incl. one true-but-off-topic decoy) and **4 locks** (one of each type). Multi = exactly
   3 `strong:true` + 1 `strong:false`.
2. Optional: add `grades/_i18n-<band>-<slug>.json` with translated `chrome`, `clues`, and `locks` (arrays in
   the same order/count as English; `seq` pads keep their leading emoji; `word` answers give native terms —
   English answers are merged automatically).
3. Run `node breakouts/idioms/build.js`.

## Design principles (from the plan)

- **Cross-linguistic comparison is the point.** Every idiom clue names the L1 equivalent and whether the
  image is the **same** (hand ↔ *mano*), **different** (arm & leg ↔ *un ojo*), or **has no parallel**.
- **Transparent / L1-similar idioms first**, then opaque ones (research-backed).
- **`word` locks accept the L1 answer**, not just English — the home language is a valid answer.
- Standards: **ELPS** (idiomatic expressions), **WIDA** (figurative language), **TEKS ELAR** & World Languages.

## Gotcha (shared across all breakout suites)

`data-i18n` / `esc()`-rendered values (titles, labels, clue/lock text) must hold **literal characters, not
HTML entities** — write `&`, never `&amp;` (an `&amp;` there renders literally or double-escapes). Only
`data-i18n-html` values may carry entities. See the project pack §4 for the full rule.
