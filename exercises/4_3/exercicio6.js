let ehPrimo = 37;
let count = 0;

for (let numero = 1; numero <= ehPrimo; numero += 1){
    if (ehPrimo % numero === 0){
        count += 1;
    }
}

if (count === 2){
    console.log(ehPrimo + " é primo!");
} else {
    console.log(ehPrimo + " não é primo!");
}