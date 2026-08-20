# Project Risk Register: Staff MFA Rollout

**Scoring:** Probability (P) and Impact (I) are scored 1-5. **Risk score = P x I.**  
**Priority bands:** 1-5 Low, 6-12 Moderate, 15-25 High.

## Active Risk Register

| ID | Risk | P | I | Score | Early Warning Signal | Mitigation | Contingency | Owner | Status |
|---|---|---:|---:|---:|---|---|---|---|---|
| R-01 | Enrollment remains low until enforcement | 4 | 4 | **16 High** | Campus <70% enrolled two weeks before deadline | Campus dashboard, principal reminders, enrollment events | Extend targeted support; stagger one campus if justified | CTO | Open |
| R-02 | Help desk overwhelmed during enforcement | 4 | 5 | **20 High** | Pilot tickets >0.25 per user; wait times exceed target | Stagger groups, add coverage, scripts, self-service guide | Temporary call queue; redirect trained staff | Help Desk Mgr. | Open |
| R-03 | Staff lack appropriate secondary factor | 3 | 4 | **12 Moderate** | Requests cite no smartphone / unreliable service | Alternate factor and token process | Issue district hardware token | HR + Help Desk | Open |
| R-04 | Legacy app fails with MFA or modern auth | 3 | 5 | **15 High** | Test accounts fail / vendor confirms limitation | Inventory critical apps; test before enforcement | Approved exception + compensating control; vendor remediation plan | Infra. Mgr. | Open |
| R-05 | Account recovery process is inconsistent | 3 | 4 | **12 Moderate** | Different help desk staff request different proof | Approved verification script; training | Route sensitive recovery to designated escalation staff | Help Desk Mgr. | Open |
| R-06 | Vendor support account becomes locked out | 2 | 4 | **8 Moderate** | Vendor has named interactive account without enrollment | Direct outreach; convert to approved access model | Time-limited emergency access approved by CTO | Systems Lead | Open |
| R-07 | Communications create perception that personal phones are mandatory | 3 | 4 | **12 Moderate** | Staff questions / HR complaints | Clearly state approved alternatives | Corrective message; manager briefing | Comms + HR | Open |
| R-08 | Scope expands into unrelated identity cleanup | 4 | 3 | **12 Moderate** | New requests added to project meetings | Change log; defer noncritical items | Sponsor decides on scope change | CTO | Open |
| R-09 | Enforcement conflicts with payroll / grading deadline | 2 | 5 | **10 Moderate** | Schedule overlaps critical district cycle | Calendar review; choose low-risk enforcement windows | Delay affected group with sponsor approval | CTO | Open |
| R-10 | Metrics show completion but users are not confident | 3 | 3 | **9 Moderate** | High post-enforcement tickets or negative survey | Short reinforcement content; office hours | Targeted campus coaching / follow-up | Instr. Tech | Open |

## Top Three Risks for Sponsor Review

1. **R-02 - Support capacity:** The technical change can succeed while creating a poor user experience. Additional support coverage during enforcement is a planned cost, not an optional extra.
2. **R-01 - Delayed enrollment:** A high completion rate one hour before enforcement is not the same as readiness. Campus-level completion is tracked early.
3. **R-04 - Legacy application compatibility:** This risk must be discovered before districtwide enforcement, not during it.

## Risk Review Routine

- Project lead reviews risks weekly.
- High risks are reported in the executive status report.
- New issues are not automatically risks; issues that have already occurred move to the issue log.
- Closed risks remain in the historical register with final outcome and lessons learned.
