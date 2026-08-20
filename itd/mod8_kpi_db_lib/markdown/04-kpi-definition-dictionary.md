# KPI Definition Dictionary

A dashboard is only trustworthy when its numbers mean the same thing from one reporting period to the next. Use a KPI dictionary to document the definition behind every executive measure.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## Ardent ISD Sample Dictionary

| KPI | Definition | Formula | Direction | Source | Owner | Cadence | Baseline | Target |
|---|---|---|---|---|---|---|---|---|
| Core network availability | Scheduled instructional minutes the core network is available | Available / scheduled minutes x 100 | Higher | Network monitoring | Infrastructure Manager | Monthly | 99.72% | 99.90% |
| Device readiness | Assigned instructional devices ready for intended use | Ready / assigned x 100 | Higher | MDM + asset system | Operations Director | Monthly | 93% | 96% |
| Median first response | Median business time from ticket creation to first meaningful response | Median elapsed business hours | Lower | Ticketing system | Help Desk Lead | Weekly | 9.4 hr | <= 8 hr |
| Tickets within SLA | Resolved eligible tickets meeting priority target | SLA-compliant / eligible resolved x 100 | Higher | Ticketing system | Help Desk Lead | Weekly | 78% | 90% |
| Inventory accuracy | Sampled assets matching official inventory | Match / sample x 100 | Higher | Asset system + audit sample | Asset Manager | Quarterly | 91% | 98% |
| MFA coverage | Eligible staff accounts enrolled in required MFA | Enabled eligible / eligible x 100 | Higher | Identity platform | Identity Lead | Monthly | 88% | 98% |
| Security training completion | Assigned staff completing required training by due date | Completed / assigned x 100 | Higher | Training platform | Security Lead | Monthly | 92% | 98% |
| Renewals reviewed on time | In-scope renewals reviewed before decision deadline | Reviewed / due x 100 | Higher | Contract tracker | CTO Operations Analyst | Monthly | 74% | 95% |
| Milestones on time | Due project milestones completed by planned date | On-time due / due x 100 | Higher | Project tracker | PMO/CTO | Biweekly | 82% | 90% |
| Open high project risks | Unresolved project risks rated high by approved matrix | Count | Lower | Risk registers | Project Leads | Biweekly | 7 | <= 3 |
| Change activation | Intended users completing the first required adoption action | Activated / intended x 100 | Higher | Platform analytics | Change Lead | Weekly | N/A | 95% by launch +30 |
| 90-day sustained adoption | Intended users meeting defined use expectation 90 days after launch | Sustained / intended x 100 | Higher | Platform analytics | Sponsor | 90 days | N/A | 85% |

## Definition Card Template

**KPI name:**  
**Strategic purpose:**  
**Leadership question:**  
**Plain-language definition:**  
**Formula:**  
**Numerator:**  
**Denominator:**  
**Included population:**  
**Excluded population:**  
**Direction:** Higher / Lower / Target Range / Context Only  
**Data source/system of record:**  
**Data owner:**  
**KPI owner:**  
**Reporting cadence:**  
**Baseline period/value:**  
**Target and effective date:**  
**Action threshold:**  
**Required context/caveats:**  
**Public, internal, or restricted:**  
**Last definition review:**  

## Governance Rules

1. A formula change creates a new version of the KPI definition.
2. Backfill historical values only when the district can recalculate them using the new definition.
3. Display the reporting period and last-updated date.
4. Do not silently change the denominator or included population.
5. Assign both a data owner and a leadership owner.
6. Targets should have a rationale and effective date.
7. Security-sensitive or personnel-sensitive measures should remain restricted even when technically easy to publish.
8. Retire KPIs that no longer influence management decisions.

## GenAI Prompt: Turn a Rough Metric into a Definition Card

```text
Convert the following rough K-12 technology metric into a KPI definition card.

Rough metric:
[METRIC]

Leadership goal:
[GOAL]

Known data fields:
[SANITIZED FIELDS]

Provide:
- KPI name
- leadership question
- plain-language definition
- formula
- numerator and denominator
- included/excluded population
- direction
- likely data source
- reporting cadence
- target-setting considerations
- action threshold considerations
- risks of misinterpretation

Do not invent local baseline or target values.
Flag any ambiguity that requires a district decision.
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
