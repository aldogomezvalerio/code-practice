"use strict";
exports.__esModule = true;
//This code add the digits in one number.
var readline = require("readline");
var num = 0;
var sum = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter a number: ", function (answer) {
    num = Number(answer);
    for (var digit in answer) {
        sum += Number(answer[digit]);
    }
    console.log("The sum of the digits of ".concat(num, " is ").concat(sum, "."));
    rl.close();
});
