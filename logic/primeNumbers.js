"use strict";
exports.__esModule = true;
//This code is to find out if a number is a prime
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number: ", function (answer) {
    var num = Number(answer);
    var isPrime = true;
    if (isNaN(num)) {
        console.log("Your answer is not a number.");
        rl.close();
    }
    else {
        for (var i = 0; i < num; i++) {
            if ((i != 1 && i != num && num % i == 0) || num == 1) {
                isPrime = false;
            }
        }
        if (isPrime) {
            console.log("".concat(num, " is a prime number."));
        }
        else {
            console.log("".concat(num, " is not a prime number."));
        }
        rl.close();
    }
});
