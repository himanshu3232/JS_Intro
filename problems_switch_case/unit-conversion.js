const prompt = require('prompt-sync')();

console.log("Choose a conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

let choice = parseInt(prompt("Enter your choice (1-4): "));
let value = parseFloat(prompt("Enter the value to convert: "));

const convertLength = (choice, value) => {
    switch (choice) {
        case 1:
            return `${value} Feet = ${value * 12} Inches`;
        case 2:
            return `${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`;
        case 3:
            return `${value} Inches = ${(value / 12).toFixed(4)} Feet`;
        case 4:
            return `${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`;
        default:
            return "Invalid choice! Please enter a number between 1 and 4.";
    }
};

console.log(convertLength(choice, value));
