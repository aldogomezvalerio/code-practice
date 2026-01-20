var nArray = [6, 3, 4, 5, 2, 7, 1];

function selectionSort(arr) {
  var leneght = arr.length;
  //var temArray = let;
  var minVal = 0;

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
