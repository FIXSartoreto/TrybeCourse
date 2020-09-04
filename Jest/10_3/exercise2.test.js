let randomNumber = () => {
  return Math.round(Math.random() * 100);
};

console.log(randomNumber());

describe('Testing return of randomNumber', () => {
  it('return is 10', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    
    expect(randomNumber(50,10)).toBe(5);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(50, 10);
  });
});