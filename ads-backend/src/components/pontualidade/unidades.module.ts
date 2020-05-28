import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UnidadeSchema } from '../../shared/models/unidade.model';
import { UnidadesController } from './unidades.controller';
import { UnidadesService } from './unidades.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Unidade', schema: UnidadeSchema }]),
  ],
  controllers: [UnidadesController],
  providers: [UnidadesService],
})
export class UnidadesModule {}
