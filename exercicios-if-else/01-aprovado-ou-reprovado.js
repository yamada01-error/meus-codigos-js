function verificarNota(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(verificarNota(8));