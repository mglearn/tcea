# Fourth of July Digital Breakouts (Grades 3–12)

Twelve self-contained, browser-based history "escape" activities for K–12 classrooms, organized into three grade bands. Students open clues, weigh evidence, and crack four locks per breakout while learning U.S. history and practicing critical-thinking habits. No accounts, no server, no data collection.

## Quick start

Open `index.html` in any modern browser. That's the top-level landing page linking all three bands. Each band folder also has its own `index.html` hub.

To publish on GitHub Pages (or any static host), upload the whole `july4/` folder; every page is a single HTML file with no build step.

## Structure

```
index.html                     Top-level landing page (all three bands)
correlation.html               Standards correlation guide (TEKS + Common Core + CLEAR)
grade35/                       Grades 3–5 — The Founding Story
grade68/                       Grades 6–8 — Evidence & Analysis
grade912/                      Grades 9–12 — Argument & Interpretation
```

Each band folder contains:

- `index.html` — band hub (student-facing card menu)
- four teacher launch pages (e.g. `hall.html`) — premise, standards alignment, launch button; **no answers shown**
- four student breakouts (e.g. `hall-student.html`) — the interactive activity
- `answer-key.html` — **teacher only; keep private.** Not linked from any student page.
- `policy.html` — privacy & compliance policy

### The twelve breakouts

**Grades 3–5 (The Founding Story)**
1. The Secret of Independence Hall — the Declaration & 1776
2. The Flag Maker's Workshop — the Stars and Stripes
3. The Liberty Bell's Long Journey — how freedom expanded over time
4. Fireworks Over the Harbor — why and how we celebrate July 4th

**Grades 6–8 (Evidence & Analysis)**
1. The Draft in the Statehouse — primary-source analysis of the Declaration
2. Case File: Cause & Effect — the road to revolution
3. The Unfinished Promise — the ideal of equality vs. reality, and how rights expanded
4. Signal in the Archives — evaluating historical claims and sources

**Grades 9–12 (Argument & Interpretation)**
1. The Philosophy Vault — Enlightenment roots of the Declaration
2. Ratification Deadlock — Federalists vs. Anti-Federalists and the Bill of Rights
3. The Historian's Dilemma — fact vs. interpretation (historiography)
4. The Rhetoric Lab — ethos/pathos/logos and logical fallacies

## Lock types

Five interaction types appear across the suite:

- **digit** — numeric code (counts, dates, years)
- **mc** — multiple choice (evidence questions)
- **word** — free-text answer
- **seq** — put items in the correct order
- **multi** — select every correct item and none of the incorrect ones (evidence sort)

Each lock reveals a short "why" explanation when solved, so the reasoning sticks — not just the answer.

## Privacy & compliance

These activities collect **no personal information**: no accounts, no logins, no analytics. Session progress lives only in the browser and is discarded on close/reset. The single outside network request is Google Fonts (`fonts.googleapis.com`); it can be removed by self-hosting the two font families for zero-egress environments.

Each band's `policy.html` maps this to FERPA, COPPA, the Texas SCOPE Act, TEC §32.151–32.156, GDPR, and CIPA, and includes a VPAT-lite accessibility statement. This documentation is provided to help educators and is not legal advice.

## Correlation guide

`correlation.html` maps all twelve activities by grade band to Texas Essential Knowledge and Skills (2022 Social Studies TEKS, implemented 2024–2025), Common Core literacy standards, and the CLEAR thinking process, with TEA source links. Alignments are given at the knowledge-and-skills **strand level**. Grade 5 is mid-transition between the 2018 (STAAR-assessed) and 2022 numbering, and the SBOE's 2025 review may renumber again (revised standards due July 31, 2026), so confirm exact student-expectation codes against your district's adopted version.

## Standards alignment

Standards references describe content **aligned to** TEKS and Common Core strands. They are summaries written for this resource, **not** reproductions of official standard statements. For exact standard codes and wording, consult the official TEKS and CCSS frameworks.

## Editing content

All clue and lock content lives in two JavaScript arrays near the bottom of each `*-student.html` file: `CLUES` and `LOCKS`. The rendering engine below those arrays is identical across all twelve breakouts — to change a question or answer, edit only the data arrays. After editing, re-run the validation scripts (see below) to confirm integrity and solvability.

## Validation

The suite was checked before delivery with:

- a Node.js probe that parses each file's `CLUES`/`LOCKS`, verifies unique IDs, required fields, and per-lock solvability;
- a Python `HTMLParser` sweep confirming clean HTML nesting;
- a cross-link check confirming every internal link resolves;
- an end-to-end solvability simulation confirming each lock can be solved with its intended answer.

## License

- **Content:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code:** MIT (see `LICENSE`)

Attribution: Miguel Guhlin / TCEA.
