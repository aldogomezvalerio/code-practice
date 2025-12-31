"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
rl.question("Please enter the first string: ", function (firstAnswer) {
    rl.question("Please enter the second string: ", function (secondAnswer) {
        var result = isAnagram(firstAnswer, secondAnswer);
        if (result) {
            console.log("\"".concat(firstAnswer, "\" and \"").concat(secondAnswer, "\" are anagrams."));
        }
        else {
            console.log("\"".concat(firstAnswer, "\" and \"").concat(secondAnswer, "\" are not anagrams."));
        }
        rl.close();
    });
});
