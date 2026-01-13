"use strict";
//This code is for searchin an element into an array in Typescript
exports.__esModule = true;
exports.linealSearch = void 0;
var names = ["Julio", "Antonio", "Pedro", "Marcos"];
var name = "Pedro";
function linealSearch(arr, element) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            result = i;
            break;
        }
    }
    return result;
}
exports.linealSearch = linealSearch;
console.log("The name ".concat(name, " is on the position: ") + linealSearch(names, name));
