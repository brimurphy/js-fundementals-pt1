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