function gamblerGame() {
    let money = 100;
    const goal = 200;
    let bets = 0, wins = 0;

    while (money > 0 && money < goal) {
        bets++;
        if (Math.random() < 0.5) {
            money++; 
            wins++;
        } else {
            money--; 
        }
        console.log(`Bet: ${bets}, Money: Rs ${money}`);
    }

    console.log(`Game Over! Total Bets: ${bets}, Total Wins: ${wins}`);
    console.log(money === goal ? "Gambler reached the goal of Rs 200!" : "Gambler went broke!");
}

// Start the game
gamblerGame();
