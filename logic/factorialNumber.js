"use strict";
exports.__esModule = true;
//In this code you will have the factorial of a number
var readline = require("readline");
var num = 0;
var factorial = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter an integer: ", function (n) {
    //num = parseInt(n);
    if (isNaN(Number(n))) {
        console.log("".concat(n, " is not a number."));
    }
    else {
        num = Number(n);
        factorial = getFactorial(num);
        console.log("The factorial of ".concat(num, " is ").concat(factorial, "."));
    }
    rl.close();
});
function getFactorial(n) {
    var result = 1;
    for (var i = 0; i <= n; i++) {
        result = result * i;
    }
    return result;
}
