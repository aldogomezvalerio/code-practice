"use strict";
exports.__esModule = true;
//Second practice of findding vowels in a string using TypeScript
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function countVowels(str) {
    var _a;
    var vowels = /a|e|i|o|u/gi;
    var result = ((_a = str.match(vowels)) === null || _a === void 0 ? void 0 : _a.join("")) || "";
    var count = result.length;
    return count;
}
rl.question("Enter a string: ", function (answaer) {
    var response = countVowels(answaer);
    console.log("The number of vowels in \"".concat(answaer, "\" is ").concat(response));
    rl.close();
});
