var BancoDeDados = /** @class */ (function () {
    function BancoDeDados() {
        this.dados = new Map();
    }
    BancoDeDados.prototype.salvar = function (chave, valor) {
        this.dados.set(chave, valor);
    };
    BancoDeDados.prototype.recuperar = function (chave) {
        return this.dados.get(chave);
    };
    return BancoDeDados;
}());
var Pedido = /** @class */ (function () {
    function Pedido(armazenamento) {
        this.armazenamento = armazenamento;
    }
    Pedido.prototype.adicionarItem = function (item) {
        this.armazenamento.salvar('item', item);
    };
    Pedido.prototype.verificarStatus = function () {
        var item = this.armazenamento.recuperar('item');
        return "Status do pedido: ".concat(item);
    };
    return Pedido;
}());
// Uso das classes
var bancoDeDados = new BancoDeDados();
var pedido = new Pedido(bancoDeDados);
pedido.adicionarItem('Produto A');
console.log(pedido.verificarStatus());
