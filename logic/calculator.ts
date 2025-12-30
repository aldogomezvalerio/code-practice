//Code of a simple calculator with Typescript
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Select the operator: \n+ for addition\n- for subtraction\n* for multiplication\n/ for division\n",
  (operator) => {
    rl.question("Enter first number: ", (firstNum) => {
      rl.question("Enter second number: ", (secondNum) => {
        let result: number = 0;
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(secondNum);
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
        }
        console.log(`${num1} ${operator} ${num2} = ${result}`);

        rl.close();
      });
    });
  }
);
