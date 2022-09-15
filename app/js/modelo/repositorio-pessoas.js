class RepositorioPessoas {
    constructor() {
        this.repositorio_pessoas = new Array();
    }
    adicionar(pessoa) {
        this.repositorio_pessoas.push(pessoa);
    }
    getPessoas() {
        return this.repositorio_pessoas;
    }
}
