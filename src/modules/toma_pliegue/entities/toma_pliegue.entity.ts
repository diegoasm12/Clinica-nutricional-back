import { Antropometria } from 'src/modules/antropometria/entities/antropometria.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'TOMA_PLIEGUE' })
export class TomaPliegue {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_CINTURA',
    nullable: false,
  })
  circunferenciaCintura: string;

  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_BRAQUIAL',
    nullable: false,
  })
  circunferenciaBraquial: string;

  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_CADERA',
    nullable: false,
  })
  circunferenciaCadera: string;

  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_PANTORRILLA',
    nullable: false,
  })
  circunferenciaPantorrilla: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_TICIPITAL',
    nullable: false,
  })
  pliegueTicipital: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_BICIPITAL',
    nullable: false,
  })
  pliegueBicipital: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_SUBESCAPULAR',
    nullable: false,
  })
  pliegueSubescapular: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_SUPRAILIACO',
    nullable: false,
  })
  pliegueSuprailiaco: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_ABDOMINAL',
    nullable: false,
  })
  pliegueAbdominal: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_MUSLO',
    nullable: false,
  })
  pliegueMuslo: string;

  @Column({
    type: 'text',
    name: 'PLIEGUE_PANTORRILLA',
    nullable: false,
  })
  plieguePantorrilla: string;

  @ManyToOne(() => Antropometria, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANTROPOMETRIA' })
  fkAntropometria: Antropometria;

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
