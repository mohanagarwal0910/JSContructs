const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question("Enter the lower limit of the range: ", (lower) => {
    rl.question("Enter the upper limit of the range: ", (upper) => {
        const start = parseInt(lower);
        const end = parseInt(upper);

        if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
            console.log("Please enter valid numbers with start ≥ 2 and start ≤ end.");
        } else {
            console.log(`Prime numbers between ${start} and ${end}:`);
            for (let num = start; num <= end; num++) {
                if (isPrime(num)) {
                    console.log(num);
                }
            }
        }

        rl.close();
    });
});
