import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isAnagram(str1: string, str2: string): boolean {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

rl.question("Please enter the first string: ", (firstAnswer) => {
  rl.question("Please enter the second string: ", (secondAnswer) => {
    const result = isAnagram(firstAnswer, secondAnswer);
    if (result) {
      console.log(`"${firstAnswer}" and "${secondAnswer}" are anagrams.`);
    } else {
      console.log(`"${firstAnswer}" and "${secondAnswer}" are not anagrams.`);
    }
    rl.close();
  });
});
