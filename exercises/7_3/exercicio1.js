const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.equal(sum(4,5), 9, "soma de 4+5 é 9!");
assert.equal(sum(0,0), 0, "soma de 0+0 é 0!");
assert.equal(sum(4,"5"), 9, 'soma de 4+5 é 9!');
assert.throws(() => {sum(4,"5")}, 'Error: parameters must be numbers');
