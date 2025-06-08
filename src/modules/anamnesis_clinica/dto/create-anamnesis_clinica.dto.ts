import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateHabitoPartialDto } from 'src/modules/habito/dto/create-habito-partial.dto';
import { CreateSignoSintomaPartialDto } from 'src/modules/signo_sintoma/dto/create-signo_sintoma-partial.dto';

export class CreateAnamnesisClinicaDto {
  @IsString()
  @MinLength(1)
  antecedenteFamiliar: string;

  @IsString()
  @MinLength(1)
  patologiaBase: string;

  @IsString()
  @MinLength(1)
  medicamento: string;

  @IsString()
  @MinLength(1)
  anetecedenteQuirurgico: string;

  @IsString()
  @MinLength(1)
  alergia: string;

  @ValidateNested()
  @Type(() => CreateSignoSintomaPartialDto)
  @IsNotEmpty()
  signoSintoma: CreateSignoSintomaPartialDto;

  @ValidateNested()
  @Type(() => CreateHabitoPartialDto)
  @IsNotEmpty()
  habito: CreateHabitoPartialDto;
}
