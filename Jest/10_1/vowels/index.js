// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const word = str.split('');
  let sum = 0;
  console.log(word);
  word.forEach(letter => {
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u'){
      sum += 1;
    }
  });
  console.log(sum);
  return sum;
}

vowels('bcdfghjkl');

module.exports = vowels;
