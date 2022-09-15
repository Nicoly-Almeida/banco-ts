class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    getdataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(novaData) {
        this._dataNascimento = novaData;
    }
}
