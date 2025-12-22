//Create a program that reverse a text
import * as readline from "readline";
let srt: string = "";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseStr(text: string): string {
  return text.split("").reverse().join("");
}

rl.question("Please enter some text: ", (answer: string) => {
  console.log(`The reverse of ${answer} is ` + reverseStr(answer));
  rl.close();
});
