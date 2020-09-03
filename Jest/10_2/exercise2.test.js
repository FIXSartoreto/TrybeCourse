const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Quando o userID existe', () => {
  it('Retorna o nome do user', () => {
    expect.assertions(1);
    return getUserName(4).then(result => expect(result).toEqual('Mark'));
  });
});

describe('quando o userId nao existe', () => {
  it('Retorna erro de usuario inexistente', () => {
    expect.assertions(1);
    return getUserName(10).catch(error => expect(error).toEqual({ error: 'User with 10 not found.'}));
  });
});