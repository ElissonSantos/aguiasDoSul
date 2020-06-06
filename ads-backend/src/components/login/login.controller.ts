import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Logger,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { Request } from 'src/shared/models/request.model';

@Controller('login')
export class LoginController {
  logger: Logger;

  constructor(private readonly loginService: LoginService) {
    this.logger = new Logger('LOGIN CONTROLLER');
  }

  @Post()
  insertRequest(@Body('user') user, @Response() res) {
    this.logger.log('Metodo POST');
    this.loginService
      .save(user)
      .then(user => {
        res.status(HttpStatus.CREATED).send(user);
      })
      .catch(err => {
        res
          .status(HttpStatus.BAD_REQUEST)
          .send(`Nao foi possivel salvar. Detalhes: ${err}`);
      });
  }

  @Delete(':id')
  deleteRequest(@Param() params, @Response() res) {
    this.logger.log('Metodo DELETE');
    this.loginService
      .delete(params.id)
      .then(() => {
        res.status(HttpStatus.OK).send();
      })
      .catch(err => {
        res
          .status(HttpStatus.BAD_REQUEST)
          .send(`Nao foi possivel excluir. Detalhes: ${err}`);
      });
  }

  @Get('signin')
  logar(@Body('user') user, @Response() res): any {
    this.logger.log('Metodo GET Logar');
    this.loginService
      .logar(user)
      .then(user => {
        res.status(HttpStatus.OK).send(user);
      })
      .catch(err => {
        res
          .status(HttpStatus.BAD_REQUEST)
          .send(`Usuario não encontrado. Detalhes: ${err}`);
      });
  }

  @Get(':id')
  getRequest(@Param() params, @Response() res): any {
    this.logger.log('Metodo GET Request');
    return this.loginService
      .getRequest(params.id)
      .then((request: Request) => {
        res.status(HttpStatus.OK).send(request);
      })
      .catch(err => {
        res
          .status(HttpStatus.BAD_REQUEST)
          .send(`Nao foi possivel procurar esta unidade. Detalhes: ${err}`);
      });
  }

  @Get()
  getAllRequest(@Response() res): any {
    this.logger.log('Metodo GET All Request');
    return this.loginService
      .getRequest()
      .then((requests: Request[]) => {
        res.status(HttpStatus.OK).send(requests);
      })
      .catch(err => {
        res
          .status(HttpStatus.BAD_REQUEST)
          .send(`Nao foi possivel procurar as unidades. Detalhes: ${err}`);
      });
  }
}
