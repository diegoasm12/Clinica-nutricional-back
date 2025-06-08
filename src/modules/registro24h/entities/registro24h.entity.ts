import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { RRegistro24hTipocomida } from 'src/modules/r-registro24h-tipocomida/entities/r-registro24h-tipocomida.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'REGISTRO_24H' })
export class Registro24h {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @ManyToOne(() => Ficha, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_FICHA' })
  fkFicha: Ficha;

  @OneToMany(
    () => RRegistro24hTipocomida,
    (rRegitro24h) => rRegitro24h.fkRegistro24h,
  )
  rRegistro24h: Registro24h[];

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
