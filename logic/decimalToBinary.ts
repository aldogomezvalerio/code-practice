export function binaryToDecimal(digit: number): string {
  //let result: number = 0;
  let binaryString: string = "";
  let counter: number = 0;

  while (digit > 0) {
    counter = digit / 2;
    binaryString = binaryString + (digit % 2).toString();
    digit = Math.floor(counter); 
  }
  return binaryString;
}

console.log(binaryToDecimal(13));
/*
13 ÷ 2 = 6 remainder 1
 6 ÷ 2 = 3 remainder 0
 3 ÷ 2 = 1 remainder 1
 1 ÷ 2 = 0 remainder 1
*/