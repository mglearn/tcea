# Share your LibVibe — submission form setup

A Google Apps Script web app that serves a submission form and records each entry
to a **Google Sheet**, saving any pasted solution HTML to a **Drive folder**. You
review submissions in the Sheet and publish approved ones to the site. No student
logins; nothing goes live without your review.

Files in this folder:
- `Code.gs` — server logic (creates the Sheet, saves submissions + HTML files)
- `Form.html` — the styled form the web app serves
- `SETUP.md` — this file

## 1. Create the Apps Script project
1. Go to <https://script.google.com> → **New project**.
2. Delete the starter `Code.gs` content and paste in this folder's `Code.gs`.
3. Add a file: **＋ → HTML**, name it exactly `Form` (no extension), and paste in `Form.html`.
4. *(Optional)* edit the CONFIG block at the top of `Code.gs`:
   - `NOTIFY_EMAIL` — set to your email to get a note on each submission.
   - `SHEET_ID` — leave blank to auto-create the Sheet (recommended), or paste an existing Spreadsheet ID to use one you already have.

## 2. Create the Google Sheet
- In the editor, choose the function **`setup`** in the toolbar dropdown and click **Run**.
- Approve the permissions prompt the first time (it needs Sheets + Drive + Gmail-send if you set a notify email).
- Open **View → Logs** (or **Executions**): it prints the URL of the new
  **“LibVibes Submissions”** spreadsheet. Bookmark it — that's where submissions land,
  with a `Status` column you can mark *Approved* / *Rejected*.

## 3. Deploy as a web app
1. **Deploy → New deployment → ⚙ → Web app**.
2. **Execute as:** *Me*. **Who has access:** *Anyone*.
3. **Deploy**, approve access, and copy the **Web app URL** (ends in `/exec`).

## 4. Connect it to the site
- Open `vcl/libvibes-submit.html` and replace the placeholder `__FORM_URL__` with your
  `/exec` URL (or just send me the URL and I'll wire it in and publish).
- Until it's connected, the site's “Open the submission form” button shows
  *“Submission form coming soon.”*

## 5. Review & publish a submission
1. In the Sheet, read the entry; open the **Saved HTML file** link (in your
   “LibVibes Submissions” Drive folder) or the submitted link.
2. **Check it's safe** before publishing — it's someone else's HTML/JS. Confirm it's a
   single self-contained file with no external trackers/malicious code.
3. To publish: create `vcl/libvibes/community/<slug>/` with their file as `index.html`,
   and link it from the site. Set the row's `Status` to *Approved*.

## Notes
- Pasted files over ~900 KB are rejected with a message asking for a link instead.
- Re-deploy (**Deploy → Manage deployments → ✎ → Version: New**) after editing the code.

## 6. Review submissions in the admin page
- Set your password: edit `ADMIN_PASSWORD` at the top of `Code.gs` (or, more privately,
  add a Script Property named `ADMIN_PASSWORD` — it wins over the constant). Re-deploy.
- Visit your web app URL with `?page=admin` appended, e.g. `https://…/exec?page=admin`.
- Enter the password to see every submission (filter by Pending / Approved / Rejected),
  open the saved HTML, read the prompt, and click **Approve / Reject** — it writes the
  `Status` back to the Sheet instantly.

## 7. Publish an approved one (one-liner)
See `libvibes/community/PUBLISH.md`: drop the file at `libvibes/community/<slug>/index.html`,
add one line to `libvibes-community.js`, and push — it appears on `libvibes-community.html`.
