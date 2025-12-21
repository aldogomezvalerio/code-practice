"use strict";
exports.__esModule = true;
//This program calculates if you have more than 18 years old
var readline = require("readline");
var age = 0;
var today = "";
var birthDay = "";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Irght format validating function
function isValidDate(input) {
    var regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    if (!regex.test(input))
        return false;
    var date = new Date(input);
    return !isNaN(date.getTime()) && date.toISOString().startsWith(input);
}
//Get current date function
function getCurrentDate() {
    var now = new Date();
    var yyyy = now.getFullYear();
    var mm = String(now.getMonth() + 1).padStart(2, "0");
    var dd = String(now.getDate()).padStart(2, "0");
    var today = "".concat(yyyy, "-").concat(mm, "-").concat(dd);
    return today;
}
//Get difference years between two dates
function getYearDifference(startDate, endDate) {
    var start = new Date(startDate);
    var end = new Date(endDate);
    var years = end.getFullYear() - start.getFullYear();
    var endMonthDay = end.getMonth() * 100 + end.getDate();
    var startMonthDay = start.getMonth() * 100 + start.getDate();
    if (endMonthDay < startMonthDay) {
        years--;
    }
    return Number(years);
}
rl.question("Prease enter your birthday in YYYY-MM-DD format: ", function (date) {
    birthDay = date;
    if (!isValidDate(birthDay)) {
        console.log("".concat(birthDay, " is not a valid date."));
    }
    else {
        age = getYearDifference(date, getCurrentDate());
        var msg = age > 17
            ? "You are ".concat(age, " years old and you are an adult")
            : "You are ".concat(age, " years old and you are not an adult");
        console.log(msg);
    }
    //console.log(`Your birthday is ${birthDay}.`);
    rl.close();
});
