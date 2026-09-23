/**
 * Saves feedback from the rating page into this Google Sheet.
 *
 * Setup: open your Google Sheet → Extensions → Apps Script, replace everything
 * there with this file, then Deploy → New deployment → Web app
 * (Execute as: Me, Who has access: Anyone). Paste the Web app URL into
 * `sheetsUrl` in index.html.
 */

// Name of the tab the answers go into. It's created automatically.
const SHEET_NAME = "Answers";

// Optional: also email each new answer here, e.g. "you@example.com".
const NOTIFY_EMAIL = "";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse(e.postData.contents);
    const rating = Math.round(Number(data.rating));
    const stars = rating >= 1 && rating <= 5 ? rating : "";
    const answer = String(data.message || "").slice(0, 5000);

    const sheet = getSheet();
    sheet.appendRow([new Date(), stars, safeText(answer)]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        `New feedback (${stars}★) — Αρκατένα Ελένης`,
        `Stars: ${stars}/5\n\n${answer}`
      );
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the Web app URL in a browser to check it's live.
function doGet() {
  return json({ ok: true, message: "Feedback collector is running." });
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Date", "Stars", "Answer"]);
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170);
    sheet.setColumnWidth(3, 500);
  }
  return sheet;
}

// Stop answers starting with = + - @ from being treated as formulas.
function safeText(s) {
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
