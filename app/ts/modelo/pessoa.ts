class Pessoa {
    protected nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;

    }

    
    getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }
    
    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        this._idade = idade;
    }

    getdataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(novaData: Date) {
        this._dataNascimento = novaData;
    }

}