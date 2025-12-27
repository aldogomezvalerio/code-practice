var myArray = [5, 3, 8, 1, 2];
var tempArray = [];
var minNum = 0;
for (var i = 0; i < myArray.length; i++) {
    minNum = myArray[i];
    for (var j = i + 1; j < myArray.length; j++) {
        if (myArray[j] < minNum) {
            minNum = myArray[j];
        }
    }
    tempArray.push(minNum);
}
console.log(tempArray);
