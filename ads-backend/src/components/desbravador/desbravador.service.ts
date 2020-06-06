import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import QRCode from 'qrcode';

import { Desbravador } from '../../shared/models/desbravador.model';

@Injectable()
export class DesbravadorService {
  constructor(
    @InjectModel('Desbravador')
    private readonly desbravadorModel: Model<Desbravador>,
  ) {}

  async save(desbravador) {
    let newDesb;
    if (!desbravador.id) {
      newDesb = new this.desbravadorModel(desbravador);
      const response = await newDesb.save();
      return response;
    } else {
      return await this.desbravadorModel.findByIdAndUpdate(
        desbravador.id,
        desbravador,
        { new: true },
        (err, desb) => {
          if (err) return err;
          return desb;
        },
      );
    }
  }

  async delete(id) {
    const result = await this.desbravadorModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Erro ao excluir desbravador');
    }
    return;
  }

  async getDesbravadores(id?: any) {
    let desbravador;
    if (id) {
      desbravador = await this.desbravadorModel.findById(id);
      if (!desbravador) {
        throw new NotFoundException(
          'Nao foi possivel encontrar esta desbravador.',
        );
      }
      return desbravador;
    } else {
      desbravador = await this.desbravadorModel.find().exec();
      return desbravador;
    }
  }
}
