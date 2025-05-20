import { Column, Entity } from "typeorm";


@Entity({name:'ALIMENTO'})
export class Alimento {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID',
    })
    id:number;
    @Column({
        type:'text',
        name: 'ALIMENTO',
        nullable: false
    })
    alimento:String;

}
