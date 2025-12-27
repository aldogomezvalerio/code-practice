let numList: number[] = [10, 5, 8, 20, 3];
let temList: number[] = [...numList];
let max: number = 0;

export function getGreatest(myArray: number[]): number {
  let firstMax: number = 0;
  let secondMax: number = 0;

  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      firstMax = firstMax > myArray[j] ? firstMax : myArray[j];
    }
  }

  myArray.splice(myArray.indexOf(firstMax), 1);

  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      secondMax = secondMax > myArray[j] ? secondMax : myArray[j];
    }
  }
  return secondMax;
}

max = getGreatest(numList);
console.log(`The second greatest number in the list ${temList} is: ${max}`);
