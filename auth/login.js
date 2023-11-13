const Users = require("../models/user");
const bcrypt = require("bcrypt");
const generateToken = require("./generateToken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const verify = await bcrypt.compare(password, user.password);
    if (verify) {
      res.status(200).send({
        msg: "login successful",
        token: generateToken(user.name, user.email),
      });
    } else {
      res.status(500).send({
        err: "incorrect password",
      });
    }
  } catch (err) {
    res.status(500).send({
      err,
    });
  }
};
module.exports = login;
