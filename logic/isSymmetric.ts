export function isSymmetric(matrix: number[][]): boolean {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
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

console.log(`${matrix1} is symmetric: ${isSymmetric(matrix1)}`);
console.log(`${matrix2} is symmetric: ${isSymmetric(matrix2)}`);

