# July 5 & Other Black Freedom Holidays — Digital Breakouts (Grades 3–12)

Twelve self-contained, browser-based digital "breakout" activities that invite students to
investigate the freedom days the national calendar often overlooks — from Frederick Douglass's
July 5, 1852 address to Juneteenth, Pinkster, Watch Night (Freedom's Eve), the First of August,
and Negro Election Day. Students open clues, weigh short source excerpts, and solve four locks
per breakout while practicing evidence-based reasoning. No accounts, no server, no data collection.

## Quick start

Open `index.html` in any modern browser — the top-level landing page links all three grade bands.
Each band folder also has its own `index.html` hub. To publish on GitHub Pages (or any static host),
upload the whole `july5th/` folder; every page is a single HTML file with no build step.

## Structure

```
index.html                     Top-level landing page (all three bands)
correlation.html               Standards correlation guide (TEKS + Common Core + CLEAR)
answer-key.html                Password-protected answer key for all twelve breakouts (AES-256)
grade35/                       Grades 3–5 — Remembering Freedom Days
grade68/                       Grades 6–8 — Community, Voice & Evidence
grade912/                      Grades 9–12 — Public Memory & Argument
```

Each band folder contains:

- `index.html` — band hub (student-facing card menu)
- four teacher launch pages (e.g. `july5.html`) — premise, standards alignment, launch button; **no answers shown**
- four student breakouts (e.g. `july5-student.html`) — the interactive activity
- `answer-key.html` — redirects to the central, password-protected key
- `policy.html` — privacy & compliance policy

### The twelve breakouts

**Grades 3–5 (Remembering Freedom Days)**
1. The Day After the Fireworks — July 5, 1852 and Frederick Douglass's question
2. Freedom's Eve — Watch Night and the Emancipation Proclamation
3. The Pinkster Celebration — an African-American spring festival in colonial New York
4. Juneteenth: Freedom Reaches Texas — June 19, 1865

**Grades 6–8 (Community, Voice & Evidence)**
1. The Corinthian Hall Address — primary-source analysis of Douglass's 1852 speech
2. The First of August — West Indies emancipation (1834) and its celebration
3. Negro Election Day — a Black civic festival in colonial New England
4. Freedom Calendars — evaluating sources and what makes a claim strong

**Grades 9–12 (Public Memory & Argument)**
1. Contested Meaning: Whose Holiday? — holidays as public memory
2. Recovering Lost Observances — historiography and silence in the record
3. The Rhetoric of Civic Speech — ethos, pathos, logos, and irony in Douglass's address
4. Designing a School Observance — building an evidence-based proposal

## Lock types

- **digit** — numeric code (counts, dates, years)
- **mc** — multiple choice (evidence questions)
- **word** — free-text answer
- **seq** — put items in the correct order
- **multi** — select every correct item and none of the incorrect ones (evidence sort)

Each lock reveals a short "why" explanation when solved, so the reasoning sticks — not just the answer.

## Teacher answer key

`answer-key.html` is a single **password-protected** page (AES-256-GCM, PBKDF2). One password unlocks
the answers to all twelve breakouts. The default password is **`freedomdays`** — change it by editing
`PASSWORD` in the generator and re-running, or by re-encrypting the payload. Share the password with
teachers only; the key is never linked from any student page.

## Privacy & compliance

These activities collect **no personal information**: no accounts, no logins, no analytics. Session
progress lives only in the browser and is discarded on close/reset. The single outside network request
is Google Fonts (`fonts.googleapis.com`); it can be removed by self-hosting the two font families for
zero-egress environments. Each band's `policy.html` maps this to FERPA, COPPA, the Texas SCOPE Act,
TEC §32.151–32.156, GDPR, and CIPA, and includes a VPAT-lite accessibility statement. This documentation
is provided to help educators and is not legal advice.

## Standards alignment

Standards references describe content **aligned to** TEKS and Common Core strands. They are summaries
written for this resource, **not** reproductions of official standard statements. See `correlation.html`
for the full mapping and source links, and confirm exact codes against your district's adopted version.

## License

- **Content:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code:** MIT (see `LICENSE`)

Attribution: Miguel Guhlin / TCEA.
