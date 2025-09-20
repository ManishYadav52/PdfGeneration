const express = require("express");
const router = express.Router();
const { register, login } = require("../services/authService");

// Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await register(email, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await login(email, password);
    res.json({ message: "Login successful", ...data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

console.log("authRoutes loaded", router);
module.exports = router;
