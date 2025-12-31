"use strict";
exports.__esModule = true;
exports.wordsCounter = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter a string: ', function (answer) {
    var count = wordsCounter(answer);
    console.log("The number of words is: ".concat(count));
    rl.close();
});
function wordsCounter(str) {
    //const result = str.trim().split(/\s+/).filter(word => word.length > 0);
    //return result.length;
    var result = str.match(/\b\w+\b/g);
    return result ? result.length : 0;
}
exports.wordsCounter = wordsCounter;
