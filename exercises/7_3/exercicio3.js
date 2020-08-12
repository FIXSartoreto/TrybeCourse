const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'deve remover o 3 se existir');
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'deve remover o 3 se existir');

const myList = [5, 7, 9, 12, 25];
assert.deepStrictEqual(myRemoveWithoutCopy(myList, 11), [5, 7, 9, 12, 25], 'nao deve ser alteado');
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
