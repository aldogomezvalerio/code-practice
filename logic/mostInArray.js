"use strict";
exports.__esModule = true;
exports.mostInArray = void 0;
// Returns the most frequent item in an array
var myArray = [1, 3, 2, 3, 4, 5, 1, 3, 2, 1, 1, 1, 1];
function mostInArray(arr) {
    if (arr === void 0) { arr = []; }
    var max = 0;
    var newArray = Array.from(new Set(arr));
    //let newArray:number[] = [...new Set(arr)];
    var filter = [];
    var _loop_1 = function (i) {
        filter = arr.filter(function (item) { return item === arr[i]; });
        max = filter.length > max ? arr[i] : max;
    };
    for (var i = 0; i < newArray.length; i++) {
        _loop_1(i);
    }
    return max;
}
exports.mostInArray = mostInArray;
console.log("The most frequent item in ".concat(myArray, " is: ").concat(mostInArray(myArray)));
