import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateTomaPlieguePartialDto } from 'src/modules/toma_pliegue/dto/create-toma_pliegue-partial.dto';

export class CreateAntropometriaDto {
  @IsString()
  @MinLength(1)
  peso: string;

  @IsString()
  @MinLength(1)
  imc: string;

  @IsString()
  @MinLength(1)
  talla: string;

  @IsNumber()
  @Min(1)
  fkFicha_id: number;

  @ValidateNested()
  @Type(() => CreateTomaPlieguePartialDto)
  @IsNotEmpty()
  tomaPliegue: CreateTomaPlieguePartialDto;
}
