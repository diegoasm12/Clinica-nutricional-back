import { Column, Entity } from "typeorm";


@Entity({name:'ENCUESTA_TENDENCIA_CONSUMO'})
export class EncuestaTendenciaConsumo {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID',
    })
    id:number; 

    //FKFICHA!¿¿¿¿????

}
