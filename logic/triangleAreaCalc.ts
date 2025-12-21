//This code calculate the area of a triangle
import * as readline from "readline";
let base: number = 0;
let height: number = 0;
let area: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the base of the triangle: ", (firstAnsware) => {
  base = Number(firstAnsware);
  rl.question("Please enter the height of the triangle: ", (secondAnsware) => {
    height = Number(secondAnsware);
    area = (base * height) / 2;
    console.log(`The area of the triangle is ${area}`);
    rl.close();
  });
});
