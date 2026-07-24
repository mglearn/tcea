# Graveyard-Style Investigation Breakout — Build Guide

A reusable recipe for building a **"graveyard" investigation breakout**: a
single-page activity where students investigate a set of "relic" exhibits, answer
three multiple-choice questions per exhibit (Identify it → Its purpose → What
replaced it), earn points, and finish with a score screen and a printable
reflection.

The first build of this pattern was **The Technology Graveyard** (outdated
technology). The second, **The Vanished Classroom** (top-level `tvc/`, a
self-contained activity that bundles its own i18n engine), reused
this guide for *instructional practices from the 1800s* and added the shared
language switcher. Follow the steps below to make another one on any topic.

---

## 1. What you are building

A self-contained folder with three core files (plus optional translation packs):

```
breakouts/<acronym>/
  index.html      # structure + screens, marked up for i18n
  styles.css      # dusk/graveyard theme, responsive, print + reduced-motion
  script.js       # data + engine (rendering, scoring, state, reflection, print)
  lang/           # optional: one <code>.js translation pack per language
    es.js vi.js ar.js hi.js ur.js zh.js
  images/         # optional exhibit art; the UI shows a labeled placeholder if absent
  README.md
```

**No build step, no server, no login, no analytics, no external libraries.** All
progress is saved to `localStorage` on the student's own device.

### The six screens (all in one HTML file, toggled by an `active` class)

1. **Welcome** — title, subtitle, one paragraph of hook, "Enter" button.
2. **Directions** — the 3-step investigation method.
3. **Exhibit list** — a grid of "tombstone" cards, one per exhibit; a disabled
   "See my final score" button that unlocks when all are complete.
4. **Exhibit** — image/placeholder + clue list on the left; a 3-question form on
   the right; check → feedback → reveal → continue.
5. **Score** — total out of the maximum, a level badge, and a message.
6. **Reflection** — a short form (choose a relic + free-text prompts) that the
   student can **print**.

---

## 2. The data model (the only thing you rewrite per topic)

Everything topic-specific lives in one array of **exhibits**. Use **9 exhibits ×
3 questions × 3 points = 27 points** (or scale the numbers together — the engine
reads `EXHIBIT_COUNT` and `POINTS_PER_EXHIBIT`).

Each exhibit has three questions with **four choices each**. Author the **correct
choice first (index 0)** in every choices array. The engine shuffles choices for
display but tracks the original index, so:

- Scoring is just "did the student pick original index 0?" — language-independent.
- You never store a "correctAnswer" string that could drift from the choices.

```js
{
  id: "slate",                     // stable, language-independent, unique
  image: "images/slate.png",       // placeholder shows if the file is absent
  relic: "Slate and slate pencil", // the correct identification
  clues: [ "…", "…", "…", "…" ],   // 3–4 first-person clues
  purpose: "Giving each student a reusable surface to practice writing",
  limitation: "Work was erased after each lesson and could never be saved",
  replacement: "Paper notebooks, whiteboards, and digital tablets",
  choices: {
    identify:    ["Slate and slate pencil", <3 plausible distractors>],
    purpose:     ["Giving each student a reusable surface…", <3 distractors>],
    replacement: ["Paper notebooks, whiteboards, and digital tablets", <3 distractors>]
  }
}
```

**Authoring rules that keep it honest and gradeable**

- `choices.identify[0]` must equal `relic`; `choices.purpose[0]` must equal
  `purpose`; `choices.replacement[0]` must equal `replacement`. (A validation
  script can enforce this — see step 6.)
- Distractors should be *plausible but clearly wrong* to someone who read the
  clues — ideally drawn from the other exhibits in the set.
- Clues are written in the first person ("I stored files…", "Teachers used me…")
  and move from vague to specific.
- Keep summaries at roughly a grade 7–8 reading level. Don't invent facts.

---

## 3. Steps to build a new one

1. **Copy `tvc/` to `breakouts/<new-acronym>/`.** (For a breakout under
   `breakouts/`, load the shared `../assets/i18n.js` instead of bundling a local
   `i18n.js` as `tvc/` does.) Pick a short, unique
   folder acronym (existing ones: `tvc`, plus `july4`, `july5th`, `idioms`, …).
2. **Rewrite the exhibits** in `script.js` (`EXHIBITS.en`) for your topic — 9
   exhibits, correct-first, per the model above.
3. **Update the UI strings** in `script.js` (`UI.en`): title, subtitle, welcome
   body, eyebrow labels, level names/messages, reflection prompts. Keep every
   `{placeholder}` token intact.
4. **Update the static HTML** default text in `index.html` (the English fallback
   inside each `data-i18n` element), the `<title>`, the meta description, and the
   two-letter **brand mark** in the top bar.
5. **Retheme if you like** in `styles.css` (colors live in `:root`). The default
   is a dusk/graveyard palette; the welcome background points at
   `images/<scene>.png` and degrades gracefully if it is missing.
6. **Validate** (step 6 below), open `index.html` in a browser, and play through.

---

## 4. Wiring the shared language switcher (`assets/i18n.js`)

Every breakout in `breakouts/` shares one small i18n engine at
`breakouts/assets/i18n.js`. It provides a 7-language `<select>` switcher
(English, Español, Tiếng Việt, العربية, हिन्दी, اردو, 中文), remembers the choice in
`localStorage` (`tcea.breakouts.lang`), supports `?lang=` share links, sets
`dir="rtl"` for Arabic/Urdu, and fires a `breakout-i18n:changed` event.

**Four wiring points** (all already present in `tvc/`):

1. **Load the engine before your script** (order matters — packs, then engine
   consumer):
   ```html
   <script src="../assets/i18n.js" defer></script>
   <script src="lang/es.js" defer></script>   <!-- …vi, ar, hi, ur, zh -->
   <script src="script.js" defer></script>
   ```
2. **Mark static chrome** with `data-i18n` (textContent), `data-i18n-html`,
   `data-i18n-placeholder`, `data-i18n-aria-label`, etc., and drop the picker host
   into the top bar:
   ```html
   <h1 data-i18n="welcome.title">The Vanished Classroom</h1>
   <div class="langbar"><span class="globe" aria-hidden="true">🌐</span>
     <div data-i18n-picker></div></div>
   ```
3. **Register the UI dictionary** and re-render dynamic content on change:
   ```js
   BreakoutI18n.register("<acronym>", UI);            // UI = { en:{…}, es:{…}, … }
   window.addEventListener("breakout-i18n:changed", onLanguageChange);
   ```
4. **Translate the dynamic content** (exhibits) separately, because it is
   structured data, not chrome. Read `BreakoutI18n.getLang()` at render time and
   pick the matching pack, falling back to English.

### Why content lives in `lang/<code>.js`, not in the i18n dictionary

The i18n engine's dictionary is for **flat chrome strings**. The exhibits are
**structured objects** (arrays of clues and choices), so we keep them in
per-language packs that set a global:

```js
// lang/es.js
window.__TVC_LANG_PACKS__ = window.__TVC_LANG_PACKS__ || {};
window.__TVC_LANG_PACKS__.es = {
  ui: { /* every key from UI.en, translated; keep {tokens} intact */ },
  exhibits: [ /* the 9 exhibits, SAME ORDER, correct answer still index 0,
                 with id and image UNCHANGED (English) */ ]
};
```

At boot, `script.js` folds each pack into `UI[code]` and `EXHIBITS[code]`. Because
answers are stored as the original choice **index** (0–3), a student can switch
languages mid-activity and their score, saved answers, and reveal stay correct.

**Translation rules** (hand these to a translator or a per-language agent):

- Include **every** key from `UI.en`; keep keys unchanged; translate values only.
- Preserve every `{placeholder}` token exactly (`{total} {n} {points} {max} {path}
  {score} {level}`).
- Keep the 9 exhibits in the same order; keep `id` and `image` in English.
- **Do not reorder any choices array** — the correct answer must stay at index 0.
- For historical/technical terms with no common equivalent, give a clear
  description and you may keep the English term in parentheses.
- Do **not** add "machine-translated / pending review" disclaimers (site policy).

---

## 5. Accessibility & UX invariants to preserve

- Skip link; `:focus-visible` outlines; headings get focus on screen change.
- Radios inside `<fieldset>`/`<legend>`; labels wrap inputs; `aria-live` on
  progress, feedback, and the score badge.
- Correct/incorrect is shown with **text + an inset color bar**, never color
  alone.
- Responsive down to ~360px; `prefers-reduced-motion` honored; a dedicated
  `@media print` sheet renders only the reflection.
- No external requests; images degrade to a labeled placeholder.

---

## 6. Validate before shipping

Run a structural check that confirms each language pack matches English and that
the correct answer is authored first. See `tvc/`'s process:

```bash
# syntax-check everything
node --check script.js
for f in lang/*.js; do node --check "$f"; done

# structural parity: UI key sets match, {tokens} preserved, 9 exhibits,
# 4 choices each, id/image unchanged, and choices[*][0] == relic/purpose/replacement
node validate.js     # (see /tmp/validate-tvc.js used for tvc for a template)
```

Then open `index.html`, play through in English, switch each language from the
🌐 picker, complete an exhibit, reach the score screen, and print the reflection.

---

## 7. Publishing (optional)

Add the breakout to the site directory (`projects.js`, `breakouts` category),
regenerate the feed (`node build-feed.js` from repo root), commit, and push — the
GitHub Pages workflow deploys automatically.
