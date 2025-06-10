import { IsNumber, Min } from 'class-validator';
import { CreateTomaPlieguePartialDto } from './create-toma_pliegue-partial.dto';

export class CreateTomaPliegueDto extends CreateTomaPlieguePartialDto {
  @IsNumber()
  @Min(1)
  fkAntropometria_id: number;
}
