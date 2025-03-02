const prompt = require('prompt-sync')();

const input = parseInt(prompt('Enter a number: '));

const isPrime = (num) => {
    for(let i=2; i<Math.sqrt(num); i++) {
        if(input % i === 0) {
            return false;
        }
    }
    return true;
}

for(let i=1; i<= input; i++){
    if(isPrime(i)){
        console.log(i);
    }
}