import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { REncuestaTendenciaConsumoAlimento } from 'src/modules/r-encuesta-tendencia-consumo-alimento/entities/r-encuesta-tendencia-consumo-alimento.entity';
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

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

  @OneToMany(
    () => REncuestaTendenciaConsumoAlimento,
    (rEncuestaAlimento) => rEncuestaAlimento.fkEncuestaTendenciaConsumo,
  )
  rEncuestaTendenciaConsumoAlimento: REncuestaTendenciaConsumoAlimento[];
}
