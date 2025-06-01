import { Registro24h } from 'src/modules/registro24h/entities/registro24h.entity';
import { TipoComida } from 'src/modules/tipo_comida/entities/tipo_comida.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'R_REGISTRO_24H_TIPO_COMIDA' })
export class RRegistro24hTipocomida {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'DESCRIPCION',
    nullable: false,
  })
  descripcion: String;
  @Column({
    type: 'text',
    name: 'HORA',
    nullable: false,
  })
  hora: String;

  @ManyToOne(() => TipoComida, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_TIPO_COMIDA' })
  fkTipoComida: TipoComida;

  @ManyToOne(() => Registro24h, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_REGISTRO_24H' })
  fkRegistro24h: Registro24h;
}
