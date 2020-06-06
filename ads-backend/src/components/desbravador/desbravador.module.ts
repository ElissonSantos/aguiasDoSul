import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DesbravadorSchema } from '../../shared/models/desbravador.model';
import { DesbravadorController } from './desbravador.controller';
import { DesbravadorService } from './desbravador.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Desbravador', schema: DesbravadorSchema },
    ]),
  ],
  controllers: [DesbravadorController],
  providers: [DesbravadorService],
})
export class DesbravadorModule {}
