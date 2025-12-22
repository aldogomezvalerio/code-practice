"use strict";
exports.__esModule = true;
//This program find the dividers of a number
var readline = require("readline");
var num = 0;
var outputMsg = "";
var promt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
promt.question("Please enter a number: ", function (n) {
    num = parseInt(n);
    for (var i = num; i > 0; i--) {
        if (num % i == 0) {
            outputMsg += i + " ";
        }
    }
    console.log("".concat(outputMsg, " are the dividers of ").concat(num));
    promt.close();
});
