//install necessary dependancies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// This sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"));
// This sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));02
app.use(bodyParser.json());


// This points the server to the route files.
// They give the server a map of how to respond
// when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// This code "starts" the server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



