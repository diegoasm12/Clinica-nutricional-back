import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNumber, Min, ValidateNested } from 'class-validator';
import { CreateRRegistro24hTipocomidaPartialDto } from 'src/modules/r-registro24h-tipocomida/dto/create-r-registro24h-tipocomida-partial.dto';

export class CreateRegistro24hDto {
  @IsNumber()
  @Min(1)
  fkFicha_id: number;

  @ValidateNested({ each: true })
  @Type(() => CreateRRegistro24hTipocomidaPartialDto)
  @ArrayNotEmpty()
  rRegistro24hTipocomidas: CreateRRegistro24hTipocomidaPartialDto[] = [];
}
