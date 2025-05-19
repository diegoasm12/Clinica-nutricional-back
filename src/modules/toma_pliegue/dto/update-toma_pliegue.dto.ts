import { PartialType } from '@nestjs/swagger';
import { CreateTomaPliegueDto } from './create-toma_pliegue.dto';

export class UpdateTomaPliegueDto extends PartialType(CreateTomaPliegueDto) {}
