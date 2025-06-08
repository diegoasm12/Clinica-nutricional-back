import { IsNumber, Min } from 'class-validator';
import { CreateHabitoPartialDto } from './create-habito-partial.dto';

export class CreateHabitoDto extends CreateHabitoPartialDto {
  @IsNumber()
  @Min(1)
  fkAnamnesisClinica_id: number;
}
