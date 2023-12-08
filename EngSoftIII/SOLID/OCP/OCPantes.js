var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }
    Produto.prototype.AplicarDesconto = function () {
        if (this.nome == "Geladeira") {
            this.preco = this.preco * 0.8;
        }
        else if (this.nome == "Fogao") {
            this.preco = this.preco * 0.75;
        }
    };
    return Produto;
}());
var geladeira = new Produto("Geladeira", 1000);
var fogao = new Produto("Fogao", 1000);
console.log("antes do desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);
geladeira.AplicarDesconto();
fogao.AplicarDesconto();
console.log("após o desconto:");
console.log(geladeira.preco);
console.log(fogao.preco);
