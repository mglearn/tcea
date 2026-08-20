# Issue, Decision, and Change Log: Help Desk Workflow Redesign

**Project goal:** Reduce median first-response time, improve ticket visibility, and create consistent escalation / ownership rules.  
**Baseline:** 3,200 tickets per quarter; median first response 18.4 business hours; 61% first-contact resolution.

## Log

| ID | Type | Date | Item | Impact | Owner / Decision Maker | Decision / Action | Due | Status |
|---|---|---:|---|---|---|---|---:|---|
| I-01 | Issue | Sep 9 | Campus technicians use different priority labels | Reporting unreliable; urgent tickets treated inconsistently | Help Desk Manager | Publish one priority definition set; retrain staff | Sep 18 | Closed |
| D-01 | Decision | Sep 11 | Define first-response target | Needed for SLA and dashboard | CTO | Target: 4 business hours for normal tickets; 30 min for critical incidents | - | Closed |
| C-01 | Change | Sep 18 | Add facilities AV tickets to technology queue | Would add estimated 14% volume and new ownership ambiguity | Sponsor | Not approved; remains Facilities workflow | - | Closed |
| I-02 | Issue | Sep 22 | Teachers cannot see internal reassignment notes | Users believe tickets are inactive | Platform Admin | Enable user-visible status updates without exposing internal notes | Oct 2 | Closed |
| D-02 | Decision | Sep 28 | Auto-close inactive tickets after 7 days? | Could inflate closure metrics and frustrate users | CTO + Help Desk Mgr. | Use 5-day reminder, then close after 10 days with reopen link | - | Closed |
| C-02 | Change | Oct 5 | Add SMS ticket notifications | New cost and data-governance questions | CTO | Defer to phase 2 after email workflow is stable | Jan review | Deferred |
| I-03 | Issue | Oct 7 | Password-reset tickets dominate queue | Masks true service performance | Systems Lead | Move approved resets to self-service; create separate KPI | Oct 30 | Open |
| D-03 | Decision | Oct 12 | Define campus technician reassignment authority | Needed to prevent handoff loops | CTO | Campus tech owns ticket until accepted by receiving team | - | Closed |
| C-03 | Change | Oct 15 | Principals request weekly campus ticket report | Adds reporting task but supports adoption | Sponsor | Approved; automate report from dashboard | Nov 6 | Open |

## Change-Control Questions

Before approving a project change, document:

1. Does this solve the original problem or add a new problem to the project?
2. What changes in scope, cost, schedule, workload, risk, training, or communication?
3. Who has authority to approve the change?
4. What work is displaced if the change is accepted?
5. How will the decision be communicated and reflected in project documents?

## Decision Record Example

### D-02 - Inactive Ticket Closure

**Context:** The project team wanted to reduce the number of tickets waiting on a user response. An initial proposal would automatically close tickets after seven days of inactivity.

**Decision:** Send a reminder after five days and close after ten days if the user does not respond. The closure notice includes a direct reopen option.

**Rationale:** The project should improve service, not simply improve closure statistics. A longer window and easy reopen path better balance queue accuracy with user experience.
