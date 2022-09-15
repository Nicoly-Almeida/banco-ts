class PessoaJuridica extends Pessoa {
    cnpj;
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this.cnpj = cnpj;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
}
