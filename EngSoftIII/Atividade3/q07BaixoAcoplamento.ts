interface Armazenamento {
    salvar(chave: string, valor: any): void;
    recuperar(chave: string): any;
  }
  
  class BancoDeDados implements Armazenamento {
    private dados: Map<string, any> = new Map();
  
    public salvar(chave: string, valor: any): void {
      this.dados.set(chave, valor);
    }
  
    public recuperar(chave: string): any {
      return this.dados.get(chave);
    }
  }
  
  class Pedido {
    private armazenamento: Armazenamento;
  
    constructor(armazenamento: Armazenamento) {
      this.armazenamento = armazenamento;
    }
  
    public adicionarItem(item: string): void {
      this.armazenamento.salvar('item', item);
    }
  
    public verificarStatus(): string {
      const item = this.armazenamento.recuperar('item');
      return `Status do pedido: ${item}`;
    }
  }
  
  // Uso das classes
  const bancoDeDados = new BancoDeDados();
  const pedido = new Pedido(bancoDeDados);
  
  pedido.adicionarItem('Produto A');
  console.log(pedido.verificarStatus());
  