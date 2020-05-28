import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { DesbravadorService } from './desbravador.service';
import { Unidade } from 'src/shared/models/unidade.model';

@Controller('desbravador')
export class DesbravadorController {
  constructor(private readonly desbravadorService: DesbravadorService) {}

  @Post()
  insertUnidade(@Body('unidade') unidade) {
    this.desbravadorService
      .save(unidade)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel salver. Detalhes: ' + err;
      });
  }

  @Put()
  updateUnidade(@Body('unidade') unidade) {
    this.desbravadorService
      .save(unidade)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel atualizar. Detalhes: ' + err;
      });
  }

  @Delete()
  deleteUnidade(@Body('id') id) {
    this.desbravadorService
      .delete(id)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel excluir. Detalhes: ' + err;
      });
  }

  @Get(':id')
  getUnidade(@Param() params): any {
    return this.desbravadorService
      .getUnidades(params.id)
      .then((unidade: Unidade) => {
        return unidade;
      })
      .catch(err => {
        return 'Nao foi possivel procurar esta unidade. Detalhes: ' + err;
      });
  }

  @Get()
  getUnidades(): any {
    return this.desbravadorService
      .getUnidades()
      .then((unidades: Unidade[]) => {
        return unidades;
      })
      .catch(err => {
        return 'Nao foi possivel procurar as unidades. Detalhes: ' + err;
      });
  }
}
