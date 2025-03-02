const prompt = require('prompt-sync')()

let num = prompt('Enter a number: ');

const result = (num) => {
    if(num.length === 1) return 'Unit';
    else if(num.length === 2) return 'Ten';
    else if(num.length === 3) return 'Hundred';
    else if(num.length === 4) return 'Thousand';
    else return 'Enter a valid number'; 
}

console.log(result(num));