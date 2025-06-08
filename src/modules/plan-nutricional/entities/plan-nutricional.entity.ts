import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'PLAN_NUTRICIONAL' })
export class PlanNutricional {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'OBJETIVO_PLAN',
    nullable: false,
  })
  objetivoPlan: string;

  @Column({
    type: 'text',
    name: 'RECOMENDACION_INICIAL',
    nullable: false,
  })
  recomendacionInicial: string;

  @Column({
    type: 'text',
    name: 'PLAN_ALIMENTARIO',
    nullable: false,
  })
  planAlimentario: string;

  @Column({
    type: 'text',
    name: 'DIAGNOSTICO_NUTRICIONAL',
    nullable: false,
  })
  diagnosticoNutricional: string;

  @ManyToOne(() => Ficha, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_FICHA' })
  fkFicha: Ficha;

  @Column({
    type: 'date',
    name: 'FECHA_CREACION',
    nullable: false,
  })
  fechaCreacion: Date | null;

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
