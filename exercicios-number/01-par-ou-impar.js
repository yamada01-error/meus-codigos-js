function verificarNumero(numero) {
    if (numero % 2 === 0) {
        return "Número par";
    } else {
        return "Número ímpar";
    }
}

console.log(verificarNumero(8));