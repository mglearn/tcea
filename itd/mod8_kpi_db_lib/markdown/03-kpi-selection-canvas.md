# KPI Selection Canvas

Use this canvas before building a dashboard. The goal is to prevent the common mistake of displaying everything simply because the data exists.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Part A - Define the Decision

| Prompt | Ardent ISD Example | Your Version |
|---|---|---|
| What problem or opportunity are we addressing? | Teachers report uneven help desk response across campuses |  |
| What strategic goal does this support? | Reliable technology services that protect instructional time |  |
| Who needs the information? | CTO, principals, technical services manager |  |
| What decision should the KPI support? | Whether staffing/workflow changes are needed |  |
| How often can that decision reasonably change? | Monthly |  |

## Part B - Write the Leadership Question

A useful question is more specific than "How are we doing?"

**Example:** Are priority classroom issues being acknowledged and resolved within the service expectations we communicated to campuses?

**Your question:**  
____________________________________________________________________________

## Part C - Generate Candidate Measures

| Candidate Measure | Decision Usefulness (1-5) | Data Quality (1-5) | Collection Burden (1-5, lower is better) | Controllable/Influenceable? | Keep? |
|---|---:|---:|---:|---|---|
| Tickets closed | 2 | 5 | 1 | Yes | No |
| Median first response | 5 | 5 | 1 | Yes | Yes |
| SLA resolution compliance | 5 | 4 | 1 | Yes | Yes |
| Customer satisfaction | 4 | 3 | 2 | Partly | Yes |
| Total tickets created | 3 | 5 | 1 | No; demand signal | Context only |

## Part D - Define the KPI

| Field | Example |
|---|---|
| KPI name | Tickets resolved within SLA |
| Leadership question | Are priority classroom issues resolved within promised service targets? |
| Definition | Percent of eligible tickets resolved within the target for their assigned priority |
| Formula | SLA-compliant resolved tickets / eligible resolved tickets x 100 |
| Direction | Higher is better |
| Baseline | 78% average across prior semester |
| Target | 90% |
| Data source | District ticketing platform |
| Owner | Technical Services Manager |
| Reporting cadence | Weekly operations; monthly leadership dashboard |
| Action threshold | Below 82% for two reporting periods triggers root-cause review |
| Context required | Ticket priority mix, major outages, staffing vacancies |

## Part E - Build the Smallest Useful Set

Use a balanced set rather than six versions of the same idea.

- **Outcome:** SLA resolution compliance
- **Leading:** Backlog aging
- **Experience:** Customer satisfaction
- **Demand/context:** Instructional-impact ticket volume
- **Capacity/context:** Tickets per technician or staffing coverage

## Part F - Red Flags

Do not select a KPI simply because:

- the number is easy to collect;
- the number makes the department look busy;
- a vendor dashboard highlights it;
- the metric has no owner;
- the measure cannot influence a decision;
- the formula changes from month to month;
- the target was copied from another district without context;
- the public version would expose sensitive operational or security information.

## GenAI Prompt: Audit Candidate KPIs

```text
Act as a K-12 technology leadership data coach.

Goal:
[GOAL]

Decision we need to make:
[DECISION]

Candidate measures:
[PASTE SANITIZED LIST]

For each candidate:
- classify it as activity, output, leading KPI, lagging KPI, or context metric;
- rate decision usefulness from 1-5;
- identify what additional context is needed;
- identify whether the measure is likely to create a misleading incentive;
- recommend keep, revise, or remove.

Then propose the smallest balanced KPI set that would support the decision.
Do not invent local performance values.
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
