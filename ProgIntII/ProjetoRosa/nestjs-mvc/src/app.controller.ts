import { Controller, Get, Query, Render, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutoInput } from './produto.dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  hello(@Query('nome') nome = 'Perfume') {
    const context = {
      nome
    }

    return context
  }

  @Get('form-produto')
  @Render('produto')
  formProduto(@Query('produto') produto: string) {
    const produtos = this.appService.obterProdutos();
    const context = { produtos };
    return context;
  }

  @Post('adicionar-Produto')
  adicionarProduto(@Res() res: Response, @Body() input: ProdutoInput) {
    const produto = this.appService.adicionarProduto(input)
    res.redirect(`/form-produto?produto=${produto}`)
  }

}
