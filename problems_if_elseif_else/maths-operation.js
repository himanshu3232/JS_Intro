const prompt = require('prompt-sync')();

let a = parseFloat(prompt('Enter first number (a): '));
let b = parseFloat(prompt('Enter second number (b): '));
let c = parseFloat(prompt('Enter third number (c): '));

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

// Storing results in an array
let results = [op1, op2, op3, op4];

// Finding maximum and minimum
let maxResult = Math.max(...results);
let minResult = Math.min(...results);

console.log(`\nMaximum value: ${maxResult}`);
console.log(`Minimum value: ${minResult}`);
