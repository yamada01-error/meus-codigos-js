salvar() {
    const dados = {
        companhias: this.companhias,
        trechos: this.trechos
    };

    fs.writeFileSync(
        "passagens.json",
        JSON.stringify(dados, null, 2)
    );
}

carregar() {
    if (fs.existsSync("passagens.json")) {
        const dados = JSON.parse(
            fs.readFileSync("passagens.json", "utf8")
        );

        this.companhias = dados.companhias || [];
        this.trechos = dados.trechos || [];
    }
}

cadastrarCompanhia(nome) {
    this.companhias.push(new Companhia(nome));
    this.salvar();
}

editarCompanhia(id, novoNome) {
    this.companhias[id].nome = novoNome;
    this.salvar();
}

excluirCompanhia(id) {
    this.companhias.splice(id, 1);
    this.salvar();
}

cadastrarTrecho(idCompanhia, origem, destino, valor) {
    const companhia = this.companhias[idCompanhia];

    const trecho = new Trecho(
        companhia.nome,
        origem,
        destino,
        valor
    );

    this.trechos.push(trecho);
    companhia.trechos.push(trecho);

    this.salvar();
}

editarTrecho(id, origem, destino, valor) {
    this.trechos[id].origem = origem;
    this.trechos[id].destino = destino;
    this.trechos[id].valor = valor;

    this.salvar();
}

excluirTrecho(id) {
    this.trechos.splice(id, 1);
    this.salvar();
}

const sistema = new Sistema();
sistema.carregar();
