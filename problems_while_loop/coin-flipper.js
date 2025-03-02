const prompt = require('prompt-sync')();
function flipCoinGame() {
    let headsCount = 0, tailsCount = 0;
    
    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails";
        console.log(`Flip: ${flip}`);
        
        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
        
        console.log(`Score - Heads: ${headsCount}, Tails: ${tailsCount}`);
    }
    
    console.log(`${headsCount === 11 ? "Heads" : "Tails"} wins the game!`);
}

flipCoinGame();
