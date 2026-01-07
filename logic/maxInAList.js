"use strict";
exports.__esModule = true;
exports.maxInAList = void 0;
//This code is create to find what element is more repited in a list
function maxInAList(arr) {
    if (arr.length === 0) {
        return null; // Return null for empty array
    }
    var frequencyMap = {};
    var maxCount = 0;
    var maxElement = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            maxElement = num;
        }
    }
    return maxElement;
}
exports.maxInAList = maxInAList;
// Example usage:
var numbers = [1, 3, 2, 3, 4, 3, 5, 1];
console.log("The most repited number is: " + maxInAList(numbers));
