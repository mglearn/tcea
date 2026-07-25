# How to build a Relic Room

A **Relic Room** is a self-contained, 7-language investigation activity: nine
illustrated "mystery exhibits," each answered in three steps — **identify →
understand → connect** — with scoring, a printable reflection, a TEKS
correlation page, and an **ACE Framework** panel (see below). First room:
*The Vanished Classroom* (`/relic-rooms/tvc/`).

Everything shared lives in `relic-rooms/assets/` (the engine, CSS, stone image,
i18n switcher). A room is just its **content** (a spec + images + translations).

The whole series is browsed from the **hub** (`relic-rooms/index.html`), which is
itself fully translatable (`hub-i18n.js`), and is explained by the top-level
**ACE Framework** page (`/ace/`), a 7-language teaching companion.

## Architecture

```
relic-rooms/
  assets/                 ← shared, never per-room
    relic-engine.js       generic engine (reads window.__ROOM__ + __ROOM_LANGS__)
    relic.css             dusk/stone theme + tombstone card + grass/rubble
    relic-policy.css      styling for policy + correlation pages
    i18n.js               the 7-language switcher (BreakoutI18n)
    tombstone.png         the shared headstone image
  starter-kit/            ← this pack
    build-room.js         generator: spec.json -> a room folder
    room.template.html    generic page (data-i18n everywhere)
    policy.template.html  privacy/compliance page
    correlation.template.html   TEKS page
    _spec.template.json   room spec (full 109-key UI + example exhibit + ace example)
    BUILD-GUIDE.md · CHECKLIST.md
  _specs/<id>.json        ← one spec per room (you author these)
  <id>/                   ← generated room: index.html, data.en.js, policy.html,
                            correlation.html, images/, lang/*.js
  rooms.js · index.html   ← the hub (list of all rooms)
  hub-i18n.js             ← hub translations (chrome + per-room title/subject/desc)
../ace/                   ← top-level ACE Framework page (index.html + i18n-data.js
                            + images/), the series' teaching companion
```

The data contract (`window.__ROOM__`) and load order are documented at the top of
`assets/relic-engine.js`. Answers are stored by **choice index** with the correct
option authored **first (index 0)**, so language switching never breaks scoring.

## Steps

1. **Copy the spec** → `relic-rooms/_specs/<id>.json`. Fill in `id, brand, accent,
   hero, title, desc, grades, teks`, edit the theme-specific `ui` strings
   (`welcome.*`, `list.eyebrow`, `exhibit.mystery`, `questions.*`, `level.*`,
   `reflection.*`), write the **9 exhibits**, and fill `eras`, `sources`,
   `correlation`.
   - Each exhibit: `relic`, 3–4 first-person `clues`, `purpose`, `limitation`,
     `replacement`, and `choices.{identify,purpose,replacement}` (4 each, **correct
     option first**; the generator enforces `[0] === relic/purpose/replacement`).
   - Give every exhibit a real `eras` string and at least one **verified** source
     link (check the URL resolves).
   - Author the **`ace`** worked example (see "ACE Framework panel" below): a
     `{ title, answer, clues[], articulate, connect, extend }` object built around
     a theme-appropriate relic that is **not** one of the nine graded exhibits, so
     nothing is spoiled. The 24 generic `ace.*` UI strings are already in the
     template's `ui` block — leave them as-is.
2. **Generate**: `node relic-rooms/starter-kit/build-room.js relic-rooms/_specs/<id>.json`
   → writes `relic-rooms/<id>/` (data.en.js, index.html, policy.html,
   correlation.html, empty images/ + lang/).
3. **Images**: add `images/<hero>.png` (welcome background, ~1600px) and one
   `images/<exhibitId>.png` per exhibit (~1200px; optional — a labeled placeholder
   shows if missing). Generate with Canva, review each.
4. **Translate** to `es, vi, ar, hi, ur, zh`: for each, produce
   `lang/<code>.js` setting
   `window.__ROOM_LANGS__.<code> = { ui:{…}, exhibits:[…], ace:{…} }`
   — same keys as `ui` (including the 24 `ace.*` strings), same exhibit order,
   **choice order unchanged** (correct stays index 0), `id`/`image` left in English,
   `{tokens}` preserved. The `ace` object mirrors the English worked example
   (`title, answer, clues[], articulate, connect, extend`). Fan these out to
   parallel agents. Then **re-run the generator** so the new `lang/*.js` files are
   wired into `index.html`.
5. **Verify** (see CHECKLIST): `node --check` all JS; a structural parity check
   (each lang pack's UI keys == English, 9 exhibits, 4-item choices, correct-first);
   and a headless render (9 cards, picker = 7, a completed reveal, RTL for ar/ur).
6. **Register**: add the room to `relic-rooms/rooms.js` (flips its hub card to
   "live") and to root `projects.js` under the **activities** category; run
   `node build-feed.js`. Then add the room's **hub translations** (title, subject,
   desc for each of the 6 languages) to `relic-rooms/hub-i18n.js` under
   `__RELIC_HUB_ROOMS__.<lang>.<id>` so the hub card is translated too (English base
   stays in `rooms.js`; missing entries fall back to it).
7. **Ship**: commit, push (the `mglearn` account), let GitHub Pages deploy, and
   confirm the live URLs.

## ACE Framework panel

Every room's **directions screen** renders an ACE (Articulate · Connect · Extend)
panel: a worked example (clues → mystery answer → the three ACE moves) plus a
classroom-ready ACE card. The engine builds it from `renderAce()` in
`assets/relic-engine.js` using the per-room `ace` object (`window.__ROOM__.ace`,
translated via `__ROOM_LANGS__.<lang>.ace`) and the 24 generic `ace.*` UI strings.
The generator copies `spec.ace` into the room automatically.

- The worked example must use a relic **outside** the nine graded exhibits — it is
  shown before investigating, so it must not reveal an answer.
- The top-level `/ace/` page explains the framework in all 7 languages
  (`ace/index.html` + `ace/i18n-data.js`); each room links to it from the panel.
- `tvc/` is self-contained and carries its own copy of the same ACE logic in
  `tvc/script.js` + `tvc/styles.css` (worked example: the magic lantern).

## Hub language switcher

`relic-rooms/index.html` loads `assets/i18n.js` + `hub-i18n.js` and offers the same
🌐 picker as the rooms. Chrome strings live in `__RELIC_HUB_DICT__`; per-room card
text lives in `__RELIC_HUB_ROOMS__.<lang>.<id>`. The grid re-renders on
`breakout-i18n:changed`, so titles, subjects, descriptions, badges, the note, the
ACE callout, and the footer all switch language together.

## Reskins

The default look is a graveyard of headstones (fits "vanished/extinct/retired"
themes). For classify themes (minerals, clouds) set `noGround: true` in the spec
and add a per-room card style; the engine and questions stay the same, only the
labels (`questions.*`) and art change.
