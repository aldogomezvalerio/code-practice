//Code to get the factorial of a number using recursion in TypeScript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getFactorial(n: number): number {
  if (Number(n) <= 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}

rl.question("enter a number: ", (num) => {
  const result = getFactorial(Number(num));
  console.log(`The factorial of ${num} is ${result}`);
  rl.close();
});
