let salarioBruto = 4768;
let impostoRenda = 0;
let inss = 0;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
    inss = 0.08 * salarioBruto
    salarioBase = salarioBruto - inss;
} else if (salarioBruto <= 2594.92) {
    inss = 0.09 * salarioBruto;
    salarioBase = salarioBruto - inss;
} else if (salarioBruto <= 5189.82) {
    inss = 0.11 * salarioBruto;
    salarioBase = salarioBruto - inss;
} else {
    salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
    impostoRenda = 0;
} else if (salarioBase <= 2826.65) {
    impostoRenda = (0.075 * salarioBase) - 142.80;
} else if (salarioBase <= 3751.05) {
    impostoRenda = (0.15 * salarioBase) - 354.80;
} else if (salarioBase <= 4664.68) {
    impostoRenda = (0.225 * salarioBase) - 636.13;
} else {
    impostoRenda = (0.275 * salarioBase) - 869.36;
}

let salarioTotal = salarioBase - impostoRenda;
console.log(salarioTotal);