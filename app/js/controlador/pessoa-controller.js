class PessoaController {
    constructor() {
        this.repositorioPessoas = new RepositorioPessoas;
    }
    adicionarPessoaFisica(pessoa) {
        this.repositorioPessoas.adicionar(pessoa);
    }
    adicionarPessoaJuridica(pessoa) {
        this.repositorioPessoas.adicionar(pessoa);
    }
    listar() {
        this.repositorioPessoas.getPessoas().forEach((pessoa) => this.inserirPessoaNoHTML(pessoa));
    }
    inserir(evento) {
        evento.preventDefault();
        const elementoNome = document.querySelector('#nome');
        const elementoIdade = document.querySelector('#idade');
        const elementoDataNascimento = document.querySelector('#dataNascimento');
        const elementoCPF = document.querySelector('#cpf');
        const pessoa = new PessoaFisica(elementoNome.value, Number(elementoIdade.value), new Date(elementoDataNascimento.value), elementoCPF.value);
        this.repositorioPessoas.adicionar(pessoa);
        this.inserirPessoaNoHTML(pessoa);
    }
    //
    inserirPessoaNoHTML(pessoa) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Nome ' + pessoa.getNome + ', Idade: ' + pessoa.idade + ', Data de Nascimento: ' + pessoa.dataNascimento;
        +', CPF: ' + pessoa.cpf;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        /*botaoApagar.addEventListener('click', (event) => {this.repositorioPessoas.remover(pessoa.cpf);
            (<Element>event.target).parentElement.remove();});*/
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
