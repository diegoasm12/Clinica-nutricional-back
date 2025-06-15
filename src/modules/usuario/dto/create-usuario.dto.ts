import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateRRolUsuarioPartialDto } from 'src/modules/r-rol-usuario/dto/create-r-rol-usuario-partial.dto';

export class CreateUsuarioDto {
  @IsNumber()
  rut: number;

  @IsDate()
  fechaNacimiento: Date;

  @IsString()
  nombre: string;

  @IsNumber()
  telefono: number;

  @IsEmail()
  correo: string;

  @IsIn(['M', 'F'])
  sexo: 'M' | 'F';

  @ValidateNested()
  @Type(() => CreateRRolUsuarioPartialDto)
  @IsNotEmpty()
  rRolUsuario: CreateRRolUsuarioPartialDto;
}
