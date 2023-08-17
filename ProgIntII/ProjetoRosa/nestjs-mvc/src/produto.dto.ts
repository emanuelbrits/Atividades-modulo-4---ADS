import { IsInt, IsNotEmpty, MaxLength, Min, Max } from 'class-validator'

export class ProdutoDto {

	id: number;
	
	@IsNotEmpty()
	@MaxLength(32)
    nome: string;

	@IsNotEmpty()
	status: string;

	@IsNotEmpty()
	@MaxLength(180)
	destinacao: string;

	@IsInt()
    @Min(1)
    @Max(20)
	TaxaRentabilidadeAA: number;

	@IsInt()
    @Min(0)
    @Max(48)
	prazo: number;

	@IsInt()
    @Min(0)
    @Max(100)
	TaxaAdministracao: number
}