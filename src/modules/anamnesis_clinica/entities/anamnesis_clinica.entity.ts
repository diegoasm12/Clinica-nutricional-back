import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { Habito } from 'src/modules/habito/entities/habito.entity';
import { SignoSintoma } from 'src/modules/signo_sintoma/entities/signo_sintoma.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ANAMNESIS_CLINICA' })
export class AnamnesisClinica {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'ANTECEDENTE_FAMILIAR',
    nullable: false,
  })
  antecedenteFamiliar: string;
  @Column({
    type: 'text',
    name: 'PATOLOGIA_BASE',
    nullable: false,
  })
  patologiaBase: string;
  @Column({
    type: 'text',
    name: 'MEDICAMENTO',
    nullable: false,
  })
  medicamento: string;
  @Column({
    type: 'text',
    name: 'ANTECEDENTE_QUIRURGICO',
    nullable: false,
  })
  anetecedenteQuirurgico: string;
  @Column({
    type: 'text',
    name: 'ALERGIA',
    nullable: false,
  })
  alergia: string;
  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

  @OneToMany(
    () => SignoSintoma,
    (signoSintoma) => signoSintoma.fkAnamnesisClinica,
  )
  signoSintoma: SignoSintoma[];

  @OneToMany(() => Habito, (habito) => habito.fkAnamnesisClinica)
  habito: Habito[];

  @OneToMany(() => Ficha, (ficha) => ficha.fkAnamnesisClinica)
  ficha: Ficha[];
}
