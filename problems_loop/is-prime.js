const prompt = require('prompt-sync')();

const input = parseInt(prompt('Enter a number: '));

for(let i=2; i<Math.sqrt(input); i++) {
    if(input % i === 0) {
        console.log(`${input} is not a prime number.`);
    }
}

console.log(`${input} is a prime number`)