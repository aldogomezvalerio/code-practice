// This code finds the greatest number in a list of numbers without using built-in functions.
let numList: number[] = [10, 5, 8, 20, 3];
let maxNum: number = 0;

for (let i = 0; i < numList.length; i++) {
  maxNum = numList[i];
  for (let j = 0; j < numList.length; j++) {
    maxNum = maxNum > numList[j] ? maxNum : numList[j];
  }
}

console.log(`The greatest numerin ${numList} is ${maxNum}`);
