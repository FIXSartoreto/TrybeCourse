const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // escreva seu código aqui
  return arrays.reduce((result, array) => result.concat(array), [])
}

test('concat array', () => {
  expect(flatten()).toEqual(['1', '2', '3', true, 4, 5, 6]);
});