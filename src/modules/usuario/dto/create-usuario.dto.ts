import { CreateRRolUsuarioDto } from 'src/modules/r-rol-usuario/dto/create-r-rol-usuario.dto';

export class CreateUsuarioDto {
  rut: number;
  fechaNacimiento: Date;
  nombre: string;
  telefono: number;
  correo: string;
  sexo: 'M' | 'F';
  rRolUsuario: CreateRRolUsuarioDto;
}
