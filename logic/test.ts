/**
 * Extracts the secondary diagonal from a square matrix.
 * * @param matrix - A 2D array representing a square matrix (n x n)
 * @returns An array containing the elements of the secondary diagonal
 */
function getSecondaryDiagonal<T>(matrix: T[][]): T[] {
  const n = matrix.length;
  const diagonal: T[] = [];

  for (let i = 0; i < n; i++) {
    // The secondary diagonal follows the rule: column = n - 1 - row
    const columnIndex = n - 1 - i;
    //7
    // Safety check to ensure the row exists and has the required column
    if (matrix[i] && matrix[i][columnIndex] !== undefined) {
      diagonal.push(matrix[i][columnIndex]);
    }
  }

  return diagonal;
}

// --- Example Usage ---
const squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result = getSecondaryDiagonal(squareMatrix);
console.log(result); // Output: [3, 5, 7]