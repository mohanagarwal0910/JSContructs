const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

rl.question("Enter a non-negative integer: ", (input) => {
    const num = parseInt(input);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        console.log(`${num}! = ${factorial(num)}`);
    }

    rl.close();
});
