# Technology Operations KPI Scorecard

**District:** Ardent ISD  
**Reporting period:** August 2026  
**Audience:** CTO, operations leaders, principals, cabinet


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Executive KPIs

| KPI | Current | Target | Status | Trend | Owner |
|---|---:|---:|---|---|---|
| Core network availability | 99.94% | 99.90% | ON TRACK | Stable | Infrastructure Manager |
| Critical application availability | 99.76% | 99.80% | WATCH | Improving | Systems Manager |
| Device readiness | 96.1% | 96% | ON TRACK | Improving | Operations Director |
| Inventory accuracy | 94.0% | 98% | WATCH | Improving | Asset Manager |
| Median first response | 6.2 hr | <= 8 hr | ON TRACK | Improving | Help Desk Lead |
| Tickets resolved within SLA | 88% | 90% | WATCH | Improving | Help Desk Lead |
| Backup recovery tests passed | 100% | 100% | ON TRACK | Stable | Systems Manager |
| Account provisioning within standard | 97% | 98% | WATCH | Stable | Identity Lead |

## Campus Service Breakdown

| Campus | Device Readiness | Open Tickets | Median First Response | SLA Compliance | Principal Pulse |
|---|---:|---:|---:|---:|---:|
| Ardent High School | 95.4% | 31 | 7.1 hr | 84% | 4.2 / 5 |
| North Middle School | 97.1% | 18 | 5.8 hr | 91% | 4.5 / 5 |
| Creekside Elementary | 97.8% | 12 | 4.6 hr | 94% | 4.7 / 5 |
| Mesa Elementary | 95.9% | 21 | 6.5 hr | 87% | 4.3 / 5 |

## Interpretation

Averages can hide campus differences. District SLA compliance is close to target, but Ardent High School is materially below the district goal and has the largest open-ticket count. The next management question is whether the gap is caused by ticket mix, staffing coverage, recurring device problems, or workflow.

## Do Not Publish Everything

Some operational measures are useful internally but inappropriate for a public dashboard. Avoid publishing details that reveal security architecture, exploitable service weaknesses, privileged access, unpatched systems, incident specifics, or sensitive vendor/contract information.

## GenAI Prompt: Explain an Operations Dashboard to Cabinet

```text
You are a K-12 technology director preparing a cabinet update.

Using only the sanitized KPI table below:
[PASTE DATA]

Identify:
- what is on track;
- the two most important watch items;
- whether an average is hiding a campus or service outlier;
- one question the CTO should ask the technical team;
- one action appropriate for district leadership.

Use plain language and avoid technical jargon.
Do not infer root causes that are not supported by the data.
```

**Live example:** [Open the Technology Operations Dashboard](../dashboards/technology-operations/index.html)


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
