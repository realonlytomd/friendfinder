
// Include the path package

var path = require("path");

// now for the routing
module.exports = function(app) {

	app.get("/surveyTest", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/surveyTest.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/homeTest.html"));
	});

};

