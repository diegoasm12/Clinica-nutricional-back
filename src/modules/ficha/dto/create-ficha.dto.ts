import { IsNumber, Min } from 'class-validator';

export class CreateFichaDto {
  @IsNumber()
  @Min(1)
  fkUsuario_id: number;
  @IsNumber()
  @Min(1)
  fkAnamnesisSocial_id: number;
  @IsNumber()
  @Min(1)
  fkAnamnesisClinica_id: number;
  @IsNumber()
  @Min(1)
  fkAnamnesisAlimentaria_id: number;
  @IsNumber()
  @Min(1)
  fkEncuestaTendenciaConsumo_id: number;
}
