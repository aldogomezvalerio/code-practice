export function matrixAddition(matrix: number[][]): number {
  let result: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result = result + matrix[i][j];
    }
  }
  return result;
}

console.log(matrixAddition([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 45
console.log(matrixAddition([[10, 20], [30, 40]])); // Output: 100

