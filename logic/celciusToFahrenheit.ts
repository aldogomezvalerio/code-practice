//This code convert from celcius temperature unit to fahrenheit
import * as readline from "readline";
let celcius: number = 0;
let fahrenheit: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the celcius temperature: ", (c) => {
  celcius = Number(c);
  fahrenheit = (celcius * 9) / 5 + 32;
  console.log(`The temperature in fahrenheit is ${fahrenheit}`);
  rl.close();
});
