"use strict";
exports.__esModule = true;
//logic that counts how many vocals ar into a string
var readline = require("readline");
var str = "";
var count = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter a string: ", function (answer) {
    var srtLength = answer.length;
    str = String(answer);
    for (var i = 0; i < srtLength; i++) {
        if (str.charAt(i) === "a" ||
            str.charAt(i) === "e" ||
            str.charAt(i) === "i" ||
            str.charAt(i) === "o" ||
            str.charAt(i) === "u") {
            count++;
        }
    }
    console.log("The ".concat(str, " has ").concat(count, " vocals."));
    rl.close();
});
