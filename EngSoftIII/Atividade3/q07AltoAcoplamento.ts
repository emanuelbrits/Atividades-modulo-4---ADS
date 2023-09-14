class BancoDeDados {
    private dados: Map<string, any> = new Map();
  
    public salvar(chave: string, valor: any): void {
      this.dados.set(chave, valor);
    }
  
    public recuperar(chave: string): any {
      return this.dados.get(chave);
    }
  }
  
  class Pedido {
    private bancoDeDados: BancoDeDados = new BancoDeDados();
  
    constructor() {}
  
    public adicionarItem(item: string): void {
      // Realiza uma ação relacionada ao banco de dados
      this.bancoDeDados.salvar('item', item);
    }
  
    public verificarStatus(): string {
      // Realiza outra ação relacionada ao banco de dados
      const item = this.bancoDeDados.recuperar('item');
      return `Status do pedido: ${item}`;
    }
  }
  
  // Uso das classes
  const pedido = new Pedido();
  pedido.adicionarItem('Produto A');
  console.log(pedido.verificarStatus());
  