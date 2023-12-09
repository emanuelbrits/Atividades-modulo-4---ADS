var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto) {
        this.nome = nomeProduto || '';
        this.preco = precoProduto;
    }
    Produto.prototype.getNome = function () {
        return (this.nome);
    };
    Produto.prototype.getPreco = function () {
        return (this.preco);
    };
    return Produto;
}());
var ProdutoRepository = /** @class */ (function () {
    function ProdutoRepository() {
        this.produtos = [];
    }
    ProdutoRepository.prototype.save = function (produto) {
        this.produtos.push(produto);
    };
    ProdutoRepository.prototype.getProdutos = function () {
        return this.produtos;
    };
    return ProdutoRepository;
}());
var produto = new Produto('Carne', 19.99);
var produtoRepository = new ProdutoRepository();
produtoRepository.save(produto);
var produtoObtido = console.log(produtoRepository.getProdutos());
