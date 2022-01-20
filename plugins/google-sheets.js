const SPREADSHEET_ID = '1U22YR19SX-azbPTdgS9YtRpQO2XTKbEcPaECQWFl5Sw';
const API_KEY = 'AIzaSyCQaBSctB6MYlmIzTb1zOWf01F3Ptu13Mk';
// const SHEETS_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/?key=${API_KEY}&includeGridData=true`;
const config = {
  id: SPREADSHEET_ID,
  api_key: API_KEY
}

// async function getSheetsData() {
//   const res = await fetch(SHEETS_URL);
//   const { data } = await res.json();
//   return data;
// }

export default config;

