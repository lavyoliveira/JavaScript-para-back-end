import fs from 'fs';
import chalk from 'chalk';

function pegaArquivo(caminho){
    const encode = 'utf-8';
    fs.readFile(caminho, encode, (_, texto) => {
        console.log(chalk.green(texto));
    })
}

pegaArquivo('./arquivos/texto.md');