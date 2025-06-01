import { PartialType } from '@nestjs/swagger';
import { CreateMailManagerDto } from './create-mail-manager.dto';

export class UpdateMailManagerDto extends PartialType(CreateMailManagerDto) {}
