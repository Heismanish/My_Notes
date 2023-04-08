"use strict";
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
const massMarks = 95;
const massJohn = 85;
const heightMarks = 1.88;
const heightJohn = 1.76;

const bmi = function (mass, height){
    return mass / height**2;
}

const bmiMarks = bmi(massMarks,heightMarks);
const bmiJohn = bmi(massJohn,heightJohn);

const markHigherBMI = bmiMarks>bmiJohn;
console.log(bmiMarks,bmiJohn,markHigherBMI);
*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. 
   The message can be either "Mark's BMI is higher than John's!" or 
   "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.
   Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
const massMarks = 95;
const massJohn = 85;
const heightMarks = 1.88;
const heightJohn = 1.76;

const bmi = (mass, height) => mass / height**2;

if(bmi(massMarks,heightMarks).toFixed(2)> bmi(massJohn,heightJohn).toFixed(2)){
    console.log(`Mark's BMI (${bmi(massMarks,heightMarks).toFixed(2)}) is 
    higher than John's (${bmi(massJohn,heightJohn).toFixed(2)})!`)
} else{
    console.log(`John's BMI (${bmi(massJohn,heightJohn).toFixed(2)}) is higher than John's (${bmi(massMarks,heightMarks).toFixed(2)})!`)
}
*/

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner with the highest 
average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the 
competition, and print it to the console. Don't forget that there can be a 
draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this 
rule, a team only wins if it has a higher score than the other team,
 and the same time a score of at least 100 points. HINT: Use a logical
  operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only
 happens when both teams have the same score and both have a score
  greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
// const dolphinFirst = 96;
// const dolphinSecond = 108;
// const dolphinThird = 101;

// const koalasFirst = 88;
// const koalasSecond = 91;
// const koalasThird = 110;
/*
const dolphinFirst = 97;
const dolphinSecond = 112;
const dolphinThird = 101;

const koalasFirst = 109;
const koalasSecond = 95;
const koalasThird = 106;

const average = (first, second, third) => (first+second+third)/3;

const averageDolphin = average(dolphinFirst,dolphinSecond,dolphinThird);
const avergeKoala = average(koalasFirst,koalasSecond,koalasThird);

if( averageDolphin>avergeKoala && averageDolphin >= 100){
    console.log(`Team Dolphin Wins!!`);
} else if( averageDolphin < avergeKoala && avergeKoala >= 100){
    console.log(`Team Koala wins!!`);
} else if( averageDolphin === avergeKoala && avergeKoala >= 100 && averageDolphin >= 100){
    console.log(`Both team wins!!`)
} 
else{
    console.log(`It's a draw!!`);
}
*/

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes 
eating in a resturant. In his country, it's usual to tip 15% if the bill 
value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. It's not allowed to use an 
if/else statement 😅 (If it's easier for you, you can start with an 
if/else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, 
and the final value (bill + tip). Example: 'The bill was 275, the tip 
was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
const bill = 200;
let tip;

bill >=50 && bill<= 300 ? tip = bill*0.15 : tip = bill*0.2;
console.log(`The bill was ${bill}, the tip  was ${tip} and the total value was ${tip + bill}`);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PART-2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (score1, score2, score3) => {
	return (score1 + score2 + score3) / 3;
};

const checkWinner = (avgDolphin, avgKoalas) => {
	if (avgDolphin >= avgKoalas * 2) {
		return `Dolphin wins!!`;
	} else if (avgKoalas >= avgDolphin * 2) {
		return `Koalas wins!!`;
	} else {
		return `No team wins...`;
	}
};

const averageDolphin = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(averageDolphin, averageKoalas));

const averageDolphin2 = calcAverage(85, 54, 41);
const averageKoalas2 = calcAverage(23, 34, 27);

console.log(checkWinner(averageDolphin2, averageKoalas2));
*/
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value
 is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the 
    corresponding tip, calculated based on the rules above (you can check out the code  
    from first tip calculator challenge if you need to). Use the function type you like 
    the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the 
   function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const calcTip = (bill) => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties 
   for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate 
   the BMI (the same method on both objects). Store the BMI 
   value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with
   the full name and the respective BMI. Example: "John Smith's
   BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. 
John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const bmiMarks = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

const bmiJohn = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.BMI = this.mass / this.height ** 2;
		return this.BMI;
	},
};

if (bmiMarks.calcBMI() > bmiJohn.calcBMI()) {
	console.log(
		`${bmiMarks.fullName}'s BMI (${bmiMarks.calcBMI()}) is higher than ${
			bmiJohn.fullName
		}'s BMI (${bmiJohn.calcBMI()})`
	);
} else if (bmiJohn.calcBMI() > bmiMarks.calcBMI()) {
	console.log(
		`${bmiJohn.fullName}'s BMI (${bmiJohn.Mi()}) is higher than ${
			bmiMarks.fullName
		}'s BMI (${bmiMarks.calcBMI()})`
	);
}
*/
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat)
 to calculate tips and total values (bill + tip) 
 for every bill value in the bills array. 
 Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
          This function calculates the average of all numbers in the given array. 
          This is a DIFFICULT challenge (we haven't done this before)!
          Here is how to solve it:
  4.1. First, you will need to add up all values in the array. 
        To do the addition, start by creating a variable 'sum' that starts at 0. 
        Then loop over the array using a for loop. In each iteration, add the
        current value to the 'sum' variable. This way, by the end of the loop,
        you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by 
         the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
/*
const calcTip = (bill) => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DEVELOPER SKILLS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays 
a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// 1. understanding the problem
//  - Convert array to string, seperated by ...
//  - Day = index+1

// 2. Breaking problems into sub problems;
//  - Convert array to string
//  - Convert array element to string with ºC
//  - Strings needs to contain day (index + 1)
//  - Add ... between elements and start and end of string
//  - Log string to console

// const arr1 = [17, 21, 23];
// const arr2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
// 	let str = " ";
// 	for (let i = 0; i < arr.length; i++) {
// 		str += `...${arr[i]}ºC in ${i + 1} days `;
// 	}
// 	console.log(str);
// };

// printForecast(arr1);
// console.log(printForecast(arr1));
// console.log(printForecast(arr2));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MODERN OPERATORS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
/*
const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = [...game.players[0]];
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...arbs) {
	console.log(`${arbs.length} scores were made`);
};
printGoals(...game.scored);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

team1 < team2 && console.log(`Team1 is more likely to win`);
team1 > team2 && console.log(`Team2 is more likely to win`);
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		[
			"Burki",
			"Schulz",
			"Hummels",
			"Akanji",
			"Hakimi",
			"Weigl",
			"Witsel",
			"Hazard",
			"Brandt",
			"Sancho",
			"Gotze",
		],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};
//  1.
// for (const [i, el] of game.scored.entries()) {
// 	console.log(`Goal ${i + 1} : ${el}`);
// }
//  2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
// 	average += odd;
// }
// average /= odds.length;
// console.log(average);

//  3.
// for (const [team, odd] of Object.entries(game.odds)) {
// 	const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
// 	console.log(`Odd of ${teamStr}: ${odd}`);
// }
// 4.
// const scorers = {};
// for (const player of game.scored) {
// 	// here player is a string type,i.e., scorer['player']
// 	scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// 	// if player is repeated increase goal count else keep it at 1.
// 	// if (scorers[player]) {
// 	// 	scorers[player]++;
// 	// } else {
// 	// 	scorers[player] = 1;
// 	// }
// 	console.log(scorers[player]);
// }
// console.log(scorers);
// ignore
// const obj = {
// 	lol: ["one ", 2, "three"],
// };
// obj["third"] = [1, 2, 3, 4];
// console.log(obj["lots"] ? 1 : 9);

/*

Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
⚽
[FIRST HALF] 17: GOAL
*/
/*
const gameEvents = new Map([
	[17, "⚽ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽ GOAL"],
	[80, "⚽ GOAL"],
	[92, "🔶 Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(
	`An event happened , on average , every ${time / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
	console.log(`[${key < 45 ? "FIRST" : "SECOND"} HALF] ${key} : ${value}`);
}

*/

/*
Coding Challenge #4
////////////////////////////////////////////////////////////////////////
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

*/
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// const text = document.querySelector("textarea").value;
document.querySelector("button").addEventListener("click", function () {
	const text = document.querySelector("textarea").value;
	text.replace("_", "");
	const rows = text.split("\n");
	console.log(rows);

	for (const [i, row] of rows.entries()) {
		const [first, second] = row.toLowerCase().trim().split("_");

		const output = `${first}${second.replace(
			second[0],
			second[0].toUpperCase()
		)}`;
		// const finalstring = output.padEnd(20, ".");
		// console.log(finalstring + `&`.repeat(rows.indexOf(row) + 1));
		console.log(`${output.padEnd(20, ".")}${"✅".repeat(i + 1)}`);
	}
});
