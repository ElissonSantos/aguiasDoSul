import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Logger,
} from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { Unidade } from 'src/shared/models/unidade.model';

@Controller('unidades')
export class UnidadesController {
  logger: Logger;

  constructor(private readonly unidadesService: UnidadesService) {
    this.logger = new Logger('UNIDADES CONTROLLER');
  }

  @Post()
  insertUnidade(@Body('unidade') unidade) {
    this.logger.log('Metodo POST');
    this.unidadesService
      .save(unidade)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel salvar. Detalhes: ' + err;
      });
  }

  @Put()
  updateUnidade(@Body('unidade') unidade) {
    this.logger.log('Metodo PUT');
    this.unidadesService
      .save(unidade)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel atualizar. Detalhes: ' + err;
      });
  }

  @Delete(':id')
  deleteUnidade(@Param() params) {
    this.logger.log('Metodo DELETE');
    this.unidadesService
      .delete(params.id)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel excluir. Detalhes: ' + err;
      });
  }

  @Get(':id')
  getUnidade(@Param() params): any {
    this.logger.log('Metodo GET Unidade');
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
    this.logger.log('Metodo GET Unidades');
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
