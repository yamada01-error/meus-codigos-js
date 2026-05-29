// COMPANHIAS

cadastrarCompanhia(nome){

    let companhia = new Companhia(nome);

    this.companhias.push(companhia);

    console.log("Companhia cadastrada com sucesso");

}

listarCompanhias(){

    if(this.companhias.length === 0){
        console.log("Nenhuma companhia cadastrada");
        return;
    }

    for(let i = 0; i < this.companhias.length; i++){

        console.log(
            `${i} - ${this.companhias[i].nome}`
        );

    }

}

editarCompanhia(id, novoNome){

    if(this.companhias[id]){

        this.companhias[id].nome = novoNome;

        console.log("Companhia editada com sucesso");

    } else {

        console.log("Companhia não encontrada");

    }

}

excluirCompanhia(id){

    if(this.companhias[id]){

        this.companhias.splice(id, 1);

        console.log("Companhia removida");

    } else {

        console.log("Companhia não encontrada");

    }

}

// TRECHOS

cadastrarTrecho(idCompanhia, origem, destino, valor){

    let companhia = this.companhias[idCompanhia];

    if(!companhia){

        console.log("Companhia não encontrada");
        return;

    }

    let trecho = new Trecho(
        companhia.nome,
        origem,
        destino,
        valor
    );

    this.trechos.push(trecho);

    companhia.trechos.push(trecho);

    console.log("Trecho cadastrado com sucesso");

}

listarTrechos(){

    if(this.trechos.length === 0){

        console.log("Nenhum trecho cadastrado");
        return;

    }

    for(let i = 0; i < this.trechos.length; i++){

        let trecho = this.trechos[i];

        console.log(`
Companhia: ${trecho.companhia}
Origem: ${trecho.origem}
Destino: ${trecho.destino}
Valor: R$${trecho.valor}
        `);

    }

}

listarTrechosPorCompanhia(){

    for(let i = 0; i < this.companhias.length; i++){

        let companhia = this.companhias[i];

        console.log(`\nCompanhia: ${companhia.nome}`);

        if(companhia.trechos.length === 0){

            console.log("Nenhum trecho cadastrado");

        } else {

            for(let trecho of companhia.trechos){

                console.log(
                    `${trecho.origem} -> ${trecho.destino} | R$${trecho.valor}`

// EDITAR TRECHO

editarTrecho(id, novaOrigem, novoDestino, novoValor){

    if(this.trechos[id]){

        this.trechos[id].origem = novaOrigem;
        this.trechos[id].destino = novoDestino;
        this.trechos[id].valor = novoValor;

        console.log("Trecho editado com sucesso");

    } else {

        console.log("Trecho não encontrado");

    }

}

// EXCLUIR TRECHO

excluirTrecho(id){

    if(this.trechos[id]){

        this.trechos.splice(id, 1);

        console.log("Trecho removido com sucesso");

    } else {

        console.log("Trecho não encontrado");

    }

       }
                  
