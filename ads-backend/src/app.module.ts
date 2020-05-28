import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UnidadesModule } from './components/unidades/unidades.module';

@Module({
  imports: [
    UnidadesModule,
    MongooseModule.forRoot(
      'mongodb+srv://elissonsantos:cjy3mssGWdJrPzul@elissonsantos-mphyr.gcp.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
