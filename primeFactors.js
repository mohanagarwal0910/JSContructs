const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to compute prime factors
function primeFactors(n) {
    console.log(`Prime factors of ${n}:`);

    // Print the number of times 2 divides n
    while (n % 2 === 0) {
        console.log(2);
        n /= 2;
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            console.log(i);
            n /= i;
        }
    }

    // If n is still greater than 2, it is a prime number
    if (n > 2) {
        console.log(n);
    }
}

rl.question("Enter a positive integer (N): ", (input) => {
    const num = parseInt(input);

    if (isNaN(num) || num <= 1) {
        console.log("Please enter a valid positive integer greater than 1.");
    } else {
        primeFactors(num);
    }

    rl.close();
});
