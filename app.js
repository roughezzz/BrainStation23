require("dotenv").config();

const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser");

// // Initializing Routes
const blogger = require("./routes/blogger");

// Initializing Express
const app = express();

// Connecting to Mongoose
mongoose.connect(
  "mongodb://localhost:27017/database_bs23",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// App in Actions
app.use(bodyParser.json());
app.use("/blogger", blogger);

// Listening to Port
app.listen(8383);
