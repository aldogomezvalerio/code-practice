"use strict";
exports.__esModule = true;
var readline = require("readline");
var num = 0;
var outputMsg = "";
var promt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
promt.question("Please enter a number: ", function (answer) {
    num = parseInt(answer, 10);
    outputMsg =
        num % 2 === 0 ? "".concat(num, " is an even number") : "".concat(num, " is an odd number.");
    console.log(outputMsg);
    promt.close();
});
