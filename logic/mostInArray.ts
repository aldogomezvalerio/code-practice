// Returns the most frequent item in an array
const myArray: number[] = [1, 3, 2, 3, 4, 5, 1, 3, 2, 1, 1, 1, 1];

export function mostInArray(arr: number[] = []): number | null {
  let max:number = 0;
  let newArray:number[] = Array.from(new Set(arr));
  //let newArray:number[] = [...new Set(arr)];
  let filter:number[] = [];

  for (let i = 0; i < newArray.length; i++) {
    filter = arr.filter((item) => item === arr[i]);
    max = filter.length > max ? arr[i] : max;
  }
  return max;
}

console.log(`The most frequent item in ${myArray} is: ${mostInArray(myArray)}`);
