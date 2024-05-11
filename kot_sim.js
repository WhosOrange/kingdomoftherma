/************************************
* Kingdom of Therma: Universal Code
* by Derek 
********************************/
var nameInput = document.getElementById("inputText");
var zaCanvas = document.getElementById("zaCanvas");
var zaContext = zaCanvas.getContext("2d");

function underC() {
	zaContext.fillStyle = "black";
	zaContext.fillRect(0, 0, 320, 240);
	zaContext.fillStyle = "#ffffff";
	zaContext.font = "28px Bookman Old Style";
	zaContext.fillText("The simulation is", 7, 27);
	zaContext.fillStyle = "#ffff88";
	zaContext.font = "20px Bookman Old Style";
	zaContext.fillText("Under Construction :)", 7, 107);
	zaContext.fillStyle = "#77aaff";
	zaContext.font = "20px Bookman Old Style";
	zaContext.fillText("Sorry about that.", 7, 137);
}

underC();
