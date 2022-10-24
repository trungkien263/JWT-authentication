const express = require("express");
const port = 3000;
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log("error connecting to Mongo", err);
  });

//Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);

app.listen(port, () => {
  console.log("listening on port " + port);
});

//Authentication

//Authorization
