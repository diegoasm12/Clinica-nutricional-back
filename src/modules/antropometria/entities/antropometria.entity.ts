import { Column, Entity } from "typeorm";



@Entity({name:'ANTROPOMETRIA'})
export class Antropometria {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID',
    })
    id:number;
    @Column({
        type:'text',
        name: 'PESO',
        nullable: false
    })
    peso:String;
    @Column({
        type:'text',
        name: 'IMC',
        nullable: false
    })
    imc:String;
    @Column({
        type:'text',
        name: 'TALLA',
        nullable: false
    })
    talla:String;
    @Column({
        type:'text',
        name: 'CIRCUNFERENCIA_CINTURA',
        nullable: false
    })
    circunferenciaCintura:String;
};
