import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateREncuestaTendenciaConsumoAlimentoDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  cuantosDiasSemana?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  fkAlimento_id?: number;

  @IsOptional()
  @IsIn(['eliminar', 'restaurar'])
  @IsNotEmpty()
  estado?: 'eliminar' | 'restaurar';
}
