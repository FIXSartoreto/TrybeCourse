// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const number = n.toString().split('');
  const reverseNumber = [];
  let result = '';
  for (let i = number.length - 1; i >= 0; i -= 1) {
    reverseNumber.push(number[i]);
  }
  if (reverseNumber[reverseNumber.length - 1] === '-') {
    reverseNumber.splice(reverseNumber.length -1, 1);
    result = '-' + reverseNumber.toString().replace(/,/gi, '');
    return parseInt(result)
  }

  result = reverseNumber.toString().replace(/,/gi, '');

  return parseInt(result);
}

reverseInt(-9532);

module.exports = reverseInt;
