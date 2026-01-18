var nArray = [6, 3, 4, 5, 2, 7, 1];
function bubbleSort(arr) {
    var _a;
    var length = arr.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
console.log(bubbleSort(nArray));
