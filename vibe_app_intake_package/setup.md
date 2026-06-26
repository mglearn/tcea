# Setup Guide: School District Staff App Intake

This mockup includes a self-contained HTML intake form and a Google Apps Script backend that saves responses to a Google Sheet.

Use it as a starting point, not as a finished production system. District IT, data privacy staff, and legal counsel should review local requirements before using it with live submissions.

## Files

- `index.html` — self-contained intake form
- `Code.gs` — Google Apps Script backend
- `setup.md` — setup instructions
- `readme.md` — project overview and customization notes

## 1. Create the Apps Script project

1. Go to Google Apps Script using your district Google Workspace account
2. Create a new project
3. Replace the default script with the contents of `Code.gs`
4. Save the project with a name such as `Staff App Intake Backend`

## 2. Edit the configuration

At the top of `Code.gs`, review the `CONFIG` block.

Recommended edits:

- Add reviewer emails to `ADMIN_EMAILS`
- Add a value to `SHARED_SECRET` if you want a simple shared form key
- Add district domains to `ALLOWED_EMAIL_DOMAINS` if your deployment mode can read active user email
- Keep the spreadsheet private unless your district wants a different sharing model

Example:

```javascript
ADMIN_EMAILS: [
  'cto@exampleisd.org',
  'dataprivacy@exampleisd.org'
],
SHARED_SECRET: 'change-this-before-use',
ALLOWED_EMAIL_DOMAINS: ['exampleisd.org']
```

## 3. Run setup

1. In Apps Script, choose the `setup` function
2. Click Run
3. Approve the requested permissions
4. Open View → Logs and copy the spreadsheet URL
5. Confirm the spreadsheet has these tabs:
   - `Intake Responses`
   - `Review Log`
   - `Config`

The script stores the spreadsheet ID in Script Properties, so future submissions go to the same sheet.

## 4. Deploy as a web app

1. Click Deploy → New deployment
2. Choose Web app
3. Execute as: Me
4. Access: choose the most restrictive option that still works for your use case
   - For district-only use, use your Google Workspace access option when available
   - For a public mockup, use anyone with the link only if your district approves that choice
5. Deploy
6. Copy the web app URL ending in `/exec`

The Google interface changes from time to time. Use your district’s current Google Workspace guidance if the labels differ.

## 5. Connect the HTML form

You have two options.

### Option A: Paste the URL during testing

1. Open `index.html`
2. Paste the Apps Script web app URL into the setup box
3. Add the shared secret if you configured one
4. Submit a test entry
5. Check the Google Sheet for the new row

### Option B: Hard-code the URL before publishing

Open `index.html` and find this line:

```javascript
const DEFAULT_SCRIPT_URL = "";
```

Replace it with your web app URL:

```javascript
const DEFAULT_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

Save the file and host it on your approved district web space.

## 6. Test before sharing

Submit at least three test entries:

- Low-risk app with public data only
- Medium-risk app with staff workflow data
- High-risk app with student data selected

Confirm that:

- Rows appear in the `Intake Responses` sheet
- The risk estimate looks reasonable
- Reviewer status is set to `New`, `Needs IT triage`, or `Needs full review`
- The reviewer can sort and filter the sheet
- The backup owner and data location fields are not being skipped

## 7. Production cautions

Before using this outside a demo:

- Decide who can submit
- Decide who can view the spreadsheet
- Add a retention rule for intake records
- Review FERPA, COPPA, state privacy law, and district policy needs
- Decide how requests involving student data move into full review
- Keep credentials and Apps Script ownership in district-controlled accounts

## 8. Troubleshooting

### The form says the submission was sent, but I do not see a row

Check these items:

- The web app URL is the `/exec` URL, not the editor URL
- The deployment is active
- The script has permission to write to the spreadsheet
- The shared secret matches, if used
- Apps Script executions show no errors

### I changed the script, but the form still uses the old version

Apps Script web apps often require a new deployment version after code changes. Create a new deployment or update the existing deployment, then test again.

### Cross-origin responses look odd in the browser

The HTML sends submissions using `fetch` with `no-cors`. That avoids common browser blocks with Apps Script, but it also means the page cannot read the detailed response. Confirm success in the Google Sheet.
