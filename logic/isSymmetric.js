"use strict";
exports.__esModule = true;
exports.isSymmetric = void 0;
function isSymmetric(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}
exports.isSymmetric = isSymmetric;
// Example usage:
var matrix1 = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];
var matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("".concat(matrix1, " is symmetric: ").concat(isSymmetric(matrix1)));
console.log("".concat(matrix2, " is symmetric: ").concat(isSymmetric(matrix2)));
