"use strict";
exports.__esModule = true;
//This code calculate the area of a triangle
var readline = require("readline");
var base = 0;
var height = 0;
var area = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Please enter the base of the triangle: ", function (firstAnsware) {
    base = Number(firstAnsware);
    rl.question("Please enter the height of the triangle: ", function (secondAnsware) {
        height = Number(secondAnsware);
        area = (base * height) / 2;
        console.log("The area of the triangle is ".concat(area));
        rl.close();
    });
});
