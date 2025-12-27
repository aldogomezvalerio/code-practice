var myArray = [5, 3, 8, 1, 2];
var tempArray = [];
var minNum = 0;
var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    minNum = myArray[i];
    for (var j = 0; j < myArray.length; j++) {
        minNum = minNum < myArray[j] ? minNum : myArray[j];
    }
    tempArray.push(minNum);
    myArray.splice(myArray.indexOf(minNum), 1);
    minNum = 0;
}
console.log(tempArray);
