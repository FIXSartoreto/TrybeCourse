const longestWord = (frase) => {
  let fraseSplit = frase.split(" ");
  let big = fraseSplit[0];
  for (let i = 0; i < fraseSplit.length; i += 1) {
    if (fraseSplit[i].length > big.length) {
      big = fraseSplit[i];
    }
  }
  return big;
}

