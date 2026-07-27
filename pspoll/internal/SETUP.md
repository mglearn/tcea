# Setup

Fifteen minutes, start to finish. You need a Google account and a GitHub repo. You do not need to create a spreadsheet. The script does that for you.

---

## What you are building

| File | Where it goes | What it does |
| --- | --- | --- |
| `Code.gs` | script.google.com, standalone project | Creates the Google Sheet, stores answers, serves them back |
| `index.html` | GitHub Pages, `pspoll/` | The public poll |
| `results.html` | GitHub Pages, `pspoll/` | The password protected results dashboard |
| `results2.html` | GitHub Pages, `pspoll/` | A preview of that dashboard filled with invented data, no password, for showing people what they will get |
| `SETUP.md`, `HANDOFF.md`, `Code.gs`, the zip | `pspoll/internal/`, kept out of the website | Reference material for whoever runs the system |

The three HTML files are published. Everything else sits in `pspoll/internal/`, which the deploy workflow withholds from the site. Read the section on the internal folder near the end before you assume that means private.

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

Already done for the current deployment. Both files point at the live `/exec` URL. You only need this step if you redeploy in a way that mints a new URL.

Open `index.html` and `results.html` in any editor. Near the top of the script block in each file you will find this line.

```js
const ENDPOINT = "https://script.google.com/macros/s/.../exec";
```

Set it to your `/exec` URL, keeping the quotation marks, in **both** files. It must end in `/exec` with no trailing slash and no query string, because the report page appends `?key=...` to it directly.

---

## Step five, publish to GitHub Pages

The three HTML files live in `pspoll/` in the repo. Commit and push, and the Pages workflow publishes them within a couple of minutes.

- Poll: `https://mglearn.github.io/tcea/pspoll/`
- Report: `https://mglearn.github.io/tcea/pspoll/results.html`
- Sample preview: `https://mglearn.github.io/tcea/pspoll/results2.html`

The poll is named `index.html`, so the bare directory link above serves it. That is the shorter link to hand out.

Shorten the poll link with `go.mgpd.org` before you send it anywhere. Keep the report link inside the PD team. The sample preview is safe to share with anyone, since it holds no real responses.

---

## The sample preview

`results2.html` is the same dashboard as `results.html`, filled with twenty invented respondents and no password. Use it when you want to show somebody what the poll produces before real answers exist.

Everything on that page is fiction, and a banner at the top says so. Nobody filled out the poll to make those numbers. Do not quote them.

It needs no setup at all. The data is embedded in the file, so the page works even before you deploy the Apps Script.

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

**If you changed `FIELDS`, clear the sheet first.** `FIELDS` sets the column order. Adding, cutting, or reordering an entry shifts every column after it, and old rows keep the old layout, so a sheet holding both is unreadable. Run `clearResponses` from the editor, or run `setup` against a fresh spreadsheet, then deploy a new version. This applies to the current file: four questions were cut, so any responses gathered before that change will not line up.

---

## Privacy protections already built in

- The poll never asks for a name, an email, a campus, or a district.
- The report shows group totals only.
- Cross tabs hide any group with fewer than five responses. Raise or lower that floor with `MIN_CELL` at the top of the report script.
- Open text answers pass through a scrubber that strips anything shaped like an email address, a phone number, or a web address before it reaches the screen.
- The report page carries a `noindex` tag, so search engines skip it. So does the sample preview.

---

## The internal folder, and what it actually protects

This file, `HANDOFF.md`, `Code.gs`, and the zip all live in `pspoll/internal/`. The three published HTML files live one level up in `pspoll/`.

That split exists so the deploy workflow can keep the internal files off the website. It reads `.pagesignore` at the root of the repo, and just before uploading the site it deletes every path listed there from its temporary copy. Nothing happens to the repository itself, so `git clone` and `git pull` still bring these files down on any machine. They simply never appear at `mglearn.github.io`.

To withhold another folder later, add one line to `.pagesignore`. You do not need to touch the workflow.

**Now the part that matters.** This hides files from the website. It does not hide them from GitHub. The repository is public, so anyone can still read everything in `pspoll/internal/` by browsing github.com/mglearn/tcea or by fetching a raw file URL. Search engines can index those pages too.

So treat the internal folder as tidiness, not security. Never put a real password, key, or anything confidential in it. That is exactly why `REPORT_KEY` in `Code.gs` reads `CHANGE-ME` and the real password lives only in the Apps Script editor, which nobody but you can open.

If you need these files genuinely private while still getting them on clone, you have two real options. Make the repository private, which on some plans turns GitHub Pages off, so check before you switch. Or move the internal files into a separate private repository and clone it alongside this one.

---

## Editing the questions

Every question lives in the `BLOCKS` array in `index.html`. Add, cut, or reword freely. Three rules keep the pieces in sync.

1. If you add a question, add its `id` to `FIELDS` in `Code.gs`, add a matching label to `HEADERS`, then deploy a new version.
2. If you rename an existing question id, the spreadsheet column order shifts. Run `clearResponses` first or start a new sheet, since old rows will no longer line up.
3. If you reword an answer option, update `ORDER`, `TOPIC_META`, and `shortLabel` in **both** `results.html` and `results2.html`. Those match on exact strings, and a near miss silently counts as zero rather than raising an error.
4. To show a question only for certain answers, give it `showIf:{field:"<other id>", equals:["<answer>", ...]}`. The backup windows question uses this. Hidden questions are cleared, skipped when checking required answers, and left out of the numbering.

The poll shows shortened session titles for scanning. The report expands them through `TOPIC_META`.

---

## What the report gives you

- **Presenter matchups.** For each of the four presenters, which of the two options more respondents named among their top three. That is the decision the showcase planning doc asks for. Note that it now rests on breadth of interest, since the single must attend question was cut.
- **Session demand.** All eight options ranked by how many people put them in their top three.
- **Scheduling.** Whether Saturday clears the bar, the strongest backup windows among the people who ruled Saturday out, and Saturday willingness broken out by role.
- **Funding.** Where the money would come from, and how that splits by role. The poll states the planned prices rather than asking what a seat is worth, so it no longer measures willingness to pay.
- **Written requests.** Topics people asked for that nobody proposed.

Buttons across the top refresh the data, print to PDF, download a summary CSV for board reports, and open the raw spreadsheet.
