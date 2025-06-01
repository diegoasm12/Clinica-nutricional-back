import { RRolUsuario } from 'src/modules/r-rol-usuario/entities/r-rol-usuario.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ROL' })
export class Rol {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'ROL',
    nullable: false,
  })
  rol: String;

  @Column({
    type: 'text',
    name: 'DESCRIPCION',
    nullable: true,
  })
  descripcion: String;

  @OneToMany(() => RRolUsuario, (rRolUsuario) => rRolUsuario.fkRol)
  rRolUsuario: RRolUsuario[];
}
