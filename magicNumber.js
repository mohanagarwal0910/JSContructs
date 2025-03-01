const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 to 100.");
console.log("I will guess it by asking you questions!");

// Function to find the magic number using binary search
function findMagicNumber(low, high) {
    if (low > high) {
        console.log("Something went wrong! Please restart the game.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/higher/lower): `, (response) => {
        response = response.toLowerCase();

        if (response === "yes") {
            console.log(`Great! Your magic number is ${mid}.`);
            rl.close();
        } else if (response === "higher") {
            findMagicNumber(mid + 1, high);
        } else if (response === "lower") {
            findMagicNumber(low, mid - 1);
        } else {
            console.log("Invalid response! Please enter 'yes', 'higher', or 'lower'.");
            findMagicNumber(low, high);
        }
    });
}

// Start the guessing process
findMagicNumber(1, 100);

    