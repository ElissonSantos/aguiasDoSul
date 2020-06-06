import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LoginModule } from './components/login/login.module';
import { UnidadesModule } from './components/unidades/unidades.module';
import { DesbravadorModule } from './components/desbravador/desbravador.module';

@Module({
  imports: [
    LoginModule,
    UnidadesModule,
    DesbravadorModule,
    MongooseModule.forRoot(
      'mongodb+srv://elissonsantos:0zGZyNSh782iWIW7@elissonsantos-mphyr.gcp.mongodb.net/aguias-do-sul?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
