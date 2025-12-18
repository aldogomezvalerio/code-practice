import * as readline from "readline";
let num1: number = 0;
let num2: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter one number: ", (firstInput: string) => {
  rl.question("Please enter the second number: ", (secondInput: string) => {
    num1 = Number(firstInput);
    num2 = Number(secondInput);
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
    } else if (num2 > num1) {
      console.log(`${num2} is greater than ${num1}.`);
    } else {
      console.log("The numbers are equal.");
    }
    rl.close();
  });
});
