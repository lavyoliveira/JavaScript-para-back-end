const cliente = {
    nome: 'André',
    idade: '23',
    cpf: '2112123123',
    email: 'sdsadasd@gmail.com',
    fones: ['443532432434', '55234324234'],
    dependentes: [{
        nome: 'Sara Silva',
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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro para: ${obj.nome}`);
    }
}

console.log(Object.entries(cliente));
console.log(Object.values(cliente));
oferecerSeguro(cliente);