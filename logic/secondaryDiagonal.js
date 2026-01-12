"use strict";
exports.__esModule = true;
exports.secondaryDiagonal = void 0;
function secondaryDiagonal(matrix) {
    var diagonal = [];
    for (var i = 0; i < matrix.length; i++) {
        if (matrix[i] && matrix[i][matrix.length - 1 - i] !== undefined) {
            diagonal.push(matrix[i][matrix.length - 1 - i]);
        }
    }
    return diagonal;
}
exports.secondaryDiagonal = secondaryDiagonal;
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(secondaryDiagonal(matrix));
//1,3-2,2,3,1  = [3,5,7]
