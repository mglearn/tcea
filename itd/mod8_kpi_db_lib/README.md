# Module 8 KPI & Dashboard Studio

A GitHub Pages-ready companion artifact library for **Module 8: Project Management and Change Leadership** in the TCEA Technology/IT Director Certification.

## What is included

- 14 browser-viewable KPI/dashboard artifacts
- Markdown source for every artifact
- Print-ready PDF for every artifact
- 7 live sample dashboards using an `index.html` + `data.md` model
- 1 reusable dashboard starter
- 1 interactive Data Display Pattern Gallery
- GenAI prompt pack embedded in the resources

## Start here

Open `index.html`.

## Live dashboard workflow

Each sample dashboard folder contains:

- `index.html` - presentation and local parsing logic
- `data.md` - editable sample data
- `README.md` - update/testing notes

When served through GitHub Pages or another web server, `index.html` loads `data.md`. When opened directly from disk, many browsers block local `fetch()` calls, so the example uses embedded fallback sample data.

To test locally:

```text
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Data warning

All Ardent ISD values are illustrative sample data. Use fictional, public, aggregated, or properly sanitized information with public generative AI tools. Do not place student records, staff records, PII, credentials, sensitive cybersecurity information, legal records, confidential procurement material, vendor-confidential information, or sensitive district project details into public AI tools or public dashboards.

## External reference points

- https://blog.tcea.org/make-data-displays-without-writing-code/
- https://blog.tcea.org/kpi-dashboards-built-with-gen-ai/
- https://blog.tcea.org/metrics-and-kpis-made-easy/
- https://mglearn.github.io/tcea/kpi-dashboard/k12-kpi-dashboard-generator.html
- https://mguhlin.github.io/creations/tcea/Dashboard_SchoolKPIs/index.html
- https://mglearn.github.io/tcea/ddp/index.html
