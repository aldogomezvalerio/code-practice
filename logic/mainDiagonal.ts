//Function to extract the main diagonal elements from a square matrix
export function mainDiagonal(matrix: number[][]): number[] {
  let diagonal: number[] = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        diagonal.push(matrix[i][j]);
      }
    }
  }
  return diagonal;
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(mainDiagonal(matrix)); // Output: [1, 5, 9]
