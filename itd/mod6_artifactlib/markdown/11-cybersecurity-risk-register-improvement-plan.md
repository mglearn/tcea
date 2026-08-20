# Ardent ISD

## Artifact 11: Cybersecurity Risk Register and Improvement Plan

*Prioritized leadership view of cyber risk aligned to NIST CSF 2.0*

**Owner:** CTO / Cybersecurity Governance Committee  
**Related policy/procedure:** CQB; strategic technology plan; budget  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

## How Ardent ISD Uses This Register

The purpose is not to list every technical weakness. It is to identify **material district risks**, assign ownership, prioritize limited resources, and make progress visible to cabinet and the board. The register uses the NIST CSF 2.0 functions - **Govern, Identify, Protect, Detect, Respond, Recover** - as a common language.

### Scoring

- Likelihood: 1 Rare - 5 Likely
- Impact: 1 Low - 5 Severe
- Inherent risk = Likelihood × Impact
- Residual risk = risk remaining after current safeguards

Risk scores support judgment; they do not replace it.

## Sample 2026 Ardent ISD Register

| ID | NIST | Risk statement | L | I | Inherent | Existing safeguards | Residual | Priority action | Owner | Target |
|---|---|---|---:|---:|---:|---|---:|---|---|---|
| R-01 | Protect | Privileged account compromise could enable broad access across SSO, cloud, and infrastructure | 4 | 5 | 20 | MFA; separate admin IDs | 12 | phishing-resistant MFA for Tier 0 admins; quarterly access review | CTO | Q2 |
| R-02 | Recover | Backups may not restore critical systems within required time during ransomware | 3 | 5 | 15 | daily backups; offsite copy | 10 | quarterly restore test for SIS, ERP, identity; immutable copy | Infrastructure | Q2 |
| R-03 | Govern | Vendor security/privacy review is inconsistent across campus purchases | 4 | 4 | 16 | procurement review for major contracts | 12 | require Artifact 10 for all tools receiving protected data | Procurement + Privacy | Q1 |
| R-04 | Identify | District lacks complete inventory of SaaS applications and data owners | 4 | 4 | 16 | SSO app list; finance vendor list | 12 | build reconciled SaaS/data inventory | CTO + Finance | Q2 |
| R-05 | Detect | Cloud account compromise may persist too long before detection | 3 | 5 | 15 | native alerts; endpoint tools | 9 | centralize identity/cloud logs; tune high-risk alerts | Security | Q3 |
| R-06 | Protect | Legacy service accounts have excessive privileges and non-expiring secrets | 4 | 4 | 16 | partial password vaulting | 12 | inventory/rotate; managed identities where feasible | Systems | Q3 |
| R-07 | Respond | Incident leadership may lose contact if SSO/email/VoIP fail together | 3 | 4 | 12 | staff cell directory | 8 | offline contact tree + quarterly test | CTO + Communications | Q1 |
| R-08 | Recover | Recovery order is not agreed across instructional/business leaders | 3 | 4 | 12 | DR plan | 9 | cabinet-approved service criticality/RTO map | CTO + CFO | Q2 |
| R-09 | Protect | Portable exports containing employee SPI could be stored unencrypted | 3 | 5 | 15 | endpoint encryption; policy | 8 | block unmanaged USB; encrypted transfer workflow; DLP pilot | HR + IT | Q2 |
| R-10 | Govern | Staff may place protected data into unapproved generative AI tools | 4 | 4 | 16 | acceptable use guidance | 12 | approved AI list; data handling training; technical controls | CTO + Curriculum | Q1 |
| R-11 | Respond | Vendor breach notices may arrive without enough details to meet district clocks | 3 | 4 | 12 | standard contract clause | 8 | strengthen DPA incident clause; vendor contact register | Legal + Procurement | Q2 |
| R-12 | Protect | MFA fatigue/social engineering could bypass traditional push-based MFA | 4 | 4 | 16 | MFA required | 10 | number matching/stronger factors; targeted training | Security | Q2 |

## Improvement Plan: Top Five Priorities

### Priority 1 - Privileged Identity Protection

**Outcome:** Tier 0/critical administrators use stronger MFA; access reviewed quarterly.  
**Evidence:** access-review log, authentication policy, reduction in standing admin access.  
**Budget:** $18,000 estimated implementation/keys/training.  
**Tradeoff:** additional administrative friction for a small number of high-risk accounts.

### Priority 2 - Tested Recovery

**Outcome:** Ardent can demonstrate recovery of identity, SIS, ERP, and critical file services from protected backups.  
**Evidence:** quarterly restore test with actual measured RTO/RPO and gaps.  
**Board message:** “We do not call a backup successful until we have restored from it.”

### Priority 3 - Vendor Governance

**Outcome:** Any tool receiving protected district data completes the Vendor Security & Privacy Review Packet before procurement/renewal.  
**Evidence:** approval register, renewal dates, data owners, completed reviews, rejected/conditioned vendors.

### Priority 4 - SaaS / Data Inventory

**Outcome:** District can answer “Which vendors hold student or employee data, who owns the relationship, and when does the contract end?”  
**Evidence:** reconciled inventory across SSO, finance, procurement, curriculum, and campus purchasing.

### Priority 5 - Incident Communications Resilience

**Outcome:** Incident team can coordinate even when district SSO/email/VoIP is unavailable.  
**Evidence:** offline contact sheet, alternate conference method, tabletop test results.

## Quarterly Cyber Governance Dashboard

| Indicator | Target | Current sample | Status |
|---|---:|---:|---|
| Critical systems with tested restore in last 90 days | 100% | 75% | Needs work |
| Tier 0 admins using strongest approved MFA | 100% | 62% | Needs work |
| Tier 1 vendors with current risk review | 100% | 68% | Needs work |
| Staff cybersecurity training completion | 100% | 97% | Watch |
| High-risk findings past target date | 0 | 3 | Needs work |
| Incident tabletop exercises completed this year | 1+ | 1 | On track |

## Governance Review Questions

1. Which residual risks are above the district's tolerance?
2. Which risks need superintendent/board awareness because mitigation requires funding or policy change?
3. Which risks are being accepted, by whom, and until when?
4. What evidence shows that a control works, rather than merely exists?
5. What new risks came from vendor changes, AI adoption, staffing, or infrastructure changes?

## References

- [NIST Cybersecurity Framework 2.0](https://www.nist.gov/cyberframework)
- [CISA - Protecting Our Future: Cybersecurity for K-12](https://www.cisa.gov/resources-tools/resources/report-protecting-our-future)
- [K12 SIX - Cybersecurity Essentials Series and Incident Response Runbook](https://www.k12six.org/essentials-series)
- [CoSN - K-12 Community Vendor Assessment Tool (K-12CVAT)](https://www.cosn.org/tools-and-resources/resource/k-12cvat/)
- [TASB - School Cybersecurity: Texas Requirements](https://www.tasb.org/resources/esource/school-cybersecurity-texas-requirements)
