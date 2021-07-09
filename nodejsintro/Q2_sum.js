const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getNumber() {
    readline.question("Enter a number, or the word stop to get the sum: ", input => {
        if (isNaN(input) || input.toLowerCase() === "stop") {
            console.log(`Your total sum is: ${sum}`);
            readline.close();
        } else {
            sum += parseInt(input);
            getNumber();
        }
    });
}

let sum = 0;
getNumber();