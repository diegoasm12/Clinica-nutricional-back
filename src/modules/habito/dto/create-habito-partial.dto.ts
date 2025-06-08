import { IsString, MinLength } from 'class-validator';

export class CreateHabitoPartialDto {
  @IsString()
  @MinLength(1)
  alcohol: string;
  @IsString()
  @MinLength(1)
  droga: string;
  @IsString()
  @MinLength(1)
  actividadFisica: string;
}
