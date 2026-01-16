//This code is about applying the bubble short argorithem on a list in Typescript
let myArray = [6, 3, 4, 5, 2, 7, 1];
export function BubblerShort(numArray: number[]): number[] {
  let result: number[] = [];
  let n = numArray.length;

  let tempArray: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (numArray[j] > numArray[j + 1] || numArray[j] == numArray[j + 1]) {
        tempArray.push(numArray[j]);
        tempArray.push(numArray[j + 1]);
      } else {
        tempArray.push(numArray[j + 1]);
        tempArray.push(numArray[j]);
      }
      // } else if (numArray[j] < numArray[j + 1])
    }
    result = tempArray;
    tempArray = [];
  }

  return result;
}

console.log(BubblerShort(myArray));
