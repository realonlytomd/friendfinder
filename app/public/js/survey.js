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
    }).done(function(data) {

      // console.log(data.name);
      // console.log(data.photo);

    // Grab the result from the AJAX post so that the winner's name and photo are displayed.
      $("#match-name").text(data.name);
      $("#match-img").attr("src", data.photo);

      // // Show the modal with the best match
      $("#results-modal").modal("show"); 
    });


  // clears the entry fields
    $("#userName").val("");
    $("#userLink").val("");
    // need to clear the radio selections too
    
  });
});
