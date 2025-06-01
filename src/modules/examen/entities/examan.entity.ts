import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'EXAMEN' })
export class Examan {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'NOMBRE_EXAMEN',
    nullable: false,
  })
  nombreExamen: string;
  @Column({
    type: 'text',
    name: 'URL',
    nullable: false,
  })
  url: string;

  @ManyToOne(() => AnamnesisClinica, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_CLINICA' })
  fkAnamnesisClinica: AnamnesisClinica;
}
