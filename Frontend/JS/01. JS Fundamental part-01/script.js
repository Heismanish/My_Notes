/*
let js = "amazing";
console.log(40+32+43-23);

console.log('Jonas');
console.log('43');

let firstName = "Manish";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// naming convention
let manish_gupta="mg";
let name = "Jonas"; // here name is a reserved keyword still legal to use for naming a variable 
                    // but, make sure not to use it to name a variable

let PI = 3.1415; // variable name in all capital are reserved for constants
let SI = "king";


let myFirstJob = "Programmer";// use descriptive variable name
let mySecondJob = "Teacher";

let job1 = "Programmer"; // doesn't make much sense
let job2= "Teacher";

console.log(myFirstJob);


true;
javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
console.log(typeof 'Manish');
console.log(typeof 43);

javaScriptIsFun = 'Manish';  // here comes dynamic nature of js in play.
console.log(typeof javaScriptIsFun);

let anime;
console.log(typeof anime ) ;

// here is an error that has not been resolved coz of legacy reason 
console.log(typeof null ) ; // it gives an object but should be null.
*/

/*
// Ways of Defining variables: 
// 1. 
let age = 30;
age = 21; // here mutation is possible

// 2.
const birthYear = 2002;
//birthYear = 2003; // here mutation is illegal
//const job; also a variable can't go un initialised.

// 3. Actually not used these days but important for legacy reasons.
var job = 'programmer'; 
job = 'teacher';  

console.log(job);


// this is legal but a really bad practice
// lastName = 'Gupta';
// console.log(lastName); 


// MATH OPERATORS: 
const now = 2030;
const ageManish = now-2002;
const ageDikshika = now-2003;
console.log(ageManish, ageDikshika);

console.log(ageManish*0.5, 2*ageDikshika, 2**5);
// 2**5 = 2 to the power of 5.

//Strings can be concatenated using "+" operator
const firstName = 'Manish';
const lastname = 'Gupta';
console.log(firstName+" "+lastname); 

// 'tyopeof' is also an operator 
let anime = 'Demon Slayer';
console.log(typeof anime );

// Assignment Operators:
let x = 10+5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x+1
x--; // x = x-1
console.log(x);

// COMPARISON OPERATORS: 
console.log(ageManish >= ageDikshika);// >, <, >=, <=
console.log(ageManish <= 18);

const isAgeSame = ageManish >= ageDikshika;
console.log(isAgeSame);
console.log(now - 1991 > now -2018);
*/

// Operator Precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
/*
const now = 2030;
const ageManish = now-2002;
const ageDikshika = now-2003;

console.log(now - 1991 > now -2018);

let x,y;
x = y =  25 - 10 - 5; // x = y = 10, x = 10

const avgAge = (ageManish+ageDikshika)/2;
console.log(ageManish,ageDikshika, avgAge);
*/  

// STRINGS
/*
const firstName = 'Manish';
const job = 'Student';
const birthYear = 2002;
const year = 2022;

const manish = "I'm "+firstName+', a ' + (year - birthYear) + ' years old ' + job+'!'; 
// here we can see strings getting concatenated with numbers which is due to type coersion in js.
console.log(manish);

// Template Literals (An ES6 feature)
const manishNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(manishNew);

// Writing multiple lines in String: It actually works due to a bug that the language has.
console.log('String with \n\
multiple \n\
lines');

// OR - Using backticks `_`

console.log(`String with
multiple 
lines`);
*/

// CONDITIONAL STATEMENTS:
// const age = 17;
// if (age >= 18){
//     console.log(`Manish can start driving license`);
// }  else{
//     console.log(`Manish is too young. Wait another 
//     ${18-age} years.`);
// }

// const birthYear = 2033;
// let century;
// if (birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century)

// Type Conversion and Type Coercion:
/*
// Type Conversion: When we manually convert from one type to other.
const inputYear = '1991';
console.log(Number(inputYear), inputYear);// Number is a functon to convert string to number.
console.log(Number(inputYear)+18); 

console.log(Number('Manish')); // Gives NaN as it is not a valid number
console.log(typeof NaN); // 'NaN' is an invalid number

console.log(String(23), 23); //String function is used to convert to String.

// Type Coercion: when type conversion is done automatically w/o us knowing.
console.log("I'm a "+ 20 +' years old.'); // in JS '+' sign triggers type coercion, and anything added with a string will be converted to string.
console.log("I'm a "+ false +' believer');
console.log( '10'+ 20 +'3');

console.log('10'- 20 -'3'); // '-' sign triggers just the opposite, that is, converts to number.

// here strings are converted to numbers.
console.log('23'*'2');
console.log('40'/'3');

// let's practice
let n = '1'+1; // '11'
n = n-1; // 11 - 1 = 10
console.log(n);
*/

/*
// Falsy value: A value that will be converted to false by type conversion/coercion.
// 5 falsy values : 0, '', undefined, null, NaN 
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
// here money = 0, and 0 is a falsy value so it will be converted to false here.
if(money){ 
    console.log("Don't spend it all ;) ");
} else{
    console.log('You should get a job!'); // this will be executed
}


let height;
// here height is undefined, which is a falsy value.
if(height){
    console.log('Yay!! Height is defined')
}else{
    console.log('Height is not defined');// hence this block is executed
} 


// Here even though Height2 holds a valid value, false block will be executed which is a bug here.
let height2 = 0;
// here height is 0, which is a falsy value.
if(height2){
    console.log('Yay!! Height is defined')
}else{
    console.log('Height is not defined');// hence this block is executed
} 
*/

// Equality Operators:  == VS ===
/*
const age = 18;
// "===" is a 'strict equality operator' 
// It doesn't perform type coercion while comparing.
if (age === 18) console.log('You just became an adult :D (strict)');

// Always try to use "===" for comparison always.

// "==" is 'loose equality operator'
// It does perform type coercion while comparing.
if (age == '18') console.log('You just became an adult :D (loose)');

const favNum = Number(prompt("What's your favourite number?:"));
console.log(favNum); 
console.log(typeof(favNum)); // here the input is stored in from of a string

if(favNum === 23){
    console.log('Cool! 23 is an amazing number!');
} else if(favNum === 7){
    console.log('7 is also a cool number!');
} else {
    console.log('Number is not 23 or 7');
}

if (favNum !== 23) console.log('why not 23?');
*/

// BASIC BOOLEAN LOGIC: AND, OR & NOT
/*
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence && hasGoodVision);
console.log(!hasDriversLicence);


// if (hasDriversLicence && hasGoodVision){
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicence || hasGoodVision || isTired);

if (hasDriversLicence && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

// Switch Statements
/*
const day = 'wednesday';

switch(day){
    case 'monday': // day === 'monday'
        console.log('Plan my Course');
        console.log('Go to college');
        break;
    case 'tuesday':
        console.log('Prepare for test');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Complete practical files');
        break;
    case 'friday':
        console.log('Get files checked');
        break;
    case 'saturday':
    case 'Sunday':
        console.log('Have fun');
        break;
    default:
        console.log('Not a valid day');
}

if(day === 'monday'){
    console.log('Plan my course');
    console.log('Go to college');
} else if ( day === 'tuesday'){
    console.log('Prepare for test');
} else if ( day === 'wednesday' || day === 'thursday'){
    console.log('Complete practical files');
} else if ( day === 'friday'){
    console.log('Get files checked');
} else if ( day === 'saturday' || day === 'sunday'){
    console.log('Have fun');
} else {
    console.log('Not a valid day');
}
*/

// Statements and Expressions:
// Expression : a piece of code that produces a value.
/*
3+4;
1991;
true && false && !false;
const me = 'Manish'; // here it is an eperession.
console.log(`I am ${2038-1923} years old ${me}.`);
// we can't use statements in an literal template.

// Statement : a piece of code that is executed but doesn't produce a value.
if( 23 > 10){
    const str = '23 is bigger'; // this whole line is a statement
                // ^this string here is an experssion. 
}
*/


// Ternary operator:
// "?"- refers to the if block
// ":" - refers to else block
// <condition> ?< if block > : < else block >
/*
 const age = 23;
// age >= 18 ? console.log('I would like to drink wine.'):console.log('I would like to drink water')

const drink = age>=18 ? 'wine' : 'water' ; // tihs is an expression.
console.log(drink);

let drink2;
if(age >= 18){
    drink2 = 'wine';
} else{
    drink2= 'water';
}

console.log(drink2);
console.log(`I like to drink ${drink}`);
*/
