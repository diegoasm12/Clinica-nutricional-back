import { Column, Entity } from "typeorm";


@Entity({name:'SIGNO_SINTOMA'})
export class SignoSintoma {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'DIURESIS',
        nullable: false
    })
    diuresis:String;
    @Column({
        type: 'text',
        name: 'APETITO',
        nullable: false
    })
    apetito:String;
    @Column({
        type: 'text',
        name: 'CALAMBRE',
        nullable: false
    })
    calambre:String;
    @Column({
        type: 'text',
        name: 'POLIDIPSIA',
        nullable: false
    })
    polidipsia:String;
    @Column({
        type: 'text',
        name: 'POLIURIA',
        nullable: false
    })
    poliuria:String;
    @Column({
        type: 'text',
        name: 'DEPOSICION_BRISTOL',
        nullable: false
    })
    deposicionBristol:String;
    @Column({
        type: 'text',
        name: 'TINITUS',
        nullable: false
    })
    tinitus:String;
    @Column({
        type: 'text',
        name: 'SUDORACION_NOCTURNA',
        nullable: false
    })
    sudoracionNocturna:String;
    @Column({
        type: 'text',
        name: 'POLIFAGIA',
        nullable: false
    })
    polifagia:String;
    @Column({
        type: 'text',
        name: 'OTRO',
        nullable: false
    })
    otro:String;

    //fkANAMNESISCLINICA
}
