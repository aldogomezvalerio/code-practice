"use strict";
exports.__esModule = true;
//Create a program that reverse a text
var readline = require("readline");
var srt = "";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function reverseStr(text) {
    return text.split("").reverse().join("");
}
rl.question("Please enter some text: ", function (answer) {
    console.log("The reverse of ".concat(answer, " is ") + reverseStr(answer));
    rl.close();
});
