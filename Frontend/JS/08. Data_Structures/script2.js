"use strict";
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Looping over an array using for-of loop:
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
	// entries() gives an array [index,value]
	console.log(`${i + 1} : ${el}`);
}
// console.log([...menu.entries()]);

if (restaurant.openingHours && restaurant.openingHours.monday)
	console.log(restaurant.openingHours.monday.open);

// WITH OPTIONAL CHAINING(?.): will give undefined
// rather than throwing an error if a proprty doesn't exist.
console.log(restaurant.openingHours?.monday?.open);

// example:
const days = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
];
for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? "no time";
	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist.");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist.");

// Arrays:
const users = [
	{
		name: "Manish",
		email: "hell@here.com",
	},
];
console.log(users[0]?.name ?? "User array empty");
// ^ same thing using optional chaining and nullish operator
if (users[0]) {
	console.group(users[0].name);
} else {
	console.log("User array empty");
}

// LOOPING over OBJECTS:

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

// Looping over OBJECTS(in an indirect way as objects are not iterable)
for (const day of properties) {
	openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES:
const values = Object.values(openingHours);
console.log(values);

// Entire object:
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [key, { open, close }] of entries) {
	console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

/*
//////////////////////////////////////////////////////////////////////////
// SETS
// Are iterable.
// can't retrieve data from a set.
// we can only check if a value is present or not.
const orderSet = new Set([
	"Pasta",
	"Pizza",
	"Pizza",
	"Risotto",
	"Pasta",
	"Pizza",
]);
console.log(orderSet);

console.log(new Set("Manish"));

// Operations in a set.
console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
orderSet.add("Garlic Bread");
orderSet.delete("Pizza");
// orderSet.clear();// to empty the set
console.log(orderSet);

for (const order of orderSet) {
	console.log(order);
}

// Example
const staff = ["waiter", "chef", "waiter", "Manager", "chef", "waiter"];
// creating an array from a set
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(staff).size);
// or
console.log(
	new Set(["waiter", "chef", "waiter", "Manager", "chef", "waiter"]).size
);

console.log(new Set("Maaanishkumar").size);

////////////////////////////////////////////////////////////////////////
// MAP

const rest = new Map();
rest.set("name", "classico Italiano");
rest.set(1, "Firenze Italy");
console.log(rest.set(2, "Lisbon, Portugal"));
rest
	.set("categories", ["Italian", "Pizzeria", "Vegan", "Organic"])
	.set("open", 11)
	.set("close", 21)
	.set(true, "We are open :D")
	.set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.get("categories"));
rest.delete(2);
console.log(rest);
console.log(rest.size);

//rest.set([1, 2], "Test");
//console.log(rest.get([1, 2])); // here is gives undefined coz [1,2] here is a diferent array than the [1,2] in set,

const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // now bith the arrays are same in heap

// we can also select attribute too using maps.
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

// Creating a map
const question = new Map([
	["question", "What is the best language in the world?"],
	[1, "c"],
	[2, "Java"],
	[3, "JavaScript"],
	["correct", 3],
	[true, "Correct"],
	[false, "Try again"],
]);
console.log(question);

// converting object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
	if (typeof key === "number") console.log(`Answer ${key}:${value}`);
}
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(question.get(answer === question.get("correct")));

// convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/
//////////////////////////////////////////////////////////////////////////
// Strings

const airlines = "TAP Air Portugal";
const plane = "A320";
/*
//////////////// String Part -1 ////////////////
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airlines.length);
console.log("B737".length);

console.log(airlines.indexOf("r"));
// console.log(...airlines);
console.log(airlines.lastIndexOf("r"));
console.log(airlines.lastIndexOf("portugal"));

console.log(airlines.slice(4)); // starts from 4th index
console.log(airlines.slice(4, 7)); // ends before 7th index
// and hence keeping the length of slice to (7-4 = 3)

console.log(airlines.slice(0, airlines.indexOf(" ")));
console.log(airlines.slice(airlines.indexOf(" ") + 1));

console.log(airlines.slice(-4, -2)); // start at -4 and ends at -3
console.log(airlines.slice(-2, -4)); // gives nothing
console.log(airlines.slice(1, -1)); // start at 1 and ends at -2

// BOXING: When we call a method on a string, JS behind the scene converts the string
// (which is a primitive) to an object  before performing operation on the string
// and again to a string once the operation is completed.
console.log(new String("Manish"));
console.log(new String("Manish").slice(1));

const checkMiddleSeat = function (seat) {
	// B and E are the middle seats in airplane
	seat.slice(-1) === "B" || seat.slice(-1) === "E"
		? console.log("middle seat")
		: console.log("not a middle seat");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
*/

//////////////// String Part -2 /////////////////
/*
console.log(airlines.toLowerCase());
console.log(airlines.toUpperCase());

// Fix capitalisation in name:
const passenger = "mAnish"; // Manish

const correctName = function (passenger) {
	const passengerLower = passenger.toLowerCase();
	const passengerCorrect =
		passengerLower[0].toUpperCase() + passengerLower.slice(1);
	// console.log(passengerCorrect);
	return passengerCorrect;
};
console.log(correctName(passenger));

// Comparing Emails:
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.io \n";
const normalizedEmailVerification = function (email, loginEmail) {
	const normalizedEmail = loginEmail.toLowerCase().trim();
	console.log(loginEmail.toLowerCase().trim() === email);
};
// console.log(loginEmail.trimStart()); // - for removing spaces from start only
// console.log(loginEmail.trimEnd()); // - for removing spaces from end only
normalizedEmailVerification(email, loginEmail);

// Replace
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
	"All passengers come to boarding door 23, Boarding door 23!";
// console.log(announcement.replace("door", "gate")); // replaces only the first occurence
console.log(announcement.replaceAll("door", "gate"));

// Using regular expression, g -> global
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Booeing"));

console.log(plane2.startsWith("A320"));
console.log(plane2.startsWith("Airb"));

if (plane2.startsWith("Airbus") && plane2.endsWith("neo")) {
	console.log("Part of NEW Airbus family");
}

// Practice exercise
const checkBaggage = function (items) {
	const baggage = items.toLowerCase(); // always convert everything to lowercase
	if (baggage.includes("knife") || baggage.includes("gun")) {
		console.log("You are NOT allowed on board");
	} else {
		console.log("Welcome aboard");
	}
};

checkBaggage("I have a laptop, some food and a packet of Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
*/

//////////////// String Part - 3 ////////////////////

// split() method and join() method
console.log("a+very+nice+String".split(""));
console.log("Manish Kumar".split(" "));

const [firstName, lastName] = "Manish Gupta".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

// to capitalize the first word of Name
const capitalizeName = function (name) {
	const names = name.split(" ");
	const namesUpper = [];

	for (const n of names) {
		// namesUpper.push(n[0].toUpperCase() + n.slice(1));
		// OR
		namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
	}
	console.log(namesUpper.join(" "));
};
capitalizeName("Jesseca ann smith davis");
capitalizeName("manish Kumar gupta");

// Padding: Adding a number of character to the string until string
// has desired length.
const message = "Go to the gate 23";
console.log(message.padStart(25, "+").padEnd(35, "+"));
console.log(message.padStart(25, "+"));

const maskCreditCard = function (number) {
	const str = number + "";
	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};

console.log(maskCreditCard(432372837427374));
console.log(maskCreditCard("3249282378526985746"));

// Repeat
const message2 = "Bad weather...All departures delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
	console.log(`There are ${n} planes in the line ${"✈️".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
