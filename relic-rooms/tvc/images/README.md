# The Vanished Classroom — exhibit images

Drop PNGs here to replace the built-in placeholders. **All images are optional** —
each exhibit shows a labeled placeholder if its file is missing, and the welcome
screen falls back to the dusk gradient. Filenames must match exactly (they map to
each exhibit's `id` in `../script.js`).

## Specs

- **Exhibit images:** PNG, ~600–900px wide, landscape or square. The frame caps
  display at ~280px tall. A transparent or dark-friendly background looks best
  against the dusk theme. A single clear object on a plain background reads best.
- **Welcome scene:** wide cover image, ~1600px, used full-bleed behind the title.

## Files and suggested generation prompts

| File | Exhibit | Prompt |
|------|---------|--------|
| `slate.png` | Slate and slate pencil | A single 1800s student writing slate: a thin gray stone tablet in a worn wooden frame, a slate pencil resting on it, plain background, warm museum lighting, simple flat illustration. |
| `hornbook.png` | Hornbook | An 18th–19th century hornbook: a small wooden paddle with a printed alphabet page protected by a thin sheet of translucent horn, plain background, simple flat illustration. |
| `recitation.png` | Rote recitation | A 19th-century schoolchild standing to recite a lesson aloud beside a teacher's tall wooden desk, other children seated on benches, warm period illustration, plain background. |
| `dunce.png` | The dunce cap | A tall cone-shaped paper "dunce" cap sitting alone on a wooden stool in the corner of an old schoolroom, muted period illustration, plain background. |
| `blab.png` | Blab school | A crowded one-room "blab school": many 1800s students reciting their lessons out loud at the same time, mouths open, motion lines suggesting noise, simple flat illustration. |
| `copybook.png` | Copybook penmanship drills | An open 19th-century penmanship copybook: a printed model line of elegant cursive at the top and repeated student copies below, ink pen beside it, plain background. |
| `rod.png` | The rod (corporal punishment) | A plain wooden switch/rod and paddle propped in the corner of an old schoolroom, somber muted tone, period illustration, plain background (no people). |
| `monitorial.png` | Monitorial (Lancasterian) system | A large 1800s Lancasterian schoolroom where an older "monitor" pupil teaches a small cluster of younger children in a row, many groups visible, period engraving style. |
| `oneroom.png` | One-room schoolhouse | The interior of a 19th-century one-room schoolhouse: children of many ages on wooden benches, a black wood stove in the center, chalkboard at front, warm period illustration. |
| `schoolhouse-scene.png` | (welcome background) | A wide, atmospheric dusk view of an abandoned one-room schoolhouse — weathered clapboard building, a lone tree with falling leaves, golden-hour amber sky fading to dark, cinematic, empty and nostalgic. |

## After adding images

No code changes are needed. If you regenerate them and want them on the live
site, commit the `images/` folder and push — the GitHub Pages workflow deploys
automatically.
