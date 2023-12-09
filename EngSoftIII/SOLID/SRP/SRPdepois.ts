class Produto {
    private nome: string;
    private preco: number;

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto || '';
        this.preco = precoProduto;
    }

    getNome(): string {
        return (this.nome)
    }

    getPreco(): number {
        return (this.preco)
    }
}

class ProdutoRepository
{
    produtos: Produto[] = []

    save(produto: Produto): void {
        this.produtos.push(produto)
    }

    getProdutos(): Produto[] {
        return this.produtos
    }
}

const produto = new Produto('Carne', 19.99);

const produtoRepository = new ProdutoRepository();
produtoRepository.save(produto);

const produtoObtido = console.log(produtoRepository.getProdutos());