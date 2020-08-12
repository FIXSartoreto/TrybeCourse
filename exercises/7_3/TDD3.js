const assert = require('assert');
// escreva a função addAllnumbers aqui
function addAllnumbers(arrayNumbers) {
  let result = 0;
  for (i in arrayNumbers) {
    result += arrayNumbers[i];
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);