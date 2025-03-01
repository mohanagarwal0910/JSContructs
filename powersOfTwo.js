const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a non-negative integer (n): ", (input) => {
    const n = parseInt(input);

    if (isNaN(n) || n < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        console.log(`Powers of 2 up to 2^${n} (or 256 max):`);
        
        let power = 1; // 2^0 = 1
        let i = 0;

        while (i <= n && power <= 256) {
            console.log(`2^${i} = ${power}`);
            power *= 2;
            i++;
        }
    }

    rl.close();
});
