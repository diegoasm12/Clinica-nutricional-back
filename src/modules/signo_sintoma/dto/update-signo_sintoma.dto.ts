import { PartialType } from '@nestjs/swagger';
import { CreateSignoSintomaDto } from './create-signo_sintoma.dto';

export class UpdateSignoSintomaDto extends PartialType(CreateSignoSintomaDto) {}
