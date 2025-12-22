//This program find the dividers of a number
import * as readline from "readline";
let num: number = 0;
let outputMsg: string = "";

const promt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

promt.question("Please enter a number: ", (n) => {
  num = parseInt(n);
  for (let i: number = num; i > 0; i--) {
    if (num % i == 0) {
      outputMsg += i + " ";
    }
  }
  console.log(`${outputMsg} are the dividers of ${num}`);
  promt.close();
});
