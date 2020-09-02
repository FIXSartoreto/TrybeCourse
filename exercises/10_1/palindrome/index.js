// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const word = str.split('');
  const reverseWord = [];
  for (let i = word.length - 1; i >= 0; i -=1){
    reverseWord.push(word[i]);
  }
  console.log(word);
  console.log(reverseWord);
  if (word.toString() === reverseWord.toString()) return true;
  return false;
}

palindrome('aba');

module.exports = palindrome;
