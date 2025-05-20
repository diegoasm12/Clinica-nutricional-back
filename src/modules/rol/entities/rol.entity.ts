import { Column, Entity } from "typeorm";

@Entity({name:'ROL'})
export class Rol {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'ROL',
        nullable: false    
    })
    rol:String;
    @Column({
        type: 'text',
        name: 'DESCRIPCION',
        nullable: false
    })
    descripcion:String;
};
