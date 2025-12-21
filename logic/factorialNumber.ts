//In this code you will have the factorial of a number
import * as readline from "readline";
let num: number = 0;
let factorial: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter an integer: ", (n) => {
  //num = parseInt(n);
  if (isNaN(Number(n))) {
    console.log(`${n} is not a number.`);
  } else {
    num = Number(n);
    factorial = getFactorial(num);
    console.log(`The factorial of ${num} is ${factorial}.`);
  }
  rl.close();
});

function getFactorial(n: number): number {
  let result: number = 1;
  for (let i: number = 0; i <= n; i++) {
    result = result * i;
  }
  return result;
}
