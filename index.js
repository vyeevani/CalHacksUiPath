// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routers/main.js");

// CONSTANTS
const port = process.env.PORT || 8080;

// SETUP
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("./assets"));
app.set('view engine', 'ejs');
app.use("/", router);

// START SERVER
app.listen(port, () => console.log("Server listening on port: " + port));
module.exports = app;
