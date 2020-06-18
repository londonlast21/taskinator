// When the fact Button is clicked, 
$("#factButton").on("click", function() {
	// generate number from number of facts
	var number = Math.floor((Math.random() * booFacts.length));
	// display 
	$("#factText").text(booFacts[number])
})

// this holds all boo facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

// when textPink button is pressed ...
$("#textPink").on("click", function() {
	// change funText to pink
	$("#funText").css("color", "pink")
})

// when textOrang button is pressed...
$("#textOrange").on("click", function() {
	//change funText to orange
	$("#funText").css("color", "orange")
})

// when textGraan button is pressed...
$("#textGreen").on("click", function() {
	// change funText to green
	$("#funText").css("color", "green")
})

// when boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	// increase box size
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

// when boxShrink button is clicked...
$("#boxShrink").on("click", function() {
	// decrease box size
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})