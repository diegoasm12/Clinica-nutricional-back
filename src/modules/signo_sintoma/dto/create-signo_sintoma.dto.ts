import { IsNumber, Min } from 'class-validator';
import { CreateSignoSintomaPartialDto } from './create-signo_sintoma-partial.dto';

export class CreateSignoSintomaDto extends CreateSignoSintomaPartialDto {
  @IsNumber()
  @Min(1)
  fkAnamnesisClinica_id: number;
}
