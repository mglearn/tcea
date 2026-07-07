# Bible as Literature — Critical Thinking Online Breakouts (CTOBs)

A self-contained, browser-based suite of **31 critical-thinking "breakout" activities** built on the
Bible stories Texas adopted for K–12 public-school classrooms (the **Bluebonnet Learning** K–5 units and
the **2025 required K–12 reading list**). Every activity studies those texts the way courts and the Texas
Education Agency say they must be studied — **academically, as story and history, never devotionally**.
Students open clue cards, weigh evidence, separate what a text *says* from what a reader *believes*, and
crack a set of reasoning "locks."

- **31 breakouts across 4 grade bands** (K–2, 3–5, 6–8, 9–12) — includes full coverage of the 2025 required-list Bible items
- **7 languages** with RTL support (en, es, vi, ar, hi, ur, zh)
- **Runs entirely in the browser** — no logins, no accounts, no data collected
- **Free** · CC BY 4.0 (content) · MIT (code)

Author: Miguel Guhlin · a TCEA educator resource.

---

## Pedagogical framing

These materials teach the Bible **as literature and history in a secular, academic frame** — analyzing
texts, not promoting belief. This mirrors the distinction the U.S. Supreme Court drew in *Abington School
District v. Schempp* (1963), which permits the objective study of the Bible for its literary and historic
qualities as part of a secular program of education, and the position the TEA states for its own adopted
materials. Where a text and a common interpretation diverge (e.g., Esther and "religious freedom"),
students are guided to **notice the gap, not resolve it**.

Each lock walks students through one move of the **CLEAR** critical-thinking cycle:

| | | |
|---|---|---|
| **C**laim | State what the text is about | |
| **L**ens | Pick the genre / frame to read it through | |
| **E**vidence | Cite lines that prove the claim | |
| **A**lternatives | Test where the reading breaks down | |
| **R**esponse | Connect it to another text or idea | |

Every clue set hides **one true-but-irrelevant decoy** so students practice separating evidence from noise,
and every lock is solvable **from the clues alone** (no outside knowledge required).

---

## Directory layout

```
bible/
├── index.html          Landing page — hero, featured breakouts, full library, framing, CLEAR, strategies
├── correlation.html    TEKS correlation guide (ELAR strands + CLEAR focus + effect-size strategy per lock)
├── answer-key.html     Password-gated teacher answer key (client-side AES-256-GCM encrypted payload)
├── policy.html         Privacy & compliance (FERPA/COPPA/SCOPE/GDPR/CIPA) and content framing
├── breakouts.js        window.BIBLE_LIB — manifest of all 31 breakouts, powers the landing "Full Library"
├── es.html vi.html ar.html hi.html ur.html zh.html   Per-language showcase pages (generated)
├── breakouts-<lang>.js Per-language manifests (window.BIBLE_LIB_<LANG>) powering the showcase pages
├── build-more.js       Generator: builds breakout .js + student pages, breakouts.js, and the
│                       per-language manifests + showcase pages
├── build-correlation.js  Regenerates the TEKS tables for all 31 in correlation.html (between markers)
├── build-answer-key.js   Regenerates the encrypted answer key for all 31 (password passed at run time)
├── README.md           This file
└── grades/
    ├── k2.js   g35.js   g68.js   g912.js            The 4 "featured" breakouts (one per band)
    ├── <band>-student.html                          Student page for each featured breakout
    ├── <band>-<slug>.js                             The 20 generated breakouts (window.BREAKOUT data)
    ├── <band>-<slug>-student.html                   Student page for each generated breakout
    └── _specs-<band>.json                           English source specs the generator reads
```

The activities depend on the **shared breakout engine** one level up:

```
../assets/breakout.css   Shared visual theme for all student pages
../assets/i18n.js        7-language switcher engine (localStorage pref, RTL, English fallback)
../assets/breakout.js    Renders clue cards + lock UI from window.BREAKOUT, tracks solved state, confetti
```

The top-level `../build-catalog.js` scans `grades/*.js` and adds every bible breakout to the site-wide
searchable catalog (`../catalog.js` → `../index.html`).

---

## The 31 breakouts

Each is grounded in an adopted text and pitched to its band's skill focus. `★` = the featured breakout shown
as a highlight card on the landing page.

> **Bible-connected, not biblical.** Two items on the Kindergarten required list — *You Are Special* (Max Lucado)
> and *The Berenstain Bears and the Golden Rule* (Berenstain family) — are **modern children's books, not scripture**.
> They are paired with the biblical texts because they dramatize the same values (inherent human worth; the Golden
> Rule). The *You Are Special* breakout is included and explicitly framed as a modern allegory, studied as
> literature. The Berenstain title's value (the Golden Rule) is covered inside the K–2 featured breakout.

### Grades K–2 — *sequence · story-vs-fact · close reading · naming the source*
| Title | Source text | File |
|---|---|---|
| ★ The Storyteller's Order | Genesis creation + the Golden Rule | `k2.js` |
| The Big Boat and the Rain | Noah's Ark / the Flood (Genesis) | `k2-noah-ark.js` |
| The Stranger Who Helped | The Good Samaritan (Luke) | `k2-good-samaritan.js` |
| The King's Wise Idea | Solomon's judgment (1 Kings) | `k2-solomon-choice.js` |
| The Man and the Big Fish | Jonah (Book of Jonah) | `k2-jonah-fish.js` |
| Ten Rules to Live By | Moses & the Ten Commandments (Exodus) | `k2-moses-rules.js` |
| The Wooden People and the Stickers | *You Are Special* (Max Lucado) — Bible-connected, **not** scripture | `k2-you-are-special.js` |

### Grades 3–5 — *theme · evidence gathering · counter-example · source/context*
| Title | Source text | File |
|---|---|---|
| ★ Underdogs & Lions' Dens | David & Goliath, Daniel, Solomon | `g35.js` |
| Noah and the Flood | Noah / the Flood (Genesis) | `g35-noah-flood.js` |
| Jonah's Second Chance | Jonah (Book of Jonah) | `g35-jonah-second-chance.js` |
| The Good Samaritan | The Good Samaritan (Luke) | `g35-good-samaritan-35.js` |
| Moses and the Ten Commandments | Ten Commandments (Exodus) | `g35-moses-ten.js` |
| The Last Supper: Text and Painting | Gospels + Da Vinci (5th-grade art history) | `g35-last-supper.js` |
| The Lowest Seat | Humility at the feast (Luke 14:7–11) — Grade 4 | `g35-humility.js` |
| The Burning Bush and the Sea | Moses: burning bush + Red Sea (Exodus 3 & 14) — Grade 5 | `g35-moses-red-sea.js` |

### Grades 6–8 — *genre · claim · technique/rhetoric · connection across texts*
| Title | Source text | File |
|---|---|---|
| ★ Parables & Persuasion | Prodigal Son + Sermon on the Mount | `g68.js` |
| Jonah & the Art of Irony | Jonah (irony / reluctant prophet) | `g68-jonah-irony.js` |
| The Good Samaritan: Parable & Reversal | The Good Samaritan (Luke) | `g68-good-samaritan-68.js` |
| The Psalms: Reading Ancient Poetry | Psalms + Frost & Williams pairing | `g68-psalms-poetry.js` |
| Esther: Dramatic Irony & Reversal | The Book of Esther | `g68-esther-plot.js` |
| Solomon's Judgment: Argument & Logic | Solomon's judgment (1 Kings) | `g68-solomon-judgment.js` |
| The Birds and the Lilies | Do Not Be Anxious (Matthew 6:25–34) — Grade 6 | `g68-do-not-be-anxious.js` |
| A Time for Everything | Ecclesiastes 3 (wisdom poetry) — Grade 8 | `g68-ecclesiastes.js` |

### Grades 9–12 — *archetype · allusion · textual fact vs. interpretation · academic vs. devotional*
| Title | Source text | File |
|---|---|---|
| ★ Allusion, Archetype & Argument | Adam & Eve + Queen Esther | `g912.js` |
| The Flood Archetype | Noah + the Epic of Gilgamesh (allusion) | `g912-noah-archetype.js` |
| The Shepherd's Song | Psalm 23 (extended metaphor, allusion) | `g912-psalm-23.js` |
| The Art of Lament | Lamentations 3 (lament genre) | `g912-lamentations.js` |
| From Parable to Law | Good Samaritan → "Good Samaritan laws" | `g912-good-samaritan-law.js` |
| Wisdom Literature & the Clever Test | Solomon + wisdom-literature genre | `g912-solomon-wisdom.js` |
| The Innocent Sufferer | Book of Job (archetype) — English II | `g912-job.js` |
| The Definition of Love | 1 Corinthians 13 — English IV | `g912-corinthians-love.js` |

---

## How a breakout works (data model)

Every breakout is a single `window.BREAKOUT` object. Its student page is a thin shell that loads the data
file, then `i18n.js` and `breakout.js`, which render everything.

```js
window.BREAKOUT = {
  id: "bible-k2-noah-ark",
  band: "K–2",
  confetti: ["#054c8c", ...],          // win-screen colors
  UI: {                                 // chrome strings, per language
    en: { "header.h1": "...", "brief.p": "...", "win.stamp": "...", ...common UI },
    es: { ...shared UI translated },    // es/vi/ar/hi/ur/zh: shared UI translated,
    ...                                 // breakout-specific chrome falls back to en
  },
  CONTENT: {
    en: {
      clues: [ { id, ico, nm, title, body }, ... x6 ],
      locks: [ ...4 locks... ]
    }
    // other languages fall back to CONTENT.en (see "Multilingual model")
  }
};
```

### The four lock types
| type | UI | Correct-answer field |
|---|---|---|
| `seq` | tap pads to build an ordered sequence | `answer: [padKey, ...]` in order; `pads: [{k,e,c}]` |
| `mc` | single-choice buttons | `answerIndex` (0-based into `options`) |
| `multi` | check all the *strong* evidence, exclude the decoy | `items: [{t, strong}]` — exactly 3 `true` + 1 `false` |
| `word` | free-text box | `answer: [ ...lowercase accepted strings ]` (input is trimmed + lowercased) |

Each breakout uses one lock of each type. Every lock carries a `reason` explaining why the answer is right
and naming the thinking move; it is shown when the lock is solved.

---

## Multilingual model

- `i18n.js` provides a 7-language switcher (English, Spanish, Vietnamese, Arabic **[RTL]**, Hindi, Urdu **[RTL]**,
  Chinese). Preference is stored in `localStorage` and shared across the whole breakouts library.
- **Fallback is graceful.** For UI chrome, a missing key falls back to English (`w[lang] || w.en`). For clue/lock
  content, `breakout.js` uses `CONTENT[lang]` only when it has clues, otherwise `CONTENT.en`.
- The **4 featured** breakouts (`k2/g35/g68/g912.js`) ship **fully translated** in all 7 languages.
- The **20 generated** breakouts ship **English content** plus **translated shared UI** (buttons, section
  titles, feedback). They render correctly in every language via the fallback above; native-language story
  content can be layered into `CONTENT[lang]` later without touching the pages.

---

## Building & authoring

The 20 generated breakouts are produced from compact English spec files, so content lives in one place and
the boilerplate is generated.

```bash
# 1. Regenerate the 20 breakouts + student pages + breakouts.js manifest
node bible/build-more.js

# 2. Refresh the site-wide searchable catalog (adds all bible breakouts)
node build-catalog.js
```

`build-more.js` reads `grades/_specs-<band>.json` and injects lock/clue IDs, lock colors, the bible palette,
the footer text, and the shared translated UI (imported from `../build-ml.js`'s `COMMON`).

### Add a new breakout
1. Append a spec object to the appropriate `grades/_specs-<band>.json`. Shape:
   ```json
   {
     "slug": "kebab-case-unique",
     "h1": "...", "sub": "...",
     "brief": { "label": "Your mission", "h": "...", "p": "..." },
     "win":   { "stamp": "...", "h": "...", "p": "..." },
     "clues": [ { "ico": "📖", "nm": "...", "title": "...", "body": "..." }, ...x6 ],
     "locks": [ <one seq, one mc, one multi, one word — omit colors/ids> ]
   }
   ```
   Keep 6 clues (incl. one true-but-irrelevant decoy) and 4 locks (one of each type).
2. Run the two build commands above. The file lands at `grades/<band>-<slug>.js` with a matching
   `-student.html`, and it appears in both the landing "Full Library" and the site search.

### The featured breakouts
`k2.js / g35.js / g68.js / g912.js` and their `-student.html` pages are **hand-authored and fully
translated** — they are **not** produced by `build-more.js`. Edit them directly.

---

## The teacher answer key

`answer-key.html` holds every solution plus the CLEAR rationale, encrypted client-side with **AES-256-GCM**
(PBKDF2, 250k iterations). The password is never transmitted; decryption happens in the browser. This is
appropriate for answer keys but is not a substitute for server-side protection of sensitive materials.

Regenerate it (covers all 31 breakouts) with `node build-answer-key.js '<password>'` — the password is
passed at run time and never stored in the repo.

---

## Privacy & compliance

Collects **nothing** — no accounts, analytics, cookies, or tracking. All activity state lives in the browser
for the session only. The single outside request is to Google Fonts (self-host the fonts to reach zero
external egress). Every page sets `referrer: no-referrer`. See `policy.html` for how this maps to FERPA,
COPPA, the Texas SCOPE Act, TEC §32.151–32.156, GDPR, and CIPA.

---

## License

Content: **CC BY 4.0** · Code: **MIT**. Bible stories are studied as the literary/historical texts Texas
adopted; TEKS citations in `correlation.html` are good-faith, paraphrased alignment references — confirm
against the current 19 TAC Chapter 110 before formal adoption.
