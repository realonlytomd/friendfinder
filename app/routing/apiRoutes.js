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

		console.log(req.body);

		friendsData.push(req.body);
		console.log("In POST");
		console.log(friendsData);
		console.log(friendsData[0].name);
		console.log(friendsData[0].photo);
		console.log(friendsData[0].scores);
		console.log(friendsData[1].name);
		console.log(friendsData[1].photo);
		console.log(friendsData[1].scores);

		// compare the scores of the friends list with the current user
		// the current user is the last index of the friendsData array (.length - 1)
		// so the 5 values of the scores are looped through for each array of scores
		// of each friend (minus the last one - the current user), ... a nested for loop.

		// set up 2 variables as arrays

		var difference = [];
		var totalDifference = [];

		for (var i = 0; i < (friendsData.length  - 1); i++) {

			for (var j = 0; j < 10; j++) {

				difference[j] = friendsData[i].scores[j] - friendsData[friendsData.length - 1].scores[j];
				// get the absolute value 
				difference[j] = Math.abs(difference[j]);
		
				// then add the differences together for each friend in turn

				totalDifference[i] = difference[j];
			}
				
    	}

    	// now we have a totalDifference number for each corresponding friend in the friendsData array

    	// we can find the lowest number using Math.min
    	var resultIndex;
    	var lowestNumber;
		function myArrayMin(arr) {
			return Math.min.apply(null, arr);
		}

		lowestNumber = myArrayMin(totalDifference);

		// then use an if statement to find the corresponding index in the friendsData array.
		for (var i = 0; i < friendsData.length; i++) {

			if (totalDifference[i] === lowestNumber) {
				resultIndex = i;
			}
		}
		// ---------------------------------------------------------
		// Our winning friend is friendsData[resultIndex]!!!!!
		//----------------------------------------------------------
		
		console.log(friendsData[resultIndex].name);
		console.log(friendsData[resultIndex].photo);

		// 
    	//then, that friend must be displayed to the current user. 
    	//I found a good example of modals on W3school,
    	//So, that is left to be done.

	});
};