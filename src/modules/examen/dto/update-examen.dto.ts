import { PartialType } from '@nestjs/swagger';
import { CreateExamanDto } from './create-examen.dto';

export class UpdateExamanDto extends PartialType(CreateExamanDto) {}
