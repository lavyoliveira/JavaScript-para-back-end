import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto){
  const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[0]]: captura[0]}))
  return resultados;
}

function trataErro(erro) {
  console.log(erro);
  throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

async function pegaArquivo(caminho) {
  try {
    const encode = "utf-8";
    const texto = await fs.promises.readFile(caminho, encode);
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivo("./arquivos/texto.md");
