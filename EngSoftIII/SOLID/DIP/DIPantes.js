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
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.formaDePagamento = new CartaoDeCredito();
    }
    return Cliente;
}());
var cliente = new Cliente();
cliente.formaDePagamento.pagar(100);
