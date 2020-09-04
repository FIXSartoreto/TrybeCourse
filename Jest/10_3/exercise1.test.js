let randomNumber = () => {
  return Math.round(Math.random() * 100);
};

console.log(randomNumber());

describe('Testing return of randomNumber', () => {
  it('return is 10', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});