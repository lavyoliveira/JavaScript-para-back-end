const cliente = {
    nome: 'André',
    idade: '23',
    cpf: '2112123123',
    email: 'sdsadasd@gmail.com',
    fones: ['443532432434', '55234324234'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/10/2014'
    },
    {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNasc: '20/10/2000',
    },],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);

cliente.depositar(30);
console.log(cliente.saldo);