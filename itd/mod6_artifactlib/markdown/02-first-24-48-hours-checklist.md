# Ardent ISD

## Artifact 2: First 24/48 Hours Cyber Incident Checklist

*Printable leadership checklist for the first two days of a major cybersecurity incident*

**Owner:** CTO / Cybersecurity Coordinator  
**Related policy/procedure:** CQB; Incident Response Plan  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

> **Print and store an offline copy.** During a serious incident, email, cloud storage, SSO, phones, and district websites may be unavailable or untrusted.

## Incident Header

| Field | Entry |
|---|---|
| Incident ID | ______________________________ |
| Discovery date/time | ______________________________ |
| Incident lead | ______________________________ |
| Initial severity | ☐ 1 Event ☐ 2 Limited ☐ 3 Major ☐ 4 Crisis |
| Systems/data suspected | ______________________________ |
| Next executive update | ______________________________ |

## 0-2 Hours: Validate, Stabilize, Preserve

<ul class="checklist">
<li>Open Artifact 3 incident intake/triage record and assign an incident ID.</li>
<li>Confirm a trusted communications channel for the incident team.</li>
<li>Preserve the original alert, email, screenshot, logs, and relevant timestamps.</li>
<li>Identify affected accounts, devices, applications, networks, vendors, and data.</li>
<li>Isolate affected systems/accounts when doing so will reduce harm.</li>
<li>Do not wipe, reimage, factory-reset, or discard potentially relevant devices/logs.</li>
<li>Protect backup systems and administrative accounts from the same compromise.</li>
<li>Notify CTO/Cybersecurity Coordinator and Superintendent based on severity.</li>
<li>Notify District General Counsel when protected data, extortion, law enforcement, or public notice may be involved.</li>
<li>Notify cyber insurer/breach coach according to policy requirements.</li>
</ul>

## 2-6 Hours: Scope and Coordinate

<ul class="checklist">
<li>Activate the cross-functional incident team for Level 3-4 events.</li>
<li>Establish incident objectives for the next operational period: contain, preserve, understand, communicate, recover.</li>
<li>Start a written decision log: decision, owner, time, rationale.</li>
<li>Record the legal clock dates separately: discovery date; determination-of-breach date; eradication; closure; recovery.</li>
<li>Identify likely critical-service impacts: safety, internet, identity, SIS, ERP/payroll, transportation, phones, websites, learning systems.</li>
<li>Determine whether a third-party vendor is involved and preserve the contract/DPA.</li>
<li>Determine whether law enforcement or external forensic support is appropriate.</li>
<li>Prepare a short internal holding statement for staff leaders; do not overstate facts.</li>
</ul>

## 6-24 Hours: Reporting, Containment, Continuity

<ul class="checklist">
<li>Use Artifact 4 to evaluate Texas Cyber Command, Education Code, OAG, parent, employee, insurer, and contractual notices.</li>
<li>If reportable to Texas Cyber Command, report as soon as possible; the current state page strongly encourages within 24 hours and states a 48-hour statutory deadline.</li>
<li>Confirm who is authorized to communicate with TXCC, TEA/state systems, OAG, law enforcement, insurer, vendors, and media.</li>
<li>Implement short-term containment: account lockout, token revocation, firewall/DNS blocks, vendor access suspension, segment isolation, or other approved measures.</li>
<li>Verify whether backups are isolated, recent, readable, and not obviously affected.</li>
<li>Identify manual workarounds for critical school operations.</li>
<li>Prepare executive brief (Artifact 7) with known facts, unknowns, risks, decisions needed, and next update time.</li>
<li>Prepare public/family communications only if needed and after legal review.</li>
</ul>

## 24-48 Hours: Deepen Scope and Build Recovery Plan

<ul class="checklist">
<li>Confirm incident timeline and earliest known malicious activity.</li>
<li>Identify all compromised credentials and privileged accounts.</li>
<li>Confirm data categories potentially viewed, copied, altered, encrypted, or exfiltrated.</li>
<li>Establish recovery sequence and validation criteria for each critical service.</li>
<li>Draft any legally required individual, parent, employee, or regulator notices using Artifacts 5-6 and legal review.</li>
<li>Set a recurring executive/board update cadence.</li>
<li>Track direct costs, vendor time, overtime, replacement equipment, identity protection, and insurance claim numbers.</li>
<li>Preserve evidence and records under direction of counsel/records management.</li>
<li>Document unresolved questions and assign owners.</li>
<li>Schedule the first after-action review date, even if recovery will continue for weeks.</li>
</ul>

## Escalate Immediately If Any of These Are True

<div class="danger"><strong>Escalation triggers:</strong> ransomware/extortion; confirmed data exfiltration; privileged/admin account compromise; backup compromise; districtwide authentication outage; SIS/ERP/payroll interruption; safety-system impact; active fraud/wire-transfer attempt; media contact; threat actor contact; student health/special education records involved; Social Security numbers or financial credentials involved.</div>

## Quick Texas Clock Card

<div class="timeline">
<div><b>ASAP / 24h preferred</b>State cyber reporting when applicable; current TXCC guidance strongly encourages reporting within 24 hours.</div>
<div><b>48 hours</b>Current TXCC page states statutory reporting deadline for covered incidents affecting school districts/local governments.</div>
<div><b>30 days</b>Texas AG notice for a Chapter 521 breach involving at least 250 Texas residents, measured from determination that a breach occurred.</div>
<div><b>60 days</b>General outer deadline for affected-person notice under Texas B&C §521.053, subject to statutory exceptions and counsel review.</div>
</div>

**Post-recovery:** TXCC's current guidance states the follow-up cause analysis is due by the **10th business day after eradication, closure, and recovery** for reportable incidents.

## References

- [Texas Cyber Command - Report a Cybersecurity Incident](https://www.txcc.texas.gov/report-an-incident)
- [Texas Government Code Chapter 2063 - Texas Cyber Command (see § 2063.302)](https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.2063.pdf)
- [Texas Business & Commerce Code Chapter 521 - Identity Theft Enforcement and Protection Act](https://statutes.capitol.texas.gov/Docs/BC/pdf/BC.521.pdf)
- [Texas Education Code § 11.175 - School Cybersecurity](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.11.pdf)
- [CISA - #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
- [U.S. Department of Education - Data Breach Response Checklist](https://studentprivacy.ed.gov/resources/data-breach-response-checklist)
