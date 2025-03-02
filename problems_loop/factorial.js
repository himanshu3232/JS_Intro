const prompt = require('prompt-sync')();

function factorialIterative(n) {
    if (n < 0) return "Invalid input";
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = parseInt(prompt("Enter a number: "));
console.log(`Factorial (Iterative) of ${number} is:`, factorialIterative(number));
