# Dashboard QA, Privacy, and Publication Checklist

Use this checklist before a dashboard is shown to cabinet, a board, principals, staff, families, or the public.


> **GenAI data guardrail:** Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not enter student records, staff records, personally identifiable information, credentials, sensitive cybersecurity details, legal records, confidential procurement material, vendor-confidential information, or sensitive district project information unless your district has explicitly approved the tool and data use.


## 1. KPI Definition and Governance

- [ ] Every KPI answers a current leadership question.
- [ ] Definition and formula are documented.
- [ ] Numerator/denominator populations are clear.
- [ ] Direction (higher/lower/target range) is correct.
- [ ] Baseline period is documented.
- [ ] Target has an owner and rationale.
- [ ] Action threshold is defined where appropriate.
- [ ] KPI has a data owner and a leadership owner.
- [ ] Formula/target changes are versioned rather than silently replaced.

## 2. Data Accuracy

- [ ] Dashboard value matches the source system/export.
- [ ] Reporting period is correct.
- [ ] Last-updated date is visible.
- [ ] Totals reconcile with detail rows where they should.
- [ ] Percentages use the correct denominator.
- [ ] Missing values are labeled, not silently converted to zero.
- [ ] Duplicate rows have been checked.
- [ ] Higher/lower status logic has been tested.
- [ ] Rounding does not materially change interpretation.
- [ ] Human reviewer compared dashboard output with source data.

## 3. Interpretation and Actionability

- [ ] First screen answers the intended five-second question.
- [ ] Activity counts are not presented as outcomes without context.
- [ ] Averages do not hide known campus/service outliers.
- [ ] Watch/Critical items identify an owner or next action.
- [ ] Narrative distinguishes facts from interpretation.
- [ ] Causes are not claimed without supporting evidence.
- [ ] Leaders can identify decisions needed and dates needed.
- [ ] Dashboard is small enough to focus attention.

## 4. Privacy, Security, Legal, and Procurement Review

- [ ] No student-level data is exposed outside an approved system.
- [ ] No personnel/confidential staff data is displayed inappropriately.
- [ ] No credentials, keys, tokens, or secrets are present in HTML/JS.
- [ ] No sensitive network architecture, vulnerabilities, or incident specifics are public.
- [ ] Vendor-confidential pricing/terms are restricted appropriately.
- [ ] Procurement-sensitive data is reviewed before publication.
- [ ] Public-release classification is documented.
- [ ] Communications/privacy/security/legal review occurred when needed.

## 5. Accessibility and Usability

- [ ] Heading hierarchy is logical.
- [ ] Status is conveyed with text/icons, not color alone.
- [ ] Color contrast is readable.
- [ ] Tables have meaningful headers.
- [ ] Links have descriptive text.
- [ ] Keyboard users can reach interactive controls.
- [ ] Focus indicators are visible.
- [ ] Motion/animation is limited and not required to understand the data.
- [ ] Dashboard is readable at a phone-sized viewport.
- [ ] Print/PDF view remains understandable.

## 6. Hosting and Freshness

- [ ] Live URL is correct.
- [ ] Relative links work from the deployed location.
- [ ] data.md/CSV/JSON feed loads successfully.
- [ ] A failed data load does not show old values as if they are current.
- [ ] Update owner and cadence are documented.
- [ ] Automation failure is logged/visible.
- [ ] A stale-data rule is defined.
- [ ] Prior working version can be restored.

## 7. Final Release Decision

**Audience:** ____________________________________________  
**Reporting period:** ____________________________________  
**Data owner approval:** _________________________________  
**CTO/Technology leader approval:** ______________________  
**Communications/privacy/security/legal review if needed:** ______________________  
**Release decision:** Publish / Internal Only / Hold for Revision  
**Date:** _______________________________________________

## GenAI Prompt: QA Assistant

```text
Act as a K-12 dashboard QA reviewer.

Source data:
[PASTE SANITIZED SOURCE]

Dashboard output/code:
[PASTE OUTPUT]

Check:
1. every displayed value against source;
2. formulas and direction;
3. target/status consistency;
4. missing or duplicated values;
5. activity-vs-outcome confusion;
6. accessibility concerns;
7. privacy/security/publication concerns;
8. stale-data risk;
9. mobile/print concerns;
10. claims that go beyond the evidence.

Return a prioritized issue list. Do not silently correct source values.
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
