function isSymmetric(matrix: number[][]): boolean {

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }

  return true;
}

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

console.log(isSymmetric(matrix1)); // true
console.log(isSymmetric(matrix2)); // false