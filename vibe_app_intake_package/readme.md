# School District Staff App Intake Mockup

A low-friction intake form for teacher-built or staff-built Gen AI apps.

The idea is simple: make disclosure easier than hiding the project. The form asks the three questions that matter most at the start:

1. What does it do, and what problem does it solve?
2. What data does it use, and where does that data live?
3. Who maintains it, and who takes over if that person leaves?

The form also adds a light triage layer for school districts: student data, storage location, ownership, backup owner, third-party services, OWASP-style review checks, and handoff planning.

## What is included

- `index.html`
  - Self-contained HTML, CSS, and JavaScript
  - No external libraries
  - Responsive layout
  - Built-in risk estimate
  - Reviewer snapshot panel
  - Optional JSON draft download
  - Posts to Google Apps Script when connected

- `Code.gs`
  - Creates a Google Sheet
  - Adds response, review log, and config tabs
  - Appends intake submissions
  - Adds default reviewer status based on risk
  - Supports optional shared secret
  - Shares the response spreadsheet with listed admin emails when configured

- `setup.md`
  - Step-by-step setup instructions
  - Testing checklist
  - Production cautions

## Intended use

This is a mockup and starter kit for a blog post, workshop, or district conversation. It is not a full approval system by itself.

A district could adapt it into:

- A staff app disclosure form
- A Gen AI-built app intake workflow
- A shadow IT triage tool
- A first step before IT, security, accessibility, or data privacy review

## Suggested review flow

| Risk estimate | What it usually means | Suggested next step |
|---|---|---|
| Low | Public or non-sensitive data only | Light review |
| Medium | Staff data, workflow data, files, or uncertain storage | IT triage |
| High | Student data, sensitive data, SSO, public use, or unclear data location | Full review |

## Customization ideas

Edit `index.html` to match your district language:

- Replace the title with your district’s name
- Add a policy link
- Add a privacy office contact
- Adjust the data type choices
- Add a required principal approval field
- Add an accessibility review question
- Add a procurement status question

Edit `Code.gs` to match your process:

- Add reviewer routing
- Add email notifications
- Add a reviewer dashboard
- Add status update actions
- Add a retention cleanup function
- Connect to a district ticketing system

## Security notes

This starter uses Google Apps Script and Google Sheets because many school districts already have Google Workspace. That does not make it automatically safe.

Before production use, review:

- Who can submit the form
- Who can view the response sheet
- Whether the form collects student personal information
- Where credentials and script ownership live
- Whether the deployment should be domain-only
- Whether records need to be deleted after a defined retention period

## Plain-language disclaimer

This project is a practical intake mockup, not legal advice, not a security audit, and not a replacement for district policy.
