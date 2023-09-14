class Cliente { 
    private id: Number; 
    private nome: string; 
    private endereco: string; 

    constructor(id: number, nome: string, endereco: string) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
    }

    public exibirInformacoes(): void { 
        console.log(`ID: ${this.id}\nNome: ${this.nome}\nEndereço: ${this.endereco}`);
    }  
} 

class Conta {
    private numeroConta: string;  
    private id_cliente: number;
    private saldo: number;
    public compras: Compra[] = []; 

    constructor(nc: string, idc: number, s: number) {
        this.numeroConta = nc;
        this.id_cliente = idc;
        this.saldo = s;
    }

    public atualizarSaldo(valor: number): void {
        this.saldo += valor;
    } 

    public realizarCompra(valor: number): void { 
        if(valor > this.saldo) {
            console.log('Saldo insuficente');
        } else {
            let compra = new Compra(valor, this.numeroConta)
            this.compras.push(compra)
        }
    }
}

class Compra {
    private valorCompra: number; 
    private numeroConta: string;

    constructor(vc: number, nc: string) {
        this.valorCompra = vc;
        this.numeroConta = nc;
    }
}
    