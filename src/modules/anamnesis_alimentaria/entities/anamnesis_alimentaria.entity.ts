import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
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

  @OneToMany(() => Ficha, (ficha) => ficha.fkAnamnesisAlimentaria)
  ficha: Ficha[];
}
