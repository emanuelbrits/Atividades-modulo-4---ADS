import { Injectable } from '@nestjs/common';
import { error } from 'console';

export interface Produto {
	nome: string;
	status: boolean;
	destinacao: string;
	TaxaRentabilidadeAA: number;
	prazo: number;
	TaxaAdministracao: number
}

let produtos: Produto[]= []

@Injectable()
export class AppService {
	adicionarProduto(p: Produto) {
		if(this.validarProduto(p)) {
			produtos.push(p)
		} else {
			throw error
		}
	}

	validarNome(p: Produto) {
		if(p.nome.length > 0 && p.nome.length <= 32) {
			return true;
		} else {
			return false;
		}
	}

	validarDestinacao(p: Produto) {
		if(p.destinacao.length > 0 && p.destinacao.length <= 180) {
			return true;
		} else {
			return false;
		}
	}

	validarTaxaRentabilidadeAA(p: Produto) {
		if(Number.isInteger(p.TaxaRentabilidadeAA) && p.TaxaRentabilidadeAA > 0 && p.TaxaRentabilidadeAA <= 20) {
			return true
		} else {
			return false
		}
	}

	validarPrazo(p: Produto) {
		if(p.prazo >= 0 && p.prazo <= 48) {
			return true
		} else {
			return false
		}
	}

	validarTaxaAdministracao(p: Produto) {
		if(p.TaxaAdministracao > 0) {
			return true
		} else {
			return false
		}
	}

	validarProduto(p: Produto) {
		if(this.validarNome(p) && this.validarDestinacao(p) && this.validarTaxaRentabilidadeAA(p)
		&& this.validarPrazo(p) && this.validarTaxaAdministracao(p)) {
			return true
		} else {
			return false
		}
	}

	obterProdutos() {
		return produtos
	}
}
