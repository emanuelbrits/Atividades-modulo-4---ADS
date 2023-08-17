import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { ProdutoDto } from './produto.dto';
import { Produto } from './produto';
import { validate } from 'class-validator';

@Injectable()
export class AppService {


	produtos: Produto[] = []

	ultimoId: number = this.produtos.length + 1

	async adicionarProduto(p: ProdutoDto) {
		const errors = await validate(p);

		if (errors.length > 0) {
		throw new Error('Erro de validação');
		}

		const id: number = this.ultimoId

		const produto: Produto = {
			id, ...p
		}
		
		this.produtos.push(produto)
		this.ultimoId++
	}

	obterProdutos() {
		return this.produtos
	}

	removerProduto(id: number) {
		let indexProcurado = this.produtos.findIndex(prod => prod.id === id)

		if(indexProcurado !== -1){
			this.produtos.splice(indexProcurado, 1)
		}
	}
}
