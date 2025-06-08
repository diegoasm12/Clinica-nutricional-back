import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ANAMNESIS_ALIMENTARIA' })
export class AnamnesisAlimentaria {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'ALERGIA_INTOLERANCIA',
    nullable: false,
  })
  alergiaIntolerancia: string;

  @Column({
    type: 'text',
    name: 'ALIMENTO_NO_GUSTA',
    nullable: false,
  })
  alimentoNoGusta: string;

  @Column({
    type: 'text',
    name: 'ALIMENTO_PREFERENCIA',
    nullable: false,
  })
  alimentoPreferencia: string;

  @Column({
    type: 'text',
    name: 'COCINA_EN_CASA',
    nullable: false,
  })
  cocinaEnCasa: string;

  @Column({
    type: 'text',
    name: 'HABITUALMENTE_COME_EN',
    nullable: false,
  })
  habitualmenteComeEn: string;

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
