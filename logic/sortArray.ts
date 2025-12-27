let myArray = [5, 3, 8, 1, 2];
let tempArray = [];
let minNum: number = 0;

for (let i = 0; i < myArray.length; i++) {
  minNum = myArray[i];
  for (let j = i + 1; j < myArray.length; j++) {
    if (myArray[j] < minNum) {
      minNum = myArray[j];
    }
    tempArray.push(minNum);
  }
  
}

console.log(tempArray);
