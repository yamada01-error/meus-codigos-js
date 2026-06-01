// COMPANHIAS

cadastrarCompanhia(nome) {
    const companhia = new Companhia(nome);
    this.companhias.push(companhia);

    console.log("Companhia cadastrada com sucesso!");
}

listarCompanhias() {
    if (this.companhias.length === 0) {
        console.log("Nenhuma companhia cadastrada.");
        return;
    }

    this.companhias.forEach((companhia, index) => {
        console.log(`${index} - ${companhia.nome}`);
    });
}

editarCompanhia(id, novoNome) {
    if (id < 0 || id >= this.companhias.length) {
        console.log("Companhia não encontrada.");
        return;
    }

    this.companhias[id].nome = novoNome;

    console.log("Companhia editada com sucesso!");
}

excluirCompanhia(id) {
    if (id < 0 || id >= this.companhias.length) {
        console.log("Companhia não encontrada.");
        return;
    }

    const nomeCompanhia = this.companhias[id].nome;

    this.companhias.splice(id, 1);

    this.trechos = this.trechos.filter(
        trecho => trecho.companhia !== nomeCompanhia
    );

    console.log("Companhia excluída com sucesso!");
}

// TRECHOS

cadastrarTrecho(idCompanhia, origem, destino, valor) {

    if (idCompanhia < 0 || idCompanhia >= this.companhias.length) {
        console.log("Companhia não encontrada.");
        return;
    }

    const companhia = this.companhias[idCompanhia];

    const trecho = new Trecho(
        companhia.nome,
        origem,
        destino,
        valor
    );

    this.trechos.push(trecho);
    companhia.trechos.push(trecho);

    console.log("Trecho cadastrado com sucesso!");
}

listarTrechos() {

    if (this.trechos.length === 0) {
        console.log("Nenhum trecho cadastrado.");
        return;
    }

    this.trechos.forEach((trecho, index) => {
        console.log(
            `${index} - ${trecho.companhia} | ${trecho.origem} -> ${trecho.destino} | R$ ${trecho.valor}`
        );
    });
}

listarTrechosPorCompanhia() {

    if (this.companhias.length === 0) {
        console.log("Nenhuma companhia cadastrada.");
        return;
    }

    this.companhias.forEach((companhia, index) => {

        console.log(`\n${index} - ${companhia.nome}`);

        if (companhia.trechos.length === 0) {
            console.log("Sem trechos cadastrados.");
        } else {

            companhia.trechos.forEach((trecho, i) => {
                console.log(
                    `${i} - ${trecho.origem} -> ${trecho.destino} | R$ ${trecho.valor}`
                );
            });

        }

    });
}

editarTrecho(id, origem, destino, valor) {

    if (id < 0 || id >= this.trechos.length) {
        console.log("Trecho não encontrado.");
        return;
    }

    this.trechos[id].origem = origem;
    this.trechos[id].destino = destino;
    this.trechos[id].valor = valor;

    console.log("Trecho editado com sucesso!");
}

excluirTrecho(id) {

    if (id < 0 || id >= this.trechos.length) {
        console.log("Trecho não encontrado.");
        return;
    }

    const trechoRemovido = this.trechos[id];

    this.companhias.forEach(companhia => {

        companhia.trechos = companhia.trechos.filter(
            trecho =>
                trecho !== trechoRemovido
        );

    });

    this.trechos.splice(id, 1);

    console.log("Trecho excluído com sucesso!");
        }
