"use strict";
exports.__esModule = true;
//This code logic is to find what number is greater between three numbers
var readline = require("readline");
var firstNumber = 0;
var secondNumber = 0;
var thirdNumber = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter the first number: ", function (firstAnsware) {
    firstNumber = Number(firstAnsware);
    rl.question("Please read the second number: ", function (secondAnswere) {
        secondNumber = Number(secondAnswere);
        rl.question("Please enter the third number: ", function (thirdAnswere) {
            thirdNumber = Number(thirdAnswere);
            if (firstNumber > secondNumber && firstNumber > thirdNumber) {
                if (firstNumber > secondNumber && firstNumber > thirdNumber) {
                    console.log("".concat(firstNumber, " is greater than ").concat(secondNumber, " and ").concat(thirdNumber));
                }
                console.log("".concat(firstNumber, " is greater than ").concat(secondNumber, " and ").concat(thirdNumber));
            }
            else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
                console.log("".concat(secondNumber, " is greater than ").concat(firstNumber, " and ").concat(thirdNumber));
            }
            else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
                console.log("".concat(thirdNumber, " is greater than ").concat(firstNumber, " and ").concat(secondNumber));
            }
            else {
                console.log("".concat(firstNumber, ", ").concat(secondNumber, " and ").concat(thirdNumber, " are equal."));
            }
            rl.close();
        });
    });
});
