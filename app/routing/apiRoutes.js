// This file loads the data collected from the survey
// It links the routes to the data source
// which is an array of the info collected from the survey


var friendsData = require("../data/friends.js");


module.exports = function(app) {

// API GET Requests
// This code handles when users goes to the friends data page.


	app.get("/api/friends", function(req, res) {
		res.json(friendsData);
	});

// this takes the data from the survey and pushes it into friendsData
	app.post("/api/friends", function(req, res) {

		friendsData.push(req.body);
		console.log("In POST");
		console.log(friendsData);
		console.log(friendsData[0].name);
		console.log(friendsData[0].photo);
		console.log(friendsData[0].scores);
		console.log(friendsData[1].name);
		console.log(friendsData[1].photo);
		//console.log(friendsData[1].scores[]);

		// compare the scores if the friends list with the current user

		for (var i = 0; i < friendsData.length; i++) {

			friendsData[i].scores

		}

	});
};