//logic that counts how many vocals ar into a string
import * as readline from "readline";
let str: string = "";
let count: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a string: ", (answer: string) => {
  let srtLength: number = answer.length;
  str = String(answer);
  for (let i: number = 0; i < srtLength; i++) {
    if (
      str.charAt(i) === "a" ||
      str.charAt(i) === "e" ||
      str.charAt(i) === "i" ||
      str.charAt(i) === "o" ||
      str.charAt(i) === "u"
    ) {
      count++;
    }
  }
  console.log(`The ${str} has ${count} vocals.`);
  rl.close();
});
