var num1 = 0;
var num2 = 1;
for (var i = 0; i < 20; i++) {
    console.log(num1);
    num1 = num1 + num2;
    num2 = num1 - num2;
}
