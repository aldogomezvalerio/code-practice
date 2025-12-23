//This code is to find out if a number is a prime
import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (answer) => {
  let num: number = Number(answer);
  let isPrime: boolean = true;

  if (isNaN(num)) {
    console.log("Your answer is not a number.");
    rl.close();
  } else {
    for (let i: number = 0; i < num; i++) {
      if ((i != 1 && i != num && num % i == 0) || num == 1) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }
    rl.close();
  }
});
