import { Column, Entity } from 'typeorm';

@Entity({ name: 'TIPO_COMIDA' })
export class TipoComida {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'TIPO_COMIDA',
    nullable: false,
  })
  tipoComida: String;
}
