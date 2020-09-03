function palindromo(palavra){
    let arrayPalavra = palavra.split("");
    let ehPalindromo = true;
    for (let i in arrayPalavra){
        if (arrayPalavra[i] != palavra[(palavra.length - 1) - i]){
            ehPalindromo = false;
        }
    }
    return ehPalindromo;
}