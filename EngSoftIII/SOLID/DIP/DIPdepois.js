var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito() {
        this.saldo = 0;
    }
    CartaoDeCredito.prototype.pagar = function (preco) {
        this.saldo -= preco;
        return true;
    };
    return CartaoDeCredito;
}());
var CartaoDeDebito = /** @class */ (function () {
    function CartaoDeDebito() {
        this.saldo = 0;
    }
    CartaoDeDebito.prototype.pagar = function (preco) {
        this.saldo -= preco;
        return true;
    };
    return CartaoDeDebito;
}());
var Dinheiro = /** @class */ (function () {
    function Dinheiro() {
        this.saldo = 0;
    }
    Dinheiro.prototype.pagar = function (preco) {
        this.saldo -= preco;
        return true;
    };
    return Dinheiro;
}());
var Cliente = /** @class */ (function () {
    function Cliente(metodoDePagamento) {
        this.metodoDePagamento = metodoDePagamento;
    }
    return Cliente;
}());
// Chamando
var cartaoDeCredito = new CartaoDeCredito();
var cliente = new Cliente(cartaoDeCredito);
cliente.metodoDePagamento.pagar(100);
var dinheiro = new Dinheiro();
var cliente2 = new Cliente(dinheiro);
cliente2.metodoDePagamento.pagar(100);
