# Science Critical Thinking Online Breakouts — Development Guide, Grades 1–8

A roadmap for building **standards-aligned Critical Thinking Online Breakouts** for the Texas science
classroom, anchored in the **2021 Texas Essential Knowledge and Skills for Science**
(19 TAC Chapter 112: elementary §112.A, middle school §112.B / §112.26–28). Each
breakout targets the **hardest, lowest-achievement concepts** for its grade, folds in a
**STEM engineering design challenge**, and follows the Critical Thinking Online Breakout engine and craft rules in
[`../ctob_project_pack.md`](../ctob_project_pack.md).

Design reference: TCEA, *Digital Breakouts 101* (blog.tcea.org/digital-breakouts-101/)
— a breakout is a locks-and-clues puzzle that rewards collaboration and critical thinking;
good ones pick clear standards, wrap them in a story/theme, and make every lock solvable
**only by reasoning from the clues**. Engineering process reference: TEA, *Developing an
Engineering Design Challenge* (grades 1–8, in `info/`): **define → imagine → brainstorm →
plan → create → test → improve**, with **Claim–Evidence–Reasoning (CER)** communication and
a **STEM career highlight** for every challenge.

> **Status:** Grades **6, 7, and 8 are built and verified** (`grade6/`, `grade7/`, `grade8/`).
> Each grade page is a **hub** holding its featured breakout, a printable STEM engineering design
> challenge, a student word bank (glossary), and a password-protected answer key; `science/index.html`
> is a lean table of contents linking the three grade hubs. **Next phase:** a "More" set — one short
> Critical Thinking Online Breakout per key concept, surfaced as pillboxes on each grade hub — then
> Grades 1–5 (outlined below).

---

## 1. How every science breakout is designed

- **6 clues, exactly one decoy.** Clues carry all evidence needed; the decoy is a true-but-
  off-topic science fact (an animal/space/materials fact) that one lock forces students to exclude.
- **4 locks, one of each type** — `seq`, `mc`, `multi` (3 strong + 1 decoy), `word` — arranged
  for a good arc. Every lock's `reason` **names the thinking move**.
- **Target the misconception, not just the fact.** Each lock is aimed at a documented
  middle-school science misconception (see the tables below), because that is where achievement
  is lowest.
- **Recurring themes as the spine.** Every §112.B breakout is framed with the TEKS recurring
  themes: *patterns; cause & effect; scale, proportion & quantity; systems & models; energy &
  matter; structure & function; stability & change.*
- **STEM engineering companion.** A printable hands-on challenge that makes students *build* and
  *iterate* on the anchor concept, aligned to the grade's engineering-practice TEKS (`_.1.B`,
  `_.1.G`, `_.2.D`, `_.3.A–C`, `_.4.C`).
- **English-first, 7 languages.** Author English; the engine serves all 7 languages immediately
  via fallback, and native translations layer in later (pack §4–5).

Grade-band skill ladder (from the pack, science-tuned):

| Band | Reading level | Reasoning focus the locks train |
|------|---------------|---------------------------------|
| 1–2  | ages ~6–8 | observe vs. infer, sort by property, sequence a simple change, name a tool |
| 3–5  | upper elem. | measurable properties, patterns in data, cause & effect, fair-test thinking |
| 6–8  | middle | systems & models, quantitative reasoning, evidence vs. irrelevant fact, mechanism |

---

## 2. Middle-school research synthesis (§112.26–28)

### Recurring strands (all of grades 6–8)
1. **Scientific & engineering practices** (≥40% of instructional time): ask questions/define
   problems; plan & conduct descriptive, comparative, experimental investigations; use tools &
   SI units; build tables/graphs; **develop & use models**; distinguish hypothesis/theory/law;
   analyze data; evaluate designs; develop, communicate & argue explanations; STEM careers.
2. **Recurring themes & concepts** (the seven listed above).
3. **Matter and energy.**
4. **Force, motion, and energy.**
5. **Earth and space.**
6. **Organisms and environments.**

### Grade 6 (§112.26) — key concepts & vocabulary
- **Matter:** states & kinetic energy of particles; pure substance vs. homogeneous/heterogeneous
  mixture; periodic table (metal, nonmetal, metalloid, rare-earth); **density relative to fluids**;
  evidence of chemical change (gas, thermal-energy change, precipitate, color change).
- **Force, motion, energy:** forces (gravity, friction, magnetism, applied, **normal**); **net
  force, balanced vs. unbalanced**; **Newton's Third Law** action–reaction pairs; **potential
  (gravitational/elastic/chemical) vs. kinetic energy**; **energy conservation** through transfers
  (circuits, food webs, rides, photosynthesis); transverse & longitudinal waves.
- **Earth & space:** tilted Earth's revolution → **seasons**; Sun–Earth–Moon → daily, **spring &
  neap tides**; spheres (bio/hydro/atmo/geo); Earth's layers (inner core, outer core, mantle,
  crust); **rock cycle** (igneous, sedimentary, metamorphic); resource management.
- **Organisms:** interdependence & competition (biotic/abiotic); predatory/competitive/**symbiotic**
  (mutualism, parasitism, commensalism); organism→population→community; **cell theory**;
  prokaryotic/eukaryotic, uni/multicellular, autotroph/heterotroph; variation & survival.

**Hardest / lowest-achievement (targeted by the breakout):** density & flotation
(*"heavy things sink"*); net force & balanced forces (*"moving = unbalanced force"*); **Newton's
Third-Law pairs** (*"they cancel / act on the same object"*); energy conservation (*"energy gets
used up"*); cause of **seasons** (*"Earth is closer to the Sun in summer"* — the *Private Universe*
misconception); tides.

### Grade 7 (§112.27) — key concepts & vocabulary
- **Matter:** element vs. compound (atoms/molecules, symbols, **chemical formulas**); reading a
  formula for atom counts; physical vs. chemical change; **aqueous solutions** (solute, solvent,
  concentration, dilution); dissolution rate (temperature, surface area, agitation).
- **Force, motion, energy:** **average speed** (distance/time); **speed vs. velocity** (distance,
  **displacement**, direction); **distance–time graphs**; balanced/unbalanced forces &
  **Newton's First Law** (inertia); **thermal energy** — conduction/convection/radiation; heat flows
  warm→cool to **thermal equilibrium**; temperature ↔ average kinetic energy.
- **Earth & space:** solar-system objects (Sun, planets, moons, meteors, asteroids, comets, Kuiper
  belt, Oort cloud); gravity governs motion; Earth's habitability; **plate tectonics** (fossil
  evidence, superposition) → earthquakes, mountains, volcanoes, hot spots; human impact on
  watershed/groundwater; human dependence on ocean systems.
- **Organisms:** **energy pyramids / trophic levels** (available energy decreases upward); matter
  cycling & energy flow sustain ecosystems; **human body systems** (11); cell→tissue→organ→system;
  asexual vs. sexual reproduction & diversity; **natural vs. artificial selection**; taxonomy &
  kingdoms.

**Hardest / lowest-achievement:** **speed vs. velocity / distance vs. displacement** (scalar vs.
vector); **interpreting distance–time graphs** (slope = speed; flat line = at rest — a top STAAR
miss); **energy pyramids / 10% rule** (*"bigger animals have more energy"*); **thermal equilibrium
& heat-transfer modes**; reading chemical formulas; natural vs. artificial selection.

### Grade 8 (§112.28) — key concepts & vocabulary
- **Matter:** model classification (element/compound/mixture); periodic table & atoms in reactions;
  **cohesion/adhesion/surface tension** in water; **acids & bases** (pH relative to water);
  **conservation of mass** — atoms rearrange, mass constant; **chemical equations** (incl.
  photosynthesis).
- **Force, motion, energy:** **Newton's Second Law** (a ∝ F<sub>net</sub>/m); all three laws act
  simultaneously (restraints, sports, rides, tectonics, rockets); **waves** — amplitude, frequency,
  wavelength in transverse waves & the **electromagnetic spectrum**; EM applications (radiation
  therapy, wireless, fiber optics, microwaves, UV sterilization, astronomy, X-rays).
- **Earth & space:** **star life cycle & H–R diagram**; galaxies (spiral/elliptical/irregular) &
  the Milky Way; evidence for the origin of the universe; Sun–hydrosphere–atmosphere → weather &
  **climate**; global atmospheric patterns → local weather; ocean currents + air masses → **tropical
  cyclones**; natural events & human activity → climate; **carbon cycle**.
- **Organisms:** disruptions & energy transfer in food webs; primary vs. secondary **ecological
  succession**; **biodiversity** → stability/sustainability; **organelles** (membrane, wall, nucleus,
  ribosomes, cytoplasm, mitochondria, chloroplasts, vacuoles); **genes within chromosomes** &
  inherited traits; variation → structural/behavioral/physiological **adaptations**.

**Hardest / lowest-achievement:** **conservation of mass** (*"mass disappears when something
burns"* — a major STAAR low-performer); **Newton's Second Law** (quantitative F=ma); **wave
properties** (amplitude vs. frequency vs. wavelength); **carbon cycle & climate-vs-weather**;
ecological succession; genes/chromosomes/DNA hierarchy.

---

## 3. The three middle-school breakouts

| Grade | Breakout | Anchor difficult concepts | Lock plan (`seq`/`mc`/`multi`/`word`) | STEM engineering challenge | Career |
|-------|----------|---------------------------|----------------------------------------|----------------------------|--------|
| **6** | **Cargo Ship Rescue** *(built)* | density vs. fluids, net force, Newton's 3rd Law, energy conservation | `seq` crane energy chain · `mc` why steel floats · `multi` balanced forces · `word` "third" | **Build a Cargo Barge** — foil hull, max pennies, iterate | Naval architect / marine engineer |
| **7** | **Rescue Run** | speed vs. velocity, distance–time graphs, energy pyramids, heat transfer | `seq` order a distance–time graph story · `mc` speed vs. velocity · `multi` valid graph reads · `word` "convection"/"equilibrium" | **Keep-It-Cold Container** — insulate, time temperature, graph it | Emergency-management / thermal engineer |
| **8** | **Launch Control** | conservation of mass, Newton's 2nd Law (F=ma), wave properties, carbon cycle | `seq` balance the atoms before/after · `mc` F=ma prediction · `multi` mass-conservation evidence · `word` "conserved"/"wavelength" | **Reaction-in-a-Bag / Straw Rocket** — measure mass before & after; or thrust vs. mass | Aerospace / propulsion engineer |

### Grade 6 — Cargo Ship Rescue *(implemented in `grade6/`)*
Story: the freighter *TEKS Voyager* rides too low, a crate slides, the crane loses power.
- **Clues:** ⚖️ density decides · 🚢 riding too low · 🧲 the sliding crate · 🔁 push back
  (Newton's 3rd) · ⚡ the crane's energy · 🐙 **decoy** (giant Pacific octopus, three hearts).
- **L1 `seq`** electrical → potential → kinetic (energy conserved) · **L2 `mc`** hollow hull
  spreads mass over volume → overall density < water · **L3 `multi`** three strong "net force = 0"
  facts + octopus decoy · **L4 `word`** *third* (Newton's Third Law).
- **STEM:** foil cargo barge, most pennies before sinking, one design change between rounds, CER
  using *mass/volume/density*. TEKS `6.6(D)`, `6.1(B/G)`, `6.2(D)`, `6.3(A–C)`, `6.4(C)`.

### Grade 7 — Rescue Run *(spec)*
Story: a hiker is lost; the response team must plan a route and keep a medical cooler cold.
- **Clue set (draft):** 🏃 average speed = distance ÷ time · 🧭 speed vs. **velocity** (adds
  direction/displacement) · 📈 reading a **distance–time graph** (steeper = faster; flat = stopped)
  · 🔥 heat flows warm→cool until **thermal equilibrium** (conduction/convection/radiation) · 🍃
  **energy pyramid** (only ~10% passes up each level) · 🦇 **decoy** (echolocation fun fact).
- **Locks:** `seq` put a distance–time graph's segments in story order (leave → speed up → rest →
  return); `mc` two teams cover the same distance but only one has zero displacement — which
  statement about speed vs. velocity is supported; `multi` check only the valid reads of the graph
  (+ one decoy misread); `word` *convection* or *equilibrium*.
- **STEM:** design an insulated container; record temperature over time; **graph** it and compare
  slopes to the breakout's graph reasoning. TEKS `7.8(A–C)`, `7.7(A–C)`, plus `7.1`, `7.2(B)`.

### Grade 8 — Launch Control *(spec)*
Story: mission control must clear a rocket — fuel chemistry, thrust, and telemetry all must check out.
- **Clue set (draft):** ⚗️ **conservation of mass** (atoms only rearrange; mass before = mass
  after) · 🚀 **Newton's Second Law** (a = F<sub>net</sub> ÷ m) · 〰️ wave anatomy (amplitude,
  frequency, **wavelength**) · 🌍 **carbon cycle** vs. weather-vs-climate · 🔗 balancing a simple
  equation · 🐢 **decoy** (a sea-turtle navigation fact).
- **Locks:** `seq` order the atoms/steps so mass balances before → reaction → after; `mc` predict
  how doubling mass (or force) changes acceleration; `multi` check only the evidence that mass is
  conserved in a sealed reaction (+ one decoy); `word` *conserved* or *wavelength*.
- **STEM:** **reaction-in-a-bag** (baking soda + vinegar sealed) — mass before vs. after shows
  conservation; **or** a straw/balloon rocket varying mass to test F=ma. TEKS `8.6(E)`, `8.7(A)`,
  `8.8(A)`, `8.11(C)`, plus `8.1`, `8.2`.

---

## 4. Grades 1–5 (next phase, elementary §112.A)
Pitch to the 1–2 and 3–5 ladders above; each grade gets its own folder + engineering challenge
(the TEA grade-1–5 design-challenge PDFs are in `info/`). Candidate anchors:
- **G1** — properties of objects & materials; push/pull forces → *design a ramp/marble path*.
- **G2** — states of matter & changes; weather patterns → *build a rain shelter*.
- **G3** — forces & motion, mixtures, ecosystems/food chains → *design a bridge*.
- **G4** — energy (mechanical/light/sound/heat/electrical), Earth's surface changes → *circuit/
  alarm* build.
- **G5** — measurable properties (density intro), energy flow, Sun–Earth–Moon, adaptations →
  *insulate/keep-warm* build (pre-teaches the Grade 6/7 density & heat ideas).

---

## 5. Correlation & effect-size (per breakout)
Each teacher launch page carries a **Lock → Skill → TEKS (aligned to) → high-effect-size strategy**
table. Name a high-leverage move per lock from Hattie's *Visible Learning*: classifying/sorting
*d*≈0.60, concept mapping *d*≈0.64, feedback *d*≈0.70, transfer *d*≈0.86, worked examples/
misconception work *d*≈0.55–0.57. Middle-school TEKS family: **§112.26–28**. Always state
alignments are *aligned to*, good-faith paraphrase, confirm before adoption, not legal advice.

## 6. Files per grade
```
gradeN/
  index.html                # GRADE HUB: featured breakout + activities, TEKS table, misconceptions
  student.html              # the breakout (loads locales/gradeN.js + shared engine)
  locales/gradeN.js         # window.BREAKOUT (English; 7-language via fallback + later _i18n)
  i18n-index.js             # registers the language picker on the hub page
  glossary.html             # student word bank (grade-appropriate vocabulary)
  engineering-challenge.html# printable STEM design challenge (define→…→improve, CER, career)
  answer-key.html           # AES-256 encrypted teacher answer key (password never committed)
```
Suite-level: `index.html` (table of contents), `policy.html` (FERPA/COPPA/SCOPE/GDPR/CIPA),
`build-answer-key.js` (`node build-answer-key.js <6|7|8> <password>`), this guide. The three
grade breakouts are registered in the site-wide search via `breakouts/build-catalog.js` → `catalog.js`.

## 7. Build & verify (do not skip)
1. Author English content (6 clues incl. one decoy, 4 locks one-of-each, each `reason` names the
   move, solvable from clues alone).
2. Validate the `.js`: parses; per language equal clue/lock counts; **type parity**; `multi` = 3
   strong + 1 false; `seq` pad-keys + answer order consistent; `mc.answerIndex` valid; `word.answer`
   non-empty (localized + English spellings).
3. **Solve in a real headless browser** — open all four locks, assert the win fires with no console
   errors (English + one non-English + one RTL).
4. Later: add per-breakout `_i18n` translation files (same array order/count; typographic quotes,
   no ASCII `"` inside translated strings), a generated correlation page, and an AES-256 answer key
   (password passed at run time, never committed).

*Content CC BY 4.0; code MIT. Aligned to the 2021 Texas Essential Knowledge and Skills for Science;
paraphrased in good faith — confirm before adoption; not legal advice.*
