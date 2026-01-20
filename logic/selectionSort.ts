//This code contain the selection sort logic
var nArray: number[] = [6, 3, 4, 5, 2, 7, 1];

export function selectionSort(arr: number[]): number[] {
  var leneght: number = arr.length;

  for (var i = 0; i < leneght; i++) {
    for (var j = 0; j < leneght; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort(nArray));
