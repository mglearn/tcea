# The Vanished Classroom (`tvc`)

A single-page **investigation activity** about **instructional practices from the
1800s that classrooms no longer use**. Students explore nine "relics," and for
each one answer three questions — *Identify it → What problem did it solve? → What
replaced it?* — earning up to **27 points**, then finish with a score level and a
printable **History Detective Reflection**.

Built from the reusable pattern documented in
[`../breakouts/GRAVEYARD-STYLE-BREAKOUT-GUIDE.md`](../breakouts/GRAVEYARD-STYLE-BREAKOUT-GUIDE.md),
modeled on *The Technology Graveyard*. It is a self-contained, top-level activity
(bundles its own copy of the i18n engine) — no longer part of the breakouts suite.

## The nine exhibits

1. Slate and slate pencil
2. Hornbook
3. Rote recitation
4. The dunce cap
5. Blab school
6. Copybook penmanship drills
7. The rod (corporal punishment)
8. Monitorial (Lancasterian) system
9. One-room schoolhouse

Each reveals its original **purpose**, a **limitation**, and its **modern
replacement**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Structure + six screens, marked up for i18n; loads the switcher, language packs, then the engine. |
| `i18n.js` | Bundled copy of the shared language-switcher engine (makes the activity self-contained). |
| `styles.css` | Dusk/schoolhouse theme; responsive, RTL-aware, print + reduced-motion styles. |
| `script.js` | English UI + exhibit data and the whole engine (render, score, save, reflect, print). |
| `lang/*.js` | Translation packs: `es`, `vi`, `ar`, `hi`, `ur`, `zh`. |
| `images/` | Optional exhibit art. Absent images show a labeled placeholder — the activity is fully playable without them. |

## Languages

The 🌐 switcher in the top bar offers seven languages via the bundled engine
(`i18n.js`): English, Español, Tiếng Việt, العربية, हिन्दी, اردو, 中文.
The choice is remembered per device and can be shared with `?lang=es` (etc.).
Because answers are stored by choice **index**, switching language mid-activity
never disturbs a student's score or saved progress.

## How it works

- No server, login, analytics, or external libraries — and **no external
  requests at all** (system fonts, local assets only). Progress is saved to
  `localStorage` (`tceaVanishedClassroomV1`); **Reset Activity** clears it. See
  [`policy.html`](policy.html) for the full Privacy &amp; Compliance mapping
  (Texas DPA, FERPA, COPPA, Texas SCOPE Act, GDPR, CIPA, PPRA).
- Correct answers are authored first in each choices array and shuffled for
  display; scoring checks the original index, so it is language-independent.
- Accessibility: skip link, focus management on screen changes, `<fieldset>`
  questions, `aria-live` regions, correctness shown by text + a color bar (not
  color alone), and a print stylesheet that outputs only the reflection.

## Run it

Open `index.html` in any modern browser — that's it. To add images, drop PNGs in
`images/` named to match each exhibit's `image` path in `script.js`
(e.g. `images/slate.png`), plus an optional `images/schoolhouse-scene.png` for
the welcome background.
