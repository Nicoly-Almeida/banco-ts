class PessoaFisica extends Pessoa {
    cpf;
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this.cpf = cpf;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
