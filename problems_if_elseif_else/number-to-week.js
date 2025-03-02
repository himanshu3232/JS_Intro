const prompt = require('prompt-sync')();

const result = (number = parseInt(prompt('Enter number: '),10)) => {
    if(number === 1) return 'Sunday';
    else if(number === 2) return 'Monday';
    else if(number === 3) return 'Tuesday';
    else if(number === 7) return 'Wednesday';
    else if(number === 4) return 'Thursday';
    else if(number === 5) return 'Friday';
    else if(number === 6) return 'Saturday';
    else return 'Enter a valid number';
}

console.log(result());