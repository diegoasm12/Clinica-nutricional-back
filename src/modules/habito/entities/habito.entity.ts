import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'HABITO' })
export class Habito {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'ALCOHOL',
    nullable: false,
  })
  alcohol: string;
  @Column({
    type: 'text',
    name: 'DROGA',
    nullable: false,
  })
  droga: string;
  @Column({
    type: 'text',
    name: 'ACTIVIDAD_FISICA',
    nullable: false,
  })
  actividadFisica: string;
  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

  @ManyToOne(() => AnamnesisClinica, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_CLINICA' })
  fkAnamnesisClinica: AnamnesisClinica;
}
