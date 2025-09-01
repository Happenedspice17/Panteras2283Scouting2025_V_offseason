# FRC Scouting App

This is a simple web-based scouting application designed for First Robotics Competition (FRC) teams. It allows you to quickly and efficiently collect match data and save it directly to a Google Sheet, with an offline backup option using QR codes.

## Features

* **Simple Data Entry:** A clean and easy-to-use form to log key metrics during a match.

* **Google Sheet Integration:** Automatically sends scouting data to a linked Google Sheet for centralized storage and analysis.

* **Offline Support:** Generates a QR code with the scouting data on submission, providing a reliable backup for use in areas with poor or no Wi-Fi.

* **Data Viewer:** A built-in table to view previously submitted data directly within the app.

## Setup Instructions

To get this app running, you need two main components: the web app (`index.html`) and the Google Apps Script (`scouting_script.gs`).

### 1. Google Sheet and Apps Script

1. **Create a new Google Sheet** and name it `FRC Scouting Data`.

2. In this sheet, create a new tab and name it **Scouting Data**.

3. In the Google Sheet menu, go to **Extensions** > **Apps Script**.

4. Copy the code from the `scouting_script.gs` file and paste it into the script editor.

5. Click the **Save project** icon.

6. **Deploy the script as a Web App:**

   * Click the **Deploy** dropdown > **New deployment**.

   * Set the "Type" to **Web app**.

   * Set **"Execute as"** to **"Me"**.

   * Set **"Who has access"** to **"Anyone"**.

   * Click **Deploy** and authorize the script when prompted.

   * **Copy the new Web app URL.** This is your unique API endpoint.

### 2. The Web App (`index.html`)

1. Open the `index.html` file in a text editor.

2. Find the line that says `const SCRIPT_URL = "...";`.

3. Replace the placeholder URL with the URL you copied from your Google Apps Script deployment.

4. Save the `index.html` file. You can now open this file directly in any modern web browser to use the app.

## How to Use

1. **Fill out the form** with the match number, team number, and all scouting metrics.

2. Click the **"Submit & Save"** button.

3. The data will be automatically sent to your Google Sheet. A QR code will also be generated as a backup.

4. Click **"View All Data"** to see a table of your scouting entries.

5. Click **"New Entry"** (on the QR code screen) or **"Back to Form"** (on the data table screen) to return to the scouting form.
