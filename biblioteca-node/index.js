import fs from "fs";
import chalk from "chalk";

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

async function pegaArquivo(caminho) {
  try {
    const encode = "utf-8";
    const texto = await fs.promises.readFile(caminho, encode);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivo("./arquivos/texto.md");
// pegaArquivo("./arquivos/");

// \[[^[\]]*?\]