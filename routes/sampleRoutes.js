const express = require("express");

// Creates a new instance of the router
const router = express.Router();

const sampleController = require("../controllers/sampleController");

// Replace the app with router instance
// app.get("/", (req, res) => {});
router.get("/sample", sampleController.sample_index );

module.exports = router;