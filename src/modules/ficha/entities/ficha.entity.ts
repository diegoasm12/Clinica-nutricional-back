import { Column, Entity } from "typeorm";


@Entity({name:'FICHA'})
export class Ficha {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'date',
        name: 'FECHA_CREACION',
        nullable: false    
    })
    fechaCreacion:Date;

    //fkUsuario

    //FKANAMNESISSOCIAL

    //FKANAMNESISCLINICA

    //FKANAMNESISALIMENTARIA

    //FK ENCUESTA TENDENCIA CONSUMO
}
