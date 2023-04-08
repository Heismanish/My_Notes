// Value and variable:
/*
const country = 'India';
const continent = 'Asia';
let population = 1350;
console.log(country);
console.log(continent);
console.log(population);

// Data Types: 
const isIsland = false;
let language;
console.log(typeof(isIsland));
console.log(typeof(population));
console.log(typeof(country));
console.log(typeof(language));

// let, const, var: 
language = 'Hindi';
// isIsland=true;


// Basic Operators:
console.log(population/2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + 
        ' is in ' + continent + ", and it's " 
        + population +' million people speak '
        +language +'.';
console.log(description)

// Strings and Template Literals
description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

// Taking Decisions: if / else Statements
if(population>33){
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average.`);
}

// Type Conversion and Coercion
console.log('9'-'5'); 
console.log('19'-'13'+'17'); 
console.log('9'-'13'+17); 
console.log('123'-'57'); 
console.log(9+6+'4'+9-4-2); 


//Equality Operators: == vs. ===
//const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// propmpt takes input as a string
// if(numNeighbours === 1 ){
//     console.log('Only 1 border');
// }else if( numNeighbours > 1){
//     console.log('More than 1 border');
// } else {
//     console.log('No Border');
// }

// Logical Operators
if (language === 'English' && population < 50 && isIsland === false ){
    console.log(`You should live in ${country} :)`);
}else{
    console.log(`${country} does not meet your criteria :(`)
}

// The switch Statement
switch(language){
    case 'Chinese' :
    case 'Mandarin' :
                console.log('MOST number of native speakers!');
                break;
    case 'Spanish' : 
                console.log('2nd place in number of native speakers!');
                break;
    case 'English' : 
                console.log('3rd place');
                break;
    case 'Hindi' : 
                console.log('Number 4');
                break;
    case 'Arabic' : 
                console.log('5th most spoken language!');
                break;
    default: 
                console.log('Great language too :D')
}

// The Conditional (Ternary) Operator
// population > 33 ?console.log(`${country}'s population is above average.`) : console.log(`${country}'s population is above average.`);
console.log(`${country}'s population is ${population > 33 ?'above' : 'below'} average`)
*/

// Functions
// 1.
/*
function describeCountry(country, population, capitalCity) {
	console.log(
		`${country} has ${population} million people and it's capital city is ${capitalCity}`
	);
}

const india = describeCountry("India", 8, "Delhi");
const japan = describeCountry("Japan", 1, "Tokyo");
const australia = describeCountry("Australia", 9, "Sydney");
*/

// Function declaration vs Expression
/*
const percentageOfWorld1 = function (population) {
	return (population * 100) / 7900;
};

const india = percentageOfWorld1(1500);
const japan = percentageOfWorld1(120);
const australia = percentageOfWorld1(100);

console.log(india, japan, australia);

const percentageOfWorld2 = (population) => {
	return (population * 100) / 7900;
};

const india2 = percentageOfWorld2(1500);
const japan2 = percentageOfWorld2(120);
const australia2 = percentageOfWorld2(100);

console.log(india, japan, australia);
*/

// Function calling other functions:
/*
const percentageOfWorld2 = (population) => {
	return (population * 100) / 7900;
};
const describePopulation = (country, population) => {
	return `${country} has ${population} million people, which is about ${percentageOfWorld2(
		population
	)}% of the world. `;
};

const india2 = describePopulation("India", 1500);
const japan2 = describePopulation("Japan", 120);
const australia2 = describePopulation("Australia", 100);

console.log(india2, japan2, australia2);

// Introduction to Arrays:

const populations = [120, 250, 320, 410];

const percentages = [
	percentageOfWorld2(populations[0]),
	percentageOfWorld2(populations[1]),
	percentageOfWorld2(populations[2]),
	percentageOfWorld2(populations[3]),
];
console.log(populations.length === 4, percentages);

// Basic Array Operations (Methods):

const neighbours = ["Pakistan", "Nepal", "China"];
neighbours.push("Utopia"); // insertion at the end.
neighbours.pop(); // removal from end.
console.log(neighbours);

if (!neighbours.includes("Germany")) {
	console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Pakistan")] = "Russia";
console.log(neighbours);
*/

// Introduction to Objects:
/*
const myCountry = {
	country: "India",
	capital: "Delhi",
	language: "Hindi",
	population: "1500",
	neighbours: ["Pakistan", "Nepal", "China"],
	describe: function () {
		console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
        and a capital called ${this.capital}.`);
	},
	checkIsland: function () {
		console.log(!Boolean(this.neighbours.length));
	},
};
// console.log(myCountry);

// // Dot vs. Bracket Notation:
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
//     and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry);
// myCountry["population"] -= 2;
// console.log(myCountry);

// Object Methods:
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

// Iteration: The for Loop:
for (let i = 0; i <= 50; i++) {
	console.log(`Voter number ${i} is currently voting.`);
}

// Looping Arrays, Breaking and Continuing
const populations = [120, 250, 320, 410];
const percentageOfWorld2 = (population) => {
	return (population * 100) / 7900;
};
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
	percentages2.push(percentageOfWorld2(populations[i]));
}
console.log(percentages2);
*/
// Looping Backwards and Loops in Loops:
const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];
for (let i = 0; i < listOfNeighbours.length; i++)
	for (let y = 0; y < listOfNeighbours[i].length; y++)
		console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
	const perc = percentageOfWorld1(populations[i]);
	percentages3.push(perc);
	i++;
}
console.log(percentages3);
