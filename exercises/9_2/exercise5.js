const promiseFunc = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = [];
    const array2 = [];
    for (let i = 0; i < 10; i += 1){
      array.push(Math.round((Math.random() * 50) + 1));
    }
    array.forEach(number => array2.push(Math.pow(number,2)) );
    const sum = array2.reduce((result, number) => {
      return result + number;
    })
    if (sum > 8000) {
      return reject(sum);
    }
    resolve(sum);
  });

  myPromise
  .then((sum) => console.log([2, 3, 5, 10].map(num => Math.round(sum / num))))
  .then(result => result.reduce((num, acc) => num + acc, 0))
  .catch(() => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
}

promiseFunc();