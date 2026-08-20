# Project Portfolio KPI Scorecard

**District:** Ardent ISD  
**Reporting period:** August 2026  
**Audience:** Superintendent cabinet and technology leadership  
**Purpose:** Show whether the portfolio is delivering, not merely whether teams are busy.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Portfolio Snapshot

| KPI | Current | Target | Status | Leadership Meaning |
|---|---:|---:|---|---|
| Projects on track | 4 of 6 (67%) | >= 80% | WATCH | Two initiatives need intervention |
| Milestones completed on time | 86% | >= 90% | WATCH | Schedule performance is close but below goal |
| Portfolio forecast variance | +1.8% | within +/- 3% | ON TRACK | Forecast remains within planning tolerance |
| Open high risks | 5 | <= 3 | WATCH | Concentrated in device refresh and LMS adoption |
| Decisions overdue | 1 | 0 | WATCH | Delayed decision affects LMS training calendar |
| Projects meeting adoption target | 2 of 3 measurable | 3 of 3 | WATCH | Technical deployment is ahead of behavioral adoption |

## Project Scorecard

| Project | Health | Progress | Milestones On Time | Budget Position | High Risks | Adoption / Outcome | Decision Needed |
|---|---|---:|---:|---|---:|---|---|
| Staff MFA Rollout | GREEN | 92% | 100% | On plan | 0 | 96% enrolled | None |
| Student Device Refresh | AMBER | 74% | 82% | +2.4% forecast | 2 | 68% staged | Approve temporary summer staffing |
| Wi-Fi Modernization | GREEN | 88% | 95% | -1.1% forecast | 1 | 9 of 10 campuses accepted | None |
| LMS Optimization | AMBER | 61% | 78% | On plan | 1 | 64% weekly meaningful use | Confirm principal champion plan |
| Help Desk Redesign | GREEN | 83% | 91% | On plan | 0 | SLA compliance +9 points | None |
| AI Guidance Rollout | GREEN | 70% | 93% | On plan | 1 | 81% required module complete | None |

## What Cabinet Should Notice

- **Device Refresh:** The primary risk is execution capacity, not procurement. Temporary staging support protects the deployment window.
- **LMS Optimization:** The technical work is progressing, but adoption is below the intended trajectory. Additional training alone is unlikely to solve the issue without principal reinforcement.
- **Portfolio:** Financial performance remains within tolerance. Most intervention need is related to schedule and adoption rather than cost.

## Decision Rules

| Condition | Escalation |
|---|---|
| Project health RED | Sponsor review within 5 business days |
| More than 2 high risks | Add risk summary to cabinet status update |
| Forecast variance outside +/- 3% | CFO and sponsor review |
| Milestones on time below 80% | Recovery plan required |
| Adoption below 80% of target trajectory | Change-readiness diagnosis using ADKAR |
| Decision overdue | Sponsor identifies owner and decision date |

## GenAI Prompt: Create a Portfolio Narrative

```text
Using only the sanitized project scorecard below, draft a concise K-12 cabinet update.

[PASTE SCORECARD]

Structure the update as:
1. portfolio status in 2 sentences;
2. the two items leaders should pay attention to;
3. decisions needed and date needed;
4. one sentence on whether technical completion and adoption are aligned.

Do not add facts that are not in the scorecard.
Do not expose sensitive cybersecurity, personnel, legal, or procurement details.
```

**Live example:** [Open the Project Portfolio Dashboard](../dashboards/project-portfolio/index.html)


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
