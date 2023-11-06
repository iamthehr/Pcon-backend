const express = require("express");
const connectDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// console.log(process.env.MONGO_URL);
const app = express();
connectDB();
app.use(express.json());
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/achievements", require("./routes/achievementRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3080, () => {
  console.log("server started");
});
