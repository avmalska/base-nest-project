import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pinguim } from './entities/pinguim.entity';
import { Repository } from 'typeorm';
import { CreatePinguimDto } from './dto/create-pinguim.dto';
import { UpdatePinguimDto } from './dto/update-pinguim.dto';

@Injectable()
export class PinguimRepository {
  constructor(
    @InjectRepository(Pinguim)
    private readonly pinguimRepository: Repository<Pinguim>,
  ) {}

  async create(pinguim: CreatePinguimDto) {
    return this.pinguimRepository.save(pinguim);
  }

  async delete(id: string) {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      await this.pinguimRepository.delete({ id: id });
      return pinguim;
    }
  }

  async findAll() {
    return await this.pinguimRepository.find();
  }

  async findOne(id: string) {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return pinguim;
    }
  }

  async update(id: string, newPinguim: UpdatePinguimDto) {
    const pinguim = await this.pinguimRepository.findOneBy({ id: id });
    if (!pinguim) {
      throw new NotFoundException(`Pinguim com id ${id} não existe`);
    } else {
      return await this.pinguimRepository.save({
        id: id,
        ...newPinguim,
      });
    }
  }
}
