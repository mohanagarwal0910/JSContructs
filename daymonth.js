// Get command-line arguments
const args = process.argv.slice(2); // Ignore first two default arguments

// Check if both day and month are provided
if (args.length < 2) {
    console.log("Please provide both day and month.");
    process.exit(1);
}

// Convert input to numbers
let day = Number(args[0]);
let month = Number(args[1]);

// Validate input
if (isNaN(day) || isNaN(month) || day <= 0 || month <= 0 || month > 12) {
    console.log("Invalid input. Please enter a valid day and month.");
    process.exit(1);
}

// Check if the date falls between March 20 and June 20
let isInRange = (
    (month === 3 && day >= 20) ||  // March 20 to March 31
    (month === 4) ||               // April (entire month)
    (month === 5) ||               // May (entire month)
    (month === 6 && day <= 20)     // June 1 to June 20
);

console.log(isInRange);
