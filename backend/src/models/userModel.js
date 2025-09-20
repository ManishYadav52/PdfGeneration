const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "users.json");

// Initialize file if not exists
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

// Helper functions
const getUsers = () => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};

const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(u => u.email === email);
};

module.exports = { getUsers, addUser, findUserByEmail };
