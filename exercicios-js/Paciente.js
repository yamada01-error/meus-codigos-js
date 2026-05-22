class Paciente {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
}

// Classe FilaAtendimento
class FilaAtendimento {

    constructor() {
        this.fila = [];
        this.contadorSenha = 1;
    }

    adicionarPaciente(nome) {

        let paciente = new Paciente(
            nome,
            this.contadorSenha
        );

        this.fila.push(paciente);

        console.log(
            `Paciente ${nome} entrou na fila com a senha ${this.contadorSenha}`
        );

        this.contadorSenha++;
    }

    chamarPaciente() {

        if (this.fila.length === 0) {
            console.log("Não há pacientes na fila.");
            return;
        }

        let paciente = this.fila.shift();

        console.log(
            `Chamando paciente: ${paciente.nome} | Senha: ${paciente.senha}`
        );
    }

    mostrarFila() {

        if (this.fila.length === 0) {
            console.log("Fila vazia.");
            return;
        }

        console.log("Fila de atendimento:");

        for (let i = 0; i < this.fila.length; i++) {

            console.log(
                `Nome: ${this.fila[i].nome} | Senha: ${this.fila[i].senha}`
            );
        }
    }
}

// Criando a fila
let atendimento = new FilaAtendimento();

// Testes
atendimento.adicionarPaciente("Yamada");
atendimento.adicionarPaciente("Maria");
atendimento.adicionarPaciente("bia");
atendimento.adicionarPaciente("clara");
atendimento.mostrarFila();

atendimento.chamarPaciente();

atendimento.mostrarFila();
