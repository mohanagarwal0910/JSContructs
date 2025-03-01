// Function to simulate a coin flip game until one side wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;

    console.log("Flipping the coin until either Heads or Tails wins 11 times...");

    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.floor(Math.random() * 2); // 0 for Tails, 1 for Heads

        if (flip === 1) {
            headsCount++;
            console.log(`Heads! (Heads: ${headsCount}, Tails: ${tailsCount})`);
        } else {
            tailsCount++;
            console.log(`Tails! (Heads: ${headsCount}, Tails: ${tailsCount})`);
        }
    }

    if (headsCount === 11) {
        console.log("🎉 Heads wins 11 times!");
    } else {
        console.log("🎉 Tails wins 11 times!");
    }
}

// Start the coin flip game
flipCoinGame();
