const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
  return alunos.map((aluno, index) => ({
    name: aluno,
    average: (notas[index].reduce((result, nota) => result + nota, 0) / notas[index].length),
  }))
  
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

test('Student average age', () => {
  expect(studentAverage()).toEqual(expected);
});