//Fibonacci serie in Typescript
let num1: number = 0;
let num2: number = 1;

for (let i: number = 0; i < 20; i++) {
  console.log(num1);
  num1 = num1 + num2;
  num2 = num1 - num2;
}
