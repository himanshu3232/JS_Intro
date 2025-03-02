const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the value of n: "));

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let harmonicNumber = 0;

    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }

    console.log(`The ${n}th harmonic number is: ${harmonicNumber.toFixed(6)}`);
}
