class Aluno {
  constructor(nome, portugues, matematica) {
    this.nome = nome;
    this.portugues = portugues;
    this.matematica = matematica;
  }
}

// 2. Classe Turma 
class Turma {
  constructor(nomeTurma) {
    this.nomeTurma = nomeTurma;
    this.alunos = []; // Array que armazenará objetos da classe Aluno
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  criaRanking(disciplina) {
    // 
    let listaParaOrdenar = [];
    for (let i = 0; i < this.alunos.length; i++) {
      listaParaOrdenar.push({
        nome: this.alunos[i].nome,
        media: this.alunos[i][disciplina] // Acessa a nota dinamicamente (ex: "matematica")
      });
    }

    const ranking = [];
    const totalAlunos = listaParaOrdenar.length;

    // Lógica de Ordenação 
    for (let i = 0; i < totalAlunos; i++) {
      let indiceDoMaior = 0;

      for (let j = 1; j < listaParaOrdenar.length; j++) {
        if (listaParaOrdenar[j].media > listaParaOrdenar[indiceDoMaior].media) {
          indiceDoMaior = j;
        }
      }

      //
      const vencedor = listaParaOrdenar.splice(indiceDoMaior, 1)[0];
      ranking.push(vencedor);
    }

    return ranking;
  }
}


// Criando a turma
const minhaTurma = new Turma("9º Ano A");

// Criando e adicionando alunos
minhaTurma.adicionarAluno(new Aluno("pedro", 8.5, 7.0));
minhaTurma.adicionarAluno(new Aluno("igor yamada", 6.0, 9.5));
minhaTurma.adicionarAluno(new Aluno("tulio", 9.0, 9.0));
minhaTurma.adicionarAluno(new Aluno("clara", 5.5, 6.0));


console.log(`Ranking da Turma: {minhaTurma.nomeTurma}`);
const resultadoMatematica = minhaTurma.criaRanking("matematica");

console.log("Resultado Esperado (Matemática):");
console.log(resultadoMatematica);
