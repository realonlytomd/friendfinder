$(document).ready(function(){
  console.log("hello world");
// when the submit button is clicked, get the data from the input form
  $(".submit").on("click", function(event) {
    event.preventDefault();

    var currentUser = JSON.stringify({
      name: $("#userName").val().trim(),
      photo: $("#userLink").val().trim(),
      scores: [
        parseInt($("input[name=qOne]:checked").val()),
        parseInt($("input[name=qTwo]:checked").val()),
        parseInt($("input[name=qThree]:checked").val()),
        parseInt($("input[name=qFour]:checked").val()),
        parseInt($("input[name=qFive]:checked").val()),
        parseInt($("input[name=qSix]:checked").val()),
        parseInt($("input[name=qSeven]:checked").val()),
        parseInt($("input[name=qEight]:checked").val()),
        parseInt($("input[name=qNine]:checked").val()),
        parseInt($("input[name=qTen]:checked").val())
        ]
      });
    //console.log(currentUser);

    //  now the post command to send the data to apiRoutes.js
    var currentURL = window.location.origin;
    $.ajax(currentURL + "/api/friends", {
      data : currentUser,
      contentType : 'application/json',
      type : 'POST'
    }).done(function(friendsData) {
      console.log("friendsData AFTER doing the post: ", friendsData);

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

			}

			//now add up each indeces of the difference array
			function getSum(total, num) {
				return total + num;
			}
			totalDifference[i] = difference.reduce(getSum);
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

		// console.log(winningFriend.name);
		// console.log(winningFriend.photo);
		
		// 
    	//then, that friend must be displayed to the current user. 
    	//send that object of the winning Friend back out to the survey page

    	//res.json(winningFriend);

    // Grab the result from the AJAX post so that the winner's name and photo are displayed.
      $("#match-name").text(winningFriend.name);
      $("#match-img").attr("src", winningFriend.photo);

      // // Show the modal with the best match
      $("#results-modal").modal("show"); 
    });


  // clears the entry fields
    $("#userName").val("");
    $("#userLink").val("");
    // need to clear the radio selections too
    
  });
});
