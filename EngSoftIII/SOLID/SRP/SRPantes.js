var ProdutoRepository = /** @class */ (function () {
    function ProdutoRepository() {
        this.produtos = [];
    }
    return ProdutoRepository;
}());
var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto) {
        this.nome = nomeProduto || '';
        this.preco = precoProduto;
    }
    Produto.prototype.save = function (repositorio) {
        repositorio.produtos.push(this);
    };
    Produto.prototype.getProduto = function () {
        return (this);
    };
    return Produto;
}());
var produto = new Produto('Carne', 19.99);
var produtoRepository = new ProdutoRepository();
produto.save(produtoRepository);
var produtoObtido = console.log(produtoRepository.produtos);
