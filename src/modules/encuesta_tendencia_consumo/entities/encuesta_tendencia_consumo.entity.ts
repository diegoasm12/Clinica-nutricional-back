import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'ENCUESTA_TENDENCIA_CONSUMO' })
export class EncuestaTendenciaConsumo {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
  })
  id: number;

  @ManyToOne(() => Ficha, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_FICHA' })
  ficha: Ficha;
}
