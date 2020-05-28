import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidade } from 'src/shared/models/unidade.model';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Post()
  insertUnidade(@Body('unidade') unidade) {
    this.unidadesService
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
    this.unidadesService
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
    this.unidadesService
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
    return this.unidadesService
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
    return this.unidadesService
      .getUnidades()
      .then((unidades: Unidade[]) => {
        return unidades;
      })
      .catch(err => {
        return 'Nao foi possivel procurar as unidades. Detalhes: ' + err;
      });
  }
}
