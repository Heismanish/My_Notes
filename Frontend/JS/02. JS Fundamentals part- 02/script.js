"use strict"; //1. shows visible errors in certain situations
//2. Restricts us from doing few things.

// let hasDriversLicense = false;
// const passTest = true;
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can derive :D');

//const interface = 'Audio';
//const private = 534;

//////////////////////////////////////////////////////////////////////

// Functions: Function is a value in JS and not a data type.
/*
function logger(){
    console.log('My name is Manish');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){ 
    const juice = `Juice with ${apples} apples and ${oranges} oranges,`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(3, 5));

const appleOrangeJuice = fruitProcessor(2, 4);
*/

// Function Declarations VS Expressions

// Function Declarations:
/*
function calcAge1(birthYear){
    return 2037-birthYear;
}
const age1 = calcAge1(2002); 
// a function declaration can be called before it is defined.
// while function expressions can't.

// Function Expression:
const calcAge2 =  function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(2002);

console.log(age1, age2);
*/

// Function Expression:
/*
const calcAge2 =  function (birthYear){
    return 2037 - birthYear;
}


///////////////////////////////////////////////////////////////////////////

// Arrow function: Just like a function expression but easier.

const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(2002));

const yearsUntilTheRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement  = 65 - age;
    // return statement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilTheRetirement(2002, 'Manish'));
console.log(yearsUntilTheRetirement(2003, 'Harsh'))
 */

//////////////////////////////////////////////////////////////////////////////

// Function calling other functions:
/*
function cutFruitPieces(fruit){
    return fruit *4;
} 

function fruitProcessor(apples, oranges){ 
    const applePieces = cutFruitPieces(apples);  
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples 
    and ${orangePieces} pieces of oranges,`;
    return juice;
}

console.log(fruitProcessor(2,3));

*/

//////////////////////////////////////////////////////////////////////////
/*
const calcAge = function (birthYear){
    return 2037 - birthYear;
}

const yearsUntilTheRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement  = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilTheRetirement(2002, 'Manish'));
console.log(yearsUntilTheRetirement(2003,'Harsh'));
*/

///////////////////////////////////////////////////////////////////////////

// ARRAYS:
/*
const friends = ['Manish', 'Harsh', 'Ashish'];
console.log(friends);

const y = new Array(2002,2003,2004); 
console.log(y);

console.log(friends[0]);

console.log(y.length); // gives number of elements in the array.
console.log(y[y.length-1]);

// Only primitive values  are immutable and Array is not a primitive data type.
// So we can make changes in an array.
friends[1] = 'Harshvardhan'; // to change an array
console.log(friends)

const fiirstName = 'Manish';
const jeans = [fiirstName, 'Harsh',y,['Long','Short'], 17-2]
console.log(jeans)

// EXERCISE:
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1991, 1992, 1993, 1999, 2002];

// JS will execute the function then place them in the array.
const age = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(age);
*/

// ADDING ELEMENTS
/*
// push()
// Add element to end of array.
// gives a value that is the length ff the array.
const people = ['Manish','Harsh','Pritam'];
const newLength = people.push('Hardeep');
console.log(newLength);
people.push('Ashish');
console.log(people);

// unshift()
// Add element at the beginning of the array.
 people.unshift('Anupriya');
 console.log(people);

// REMOVING ELEMENTS

// pop()
// removes element from last
// returns the last removed element.
people.pop();
const popped = people.pop(); // returns the last removed element.
console.log(popped)
console.log(people);

// shift()
// removes element from beginning
people.shift();
console.log(people);


// indexOf() function 
// gives index of the element in array.
// -1 if not found
console.log(people.indexOf('Harsh'));

// includes() function 
// check if an element is in the array.
// gives a true/ false value
console.log(people.includes('Manish'));

// checks with strict equality '===', hence no type coercion takes place.
people.push(23)
console.log(people.includes('23')); // false

if(people.includes('Manish')){
    console.log('You know a person named Manish');
}
*/

// OBJECTS:
// a data type with key-value pair.
/*
const Manish = {
    firstName: 'Manish',
    lastName: 'Gupta',
    age: 20,
    job: 'student',
    friends:['Manish', 'Harsh','Harshit']
};
console.log(Manish);

// fetching values from an object.
// 1. using dot notation:
console.log(Manish.age);

// 2. Using brackets:
// Key goes in a string format.
console.log(Manish['lastName'])

const nameKey = 'Name';
console.log(Manish['first'+nameKey]) // resolves nameKey to Name then adds the string giving firstName which resolves to-> Manish

// const interestedIn = prompt('What do you want ot know about Manish? Choose between firstName, lastName, age, job, and friends');
//console.log(Manish.interestedIn) // doesn't work coz interestedIn isn't a property Manish
// console.log(Manish[interestedIn]) // interestedIn is resolved to the input and a input is always a string.

if (Manish[interestedIn]){
    console.log(Manish[interestedIn]);
} else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends ')
}


// Inserting new values in an object.
Manish.location = 'Delhi';
Manish['twitter'] = '@_heismanish';
console.log(Manish)

// Challenge:
// 'Manish has 3 friends, and his friend is called Harsh'
console.log(`${Manish.firstName} has ${Manish.friends.length} friends, and his best friend is called ${Manish.friends[1]}`)
*/
/*
const Manish = {
    firstName: 'Manish',
    lastName: 'Gupta',
    birthYear: 2002,
    job: 'student',
    friends:['Manish', 'Harsh','Harshit'],
    hasDriversLicence:true,
    // Arrow functions cannot be used as constructors and will throw an error when called with new . 
    // They also do not have a prototype property.
    // calcAge: (birthYear) => {
    //     return 2037-birthYear;
    // },

    // calcAge: function () {
    //     console.log(this); // 'this'  refers to the 'Manish' object.
    //     return 2037 - this.birthYear;
    // },

    calcAge: function() {
        this.age = 2022 - this.birthYear; // 'this.age' creates a new value in Manish object.
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is${this.calcAge()}-years old student, and he has ${this.hasDriversLicence?'a':'no'} driver's licence`
    }
};

console.log(Manish.calcAge());
// console.log(Manish['calcAge'](1990));// Manish['calcAge'] will be replaced with the function and 1990 will be passed in it.

// Challenge
// "Manish is 20-years old student, and he has a/no driver's licence."
console.log(Manish.getSummary())
*/

// FOR loop:
// runs till the condition is TRUE.
/*
for(let rep = 1; rep<11; rep++){
    console.log(`Lifting weights repetition ${rep} `);
}

const Man = [
    'Manish',
    'Gupta',
    2022-2002,
    'student',
    ['Harsh','Harshit','Vadodara'],
    true
];

const types = [];

for(let i = 0; i<Man.length; i++){
    console.log(Man[i]);

    // fillinng types array:
    // types[i] = typeof Man[i];
    types.push(typeof Man[i])
}
console.log(types);

const years = [1991, 2002, 2007, 2020 ];
const ages = [];
for(let i = 0; i<years.length; i++){
    ages.push(2020-years[i]);
}
console.log(ages);

// continue and break
// continue: used to skip an iteration.
console.log('---- ONLY STRINGS----');
for(let i = 0; i<Man.length; i++){
    if(typeof Man[i] !== 'string') continue;

    console.log(Man[i], typeof Man[i]);
};

// break: exit an iteration.
console.log('---- BERAK WITH NUMBERS ----');

for(let i = 0; i<Man.length; i++){
    if(typeof Man[i] !== 'number') break;

    console.log(Man[i], typeof Man[i]);
}
*/

// Looping backwards and loops in loop:
/*
const Man = [
    'Manish',
    'Gupta',
    2022-2002,
    'student',
    ['Harsh','Harshit','Vadodara'],
    true
];

for(let i = Man.length-1; i>=0; i--){
    console.log(i, Man[i],)
};

for(let exercise = 0; exercise<4; exercise++ ){
    console.log(`-------Starting exercise ${exercise+1} `);

    for(let rep=1; rep<6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
};
*/

// WHILE loop:

let rep = 1;
while (rep <= 10) {
	console.log(`Lifting weight repetition ${rep}`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log("Loop is about to end");
	}
}
