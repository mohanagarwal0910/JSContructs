const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Choose a conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

rl.question("Enter your choice (1-4): ", (choice) => {
    rl.question("Enter the value to convert: ", (value) => {
        value = parseFloat(value);
        let result;

        switch (parseInt(choice)) {
            case 1:
                result = value * 12;
                console.log(`${value} Feet = ${result} Inches`);
                break;
            case 2:
                result = value * 0.3048;
                console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
                break;
            case 3:
                result = value / 12;
                console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
                break;
            case 4:
                result = value / 0.3048;
                console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
                break;
            default:
                console.log("Invalid choice! Please enter a number between 1 and 4.");
        }

        rl.close();
    });
});
