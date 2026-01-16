"use strict";
exports.__esModule = true;
exports.BubblerShort = void 0;
//This code is about applying the bubble short argorithem on a list in Typescript
var myArray = [6, 3, 4, 5, 2, 7, 1];
function BubblerShort(numArray) {
    var result = [];
    var n = numArray.length;
    var tempArray = [];
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1; j++) {
            if (numArray[j] > numArray[j + 1] || numArray[j] == numArray[j + 1]) {
                tempArray.push(numArray[j]);
                tempArray.push(numArray[j + 1]);
            }
            else {
                tempArray.push(numArray[j + 1]);
                tempArray.push(numArray[j]);
            }
            // } else if (numArray[j] < numArray[j + 1])
        }
        result = tempArray;
        tempArray = [];
    }
    return result;
}
exports.BubblerShort = BubblerShort;
console.log(BubblerShort(myArray));
