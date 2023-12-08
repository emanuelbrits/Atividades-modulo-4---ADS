interface CalcularArea {
    calcularAreaRetangulo(): number | void
    calcularAreaTriangulo(): number | void
}

class Retangulo implements CalcularArea {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
    calcularAreaRetangulo() {
        return this.base * this.altura
    }
    calcularAreaTriangulo() {}
}

class Triangulo implements CalcularArea {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
    calcularAreaRetangulo() {}
    calcularAreaTriangulo() {
        return (this.base * this.altura) / 2
    }
}

const retangulo: Retangulo = new Retangulo(2, 4)
const triangulo: Triangulo = new Triangulo(24, 9)
console.log(retangulo.calcularAreaRetangulo());
console.log(triangulo.calcularAreaTriangulo());
