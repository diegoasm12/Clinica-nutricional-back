import { PartialType } from '@nestjs/swagger';
import { CreateAnamnesisSocialDto } from './create-anamnesis_social.dto';

export class UpdateAnamnesisSocialDto extends PartialType(CreateAnamnesisSocialDto) {}
