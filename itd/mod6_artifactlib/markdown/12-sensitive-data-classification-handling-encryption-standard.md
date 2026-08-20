# Ardent ISD

## Artifact 12: Sensitive Data Classification, Handling, and Encryption Standard

*Practical district standard for storing, sharing, transmitting, and disposing of sensitive information*

**Owner:** CTO + Records Management + Privacy + HR  
**Related policy/procedure:** CQB; FL; records-retention schedule; acceptable use  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

## 1. Purpose

Ardent ISD classifies information so employees can answer a practical question: **How carefully must I handle this data?** The standard applies to paper and digital information and supplements records-retention, student-records, cybersecurity, and acceptable-use procedures.

## 2. Classification Levels

| Level | Description | Examples | Default handling |
|---|---|---|---|
| Public | Approved for public release | board agendas; published calendar; public website content | Normal public systems |
| Internal | Routine district information not intended for unrestricted public release | internal procedures; staff directories; draft operational documents | District-approved systems; authenticated access where practical |
| Confidential | Information protected by law, policy, contract, or legitimate privacy need | student education records; employee personnel records; nonpublic student work; contracts with confidential terms | Access by job need; approved district storage; encrypted transmission; controlled sharing |
| Restricted / Highly Sensitive | Information whose unauthorized disclosure could create severe identity, safety, legal, or cybersecurity risk | SSNs; government ID numbers; financial account credentials; sensitive health records; authentication secrets; API keys; vulnerability reports; certain security logs/configurations | Strong access controls; encryption; no ordinary email attachments unless protected; strict export limits; enhanced logging; approved transfer methods |

Classification does **not** determine records-retention duration. Retention is governed separately by the district's records schedule and legal holds.

## 3. Handling Matrix

| Action | Public | Internal | Confidential | Restricted |
|---|---|---|---|---|
| Store on district-managed cloud | Yes | Yes | Yes, approved location | Yes, approved restricted location |
| Store on personal cloud/account | No need; prefer district | No | **No** | **No** |
| Email inside district | Yes | Yes | Minimize attachments; approved sharing preferred | Only using approved protected method |
| External email | Yes | With business need | Verify recipient; use protected link/encryption | Approved encrypted transfer only |
| Portable USB/storage | Avoid | Approved if managed | Encrypted only | Encrypted + explicit business need/approval |
| Local laptop storage | Yes | Managed device | Managed + full-disk encryption | Minimize; managed + encrypted + access controlled |
| Public generative AI tool | Public information only | Only if approved and nonsensitive | **No** | **No** |
| Print | Yes | Business need | Retrieve immediately; secure disposal | Avoid; if required, controlled custody/shredding |

## 4. Encryption Requirements

Ardent ISD requires encryption appropriate to the data and risk. Examples include:

- full-disk encryption on district-managed laptops that may store Confidential/Restricted information;
- TLS/HTTPS or other approved encryption for data transmitted across untrusted networks;
- encryption for portable storage that contains Confidential/Restricted data;
- approved secure file-transfer methods instead of ordinary email for Restricted data;
- centralized key management for enterprise systems where feasible.

### Texas Legal Note on Encryption

Texas Business & Commerce Code §521.002 defines some name-plus-identifier combinations as “sensitive personal information” only when those items are **not encrypted**. However, §521.053's breach definition includes encrypted data if the unauthorized person also has the key needed to decrypt it. Encryption is an important safeguard, but it is not a substitute for incident analysis and legal review.

## 5. Access Control

- Access is based on job need and least privilege.
- Shared accounts are prohibited unless specifically approved for a technical requirement and compensating controls are documented.
- Privileged accounts are separate from normal day-to-day accounts.
- Access is removed promptly when staff change roles or leave the district.
- Vendor access is time-bounded and reviewed for critical systems.

## 6. Sharing and Data Minimization

Before sharing Confidential or Restricted information, ask:

1. Does the recipient need this information for an authorized district purpose?
2. Can the same purpose be met with fewer fields or de-identified data?
3. Is the recipient identity verified?
4. Is the transfer method approved for this classification?
5. Is there a contract/DPA or data-sharing agreement when required?
6. Is there a retention/deletion expectation for the recipient?

## 7. Student Data and Online Services

Texas Education Code Chapter 32 includes protections for “covered information” handled by operators of school-purpose online services and requires reasonable security procedures/practices. FERPA also governs PII from education records. Teachers and staff should not independently create student accounts in unapproved services that collect student PII.

Use Artifact 10 before a new vendor receives protected district data.

## 8. Generative AI and Sensitive Data

Employees may use district-approved generative AI tools only within the approved data-handling conditions for that tool. Unless a specific district-approved service and agreement permits it, do **not** enter:

- student PII/education records;
- employee PII/personnel information;
- SSNs, financial information, health information;
- passwords, MFA codes, API keys, tokens;
- network diagrams, firewall rules, IP ranges, vulnerability findings;
- incident reports, forensic logs, or cyber-insurance/legal documents;
- vendor-confidential agreements or nonpublic procurement material.

AI-generated cybersecurity or legal advice is a draft for human review, not an authority.

## 9. Lost Data / Misdelivery / Suspected Disclosure

Report immediately when:

- a message/file was sent to the wrong person;
- a sharing link was made public;
- a device or USB drive is lost;
- a personal account was used to store district data;
- a vendor reports an incident;
- protected information was entered into an unapproved AI or web service.

Do not attempt to conceal or quietly “fix” the event without reporting it. Fast reporting can reduce harm.

## 10. Secure Disposal

- Follow the district records-retention schedule and legal holds.
- When destruction is authorized, use district-approved secure deletion or physical destruction appropriate to the media.
- Do not donate, recycle, sell, or transfer devices containing district data until sanitization is verified.
- Maintain records of destruction where required.

## 11. Quick Examples

| Scenario | Classification / action |
|---|---|
| Published school lunch menu | Public |
| Internal help-desk procedure | Internal |
| Student grade export | Confidential - district-approved storage and sharing only |
| HR spreadsheet with employee SSNs | Restricted - minimize export; encrypted controlled transfer; delete when authorized |
| Firewall vulnerability report | Restricted - security-sensitive; limited distribution |
| Student names pasted into a public AI chatbot to write parent messages | Prohibited - protected student data must not be entered into unapproved public AI tools |
| Lost laptop with full-disk encryption | Report immediately; document encryption status/key protection; incident team determines obligations |

## References

- [Texas Business & Commerce Code Chapter 521 - Identity Theft Enforcement and Protection Act](https://statutes.capitol.texas.gov/Docs/BC/pdf/BC.521.pdf)
- [Texas Education Code Chapter 32 - Student Information Protection](https://statutes.capitol.texas.gov/Docs/ED/pdf/ED.32.pdf)
- [U.S. Department of Education - Data Security: K-12 and Higher Education](https://studentprivacy.ed.gov/data-security-k-12-and-higher-education)
- [U.S. Department of Education - Model Terms of Service for Online Educational Services](https://studentprivacy.ed.gov/resources/protecting-student-privacy-while-using-online-educational-services-model-terms-service)
- [TASB - School Cybersecurity: Texas Requirements](https://www.tasb.org/resources/esource/school-cybersecurity-texas-requirements)
