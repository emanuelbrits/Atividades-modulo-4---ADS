var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularAreaRetangulo = function () {
        return this.base * this.altura;
    };
    Retangulo.prototype.calcularAreaTriangulo = function () { };
    return Retangulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Triangulo.prototype.calcularAreaRetangulo = function () { };
    Triangulo.prototype.calcularAreaTriangulo = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}());
var retangulo = new Retangulo(2, 4);
var triangulo = new Triangulo(24, 9);
console.log(retangulo.calcularAreaRetangulo());
console.log(triangulo.calcularAreaTriangulo());
