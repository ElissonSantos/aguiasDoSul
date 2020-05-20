import { Module } from '@nestjs/common';
import { DiaDeClubeModule } from './components/diaDeClube/diaDeClube.module';
import { UnidadesModule } from './components/unidades/unidades.module';

@Module({
  imports: [DiaDeClubeModule, UnidadesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
