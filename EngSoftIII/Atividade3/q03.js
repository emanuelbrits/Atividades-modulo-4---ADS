var Cliente = /** @class */ (function () {
    function Cliente(id, nome, endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }
    Cliente.prototype.exibirInformacoes = function () {
        console.log("ID: ".concat(this.id, "\nNome: ").concat(this.nome, "\nEndere\u00E7o: ").concat(this.endereco));
    };
    return Cliente;
}());
var Conta = /** @class */ (function () {
    function Conta(nc, idc, s) {
        this.compras = [];
        this.numeroConta = nc;
        this.id_cliente = idc;
        this.saldo = s;
    }
    Conta.prototype.atualizarSaldo = function (valor) {
        this.saldo += valor;
    };
    Conta.prototype.realizarCompra = function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficente');
        }
        else {
            var compra = new Compra(valor, this.numeroConta);
            this.compras.push(compra);
        }
    };
    return Conta;
}());
var Compra = /** @class */ (function () {
    function Compra(vc, nc) {
        this.valorCompra = vc;
        this.numeroConta = nc;
    }
    return Compra;
}());
var cli = new Cliente(1, 'Emanuel', 'casa');
var con = new Conta('1', 1, 15);
con.realizarCompra(10);
console.log(con.compras);
