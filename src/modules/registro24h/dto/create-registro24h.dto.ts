import { IsNumber, Min } from 'class-validator';

export class CreateRegistro24hDto {
  @IsNumber()
  @Min(1)
  fkFicha_id: number;
}
