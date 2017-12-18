
// Include the path package

var path = require("path");

// now for the routing
module.exports = function(app) {

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
//	app.use( function(req, res) {
//		res.sendFile(path.join(__dirname + "../public/home.html"));
//	});
};

