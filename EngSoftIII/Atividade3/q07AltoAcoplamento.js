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
    function Pedido() {
        this.bancoDeDados = new BancoDeDados();
    }
    Pedido.prototype.adicionarItem = function (item) {
        // Realiza uma ação relacionada ao banco de dados
        this.bancoDeDados.salvar('item', item);
    };
    Pedido.prototype.verificarStatus = function () {
        // Realiza outra ação relacionada ao banco de dados
        var item = this.bancoDeDados.recuperar('item');
        return "Status do pedido: ".concat(item);
    };
    return Pedido;
}());
// Uso das classes
var pedido = new Pedido();
pedido.adicionarItem('Produto A');
console.log(pedido.verificarStatus());
