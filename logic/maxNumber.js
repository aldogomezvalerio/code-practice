"use strict";
exports.__esModule = true;
var readline = require("readline");
var num1 = 0;
var num2 = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter one number: ", function (firstInput) {
    rl.question("Please enter the second number: ", function (secondInput) {
        num1 = Number(firstInput);
        num2 = Number(secondInput);
        if (num1 > num2) {
            console.log("".concat(num1, " is greater than ").concat(num2));
        }
        else if (num2 > num1) {
            console.log("".concat(num2, " is greater than ").concat(num1, "."));
        }
        else {
            console.log("The numbers are equal.");
        }
        rl.close();
    });
});
