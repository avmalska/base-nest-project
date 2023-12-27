import { Module } from '@nestjs/common';
import { PinguimService } from './pinguim.service';
import { PinguimController } from './pinguim.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pinguim } from "./entities/pinguim.entity";
import { PinguimRepository } from "./pinguim.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Pinguim])],
  controllers: [PinguimController],
  providers: [PinguimService, PinguimRepository],
})
export class PinguimModule {}
