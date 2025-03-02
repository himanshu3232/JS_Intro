const prompt = require('prompt-sync')();

let num = prompt('Enter a number: ');

const result = (num) => {
    switch (num.length) {
        case 1:
            return 'Unit';
        case 2:
            return 'Ten';
        case 3:
            return 'Hundred';
        case 4:
            return 'Thousand';
        default:
            return 'Enter a valid number';
    }
};

console.log(result(num));
