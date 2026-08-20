# Critical Systems Recovery Priority Matrix

**Ardent ISD | Business Continuity Planning**

## Purpose

This matrix gives district leaders a common view of which systems are most critical to restore and what they depend on. Specific technical recovery procedures, credentials, configurations, and sensitive security details belong in restricted operational documentation.

| Service / Function | Priority | Business Impact if Unavailable | Key Dependencies | Business Owner |
| --- | --- | --- | --- | --- |
| Identity / SSO | 1 | Users cannot access multiple district systems | Directory services, internet/WAN, MFA, DNS | Technology |
| Internet / WAN | 1 | Instruction, cloud applications, communications, and many operations disrupted | ISP circuits, routing, switching, power | Technology |
| Finance / Payroll | 1 | Payroll and financial operations may be delayed | Identity, servers/cloud service, banking interfaces | Finance |
| Student Information System | 1 | Attendance, enrollment, grades, scheduling, records access disrupted | Identity, internet/WAN, vendor service | Student Services |
| VoIP / Core communications | 1 | Internal/external calling and operational coordination affected | Network, power, carrier/SIP services | Operations |
| Transportation systems | 2 | Routing, dispatch, and family communication degraded | Internet/WAN, vendor platform, identity | Transportation |
| Learning Management System | 2 | Instructional continuity reduced | Internet, identity, vendor platform | Curriculum |
| MDM | 2 | Device management and deployment functions impaired | Internet, identity, vendor platform | Technology |
| Content filtering | 2 | Internet access governance/safety controls affected | Internet, DNS/network path, vendor service | Technology |
| Document management | 3 | Administrative workflows slowed | Identity, storage/vendor platform | Business Services |

## Recovery Planning Questions
- What is the acceptable duration of outage for each service?
- What data loss, if any, is acceptable?
- Which dependencies can create a hidden single point of failure?
- Who has authority to declare a continuity event and change priorities?
- How will staff communicate if normal email, VoIP, or district systems are unavailable?
- When were backups and restoration procedures last tested?

## Leadership Action
The CTO should validate this matrix annually with business owners. Changes in vendors, cloud services, identity systems, network architecture, or district processes may change dependencies and recovery order.


## Reference Points

- [CoSN IT Management Resources](https://www.cosn.org/edtech-topic/it-management/) - K-12 technology operations and leadership resources.
- [USAC E-Rate Program](https://www.usac.org/e-rate/) - Federal E-Rate program information for schools and libraries.
- [SETDA Infrastructure for the Future](https://www.setda.org/priorities/equity-of-access/broadband-imperative/broadband-imperative-iii/infrastructure-for-the-future/) - Guidance for future-ready broadband and infrastructure planning.
- [Future Ready Schools Frameworks](https://futureready.org/future-ready-frameworks/) - Systems-oriented planning connecting infrastructure, learning, leadership, budget, and equity.

> **Leadership use:** This document is designed to support district-level review, discussion, and decision-making. Technical validation, procurement review, legal review, or compliance review should be completed by the appropriate district specialists when applicable.
