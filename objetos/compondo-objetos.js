const cliente = {
    nome: 'André',
    idade: '23',
    cpf: '2112123123',
    email: 'sdsadasd@gmail.com',
    fones: ['443532432434', '55234324234'],
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/10/2014'
}

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);