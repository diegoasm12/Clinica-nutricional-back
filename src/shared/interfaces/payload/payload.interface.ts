import { Rol } from 'src/modules/rol/entities/rol.entity';

export interface Payload {
  rut: number;
  nombre: string;
  rols: Rol[];
}
