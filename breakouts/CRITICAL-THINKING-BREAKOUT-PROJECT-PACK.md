# Critical Thinking Breakout Project Pack

A reusable blueprint for building **self-contained, browser-based educational
"breakout" activities** — no accounts, no server, no data collection — with a
built-in **7-language switcher** (English, Spanish, Vietnamese, Arabic, Hindi,
Urdu, Chinese; Arabic & Urdu right-to-left).

Hand this whole file to a chatbot along with the three shared assets
(`assets/i18n.js`, `assets/breakout.css`, `assets/breakout.js`) and it has
everything needed to produce a new, polished, standards-aligned breakout suite.

---

## 1. What a critical thinking breakout is

A single HTML page where a student:
1. Opens a board of **clues** (short, tappable cards; some are decoys).
2. Solves **four locks**, each answerable *only from the clues*.
3. Gets a short **"why"** explanation on each solved lock (reasoning sticks, not just the answer).
4. Sees a celebratory **win** screen when all four are open.

Design philosophy: reward *"prove it from the clue"* thinking. Always include at
least one **decoy clue** (true-but-irrelevant) so students practice separating
relevant from irrelevant evidence. Each lock ends with a one-sentence rationale.

---

## 2. Folder structure

```
breakouts/
  assets/                        # SHARED across every suite — copy as-is
    i18n.js                      # language engine (switcher, RTL, persistence)
    breakout.css                 # structural styles (palette set per page)
    breakout.js                  # generic render engine (reads window.BREAKOUT)
  <suite>/                       # e.g. july4, july5th, blackhistory, ...
    index.html                   # top landing page (3 grade-band cards)
    correlation.html             # standards correlation guide
    answer-key.html              # password-protected (AES-256), all grades
    LICENSE  README.md
    <band>/                      # grade35, grade68, grade912
      index.html                 # band hub (cards linking each breakout)
      policy.html                # privacy & compliance
      answer-key.html            # redirect to ../answer-key.html
      <slug>.html                # teacher launch page (premise, standards; NO answers)
      <slug>-student.html        # the student breakout (skeleton + engine)
      locales/<slug>.js          # per-breakout UI + 7-language clue/lock CONTENT
```

Twelve breakouts per suite is a good target: 3 grade bands × 4 breakouts.

---

## 3. The five lock types

| type   | UI                              | data fields                                             |
|--------|---------------------------------|---------------------------------------------------------|
| `digit`| numeric boxes (dates, counts)   | `len`, `answer:['1852']` (Western numerals)             |
| `word` | free-text input                 | `answer:['rochester', ...localized spellings]`          |
| `mc`   | multiple-choice buttons (auto)  | `options:[...]`, `answerIndex:1`                         |
| `multi`| evidence sort (check all right) | `items:[{t,strong:true/false}]`                         |
| `seq`  | tap in order                    | `pads:[{k,e,c}]`, `answer:['k1','k2',...]`              |

`mc`, `multi`, `seq` are **click-based** → identical logic in every language
(only labels translate). `word`/`digit` need language-aware answers.

### Data schema (per breakout, per language)

```js
// locales/<slug>.js
window.BREAKOUT = {
  id: 'july5',
  confetti: ['#0b6b3a','#b21e28','#e0a409','#111','#fff','#0f7a5a'], // optional
  UI: {              // flat data-i18n keys, per language
    en: { 'header.h1':'…', 'brief.p':'…', 'ui.check':'Check', 'fb.mc':'…', … },
    es: { … }, vi:{…}, ar:{…}, hi:{…}, ur:{…}, zh:{…}
  },
  CONTENT: {         // structured clue/lock data, per language
    en: {
      clues: [ {id,ico,nm,title,body}, … 6 items, one a decoy … ],
      locks: [ {id:'L1',type,color,title,q,answer/options/items,reason}, … 4 … ]
    },
    es: { clues:[…], locks:[…] }, …
  }
};
```

Keep **structural fields identical across languages** (`id`, `ico`, `type`,
`len`, `color`, `answerIndex`, item order + `strong`, seq `pads`, digit `answer`).
Translate only text (`nm`, `title`, `body`, `q`, `reason`, `options[]`, `items[].t`).

---

## 4. The language engine (`assets/i18n.js` → `BreakoutI18n`)

- **7 languages**, Arabic + Urdu are RTL (sets `<html dir="rtl">`).
- Resolution order: `?lang=` query → `localStorage['tcea.breakouts.lang']` → browser → English.
- Auto-builds a `<select>` from `<div data-i18n-picker></div>`.
- Static chrome uses attributes: `data-i18n` (textContent), `data-i18n-html`,
  `data-i18n-placeholder/title/aria-label/alt`.
- `BreakoutI18n.t('key',{vars})` for JS-built strings (`{n} of {total}`).
- Fires `breakout-i18n:changed` so dynamic UI (clue/lock boards) re-renders.
- Missing keys fall back to English → graceful partial translation.

**To add a language:** add one row to the `LANGS` array in `i18n.js` (code, label,
dir, htmlLang) and a case in `normalizeLang`, then add that language's keys to each
locale file. No page edits required.

**Page skeleton** (student breakout): inline `:root` palette → `breakout.css` →
`data-i18n` chrome + containers (`#clueGrid #locks #lockdots #pcount #resetBtn
#modalBg #modal #win #winReplay #confetti`) → then, in order:
```html
<script src="locales/<slug>.js"></script>
<script src="../../assets/i18n.js"></script>
<script src="../../assets/breakout.js"></script>
```

---

## 5. Standards framing (Texas — TEC §28.0022)

When a breakout touches slavery, racism, or related history, Texas law requires it
be presented as **"deviations from, betrayals of, or failures to live up to the
authentic founding principles of the United States, which include liberty and
equality"** (§28.0022(a)(4)(A)(viii)), and explored **objectively and free from
political bias** (§28.0022(a)(2)).

Practical rules:
- Frame injustice as the nation *failing to live up to* its founding ideals — not
  as proof those ideals are false. (Frederick Douglass's own 1852 argument models this.)
- Foreground primary-source evidence; avoid assigning present-day guilt by identity.
- Add a red-bordered **"Texas framing (TEC §28.0022)"** note to teacher pages and a
  matching line in each `policy.html` content note and the correlation guide.
- Standards are **"aligned to"** TEKS/CCSS strands — never reproduce official
  standard text. State this + "not legal advice."

---

## 6. Privacy & compliance (every suite)

Collect **nothing**: no accounts, logins, analytics. Session state lives only in the
browser. The single outside request is Google Fonts (removable by self-hosting for
zero-egress). Each band ships a `policy.html` mapping this to **FERPA, COPPA, the
Texas SCOPE Act, TEC §32.151–32.156, GDPR, CIPA**, plus a VPAT-lite accessibility
statement. Set `<meta name="referrer" content="no-referrer">` on every page.

---

## 7. Teacher answer key (AES-256, client-side)

One password-protected `answer-key.html` per suite decrypts all breakouts' answers in
the browser (password never sent anywhere). Generate the payload in Node so it matches
the browser's WebCrypto decrypt:

```js
// PBKDF2-SHA256 (250k) → AES-256-GCM; ct = ciphertext || 16-byte tag, all base64
const salt=crypto.randomBytes(16), iv=crypto.randomBytes(12), iter=250000;
const key=crypto.pbkdf2Sync(Buffer.from(pw),salt,iter,32,'sha256');
const c=crypto.createCipheriv('aes-256-gcm',key,iv);
const enc=Buffer.concat([c.update(Buffer.from(plaintextHTML)),c.final()]);
const payload={salt:b64(salt),iv:b64(iv),iter,ct:b64(Buffer.concat([enc,c.getAuthTag()]))};
```
The page's inline script does the mirror: `importKey('PBKDF2')` → `deriveKey(AES-GCM)`
→ `decrypt` → `document.write(html)`. Keep the key page unlinked from student pages.

---

## 8. Correlation guide

`correlation.html` = one table per grade band: **Activity | Locks | TEKS strand |
Common Core literacy | CLEAR focus** (Claim · Lens · Evidence · Alternatives ·
Response). Include the citations disclaimer and the Texas framing callout. Link real
sources (e.g. tea.texas.gov, Smithsonian NMAAHC, National Archives).

---

## 9. Directory + feed integration (if the suite lives in a larger site)

Add the suite's landing page (and correlation guide) to the site's data source
(e.g. `projects.js`) under a `breakouts` category, then rebuild the RSS feed
(`node build-feed.js`). The newest entry gets a "NEW" badge automatically.

---

## 10. Build & verify workflow (do NOT skip verification)

1. **Author** English content first (clues + 4 solvable locks + one decoy).
2. **Translate** into the other 6 languages (parallel agents work well; one locale
   file each). Keep structural fields identical; word-lock answers accept localized
   *and* English spellings. Mark non-English **"AI-seeded; native-review pending."**
3. **Validate** every `locales/*.js`: parses as JS, and every language has the same
   clue/lock counts + all chrome keys as English.
4. **Solve in a real browser** (Playwright/Chromium), headless, for *each* breakout:
   drive the DOM to solve all four locks and assert the win screen fires with **no
   console/JS errors** — in English *and* at least one non-English + one RTL language.
   (A lock that never renders — e.g. a missing `id` — only shows up here, not in a
   JSON check.)
5. **Decrypt-test** the answer key with the password.
6. **Link-check** every relative `href`/`src`.

---

## 11. Palette

Structural CSS uses variables; set them per suite via an inline `:root`. Examples:
- Patriotic (July 4): `--navy:#0a2463; --red:#c1121f; --gold:#e6b400; --paper:#fbf9f3` …
- Freedom / Pan-African (July 5): `--navy:#0b6b3a; --red:#b21e28; --gold:#e0a409; --paper:#fbf7ef` …
Also set `--bg-a`/`--bg-b` (the two background radial tints) and `--c1..--c5`
(lock-badge colors). Fonts: Fredoka (display) + Nunito (body).

---

## 12. Copy-paste starter prompt for a chatbot

> Build a critical thinking breakout suite about **<TOPIC>** for grades 3–12, following the
> **Critical Thinking Breakout Project Pack**. Reuse the shared `assets/i18n.js`,
> `assets/breakout.css`, and `assets/breakout.js` unchanged. Produce 12 breakouts
> (3 grade bands × 4), each with 6 clues (one a decoy) and 4 locks using a mix of
> the five lock types, plus a teacher launch page, band hubs, a landing page, per-band
> privacy policies, a standards correlation guide, and a password-protected AES-256
> answer key. Frame any sensitive history per **TEC §28.0022** (failures to live up to
> founding principles of liberty and equality; objective, evidence-based, not legal
> advice). Author English first, then translate every student breakout into Spanish,
> Vietnamese, Arabic, Hindi, Urdu, and Chinese via per-breakout `locales/<slug>.js`
> files (structural fields identical across languages; mark non-English AI-seeded /
> native-review-pending). **Verify by solving every breakout in a headless browser in
> English + one non-English + one RTL language before declaring done.**

---

*Provenance: distilled from the TCEA "Fourth of July" and "July 5 & Other Black
Freedom Holidays" critical thinking breakout suites. Content CC BY 4.0; code MIT.*
