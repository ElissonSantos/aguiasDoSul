import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UnidadeSchema } from '../../shared/models/unidade.model';
import { DesbravadorController } from './unidades.controller';
import { DesbravadorService } from './desbravador.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Unidade', schema: UnidadeSchema }]),
  ],
  controllers: [DesbravadorController],
  providers: [DesbravadorService],
})
export class UnidadesModule {}
