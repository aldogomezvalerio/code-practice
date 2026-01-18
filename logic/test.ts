let nArray: number[] = [6, 3, 4, 5, 2, 7, 1];

function bubbleSort(arr: number[]): number[] {
  const length: number = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(nArray));
