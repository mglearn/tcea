# Relic Room build checklist

Per room, in order:

## Content
- [ ] `_specs/<id>.json`: id/brand/accent/hero/title/desc/grades/teks set
- [ ] Theme `ui` strings edited (welcome.*, list.eyebrow, exhibit.mystery, questions.*, level.*, reflection.*)
- [ ] 9 exhibits authored; correct choice is **first** in every choices array
- [ ] Every exhibit has an `eras` entry and ≥1 **verified** source link (URL returns 200)
- [ ] `correlation` rows added (TEKS code · paraphrased SE · alignment)
- [ ] Facts sanity-checked; reading level ~grade 7–8; no invented claims

## Generate & assets
- [ ] `node build-room.js _specs/<id>.json` runs clean (validation passes)
- [ ] `images/<hero>.png` added (~1600px) + reviewed
- [ ] `images/<exhibitId>.png` for each exhibit (~1200px) + reviewed (or intentionally left as placeholders)

## Translate (es, vi, ar, hi, ur, zh)
- [ ] `lang/<code>.js` for all six; re-ran the generator to wire them in
- [ ] Parity: each pack's UI keys == English; 9 exhibits; 4-item choices; correct still index 0; `{tokens}` intact; id/image English

## Verify
- [ ] `node --check` on data.en.js + lang/*.js + (engine already checked)
- [ ] Headless: 9 cards render, picker has 7 options, an exhibit scores 3/3, reveal shows era + source link, Arabic sets dir=rtl
- [ ] policy.html + correlation.html render; footer privacy link works
- [ ] No external requests (fonts/CDNs); `<meta name="referrer" content="no-referrer">` present

## Register & ship
- [ ] Added to `relic-rooms/rooms.js` (status: live)
- [ ] Added to root `projects.js` (category: activities); `node build-feed.js`
- [ ] Commit + push (mglearn) + Pages deploy success
- [ ] Live URLs return 200; spot-check on a phone width
