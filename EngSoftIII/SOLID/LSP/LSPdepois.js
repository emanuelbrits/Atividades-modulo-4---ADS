var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto) {
        this.nome = nomeProduto;
        this.preco = precoProduto;
    }
    return Produto;
}());
var Geladeira = /** @class */ (function (_super) {
    __extends(Geladeira, _super);
    function Geladeira(nomeProduto, precoProduto) {
        return _super.call(this, nomeProduto, precoProduto) || this;
    }
    Geladeira.prototype.AplicarDesconto = function () {
        this.preco = this.preco * 0.8;
    };
    Geladeira.prototype.ObterCaracteristicaProduto = function () {
        return this.nome;
    };
    return Geladeira;
}(Produto));
var Fogao = /** @class */ (function (_super) {
    __extends(Fogao, _super);
    function Fogao(nomeProduto, precoProduto) {
        return _super.call(this, nomeProduto, precoProduto) || this;
    }
    Fogao.prototype.AplicarDesconto = function () {
        this.preco = this.preco * 0.75;
    };
    Fogao.prototype.ObterCaracteristicaProduto = function () {
        return this.nome;
    };
    return Fogao;
}(Produto));
var geladeira = new Geladeira("geladeira", 1000);
var fogao = new Fogao("fogão", 1000);
console.log(geladeira.ObterCaracteristicaProduto());
console.log(fogao.ObterCaracteristicaProduto());
