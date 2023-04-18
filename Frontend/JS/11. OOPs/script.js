"use strict";
/*
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
	// Instance properties
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never do this - bad for performance (rather use prototype)
	// this.calcAge = function () {
	// 	console.log(2032 - this.birthYear);
	// };
};

const manish = new Person("Manish", 2002);
console.log(manish);

// 1. New {} is created
// 2. function is called, this ={}
// 3. {} linked to prototype
// 4. function automatically return {}

const mausam = new Person("Mausam", 2001);
const ash = new Person("Ashish", 2001);
console.log(mausam, ash);

console.log(manish instanceof Person);

//////////////////////////////////////////////////////////////////////
// Static Method
// Are inside constructor function,
// not in the prototype and hence cannot be accesed by it's object
Person.hey = function () {
	console.log("Hey there son of a cutiepie");
};

// to use a static method
Person.hey();
// how not use a static method
// mausam.hey(); // coz static methods are not accesible to objects

//////////////////////////////////////////////////////////////////////
// Prototypes
console.log(Person.prototype);
// All the objects have access to methods of its prototype
Person.prototype.calcAge = function () {
	console.log(2032 - this.birthYear);
};

manish.calcAge();
mausam.calcAge();

console.log(manish.__proto__);
console.log(manish.__proto__ === Person.prototype); // true

// "Person.prototype" is a prototype of 'manish','mausam' but not 'Person'
console.log(Person.prototype.isPrototypeOf(manish)); // true
console.log(Person.prototype.isPrototypeOf(mausam)); // true
console.log(Person.prototype.isPrototypeOf(ash)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// Giving a new property to all the objects.
Person.prototype.species = "Homo Sapiens";
console.log(manish.species, mausam.species);
// are not their own prperty, but the inherited ones
console.log(manish.hasOwnProperty("firstName")); // true
console.log(manish.hasOwnProperty("species")); // false

// Object.prototype (top of prototype chain)
console.log(manish.__proto__.__proto__);
console.log(manish.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

// Prototypal inheritance:
const arr = [1, 4, 5, 5, 5, 3, 2, 2]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true

Array.prototype.unique = function () {
	return [...new Set(this)];
};

console.log(arr.unique());

// ES6 Classes
// Class expression:
// const PersonCl = class{}

// class declaration
class PersonCl {
	constructor(fullName, birthyear) {
		this.fullName = fullName;
		this.birthYear = birthyear;
	}

	// Instance method
	// Method will be added to the .prototype property
	calcAge() {
		console.log(2023 - this.birthYear);
	}

	// Getter
	get age() {
		return 2023 - this.birthYear;
	}

	// Set a property that already exists
	set fullName(name) {
		console.log(name);
		// a new variable is created to avoid conflict
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name!`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey() {
		console.log("Hey there son of a cutiepie");
		console.log(this);
	}
}

const yash = new PersonCl("Yash Aawasthi", 2002);
console.log(yash);
console.log(yash.__proto__ === PersonCl.prototype); // true
yash.calcAge();
console.log(yash.age);

// calling a static method
PersonCl.hey();

// const walter = new PersonCl("Walter", 1965);

// 1. Classes are not hoisted (cannot be used before they are declared)
// 2. Classes are first-class citizen (pass them into function and can be returned by a function)
// 3. Classes are executed in strict mode.

// Setter and Getter properties
// Not called but used as a property
// Setters: function that set the values
// Getters: function that get the values

// const account = {
// 	name: "Manish",
// 	movement: [200, 400, 132, 300],

// 	get latest() {
// 		return this.movement.slice(-1).pop();
// 	},
// 	set latest(mov) {
// 		this.movement.push(mov);
// 	},
// };
// account.latest = 50;
// console.log(account.movement);
// console.log(account.latest);

///////////////////////////////////////////////////////////////////
// Using "Object.create"
// Manually setting '__proto__' property of an object to an object.
// Prototypal inheritance is achieved by using "Object.create(objectEx)"
// Now objectEx's properties and methods will be accesible to the object created using "Object.create(objectEx)"
// This method doesn't require a constructor function to create an object.

// Object literal:
const PersonProto = {
	calcAge() {
		console.log(2023 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();

console.log(PersonProto === steven.__proto__); // true

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1999);
sarah.calcAge();
*/
/*
/////////////////////////////////////////////////////////////////////
// INHERITANCE

// 1. Using Constructor function:
const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2032 - this.birthYear);
};

// in a regular function call this is set to undefined so we use call() method
const Student = function (firstName, birthYear, course) {
	Person.call(this, firstName, birthYear);
	this.course = course;
};

// Linking Prototypes:
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2001, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// 2. Using classes(ES6)
class PersonCl {
	constructor(fullName, birthyear) {
		this.fullName = fullName;
		this.birthYear = birthyear;
	}

	// Instance method
	// Method will be added to the .prototype property
	calcAge() {
		console.log(2023 - this.birthYear);
	}

	// Getter
	get age() {
		return 2023 - this.birthYear;
	}

	// Set a property that already exists
	set fullName(name) {
		// console.log(name);
		// a new variable is created to avoid conflict
		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name!`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static method
	static hey() {
		console.log("Hey there son of a cutiepie");
		console.log(this);
	}

	// overriding a method: calcAge method has been overwritten.
	calcAge() {
		console.log(
			`I'm ${
				2023 - this.birthYear
			} years old, but as a student I feel more like ${
				2023 - this.birthYear + 10
			}`
		);
	}
}

class StudentCl extends PersonCl {
	constructor(fullName, birthYear, course) {
		// Always needs to happen first
		super(fullName, birthYear);
		this.course = course;
	}

	introduce() {
		console.log(`My name is ${this.fullName} and I study ${this.course}`);
	}
}

const manish = new StudentCl("Manish Gupta", 2002, "IT");
manish.introduce();
manish.calcAge();

/////////////////////////////////////////////////////////////
// Inheritance Between 'Classes': Object.create()

const PersonProto = {
	calcAge() {
		console.log(2023 - this.birthYear);
	},

	init(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
	PersonProto.init.call(this, firstName, birthYear);
	this.course = course;
};

StudentProto.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mason = Object.create(StudentProto);
mason.init("Mason Jason", 2001, "IT");
console.log(mason);
mason.introduce();
mason.calcAge();
*/
/////////////////////////////////////////////////////////////////
// Encapsulation:
// class Account {
// 	constructor(owner, currency, pin) {
// 		this.owner = owner;
// 		this.currency = currency;
// 		// protected property (just a convention to know that these properties shall not be accesed outside the object)
// 		this._pin = pin;
// 		this._movements = [];
// 		this.locale = navigator.language;

// 		console.log(`Thanks for opening an account ${owner}`);
// 	}

// 	// Public interface
// 	getMovement() {
// 		return this._movements;
// 	}

// 	deposit(val) {
// 		this._movements.push(val);
// 	}

// 	withdraw(val) {
// 		this.deposit(-val);
// 	}

// 	_approveLoan(val) {
// 		return true;
// 	}

// 	requestLoan(val) {
// 		if (this._approveLoan()) {
// 			this.deposit(val);
// 			console.log(`Loan approved`);
// 		}
// 	}
// }

// const acc1 = new Account("Manish", "Rup", 1729);

// acc1.deposit(1000);
// acc1.withdraw(190);

// acc1.requestLoan(10000);
// console.log(acc1.getMovement());
// console.log(acc1);

/////////////////////////////////////////////////////////////////
// Implementing truly private class fields and methods:
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

class Account {
	// 1. Public fields(instances)
	locale = navigator.language;

	// 2. Private fields
	#movements = [];
	#pin; // initially undefined

	constructor(owner, currency, pin) {
		this.owner = owner;
		this.currency = currency;
		// protected property (just a convention to know that these properties shall not be accesed outside the object)
		this.#pin = pin;
		// this._movements = [];
		// this.locale = navigator.language;

		console.log(`Thanks for opening an account ${owner}`);
	}

	// 3. Public methods

	// Public interface
	getMovement() {
		return this.#movements;
	}

	deposit(val) {
		this.#movements.push(val);
		return this; // for chaining methods
	}

	withdraw(val) {
		this.deposit(-val);
		return this; // for chaining methods
	}

	requestLoan(val) {
		if (this.#approveLoan()) {
			this.deposit(val);
			console.log(`Loan approved`);
		}
		return this; // for chaining methods
	}

	static getHelper() {
		Account.#helper();
	}
	// 4. Private methods
	#approveLoan(val) {
		return true;
	}

	static #helper() {
		console.log("Helper");
	}
}

const acc1 = new Account("Manish", "Rup", 1729);

acc1.deposit(1000);
acc1.withdraw(190);
console.log(acc1.getMovement());

Account.getHelper();

acc1.requestLoan(10000);
console.log(acc1);

/////////////////////////////////////////////////////////////
// Chaining Methods
acc1.deposit(300).deposit(400).withdraw(200).requestLoan(14000).withdraw(10000);
console.log(acc1.getMovement());
