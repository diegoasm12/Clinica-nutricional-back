import {
  IsDate,
  IsEmail,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUsuarioDto {
  @IsOptional()
  @IsNumber()
  rut?: number;

  @IsOptional()
  @IsDate()
  fechaNacimiento?: Date;

  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsNumber()
  telefono?: number;

  @IsOptional()
  @IsEmail()
  correo?: string;

  @IsOptional()
  @IsIn(['M', 'F'])
  sexo?: 'M' | 'F';
}
