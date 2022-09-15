class PessoaFisica extends Pessoa {

    constructor(nome: string, idade: number, dataNascimento: Date, readonly cpf: string) {
        super(nome + " - Física", idade, dataNascimento)
        this.cpf = cpf;
               
    }

    getCpf(): string {
        return this.cpf;
    }

}