import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PinguimService } from './pinguim.service';
import { CreatePinguimDto } from './dto/create-pinguim.dto';
import { UpdatePinguimDto } from './dto/update-pinguim.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pinguim')
@Controller('pinguim')
export class PinguimController {
  constructor(private readonly pinguimService: PinguimService) {}

  @Post()
  async create(@Body() createPinguimDto: CreatePinguimDto) {
    return this.pinguimService.create(createPinguimDto);
  }

  @Get()
  findAll() {
    return this.pinguimService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinguimService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePinguimDto: UpdatePinguimDto) {
    return this.pinguimService.update(id, updatePinguimDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinguimService.remove(id);
  }
}
