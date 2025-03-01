const readline = require("readline");

const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a single digit number: ", (input) => {
    const number = parseInt(input);
    
    if (number >= 0 && number <= 9) {
        console.log(words[number])
    } else {
        console.log("Invalid input, please enter a single digit number.");
    }
    
rl.close()
})
