"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Select the operator: \n+ for addition\n- for subtraction\n* for multiplication\n/ for division\n", function (operator) {
    rl.question("Enter first number: ", function (firstNum) {
        rl.question("Enter second number: ", function (secondNum) {
            var result = 0;
            var num1 = parseFloat(firstNum);
            var num2 = parseFloat(secondNum);
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
            console.log("".concat(num1, " ").concat(operator, " ").concat(num2, " = ").concat(result));
            rl.close();
        });
    });
});
