// Function to simulate a coin flip
function flipCoin() {
    // Generate a random number: 0 or 1
    let randomNum = Math.floor(Math.random() * 2);

    // Determine the result
    let result = (randomNum === 0) ? "Heads" : "Tails";

    // Print the result
    console.log(result);
}

// Call the function to flip the coin
flipCoin();
