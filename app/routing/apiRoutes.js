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
		//console.log(friendsData[1].scores);

		// My currentUser.scores is posted here, and I know it needs to be converted to integers
		// I've looked at JSON.parse, the array.map() function, etc.  
		// But I have a weird extra[] in the key name scores...

		// MOVING ON....

		// compare the scores of the friends list with the current user
		// the current user is the last index of the friendsData array (.length)
		// so the 5 values of the scores are looped through for each array of scores
		// of each friend (minus the last one - the current user), ... a nested for loop.

		// set up 2 variables as arrays
		// the following is commented out to allow the program to run without errors. My currentUser 
		// array is not defined correctly at present

		var difference = [];
		var totalDifference = [];

		// for (var i = 0; i < (friendsData.length  - 1); i++) {

		// 	for (var j = 0; j < scores.length; j++) {

		// 		difference[j] = friendsData[i].scores[j] - friendsData[friendsData.length].scores[j];
		// 		// get the absolute value 
		// 		difference[j] = Math.abs(difference[j]);

		// 		// then add the differences together for each friend in turn

		// 		totalDifference[i] += difference[j];
				
		// 	}
				
  //   	}

  //   	// now we have a totalDifference number for each corresponding friend in the friendsData array

  //   	// we can find the lowest number using Math.min

		// function myArrayMin(arr) {
		// 	return Math.min.apply(null, arr);
		// }

		// var lowestNumber = myArrayMin(totalDifference);

		// // then use an if statement to find the corresponding index in the friendsData array.
		// for (var i = 0; i < friendsData.length; i++) {

		// 	if totalDifference[i] = lowestNumber {
		// 		var resultIndex = i;
		// 	}
		// }
		// // ---------------------------------------------------------
		// // Our winning friend is friendsData[resultIndex]!!!!!
		// //----------------------------------------------------------

		// console.log(friendsData[resultIndex].name);
		// console.log(friendsData[resultIndex].photo);

    	// they must be displayed to the current user.  I have not been able to decipher modals,
    	// so far. So, that is left to be done.

	});
};