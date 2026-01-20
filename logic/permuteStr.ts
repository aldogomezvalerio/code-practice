//Permute string
function permute(str: string): string[] {
  if (str.length === 1) return [str];

  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    const subPermutations = permute(rest);

    for (const perm of subPermutations) {
      result.push(char + perm);
    }
  }

  return result;
}

console.log(permute("abc"));
