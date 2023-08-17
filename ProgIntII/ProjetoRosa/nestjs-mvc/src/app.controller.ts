import { Controller, Get, Query, Render, Post, Res, Body, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutoDto } from './produto.dto';
import { Response } from 'express';
import { Produto } from './produto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('produtos')
  @Render('produtos')
  obterProdutos() {
    const produtos: Produto[] = this.appService.obterProdutos();
    return {produtos};
  }

  @Get('adicionar')
  @Render('form-produto')
  formulario() {
    return {}
  }

  @Post('form-Produto')
  adicionarProduto(@Res() res: Response, @Body() np: ProdutoDto) {
    this.appService.adicionarProduto(np);
    res.redirect(`/produtos`);
  }

  @Delete('produtos')
  removerProduto(@Res() res: Response, @Query() id: number) {
    this.appService.removerProduto(id);
    res.redirect(`/produtos`)
  }


}
