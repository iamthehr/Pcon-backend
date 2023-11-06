const jwt = require("jsonwebtoken");

const generateToken = async (name, email) => {
  return jwt.sign({ name, email }, process.env.JWT_SECRET, {
    expiresIn: "1day",
  });
};

module.exports = generateToken;
