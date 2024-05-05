/************************************
* Kingdom of Therma: Universal Code
* by Derek 
********************************/

/////////////////////////////////
// Navigation Bar
var navBarDisplay = document.getElementById("navText");

function navBarHover(input) {
	switch (input) {
		case 0:
			navBarDisplay.innerHTML = "Home";
			break;
		case 1:
			navBarDisplay.innerHTML = "About The Kingdom";
			break;
		case 2:
			navBarDisplay.innerHTML = "Map of The Kingdom";
			break;
		case 3:
			navBarDisplay.innerHTML = "Frequently Asked Questions";
			break;
		case 4:
			navBarDisplay.innerHTML = "Simulation?";
			break;
		case 5:
			navBarDisplay.innerHTML = "Misc.";
			break;
		default:
			navBarDisplay.innerHTML = "Navigation";
			break;
	}
};

navBarHover(10);
