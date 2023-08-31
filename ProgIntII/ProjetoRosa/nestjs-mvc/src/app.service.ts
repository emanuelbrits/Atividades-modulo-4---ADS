import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { ProdutoDto } from './produto.dto';
import { Produto, ProdutoStatus } from './produto';
import { validate } from 'class-validator';
import { ulid } from 'ulidx';

@Injectable()
export class AppService {


	produtos: Produto[] = []

	public async adicionarProduto(input: ProdutoDto) {
		const produto: Produto = {
			...input,
			id: ulid(),
			status: ProdutoStatus.DISPONIVEL
		}
		
		this.produtos.push(produto)
	}

	obterProdutos() {
		return this.produtos
	}

	obterId(id: string): Produto | undefined {
		const produto = this.produtos.find((p) => p.id === id)
		return produto
	}

	alternarStatus(idProduto: string) {
		const produto = this.obterId(idProduto);

		if(!produto) return;

		if(produto.status === ProdutoStatus.DISPONIVEL) {
			produto.status = ProdutoStatus.INDISPONIVEL
		} else {
			produto.status =ProdutoStatus.DISPONIVEL
		}
	}

	removerProduto(idProduto: string) {
		const index = this.produtos.findIndex((p) => p.id === idProduto)

		if(index === -1) return 

		this.produtos.splice(index, 1)
	}
}
