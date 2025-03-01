const readline = require("readline");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1-7): ", (input) => {
    const number = parseInt(input);

    if (number >= 1 && number <= 7) {
        console.log("Day:", days[number - 1]);
    } else {
        console.log("Invalid input! Please enter a number between 1 and 7.");
    }

    rl.close();
});
