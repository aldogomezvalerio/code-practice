//This code is for searchin an element into an array in Typescript

let names: any[] = ["Julio", "Antonio", "Pedro", "Marcos"];
let name: string = "Pedro";


export function linealSearch(arr: any[], element: any): number {
  let result: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      result = i;
      break;
    }
  }
  return result;
}

console.log(`The name ${name} is on the position: ` + linealSearch(names, name));
