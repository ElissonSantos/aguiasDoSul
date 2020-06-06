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
import { DesbravadorService } from './desbravador.service';
import { Desbravador } from 'src/shared/models/desbravador.model';

@Controller('desbravador')
export class DesbravadorController {
  logger: Logger;

  constructor(private readonly desbravadorService: DesbravadorService) {
    this.logger = new Logger('DESBRAVADOR CONTROLLER');
  }

  @Post()
  insertDesbravador(@Body('desbravador') desbravador) {
    this.logger.log('Metodo POST');
    return this.desbravadorService
      .save(desbravador)
      .then(desbravador => {
        return desbravador;
      })
      .catch(err => {
        return 'Nao foi possivel salvar. Detalhes: ' + err;
      });
  }

  @Put()
  updateDesbravador(@Body('desbravador') desbravador) {
    this.logger.log('Metodo PUT');
    return this.desbravadorService
      .save(desbravador)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel atualizar. Detalhes: ' + err;
      });
  }

  @Delete(':id')
  deleteDesbravador(@Param() params) {
    this.logger.log('Metodo DELETE');
    this.desbravadorService
      .delete(params.id)
      .then(() => {
        return;
      })
      .catch(err => {
        return 'Nao foi possivel excluir. Detalhes: ' + err;
      });
  }

  @Get(':id')
  getDesbravador(@Param() params): any {
    this.logger.log('Metodo GET Desbravador');
    return this.desbravadorService
      .getDesbravadores(params.id)
      .then((desbravador: Desbravador) => {
        return desbravador;
      })
      .catch(err => {
        return 'Nao foi possivel procurar esta unidade. Detalhes: ' + err;
      });
  }

  @Get()
  getDesbravadores(): any {
    this.logger.log('Metodo GET Desbravadores');
    return this.desbravadorService
      .getDesbravadores()
      .then((desbravador: Desbravador[]) => {
        return desbravador;
      })
      .catch(err => {
        return 'Nao foi possivel procurar as unidades. Detalhes: ' + err;
      });
  }
}
