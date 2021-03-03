var createError = require('http-errors');

// Lightweight web service based node framework
const express = require('express');
const os = require("os");

const formidableMiddleware = require('express-formidable');

// MongoDB ODM for node
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

// Logging middleware
const logger = require('morgan');

// Requiring all the routes
const sampleRoutes = require("./routes/sampleRoutes");
const userRoutes = require("./routes/userRoutes");

// Init the express app
const app = express();

// Connect to database and then start listening for requests
const dbURL = "mongodb+srv://root:root@cluster0.stjov.mongodb.net/mb?authSource=admin&replicaSet=atlas-71twyl-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( (result) => { app.listen(3000); })
        .catch((err) => console.error(err));

// Using public and node_modules as static server renders
app.use(express.static("public"));
app.use(express.static("node_modules"));

// For accesing post variables
app.use(formidableMiddleware());


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Registering routes with the app
app.use(sampleRoutes);
app.use(userRoutes);

// 404 page 
app.use( (req, res) => {
  res.render("templates/404.ejs");
} );

module.exports = app;
