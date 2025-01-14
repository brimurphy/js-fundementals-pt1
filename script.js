/*

// Numbers and Strings

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Brian");
console.log(23);

let firstName = "Emma";
console.log(firstName + ' is ' + js);
console.log(firstName + ' is ' + js);
console.log(firstName + ' is ' + js);

// Can't start with number
// let 3years = 3;
// Can't use keywords, add $ before reserved keyword for example
let $new = 27;
// Variable with value that won't change use capitals
let PI = 3.1415;

// Good
let myFirstJob = "Electrician";
let myCurrentJob = "Technician";
// Bad
let job1 = "electrician";
let job2 = "technician";

console.log(myFirstJob);
*/
/*
// Data Types
// Boolean

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 25);
console.log(typeof "Hello World!");

// Dynamic typing to re define a variable
javaScriptIsFun = "YES!!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

// Undefined variable
let year;
// Value will be undefined
console.log(year);
// And type will be undefined
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Error in JS, this returns object
console.log(typeof null);
*/
/*
// Let, Const and Var

// Use let when a variable can be redefined/mutate
let age = 30;
age = 31;

// Use const when value is not to be changed
const birthYear = 1991;
// This will return an Uncaught TypeError in console.
// birthYear = 1990;

// This will return an Uncaught SyntaxError in console.
// const job;

// Try avoid using var but understand it for legacy reasons
// Works similar to let
var job = "programmer";
console.log(job);
job = "teacher";
console.log(job);

// Declaring a variable without a keyword
// This will work technically
// But will not create the variable in the scope
// And will be created on the global object
lastName = "Murphy"
console.log(lastName);
*/
/*
// Basic Operators
// Arithmetic operators
const now = 2037;
const ageBrian = now - 1983;
const ageAoibhinn = now - 2019;
console.log(ageBrian, ageAoibhinn);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageBrian * 2, ageBrian / 10, 2 ** 3);

const firstName = "Brian";
const lastName = "Murphy";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageBrian > ageAoibhinn); // >, <, >=, <=
console.log(ageAoibhinn >= 18);
// Store results in variables
const isLegalAge = ageAoibhinn >= 18;
*/
/*
// Operator Precedence
const now = 2037;
const ageBrian = now - 1983;
const ageAoibhinn = now - 2019;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
// x = 25 - 10 - 5 = y; // returns SyntaxError
console.log(x, y);
// Adding parenthesis increases Precedence
const averageAge = (ageBrian + ageAoibhinn) / 2;
console.log(ageBrian, ageAoibhinn, averageAge);
*/
/*
// Strings and Template literals

const firstName = "Brian";
const job = "technician";
const birthYear = 1983;
const year = 2037;

const brian = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(brian);
// Template literals
const brianNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(brianNew);
// Can be used to write normal strings without variable values
console.log(`Just a boring string`);
// Old way of making a multiline string
console.log("String with \n\
multiple \n\
lines");
// Using back ticks
console.log(`Back ticks
can create
multiple lines
now`);
*/
/*
// If/Else Statements

const age = 16;

if (age >= 18) {
    // windows button and . for emojis
    console.log(`You can drive 👍`);
} else {
    console.log(`You can learn to drive ${18 - age} in years!😒`);
}

const birthYear = 1983;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
// Type Conversion and Coercion
const inputYear = "1991";
console.log(inputYear + 18); // returns 199118
console.log(Number(inputYear) + 18); // returns 2009, doesn't change original variable

console.log(Number("Brian")); // returns NaN
console.log(typeof NaN); // returns number, but it means it's an invalid number

console.log(String(23), 23); // First will be a string, 2nd a number

// Type Coercion
console.log("I am " + 38 + " years old")
console.log("I am 38 years old") // These will both work
console.log("23" - "10" - 3);
// Using - will turn strings to numbers, Using + will turn numbers to strings(When using both in a statement)
console.log("23" * "2"); // Both turned to numbers as would divide
console.log("23" > "13"); // Again will turn the strings to numbers

let n = "1" + 1;
n = n - 1;
console.log(n);
*/
/*
// Truthy and Falsy Values
// 5 Falsy values are: 0, "", undefined, Null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Brian"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log(`You need a better job!!`)
}

let height;
if (height) {
    console.log(`YAY! Height is defined`);
} else {
    console.log(`Height is UNDEFINED!`);
}
*/
/*
// Equality Operators: == vs ===

const age = "18";
if (age === 18) console.log("You are an adult!! 🤷‍♀️"); // Strict

if (age == 18) console.log("You are an adult!! 🙌");  // Loose

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) { // "23" == 23 = true
    console.log("23!! What a number");
}
// "23" == 23 = false (change to type number for true)
if (favourite === 23) { // Try to always use ===
    console.log("23!! What a number");
} else if (favourite === 7) {
    console.log("7 is a lucky number!!");
} else {
    console.log("Number is not 23 or 7!! WHY!!😢");
}

// !== Strict != Loose
if (favourite !== 23) console.log("Why not 23!?")
*/
/*
// Boolean Logic

const age = 16;
const a = age >= 20;
const b = age < 30;

if (!a) {
    console.log(`${age} is not greater or equal to 20!`);
}
if (a && b) {
    console.log(`${age} is greater than or equal to 20 and less than 30`);
}
if (a || b) {
    console.log(`${age} is greater than or equal to 20 or less than 30`);
}
if (!a && b) {
    console.log(`${age} is not greater than or equal to 20 but is less than 30`);
}
if (a || !b) {
    console.log(`${age} is greater than or equal to 20 and more than 30`);
}
*/
/*
// Logical Operators

const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);
console.log(hasDriversLicence && hasGoodVision && isTired);

const shouldDrive = hasDriversLicence && hasGoodVision && !isTired;

if (shouldDrive) {
    console.log("Sarah can drive!");
} else {
    console.log("Someone else should drive..");
}
*/
/*
// The Switch Statement

const day = "monday";

switch (day) { // day === "monday"
    case "monday":
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case "tuesday":
        console.log(`Prepare theory videos`);
        break;
    case "wednesday":
    case "thursday":
        console.log(`Write code examples`);
        break;
    case "friday":
        console.log(`Record videos`);
        break;
    case "saturday":
    case "sunday":
        console.log(`Enjoy the weekend!!😎`);
        break;
    default:
        console.log(`Not a valid day!`);
}

// Above example as an if/else statement

if (day === "monday") {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === "tuesday") {
    console.log(`Prepare theory videos`);
} else if (day === "wednesday" || day === "thursday") {
    console.log(`Write code examples`);
} else if (day === "friday") {
    console.log(`Record videos`);
} else if (day === "saturday" || day === "sunday") {
    console.log(`Enjoy the weekend!!😎`);
} else {
    console.log(`Not a valid day!`);
}
*/
/*
// The Conditional(Ternary) Operator
// Sort of a short hand expression for if/else
//  statement, but not exactly, used for quick
//  expressions
const age = 23;
age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(drink);
// Above is the same as below
let drink2;
if (age >= 18) {
    drink2 = `wine 🍷`;
} else {
    drink2 = `water 💧`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `water 💧`}`);
*/