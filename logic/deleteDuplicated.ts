//This cothe find a dupicated value in an array and delete it.
let numArray: number[] = [2, 5, 3, 8, 1, 2];

function deleteDuplicated(arr: number[]): number[] {
  let uniqueArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(deleteDuplicated(numArray)); // Output: [2, 5, 3, 8, 1]
