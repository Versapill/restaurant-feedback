# Guest Feedback Page

A rating page for Αρκατένα Ελένης: `index.html` plus the logo (`logo.jpg`). No build step; keep both files together when hosting. Host it anywhere static (GitHub Pages, Netlify, etc.) and point a table QR code at it.

## How it works

- **4–5 stars:** the guest is redirected to the public review page immediately.
- **1–3 stars:** a private feedback form asking "How can we improve your experience?".

## Setup

Edit the `CONFIG` block near the bottom of `index.html`:

| Setting | What it does |
| --- | --- |
| `reviewUrl` | Where happy guests are sent. |
| `sheetsUrl` | Google Sheets Web app URL that saves 1–3 star answers (see below). |

> ⚠️ Until `sheetsUrl` is set, 1–3 star answers are not saved anywhere.

## Saving answers to Google Sheets

Each answer becomes a row: **Date · Stars · Answer**.

1. Create a new Google Sheet (e.g. "Feedback").
2. In the sheet, open **Extensions → Apps Script**.
3. Delete what's in the editor, paste the contents of [`google-sheets-script.gs`](google-sheets-script.gs), and click **Save**.
   - Optional: put your email in `NOTIFY_EMAIL` to also get an email for each answer.
4. Click **Deploy → New deployment**. Click the gear next to "Select type" and pick **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
5. Click **Deploy**, then **Authorize access** and allow it. (Google may warn that the app isn't verified: click **Advanced → Go to … (unsafe)**. It's your own script.)
6. Copy the **Web app URL** (ends in `/exec`) and paste it into `sheetsUrl` in `index.html`.

To check it's live, open the Web app URL in a browser: it should say `"Feedback collector is running."` The **Answers** tab is created with the first answer.

If you edit the script later, use **Deploy → Manage deployments → Edit → New version** so the same URL keeps working.
