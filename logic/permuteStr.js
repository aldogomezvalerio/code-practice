//Permute string
function permute(str) {
    if (str.length === 1)
        return [str];
    var result = [];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var rest = str.slice(0, i) + str.slice(i + 1);
        var subPermutations = permute(rest);
        for (var _i = 0, subPermutations_1 = subPermutations; _i < subPermutations_1.length; _i++) {
            var perm = subPermutations_1[_i];
            result.push(char + perm);
        }
    }
    return result;
}
console.log(permute("abc"));
