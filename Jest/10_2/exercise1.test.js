const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('should return a string in Upper Case', (done) => {
  uppercase('andre', (str) => {
    expect(str).toBe('ANDRE');
    done();
  });
});