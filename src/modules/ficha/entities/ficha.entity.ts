import { AnamnesisAlimentaria } from 'src/modules/anamnesis_alimentaria/entities/anamnesis_alimentaria.entity';
import { AnamnesisClinica } from 'src/modules/anamnesis_clinica/entities/anamnesis_clinica.entity';
import { AnamnesisSocial } from 'src/modules/anamnesis_social/entities/anamnesis_social.entity';
import { Antropometria } from 'src/modules/antropometria/entities/antropometria.entity';
import { EncuestaTendenciaConsumo } from 'src/modules/encuesta_tendencia_consumo/entities/encuesta_tendencia_consumo.entity';
import { Examen } from 'src/modules/examen/entities/examen.entity';
import { PlanNutricional } from 'src/modules/plan-nutricional/entities/plan-nutricional.entity';
import { Registro24h } from 'src/modules/registro24h/entities/registro24h.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'FICHA' })
export class Ficha {
  @Column({
    primary: true,
    type: 'integer',
    name: 'ID',
    generated: 'increment',
  })
  id: number;

  @Column({
    type: 'date',
    name: 'FECHA_CREACION',
    nullable: false,
  })
  fechaCreacion: Date;

  @Column({
    type: 'date',
    name: 'FECHA_ELIMINACION',
    nullable: true,
  })
  fechaEliminacion: Date | null;

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

  @OneToMany(() => Antropometria, (antropometria) => antropometria.fkFicha)
  antropometrias: Antropometria[];

  @OneToMany(() => Registro24h, (registro24h) => registro24h.fkFicha)
  registros24h: Registro24h[];

  @OneToMany(
    () => PlanNutricional,
    (planNutricional) => planNutricional.fkFicha,
  )
  planesNutricionales: PlanNutricional[];

  @OneToMany(() => Examen, (examan) => examan.fkFicha)
  examenes: Examen[];
}
