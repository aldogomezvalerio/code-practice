//Code of an multiplication table
for (var i = 1; i <= 10; i++) {
    console.log("".concat(i, " multiplication table."));
    for (var j = 1; j <= 10; j++) {
        console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
    }
}
