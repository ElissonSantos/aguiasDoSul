import { Module } from '@nestjs/common';
import { DiaDeClubeController } from './diaDeClube.controller';
import { DiaDeClubeService } from './diaDeClube.service';

@Module({
  imports: [],
  controllers: [DiaDeClubeController],
  providers: [DiaDeClubeService],
})
export class DiaDeClubeModule {}
