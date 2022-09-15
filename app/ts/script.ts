//const c1 = new Conta('1', 100);
//const c2 = new Conta('2');


/*console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());*/


const p1 = new PessoaFisica ('Sergio Lima', 35, new Date (17/7/1987), '01578264922');
const p2 = new PessoaFisica ('Julyana Alencar', 36, new Date (17/7/1987), '11246853124');

console.log(p1.getNome);
const pessoaController = new PessoaController();
pessoaController.adicionarPessoaFisica(p1);
pessoaController.adicionarPessoaFisica(p2);


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
