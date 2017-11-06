document.addEventListener("DOMContentLoaded", function() {

//In the election.js file, build an AJAX request that makes a GET request to the root path,
//and expects a JSON response.
	$.ajax ({
	url:"https://bb-election-api.herokuapp.com/",
	method:"get",
	datatype:"json"

}).done(response => console.log(response.candidates))

	for (let i=0 )


});
//Make sure you're making this request within your DOMContentLoaded block
//Add a <ul> to your index.html file, with an id. This is what we'll attach our data to.
//In the .done(function(responseData){}) callback function for the AJAX request loop over the candidates in responseData, and append a <li> element for each candidate into the DOM at our <ul> from the last step. You'll want to show the name and votes count of each candidate.  // Imagination!
