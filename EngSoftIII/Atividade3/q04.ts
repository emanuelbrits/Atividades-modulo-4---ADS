class Utilitarios { 
    numeros: number[] = [4, 2, 67, 3, 4, 534]
    texto: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Null'
    palavras: string[]= []

    public ordenar(): void { 
        const n = this.numeros.length;
        let trocado: boolean;
      
        do {
          trocado = false;
      
          for (let i = 0; i < n - 1; i++) {
            if (this.numeros[i] > this.numeros[i + 1]) {
              const temp = this.numeros[i];
              this.numeros[i] = this.numeros[i + 1];
              this.numeros[i + 1] = temp;
              trocado = true;
            }
          }
        } while (trocado);
    } 
    public embaralhar(): void { 
        const num = this.numeros.slice();
        const n = num.length;

        for (let i = n - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [num[i], num[j]] = [num[j], num[i]];
        }

        this.numeros = num;
    } 
    public removerEspacos(): void { 
        let semEspaco: string = ''
        let palavras = this.quebrarEmPalavras()
        for(let palavra of palavras) {
            semEspaco+= palavra;
        }

        console.log(semEspaco);
        
    } 
    
    public quebrarEmPalavras(): string[] { 
        let palavras: string[] = this.texto.split(' ')
        return palavras
    } 

    public calcularMedia(): number { 
        let soma: number = 0

        for(let numero of this.numeros) {
            soma+= numero
        }

        let media: number = parseFloat((soma / this.numeros.length).toFixed(2))
        return media
    } 

    public calcularDesvioPadrão(): number {
        const n = this.numeros.length;

        const media = this.numeros.reduce((total, numero) => total + numero, 0) / n;
        const somaDosQuadradosDasDiferencas = this.numeros.reduce(
            (total, numero) => total + Math.pow(numero - media, 2),
            0
        );
        const desvioPadrao = Math.sqrt(somaDosQuadradosDasDiferencas / n);

        return parseFloat(desvioPadrao.toFixed(2));
    }
        
        
} 
    
let ut: Utilitarios = new Utilitarios()
console.log(ut.calcularDesvioPadrão());
