const assert = require('assert');

const removeMiddle = (param) => {
  const meioArray = Math.floor(param.length / 2);
  const palavra = [param[meioArray]];
  param.splice(meioArray, 1);
  
  return palavra;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);