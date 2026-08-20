# GenAI Prompt Studio for KPIs and Dashboards

Use these as starting prompts. Replace bracketed text with sanitized, fictional, aggregated, or public information.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Prompt 1 - Select Meaningful KPIs

```text
You are helping a K-12 technology director design key performance indicators.

Project or service: [DESCRIPTION]
Strategic goal: [GOAL]
Audience: [AUDIENCE]
Available fields/data sources: [SANITIZED LIST]

Recommend no more than 8 KPIs. For each, provide name, leadership question, definition, formula, direction, likely source, cadence, owner, target-setting considerations, and action threshold considerations.
Separate leading and lagging indicators.
Do not invent local values.
```

## Prompt 2 - Metric or KPI?

```text
Review these K-12 technology measures:
[PASTE SANITIZED LIST]

Classify each as:
- activity/input metric
- process metric
- output metric
- leading KPI
- lagging KPI
- context metric
- not useful without more context

Explain why, then recommend the smallest set for an executive dashboard.
Prioritize decision usefulness over measures that simply make the department look busy.
```

## Prompt 3 - Define a KPI Precisely

```text
Turn this rough measure into a district KPI definition card:
[MEASURE]

Provide: plain-language definition, formula, numerator, denominator, included/excluded population, direction, data source, cadence, owner, target-setting approach, action threshold, caveats, and public/internal/restricted classification considerations.
Flag decisions that require local policy or leadership judgment.
```

## Prompt 4 - Choose the Right Display

```text
I need to communicate the following sanitized K-12 technology data:
[DATA]

Audience: [AUDIENCE]
The one question the reader should answer within five seconds is:
[QUESTION]

Choose from: KPI card, progress bar, comparison table, horizontal bar, line trend, status card, timeline, or searchable table.
Explain the choice. Then propose a layout with no more than three visual elements.
Do not generate code yet.
```

## Prompt 5 - Generate a Self-Contained Display

```text
Create one self-contained HTML file displaying the sanitized data below.

Data: [DATA]
Audience: K-12 district leadership
Display type: [TYPE]

Requirements:
- responsive desktop/mobile
- accessible contrast and labels
- TCEA-inspired navy #0A3476 and gold #FCB040
- no external data transmission
- no framework dependency unless I explicitly approve it
- clear source/reporting period note
- print-friendly

The reader should answer this within five seconds:
[QUESTION]

Return complete HTML and a short note explaining how to replace the sample data.
```

## Prompt 6 - Build a Dashboard from data.md

```text
Build a browser-based KPI dashboard for a K-12 technology department.
Create index.html and data.md.
The HTML should read dashboard values from data.md so a nontechnical staff member normally edits only the Markdown file.

Dashboard sections: [LIST]
Audience: [AUDIENCE]
District/school year/reporting period: [VALUES]
Sanitized KPI data: [PASTE]

Include:
- executive KPI cards
- status indicators
- progress toward targets when meaningful
- detailed breakdown tables
- clear last-updated date
- responsive mobile layout
- print-friendly output
- plain-language labels

Do not invent thresholds. Use only the status rules I provide.
Add a README with update, local-test, GitHub Pages, and iframe instructions.
```

## Prompt 7 - Convert a Spreadsheet Export into data.md

```text
Convert this sanitized CSV/table into Markdown that can feed a lightweight KPI dashboard.
Preserve all rows and numeric values exactly.
Standardize headers but do not change the meaning.
Identify blank, duplicate, or inconsistent values in a separate QA section rather than silently fixing them.

Data:
[PASTE]
```

## Prompt 8 - Create a Board Narrative

```text
Using only this sanitized KPI table, draft a 150-word board-facing update.

[DATA]

Include:
- overall status;
- the two most important changes since the prior period;
- one risk or watch item;
- one action being taken;
- any decision needed from leadership.

Use plain language. Distinguish fact from interpretation. Do not add causes that are not supported by the data.
```

## Prompt 9 - Find the Misleading KPI

```text
Audit this dashboard for misleading indicators or incentives.
[PASTE KPI DEFINITIONS AND VALUES]

Look for:
- activity counts presented as outcomes;
- denominators that may shift;
- averages hiding outliers;
- targets without rationale;
- 'higher is better' assumptions that may be false;
- metrics that could encourage gaming;
- missing context;
- measures that should not be public.

Return risks and recommended revisions. Do not change source values.
```

## Prompt 10 - Dashboard Accessibility Review

```text
Review this HTML/dashboard description for accessibility.
[PASTE CODE OR DESCRIPTION]

Check heading structure, color contrast, non-color status cues, table headers, keyboard use, focus order, link labels, mobile readability, motion, and print behavior.
Return prioritized fixes. Do not claim legal compliance.
```

## Prompt 11 - Public-vs-Internal Review

```text
Classify each dashboard element as suitable for public, internal leadership, restricted operational, or needs legal/privacy/security review.
[PASTE SANITIZED FIELD NAMES/DEFINITIONS]

Explain the classification. Favor caution for cybersecurity, personnel, student-level, procurement-confidential, and incident-specific information.
```

## Prompt 12 - Google Apps Script Planning Prompt

```text
I have a Google Sheet used for a K-12 dashboard and a PUBLIC source that is permitted for automated retrieval.
Do not write code yet.

Source URL/type: [PUBLIC SOURCE]
Sheet columns: [COLUMNS]
Refresh need: [CADENCE]

First propose a safe Apps Script approach, failure handling, duplicate prevention, logging, and trigger plan.
Identify any terms-of-use, authentication, rate-limit, or data-quality questions I should verify.
```

## Prompt 13 - Generate Apps Script After Review

```text
Using the approved plan below, write Google Apps Script that updates the specified sheet from the PUBLIC source.
[APPROVED PLAN]

Requirements:
- comments explaining configuration fields;
- no hard-coded credentials;
- graceful failure with a log entry;
- preserve headers;
- prevent duplicate rows;
- include instructions for a time-driven trigger;
- do not publish the sheet or data automatically.
```

## Prompt 14 - QA Before Publish

```text
Act as a dashboard QA reviewer.
Compare the dashboard output with the source table I provide.
Check every displayed number, label, target, status, reporting period, and formula.
List mismatches. Do not correct values unless I approve.
Then review privacy, accessibility, mobile layout, and stale-data risks.

Source data: [DATA]
Dashboard/code: [OUTPUT]
```

## Prompt 15 - Monthly Refresh Assistant

```text
Here is last month's sanitized KPI table and this month's sanitized KPI table.
Compare them without changing any values.

Return:
- material improvements;
- material declines;
- status changes;
- targets newly met or missed;
- possible data-quality anomalies;
- three questions leaders should ask.

Do not infer causes unless supported by the data.
```


## Source and Alignment Notes

This sample library is designed as a companion to **Module 8: Project Management and Change Leadership** in the TCEA Technology/IT Director Certification. It extends the module's emphasis on desired outcomes, progress reporting, KPIs, dashboards, communication, change adoption, and responsible generative AI use.

Useful reference points:

- [Make Data Displays Without Writing Code](https://blog.tcea.org/make-data-displays-without-writing-code/) - TCEA TechNotes article on GenAI-assisted data displays, dashboard workflows, Google Sheets, GitHub Pages, and embedding.
- [KPI Dashboards Built with Gen AI](https://blog.tcea.org/kpi-dashboards-built-with-gen-ai/) - TCEA TechNotes article demonstrating a browser-based dashboard paired with an editable Markdown data file.
- [Metrics and KPIs Made Easy](https://blog.tcea.org/metrics-and-kpis-made-easy/) - TCEA TechNotes introduction to actionable KPI scorecards for technology leaders.
- [K-12 KPI Dashboard Generator](https://mglearn.github.io/tcea/kpi-dashboard/k12-kpi-dashboard-generator.html) - browser-based KPI planning and dashboard starter.
- [District KPI Dashboard Example](https://mguhlin.github.io/creations/tcea/Dashboard_SchoolKPIs/index.html) - example of a scoreboard-style district dashboard.
- [Data Display Patterns Field Guide](https://mglearn.github.io/tcea/ddp/index.html) - examples, prompts, and hosting considerations for lightweight visual displays.

> **Data note:** Every Ardent ISD number in this library is illustrative sample data. Replace it with locally verified data before operational use.
