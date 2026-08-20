# Data Display Pattern Gallery

The best display begins with the question the reader needs to answer, not with a favorite chart type.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


**Live tool:** [Open the interactive Data Display Pattern Gallery](../tools/pattern-gallery.html)

## The Five-Second Test

Before you build, complete this sentence:

> **Within five seconds, the reader should be able to answer:** ______________________________________

If the display cannot answer that question quickly, simplify it.

## Pattern Selection Guide

| Pattern | Best For | Avoid When | Hosting Complexity |
|---|---|---|---|
| KPI / stat card | One headline value, target, or trend | Several categories need comparison | Easy - CSS |
| Progress bar | Progress toward a known target | Target is arbitrary or misleading | Easy - CSS |
| Comparison table | Exact values across a small set | The reader mainly needs visual ranking | Easy - CSS |
| Horizontal bar | Ranking categories | Time order is the main story | Easy - CSS/SVG |
| Line trend | Change across ordered time | Categories are unrelated | Easy/Medium |
| Status card | Health, owner, next action | Precise magnitude matters most | Easy - CSS |
| Timeline | Milestones and sequence | The main question is current performance | Medium - JS helpful |
| Searchable table | Long operational lists | Executive summary is the goal | Medium - JS |

## Prompt: KPI / Stat Card

```text
Create a clean KPI stat card using the sanitized data below.
Show the current value, target, status, and one short interpretation.
The card must be readable on mobile, accessible, and self-contained HTML/CSS.
Do not animate unless animation adds meaning.

Data:
[PASTE DATA]
```

## Prompt: Progress Bar

```text
Create a responsive progress-bar display for this K-12 project KPI.
Show current value, target, percentage of target, and status.
Use plain-language labels and accessible contrast.
Do not imply that 100% is good if the measure is 'lower is better.'

Data:
[PASTE DATA]
```

## Prompt: Comparison Display

```text
Recommend whether a comparison table or horizontal bar chart better answers this leadership question:
[QUESTION]

Data:
[PASTE SANITIZED DATA]

Explain the choice first. Then generate a self-contained display using the selected pattern.
```

## Prompt: Trend Display

```text
Create a simple trend display for the ordered time-series data below.
Highlight the target if one exists and annotate only material changes.
Do not invent missing periods or causes.

Data:
[PASTE SANITIZED DATA]
```

## Prompt: Searchable Operational Table

```text
Build a self-contained HTML table for the sanitized data below.
Include search, column sorting, and mobile-friendly overflow.
Do not transmit data to an external service.
Include a clear last-updated date and a reset button.

Data:
[PASTE SANITIZED DATA]
```

## A Practical Build Sequence

Use a **VIBES-style visualization workflow**:

1. **Vision:** State the one question the reader should answer.
2. **Instruct:** Specify audience, display pattern, hosting location, accessibility, branding, and technical constraints.
3. **Build:** Supply sanitized data and generate one display at a time.
4. **Evaluate:** Verify numbers, formulas, labels, mobile behavior, accessibility, and interpretation.
5. **Ship:** Publish, embed, test the live version, and establish an update owner.

## Hosting Rule of Thumb

- CSS-only displays are the easiest to embed almost anywhere.
- JavaScript displays are well suited to GitHub Pages or another approved web host.
- If a content platform strips JavaScript, host the display separately and embed it in an iframe rather than fighting the editor.


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
