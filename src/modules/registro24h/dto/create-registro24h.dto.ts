export class CreateRegistro24hDto {
    
}


// @Column({
//     primary: true,
//     type: 'integer',
//     name: 'ID',
//     generated: 'increment',
//   })
//   id: number;

//   @ManyToOne(() => Ficha, {
//     nullable: true,
//     onDelete: 'NO ACTION',
//     onUpdate: 'CASCADE',
//   })
//   @JoinColumn({ name: 'FK_FICHA' })
//   fkFicha: Ficha;

//   @OneToMany(
//     () => RRegistro24hTipocomida,
//     (rRegitro24h) => rRegitro24h.fkRegistro24h,
//   )
//   rRegistro24hTipocomidas: RRegistro24hTipocomida[];

//   @Column({
//     type: 'date',
//     name: 'FECHA_CREACION',
//     nullable: false,
//   })
//   fechaCreacion: Date | null;

//   @Column({
//     type: 'date',
//     name: 'FECHA_ELIMINACION',
//     nullable: true,
//   })
//   fechaEliminacion: Date | null;
// }
