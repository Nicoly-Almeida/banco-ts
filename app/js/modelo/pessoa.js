class Pessoa {
    nome;
    _idade;
    _dataNascimento;
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
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(idade) {
        this._dataNascimento = idade;
    }
}
