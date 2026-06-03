"use strict";
// 1. Variables & Data Types
// Create a variable name and store your name
const name = 'ikram';
console.log(name);
// Create variables age and city and print them
const age = 23;
const city = 'Sahiwal';
console.log(`The age is ${age} and city is ${city}`);
// Store a boolean value and print its type
const istrue = false;
console.log(istrue);
// Create an undefined variable and print it
let unDefined;
console.log(unDefined);
// Store a number and convert it into a string
const number = 23;
console.log(typeof String(number));

// Swap two variables without using a third variable
let a = 3;
let b = 4;
[a, b] = [b, a];
console.log(a, b);
// Find the datatype of:
// "100"
// 100
// true
// null
console.log(typeof ("100"));
console.log(typeof (100));
console.log(typeof (true));
console.log(typeof (null));

// Convert "250" into a number and add 50
let num = "250";
num = Number(250);
console.log(num + 50);
// Check whether a variable is undefined
// let myName;
// if (nyName == undefined) {
//     console.log("Variable is undefined");
// }

// Explain why typeof null returns "object"
// beacuse it is 30 years old bug
// early javascript code was converted to binary
// so every variable is flag with 000 so null also converted it into 0000
// computer incorrectly flag Null as object
if (null === undefined) {
    console.log("yes");
}
else {
    console.log("not yes");
}

const weight = 69;
let height = 1.75;
const BMI = weight / (height * height);
console.log(BMI);

// Check if number is even or odd using %
const num_1 = 2;
const num_2 = 2;
if (num_1 % num_2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

console.log((10 + 5) * 2)
console.log(10 + 5 * 2)

console.log(`I am ikram \n\
I live in sahiwal\n\
i am a software engineer
    `);

console.log("5" + 2);
console.log("5" - 2);
console.log("5" * 2);
console.log("5" / 2);

console.log("10" + 5 - 3);

console.log(true + 1);
console.log(false + 5);

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(null)); 