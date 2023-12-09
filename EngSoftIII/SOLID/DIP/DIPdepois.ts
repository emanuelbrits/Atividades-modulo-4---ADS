interface IMetodoDePagamento {
  pagar(preco: number): boolean;
}

class CartaoDeCredito implements IMetodoDePagamento {
  saldo: number = 0

  pagar(preco: number): boolean {
    this.saldo -= preco
    return true;
  }
}

class CartaoDeDebito implements IMetodoDePagamento {
  saldo: number = 0

  pagar(preco: number): boolean {
    this.saldo -= preco
    return true;
  }
}

class Dinheiro implements IMetodoDePagamento {
  saldo: number = 0

  pagar(preco: number): boolean {
    this.saldo -= preco
    return true;
  }
}

interface ICliente {
  metodoDePagamento: IMetodoDePagamento;
}

class Cliente implements ICliente {
  metodoDePagamento: IMetodoDePagamento;

  constructor(metodoDePagamento: IMetodoDePagamento) {
    this.metodoDePagamento = metodoDePagamento;
  }
}

const cartaoDeCredito: IMetodoDePagamento = new CartaoDeCredito();
const cliente: ICliente = new Cliente(cartaoDeCredito);

cliente.metodoDePagamento.pagar(100);

const dinheiro: IMetodoDePagamento = new Dinheiro();
const cliente2: ICliente = new Cliente(dinheiro);

cliente2.metodoDePagamento.pagar(100);
