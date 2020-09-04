function toUpperCase(string) {
  return toUpperCase(string);
}

function firstLetter(string) {
  return string.substr(1,1);
}

function concatStrings(str1, str2) {
  return str1 + str2;
}


describe('Testing return of all Functions', () => {
  it('toUpperCase new implementation', () => {
    toUpperCase = jest.fn().mockImplementation((str) => str.toLowerCase());

    expect(toUpperCase('ANDRE')).toBe('andre');
    expect(toUpperCase).toHaveBeenCalled();
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toUpperCase).toHaveBeenCalledWith('ANDRE');
  });

  it('firstLetter new implementation', () => {
    firstLetter = jest.fn().mockImplementation((str) => str.slice(-1));
    
    expect(firstLetter('ANDRE')).toBe('E');
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith('ANDRE');
  });

  it('concatStrings new implementation', () => {
    concatStrings = jest.fn().mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    
    expect(concatStrings('ANDRE', '.', 'Sartoreto')).toBe('ANDRE.Sartoreto');
    expect(concatStrings).toHaveBeenCalled();
    expect(concatStrings).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledWith('ANDRE', '.', 'Sartoreto');
  });
});