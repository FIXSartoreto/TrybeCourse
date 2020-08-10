const fatorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
  return result;  
}

fatorial(6);