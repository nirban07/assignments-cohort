/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let num = 0;
  let checkWord = "aeiouAEIOU";
  for (let e in str) {
    if (checkWord.includes(str[e])) {
      num += 1;
    }
  }
  return num;
}

module.exports = countVowels;
