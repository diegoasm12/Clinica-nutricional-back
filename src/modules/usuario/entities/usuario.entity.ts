import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { RRolUsuario } from 'src/modules/r-rol-usuario/entities/r-rol-usuario.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'USUARIO' })
export class Usuario {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'integer',
    name: 'RUT',
    nullable: false,
    unique: true,
  })
  rut: number;

  @Column({
    type: 'date',
    name: 'FECHA_NACIMIENTO',
    nullable: false,
  })
  fechaNacimiento: Date;

  @Column({
    type: 'text',
    name: 'NOMBRE',
    nullable: false,
  })
  nombre: string;

  @Column({
    type: 'integer',
    name: 'TELEFONO',
    nullable: false,
  })
  telefono: Number;

  @Column({
    type: 'text',
    name: 'CORREO',
    nullable: false,
    unique: true,
  })
  correo: string;

  @Column({
    type: 'text',
    name: 'SEXO',
    nullable: false,
  })
  sexo: string;

  @Column({
    type: 'text',
    name: 'CLAVE',
    nullable: false,
  })
  clave: string;

  @OneToMany(() => RRolUsuario, (rRolUsuario) => rRolUsuario.fkUsuario)
  rRolUsuario: RRolUsuario[];

  @OneToMany(() => Ficha, (usuario) => usuario.fkUsuario)
  usuario: Usuario[];

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
