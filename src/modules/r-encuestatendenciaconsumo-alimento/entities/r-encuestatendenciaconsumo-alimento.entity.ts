import { Alimento } from 'src/modules/alimento/entities/alimento.entity';
import { EncuestaTendenciaConsumo } from 'src/modules/encuesta_tendencia_consumo/entities/encuesta_tendencia_consumo.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'R_ENCUESTA_TENDENCIA_CONSUMO_ALIMENTO' })
export class REncuestatendenciaconsumoAlimento {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'CUANTOS_DIAS_SEMANA',
    nullable: false,
  })
  cuantosDiasSemana: String;

  @ManyToOne(() => Alimento, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ALIMENTO' })
  fkAlimento: Alimento;

  @ManyToOne(() => EncuestaTendenciaConsumo, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ENCUESTA_TENDENCIA_CONSUMO' })
  fkEncuestaTendenciaConsumo: EncuestaTendenciaConsumo;
}
