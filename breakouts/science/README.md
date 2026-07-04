# Science Critical Thinking Online Breakouts (Grades K–8, Texas TEKS)

Self-contained, browser-based science breakouts aligned to the 2021 Texas Essential
Knowledge and Skills for Science (§112.2–112.28, Kindergarten–Grade 8). No logins, no
data collected, seven **fully translated** languages. Built on the shared engine in
`../assets/` and the craft rules in `../ctob_project_pack.md`. Full design rationale:
**[DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md)**.

## What's here

```
science/
  index.html            Table of contents → the nine grade hubs (🌐 language menu)
  correlation.html      Standards correlation (generated) — all 99 breakouts → TEKS
  udl.html              Teacher supports: CAST UDL Guidelines v3.0 (7 languages)
  elps.html             Teacher supports: Texas ELPS for emergent bilingual learners (7 languages)
  guide.html            Teacher supports: lesson-plan implementation guide (7 languages)
  policy.html           Privacy & compliance (FERPA/COPPA/SCOPE/GDPR/CIPA)
  build-answer-key.js   node build-answer-key.js <K|1-8> <password>   (password NEVER committed)
  DEVELOPMENT-GUIDE.md  Grades 1–8 roadmap + research synthesis
  info/                 Source PDFs (TEKS, TEA design-challenge tools, UDL/ELPS refs — local only)
  grade6/ grade7/ grade8/
    index.html              Grade HUB — featured breakout + a pill row to everything else
    student.html            The featured breakout (loads locales/grade<N>.js + shared engine)
    locales/grade<N>.js     window.BREAKOUT data (English; 7 languages via engine fallback)
    i18n-index.js           Registers the hub's language picker
    glossary.html           Student word bank (vocabulary at grade reading level)
    skills-teks.html        TEKS alignment + misconceptions + Hattie effect sizes
    engineering-challenge.html  Printable STEM design challenge (define→…→improve, CER, career)
    answer-key.html         AES-256 encrypted teacher key (unlinked from student pages)
  grade6/                (the "More" set — built)
    more.js                 window.MORE — all 10 single-concept breakouts + shared base UI
    more.html               Library page listing the 10 (rendered from more.js)
    play.html               Data-driven player: play.html?b=<slug>
```

Every breakout = **6 clues (exactly 1 true-but-off-topic decoy) + 4 locks** (one each of
`seq` / `mc` / `multi` [3 strong + 1 decoy] / `word`); every lock's rationale **names the
thinking move**. All are solvable from the evidence alone.

## Status & plan

| Grade | Featured breakout | "More" set (one short breakout per key concept) |
|-------|-------------------|--------------------------------------------------|
| **K** | ✅ Light and Shadows | ✅ **10 built** — sorting, magnets, day & night, the sky, rocks, weather, air & wind, plant needs, animal needs, plant parts |
| **1** | ✅ Push, Pull, and Play! | ✅ **10 built** — sorting, hot & cold, seasons, soil, water, weather, saving water, living/nonliving, food chains, animals |
| **2** | ✅ Make Some Noise! | ✅ **10 built** — solids & liquids, changing matter, pushes, Sun & Moon, wind & water, wild weather, recycling, producers & consumers, pollen & seeds, metamorphosis |
| **3** | ✅ Blast Off! A Trip Through Space | ✅ **10 built** — states of matter, changes of state, measuring matter, forces at a distance, forms of energy, how soil forms, rapid Earth changes, food chains, fossils, survival structures |
| **4** | ✅ Light It Up! The Secret of Circuits | ✅ **10 built** — mixtures & solutions, energy transfer, conductors & insulators, Moon phases, water cycle, erosion, weather vs. climate, resources, food webs, inherited vs. acquired traits |
| **5** | ✅ Round and Round: Day, Night, and Shadows | ✅ **10 built** — separating mixtures, particles, forces, energy transformations, light, sedimentary rock & fossil fuels, landforms, ecosystem changes, human impact, instinct vs. learned behavior |
| **6** | ✅ Cargo Ship Rescue | ✅ **10 built** — states of matter, mixtures, periodic table, density, chemical change, forces, waves, seasons & tides, Earth's systems, ecosystems & cells |
| **7** | ✅ Rescue Run | ✅ **10 built** — elements & compounds, solutions, motion & graphs, heat transfer, solar system, plate tectonics, watersheds, energy pyramids, body systems, classifying life |
| **8** | ✅ Launch Control | ✅ **10 built** — classifying matter, acids & bases, conservation of mass, Newton's laws, waves & EM spectrum, stars & galaxies, weather systems, carbon & climate, ecosystem change, cells & heredity |

🎉 **Grades K–8 are ALL complete** — **9 featured breakouts + 90 concept breakouts** (10 per
grade), each grade with a hub, a STEM engineering design challenge, a student word bank, a
Skills & TEKS page, and a password-protected AES-256 answer key. A generated **standards
correlation guide** (`correlation.html`, `node build-correlation.js`) maps all 99 to the TEKS.
All verified by real headless-browser solves; all 99 breakouts are indexed in the site-wide
search, in 7 languages.

✅ **Native translations complete** — every featured and concept breakout is fully translated
into Spanish, Vietnamese, Arabic, Hindi, Urdu, and Chinese (`_i18n/grade<G>/<lang>.json` →
`build-i18n.js`); the 🌐 menu shows real translated content, not English fallback.

✅ **Teacher-support pages** — `udl.html`, `elps.html`, and `guide.html`, each in all 7
languages, linked from `correlation.html` and the hub. Built from the shared cores in
`../_pd/` via `../build-pd.js` + `../gen-pd-pages.js` (see project pack §12).

**Anticipated next:** per-suite catalog polish and additional STEM extensions as desired.

## Build & verify

- **Answer keys:** `node build-answer-key.js <grade> <password>` (passwords are passed at
  run time and never stored in the repo; only ciphertext is committed).
- **Search:** the top-level `breakouts/index.html` search is generated by
  `../build-catalog.js` → `../catalog.js` (it auto-discovers the featured breakouts and the
  Grade 6 "More" breakouts).
- **Translations:** `node build-i18n.js <K|1-8>` zips `_i18n/grade<G>/<lang>.json` onto the
  English structure (gameplay fields never change). **Teacher-support pages:** edit `../_pd/`
  and run `node ../build-pd.js && node ../gen-pd-pages.js`.
- **Verify before shipping:** structural check (6 clues/1 decoy, 4 locks one-of-each, `multi`
  3+1, `seq` keys, `mc` index, `word` non-empty) **and** a real headless-browser solve of every
  breakout (win fires, no console errors) in English + a non-English + an RTL language.

Standards are **aligned to**, not reproduced from, the official TEKS — good-faith paraphrase,
confirm before adoption, not legal advice. Content CC BY 4.0; code MIT.
