interface CalcularArea {
    calcularArea(): number
}

class Retangulo implements CalcularArea {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
    calcularArea() {
        return this.base * this.altura
    }
}

class Triangulo implements CalcularArea {
    base: number
    altura: number

    constructor(base: number, altura: number) {
        this.base = base
        this.altura = altura
    }
    calcularArea() {
        return (this.base * this.altura) / 2
    }
}

const retangulo: Retangulo = new Retangulo(2, 4)
const triangulo: Triangulo = new Triangulo(24, 9)
console.log(retangulo.calcularArea());
console.log(triangulo.calcularArea());