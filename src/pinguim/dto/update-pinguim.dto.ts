import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import * as Joi from 'joi';
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePinguimDto {
  @ApiProperty({ example: 'Juan' })
  @JoiSchema(Joi.string().alphanum().min(3).max(20))
  nome: string;

  @ApiProperty({ example: 20 })
  @JoiSchema(Joi.number().integer())
  idade: number;
}