"use strict";
/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
	flightNum,
	numPassengers = 1,
	price = 199 * numPassengers
) {
	// ES5 - Using short circuiting
	// numPassengers = numPassengers || 1;
	// price = price || 199;

	const booking = {
		flightNum,
		numPassengers,
		price,
	};
	console.log(booking);
	bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/
/*
const flight = "LH234";
const manish = {
	name: "Manish Gupta",
	passport: 234234134,
};

const checkIn = function (flightNum, passenger) {
	flightNum = "LH999";
	passenger.name = "Mr. " + passenger.name;
	console.log(flight);

	if (passenger.passport === 234234134) {
		alert("Checked In");
	} else {
		alert("Wrong passport");
	}
};
checkIn(flight, manish); // gives checkedIn
console.log(flight);
console.log(manish);

// Same as doing....
// const flightNum = flight;
// const passenger = manish;

const newPassport = function (person) {
	person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(manish);
checkIn(flight, manish); // gives wrong

// JS is passe by value, it passes the reference as a value to the function.
*/

// First Class VS Higher Order functions
// Concept of higher level and first class functions facilitates 'Abstraction'.
// by using functions(fun's at the lower level of abstraction) inside other function(at higher level of abstraction)
// to do the work w/o caring about how it's doing the job.

/*
const oneWord = function (str) {
	return str.replace(/ /g, " ").toLowerCase();
};
const upperFirstWord = function (str) {
	const [first, ...others] = str.split(" ");
	return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order function: A function that recieves other function as an
//                        argument ore returns a function.
// example:  asEventListener()
const transformer = function (str, fn) {
	console.log(`Original string: ${str}`);

	// here function 'fn' is being called to the work.
	console.log(`Transformed String: ${fn(str)} `);
	console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
	console.log("hi");
};

document.body.addEventListener("click", high5);
["Manish", "Harsh", "Harshvardhan"].forEach(high5);
*/

/*
const greet = function (greeting) {
	return function (name) {
		console.log(`${greeting} ${name}`);
	};
};

// Here 'greeterHey' is a function that 'greet' returns.
const greeterHey = greet("Hey");
greeterHey("Manish");
greeterHey("Harsh");
greet("Hello")("Manish");

// Using Arrow functions:

// const greetArrow = (greeting) => {
// 	return (name) => {
// 		console.log(`${greeting} ${name}`);
// 	};
// };
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow("Hello")("Manish");
*/

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, "Manish Gupta");
console.log(lufthansa);

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
};

const book = lufthansa.book;

// Doesn't work, we must explicitly tell JS that to which object will 'this' insode book object is pointing tot.
// book(23, "Manish Gupta");

// Call Method:
// call() function explicitly set 'this' for an object.
book.call(eurowings, 23, "Harshvardhan Sharma");
console.log(eurowings);
book.call(lufthansa, 23, "Harshvardhan Mishra");
console.log(lufthansa);

const swiss = {
	airline: "Swiss Airline",
	iataCode: "LX",
	bookings: [],
};

book.call(swiss, 43, "Harsha");

// Apply Method- Takes an array of argumnets
const flightData = [583, "Manika"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
