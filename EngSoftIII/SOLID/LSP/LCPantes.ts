class Produto {
    nome: string
    preco: number

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }

    ObterCaracteristicaProduto(produto: Produto) {
        if (produto instanceof Geladeira)
        return produto.ObterCaracteristicaGeladeira();
        if (produto instanceof Fogao)
        return produto.ObterCaracteristicaFogao();
        return null;
    }
}

class Geladeira extends Produto {
    constructor(nomeProduto: string, precoProduto: number) {
        super(nomeProduto, precoProduto)
    }

    AplicarDesconto(): void {
        this.preco = this.preco * 0.8;
    }

    ObterCaracteristicaGeladeira() {
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

    ObterCaracteristicaFogao() {
        return this.nome
    }
}

const geladeira = new Geladeira("geladeira", 1000)
const fogao = new Fogao("fogão", 1000)
console.log(geladeira.ObterCaracteristicaProduto(geladeira));
console.log(fogao.ObterCaracteristicaProduto(fogao));

