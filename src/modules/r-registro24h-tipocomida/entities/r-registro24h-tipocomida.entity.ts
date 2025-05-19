import { Column, Entity } from "typeorm";


@Entity({name:'R_REGISTRO_24H_TIPO_COMIDA'})
export class RRegistro24hTipocomida {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'DESCRIPCION',
        nullable: false
    })
    descripcion:String;
    @Column({
        type: 'text',
        name: 'HORA',
        nullable: false
    })
    hora:String;

    //fkTIPOCOMIDA

    //FKregistro24h
}
