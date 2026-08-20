# Publishing and Embedding Guide

A dashboard is not finished when the HTML works on your laptop. It needs an approved home, an update owner, and a clear decision about who is allowed to see the data.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Hosting Options

| Option | Best Use | Strengths | Watch For |
|---|---|---|---|
| GitHub Pages | Public/sample dashboards and approved static sites | Free/static hosting, works well with HTML/CSS/JS | Repository and data become public unless access is otherwise controlled |
| District web server | Internal or public district-controlled hosting | Local governance and familiar URL | Requires IT support/maintenance |
| Google Sites iframe | Embed an externally hosted display | Easy placement on a Site | Sandboxed behavior; local storage and some browser features may be constrained |
| WordPress iframe | Embed externally hosted JS dashboard | Avoids editors stripping JavaScript | Set adequate height; confirm responsive behavior |
| LMS page iframe | Course/training demonstrations | Keeps learning resource inside course | LMS security policies may restrict embeds |

## GitHub Pages Folder Pattern

```text
my-kpi-dashboard/
  index.html
  data.md
  README.md
```

For a library with several dashboards:

```text
kpi-library/
  index.html
  dashboards/
    technology-operations/
      index.html
      data.md
    help-desk/
      index.html
      data.md
```

## Generic iframe

```html
<iframe
  src="https://YOUR-ORG.github.io/YOUR-REPO/dashboards/technology-operations/"
  width="100%"
  height="760"
  style="border:0;display:block;"
  loading="lazy"
  title="Technology Operations KPI Dashboard">
</iframe>
```

Use a descriptive title. Set an explicit height that fits the display or use an approved responsive embed technique.

## Why External Hosting Helps with JavaScript

Some content-management systems preserve HTML/CSS but remove JavaScript when content is saved. A reliable pattern is to host the working dashboard on GitHub Pages or another approved web host, then embed the page with an iframe.

## Publication Decision Matrix

| Data Type | Public Dashboard | Internal Leadership Dashboard | Restricted Operational View |
|---|---|---|---|
| Aggregate project progress | Often appropriate after review | Yes | Yes |
| Help desk SLA percentages | Often appropriate after review | Yes | Yes |
| Student-level records | No | Only in approved systems | Restricted |
| Staff-level performance/personnel data | No | Needs HR/legal governance | Restricted |
| Vulnerability details | No | Usually restricted | Restricted security workflow |
| Incident specifics before communications approval | No | Limited need-to-know | Restricted |
| Vendor-confidential pricing/terms | No | Limited approved audience | Restricted |
| Publicly approved budget totals | Often | Yes | Yes |

## Version and Update Practices

- Display the reporting period and last-updated date.
- Keep KPI definitions under version control.
- Assign one person/team to update the data source.
- Keep a simple change log for formula/target changes.
- Test links after every structural change.
- Keep a known-good prior version for rollback.
- Do not let a public dashboard become the first place leaders learn about a sensitive incident.

## GenAI Prompt: Prepare an Embed

```text
I have an approved public dashboard at:
[URL]

Create an accessible iframe embed for:
[Google Sites / WordPress / LMS / generic web page]

Requirements:
- 100% width;
- reasonable explicit height;
- no border;
- lazy loading;
- descriptive title;
- mobile-friendly guidance.

Do not add tracking scripts or external services.
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
