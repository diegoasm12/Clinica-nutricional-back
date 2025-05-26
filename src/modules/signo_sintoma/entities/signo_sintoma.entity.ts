import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'SIGNO_SINTOMA' })
export class SignoSintoma {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'DIURESIS',
    nullable: false,
  })
  diuresis: String;
  @Column({
    type: 'text',
    name: 'APETITO',
    nullable: false,
  })
  apetito: String;
  @Column({
    type: 'text',
    name: 'CALAMBRE',
    nullable: false,
  })
  calambre: String;
  @Column({
    type: 'text',
    name: 'POLIDIPSIA',
    nullable: false,
  })
  polidipsia: String;
  @Column({
    type: 'text',
    name: 'POLIURIA',
    nullable: false,
  })
  poliuria: String;
  @Column({
    type: 'text',
    name: 'DEPOSICION_BRISTOL',
    nullable: false,
  })
  deposicionBristol: String;
  @Column({
    type: 'text',
    name: 'TINITUS',
    nullable: false,
  })
  tinitus: String;
  @Column({
    type: 'text',
    name: 'SUDORACION_NOCTURNA',
    nullable: false,
  })
  sudoracionNocturna: String;
  @Column({
    type: 'text',
    name: 'POLIFAGIA',
    nullable: false,
  })
  polifagia: String;
  @Column({
    type: 'text',
    name: 'OTRO',
    nullable: false,
  })
  otro: String;

  @ManyToOne(() => AnamnesisClinica, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_CLINICA' })
  fkAnamnesisClinica: AnamnesisClinica;
}
