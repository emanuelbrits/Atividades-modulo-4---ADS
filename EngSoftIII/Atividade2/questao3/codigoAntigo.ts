class Produto {
    private id: number
    private descricao: string
    private qtd_produtos: number
    private valor_unitario: number

    constructor(id: number, descricao: string, qtd_produtos: number, valor_unitario: number){
        this.id = id
        this.descricao =descricao
        this.qtd_produtos = qtd_produtos
        this.valor_unitario = valor_unitario
    }

    get _qtd():number {
        return this.qtd_produtos
    }

    get _id(): number {
        return this.id
    }

    public repor(qtd: number): void{
        this.qtd_produtos+= qtd
    }

    public darBaixa(qtd: number): void{
        this.qtd_produtos-= qtd
    }
}

class ProdutoPerecivel extends Produto {
    private dataVencimento: string

    constructor(id: number, descricao: string, qtd_produtos: number, valor_unitario: number, dataVencimento: string){
        super(id, descricao, qtd_produtos, valor_unitario)
        this.dataVencimento = dataVencimento
    }

    public repor(qtd: number): void {
        if(this.estaValido("22/10/2022")){
            super.repor(qtd)
        }else {
            console.log("Produto passou da data de validade!");
        }
    }

    public darBaixa(qtd: number): void {
        if(this.estaValido("23/10/2022")){
            super.darBaixa(qtd)
        }else {
            console.log("Produto passou da data de validade!");
        }
    }

    public estaValido(dtAtual: string): boolean{
        let dtVenc = this.dataVencimento.split("/").map(Number)
        let dtAtualn = dtAtual.split("/").map(Number)
        
        if((dtVenc[2] < dtAtualn[2]) || (dtVenc[1] < dtAtualn[1] && dtVenc[2] <= dtAtualn[2]) || (dtVenc[0] < dtAtualn[0] && dtVenc[1] <= dtAtualn[1] && dtVenc[2] <= dtAtualn[2])){
            return false
        } else {
            return true
        }
    }
}

class Estoque{
    public produtos: Produto[] = [] 

    public inserir(produto: Produto):void {
        if(!this.verificar(produto._id)){
            this.produtos.push(produto)
        } else {
            console.log("Produto já registrado")
        }
    }

    public excluir(id: number): void{
        for(let p of this.produtos){
            if(p._id == id){
                this.produtos.pop()
            }
        }
    }

    consultarId(id: number): Produto{
        let produtoProcurado !: Produto

        for (let p of this.produtos) {
            if (p._id == id) {
            produtoProcurado = p;
            break;
            }
        }
        return produtoProcurado;
    }

    verificar(id: number): boolean {
        if(this.consultarId(id) == null){
            return false
        } else {
            return true
        }
    }

    public repor(qtd: number, id: number): void{
        if(this.verificar(id)){
            this.consultarId(id).repor(qtd)
        } else {
            console.log("Produto não registrado!")
        }
    }

    public darBaixa(qtd: number, id: number): void{
        if(this.verificar(id)){
            this.consultarId(id).darBaixa(qtd)
        } else {
            console.log("Produto não registrado!")
        }
    }

    public produtosVencidos(dt: string): void{
        for(let p of this.produtos){
            if(p instanceof ProdutoPerecivel && p.estaValido(dt)){
                console.log(p)
            }
        }
    }
}

let p: Produto = new Produto(1,"Feijão", 3, 5)
let pp: ProdutoPerecivel = new ProdutoPerecivel(2, "Arroz", 4, 7, "23/10/2022")
let pp1: ProdutoPerecivel = new ProdutoPerecivel(3, "tomate", 8, 9, "21/10/2022")
let pp2: ProdutoPerecivel = new ProdutoPerecivel(4, "batata", 1, 4, "23/10/2022")
let e: Estoque = new Estoque()

e.inserir(p)
e.inserir(pp)
e.inserir(pp1)
e.inserir(pp2)
e.inserir(pp2)
e.produtosVencidos("22/10/2022")class Produto {
    private id: number
    private descricao: string
    private qtd_produtos: number
    private valor_unitario: number

    constructor(id: number, descricao: string, qtd_produtos: number, valor_unitario: number){
        this.id = id
        this.descricao =descricao
        this.qtd_produtos = qtd_produtos
        this.valor_unitario = valor_unitario
    }

    get _qtd():number {
        return this.qtd_produtos
    }

    get _id(): number {
        return this.id
    }

    public repor(qtd: number): void{
        this.qtd_produtos+= qtd
    }

    public darBaixa(qtd: number): void{
        this.qtd_produtos-= qtd
    }
}

class ProdutoPerecivel extends Produto {
    private dataVencimento: string

    constructor(id: number, descricao: string, qtd_produtos: number, valor_unitario: number, dataVencimento: string){
        super(id, descricao, qtd_produtos, valor_unitario)
        this.dataVencimento = dataVencimento
    }

    public repor(qtd: number): void {
        if(this.estaValido("22/10/2022")){
            super.repor(qtd)
        }else {
            console.log("Produto passou da data de validade!");
        }
    }

    public darBaixa(qtd: number): void {
        if(this.estaValido("23/10/2022")){
            super.darBaixa(qtd)
        }else {
            console.log("Produto passou da data de validade!");
        }
    }

    public estaValido(dtAtual: string): boolean{
        let dtVenc = this.dataVencimento.split("/").map(Number)
        let dtAtualn = dtAtual.split("/").map(Number)
        
        if((dtVenc[2] < dtAtualn[2]) || (dtVenc[1] < dtAtualn[1] && dtVenc[2] <= dtAtualn[2]) || (dtVenc[0] < dtAtualn[0] && dtVenc[1] <= dtAtualn[1] && dtVenc[2] <= dtAtualn[2])){
            return false
        } else {
            return true
        }
    }
}

class Estoque{
    public produtos: Produto[] = [] 

    public inserir(produto: Produto):void {
        if(!this.verificar(produto._id)){
            this.produtos.push(produto)
        } else {
            console.log("Produto já registrado")
        }
    }

    public excluir(id: number): void{
        for(let p of this.produtos){
            if(p._id == id){
                this.produtos.pop()
            }
        }
    }

    consultarId(id: number): Produto{
        let produtoProcurado !: Produto

        for (let p of this.produtos) {
            if (p._id == id) {
            produtoProcurado = p;
            break;
            }
        }
        return produtoProcurado;
    }

    verificar(id: number): boolean {
        if(this.consultarId(id) == null){
            return false
        } else {
            return true
        }
    }

    public repor(qtd: number, id: number): void{
        if(this.verificar(id)){
            this.consultarId(id).repor(qtd)
        } else {
            console.log("Produto não registrado!")
        }
    }

    public darBaixa(qtd: number, id: number): void{
        if(this.verificar(id)){
            this.consultarId(id).darBaixa(qtd)
        } else {
            console.log("Produto não registrado!")
        }
    }

    public produtosVencidos(dt: string): void{
        for(let p of this.produtos){
            if(p instanceof ProdutoPerecivel && p.estaValido(dt)){
                console.log(p)
            }
        }
    }
}

let p: Produto = new Produto(1,"Feijão", 3, 5)
let pp: ProdutoPerecivel = new ProdutoPerecivel(2, "Arroz", 4, 7, "23/10/2022")
let pp1: ProdutoPerecivel = new ProdutoPerecivel(3, "tomate", 8, 9, "21/10/2022")
let pp2: ProdutoPerecivel = new ProdutoPerecivel(4, "batata", 1, 4, "23/10/2022")
let e: Estoque = new Estoque()

e.inserir(p)
e.inserir(pp)
e.inserir(pp1)
e.inserir(pp2)
e.inserir(pp2)
e.produtosVencidos("22/10/2022")