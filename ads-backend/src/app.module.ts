import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UnidadesModule } from './components/unidades/unidades.module';

@Module({
  imports: [
    UnidadesModule,
    MongooseModule.forRoot(
      'mongodb+srv://elissonsantos:0zGZyNSh782iWIW7@elissonsantos-mphyr.gcp.mongodb.net/aguias-do-sul?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
