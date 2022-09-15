class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome + " - Física", idade, dataNascimento);
        this.cpf = cpf;
        this.cpf = cpf;
    }
    getCpf() {
        return this.cpf;
    }
}
