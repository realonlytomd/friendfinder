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

		//console.log(req.body);

		friendsData.push(req.body);
		console.log("In POST");
		console.log(friendsData);
		console.log(friendsData[0].name);
		//console.log(friendsData[0].photo);
		console.log(friendsData[0].scores);
		console.log(friendsData[1].name);
		//console.log(friendsData[1].photo);
		console.log(friendsData[1].scores);

		//make an object to hold the winner to send back to survey.html
		var winningFriend = {
			name: "",
			photo: "",
			winnerLow: 100
		};

		// compare the scores of the friends list with the current user
		// the current user is the last index of the friendsData array (.length - 1)
		// so the scores are looped through for each array of scores
		// of each friend (minus the last one - the current user), ... a nested for loop.

		// set up 2 variables as arrays

		var difference = [];
		var totalDifference = [];


		for (var i = 0; i < (friendsData.length  - 1); i++) {
			//console.log(friendsData[i].scores.length);

			for (var j = 0; j < friendsData[i].scores.length; j++) {

				difference[j] = friendsData[i].scores[j] - friendsData[friendsData.length - 1].scores[j];
				// get the absolute value 
				difference[j] = Math.abs(difference[j]);
				console.log(difference);

			}

			//now add up each indeces of the difference array
			function getSum(total, num) {
				return total + num;
			}
			totalDifference[i] = difference.reduce(getSum);
			console.log(totalDifference);
			// empty out the difference array before next friend
			difference = [];
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
		for (var i = 0; i < friendsData.length - 1; i++) {

			if (totalDifference[i] === lowestNumber) {
				resultIndex = i;
			}
		}
		// ---------------------------------------------------------
		// Our winning friend is friendsData[resultIndex]!!!!!
		//----------------------------------------------------------
		
		winningFriend.name = friendsData[resultIndex].name;
		winningFriend.photo = friendsData[resultIndex].photo;
		winningFriend.winnerLow = lowestNumber;

		console.log(winningFriend.name);
		console.log(winningFriend.photo);
		
		// 
    	//then, that friend must be displayed to the current user. 
    	//Then send that object of the winning Friend back out to the survey page

    	//res.json(winningFriend);
    	//try this next
    	res.send(winningFriend.toString());

	});
};