let myArray = [5, 3, 8, 1, 2];
let tempArray = [];
let minNum: number = 0;
let arrayLength: number = myArray.length;

for (let i = 0; i < arrayLength; i++) {
  minNum = myArray[i];
  for (let j = 0; j < myArray.length; j++) {
    minNum = minNum < myArray[j] ? minNum : myArray[j];
  }
    tempArray.push(minNum);
    myArray.splice(myArray.indexOf(minNum), 1);
    minNum = 0; 
  
}

console.log(tempArray);
