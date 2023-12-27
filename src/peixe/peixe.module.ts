import { Module } from '@nestjs/common';
import { PeixeController } from './peixe.controller';

@Module({
  controllers: [PeixeController]
})
export class PeixeModule {}
