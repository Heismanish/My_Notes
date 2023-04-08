"use strict";

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = [
	"monday",
	"tuesday",
	"wednesday",
	"thursday",
	"friday",
	"saturday",
	"sunday",
];

const openingHours = {
	// 3rd enhancement: can compute property names
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	// 1st enhancement: ES6 enhanced object literal
	openingHours,

	// 2nd enhancement: the way we write methods.
	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery({
		// here argument will be destructured when function is called.
		mainIndex = 0,
		starterIndex = 0,
		time = "20:00",
		address,
	}) {
		console.log(
			`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3}`);
	},
	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient, otherIngredients);
	},
};
/*
// using destructuring of object in a function call.
// comes in handy when number of arguments is more.
restaurant.orderDelivery({
	time: "22:30",
	address: "Via del sole, 21",
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	time: "22:30",
	starterIndex: 2,
	address: "Via del sole, 21",
});

// DESTRUCTURING OBJECTS:
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values.
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// wrapped in parenthesis because when we start a line with curly
//  brackets js expects a code block and we can't use '='.
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
	fri: { open, close },
} = openingHours;
console.log(open, close);
*/

/*
DESTRUCTURING ARRAYS:
// Retrieving elelments of an array
const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Array Destructuring(unpacking)
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr); // original array is not affected.

let [main, , secondary] = restaurant.categories; // assigns 1st and 3rd elements of categories.
console.log(main, secondary);

// to swap main and secondary variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// swapping using array destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0); // 'restaurant.order(2, 0)' gives an array on which we perform destructuring
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i,j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

/*
// Spread Operator(...) (in RIGHT side of =)
// It unpacks the array -> gives multiple values seperated by a comma.
// USE: 1. when needed to get data from an array element by element.
//      2. when we need to create a shallow copy of an array.
const arr = [2, 5, 7, 8, 9];
const newArray = [...arr, 10];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, "Palak Paneer"];
console.log(...newMenu);
console.log(newMenu);

// copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, strings, maps, sets. NOT objects
const str = "Manish";
let strArr = [...str, " ", "M."];
console.log(strArr);

// we can't use (...) here coz '${}' doesn't expect values seperated with commas
// console.log(`${...str} Gupta`);

// NOTE: ... used only when creating an array or passng in a function.

// Real-world example:
// const ingredients = [
// 	prompt(`Let's make pasta! Ingredient 1? `),
// 	prompt(`Let's make pasta! Ingredient 2? `),
// 	prompt(`Let's make pasta! Ingredient 3? `),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects:
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: "Manish" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Silver fang";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// REST OPERATOR(...): (in LEFT side of =)
// Combines elements in an array.
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);

// must be used at the end of array destructuring
const [pizza, , risotto, ...otherFood] = [
	...restaurant.mainMenu,
	...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// 1) Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
	// combining all the inputs in an array
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	console.log(sum);
};

add(2, 3, 4);
add(2, 7, 9, 1);
add(3, 5, 123, 4);

// passing argunents using REST
const x = [2, 4, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

/*
// Logical operators can use and return ANY data type.
// SHORT CIRCUITING:
// here if 1st value is falsy then only the second one will be executed
// otherwise it will not even be checked
console.log(`------------OR-------------`);
console.log(0 || "Jonas"); // '0' is falsy hence 'Jonas' is executed
console.log(9 || "Jonas"); // 9 is truth value hence 'Jonas' is not executed.

console.log(0 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null); // both falsy hence last one is executed

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log(`------------AND-------------`);
// evaluates when first value of falsy.
console.log(0 && "Manish");
console.log(0 && "Jonas");
console.log("" && "Jonas");
console.log(true && 0);
console.log(undefined && null);

console.log("Hello" && 23 && null && undefined);

// Practical Example
if (restaurant.orderPizza) {
	restaurant.orderPizza("mushrooms", "spinach");
}
// when 'restaurant.orderPizza' will be truthy ' restaurant.orderPizza("mushrooms", "spinach")'
// will be executed
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

/*
// here 0 is a value but since it is falsy it is not being evaluated.
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// to overcome this problem we have a new opertor
// NULLISH COALESCING Operator (??) :
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// Logical assignments opperators
const rest1 = {
	name: "rn1",
	// numGuests: 20,
	numGuests: 0,
};

const rest2 = {
	name: "rn2 ",
	owner: "Manish",
};

// OR assignment oprerator:
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// noot work for 'numGuests = 0'
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Coalescing operator(null or indefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// if we have a owner then make it anonymous.
// AND assignment oprerator:
// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest1.owner && "<Anonymous>";

rest1.owner &&= "Anonymous";
rest2.owner &&= "<Anonymous>";

console.log(rest1);
console.log(rest2);
*/
