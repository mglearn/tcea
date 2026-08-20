# Project Charter: Staff MFA and Identity Security Rollout

**District:** Ardent ISD  
**Project sponsor:** Deputy Superintendent for Operations  
**Project lead:** Chief Technology Officer  
**Project window:** September 8, 2026 - January 29, 2027  
**Charter status:** Approved for implementation  
**Version:** 1.0

## Executive Snapshot

Ardent ISD will implement multi-factor authentication (MFA) for all staff and privileged accounts to reduce account-compromise risk and strengthen identity security. The project includes policy alignment, enrollment, training, enforcement, support, monitoring, and post-launch reinforcement. It does not include student MFA or replacement of the district's identity platform.

Ardent ISD serves approximately 8,400 students across 11 campuses and employs about 1,050 staff members.

## Problem / Opportunity

The district currently relies primarily on passwords for most staff access. Password-only access creates avoidable risk when credentials are phished, reused, or exposed. The district also needs a more consistent identity-security posture for cyber-insurance, vendor access, remote work, and administrative systems.

## Project Goal

By January 29, 2027, require MFA for 100% of active staff accounts and privileged administrative accounts, with documented exceptions limited to approved service or technical accounts that use compensating controls.

## In Scope

- MFA configuration for staff and privileged accounts.
- Enrollment procedures and user communications.
- Pilot groups on two campuses and central office.
- Staff training, quick-start guides, and help desk scripts.
- Exception and recovery procedures.
- Enforcement schedule by employee group.
- Dashboard reporting on enrollment, support demand, and exceptions.
- Post-launch reinforcement and unresolved-user follow-up.

## Out of Scope

- Student MFA.
- Replacement of the identity provider or single sign-on platform.
- Redesign of application permissions unrelated to MFA.
- Personal-device reimbursement or districtwide mobile-device replacement.
- Authentication changes for systems that cannot technically support MFA; these will be documented separately.

## Major Deliverables

| Deliverable | Owner | Due | Acceptance Criteria |
|---|---|---:|---|
| Approved MFA configuration standard | Infrastructure Manager | Sep 25 | CTO and security consultant signoff |
| Stakeholder communication package | Communications + CTO | Oct 2 | Sponsor approval; campus leaders briefed |
| Pilot enrollment and support test | Systems Team | Oct 23 | >=95% pilot enrollment; issues documented |
| Staff training package | Instructional Technology | Nov 6 | Video, guide, FAQ, help desk script published |
| Privileged-account enforcement | Systems Team | Nov 15 | 100% privileged interactive accounts protected |
| Districtwide staff enforcement | Systems Team | Jan 11 | Enforcement enabled for all in-scope staff |
| Closeout and adoption report | Project Lead | Jan 29 | KPI results, exceptions, lessons learned documented |

## Stakeholders

**Sponsor:** Deputy Superintendent for Operations  
**Decision owner:** CTO for technical design; sponsor for districtwide enforcement dates and major scope/budget changes  
**Core project team:** Systems, network, help desk, instructional technology, communications, HR  
**Key affected groups:** Principals, teachers, paraprofessionals, auxiliary staff, substitutes with district accounts, central-office staff, vendors with named accounts

## Budget and Resource Assumptions

| Item | Planning Estimate |
|---|---:|
| MFA licensing / identity features | $24,000 |
| Temporary support / overtime | $8,000 |
| Security consulting and validation | $6,000 |
| Training / communication production | $2,000 |
| Contingency | $2,000 |
| **Total planning estimate** | **$42,000** |

Existing staff time is not shown as a separate cash cost but is a project constraint.

## Major Risks

| Risk | Probability | Impact | Initial Response |
|---|---|---|---|
| Staff delay enrollment until enforcement | High | Medium | Campus-based deadlines, reminders, principal dashboard |
| Support spike at enforcement | High | High | Staggered enforcement, extra help desk coverage |
| Users without reliable personal device access | Medium | High | Approved hardware-token / alternate-factor process |
| Legacy application incompatibility | Medium | High | Inventory early; document exceptions and compensating controls |
| Confusion about account recovery | Medium | Medium | Standard recovery script and identity-verification process |

## Success Measures

1. 100% of privileged interactive accounts protected before districtwide staff enforcement.
2. At least 98% of active staff voluntarily enrolled before their enforcement date.
3. 100% of active in-scope staff protected within five business days of districtwide enforcement.
4. Fewer than 3% of staff require an approved exception or alternate factor after 30 days.
5. MFA-related support volume falls below 5% of weekly help desk tickets within four weeks of enforcement.
6. Staff survey shows at least 80% agree that instructions and support were clear.

## Decision Authority

| Decision | Authority |
|---|---|
| Routine technical configuration within approved scope | CTO / Infrastructure Manager |
| Schedule adjustment under 10 business days | CTO |
| Schedule adjustment over 10 business days | Sponsor |
| Budget shift within approved total | CTO + Finance |
| Budget increase over $5,000 | Sponsor / Finance |
| Major scope addition | Sponsor |
| Districtwide enforcement delay | Sponsor in consultation with CTO |

## Approval

**Sponsor:** Deputy Superintendent for Operations - Approved 09/04/2026  
**Project Lead:** Chief Technology Officer - Accepted 09/04/2026  
**Finance Review:** Chief Financial Officer - Budget planning acknowledged 09/04/2026
