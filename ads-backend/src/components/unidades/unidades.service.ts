import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Unidade } from '../../shared/models/unidade.model';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectModel('Unidade') private readonly unidadeModel: Model<Unidade>,
  ) {}

  async save(unidade) {
    let newUnidade;

    if (!unidade.id) {
      newUnidade = new this.unidadeModel({ name: unidade.name });
      return await newUnidade.save();
    } else {
      return await this.unidadeModel.findByIdAndUpdate(
        unidade.id,
        unidade,
        { new: true },
        (err, unit) => {
          if (err) return err;
          return unit;
        },
      );
    }
  }

  async delete(id) {
    const result = await this.unidadeModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Erro ao excluir unidade');
    }
    return;
  }

  async getUnidades(id?: any) {
    if (id) {
      const unidade = await this.unidadeModel.findById(id);
      if (!unidade) {
        throw new NotFoundException('Nao foi possivel encontrar esta unidade.');
      }
      return { id: unidade.id, name: unidade.name };
    } else {
      const unidades = await this.unidadeModel.find().exec();
      return unidades.map(uni => ({
        id: uni.id,
        nome: uni.name,
      }));
    }
  }
}
