import * as readline from 'readline'; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a string: ', (answer) => {
  const count = wordsCounter(answer);
  console.log(`The number of words is: ${count}`);
  rl.close();
});

export function wordsCounter (str: string): number {
  const result = str.trim().split(/\s+/).filter(word => word.length > 0);
  return result.length;
}


