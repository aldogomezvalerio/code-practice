//This code add the digits in one number.
import * as readline from "readline";
let num: number = 0;
let sum: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a number: ", (answer: any) => {
  num = Number(answer);
  for (let digit in answer) {
    sum += Number(answer[digit]);
  }
  console.log(`The sum of the digits of ${num} is ${sum}.`);
  rl.close();
});
