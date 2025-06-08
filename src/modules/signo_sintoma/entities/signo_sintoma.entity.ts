import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'SIGNO_SINTOMA' })
export class SignoSintoma {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'DIURESIS',
    nullable: false,
  })
  diuresis: string;

  @Column({
    type: 'text',
    name: 'APETITO',
    nullable: false,
  })
  apetito: string;

  @Column({
    type: 'text',
    name: 'CALAMBRE',
    nullable: false,
  })
  calambre: string;

  @Column({
    type: 'text',
    name: 'POLIDIPSIA',
    nullable: false,
  })
  polidipsia: string;

  @Column({
    type: 'text',
    name: 'POLIURIA',
    nullable: false,
  })
  poliuria: string;

  @Column({
    type: 'text',
    name: 'DEPOSICION_BRISTOL',
    nullable: false,
  })
  deposicionBristol: string;

  @Column({
    type: 'text',
    name: 'TINITUS',
    nullable: false,
  })
  tinitus: string;

  @Column({
    type: 'text',
    name: 'SUDORACION_NOCTURNA',
    nullable: false,
  })
  sudoracionNocturna: string;

  @Column({
    type: 'text',
    name: 'POLIFAGIA',
    nullable: false,
  })
  polifagia: string;

  @Column({
    type: 'text',
    name: 'OTRO',
    nullable: false,
  })
  otro: string;

  @ManyToOne(() => AnamnesisClinica, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_CLINICA' })
  fkAnamnesisClinica: AnamnesisClinica;

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
