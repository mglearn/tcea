# Build a Dashboard with GenAI - Step-by-Step Lab

**Outcome:** Build a lightweight dashboard similar in concept to the District KPI Dashboard example, with a browser-based presentation file and a simple data file that can be maintained separately.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Step 1 - State the Leadership Question

Complete this sentence before touching code:

> Within five seconds, the dashboard should help **[AUDIENCE]** answer **[QUESTION]**.

Example: *Within five seconds, cabinet should be able to tell whether major technology projects are on track and which one needs a decision.*

## Step 2 - Select 8-15 KPIs

Choose a balanced set:

- 2-4 outcome/result measures;
- 2-4 leading/process measures;
- 1-3 experience/adoption measures;
- 1-3 context measures that explain demand or capacity.

Do not fill the first screen with every metric the department owns.

## Step 3 - Define Each KPI

Use the KPI Definition Dictionary. At minimum document definition, formula, direction, source, owner, baseline, target, cadence, and action threshold.

## Step 4 - Create data.md

Starter example:

```markdown
# Ardent ISD Technology Operations Dashboard
District: Ardent ISD
School Year: 2026-2027
Updated: August 20, 2026
Audience: Cabinet and Technology Leadership

## KPI Cards
| KPI | Current | Target | Unit | Direction | Status | Owner | Note |
|---|---:|---:|---|---|---|---|---|
| Network Availability | 99.94 | 99.90 | % | higher | On Track | Infrastructure | Stable |
| Device Readiness | 96.1 | 96 | % | higher | On Track | Operations | Goal met |
| SLA Compliance | 88 | 90 | % | higher | Watch | Help Desk | Improving |

## Campus Support
| Campus | Open Tickets | Median Response | SLA Compliance |
|---|---:|---:|---:|
| Ardent High | 31 | 7.1 hr | 84% |
| North Middle | 18 | 5.8 hr | 91% |
```

## Step 5 - Ask GenAI to Build the Presentation Layer

```text
Build index.html for a K-12 KPI dashboard that reads values from data.md.
Use a scoreboard-style layout with navigation, KPI cards, status labels, progress toward targets when meaningful, and section tables.
Use TCEA-inspired navy #0A3476 and gold #FCB040.
Make it responsive, accessible, print-friendly, and dependency-free.
If data.md cannot be loaded, show a clear error rather than stale values.
Do not send data to external services.
```

## Step 6 - Test Locally

Because browsers may block `fetch()` when you double-click local files, test through a small local web server:

```text
python -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

The starter dashboard included with this library also has embedded sample fallback data so it remains demonstrable even when opened directly.

## Step 7 - Evaluate Before Styling More

Check:

- Are all source values reproduced exactly?
- Are higher/lower directions correct?
- Are targets and statuses locally approved?
- Does the first screen answer the leadership question?
- Are any averages hiding important outliers?
- Is every status understandable without relying only on color?
- Does the dashboard work on a phone-sized viewport?
- Is the last-updated date visible?

## Step 8 - Refine the Narrative

Do not let the AI invent explanations. Add concise human-reviewed context such as:

- what changed;
- why the measure matters;
- what action is underway;
- what decision is needed.

## Step 9 - Publish on GitHub Pages

1. Create or use an approved repository.
2. Put `index.html` and `data.md` in the published folder.
3. Enable GitHub Pages for the repository/branch/folder your organization allows.
4. Open the live URL and test each section.
5. Confirm that anything public is appropriate for public release.
6. Share or embed the live URL.

## Step 10 - Embed with an iframe

```html
<iframe
  src="https://YOUR-ORG.github.io/YOUR-REPO/"
  width="100%"
  height="700"
  style="border:0;display:block;"
  loading="lazy"
  title="Ardent ISD Technology KPI Dashboard">
</iframe>
```

If the dashboard uses JavaScript and your CMS strips scripts, hosting it separately and embedding the live page is often more reliable than pasting the script into the CMS editor.

## Step 11 - Establish Maintenance Ownership

| Responsibility | Owner |
|---|---|
| Source-system accuracy | Data/system owner |
| data.md update | Dashboard data coordinator |
| KPI definition changes | CTO / leadership team |
| Target changes | Sponsor / cabinet as appropriate |
| Public-release review | CTO + communications/privacy/security as appropriate |
| Technical dashboard maintenance | Technology team |

## Step 12 - Repeat the VIBES Cycle

**Vision -> Instruct -> Build -> Evaluate -> Ship**

Each reporting cycle begins again with the leadership question. A dashboard is useful only while it supports a real decision.

**Included starter:** [Open the Dashboard Starter](../starter/index.html) | [View starter data.md](../starter/data.md)


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
