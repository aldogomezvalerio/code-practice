//Create an ascendent pattern with loops

let cont: number = 1;

console.log("Ascendent Pattern with for loop::");
for (let i = 0; i < 20; i++) {
  console.log(`${cont + i}`);
  cont = cont + cont;
}

console.log("Ascendent Pattern with while loop::");
cont = 1;
let plus: number = 1;
while (cont <= 20) {
  console.log(`${cont + plus}`);
  plus = plus + 1;
  cont = cont + cont;
}

console.log("Ascendent patterntn with do while loop:");
cont = 1;
plus = 1;
do {
  console.log(`${cont + plus}`);
  plus = plus + plus;
  cont++;
} while (cont <= 20);

