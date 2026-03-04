// ═══════════════════════════════════════════════════════════════
// GOOGLE APPS SCRIPT — Paste this into your Google Sheets
// ═══════════════════════════════════════════════════════════════
//
// SETUP:
// 1. Create a blank Google Sheet
// 2. Go to Extensions → Apps Script
// 3. Delete the default code, paste this entire file, click Save
// 4. Click Deploy → New Deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Authorize when prompted
// 6. Copy the URL → paste into index.html (replacing the placeholder)
//
// That's it. Headers are created automatically on first submission.
// ═══════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Auto-create headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Company', 'Comments']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.comments || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Entry recorded' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Handle GET requests (for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Click2.ai Raffle Form API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
