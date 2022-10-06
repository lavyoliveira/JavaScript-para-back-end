class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

const lavy = new Cliente('Lavy', 'lavy@email.com', '233454345', 500);

lavy.exibirSaldo();

console.log(lavy);