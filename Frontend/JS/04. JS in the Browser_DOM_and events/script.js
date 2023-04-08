"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	// When there is no input
	if (!guess) {
		displayMessage("No Number!");

		// When palyer wins
	} else if (guess === secretNumber) {
		displayMessage("Correct Number");
		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}

		// Guess is Wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "Too High!" : "Too low!");
			score--;

			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("You Lost the game!");
		}
	}
});

document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;

	document.querySelector(".score").textContent = score;
	displayMessage("Start guessing...");
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
});
