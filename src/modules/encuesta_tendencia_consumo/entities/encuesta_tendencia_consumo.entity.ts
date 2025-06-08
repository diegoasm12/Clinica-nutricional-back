import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { REncuestatendenciaconsumoAlimento } from 'src/modules/r-encuestatendenciaconsumo-alimento/entities/r-encuestatendenciaconsumo-alimento.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'ENCUESTA_TENDENCIA_CONSUMO' })
export class EncuestaTendenciaConsumo {
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
  ficha: Ficha;
  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

  @OneToMany(
    () => REncuestatendenciaconsumoAlimento,
    (rEncuestaAlimento) => rEncuestaAlimento.fkEncuestaTendenciaConsumo,
  )
  rEncuestaAlimento: REncuestatendenciaconsumoAlimento[];

  @OneToMany(
    () => Ficha,
    (fichaEncuesta) => fichaEncuesta.fkEncuestaTendenciaConsumo,
  )
  fichaEncuesta: Ficha[];
}
