const prompt = require('prompt-sync')();

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year.`;
    } else {
        return `${year} is not a Leap Year.`;
    }
}

let year = prompt("Enter a 4-digit year:");
alert(isLeapYear(parseInt(year, 10)));
