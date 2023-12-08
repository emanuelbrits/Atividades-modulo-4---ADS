class Produto {
    nome: string
    preco: number

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }

    AplicarDesconto(): void {
        if (this.nome == "Geladeira") {
            this.preco = this.preco * 0.8;
        } else if (this.nome == "Fogao") {
            this.preco = this.preco * 0.75;
        }
    }
}

const geladeira = new Produto("Geladeira", 1000)
const fogao = new Produto("Fogao", 1000)
console.log("antes do desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);
geladeira.AplicarDesconto()
fogao.AplicarDesconto()
console.log("após o desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);
