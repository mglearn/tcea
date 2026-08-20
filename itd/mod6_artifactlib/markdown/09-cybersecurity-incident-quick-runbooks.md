# Ardent ISD

## Artifact 9: Cybersecurity Incident Quick Runbooks

*Seven scenario-specific response cards for common K-12 incidents*

**Owner:** Technology Services / Incident Response Team  
**Related policy/procedure:** Incident Response Plan  
**Review cycle:** Annual and after a major incident

> **Training Sample - Customize Before Use.** This document is an instructional artifact for Ardent ISD. It should be aligned to current board policy, administrative procedures, cyber-insurance requirements, records-retention requirements, and advice of district legal counsel before operational use. Legal and reporting requirements can change.

> These runbooks support the Incident Response Plan; they do not replace it. When protected data, significant disruption, extortion, fraud, or public notice may be involved, escalate to counsel and district leadership immediately.

## Runbook 1 - Ransomware / Data Extortion

**Recognize:** files encrypted/renamed; ransom note; security tool detects ransomware; attacker threatens data leak.

**First actions:**

1. isolate impacted systems immediately; if widespread, consider network-level isolation;
2. preserve ransom note, alerts, logs, memory/disk evidence when feasible;
3. disable compromised accounts/tokens and protect privileged identities;
4. protect backups - do not connect backup repositories unnecessarily;
5. activate Level 3/4 incident team, insurer/breach counsel, external IR;
6. use Artifact 4 for TXCC and other reporting decisions;
7. establish continuity plan for critical systems;
8. do not negotiate or pay without superintendent, legal, insurer, and law-enforcement coordination.

**Recovery gate:** root cause addressed, credentials rotated, malicious persistence removed, backup validated, restored system monitored.

## Runbook 2 - Business Email Compromise / Phishing With Account Takeover

**Recognize:** impossible travel; mailbox rules/forwarding; unusual OAuth app; repeated MFA prompts; sent-mail phishing; invoice/payment changes.

**First actions:**

- disable or restrict the account;
- revoke sessions/tokens and unauthorized app consent;
- reset credentials from a trusted device;
- review mailbox rules, delegated access, login history, sent/deleted messages;
- determine whether student/employee data was exposed through email/cloud drives;
- contact Finance immediately if payment/banking instructions were involved;
- identify recipients of malicious messages and contain spread.

## Runbook 3 - Compromised Administrator / Privileged Account

**Recognize:** privileged sign-in from unusual source; new admin creation; security settings disabled; mass password resets; new tokens/keys.

**First actions:**

- use a separate trusted admin account to contain the compromised identity;
- revoke sessions, tokens, keys, and app consents;
- identify every system where the credential has administrative rights;
- review configuration changes and newly created accounts;
- protect backups and identity infrastructure;
- consider resetting related privileged credentials using a controlled sequence;
- escalate to Level 3 because the blast radius may be large even when visible impact is small.

## Runbook 4 - Lost or Stolen Device / Portable Media

**Recognize:** district laptop, phone, USB drive, portable drive, or other media missing.

**First actions:**

- record device/asset identifier, user, location, time last seen;
- determine encryption status and whether encryption key/credentials may also be compromised;
- remote-lock/wipe **only when consistent with evidence needs and district procedure**;
- disable tokens/certificates/sessions where appropriate;
- identify locally stored student/employee information;
- document whether the device was managed and encrypted;
- use Artifact 4 if protected information may have been acquired.

<div class="callout"><strong>Encryption matters, but document it.</strong> Record the encryption method, management status, key protection, and evidence that encryption was active at the time of loss. Do not simply write “encrypted” with no support.</div>

## Runbook 5 - Unauthorized Data Disclosure

**Examples:** file shared publicly; spreadsheet emailed to wrong recipient; student records attached to wrong message; report link indexed publicly.

**First actions:**

- remove/restrict access immediately without destroying audit history;
- preserve sharing logs, recipient list, access history, and original file;
- ask unintended recipient to preserve/delete only through counsel-approved process;
- identify exact records and data categories;
- determine whether data was merely sent, actually accessed, downloaded, or further shared;
- evaluate Education Code §11.175, FERPA, Chapter 521, contracts, and parent/affected-person notice.

## Runbook 6 - Third-Party Vendor Breach

**First actions:**

- get written vendor incident notice and incident ID;
- ask: discovery time, compromise window, data types, record count, access/exfiltration evidence, containment, root cause, subprocessors, law enforcement, notification plan;
- preserve contract, DPA, security assessment, and vendor answers;
- rotate/revoke district credentials, API keys, SSO tokens, and integrations as risk warrants;
- determine whether Ardent must make independent notices/reports;
- require remediation evidence before restoring privileged vendor access;
- update vendor risk record in Artifact 10.

## Runbook 7 - DDoS / Service Disruption

**Recognize:** high-volume traffic, service unavailable, provider alert, repeated connection exhaustion.

**First actions:**

- verify whether outage is malicious versus provider/system failure;
- contact ISP/cloud/DDoS protection provider;
- preserve traffic/monitoring evidence;
- prioritize safety/communications/assessment/instruction continuity;
- use alternate communications if district internet is unavailable;
- determine whether attacker gained access or merely disrupted service;
- assess TXCC reporting with the incident team if reportable criteria are met.

## Common Closeout Questions

1. What was the initial access vector?
2. What control should have prevented or limited the incident?
3. What detected it, and how long did detection take?
4. What data and business processes were actually affected?
5. Which decisions were delayed because roles, contacts, or facts were unclear?
6. Were backups, admin accounts, and vendor access appropriately protected?
7. What must change in policy, process, architecture, training, or vendor terms?

## References

- [CISA - #StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)
- [K12 SIX - Cybersecurity Essentials Series and Incident Response Runbook](https://www.k12six.org/essentials-series)
- [Texas Cyber Command - Report a Cybersecurity Incident](https://www.txcc.texas.gov/report-an-incident)
- [U.S. Department of Education - Data Breach Response Checklist](https://studentprivacy.ed.gov/resources/data-breach-response-checklist)
