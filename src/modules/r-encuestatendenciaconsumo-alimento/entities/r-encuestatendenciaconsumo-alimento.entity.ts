import { Column, Entity } from "typeorm";


@Entity({name:'R_ENCUESTA_TENDENCIA_CONSUMO_ALIMENTO'})
export class REncuestatendenciaconsumoAlimento {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'CUANTOS_DIAS_SEMANA',
        nullable: false
    })
    cuantosDiasSemana:String;

    //fkAlimento

    //fkEncuestaTendenciaConsumo
}
