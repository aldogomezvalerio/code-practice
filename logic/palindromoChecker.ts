//this code is to find if a word is a palindromo
import * as readline from "readline";

let word: string = "";
let reverseWord: string = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a word: ", (answer: string) => {
  reverseWord = answer.split("").reverse().join("");
  if (reverseWord === answer) {
    console.log(`${answer} is a palindromo.`);
  } else {
    console.log(`${answer} is not a palindromo.`);
  }
  rl.close();
});
