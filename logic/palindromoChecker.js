"use strict";
exports.__esModule = true;
//this code is to find if a word is a palindromo
var readline = require("readline");
var word = "";
var reverseWord = "";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter a word: ", function (answer) {
    reverseWord = answer.split("").reverse().join("");
    if (reverseWord === answer) {
        console.log("".concat(answer, " is a palindromo."));
    }
    else {
        console.log("".concat(answer, " is not a palindromo."));
    }
    rl.close();
});
