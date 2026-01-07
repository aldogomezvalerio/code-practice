"use strict";
exports.__esModule = true;
var passRegExpr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var pass = "";
var specialChars = ["@", "$", "!", "%", "*", "?", "&"];
var cont = 0;
var patternArray = [
    function () { return Math.floor(Math.random() * (122 - 97 + 1)) + 97; },
    function () { return Math.floor(Math.random() * (90 - 65 + 1)) + 65; },
    function () { return Math.floor(Math.random() * (57 - 48 + 1)) + 48; },
];
for (var i = 0; i < 15; i++) {
    pass += String.fromCharCode(patternArray[Math.floor(cont)]());
    cont = cont < 3 ? cont + 1 : 0;
}
pass += specialChars[Math.floor(Math.random() * 6)];
console.log("Random password: " + pass);
