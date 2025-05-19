import { Column, Entity } from "typeorm";

@Entity({name:'ROL'})
export class Rol {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID'
    })
    id: number;
    @Column({
        type: 'text',
        name: 'ROL',
        nullable: false    
    })
    rol:Text;
    @Column({
        type: 'text',
        name: 'DESCRIPCION',
        nullable: false
    })
    descripcion:Text
};
