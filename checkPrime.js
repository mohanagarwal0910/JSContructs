const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const num = parseInt(input);

    if (isNaN(num) || num < 2) {
        console.log("Please enter a valid number greater than or equal to 2.");
    } else {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${num} is a prime number.`);
        } else {
            console.log(`${num} is not a prime number.`);
        }
    }

    rl.close();
});
