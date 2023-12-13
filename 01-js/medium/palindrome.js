/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlpha(char) {
  return /^[A-Z]$/i.test(char);
}

function isPalindrome(str) {
  // convert the string to lowercase
  let lowerCaseStr = str.toLowerCase();

  // create a clean str with only alphabets
  let cleanStr = "";
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (isAlpha(lowerCaseStr[i])) {
      cleanStr += lowerCaseStr[i];
    }
  }
  // use two pointer method to check for palindrome
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
