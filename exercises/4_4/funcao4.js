function countChar(names){
    let maiorNome = names[0];
    for (let i in names){
        if (maiorNome.length < names[i].length){
            maiorNome = names[i];
        }
    }
    return maiorNome;
}

console.log(countChar(['Gabriel', 'Lucas', 'LucasPirata', 'Fernanda', 'Cairo', 'Joana']));