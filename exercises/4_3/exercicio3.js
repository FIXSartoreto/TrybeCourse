let n = 10;
let quadrado = "";
let count = 0;

for (let i = 0; i < n; i += 1){
    let espaço = "";
    quadrado += "*";
    count += 1;
    for (let j = n; j > count; j -= 1){
        espaço += " ";
    }
    console.log(espaço + quadrado);
}