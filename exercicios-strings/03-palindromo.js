function verificarPalindromo(texto) {
    let invertida = texto.split("").reverse().join("");

    if (texto === invertida) {
        return "É um palíndromo";
    } else {
        return "Não é um palíndromo";
    }
}

console.log(verificarPalindromo("ovo"));