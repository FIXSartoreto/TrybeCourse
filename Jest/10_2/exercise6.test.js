const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 1, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve,reject) => {
    const arrayAnimals = Animals.find(pet => pet.name === name);
    if (arrayAnimals) {
      return resolve(arrayAnimals);
    }
    return reject('Nenhum animal com esse nome!');
  });
}

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
}

// .2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => {
  return new Promise((resolve,reject) => {
    const arrayAnimals = Animals.filter(pet => pet.age === age);
    if (arrayAnimals) {
      return resolve(arrayAnimals);
    }
    return reject('Nenhum animal com essa idade!');
  });
};

const getAnimalbyAge = (age) => {
  return findAnimalByAge(age).then(animal => animal);
}

// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o array dos animais', () => {
      expect.assertions(1);
      const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      return expect(getAnimalbyAge(5)).resolves.toEqual(animals);
    });
    test('Retorne o array dos animais', () => {
      expect.assertions(1);
      const animals = [{ name: 'Dorminhoco', age: 1, type: 'Dog' }, { name: 'Soneca', age: 1, type: 'Dog' }];
      return expect(getAnimalbyAge(1)).resolves.toEqual(animals);
    });
  });
});

describe('Quando não existe o animal com a idade procurada', () => {
  test('Retorna um erro', () => {
    expect.assertions(1);
    return expect(getAnimalbyAge(25)).reject.toBe('Nenhum animal com essa idade!');
  });
});