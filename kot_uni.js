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

/////////////////////////////////
// Navigation Bar
var mapDisplay = document.getElementById("mapDisplay");

function mapHover(input) {
	switch (input) {
		case 0:
			mapDisplay.innerHTML = "Kingdom of Therma: Castle and Township";
			break;
		case 1:
			mapDisplay.innerHTML = "Therma Woods Abandonend Temple";
			break;
		case 2:
			mapDisplay.innerHTML = "Therma River";
			break;
		case 3:
			mapDisplay.innerHTML = "Volcanic Fields";
			break;
		case 4:
			mapDisplay.innerHTML = "Maze Lake";
			break;
		case 5:
			mapDisplay.innerHTML = "Maze HQ";
			break;
		case 6:
			mapDisplay.innerHTML = "Therma Sea";
			break;
		case 7:
			mapDisplay.innerHTML = "Orph Territory";
			break;
		default:
			mapDisplay.innerHTML = "<i>Hover Somewhere On The Map</i>";
			break;
	}
};

mapHover(10);
