const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a positive integer (n): ", (input) => {
    const n = parseInt(input);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive integer.");
    } else {
        let harmonicNumber = 0;

        for (let i = 1; i <= n; i++) {
            harmonicNumber += 1 / i;
        }

        console.log(`The ${n}th harmonic number is: ${harmonicNumber.toFixed(6)}`);
    }

    rl.close();
});
