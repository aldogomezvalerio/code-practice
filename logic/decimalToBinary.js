"use strict";
exports.__esModule = true;
exports.binaryToDecimal = void 0;
function binaryToDecimal(digit) {
    //let result: number = 0;
    var binaryString = "";
    var counter = 0;
    while (digit > 0) {
        counter = digit / 2;
        binaryString = binaryString + (digit % 2).toString();
        digit = Math.floor(counter);
    }
    return binaryString;
}
exports.binaryToDecimal = binaryToDecimal;
console.log(binaryToDecimal(13));
/*
13 ÷ 2 = 6 remainder 1
 6 ÷ 2 = 3 remainder 0
 3 ÷ 2 = 1 remainder 1
 1 ÷ 2 = 0 remainder 1
*/ 
