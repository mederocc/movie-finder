require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode is activated");
}

module.exports = app;
