require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();
const routes = require("./routes/viewRoutes");

//View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views/pages"));

//Public directory
app.use(express.static(`${__dirname}/public`));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//Routes
app.use(routes);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode is activated");
}

module.exports = app;
