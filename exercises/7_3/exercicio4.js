const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.equal(myFizzBuzz(15), 'fizzbuzz', 'deve retornar fizzbuzz');
assert.equal(myFizzBuzz(9), 'fizz', ' deve retornar fizz');
assert.equal(myFizzBuzz(10), 'buzz', ' deve retornar buzz');
assert.equal(myFizzBuzz(7), 7, ' deve retornar fizz');
assert.equal(myFizzBuzz('not a number'), false);