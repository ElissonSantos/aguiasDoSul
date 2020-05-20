import { Controller, Get, Post, Body } from '@nestjs/common';
import { UnidadesService } from './unidades.service';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Post()
  insertUnidade(@Body('unidade') unidade) {
    console.log(unidade);
    this.unidadesService
      .inserir(unidade.name)
      .then(() => {
        return 'Salvou';
      })
      .catch(err => {
        return 'Nao foi possivel salver. Detalhes: ' + err;
      });
  }

  @Get()
  getHello(): any {
    return this.unidadesService.getUnidades();
  }
}
