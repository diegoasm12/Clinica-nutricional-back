import { TomaPliegue } from 'src/modules/toma_pliegue/entities/toma_pliegue.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ANTROPOMETRIA' })
export class Antropometria {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'text',
    name: 'PESO',
    nullable: false,
  })
  peso: string;

  @Column({
    type: 'text',
    name: 'IMC',
    nullable: false,
  })
  imc: string;

  @Column({
    type: 'text',
    name: 'TALLA',
    nullable: false,
  })
  talla: string;
  @Column({
    type: 'text',
    name: 'CIRCUNFERENCIA_CINTURA',
    nullable: false,
  })
  circunferenciaCintura: string;
  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

  @OneToMany(() => TomaPliegue, (tomaPliegue) => tomaPliegue.fkAntropometria)
  tomaPliegue: TomaPliegue[];
}
