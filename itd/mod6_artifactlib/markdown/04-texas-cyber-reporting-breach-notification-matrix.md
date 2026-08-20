# Ardent ISD

## Artifact 4: Texas Cyber Incident Reporting and Breach Notification Decision Matrix

*Leadership decision aid for overlapping Texas reporting and notification duties*

**Owner:** Cybersecurity Coordinator + District General Counsel  
**Related policy/procedure:** CQB; Incident Response Plan; FL  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

## Use This Matrix With Legal Counsel

Texas school districts can face **overlapping but different** reporting duties. An incident may trigger one law and not another. The district should document its reasoning even when counsel determines that a particular notice is not required.

## Decision Flow

### Step 1 - Is there a cybersecurity incident?

Examples: suspected or confirmed unauthorized access, ransomware, compromised account, unauthorized data disclosure/modification, malicious service disruption, or security incident involving a vendor that maintains district data.

- **No:** document and close as a security event if appropriate.
- **Yes/Unknown:** open an incident record and continue.

### Step 2 - Does Texas Education Code §11.175 apply?

Ask:

1. Was there a cyberattack or other cybersecurity incident against district cyberinfrastructure?
2. Did it constitute a **breach of system security** under §11.175 - meaning student information that is sensitive, protected, or confidential under state/federal law was stolen, copied, transmitted, viewed, or used by an unauthorized person?

If **yes**, the statute requires district reporting as soon as practicable using the state-coordinated system, and the Cybersecurity Coordinator must provide notice to a parent/person standing in parental relation when the reportable incident involves the student's information.

**Ardent ISD action:** Cybersecurity Coordinator + counsel document report date, parent-notice plan, affected student population, and exact information involved.

### Step 3 - Does Texas Cyber Command reporting apply?

Current Texas Cyber Command guidance says the statutory reporting deadlines apply to school districts and charter schools. For reportable incidents, the state currently lists:

- **Recommended:** report within 24 hours of discovery;
- **Required:** report within 48 hours of discovery;
- **Required follow-up:** submit incident details/cause analysis by the 10th business day after eradication, closure, and recovery.

Current TXCC guidance describes reportable incidents as including incidents assessed to propagate to other systems, result in criminal violations that must be reported to law enforcement, or involve unauthorized disclosure/modification of confidential information. When facts are uncertain, Ardent ISD will contact TXCC and counsel rather than wait for perfect information.

### Step 4 - Does Texas Business & Commerce Code §521.053 apply?

Ask whether there was unauthorized acquisition of computerized data that compromises the security, confidentiality, or integrity of **sensitive personal information (SPI)** as defined in Chapter 521.

Examples of SPI include certain unencrypted combinations of name + SSN, driver's license/government ID, or financial account credentials, and individually identifying health-care information.

If Chapter 521 applies:

- affected individuals must generally be notified **without unreasonable delay and no later than the 60th day after the district determines that the breach occurred**, subject to statutory exceptions/delay provisions;
- a district or other person that maintains SPI it does not own must notify the owner/license holder immediately after discovering the breach;
- if the breach involves **at least 250 Texas residents**, OAG notice must be submitted electronically **as soon as practicable and no later than the 30th day after the district determines that the breach occurred**.

<div class="callout"><strong>Encryption nuance:</strong> Under §521.002, some name-plus-identifier combinations are defined as SPI only when not encrypted. But §521.053's breach definition expressly includes encrypted data if the unauthorized person also has the decryption key. Do not assume “encrypted” automatically eliminates every reporting or notification duty.</div>

### Step 5 - What other duties may apply?

| Source | Questions to ask |
|---|---|
| FERPA / Student Privacy Policy Office | Is PII from education records involved? Was disclosure authorized? What mitigation/parent communication is appropriate? FERPA does not prescribe a single set of technical security controls. |
| Texas Education Code Chapter 32 / Texas Student Privacy Act | Did an operator of a school-purpose online service expose “covered information”? What does the contract require? Is deletion, use, disclosure, or reasonable-security language relevant? |
| COPPA | For under-13 services, was school consent used within the educational context? Is the vendor using data for any non-school commercial purpose? |
| Contract / DPA | What is the vendor's incident-notification deadline? Cooperation, deletion, audit, indemnity, security, insurance, and subprocessor duties? |
| Cyber insurance | Does the policy require notice through a hotline, use of panel counsel/forensics, or approval before costs are incurred? |
| Law enforcement | Is there fraud, extortion, unauthorized access, theft, or other criminal activity? Who coordinates with TXCC/FBI/local law enforcement? |
| Public Information / Records | What records must be preserved? What cyber-vulnerability/log information may be confidential under law? Coordinate with records officer/counsel. |

## Sample Decision Log: AISD-IR-2026-004

**Facts:** On March 3, 2026, Ardent ISD learned that a vendor support account was used without authorization to access the Student Success Portal. Investigation identified 3,240 potentially viewed student records containing names, district IDs, campuses, grade levels, guardian email addresses, and program-participation flags. No SSNs, financial information, passwords, or health records were stored in the affected portal.

| Question | Sample determination |
|---|---|
| Education Code §11.175? | **Yes** - protected/confidential student information was potentially viewed without authorization. Report/parent notice required; counsel validates. |
| TXCC? | **Yes / report promptly** - unauthorized access to confidential district information; Ardent reported within 24 hours. |
| B&C Chapter 521 consumer notice? | **Not triggered on currently known data types** in this sample; counsel documented the analysis. |
| OAG 250+ notice? | **No, based on the same Chapter 521 analysis** in this sample. |
| FERPA/privacy response? | **Yes** - investigate, mitigate, document, and communicate appropriately. |
| Vendor contract? | **Yes** - enforce incident cooperation and remediation terms. |

> The purpose of this sample is to show why **student privacy notice duties and Chapter 521 consumer-breach duties are not identical**.

## Deadline Tracking Table

| Requirement | Trigger | Sample deadline field | Owner |
|---|---|---|---|
| TXCC initial report | Reportable incident discovered | Discovery + 48 hours maximum under current TXCC guidance | Cybersecurity Coordinator |
| Education Code report | §11.175 breach of system security | As soon as practicable | Cybersecurity Coordinator |
| Parent notice | Reportable §11.175 incident involving student information | Counsel determines timing/content | Cybersecurity Coordinator + Communications |
| Texas AG | Chapter 521 breach involving 250+ Texas residents | Determination + 30 days maximum | Legal/Risk |
| Affected individuals | Chapter 521 breach | Without unreasonable delay; generally determination + 60 days maximum | Legal/Communications |
| TXCC follow-up | After eradication, closure, and recovery | 10th business day after those milestones | Cybersecurity Coordinator |

## TASB/TASA Alignment Note

TASB's public materials identify **CQB - Technology Resources: Cybersecurity** as the policy area for district cybersecurity and separately maintain member guidance on Texas cybersecurity requirements and breach response. TASB also advises districts to keep board policy, administrative procedures, handbooks, and implementation practices aligned. TASA and TASB's school-mandates work treats cybersecurity/data-breach requirements as operational obligations school leaders must plan and budget for.

## References

- [Texas Education Code § 11.175 - School Cybersecurity](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.11.pdf)
- [Texas Government Code Chapter 2063 - Texas Cyber Command (see § 2063.302)](https://statutes.capitol.texas.gov/Docs/GV/pdf/GV.2063.pdf)
- [Texas Business & Commerce Code Chapter 521 - Identity Theft Enforcement and Protection Act](https://statutes.capitol.texas.gov/Docs/BC/pdf/BC.521.pdf)
- [Texas Education Code Chapter 32 - Student Information Protection](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.32.pdf)
- [Texas Cyber Command - Report a Cybersecurity Incident](https://www.txcc.texas.gov/report-an-incident)
- [TASB - School Cybersecurity: Texas Requirements](https://www.tasb.org/resources/esource/school-cybersecurity-texas-requirements)
- [TASB - School Cybersecurity: Security Breach Notification and Response](https://www.tasb.org/resources/esource/school-cybersecurity-security-breach-notification-and-response)
- [TASA/TASB - Report on School District Mandates](https://tasanet.org/advocacy/toolkits-and-resources/report-on-school-mandates/)
- [U.S. Department of Education - Data Security: K-12 and Higher Education](https://studentprivacy.ed.gov/data-security-k-12-and-higher-education)
- [Federal Trade Commission - COPPA FAQ: COPPA and Schools](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions)
