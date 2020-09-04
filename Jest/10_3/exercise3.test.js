let randomNumber = () => {
  return Math.round(Math.random() * 100);
};

console.log(randomNumber());

describe('Testing return of randomNumber', () => {
  it('multiply implementation', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    
    expect(randomNumber(50, 10, 10)).toBe(5000);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(50, 10, 10);
  });

  it('reset implementation, then new', () => {
    randomNumber.mockReset();

    randomNumber.mockImplementation((a) => a * 2);
    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(10);
  });
});