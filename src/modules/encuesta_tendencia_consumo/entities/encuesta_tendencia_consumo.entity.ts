import { Column, Entity } from "typeorm";


@Entity({name:'ENCUESTA_TENDENCIA_CONSUMO'})
export class EncuestaTendenciaConsumo {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID',
    })
    id:number; 

    //FKFICHA!¿¿¿¿????

}
