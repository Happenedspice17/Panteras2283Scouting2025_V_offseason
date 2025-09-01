function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Scouting Data");

    // Log the incoming data for debugging purposes
    Logger.log(JSON.stringify(e.parameter));

    // Append the received data as a new row in the spreadsheet
    sheet.appendRow([
      new Date(), 
      e.parameter.match,
      e.parameter.teamNumber,
      e.parameter.L1auto,
      e.parameter.L2auto,
      e.parameter.L3auto,
      e.parameter.L4auto,
      e.parameter.Algaeauto,
      e.parameter.Comsauto,
      e.parameter.L1tele,
      e.parameter.L2tele,
      e.parameter.L3tele,
      e.parameter.L4tele,
      e.parameter.Algaetele,
      e.parameter.Processortele,
      e.parameter.AlgaeReefTele,
      e.parameter.Deep,
      e.parameter.Shallow,
      e.parameter.DNC,
      e.parameter.Generalcoms,
      e.parameter.Initials
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Saved successfully!" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    const scoutingSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Scouting Data");
    if (!scoutingSheet) {
      throw new Error("Scouting Data sheet not found.");
    }
    const data = scoutingSheet.getDataRange().getValues();
    if (data.length <= 1) { // Only headers exist
      return ContentService.createTextOutput(
        JSON.stringify({ success: true, data: [], message: "No scouting data found." })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    const headers = data.shift();
    const scoutingData = data.map(row => {
      const rowObject = {};
      headers.forEach((header, index) => {
        rowObject[header] = row[index];
      });
      return rowObject;
    });

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, data: scoutingData })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
