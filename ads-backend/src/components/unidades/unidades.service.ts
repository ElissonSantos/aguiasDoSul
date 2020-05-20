import { Injectable } from '@nestjs/common';
const connection = require('../../database/connection');

@Injectable()
export class UnidadesService {
  async inserir(values) {
    console.log(values)
    await connection('unidades').insert({
      values,
    });

    return;
  }

  async getUnidades() {
    const unidades = await connection('unidades').select('*');

    return unidades;
  }
}
