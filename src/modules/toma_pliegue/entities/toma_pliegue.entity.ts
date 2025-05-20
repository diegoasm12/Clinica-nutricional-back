import { Column, Entity } from "typeorm";


@Entity({name:'TOMA_PLIEGUE'})
export class TomaPliegue {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'CIRCUNFERENCIA_BRAQUIAL',
        nullable: false
    })
    circunferenciaBraquial:String;
    @Column({
        type: 'text',
        name: 'CIRCUNFERENCIA_CADERA',
        nullable: false
    })
    circunferenciaCadera:String;
    @Column({
        type: 'text',
        name: 'CIRCUNFERENCIA_PANTORRILLA',
        nullable: false
    })
    circunferenciaPantorrilla:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_TICIPITAL',
        nullable: false
    })
    pliegueTicipital:String;
        @Column({
        type: 'text',
        name: 'PLIEGUE_BICIPITAL',
        nullable: false
    })
    pliegueBicipital:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_SUBESCAPULAR',
        nullable: false
    })
    pliegueSubescapular:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_SUPRAILIACO',
        nullable: false
    })
    pliegueSuprailiaco:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_ABDOMINAL',
        nullable: false
    })
    pliegueAbdominal:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_MUSLO',
        nullable: false
    })
    pliegueMuslo:String;
    @Column({
        type: 'text',
        name: 'PLIEGUE_PANTORRILLA',
        nullable: false
    })
    plieguePantorrilla:String;

    //fkANTROPOMETRIA
}
