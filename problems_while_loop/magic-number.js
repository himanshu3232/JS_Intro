const prompt = require('prompt-sync')();

function findMagicNumber() {
    let low = 1, high = 100;
    let mid;
    console.log("Think of a number between 1 and 100.");
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let response = prompt(`Is your number ${mid}? (yes/higher/lower)`).toLowerCase();
        
        if (response === "yes") {
            console.log(`The magic number is ${mid}!`);
            return;
        } else if (response === "higher") {
            low = mid + 1;
        } else if (response === "lower") {
            high = mid - 1;
        } else {
            console.log("Please enter a valid response: yes, higher, or lower.");
        }
    }
}

findMagicNumber();
