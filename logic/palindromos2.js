"use strict";
exports.__esModule = true;
//This code finds if a word is reading the same backwords or not.
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a word: ', function (word) {
    var reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
        console.log("".concat(word, " is a palindrome."));
    }
    else {
        console.log("".concat(word, " is not a palindrome."));
    }
    rl.close();
});
