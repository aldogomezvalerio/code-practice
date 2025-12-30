import "colors";
console.log("Inverted Pattern with for loop:");
for (let i = 20; i > 0; i--) {
  console.log(i);
}

console.log("Inverted Pattern with while loop:");
let cont: number = 20;
while (cont > 0) {
  console.log(cont);
  cont--;
}

console.log("Inverted Pattern with do-while loop:");
let cont2: number = 20;
do {
  console.log(cont2);
  cont2--;
} while (cont2 > 0);
