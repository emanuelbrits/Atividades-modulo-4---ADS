class CartaoDeCredito {
    saldo: number = 0

    pagar(preco: number): boolean {
        this.saldo -= preco
        return true;
    }
}

class CartaoDeDedito {
    saldo: number = 0

    pagar(preco: number): boolean {
        this.saldo -= preco
        return true;
    }
}

class Cliente {
    formaDePagamento: CartaoDeCredito = new CartaoDeCredito();
}

const cliente: Cliente = new Cliente();
cliente.formaDePagamento.pagar(100);
