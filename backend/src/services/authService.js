const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { addUser, findUserByEmail } = require("../models/userModel");

const SECRET_KEY = "mysecretkey"; // Replace in production

const register = async (email, password) => {
  if (findUserByEmail(email)) throw new Error("User already exists");

  const hashed = await bcrypt.hash(password, 10);
  const user = { email, password: hashed };
  addUser(user);
  return { email };
};

const login = async (email, password) => {
  const user = findUserByEmail(email);
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Incorrect password");

  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  return { email, token };
};

module.exports = { register, login, SECRET_KEY };
