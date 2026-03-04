# Click2.ai — Free AI Course Raffle Form

## Deploy (2 steps)

### Step 1: Connect Google Sheets (to collect responses)

1. Create a **blank** Google Sheet at https://sheets.google.com
2. Go to **Extensions → Apps Script**
3. Delete the default code, paste everything from `google-apps-script.js`, click Save
4. Click **Deploy → New Deployment → Web app** (Execute as: Me, Access: Anyone)
5. Copy the URL and paste it into `index.html` line ~270 replacing `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`

Headers are created automatically on the first submission.

### Step 2: Put it online

Go to **https://app.netlify.com/drop** and drag your `form` folder onto the page.

Done. Your form is live with a free HTTPS URL.

---

**To update:** drag the folder again. Netlify replaces the old version.  
**Custom domain:** add it free in Netlify site settings.
