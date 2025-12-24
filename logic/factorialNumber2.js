"use strict";
exports.__esModule = true;
//Code to get the factorial of a number using recursion in TypeScript
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function getFactorial(n) {
    if (Number(n) <= 1) {
        return 1;
    }
    else {
        return n * getFactorial(n - 1);
    }
}
rl.question("enter a number: ", function (num) {
    var result = getFactorial(Number(num));
    console.log("The factorial of ".concat(num, " is ").concat(result));
    rl.close();
});
