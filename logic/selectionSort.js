"use strict";
exports.__esModule = true;
exports.selectionSort = void 0;
//This code contain the selection sort logic
var nArray = [6, 3, 4, 5, 2, 7, 1];
function selectionSort(arr) {
    var _a;
    var leneght = arr.length;
    for (var i = 0; i < leneght; i++) {
        for (var j = 0; j < leneght; j++) {
            if (arr[i] < arr[j]) {
                _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
            }
        }
    }
    return arr;
}
exports.selectionSort = selectionSort;
console.log(selectionSort(nArray));
