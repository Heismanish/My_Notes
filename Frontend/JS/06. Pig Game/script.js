"use strict";

// Selecting the elements:
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// declaring the game variables
let scores, currentScore, activePlayer, playing;

// Initialising condition:
const init = function () {
	score0.textContent = 0;
	score1.textContent = 0;

	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	score0.textContent = 0;
	score1.textContent = 0;
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;
	dice.classList.add("hidden"); // dice should be hidden by default
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
	player0El.classList.add("player--active");
	player1El.classList.remove("player--active");
};

// iniating the game
init();

// function to switch player
const switchPlayer = function () {
	document.getElementById(`current--${activePlayer}`).textContent = 0;
	currentScore = 0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

// Setting up the dice:
btnRoll.addEventListener("click", function () {
	if (playing) {
		// generate a random dice roll
		const diceScore = Math.trunc(Math.random() * 6) + 1;
		// make dice appear
		dice.src = `dice-${diceScore}.png`;
		dice.classList.remove("hidden");

		// check for rolled 1
		if (diceScore !== 1) {
			// update current score of active player:
			currentScore += diceScore;
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore;
		} else {
			// switch player:
			switchPlayer();
		}
	}
});

btnHold.addEventListener("click", function () {
	// 1. add current score to score of active player
	scores[activePlayer] += currentScore;
	document.getElementById(`score--${activePlayer}`).textContent =
		scores[activePlayer];

	// 2. Check if player's scofef is >=100
	if (scores[activePlayer] >= 100) {
		playing = false;
		dice.classList.add("hidden");

		// announce winner
		document
			.querySelector(`.player--${activePlayer}`)
			.classList.add("player--winner");
		// remove active player
		document
			.querySelector(`.player--${activePlayer}`)
			.classList.remove("player-active");
	} else {
		// sitch player:
		switchPlayer();
	}
});

// Reset the game to initial condition.
btnNew.addEventListener("click", init);
