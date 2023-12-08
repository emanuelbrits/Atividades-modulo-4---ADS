import { ConnectionPool, Request } from 'mssql';

class ProdutoRepository {
    private connection: ConnectionPool;

    constructor(connection: ConnectionPool) {
        this.connection = connection;
    }

    async save(): Promise<void> {
    }

    async getProduct(): Promise<Produto | null> {
        return null;
    }
}

class Produto {
    Nome: string;
    Preco: number;

    constructor(nome: string, preco: number) {
        this.Nome = nome;
        this.Preco = preco;
    }
}
