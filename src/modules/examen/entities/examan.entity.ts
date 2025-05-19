import { Column, Entity } from "typeorm";


@Entity({name:'EXAMEN'})
export class Examan {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'NOMBRE_EXAMEN',
        nullable: false
    })
    nombreExamen:String;
        @Column({
        type: 'text',
        name: 'URL',
        nullable: false
    })
    url:String;

    //fkAnamnesisClinica!
}
