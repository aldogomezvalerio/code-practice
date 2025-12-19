//This code logic is to find what number is greater between three numbers
import * as readline from "readline";
let firstNumber: number = 0;
let secondNumber: number = 0;
let thirdNumber: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the first number: ", (firstAnsware) => {
  firstNumber = Number(firstAnsware);
  rl.question("Please read the second number: ", (secondAnswere) => {
    secondNumber = Number(secondAnswere);
    rl.question("Please enter the third number: ", (thirdAnswere) => {
      thirdNumber = Number(thirdAnswere);
      if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        if (firstNumber > secondNumber && firstNumber > thirdNumber) {
          console.log(
            `${firstNumber} is greater than ${secondNumber} and ${thirdNumber}`
          );
        }
        console.log(
          `${firstNumber} is greater than ${secondNumber} and ${thirdNumber}`
        );
      } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(
          `${secondNumber} is greater than ${firstNumber} and ${thirdNumber}`
        );
      } else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log(
          `${thirdNumber} is greater than ${firstNumber} and ${secondNumber}`
        );
      } else {
        console.log(
            `${firstNumber}, ${secondNumber} and ${thirdNumber} are equal.`
          );
      }
      rl.close();
    });
  });
});
