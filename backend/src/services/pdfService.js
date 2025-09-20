const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const assessmentData = require("../data/data");

// Helper function to render objects as HTML tables
const renderTable = (obj) => {
  if (!obj) return "";
  let html = `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 15px;">`;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      html += `<tr><td colspan="2"><strong>${key}</strong></td></tr>`;
      html += `<tr><td colspan="2">${renderTable(value)}</td></tr>`;
    } else {
      html += `<tr><td style="font-weight:bold;">${key}</td><td>${value}</td></tr>`;
    }
  }

  html += `</table>`;
  return html;
};

// Render exercises array nicely
const renderExercises = (exercises) => {
  if (!exercises || exercises.length === 0) return "";
  let html = "";
  exercises.forEach((exercise, index) => {
    html += `<h3>Exercise [${index + 1}] - ${exercise.name}</h3>`;
    html += `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 15px;">
      <tr><td>Assign Reps</td><td>${exercise.assignReps}</td></tr>
      <tr><td>Correct Reps</td><td>${exercise.correctReps}</td></tr>
      <tr><td>Total Sets</td><td>${exercise.totalSets}</td></tr>
      <tr><td>Side</td><td>${exercise.side}</td></tr>
    </table>`;

    exercise.setList.forEach((set, idx) => {
      html += `<h4>Set [${idx + 1}]</h4>`;
      html += `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 10px;">
        <tr><td>Correct Reps</td><td>${set.correctReps}</td></tr>
        <tr><td>Incorrect Reps</td><td>${set.incorrectReps}</td></tr>
        <tr><td>Time</td><td>${set.time}</td></tr>
        <tr><td>Total Reps</td><td>${set.totalReps}</td></tr>
      </table>`;

      if (set.additionalFields && set.additionalFields.length > 0) {
        html += `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; margin-bottom: 15px;">
          <tr><th>Field Name</th><th>Text</th><th>Unit</th><th>Value</th></tr>`;
        set.additionalFields.forEach(field => {
          html += `<tr>
            <td>${field.fieldName}</td>
            <td>${field.fieldText}</td>
            <td>${field.fieldUnit}</td>
            <td>${field.fieldValue}</td>
          </tr>`;
        });
        html += `</table>`;
      }
    });
  });
  return html;
};

const generatePDF = async (session_id) => {
  const data = assessmentData.find(a => a.session_id === session_id);
  if (!data) throw new Error(`Session not found: ${session_id}`);

  console.log("Generating PDF for session:", session_id);

  const html = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.5; }
          h1 { color: #2c3e50; border-bottom: 2px solid #333; padding-bottom: 5px; }
          table { width: 100%; margin-bottom: 15px; }
          th, td { padding: 5px; text-align: left; }
          th { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>Assessment Report - ${data.assessment_id}</h1>
        <h2>Session Info</h2>
        ${renderTable({
          session_id: data.session_id,
          accuracy: data.accuracy,
          assessmentResultId: data.assessmentResultId,
          assessment_id: data.assessment_id,
          gender: data.gender,
          height: data.height,
          weight: data.weight,
          initialPainScore: data.initialPainScore,
          laterPainScore: data.laterPainScore,
          finalPainScore: data.finalPainScore,
          initialVAS: data.initialVAS,
          isLandmarksUploaded: data.isLandmarksUploaded
        })}
        <h2>Body Composition</h2>
        ${renderTable(data.bodyCompositionData)}
        <h2>Exercises</h2>
        ${renderExercises(data.exercises)}
      </body>
    </html>
  `;

  const reportsDir = path.join(__dirname, "../reports");
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

  const filePath = path.join(reportsDir, `${session_id}.pdf`);

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.pdf({ path: filePath, format: "A4" });
  await browser.close();

  console.log("PDF generated at:", filePath);
  return filePath;
};

module.exports = { generatePDF };
