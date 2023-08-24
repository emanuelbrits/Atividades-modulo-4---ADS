export class Conta {
    private numero: string
    private saldo: number

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    private validarValor(valor: number) : number{
        if(valor <= 0){
            throw new Error("Valor Inválido")
        } 
        
        return valor
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - this.validarValor(valor);
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + this.validarValor(valor);
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero );
    }

    get _saldo(): number {
        return this.saldo
    }

    get _numero(): string{
        return this.numero
    }
}

export class Poupanca extends Conta {
    private taxaJuros: number;
    
    constructor(numero: string, saldo: number, taxaJuros: number){
        super(numero, saldo)
        this.taxaJuros = taxaJuros
    }

    public renderJuros(): void {
        this.depositar( this._saldo * this.taxaJuros/100);
    }
    
    depositar(valor: number): void {
        super.depositar(valor)
    }

    sacar(valor: number): void {
        super.sacar(valor)
    }

    consultarSaldo(): number {
        return this.consultarSaldo()
    }

    transferencia(contaDestino: Poupanca, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    equals(conta: Poupanca): boolean {
        return (this._numero == conta._numero);
    }
}

export class ContaImposto extends Conta {
    private taxaDesconto: number;
    
    constructor(numero: string, saldo: number,taxaDeDesconto: number) {
    super(numero, saldo)
    this.taxaDesconto = taxaDeDesconto
    }
    
    debitar(valor: number): void {
        let total = valor + valor * (this.taxaDesconto/100)
        super.sacar(total)
    }
}

export class Banco {

    private contas: Conta[] = [];
    private poupancas: Poupanca[] = []
    private contasImposto: ContaImposto[] = []

    inserir(conta: Conta): void {
        try {
            this.consultar(conta)
        } catch (ContaInexistenteError) {
            this.contas.push(conta)
        }
    }

    inserirPoupanca(poupanca: Poupanca): void {
        try {
            this.consultarPoupanca(poupanca)
        } catch (ContaInexistenteError) {
            this.poupancas.push(poupanca)
        }
    }

    inserirImposto(imposto: ContaImposto): void {
        try {
            this.consultarImposto(imposto)
        } catch (ContaInexistenteError) {
            this.contasImposto.push(imposto)
        }
    }

    excluir(numero: string): void {
        for(let c of this.contas){
            if(numero == c._numero){
                this.contas.pop()
            }
        }
    }
    
    public consultar(Tconta: Conta): string {
        for(let conta of this.contas) {
            if(Tconta._numero === conta._numero) {
                return Tconta._numero
            }
            
            break
        }
    
    throw new Error("Conta não encontrada")
    }

    consultarPoupanca(Tpoupanca: Poupanca): string {
        for(let p of this.poupancas){
            if(Tpoupanca._numero == p._numero){
                return p._numero
            }
            
            break
        }

        throw new Error("Poupança não encontrada")
    }

    consultarImposto(Timposto: ContaImposto): string {
        for(let i of this.contasImposto){
            if(Timposto._numero == i._numero){
                return i._numero
            }
            
            break
        }

        throw new Error("Conta não encontrada")
    }

    consultarNumero(numero: string): Conta {
        for(let c of this.contas){
            if(numero == c._numero){
                return c
            }
            break
        }

        throw new Error("Conta não encontrada")
    }

    consultarNumeroPoupanca(numero: string): Poupanca {
        for(let p of this.poupancas){
            if(p._numero == numero){
                return p
            }
            break
        }

        throw new Error("Poupança não encontrada")
    }

    sacar(numero: string, valor: number): void {
        let contaprocurada = this.consultarNumero(numero)

        if(contaprocurada._saldo - valor < 0) {
            throw new Error("Saldo insuficiente.")
        }

        contaprocurada.sacar(valor)
            
    }

    depositar(numero: string, valor: number): void {
        let contaprocurada = this.consultarNumero(numero)
        contaprocurada.depositar(valor)
    }

    transfeir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        this.sacar(numeroOrigem, valor)
        this.depositar(numeroDestino, valor)
    }

    quantidadeContas(): number {
        return this.contas.length
    }

    dinheiroDepositado(): number {
        let soma: number = 0

        for(let conta of this.contas) {
            soma+= conta._saldo
        }

        return soma
    }

    mediaSaldo(): number{
        return this.dinheiroDepositado() / this.quantidadeContas()
    }

    renderJuros(numero: string): void {
        let poupancaProcurada = this.consultarNumeroPoupanca(numero)
        poupancaProcurada.renderJuros()
    }
}