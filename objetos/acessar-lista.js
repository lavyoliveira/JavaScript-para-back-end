const cliente = {
    nome: 'André',
    idade: '23',
    cpf: '2112123123',
    email: 'sdsadasd@gmail.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email'];

// console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));