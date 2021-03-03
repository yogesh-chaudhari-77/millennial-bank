var createError = require('http-errors');

// Lightweight web service based node framework
var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

// Logging middleware
var logger = require('morgan');

const sampleRoutes = require("./routes/sampleRoutes");
const userRoutes = require("./routes/userRoutes");

var app = express();
app.listen(3000);

app.use(express.static("public"));
app.use(express.static("node_modules"));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Sample routes
app.use(sampleRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
  res.render("auth/login.ejs", {});
});

module.exports = app;
