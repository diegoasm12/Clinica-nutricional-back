import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ALIMENTO' })
export class Alimento {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'ALIMENTO',
    nullable: false,
  })
  alimento: string;

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;
}
