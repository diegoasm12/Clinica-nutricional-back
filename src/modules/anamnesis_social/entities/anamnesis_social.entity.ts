import { Column, Entity } from 'typeorm';

@Entity({ name: 'ANAMNESIS_SOCIAL' })
export class AnamnesisSocial {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'ASISTE_CON',
    nullable: false,
  })
  asisteCon: string;
  @Column({
    type: 'text',
    name: 'HIJOS',
    nullable: false,
  })
  hijos: string;
  @Column({
    type: 'text',
    name: 'VIVE_CON',
    nullable: false,
  })
  viveCon: string;
  @Column({
    type: 'text',
    name: 'OCUPACION',
    nullable: false,
  })
  ocupacion: string;
  @Column({
    type: 'text',
    name: 'ESCOLARIDAD',
    nullable: false,
  })
  escolaridad: string;
  @Column({
    type: 'text',
    name: 'REDES_DE_APOYO',
    nullable: false,
  })
  redesDeApoyo: string;
  @Column({
    type: 'text',
    name: 'SERVICIOS_BASICOS',
    nullable: false,
  })
  serviciosBasicos: string;
}
