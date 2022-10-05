const clientes = [
    {
        nome: 'André',
        cpf: '2112123123',
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
    },
    {
        nome: 'Juliana',
        cpf: '23453434545',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/10/2000'
        },],
    },
];

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);