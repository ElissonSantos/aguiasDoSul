import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Unidade } from '../../shared/models/desbravador.model';

@Injectable()
export class DesbravadorService {
  constructor(
    @InjectModel('Unidade') private readonly unidadeModel: Model<Unidade>,
  ) {}

  async save(unidade) {
    let newUnidade;

    if (!unidade.id) {
      newUnidade = new this.unidadeModel({ name: unidade.name });
    } else {
      newUnidade = await this.getUnidades(unidade.id);

      newUnidade.name = unidade.name;
    }

    await newUnidade.save();

    return;
  }

  async delete(id: String) {
    const result = await this.unidadeModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Erro ao excluir unidade');
    }
    return;
  }

  async getUnidades(id?: any) {
    if (id) {
      let unidade = await this.unidadeModel.findById(id);
      if (!unidade) {
        throw new NotFoundException('Nao foi possivel encontrar esta unidade.');
      }
      return { id: unidade.id, name: unidade.name };
    } else {
      let unidades = await this.unidadeModel.find().exec();
      return unidades.map(uni => ({
        id: uni.id,
        nome: uni.name,
      }));
    }
  }
}
