const Users = require("../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await Users.findOne({ email });
    if (userExists) {
      res.status(500).send({
        msg: "user already exists",
      });
      return;
    }
    const hash = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, hash);
    let output = await Users.insertMany([
      { name, email, password: hashedPassword },
    ]);
    res.status(200).send({
      msg: "successfully registered",
    });
  } catch (err) {
    res.status(500).send({
      err,
    });
  }
};

module.exports = register;
