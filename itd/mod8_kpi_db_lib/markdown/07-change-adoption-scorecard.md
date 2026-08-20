# Change Adoption KPI Scorecard

**Initiative:** Staff MFA and Identity Security Rollout  
**District:** Ardent ISD  
**Reporting period:** August 2026  
**Purpose:** Distinguish technical deployment from individual adoption.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## ADKAR-Aligned Measures

| ADKAR Stage | KPI | Current | Target | Status | What It Tells Us |
|---|---|---:|---:|---|---|
| Awareness | Staff who can explain why MFA is required | 94% | 95% | WATCH | Communication is nearly complete |
| Desire | Staff reporting confidence that change is worth the effort | 82% | 85% | WATCH | Some resistance remains |
| Knowledge | Required MFA learning completed | 97% | 98% | WATCH | Training is nearly complete |
| Ability | Eligible staff successfully complete MFA sign-in without help | 92% | 95% | WATCH | Small usability/support gap remains |
| Reinforcement | Staff still using required MFA method without exception after 60 days | 95% | 95% | ON TRACK | New behavior is becoming routine |

## Supporting Measures

| KPI | Current | Target | Direction | Interpretation |
|---|---:|---:|---|---|
| MFA enrollment | 96% | 98% | Higher | Technical activation is ahead of proficiency |
| Support contacts per 100 staff | 7.4 | <= 5 after stabilization | Lower | Demand remains above steady-state expectation |
| Unresolved exceptions | 18 | <= 10 | Lower | Needs owner-by-owner resolution |
| Campus champion coverage | 100% | 100% | Higher | Every campus has local support |
| User satisfaction with support | 4.4 / 5 | >= 4.2 / 5 | Higher | Support experience is strong |

## What the Scorecard Prevents

A rollout can appear complete because 96% of accounts are enrolled. That does **not** prove that staff understand the change, can complete the workflow independently, or will sustain the behavior. Adoption measures reveal the human side of implementation.

## Intervention Map

| If This Is Weak... | Do More Of... | Do Not Assume... |
|---|---|---|
| Awareness | Explain risk, purpose, and timing | More training will solve it |
| Desire | Address burden, concerns, local impact, trust | People are simply being difficult |
| Knowledge | Training, job aids, demonstrations | Communication alone is enough |
| Ability | Practice, coaching, help desk support, accessibility fixes | Completion equals proficiency |
| Reinforcement | Recognition, reminders, manager expectations, cleanup of exceptions | One successful login means the change is sustained |

## GenAI Prompt: Diagnose Adoption Barriers

```text
Analyze this sanitized K-12 change-adoption scorecard using ADKAR.

[PASTE SCORECARD]

For each ADKAR stage:
- state whether evidence suggests it is strong, uncertain, or weak;
- identify what additional evidence would help;
- recommend one appropriate intervention;
- identify one intervention that would likely miss the actual barrier.

Do not label people as resistant without evidence.
Do not invent local facts.
```

**Live example:** [Open the MFA Change-Adoption Dashboard](../dashboards/mfa-adoption/index.html)


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
