// This file loads the data collected from the survey
// It links the routes to the data source
// which is an array of the info collected from the survey

var friendsData = require("../data/friends.js");

module.exports = function(app) {

	// API GET Requests
	// This code handles when users go to the friends data page.

	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

    // this takes the data from the survey and pushes it into friendsData
	app.post("/api/friends", function(req, res) {

		console.log("req.body: ", req.body);

		friendsData.push(req.body);
		// so here, the new, recently pushed into friendsData file will go back to survey.js
		// 
		res.json(friendsData);
	});
	
};