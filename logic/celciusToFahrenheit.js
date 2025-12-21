"use strict";
exports.__esModule = true;
//This code convert from celcius temperature unit to fahrenheit
var readline = require("readline");
var celcius = 0;
var fahrenheit = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the celcius temperature: ", function (c) {
    celcius = Number(c);
    fahrenheit = (celcius * 9) / 5 + 32;
    console.log("The temperature in fahrenheit is ".concat(fahrenheit));
    rl.close();
});
