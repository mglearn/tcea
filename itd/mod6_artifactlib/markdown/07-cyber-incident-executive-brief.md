# Ardent ISD

## Artifact 7: Cyber Incident Executive Brief for Superintendent and Board

*One- to two-page leadership status brief that separates facts, risk, decisions, and next steps*

**Owner:** CTO / Cybersecurity Coordinator  
**Related policy/procedure:** CQB; Incident Response Plan  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

## Executive Brief - AISD-IR-2026-004

**Prepared:** March 4, 2026, 3:00 PM  
**Classification:** Confidential incident working document - distribution limited to incident leadership team, superintendent, and counsel  
**Next scheduled update:** March 5, 2026, 10:00 AM

### Situation in One Sentence

Ardent ISD is investigating unauthorized use of a third-party vendor support account that accessed the Student Success Portal; the access has been contained, 3,240 student records may have been viewed, and no district passwords, Social Security numbers, financial data, or student health records are stored in the affected portal.

## What We Know

- Vendor alerted Ardent ISD on **March 3 at 7:42 AM**.
- Unauthorized account activity occurred between **February 27 and March 2**.
- Affected application: Student Success Portal, hosted by a third party.
- Potentially affected records: **3,240 students**.
- Data present: names, district student IDs, campuses, grade levels, guardian emails, limited program-participation flags.
- Vendor support account has been disabled; district integrations have been restricted during review.
- No evidence of malware or ransomware inside Ardent ISD's network has been identified as of this update.

## What We Do Not Yet Know

- Whether every accessible student record was actually viewed.
- Whether any information was copied outside the vendor platform.
- The exact method used to compromise the vendor support account.
- Whether other customers of the vendor were affected.

## Actions Completed

| Action | Status |
|---|---|
| Incident response plan activated | Complete |
| Vendor support access disabled | Complete |
| Relevant logs preserved | Complete |
| Legal counsel engaged | Complete |
| Cyber insurer notified | Complete |
| TXCC report submitted | Complete - within 24 hours in this sample |
| Parent notice draft prepared | In legal review |
| Broader vendor access-control review | Started |

## Legal / Notification Status

**Education Code §11.175:** Counsel's current sample determination is that the incident is reportable because protected/confidential student information may have been viewed by an unauthorized person; parent notice will be provided.

**Texas Cyber Command:** Initial incident report submitted. Follow-up cause analysis will be tracked after eradication, closure, and recovery.

**Texas Business & Commerce Code Chapter 521:** Based on currently identified data types, counsel's sample analysis is that the Chapter 521 sensitive-personal-information breach notice/OAG threshold is not triggered. This will be reevaluated if data scope changes.

## Operational Impact

- Instruction: no interruption.
- SIS/gradebook: no interruption.
- Family portal: unaffected.
- Student Success Portal: temporarily restricted for vendor support functions; staff read-only access continues.
- Technology workload: elevated; two staff reassigned to incident support.

## Decisions Needed From Superintendent/Cabinet

1. Approve parent notification and FAQ once counsel confirms final content.
2. Authorize temporary suspension of vendor support integrations until remediation evidence is received.
3. Approve external review of privileged third-party access across Tier 1 systems.
4. Confirm board update method: confidential briefing through counsel plus public summary if/when parent notice is released.

## Board-Level Message

> The district has contained unauthorized third-party access to a student-support platform. The investigation is active. Student learning systems remain operational. We are following state reporting requirements, working with counsel and cybersecurity partners, and will notify affected families with verified information.

## Next 24 Hours

- validate vendor forensic timeline;
- finalize affected-student list;
- complete parent notice and FAQ;
- evaluate vendor privileged access across SIS, ERP, SSO, and learning systems;
- establish remediation requirements before full vendor access is restored.

## References

- [Texas Education Code § 11.175 - School Cybersecurity](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.11.pdf)
- [Texas Cyber Command - Report a Cybersecurity Incident](https://www.txcc.texas.gov/report-an-incident)
- [TASB - School Cybersecurity: Security Breach Notification and Response](https://www.tasb.org/resources/esource/school-cybersecurity-security-breach-notification-and-response)
- [U.S. Department of Education - Data Breach Response Checklist](https://studentprivacy.ed.gov/resources/data-breach-response-checklist)
