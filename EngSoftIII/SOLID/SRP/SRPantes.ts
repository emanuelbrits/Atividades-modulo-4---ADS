class Produto {
    nome: string;
    preco: number;

    constructor(nomeProduto: string, precoProduto: number) {
        this.nome = nomeProduto || '';
        this.preco = precoProduto;
    }

    getProduto(): Produto {
        return (this)
    }

    save(repositorio: ProdutoRepository): void {
        repositorio.produtos.push(this)
    }
}

class ProdutoRepository {
    produtos: Produto[] = []
}

const produto = new Produto('Carne', 19.99);
const produtoRepository = new ProdutoRepository();
produto.save(produtoRepository);

const produtoObtido = console.log(produtoRepository.produtos);
