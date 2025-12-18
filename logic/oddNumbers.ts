import * as readline from "readline";
let num: number = 0;
let outputMsg: string = "";

const promt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

promt.question("Please enter a number: ", (answer) => {
  num = parseInt(answer, 10);
  outputMsg =
    num % 2 === 0 ? `${num} is an even number` : `${num} is an odd number.`;
  console.log(outputMsg);
  promt.close();
});
