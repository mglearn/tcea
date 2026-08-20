# Ardent ISD

## Artifact 1: Cybersecurity Incident Response Plan

*Leadership, technical response, communications, legal, insurance, and recovery responsibilities*

**Owner:** Chief Technology Officer / Cybersecurity Coordinator  
**Related policy/procedure:** CQB; FL; records-retention procedures  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

## 1. Purpose

Ardent ISD uses this plan to coordinate a disciplined response to cybersecurity incidents that could disrupt district operations, compromise student or employee information, or damage public trust. The plan is intentionally cross-functional. Cybersecurity incidents are not handled by Technology Services alone.

The district's response objectives are to:

1. protect students, staff, and district operations;
2. contain the incident without destroying evidence;
3. preserve reliable facts for technical, legal, insurance, and law-enforcement review;
4. meet applicable reporting and notification obligations;
5. restore critical services in a controlled order; and
6. document lessons learned and reduce recurrence.

## 2. Governance and Authority

The Superintendent designates the **Chief Technology Officer as Ardent ISD's Cybersecurity Coordinator**. The coordinator activates this plan when an event may meet the district's incident threshold. Texas Education Code §11.175 requires a district cybersecurity policy, a designated cybersecurity coordinator, and reporting/parent notice in specified student-information incidents. Texas reporting also intersects with Texas Cyber Command requirements and Texas Business & Commerce Code Chapter 521. Legal counsel determines the district's legal obligations in a specific event.

### Core Incident Leadership Team

| Role | Primary responsibility during incident |
|---|---|
| Superintendent - Dr. Elena Ramirez | Executive authority; board coordination; continuity decisions |
| CTO / Cybersecurity Coordinator - Morgan Lee | Incident lead; technical coordination; state cyber reporting liaison |
| District General Counsel | Privilege strategy; legal analysis; notification obligations; law-enforcement coordination |
| Chief Communications Officer - Avery Brooks | Internal/external communications; family/media messaging; rumor control |
| CFO / Risk Management - Priya Shah | Cyber-insurance notice; financial controls; emergency procurement |
| Chief HR Officer - Cameron Ortiz | Employee impact; workforce communication; identity protection coordination |
| Student Services / Privacy Lead | Student-record impact; family support; FERPA/Texas student privacy coordination |
| Records Management Officer | Legal hold, records preservation, public-information coordination |
| External IR / Forensics | Evidence collection, scoping, containment and recovery support as authorized |

**Backups and contact information are maintained in a protected offline contact sheet.** At least two members of the incident team shall have access when district systems are unavailable.

## 3. Incident Severity Levels

| Level | Description | Typical examples | Activation |
|---|---|---|---|
| 1 - Event | Suspicious activity with no confirmed compromise or material disruption | blocked phishing attempt; malware quarantined on one device | Technology Services handles; document as needed |
| 2 - Limited Incident | Confirmed compromise with contained scope and limited operational/data impact | compromised user account; lost encrypted device; small unauthorized disclosure | CTO activates limited team; counsel notified when protected data may be involved |
| 3 - Major Incident | Significant compromise, protected-data exposure, multi-system impact, or material service disruption | ransomware in one business system; admin-account takeover; vendor breach affecting district data | Full incident team; insurer and external IR considered immediately |
| 4 - Crisis | Districtwide or safety/continuity impact; widespread data exposure; active extortion | enterprise ransomware; SIS/ERP outage during critical operations; large exfiltration | Superintendent-led crisis structure; full continuity and communications plan |

Severity may increase or decrease as evidence changes.

## 4. Activation and First Actions

When a suspected incident is reported:

1. **Open an incident record** using Artifact 3, *Cyber Incident Intake and Triage Form*.
2. **Validate and scope** before declaring facts. Preserve logs, messages, alerts, and relevant system state.
3. **Contain without destroying evidence.** Isolate affected accounts, devices, or segments as appropriate; avoid wiping or reimaging until the incident lead/forensics team authorizes it.
4. **Protect backups and privileged access.** Confirm backup isolation and review administrative-account activity.
5. **Notify the incident leadership team** based on severity.
6. **Contact cyber insurer/breach counsel** according to policy before retaining outside vendors when coverage terms require it.
7. **Start the legal/reporting clock log** using Artifact 4. Document *discovery*, *determination*, *eradication*, *closure*, and *recovery* dates separately.
8. **Establish a source of truth.** Technical facts go to the incident lead; public-facing facts go through Communications and legal review.

<div class="danger"><strong>Do not:</strong> wipe affected systems, destroy logs, negotiate with an extortion actor, promise that “no data was accessed,” or send public notices before facts and legal obligations have been reviewed.</div>

## 5. Response Lifecycle

### A. Detect and Analyze

- Confirm whether the alert is an event, incident, or suspected breach.
- Identify affected systems, identities, data sets, campuses, vendors, and business processes.
- Determine earliest known malicious activity and likely initial access.
- Determine whether privileged accounts, backups, student records, employee records, financial systems, safety systems, or communications platforms are affected.
- Create an evidence register with source, collector, date/time, and storage location.
- Use NIST CSF 2.0 as a shared vocabulary: **Govern, Identify, Protect, Detect, Respond, Recover**.

### B. Contain

Containment decisions should balance stopping harm against preserving evidence and maintaining school operations. Examples include disabling compromised accounts, revoking sessions/tokens, blocking indicators, isolating devices or VLANs, limiting vendor connectivity, and temporarily disabling high-risk integrations.

### C. Eradicate

Remove malicious persistence, reset credentials in a controlled sequence, patch exploited vulnerabilities, rotate keys/tokens, remove unauthorized applications, and validate that attacker access has been removed.

### D. Recover

Prioritize recovery based on learning and operational impact:

1. identity, authentication, DNS, core network and security controls;
2. safety, communications, payroll/finance and student information systems;
3. instructional platforms and campus services;
4. lower-priority services.

Restored systems should be monitored for recurrence. Backups must be tested before restoration and scanned/validated before being trusted.

### E. Close and Improve

Closure requires technical recovery **and** leadership closure. The team documents:

- what happened and what remains uncertain;
- what data/systems were affected;
- all notifications and reports made;
- recovery milestones and residual risk;
- costs and insurance activity;
- control failures and corrective actions;
- policy/procedure changes;
- lessons for the next tabletop exercise.

Update Artifact 11, *Cybersecurity Risk Register and Improvement Plan*.

## 6. Reporting and Notification

Use Artifact 4 for the operational decision flow. As of this library's August 2026 review:

- Texas Cyber Command states that the same statutory incident-reporting deadlines apply to school districts and charter schools: reporting within **48 hours of discovery** when the incident is reportable, with reporting within 24 hours strongly encouraged, and a follow-up analysis by the **10th business day after eradication, closure, and recovery**.
- Texas Education Code §11.175 requires district reporting as soon as practicable for specified cyberattacks/cybersecurity incidents constituting a breach of system security and requires parental notice when the reportable incident involves a student's information.
- Texas Business & Commerce Code §521.053 can require notice to affected individuals without unreasonable delay and generally no later than the **60th day after the district determines that the breach occurred**; if at least **250 Texas residents** are involved, electronic notice to the Texas Attorney General is required as soon as practicable and no later than the **30th day after determination**.

**District General Counsel validates which statutes, contracts, insurance provisions, and federal privacy rules apply to the facts of each incident.**

## 7. Communications Rules

- Communications owns public messaging; Technology Services provides verified technical facts.
- Use an initial holding statement when facts are incomplete.
- State what is known, what is being investigated, what stakeholders need to do, and when the next update will occur.
- Do not speculate about threat actor identity, ransom amount, data exfiltration, or root cause.
- Use Artifact 8, *Cyber Incident Communications Packet*.

## 8. Vendor Incidents

When a vendor reports an incident:

- obtain incident number, discovery date/time, data types, affected records, attack window, controls involved, containment status, and expected update cadence;
- preserve the vendor's notification and contract/DPA;
- determine whether the vendor is the data owner or merely maintains district data for purposes of Texas notice obligations;
- review contractual notification timelines and cooperation requirements;
- consider disabling integrations or credentials until risk is understood;
- do not assume the vendor's statement resolves Ardent ISD's independent legal duties.

## 9. Exercises and Maintenance

Ardent ISD will conduct at least one cross-functional tabletop exercise annually and after major changes to identity, backup, SIS/ERP, network, or incident-response vendors. The plan is reviewed annually and after every Level 3 or Level 4 incident.

Suggested exercise evidence:

- 24/48-hour checklist completion;
- contact-tree test;
- sample TXCC/OAG decision matrix;
- draft board/family communication;
- restore test from protected backup;
- after-action report with assigned remediation owners.

## Related Artifacts

- Artifact 2 - First 24/48 Hours Cyber Incident Checklist
- Artifact 3 - Cyber Incident Intake and Triage Form
- Artifact 4 - Texas Cyber Incident Reporting and Breach Notification Decision Matrix
- Artifact 7 - Cyber Incident Executive Brief
- Artifact 8 - Cyber Incident Communications Packet
- Artifact 9 - Cybersecurity Incident Quick Runbooks
- Artifact 11 - Cybersecurity Risk Register and Improvement Plan

## Authority and Reference Notes

- [Texas Education Code § 11.175 - School Cybersecurity](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.11.pdf)
- [Texas Government Code Chapter 2063 - Texas Cyber Command (see § 2063.302)](https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.2063.pdf)
- [Texas Business & Commerce Code Chapter 521 - Identity Theft Enforcement and Protection Act](https://statutes.capitol.texas.gov/Docs/BC/pdf/BC.521.pdf)
- [Texas Cyber Command - Report a Cybersecurity Incident](https://www.txcc.texas.gov/report-an-incident)
- [TASB - School Cybersecurity: Texas Requirements](https://www.tasb.org/resources/esource/school-cybersecurity-texas-requirements)
- [TASB - School Cybersecurity: Security Breach Notification and Response](https://www.tasb.org/resources/esource/school-cybersecurity-security-breach-notification-and-response)
- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [CISA - Protecting Our Future: Cybersecurity for K-12](https://www.cisa.gov/resources-tools/resources/report-protecting-our-future)
- [CISA - #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
- [U.S. Department of Education - Data Breach Response Checklist](https://studentprivacy.ed.gov/resources/data-breach-response-checklist)
- [K12 SIX - Cybersecurity Essentials Series and Incident Response Runbook](https://www.k12six.org/essentials-series)
