const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Juliana', 'Ana', 'Fabiana', 'Juliana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Andre', 'Carlos', 'Renan', 'Vivian', 'Isabela'];

const sala1 = nomes.slice(0, nomes.length / 2);
const sala2 = nomes.slice(nomes.length / 2);

console.log(`Alunos da sala 1': ${sala1}`);
console.log(`Alunos da sala 2': ${sala2}`);