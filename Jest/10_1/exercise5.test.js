const { TestScheduler } = require('jest');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  return names.reduce((result, name) => result + name.match(/a/gi).length, 0)
}

test('Names contains A letter', () => {
  expect(containsA()).toBe(20);
});