"use strict";
exports.__esModule = true;
exports.mainDiagonal = void 0;
//Function to extract the main diagonal elements from a square matrix
function mainDiagonal(matrix) {
    var diagonal = [];
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (i === j) {
                diagonal.push(matrix[i][j]);
            }
        }
    }
    return diagonal;
}
exports.mainDiagonal = mainDiagonal;
// Example usage:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(mainDiagonal(matrix)); // Output: [1, 5, 9]
