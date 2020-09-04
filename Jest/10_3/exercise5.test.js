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
    
    const mockUpper = jest
    .spyOn(toUpperCase, 'upper')
    .mockImplementation((str) => str.toLowerCase());

    expect(mockUpper('ANDRE')).toBe('andre');
    expect(mockUpper).toHaveBeenCalled();
    expect(mockUpper).toHaveBeenCalledTimes(1);
    expect(mockUpper).toHaveBeenCalledWith('ANDRE');
  });

  it('reset implementation', () => {
    toUpperCase.mockReset();

    expect(toUpperCase('andre')).toBe('ANDRE');
    expect(toUpperCase).toHaveBeenCalledTimes(1);
    expect(toUpperCase).toHaveBeenCalledWith('andre');
  });
});