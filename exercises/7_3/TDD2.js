const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(arrayWords) {
  const countLetters = [];
  for (i in arrayWords) {
    countLetters.push(arrayWords[i].length);
  }
  return countLetters;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);