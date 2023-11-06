const mongoose = require("mongoose");

const connectDB = async () => {
  //   console.log(process.env.MONGO_URL);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {});

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
module.exports = connectDB;
