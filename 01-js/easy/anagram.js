/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let result = false;
  if (str1.length != str2.length) {
    return false;
  }
  if (str1.length + str2.length < 1) {
    return true;
  }
  for (let i in str2) {
    if (str1.includes(str2[i])) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

module.exports = isAnagram;
