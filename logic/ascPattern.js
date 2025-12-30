//Create an ascendent pattern with loops
var cont = 1;
console.log("Ascendent Pattern with for loop::");
for (var i = 0; i < 20; i++) {
    console.log("".concat(cont + i));
    cont = cont + 1;
}
console.log("Ascendent Pattern with while loop::");
cont = 1;
var plus = 1;
while (cont <= 20) {
    console.log("".concat(cont + plus));
    plus = plus + 1;
    cont++;
}
console.log("Ascendent patterntn with do while loop::");
cont = 1;
plus = 1;
do {
    console.log("".concat(cont + plus));
    plus = plus + 1;
    cont++;
} while (cont <= 20);
