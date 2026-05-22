// Função construtora Paciente
function Paciente(nome, senha) {
    this.nome = nome;
    this.senha = senha;
}

// Função construtora FilaAtendimento
function FilaAtendimento() {

    this.fila = [];
    this.contadorSenha = 1;

    // Método para adicionar paciente
    this.adicionarPaciente = function(nome) {

        let paciente = new Paciente(
            nome,
            this.contadorSenha
        );

        this.fila.push(paciente);

        console.log(
            `Paciente ${nome} entrou na fila com a senha ${this.contadorSenha}`
        );

        this.contadorSenha++;
    };

    // Método para chamar paciente
    this.chamarPaciente = function() {

        if (this.fila.length === 0) {
            console.log("Não há pacientes na fila.");
            return;
        }

        let paciente = this.fila.shift();

        console.log(
            `Chamando paciente: ${paciente.nome} | Senha: ${paciente.senha}`
        );
    };

    // Método para mostrar fila
    this.mostrarFila = function() {

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
    };
}

// Criando atendimento
let atendimento = new FilaAtendimento();

// Testes
atendimento.adicionarPaciente("Carlos");
atendimento.adicionarPaciente("Ana");
atendimento.adicionarPaciente("João");

atendimento.mostrarFila();

atendimento.chamarPaciente();

atendimento.mostrarFila();