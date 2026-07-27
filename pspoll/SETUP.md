# Setup

Fifteen minutes, start to finish. You need a Google account and a GitHub repo. You do not need to create a spreadsheet. The script does that for you.

---

## What you are building

| File | Where it goes | What it does |
| --- | --- | --- |
| `Code.gs` | script.google.com, standalone project | Creates the Google Sheet, stores answers, serves them back |
| `index.html` | GitHub Pages | The public poll |
| `results.html` | GitHub Pages | The password protected results dashboard |
| `results2.html` | GitHub Pages | A preview of that dashboard filled with invented data, no password, for showing people what they will get |

---

## Step one, create the Apps Script project

1. Go to **https://script.google.com** and click **New project**.
2. Delete the starter `myFunction` code.
3. Open `Code.gs` from this bundle, copy all of it, and paste it in.
4. Rename the project to **Pedagogy Showcase Poll** using the title field at the top.
5. Press **Ctrl S** or **Cmd S** to save.

---

## Step two, let the script build your spreadsheet

1. In the toolbar, open the function dropdown and choose **setup**.
2. Click **Run**.
3. Google asks for authorization the first time. Click **Review permissions**, pick your account, click **Advanced**, then **Go to Pedagogy Showcase Poll (unsafe)**, then **Allow**. That warning appears for every unpublished personal script. It is expected.
4. Open the **Execution log** at the bottom. It prints the URL of the new spreadsheet, named **Pedagogy Showcase Poll Responses**, sitting in the root of your Google Drive.
5. Open that URL and bookmark it. The header row is already formatted in TCEA navy.

You never touch the spreadsheet structure again. If you delete it by accident, run `setup` again and the script builds a fresh one.

---

## Step three, deploy the web app

1. Click **Deploy**, then **New deployment**.
2. Click the gear icon next to **Select type** and choose **Web app**.
3. Fill in the fields.
   - Description: `v1`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, authorize again if asked, and copy the **Web app URL**. It ends in `/exec`.

**Who has access must be Anyone.** If you set it to "Anyone with a Google account," teachers on personal devices hit a login wall and abandon the poll.

---

## Step four, wire the two HTML files

Already done for the current deployment — both files point at the live `/exec` URL. You only need this step if you redeploy in a way that mints a new URL.

Open `index.html` and `results.html` in any editor. Near the top of the script block in each file you will find this line.

```js
const ENDPOINT = "https://script.google.com/macros/s/.../exec";
```

Set it to your `/exec` URL, keeping the quotation marks, in **both** files. It must end in `/exec` with no trailing slash and no query string — the report page appends `?key=...` to it directly.

---

## Step five, publish to GitHub Pages

Both HTML files live in `pspoll/` in the repo. Commit and push, and the Pages workflow publishes them.

- Poll: `https://mglearn.github.io/tcea/pspoll/`
- Report: `https://mglearn.github.io/tcea/pspoll/results.html`

The poll is named `index.html`, so the bare directory link above serves it. That is the shorter link to hand out.

Shorten the poll link with `go.mgpd.org` before you send it anywhere. Keep the report link inside the PD team.

---

## Step six, test before you share

1. Open the poll link and submit one complete answer set.
2. Open the spreadsheet. A new row appears within a second or two.
3. Open the report link, enter your `REPORT_KEY`, and confirm the response count reads one.
4. Go back to the Apps Script editor, choose **clearResponses** from the dropdown, and click **Run**. Your test row disappears and the header row stays.

Now share the poll link.

---

## The report password

Set your own password before you deploy. It lives in exactly one place, near the top of `Code.gs`, shipped as a placeholder so the real value never lands in the repo.

```js
var REPORT_KEY = 'CHANGE-ME';
```

The report page sends that password to Apps Script, and Apps Script returns nothing without it. Viewing the page source gets an attacker no data, which is better than a browser side check.

Be clear eyed about the limit. Anyone holding the password can read the aggregates, and a web app set to **Anyone** answers whoever finds the URL and the key. This stops casual snooping. It is not a vault, so do not put anything in this system you would not want forwarded.

If you change the password, deploy a new version afterward or the old one keeps working.

---

## Redeploying after any change to Code.gs

Saving the script does nothing to the live URL. Every time you edit `Code.gs`:

1. Click **Deploy**, then **Manage deployments**.
2. Click the pencil icon on your active deployment.
3. Set **Version** to **New version**.
4. Click **Deploy**.

Your `/exec` URL stays the same, so the HTML files need no changes.

---

## Privacy protections already built in

- The poll never asks for a name, an email, a campus, or a district.
- The report shows group totals only.
- Cross tabs hide any group with fewer than five responses. Raise or lower that floor with `MIN_CELL` at the top of the report script.
- Open text answers pass through a scrubber that strips anything shaped like an email address, a phone number, or a web address before it reaches the screen.
- The report page carries a `noindex` tag, so search engines skip it.

---

## Editing the questions

Every question lives in the `BLOCKS` array in `index.html`. Add, cut, or reword freely. Three rules keep the pieces in sync.

1. If you add a question, add its `id` to `FIELDS` in `Code.gs`, add a matching label to `HEADERS`, then deploy a new version.
2. If you rename an existing question id, the spreadsheet column order shifts. Run `clearResponses` first or start a new sheet, since old rows will no longer line up.
3. If you reword an answer option, update `ORDER`, `TOPIC_META`, and `shortLabel` in `results.html`. Those match on exact strings.

The poll shows shortened session titles for scanning. The report expands them through `TOPIC_META`.

---

## What the report gives you

- **Presenter matchups.** For each of the four presenters, which of the two options pulls more first choice votes. That is the decision the showcase planning doc asks for.
- **Session demand.** All eight options ranked by breadth and by must attend interest. High breadth with low first choice means a good opener, not a headliner.
- **Scheduling.** Whether Saturday clears the bar, the strongest backup windows, and Saturday willingness broken out by role.
- **Price.** How the room reacts to the ninety nine dollar member rate, split by who actually pays.
- **Written requests.** Topics people asked for that nobody proposed.

Buttons across the top refresh the data, print to PDF, download a summary CSV for board reports, and open the raw spreadsheet.
