let custo = 128;
let valorVenda = 456;
let imposto = custo * 0.2;
let lucro = 0;

if (custo > 0 && valorVenda > 0) {
    lucro = [valorVenda - (custo + imposto)]
    lucro *= 1000;
    console.log(lucro)
}   else {
    console.log("Os valores não podem ser menores que 0.")
}