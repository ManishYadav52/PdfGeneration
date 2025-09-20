const express = require("express");
const router = express.Router();
const { generatePDF } = require("../services/pdfService");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../services/authService");

// JWT Middleware
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Generate PDF report
router.post("/generate-report", authenticate, async (req, res) => {
  try {
    const { session_id } = req.body;
    if (!session_id) return res.status(400).json({ error: "session_id is required" });

    const filePath = await generatePDF(session_id);
    const fileName = session_id + ".pdf";

    res.json({
      message: "PDF generated successfully",
      filePath: `http://localhost:5001/reports/${fileName}`
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
