import { Column, Entity } from "typeorm";


@Entity({name:'HABITO'})
export class Habito {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'ALCOHOL',
        nullable: false
    })
    alcohol:String;
    @Column({
        type: 'text',
        name: 'DROGA',
        nullable: false
    })
    droga:String;
        @Column({
        type: 'text',
        name: 'ACTIVIDAD_FISICA',
        nullable: false
    })
    actividadFisica:String;

    //fkAnamnesisclinica
}
