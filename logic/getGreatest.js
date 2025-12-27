// This code finds the greatest number in a list of numbers without using built-in functions.
var numList = [10, 5, 8, 20, 3];
var maxNum = 0;
function getGreatest(myArray) {
    for (var i = 0; i < numList.length; i++) {
        maxNum = numList[i];
        for (var j = 0; j < numList.length; j++) {
            maxNum = maxNum > numList[j] ? maxNum : numList[j];
        }
    }
    return maxNum;
}
maxNum = getGreatest(numList);
console.log("The greatest number in the list ".concat(numList, " is: ").concat(maxNum));
