import { AnamnesisAlimentaria } from 'src/modules/anamnesis_alimentaria/entities/anamnesis_alimentaria.entity';
import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { AnamnesisSocial } from 'src/modules/anamnesis_social/entities/anamnesis_social.entity';
import { EncuestaTendenciaConsumo } from 'src/modules/encuesta_tendencia_consumo/entities/encuesta_tendencia_consumo.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'FICHA' })
export class Ficha {
  @Column({
    primary: true,
    type: 'numeric',
    name: 'ID',
  })
  id: number;
  @Column({
    type: 'date',
    name: 'FECHA_CREACION',
    nullable: false,
  })
  fechaCreacion: Date;

  @ManyToOne(() => Usuario, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_USUARIO' })
  fkUsuario: Usuario;

  @ManyToOne(() => AnamnesisSocial, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_SOCIAL' })
  fkAnamnesisSocial: AnamnesisSocial;

  @ManyToOne(() => AnamnesisClinica, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_CLINICA' })
  fkAnamnesisClinica: AnamnesisClinica;

  @ManyToOne(() => AnamnesisAlimentaria, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ANAMNESIS_ALIMENTARIA' })
  fkAnamnesisAlimentaria: AnamnesisAlimentaria;

  @ManyToOne(() => EncuestaTendenciaConsumo, {
    nullable: true,
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'FK_ENCUESTA_TENDENCIA_CONSUMO' })
  fkEncuestaTendenciaConsumo: EncuestaTendenciaConsumo;
}
