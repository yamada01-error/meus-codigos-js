function contarVogais(texto) {
    let contador = 0;
    let vogais = "aeiouAEIOU";

    for (let letra of texto) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Programação"));