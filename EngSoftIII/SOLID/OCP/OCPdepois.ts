class Produto {
    nome: string
    preco: number

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }
}

class Geladeira extends Produto {
    constructor(nomeProduto: string, precoProduto: number) {
        super(nomeProduto, precoProduto)
    }

    AplicarDesconto(): void {
        this.preco = this.preco * 0.8;
    }
}

class Fogao extends Produto {
    constructor(nomeProduto: string, precoProduto: number) {
        super(nomeProduto, precoProduto)
    }

    AplicarDesconto(): void {
        this.preco = this.preco * 0.75;
    }
}

const geladeira = new Geladeira("geladeira", 1000)
const fogao = new Fogao("fogão", 1000)
console.log("antes do desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);
geladeira.AplicarDesconto()
fogao.AplicarDesconto()
console.log("após o desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);

