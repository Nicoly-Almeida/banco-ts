class PessoaJuridica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, readonly cnpj: string) {
        super(nome + " - Jurídica", idade, dataNascimento)
        this.cnpj = cnpj;

    }

    getCnpj(): string {
        return this.cnpj;
    }
}