class RepositorioPessoas {

    readonly repositorio_pessoas: Array<Pessoa>;

    constructor() {
        this.repositorio_pessoas = new Array<Pessoa>();
    }

    adicionar(pessoa: Pessoa) {
        this.repositorio_pessoas.push(pessoa);
    }

    getPessoas() {
        return this.repositorio_pessoas;
    }     
}

    

