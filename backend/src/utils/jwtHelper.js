const jwt = require("jsonwebtoken");

// Secret key (aap chahe to .env file me bhi rakh sakte ho)
const SECRET_KEY = "your_secret_key";

// Generate JWT token
const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    throw new Error("Invalid token");
  }
};

module.exports = { generateToken, verifyToken, SECRET_KEY };
