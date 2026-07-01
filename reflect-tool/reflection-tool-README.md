# Reflection Time Assessment Tool

This package includes:

- `index.html`: participant page
- `facilitator-dashboard.html`: live facilitator graph page
- `apps-script-backend.gs`: Google Apps Script backend that stores responses in a Google Sheet and updates a markdown file in Drive

## How it works

A fully static HTML page cannot append to a shared markdown file across many participant devices by itself. Browsers are not allowed to write to files on your web server. This package uses a small Google Apps Script endpoint to receive responses, store them in a Google Sheet, and update a markdown file named `reflection-responses.md` in Google Drive. The facilitator dashboard also lets you download or copy the current markdown.

## Setup

1. Create a Google Sheet.
2. Open Extensions > Apps Script.
3. Paste `apps-script-backend.gs` into Code.gs.
4. The included Apps Script file already contains your Google Sheet ID.
5. Deploy > New deployment > Web app.
6. Set:
   - Execute as: Me
   - Who has access: Anyone with the link
7. The included HTML files already contain your Web App URL.
8. Upload `index.html` and `facilitator-dashboard.html` to GitHub Pages, Cloudflare Pages, or your preferred host.
9. On the participant page, users enter a workshop session name or code before submitting.
10. On the facilitator dashboard, enter that same session name or code to view the live graph.

## Notes

- The participant page asks for the workshop session name or code so responses stay grouped correctly.
- The participant page also asks for an optional name or table number, but it does not require personal information.
- The dashboard polls every five seconds.
- In offline mode, the participant page downloads a single markdown entry instead of submitting live.


## Current connection settings

- Web App URL: already added to `index.html` and `facilitator-dashboard.html`
- Google Sheet ID: already added to `apps-script-backend.gs`
