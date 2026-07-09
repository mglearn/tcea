# Problem-Solving Teaching (PST) — PBL Units

Teacher-ready **Problem-Based Learning units** for the Texas history / social-studies classroom,
aligned to the social-studies TEKS (**19 TAC Ch.113**), grades 3–8. Unlike the Critical Thinking
Online Breakouts elsewhere in `breakouts/`, these have **no locks** — each unit is a real,
ill-structured problem students work as **stakeholders**, built deliberately from **surface → deep →
transfer** learning (the transfer/PBL problem is *gated* behind surface + deep).

**18 units live — three per grade, 3–8:**

| Grade | TEKS | Units |
|-------|------|-------|
| **3** | §113.14 Communities | The Town Square Problem · Living with the River · Name the Library |
| **4** | §113.15 Texas History | 1835: What Should Our Family Do? · Fences on the Range, 1883 · The Mission Decision, 1718 |
| **5** | §113.16 US History | A New Life (Immigration, 1914) · 1776: Declare Independence? · Head West, 1846 |
| **6** | §113.18 World Cultures | The Shared River · A Crossroads for the Region · Who Decides? |
| **7** | §113.19 Texas History | Spindletop, 1901 · Dust and Drought, 1935 · One Star or Many? 1845 |
| **8** | §113.20 US History to 1877 | Philadelphia, 1787 · Crossing the Continent, 1845 · A Nation to Reform, 1848 |

Every unit's anchor is that grade's **problem-solving-process TEKS** — `§113.NN(c)(..)(B)` — which the
transfer phase enacts step for step. Each unit has a hub + surface/deep/transfer pages + a
facilitator guide + an assessment pack, and links vetted per-activity sources plus the **ACE Powered
Jigsaw Organizer**.

- **Start here:** [`index.html`](index.html) — the suite splash (7 languages, hero banner).
- **Dashboard:** [`dashboard.html`](dashboard.html) — live counts of surface/deep/transfer activities,
  the high-effect strategies used (Jigsaw *d* 0.92, etc.), and entry/exit-ticket counts. Regenerate
  with `node build-dashboard.js`.
- **Teacher supports:** [`udl.html`](udl.html), [`elps.html`](elps.html), [`guide.html`](guide.html),
  [`correlation.html`](correlation.html) — all 7 languages.
- **How it's built, conventions & the full roadmap:** [`DEVELOPMENT-GUIDE.md`](DEVELOPMENT-GUIDE.md)
  (incl. planned work: native-language translation of unit bodies, arcade entry/exit "games"
  `pst/games/`, High School §113.C with a Panama Canal unit, an ACE Image Inquiry art-analysis unit
  `pst/analysis/`, and a portable **PST Project Pack**).
- **Privacy:** [`policy.html`](policy.html) — collects nothing.

**Languages:** the splash, hero, PD pages, and card chrome are fully multilingual (en/es/vi/ar/hi/ur/zh,
RTL for Arabic & Urdu). Unit *bodies* are English-first (served in all 7 via per-key fallback); the
native-language translation of unit bodies is an in-progress pass, phased by grade — AI-seeded,
pending native review.

`info/` holds source material only (PBL method, effect-size evidence, rubrics, TEKS PDFs) and is
**git-ignored — never deployed**.

Content CC BY 4.0 · code MIT · aligned to (not reproduced from) 19 TAC Ch.113.
