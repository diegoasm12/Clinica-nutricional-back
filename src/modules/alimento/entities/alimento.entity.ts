import { REncuestatendenciaconsumoAlimento } from 'src/modules/r-encuestatendenciaconsumo-alimento/entities/r-encuestatendenciaconsumo-alimento.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity({ name: 'ALIMENTO' })
export class Alimento {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
    generated: 'increment',
  })
  id: number;
  @Column({
    type: 'text',
    name: 'ALIMENTO',
    nullable: false,
  })
  alimento: String;

  @OneToMany(() => REncuestatendenciaconsumoAlimento, (rAlimentoEncuesta) => rAlimentoEncuesta.fkAlimento)
  rAlimentoEncuesta: REncuestatendenciaconsumoAlimento[];

}
