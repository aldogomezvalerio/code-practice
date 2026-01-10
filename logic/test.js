function mostInArray(arr = []) {
  let max = 0;
  let newArray = [...new Set(arr)];
  let filter = [];

  for (let i = 0; i < newArray.length; i++) {
    filter = arr.filter((item) => item === newArray[i]);
    max = filter.length > max ? arr[i] : max;
  }
  return max;
}

console.log(mostInArray([1, 3, 2, 3, 4, 5, 1, 3, 2, 1, 1, 1, 1]));
