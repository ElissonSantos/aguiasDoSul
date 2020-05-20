import { Controller, Get } from '@nestjs/common';
import { DiaDeClubeService } from './diaDeClube.service';

@Controller('diadeclube')
export class DiaDeClubeController {
  constructor(private readonly diaDeClubeService: DiaDeClubeService) {}

  @Get()
  getHello(): string {
    return this.diaDeClubeService.getHello();
  }
}
