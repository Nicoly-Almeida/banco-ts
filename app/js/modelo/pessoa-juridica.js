class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome + " - Jurídica", idade, dataNascimento);
        this.cnpj = cnpj;
        this.cnpj = cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
}
