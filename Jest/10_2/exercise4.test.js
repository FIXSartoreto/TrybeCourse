const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('verificar repos na lista', () => {
  it('Retorna true se tiver',  () => {
    return getRepos('https://api.github.com/users/tryber/repos').then(result => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-block25-mongodb-commerce');
    });
  });
});