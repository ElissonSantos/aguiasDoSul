import { Injectable } from '@nestjs/common';

@Injectable()
export class DiaDeClubeService {
  getHello(): string {
    return 'Dia de Clube Work';
  }
}
