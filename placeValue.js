const readline = require("readline");

const units = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Million"
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (1, 10, 100, 1000, ...): ", (input) => {
    const number = parseInt(input);

    console.log(units[number] || "Invalid input! Enter a valid place value (1, 10, 100, ...).");
    
    rl.close();
});
