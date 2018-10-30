// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

var methodOverride = require('method-override');


// Sets up the Express App
// =============================================================
var port = process.env.PORT || 8080;
var app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Starts the server to begin listening
// =============================================================
app.listen(port);