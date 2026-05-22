criaRanking(disciplina) {
    let ranking = [];

    for (let i = 0; i < this.alunos.length; i++) {
        let aluno = this.alunos[i];
        let media = aluno.calculaMedia(disciplina); 

        ranking.push({
            nome: aluno.nome,
            media: media
        });
    }

    for (let i = 0; i < ranking.length; i++) {
        for (let j = 0; j < ranking.length - 1 - i; j++) {
            if (ranking[j].media < ranking[j + 1].media) {
                let temp = ranking[j];
                ranking[j] = ranking[j + 1];
                ranking[j + 1] = temp;
            }
        }
    }

    return ranking;
}
