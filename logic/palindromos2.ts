//This code finds if a word is reading the same backwords or not.
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a word: ', (word: string) => {
    const reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
        console.log(`${word} is a palindrome.`);
    } else {
        console.log(`${word} is not a palindrome.`);
    }
    rl.close();
});