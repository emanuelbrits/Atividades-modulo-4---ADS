export class Produto {
    id: number;
	nome: string;
	status: string;
	destinacao: string;
	TaxaRentabilidadeAA: number;
	prazo: number;
	TaxaAdministracao: number

	constructor(i: number, n: string, s: string, d: string, traa: number, p: number, ta: number) {
		this.id - i;
        this.nome = n;
		this.status = s;
		this.destinacao = d;
		this.TaxaRentabilidadeAA = traa;
		this.prazo = p;
		this.TaxaAdministracao = ta;
	}
}