var numList = [10, 5, 8, 20, 3];
var tempList = [];
var maxNum = 0;
var listLenght = numList.length;
for (var i = 0; i < numList.length; i++) {
    maxNum = numList[i];
    for (var j = 0; j < numList.length; j++) {
        maxNum = maxNum > numList[j] ? maxNum : numList[j];
    }
}
console.log("The greatest numerin ".concat(numList, " is ").concat(maxNum));
