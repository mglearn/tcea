# Handoff for Claude Code

Everything in this bundle was built in a Claude chat session. This file gives you the full context so you can pick up without rediscovering decisions.

---

## The ask

Miguel Guhlin, Director of Professional Development at TCEA, needs an interest poll for the **Pedagogy Showcase, Igniting Excellence**, a paid online professional learning event. The poll has to answer three business questions.

1. Who would come, described without collecting identifying information.
2. Would people attend on a Saturday, and if not, when.
3. Which of the eight proposed sessions would people actually register for.

The planning document behind this event lists four presenters, Bruce, Diana, Peggy, and Miguel, each offering two possible thirty minute session options. The team must pick one option per presenter for the final schedule. The report is built to make that decision fall out of the data.

Proposed pricing under test: ninety nine dollars for TCEA members, one hundred twenty nine dollars for non members, eighty nine dollars for groups of ten or more.

---

## What exists

| File | Purpose | Status |
| --- | --- | --- |
| `index.html` | Public poll, single file, vanilla JS | Complete, QA passed |
| `results.html` | Password protected dashboard | Complete, QA passed |
| `results2.html` | Sample data preview of the dashboard, no password, no endpoint | Twenty invented respondents embedded as `SAMPLE_ROWS` |
| `Code.gs` | Standalone Apps Script backend | Complete, not yet deployed by the user |
| `SETUP.md` | Step by step deployment guide | Complete |
| `qa/mock.json` | Forty seven synthetic responses | For local testing only |
| `qa/run.py` | Playwright QA harness | Serves the files on port 8099 and screenshots both pages |

Both HTML files have `ENDPOINT` wired to the deployed `/exec` URL. If you redeploy in a way that mints a new URL, update that one constant in each file.

---

## Architecture

```
index.html  ──POST JSON──►  Apps Script doPost  ──►  Google Sheet
results.html ──GET ?key=── ►  Apps Script doGet   ──►  JSON rows
```

The Apps Script project is **standalone**, not bound to a spreadsheet. On first call, `getSheet_()` creates the spreadsheet, stores the ID in script properties, names the tab `Responses`, and writes a formatted header row. The user runs `setup()` once from the editor to trigger this and log the URL.

POST uses `Content-Type: text/plain;charset=utf-8` deliberately. That avoids a CORS preflight, which Apps Script web apps do not answer.

---

## Design decisions worth preserving

**Question set.** Twelve required questions plus one optional multi select and one optional open text. Four blocks: About your work, When you would attend, What you would attend, What a seat is worth. Target completion time is two minutes.

**Everyone answers the backup windows question**, including people who said Saturday works. That gives a fallback ranking rather than a partial one.

**Two topic questions, not one.** `topics_top3` measures breadth of interest. `topic_first` measures registration intent. The gap between them is the analytically interesting part. A session high on breadth and low on first choice is an opener, not a headliner, and the report says so.

**Top three picker swaps rather than blocks.** Selecting a fourth option silently drops the earliest pick. An earlier version disabled the remaining checkboxes at the limit, which forced users to uncheck before changing their mind. Do not revert to disabling.

**Price framing.** Answer bands are anchored around the proposed ninety nine dollar member rate, and a separate question asks who pays. Out of pocket price sensitivity and district budget price sensitivity are different problems and need to be separable.

**Privacy floor.** Cross tabs suppress any group under `MIN_CELL`, currently five. Free text runs through `scrub()` which strips email addresses, phone numbers, and URLs before rendering. Neither is optional. If you add breakdowns, route them through `crosstab()` so suppression applies automatically.

**Password.** Whatever you set `REPORT_KEY` to in `Code.gs` (ships as `CHANGE-ME`), checked server side in `doGet`, not in the browser. The client sends it as a query parameter and Apps Script refuses to return data without it. This stops casual snooping and nothing more. Do not present it as stronger than that.

---

## Constraints to honor

These come from the user's established house style. Deviating creates rework.

- Single self contained HTML files. Vanilla JS only, no frameworks, no build step. The only external request is the Google Fonts CDN.
- CSS custom properties in `:root`, never hardcoded hex in rules.
- TCEA palette: navy `#0A3476`, navy dark `#071f4a`, navy mid `#12428f`, gold `#FCB040`, gold light `#fdd17a`, gold pale `#FEF0D0`, pale navy `#D0D8F0`, border `#e2e7f5`, teal `#0e6b8a`.
- Fonts: DM Serif Display for headings, DM Sans for body.
- `fetch()` calls are cache busted with `Date.now()`.
- Writing style in all user facing text and documentation: no em dashes anywhere, Oxford commas, active voice, second person, numbers one through ten spelled out, no colons in headings. Avoid these words entirely: empower, journey, embark, delve, unlock, elevate, discover, master.
- Hosting target is GitHub Pages at `mglearn.github.io/tcea/`.

The banned word list has one exception already in the files. Original session titles from the planning document use words on the list. Those are quoted source material and stay as written where they appear in full. Shortened labels in the poll avoid them.

---

## Field contract

These ids appear in three places and must stay identical across all of them: question `id` in `BLOCKS` (poll), `FIELDS` array (Code.gs), and the keys read in `build()` (report).

```
role, grades, content, years, setting, member,
saturday, alt_times, length, format,
topics_top3, topic_first, topic_missing,
price, payer, screen
```

Multi select values are stored as a single string joined with ` | `. The report splits on `|` and trims.

The report also matches on exact option text in three objects. Change an option label in the poll and you must change it here too.

- `ORDER` fixes display order for ordinal fields, years, saturday, price, member.
- `TOPIC_META` maps the eight short topic values to presenter, option number, and full title.
- `shortLabel()` abbreviates long option text for cross tab column headers.

---

## QA harness

```bash
python3 qa/run.py
```

It starts a local server on 8099, drives both pages with Playwright at 1100px and 390px, prints computed insights and cross tabs, captures screenshots, and reports console errors. It expects `qa/report.html` and `qa/poll.html`, which are copies of the real files with `ENDPOINT` pointed at `qa/mock.json`. Regenerate those copies after any edit:

```bash
cp index.html qa/poll.html
cp results.html qa/report.html
sed -i 's|^const ENDPOINT = ".*";|const ENDPOINT = "mock.json";|' qa/report.html
```

Last run: no console errors, forty seven mock responses, all charts and cross tabs rendering, suppression notice firing correctly for groups under five.

---

## Known gaps and reasonable next work

- **No duplicate submission guard.** Someone can submit twice. A per browser flag would help but is defeatable, so it was left out rather than implying protection that does not exist.
- **No conditional question logic.** The backup windows question shows for everyone by design, but if the question set grows, a `showIf` mechanism in the render loop would be the clean addition.
- **The report loads every row on each refresh.** Fine at a few thousand responses. Past that, move aggregation into `doGet` and return counts instead of rows.
- **No thank you page redirect.** Submission swaps to an inline confirmation. If the team wants a discount code delivered on completion, that is where it goes.
- **Insights are template driven,** not statistical. They restate the largest numbers with a recommendation attached. If the team wants confidence intervals or significance testing on the presenter matchups, that work does not exist yet.
