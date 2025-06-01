import { Rol } from 'src/modules/rol/entities/rol.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'R_ROL_USUARIO' })
export class RRolUsuario {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @ManyToOne(() => Usuario, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_USUARIO' })
  fkUsuario: Usuario;

  @ManyToOne(() => Rol, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ROL' })
  fkRol: Rol;
}
