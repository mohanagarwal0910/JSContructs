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

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

// Function to check prime and its palindrome
function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
        let palindrome = getPalindrome(num);

        console.log(`Its palindrome is ${palindrome}.`);
        
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is NOT a prime number.`);
        }
    } else {
        console.log(`${num} is NOT a prime number.`);
    }
}

// Taking user input
rl.question("Enter a number: ", (input) => {
    const num = parseInt(input);
    if (!isNaN(num)) {
        checkPrimeAndPalindrome(num);
    } else {
        console.log("Invalid input! Please enter a valid number.");
    }
    rl.close();
});
