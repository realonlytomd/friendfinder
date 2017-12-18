//install necessary dependancies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// This sets up the Express App

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function (req,res) {
	res.send("Hello World");
})

// This sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));02
app.use(bodyParser.json());



// This code "starts" the server


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



