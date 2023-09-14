var Utilitarios = /** @class */ (function () {
    function Utilitarios() {
        this.numeros = [4, 2, 67, 3, 4, 534];
        this.texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Null';
        this.palavras = [];
    }
    Utilitarios.prototype.ordenar = function () {
        var n = this.numeros.length;
        var trocado;
        do {
            trocado = false;
            for (var i = 0; i < n - 1; i++) {
                if (this.numeros[i] > this.numeros[i + 1]) {
                    var temp = this.numeros[i];
                    this.numeros[i] = this.numeros[i + 1];
                    this.numeros[i + 1] = temp;
                    trocado = true;
                }
            }
        } while (trocado);
    };
    Utilitarios.prototype.embaralhar = function () {
        var _a;
        var num = this.numeros.slice();
        var n = num.length;
        for (var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [num[j], num[i]], num[i] = _a[0], num[j] = _a[1];
        }
        this.numeros = num;
    };
    Utilitarios.prototype.removerEspacos = function () {
        var semEspaco = '';
        var palavras = this.quebrarEmPalavras();
        for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
            var palavra = palavras_1[_i];
            semEspaco += palavra;
        }
        console.log(semEspaco);
    };
    Utilitarios.prototype.quebrarEmPalavras = function () {
        var palavras = this.texto.split(' ');
        return palavras;
    };
    Utilitarios.prototype.calcularMedia = function () {
        var soma = 0;
        for (var _i = 0, _a = this.numeros; _i < _a.length; _i++) {
            var numero = _a[_i];
            soma += numero;
        }
        var media = parseFloat((soma / this.numeros.length).toFixed(2));
        return media;
    };
    Utilitarios.prototype.calcularDesvioPadrão = function () {
        var n = this.numeros.length;
        var media = this.numeros.reduce(function (total, numero) { return total + numero; }, 0) / n;
        var somaDosQuadradosDasDiferencas = this.numeros.reduce(function (total, numero) { return total + Math.pow(numero - media, 2); }, 0);
        var desvioPadrao = Math.sqrt(somaDosQuadradosDasDiferencas / n);
        return parseFloat(desvioPadrao.toFixed(2));
    };
    return Utilitarios;
}());
var ut = new Utilitarios();
console.log(ut.calcularDesvioPadrão());
