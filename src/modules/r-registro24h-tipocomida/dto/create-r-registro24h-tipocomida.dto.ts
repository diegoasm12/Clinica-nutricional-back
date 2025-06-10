import { IsNumber, Min } from 'class-validator';
import { CreateRRegistro24hTipocomidaPartialDto } from './create-r-registro24h-tipocomida-partial.dto';

export class CreateRRegistro24hTipocomidaDto extends CreateRRegistro24hTipocomidaPartialDto {
  @IsNumber()
  @Min(1)
  fkRegistro24h_id: number;
}
