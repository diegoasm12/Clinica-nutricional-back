import { Ficha } from 'src/modules/ficha/entities/ficha.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'REGISTRO_24H' })
export class Registro24h {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
  })
  id: number;

  @ManyToOne(() => Ficha, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_FICHA' })
  fkFicha: Ficha;
}
