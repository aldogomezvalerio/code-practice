"use strict";
exports.__esModule = true;
exports.matrixAddition = void 0;
function matrixAddition(matrix) {
    var result = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            result = result + matrix[i][j];
        }
    }
    return result;
}
exports.matrixAddition = matrixAddition;
console.log(matrixAddition([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 45
console.log(matrixAddition([[10, 20], [30, 40]])); // Output: 100
