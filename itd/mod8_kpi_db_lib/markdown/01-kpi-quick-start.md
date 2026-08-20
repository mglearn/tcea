# KPI Quick Start for Technology Leaders

**Audience:** K-12 CTOs, CIOs, Technology Directors, IT Directors, and aspiring district technology leaders  
**Purpose:** Turn operational data into an actionable scorecard for leadership decisions.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Metric vs. KPI

A **metric** is a measurement. A **KPI** is a measurement selected because it shows whether a strategic result, service expectation, or project outcome is moving in the intended direction.

| Example | What It Is | Why |
|---|---|---|
| 1,268 tickets closed | Activity/output metric | Shows volume, but not whether users received timely service |
| 91% of priority-2 tickets resolved within SLA | KPI | Connects performance to an agreed service expectation |
| 437 devices installed | Activity/output metric | Shows work completed, but not progress against the rollout plan |
| 87% of the summer device milestone completed by target date | KPI | Connects work to schedule and a defined project result |
| 22 training sessions offered | Activity metric | Counts effort |
| 84% of intended users demonstrate the new workflow without assistance | Adoption KPI | Shows whether the change is becoming usable practice |

## The KPI Design Chain

**Goal -> Leadership Question -> KPI -> Baseline -> Target -> Owner -> Action**

### Worked Example

| Element | Ardent ISD Example |
|---|---|
| Goal | Improve classroom technology support |
| Leadership question | Are teachers receiving meaningful support quickly enough? |
| KPI | Priority-2 tickets resolved within 8 business hours |
| Baseline | 71% |
| Target | 90% |
| Owner | Director of Technical Services |
| Action threshold | Below 80% for two consecutive reporting periods triggers workload and process review |

## Eight Characteristics of a Useful KPI

1. **Relevant:** It answers a real leadership question.
2. **Defined:** People can calculate it the same way each time.
3. **Owned:** Someone is accountable for monitoring and responding.
4. **Timely:** It updates often enough to support a decision.
5. **Comparable:** A baseline, target, trend, or benchmark gives the number meaning.
6. **Actionable:** The district knows what it will do when the KPI moves.
7. **Understandable:** A nontechnical leader can interpret it without a glossary.
8. **Sustainable:** The cost of collecting the data is worth the decision value.

## KPI Types Technology Leaders Should Recognize

| Type | Leadership Use | Example |
|---|---|---|
| Input | What resources are being invested? | Device-refresh funding committed |
| Process | Is the work moving efficiently? | Median account-provisioning time |
| Output | What was produced? | Devices staged |
| Outcome | What changed as a result? | Device readiness during instruction |
| Leading | What may predict future performance? | Training completion before rollout |
| Lagging | What result already occurred? | 90-day sustained adoption |
| Quantitative | What can be counted? | Network availability |
| Qualitative | What do stakeholders report? | Principal confidence pulse |

## Start Small

For a first executive dashboard, choose **8-15 KPIs** rather than every metric the department can produce. Separate outcome indicators from activity indicators. A smaller dashboard forces the team to decide what matters most.

## Monthly KPI Review Routine

1. Verify the source and reporting period.
2. Check whether the formula or population changed.
3. Compare current value with baseline, target, and prior period.
4. Ask what evidence explains the change.
5. Identify the owner and next action for off-target items.
6. Record the decision, not just the number.
7. Retire or replace KPIs that no longer influence decisions.

## GenAI Prompt: Recommend KPIs

```text
You are helping a K-12 technology director design key performance indicators.

Project or service:
[DESCRIBE IT]

Strategic goal:
[GOAL]

Primary audience:
[CTO / cabinet / principals / board / technology staff]

Available data:
[LIST SANITIZED DATA SOURCES OR FIELDS]

Recommend no more than 8 KPIs.
For each KPI provide:
1. KPI name
2. Leadership question it answers
3. Definition
4. Formula
5. Desired direction: higher, lower, or target range
6. Suggested baseline approach
7. Example target, clearly labeled as illustrative
8. Data source
9. Update frequency
10. Owner
11. Action that should occur when performance is outside the target

Separate leading indicators from lagging indicators.
Do not invent district performance data.
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
