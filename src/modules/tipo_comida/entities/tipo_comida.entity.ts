import { RRegistro24hTipocomida } from 'src/modules/r-registro24h-tipocomida/entities/r-registro24h-tipocomida.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'TIPO_COMIDA' })
export class TipoComida {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'TIPO_COMIDA',
    nullable: false,
  })
  tipoComida: String;

  @OneToMany(() => RRegistro24hTipocomida, (rRegistro24hTipocomida) => rRegistro24hTipocomida.fkTipoComida)
  rRegistro24hTipocomida: RRegistro24hTipocomida[];
}
