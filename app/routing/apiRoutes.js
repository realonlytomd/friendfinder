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

		// compare the scores of the friends list with the current user
		// the current user is the last index of the friendsData array (.length)
		// so the 5 values of the scores are looped through for each array of scores
		// of each friend (minus the last one - the current user), ... a nested for loop.

		// set up 2 variables as arrays
		// the following is commented out to allow the program to run without errors. My currentUser 
		// array is not defined correctly at present
		// var difference = [];
		// var totalDifference = [];

		// for (var i = 0; i < (friendsData.length  - 1); i++) {

		// 	for (var j = 0; j < 5; j++) {

		// 		difference[j] = friendsData[i].scores[j] - friendsData[friendsData.length].scores[j];
		// 		// get the absolute value 
		// 		difference[j] = Math.abs(difference[j]);

		// 		// then add the differences together for each friend in turn

		// 		totalDifference[i] += difference[j];
		// 	}

		// }

		// // now we have a totalDifference number for each friend in the array
		// // so, use a compare function to sort the totalDifferences in numerical order
		// function sortOrder() {
  //   		totalDifference.sort(function(a, b){return a - b});
  //   	}

  //   	sortOrder();

    	//now, totalDifference[0] is the most compatible friend!

    	// it must be displayed to the current user.  I have not been able to decipher modals,
    	// so far. So, that is left to be done.

	});
};