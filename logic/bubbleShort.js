"use strict";
exports.__esModule = true;
exports.bubbleSort = void 0;
//This code is about applying the bubble short argorithem on a list in Typescript
var myArray = [6, 3, 4, 5, 2, 7, 1];
function bubbleSort(arr) {
    var _a;
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
console.log(bubbleSort(myArray));
