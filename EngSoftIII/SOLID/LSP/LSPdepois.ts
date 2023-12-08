abstract class Produto {
    nome: string
    preco: number

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }

    abstract ObterCaracteristicaProduto(): string
}

class Geladeira extends Produto {
    constructor(nomeProduto: string, precoProduto: number) {
        super(nomeProduto, precoProduto)
    }

    AplicarDesconto(): void {
        this.preco = this.preco * 0.8;
    }

    ObterCaracteristicaProduto(): string {
        return this.nome
    }
}

class Fogao extends Produto {
    constructor(nomeProduto: string, precoProduto: number) {
        super(nomeProduto, precoProduto)
    }

    AplicarDesconto(): void {
        this.preco = this.preco * 0.75;
    }

    ObterCaracteristicaProduto(): string {
        return this.nome
    }
}

const geladeira = new Geladeira("geladeira", 1000)
const fogao = new Fogao("fogão", 1000)
console.log(geladeira.ObterCaracteristicaProduto());
console.log(fogao.ObterCaracteristicaProduto());

