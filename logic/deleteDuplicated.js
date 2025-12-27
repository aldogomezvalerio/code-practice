var numArray = [2, 5, 3, 8, 1, 2];
function deleteDuplicated(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}
console.log(deleteDuplicated(numArray)); // Output: [2, 5, 3, 8, 1]
