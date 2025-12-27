"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getGreatest = void 0;
var numList = [10, 5, 8, 20, 3];
var temList = __spreadArray([], numList, true);
var max = 0;
function getGreatest(myArray) {
    var firstMax = 0;
    var secondMax = 0;
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length; j++) {
            firstMax = firstMax > myArray[j] ? firstMax : myArray[j];
        }
    }
    myArray.splice(myArray.indexOf(firstMax), 1);
    for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray.length; j++) {
            secondMax = secondMax > myArray[j] ? secondMax : myArray[j];
        }
    }
    return secondMax;
}
exports.getGreatest = getGreatest;
max = getGreatest(numList);
console.log("The second greatest number in the list ".concat(temList, " is: ").concat(max));
