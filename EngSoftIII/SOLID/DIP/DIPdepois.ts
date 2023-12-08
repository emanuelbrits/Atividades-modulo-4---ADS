interface IDbConnection {
    // Adicione qualquer método ou propriedade necessária pela sua implementação
  }
  
  class ProdutoRepository {
    private connection: IDbConnection;
  
    constructor(connection: IDbConnection) {
      this.connection = connection;
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
  