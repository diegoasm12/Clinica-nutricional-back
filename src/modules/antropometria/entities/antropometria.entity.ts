import { TomaPliegue } from 'src/modules/toma_pliegue/entities/toma_pliegue.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ANTROPOMETRIA' })
export class Antropometria {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'PESO',
    nullable: false,
  })
  peso: String;
  @Column({
    type: 'text',
    name: 'IMC',
    nullable: false,
  })
  imc: String;
  @Column({
    type: 'text',
    name: 'TALLA',
    nullable: false,
  })
  talla: String;
  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_CINTURA',
    nullable: false,
  })
  circunferenciaCintura: String;

  @OneToMany(() => TomaPliegue, (tomaPliegue) => tomaPliegue.fkAntropometria)
  tomaPliegue: TomaPliegue[];

}
