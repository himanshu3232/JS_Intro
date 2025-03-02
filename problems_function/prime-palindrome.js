const prompt = require('prompt-sync')();

// Function to check if a number is a palindrome
function isPalindrome(num) {
    let strNum = num.toString();
    let reversedNum = strNum.split('').reverse().join('');
    return strNum === reversedNum;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Function to check if a number and its palindrome are prime
function checkPrimePalindrome() {
    let num = parseInt(prompt("Enter a number: "));
    
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindrome = getPalindrome(num);
        console.log(`The palindrome of ${num} is ${palindrome}.`);
        
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

checkPrimePalindrome();
