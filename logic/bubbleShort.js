"use strict";
exports.__esModule = true;
exports.BubblerShort = void 0;
//This code is about applying the bubble short argorithem on a list in Typescript
var myArray = [6, 3, 4, 5, 2, 7, 1];
//             3, 6, 4, 5, 2, 7, 1
//             3, 4, 6, 5, 2, 7, 1
//             3, 4, 5, 6, 2, 7, 1
//             3, 4, 5, 2, 6, 7, 1
//             3, 4, 5, 2, 6, 1, 7
//             3, 4, 5, 2, 1, 6, 7
//             3, 4, 2, 5, 1, 6, 7
function BubblerShort(numArray) {
    var result = [];
    var n = numArray.length;
    var tempArray = [];
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = numArray[j];
            }
        }
        console.log(numArray);
    }
    return result;
}
exports.BubblerShort = BubblerShort;
console.log(BubblerShort(myArray));
