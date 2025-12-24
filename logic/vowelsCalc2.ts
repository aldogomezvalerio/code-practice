//Second practice of findding vowels in a string using TypeScript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countVowels(str: string): number {
  const vowels = /a|e|i|o|u/gi;
  const result: string = str.match(vowels)?.join("") || "";
  const count = result.length;
  return count;
}

rl.question("Enter a string: ", (answaer) => {
  const response = countVowels(answaer);
  console.log(`The number of vowels in "${answaer}" is ${response}`);
  rl.close();
});
