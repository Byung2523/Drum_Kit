// Detacting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {


	// The syntex "this" is telling the app which button was triggered with click. 
	var buttonInnerHTML = this.innerHTML;

	createSound(buttonInnerHTML);
	buttonAnimation(buttonInnerHTML);

	});
}

// Detatcing Key Pressed


document.addEventListener("keydown", function (event) {

	// event.key is directing the app to the event ="keydown" and key = "user input".
	createSound(event.key);
	buttonAnimation(event.key);

});


function createSound(key) {

		switch (key) {
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
		break;

		case "a":
			var kick = new Audio("sounds/Bass.mp3");
			kick.play();
			break;

		case "s":
			var tom2 = new Audio("sounds/tom-2.mp3");
			tom2.play();
		break;

		case "d":
			var snare = new Audio("sounds/snare.mp3");
			snare.play();
			break;

		case "j":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

		case "k":
			var tom3 = new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;

		case "l":
			var tom4 = new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;

		default: console.log(buttonInnerHTML);
	}
}

// Adding animation to the buttons 

function buttonAnimation (currentKey) {

	// the DOM the classes are represented like this ".w" similar to CSS classes.
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	// Using the function set-timeout to create an effect of pressing a real button.
	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);

}
