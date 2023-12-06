var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
//var bodyParser = require("body-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const { log } = require("console");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "../public/")));

mongoose
  .connect("mongodb+srv://userDyma:1234@clustertest.rmk3f6u.mongodb.net/", {})
  .then(
    (ok) => console.log("connection OK !!!"),
    (err) => console.log(err)
  );

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/"));
});

module.exports = app;

//mongodb+srv://userDyma:1234@clustertest.rmk3f6u.mongodb.net/
