const word1 = "caso";
const word2 = "seco";

let wArray1 = word1.split("").sort();
let wArray2 = word2.split("").sort();

if (wArray1.length !== wArray2.length) {
  console.log(`${word1} and ${word2} aren't anagrams words.`);
} else if (wArray1.join("") === wArray2.join("")) {
  console.log(`${word1} and ${word2} are anagrams words.`);
} else {
  console.log(`${word1} and ${word2} aren't anagrams words.`);
}

//console.log(word1.split("").sort());
