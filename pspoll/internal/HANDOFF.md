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

| File | Repo location | Purpose | Status |
| --- | --- | --- | --- |
| `index.html` | `pspoll/` | Public poll, single file, vanilla JS | Complete, QA passed |
| `results.html` | `pspoll/` | Password protected dashboard | Complete, QA passed |
| `results2.html` | `pspoll/` | Sample data preview of the dashboard, no password, no endpoint | Twenty invented respondents embedded as `SAMPLE_ROWS` |
| `Code.gs` | `pspoll/internal/` | Standalone Apps Script backend | Deployed, `/exec` URL wired into both pages |
| `SETUP.md` | `pspoll/internal/` | Step by step deployment guide | Complete |
| `HANDOFF.md` | `pspoll/internal/` | This file | Complete |
| `pedagogy-showcase-poll.zip` | `pspoll/internal/` | Standalone bundle of everything, flat layout | Rebuilt whenever a source file changes |
| `README.md` | zip only | One page orientation, the first thing to read in the bundle | Complete |
| `qa/mock.json` | zip only | Forty seven synthetic responses | For local testing only |
| `qa/run.py` | zip only | Playwright QA harness | Serves the files on port 8099 and screenshots both pages |

`index.html` and `results.html` have `ENDPOINT` wired to the deployed `/exec` URL. If you redeploy in a way that mints a new URL, update that one constant in each of those two files. `results2.html` deliberately has no endpoint at all.

Live URLs:

- Poll, `https://mglearn.github.io/tcea/pspoll/`
- Report, `https://mglearn.github.io/tcea/pspoll/results.html`
- Sample preview, `https://mglearn.github.io/tcea/pspoll/results2.html`

---

## Two layouts, and why paths differ

The same files sit in two arrangements, which trips people up.

**In the repo**, the three published pages live in `pspoll/` and everything else lives in `pspoll/internal/`. That split exists so the deploy workflow can withhold the internal files from the website. See the section on withheld paths below.

**Inside the zip**, everything is flat. `Code.gs`, the Markdown, and all three HTML files sit side by side, plus a `qa/` folder that exists only there. The zip is the thing to hand to somebody who wants to redeploy the system from scratch.

So a command like `cp index.html qa/poll.html` works unmodified inside the unzipped bundle. Working in the repo, the published pages are one level up from this file, so it reads `cp ../index.html qa/poll.html`.

---

## Architecture

```
index.html    ──POST JSON──►  Apps Script doPost  ──►  Google Sheet
results.html  ──GET ?key=──►  Apps Script doGet   ──►  JSON rows
results2.html ──(no network)─►  SAMPLE_ROWS, embedded in the file
```

The Apps Script project is **standalone**, not bound to a spreadsheet. On first call, `getSheet_()` creates the spreadsheet, stores the ID in script properties, names the tab `Responses`, and writes a formatted header row. The user runs `setup()` once from the editor to trigger this and log the URL.

POST uses `Content-Type: text/plain;charset=utf-8` deliberately. That avoids a CORS preflight, which Apps Script web apps do not answer.

---

## Design decisions worth preserving

**Question set.** Eleven questions. Eight required, plus two optional multi selects, `content` and `alt_times`, and one optional open text, `topic_missing`. Four blocks: About your work, When you would attend, What you would attend, Paying for your seat. Most respondents see ten, because `alt_times` appears only for people who rule out a Saturday. Target completion time is under two minutes.

**Only Saturday decliners answer the backup windows question.** It carries `showIf:{field:"saturday", equals:["No, I will not attend on a Saturday"]}`. An earlier version asked everybody, on the reasoning that a fallback ranking beats a partial one. That was reversed deliberately, to keep the form short for the people who already said yes.

The consequence matters when you read the report. Backup window percentages run against the decliners, not the whole sample, and the report labels them that way. Using the full count would understate every window.

**One topic question, not two.** `topics_top3` measures breadth of interest, and it is now the only session signal. An earlier version added `topic_first` to capture registration intent, so the report could show the gap between breadth and intent. That question was cut.

What this costs you: presenter matchups now rank on breadth alone. The report can still say which of a presenter's two options draws more interest, but it can no longer distinguish a session everybody would happily attend from one people would actually register for. If that distinction matters for the final lineup, put `topic_first` back, add it to `FIELDS` in `Code.gs`, and restore the first choice column in both report files.

**Top three picker swaps rather than blocks.** Selecting a fourth option silently drops the earliest pick. An earlier version disabled the remaining checkboxes at the limit, which forced users to uncheck before changing their mind. Do not revert to disabling.

**Prices are stated, not tested.** The poll used to ask what a fair price would be, in bands anchored around the ninety nine dollar member rate. That question was cut, and the planned prices now appear as help text under the payer question: ninety nine dollars for members, one hundred twenty nine for non members, eighty nine for groups of ten or more.

So the poll no longer measures price sensitivity at all. `payer` still tells you where the money comes from, which is what the report shows. If you want willingness to pay back, restore the `price` question and its analysis in both report files.

**Privacy floor.** Cross tabs suppress any group under `MIN_CELL`, currently five. Free text runs through `scrub()` which strips email addresses, phone numbers, and URLs before rendering. Neither is optional. If you add breakdowns, route them through `crosstab()` so suppression applies automatically.

**Password.** Whatever you set `REPORT_KEY` to in `Code.gs` (ships as `CHANGE-ME`), checked server side in `doGet`, not in the browser. The client sends it as a query parameter and Apps Script refuses to return data without it. This stops casual snooping and nothing more. Do not present it as stronger than that.

---

## The sample preview, results2.html

`results2.html` is `results.html` with the network swapped out for twenty invented respondents. It exists so you can show somebody the report before a single real answer arrives.

How it differs from the real report:

- `SAMPLE_ROWS` holds twenty row objects in exactly the shape `doGet` returns, so they flow through the same `build()`, `crosstab()`, and `buildInsights()` code. What you see is what the report genuinely produces, not a drawing of it.
- No password gate and no `ENDPOINT`. `load()` returns a resolved promise over the embedded array. There is nothing to fetch and nothing to protect.
- A banner at the top says plainly that nobody answered the poll. Keep it. The whole page is fiction and a reader who misses that could quote it in a meeting.
- `MIN_CELL` stays at five on purpose. Of the five role groups, two clear the floor and three are suppressed, so the privacy behavior is visible rather than hypothetical.
- Three of the free text answers carry a planted email address, phone number, and URL so `scrub()` can be seen working.

If you regenerate the data, three rules keep it valid. Every value must be an exact option string from `BLOCKS` in `index.html`, because the report matches on exact text and a near miss silently counts as zero. Each respondent picks exactly three topics. And `alt_times` must be empty for anybody who did not answer `No, I will not attend on a Saturday`, since the live poll clears that field when it hides the question.

Avoid ties at the top of `topics_top3`, and avoid a tie for last place. `buildInsights()` has no tie handling, so two sessions level at the top produce "the broadest interest goes to A, ahead of B at the same percent," which reads as broken. The bottom is guarded in code now, since the weakest option line is skipped when the last two are level, but the top is not. Keep one clear leader.

Also keep each presenter pair unequal on breadth, or that pair shows no Stronger badge and the matchup table looks unfinished.

---

## Withheld paths, how the internal folder stays off the website

`pspoll/internal/` is in git but never published. The deploy workflow reads `.pagesignore` at the repo root and deletes every path listed there from its throwaway checkout, immediately before uploading the site artifact. Cloning and pulling still bring the files down, because the repository itself is untouched.

To withhold something else later, add one line to `.pagesignore`. No workflow edit needed.

**Be clear about what this does and does not do.** It hides files from the website. It does not hide them from GitHub. This repository is public, so anything in `pspoll/internal/` is still readable by anyone who browses github.com/mglearn/tcea or fetches a raw URL. Never put a real secret there. The only ways to get actual privacy are to make the repository private or to keep the files out of it entirely.

That is why `REPORT_KEY` ships as `CHANGE-ME` and the real password lives only in the Apps Script editor.

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
role, grades, content, years,
saturday, alt_times, length, format,
topics_top3, topic_missing,
payer, screen
```

Multi select values are stored as a single string joined with ` | `. The report splits on `|` and trims.

The report also matches on exact option text in three objects. Change an option label in the poll and you must change it here too.

- `ORDER` fixes display order for ordinal fields, years, saturday, payer.
- `TOPIC_META` maps the eight short topic values to presenter, option number, and full title.
- `shortLabel()` abbreviates long option text for cross tab column headers.

---

## QA harness

```bash
python3 qa/run.py
```

It starts a local server on 8099, drives both pages with Playwright at 1100px and 390px, prints computed insights and cross tabs, captures screenshots, and reports console errors. It expects `qa/report.html` and `qa/poll.html`, which are copies of the real files with `ENDPOINT` pointed at `qa/mock.json`. Regenerate those copies after any edit.

Run these from the unzipped bundle, where everything is flat:

```bash
cp index.html qa/poll.html
cp results.html qa/report.html
sed -i 's|^const ENDPOINT = ".*";|const ENDPOINT = "mock.json";|' qa/poll.html qa/report.html
```

Working in the repo instead, the published pages are one level up from this file:

```bash
cp ../index.html qa/poll.html
cp ../results.html qa/report.html
sed -i 's|^const ENDPOINT = ".*";|const ENDPOINT = "mock.json";|' qa/poll.html qa/report.html
```

The `sed` runs against **both** copies. An earlier version of these instructions pointed only `qa/report.html` at the mock, which left `qa/poll.html` holding the live `/exec` URL. The harness never completes a submission, so nothing reached the sheet, but one stray click during manual poking would have posted a junk row to production.

The `sed` also matches on the `ENDPOINT` constant rather than on a specific URL, so it keeps working after a redeploy changes the `/exec` address. An even earlier version matched the placeholder text by value and silently did nothing once the real URL was wired in.

`results2.html` needs none of this. It already carries its own data, so serve it and load it directly.

Last run of the Playwright harness: no console errors, forty seven mock responses, all charts and cross tabs rendering, suppression notice firing correctly for groups under five.

`results2.html` was verified separately, by running its script against a stub DOM under Node. All nine element ids resolve, no section renders empty, and the scrubber blanks the planted email address, phone number, and URL.

---

## Known gaps and reasonable next work

- **No duplicate submission guard.** Someone can submit twice. A per browser flag would help but is defeatable, so it was left out rather than implying protection that does not exist.
- **Conditional logic exists but is minimal.** `showIf` supports one field matched against a list of accepted answers, evaluated in `visible()`. It handles hiding, clearing the hidden answer, renumbering, and excluding hidden questions from the required set. It does not support multiple conditions, negation, or nesting. Add those only if a second conditional question actually needs them.
- **The report loads every row on each refresh.** Fine at a few thousand responses. Past that, move aggregation into `doGet` and return counts instead of rows.
- **No thank you page redirect.** Submission swaps to an inline confirmation. If the team wants a discount code delivered on completion, that is where it goes.
- **Insights are template driven,** not statistical. They restate the largest numbers with a recommendation attached. If the team wants confidence intervals or significance testing on the presenter matchups, that work does not exist yet.
