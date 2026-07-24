# Build Your Handbook — the prompt

This is the single prompt given to both AI assistants (Claude and ChatGPT) to
convert the *Ardent Elementary Staff Handbook 2026–2027* PDF into a standalone,
accessible HTML webpage. Both versions in this folder were generated from the
exact text below.

---

You are an experienced web developer, information architect, accessibility specialist, and school communications editor.

Convert the attached PDF handbook into a single, standalone HTML webpage that is easier to search, read, and use than the original PDF.

## Primary Goal

Create a practical handbook webpage that helps users quickly answer common questions without scrolling through the entire document.

The webpage must preserve the meaning of the original handbook. Do not invent, reinterpret, simplify away, or change any policy.

## Source Rules

Use only information found in the attached PDF.

For every policy, answer, scenario, or summary:

* Preserve the original meaning
* Include the handbook page number
* Include a short source reference such as “Source: Handbook, page 18”
* Clearly mark anything unclear or missing as “Needs review”
* Do not guess
* Do not add legal advice
* Do not rewrite mandatory language in a way that changes its meaning

When exact wording matters, quote the relevant sentence or display it in a clearly labeled “Official wording” section.

## Output Format

Create one complete, self-contained HTML file.

The file must:

* Include all HTML, CSS, and JavaScript in one file
* Work when opened locally in a browser
* Require no server
* Require no login
* Collect no user data
* Use no analytics
* Use no external JavaScript libraries
* Use no Gen AI service at runtime
* Work on phones, tablets, Chromebooks, and desktop computers
* Be suitable for GitHub Pages or a district website

Return only the complete HTML file inside one code block.

## Page Structure

Include these sections.

### 1. Header

Include:

* Handbook title
* Organization or district name, when available
* Handbook year or effective date
* A short statement explaining that the webpage is a navigation aid and that the original handbook remains the official source
* A link or clearly marked placeholder for the original PDF

### 2. Search

Add a large search box near the top.

Search must:

* Search headings, questions, answers, keywords, scenarios, and page references
* Filter results as the user types
* Highlight matching terms
* Display the number of matches
* Show a clear “No results found” message
* Include a reset button
* Support common synonyms

Create a synonym list based on likely user language. Examples:

* Sick leave, sick days, illness
* Personal leave, personal days
* Absence, absent, attendance
* Dress code, clothing, attire
* Cell phone, mobile phone, device
* Discipline, consequences, violation
* Benefits, insurance, coverage
* Pay, salary, compensation
* Complaint, grievance, concern

Do not add synonyms that could change the policy meaning.

### 3. Quick Answers

Create a “Most Asked Questions” section with approximately ten to twenty common questions, based on the handbook content.

Examples may include:

* How many personal days are available?
* Who should I contact when I am absent?
* What is the dress code?
* What happens if I arrive late?
* What is the procedure for reporting a concern?
* When can personal devices be used?
* What approvals are required for travel?
* Where can I find benefits information?

Only include questions supported by the handbook.

Each answer must include:

* A concise plain-language summary
* Official wording when necessary
* Page number
* A button or link that opens the full related section

### 4. Browse by Topic

Organize the handbook into clear topic sections.

Possible categories include:

* Attendance and Work Hours
* Leave and Absences
* Professional Conduct
* Dress and Appearance
* Technology Use
* Communication
* Student Safety
* Employee Responsibilities
* Benefits and Compensation
* Evaluations
* Complaints and Grievances
* Emergency Procedures
* Travel and Purchasing
* Forms and Contacts

Use only categories that fit the attached handbook.

Display topics as accessible accordions using native HTML `<details>` and `<summary>` elements.

The first section may be open by default.

### 5. Scenario Finder

Create a section called “What Should I Do If...?”

Turn applicable handbook policies into realistic workplace scenarios.

Examples:

* I wake up sick before work
* I need to leave early
* I am running late
* A parent contacts me with a complaint
* I see a possible safety concern
* I want to use a personal device for work
* I need approval for a purchase
* I have a question about leave
* I disagree with a decision
* I need to report harassment or misconduct

For each scenario, include:

* Situation
* Immediate action
* Who to contact
* Important limits or deadlines
* Relevant policy section
* Handbook page number
* A reminder to review the official wording before taking action

Do not create a scenario unless the handbook supports the response.

### 6. Step-by-Step Procedures

Where the handbook describes a process, convert it into numbered steps.

Examples:

* Reporting an absence
* Requesting leave
* Filing a complaint
* Reporting an accident
* Requesting reimbursement
* Responding to an emergency
* Submitting a purchase request
* Reporting suspected misconduct

Keep each step short and accurate.

Include page references.

### 7. Key Contacts

Extract relevant roles, departments, phone numbers, email addresses, office names, and websites.

Do not invent missing contact information.

When a contact is described only by role, list the role rather than guessing a person’s name.

### 8. Important Dates and Deadlines

Extract:

* Effective dates
* Submission deadlines
* Renewal dates
* Reporting windows
* Notification requirements
* Appeal deadlines
* Training deadlines

Display them in a simple table.

If the handbook contains no dates or deadlines, omit this section.

### 9. Forms and Resources

Create a list of forms, portals, websites, appendices, and related documents mentioned in the handbook.

Include:

* Resource name
* Purpose
* Where it is found
* Handbook page number
* Link, when a valid link appears in the PDF

### 10. Full Handbook View

Include a complete structured version of the handbook content.

Break long sections into readable subsections.

Preserve:

* Heading hierarchy
* Numbered procedures
* Lists
* Tables
* Warnings
* Definitions
* Exceptions
* Required language

Do not omit policies merely because they are not common questions.

## Navigation Features

Include:

* Sticky top navigation
* Jump links to major sections
* Back-to-top buttons
* Expand all and collapse all controls
* Print button
* Clear-search button
* Copy-link buttons for major sections
* URL anchors so each section can be linked directly

## Design Requirements

Use a clean, professional education design.

Color palette:

* Navy: #0A3476
* Gold: #FCB040
* White
* Light gray
* Dark readable text

Use:

* Large readable headings
* Generous spacing
* White content cards
* Light borders
* Clear buttons
* Simple icons made with text or inline SVG
* No decorative clutter
* No background animations

Do not use stylized or distorted lettering.

## Accessibility Requirements

Follow WCAG 2.1 AA practices.

Include:

* Semantic HTML
* Correct heading order
* Keyboard-accessible controls
* Visible focus indicators
* Descriptive link text
* Form labels
* ARIA only when native HTML is insufficient
* Adequate color contrast
* Responsive reflow
* Support for browser zoom
* Reduced-motion support
* Print-friendly styling
* No information communicated through color alone

Any tables must include proper headers.

Any icons must include accessible labels or be marked decorative.

## Reading and Writing Style

Write summaries at approximately a grade seven to eight reading level.

Use:

* Short paragraphs
* Direct wording
* Plain language
* Clear labels
* Short questions
* Short procedural steps

Do not:

* Use promotional language
* Use vague summaries
* Add commentary
* Add legal interpretations
* Replace precise policy terms with casual wording when precision matters

## Quality-Control Section

At the bottom of the webpage, include a hidden or collapsible “Content Review Checklist.”

List:

* Policies that may need human review
* Unclear scanned text
* Missing page numbers
* Broken or incomplete links
* Conflicting wording
* Missing contact information
* Dates that may be outdated
* Sections that could not be confidently categorized

## Final Validation

Before returning the HTML:

1. Confirm every answer is grounded in the PDF
2. Confirm every scenario includes a page reference
3. Confirm no policy was invented
4. Confirm the search works
5. Confirm accordions work without JavaScript
6. Confirm JavaScript is used only for enhancements such as search, filtering, highlighting, printing, and copying links
7. Confirm the page works without external files
8. Confirm it is usable on a phone
9. Confirm all visible text is free of typos
10. Confirm the original handbook is identified as the official source

Return the finished result as one complete HTML file inside one code block. Do not provide an outline, explanation, or partial sample.
