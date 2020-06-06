import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RequestSchema } from '../../shared/models/request.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { DesbravadorService } from '../desbravador/desbravador.service';
import { DesbravadorSchema } from 'src/shared/models/desbravador.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Request', schema: RequestSchema }]),
    MongooseModule.forFeature([
      { name: 'Desbravador', schema: DesbravadorSchema },
    ]),
  ],
  controllers: [LoginController],
  providers: [LoginService, DesbravadorService],
})
export class LoginModule {}
