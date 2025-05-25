import { PartialType } from '@nestjs/swagger';
import { CreateRegistro24hDto } from './create-registro24h.dto';

export class UpdateRegistro24hDto extends PartialType(CreateRegistro24hDto) {}
