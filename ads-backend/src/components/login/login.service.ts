import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Request } from '../../shared/models/request.model';
import { Desbravador } from 'src/shared/models/desbravador.model';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('Request')
    private readonly requestModel: Model<Request>,
    @InjectModel('Desbravador')
    private readonly desbravadorModel: Model<Desbravador>,
  ) {}

  async save(request) {
    const newRequest = new this.requestModel(request);
    return await newRequest.save();
  }

  async delete(id) {
    const result = await this.requestModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Erro ao excluir request');
    }
    return;
  }

  async logar(user) {
    let valido;
    valido = await this.desbravadorModel.find(user);
    if (valido) {
      return valido;
    }
    valido = await this.requestModel.find(user);
    if (valido) {
      return valido;
    } else {
      throw 'Usuario não encontrado';
    }
  }

  async getRequest(id?: any) {
    let request;
    const valido = await this.desbravadorModel.findById(id);
    if (id) {
      request = await this.requestModel.findById(id);
      if (!request) {
        throw new NotFoundException(
          'Nao foi possivel encontrar esta desbravador.',
        );
      }
      return request;
    } else {
      request = await this.requestModel.find().exec();
      return request;
    }
  }
}
