# How to build a Relic Room

A **Relic Room** is a self-contained, 7-language investigation activity: nine
illustrated "mystery exhibits," each answered in three steps — **identify →
understand → connect** — with scoring, a printable reflection, and a TEKS
correlation page. First room: *The Vanished Classroom* (`/tvc/`).

Everything shared lives in `relic-rooms/assets/` (the engine, CSS, stone image,
i18n switcher). A room is just its **content** (a spec + images + translations).

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
    _spec.template.json   room spec (full 85-key UI + 1 example exhibit)
    BUILD-GUIDE.md · CHECKLIST.md
  _specs/<id>.json        ← one spec per room (you author these)
  <id>/                   ← generated room: index.html, data.en.js, policy.html,
                            correlation.html, images/, lang/*.js
  rooms.js · index.html   ← the hub (list of all rooms)
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
2. **Generate**: `node relic-rooms/starter-kit/build-room.js relic-rooms/_specs/<id>.json`
   → writes `relic-rooms/<id>/` (data.en.js, index.html, policy.html,
   correlation.html, empty images/ + lang/).
3. **Images**: add `images/<hero>.png` (welcome background, ~1600px) and one
   `images/<exhibitId>.png` per exhibit (~1200px; optional — a labeled placeholder
   shows if missing). Generate with Canva, review each.
4. **Translate** to `es, vi, ar, hi, ur, zh`: for each, produce
   `lang/<code>.js` setting `window.__ROOM_LANGS__.<code> = { ui:{…}, exhibits:[…] }`
   — same keys as `ui`, same exhibit order, **choice order unchanged** (correct
   stays index 0), `id`/`image` left in English, `{tokens}` preserved. Fan these
   out to parallel agents. Then **re-run the generator** so the new `lang/*.js`
   files are wired into `index.html`.
5. **Verify** (see CHECKLIST): `node --check` all JS; a structural parity check
   (each lang pack's UI keys == English, 9 exhibits, 4-item choices, correct-first);
   and a headless render (9 cards, picker = 7, a completed reveal, RTL for ar/ur).
6. **Register**: add the room to `relic-rooms/rooms.js` (flips its hub card to
   "live") and to root `projects.js` under the **activities** category; run
   `node build-feed.js`.
7. **Ship**: commit, push (the `mglearn` account), let GitHub Pages deploy, and
   confirm the live URLs.

## Reskins

The default look is a graveyard of headstones (fits "vanished/extinct/retired"
themes). For classify themes (minerals, clouds) set `noGround: true` in the spec
and add a per-room card style; the engine and questions stay the same, only the
labels (`questions.*`) and art change.
