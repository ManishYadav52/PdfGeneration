const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require("./routes/reportRoutes");
const path = require("path");


const app = express();

// Global CORS middleware
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
 

// JSON parser
app.use(express.json());

const reportsPath = path.join(__dirname, "reports"); // src/reports
app.use("/reports", express.static(reportsPath));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/report", reportRoutes);

app.get("/", (req, res) => {
    res.send("Backend running!");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
