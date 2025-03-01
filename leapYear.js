// Get the year from command line arguments
const args = process.argv.slice(2);

// Check if a year is provided
if (args.length === 0) {
    console.log("Please provide a year.");
    process.exit(1);
}

// Convert input to number
let year = Number(args[0]);

// Validate if it's a 4-digit number
if (isNaN(year) || year < 1000 || year > 9999) {
    console.log("Invalid input. Please enter a 4-digit year.");
    process.exit(1);
}

// Check for leap year conditions
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Output result
if (isLeapYear) {
    console.log(year + " is a Leap Year.");
} else {
    console.log(year + " is NOT a Leap Year.");
}
