import { Column, Entity } from "typeorm";



@Entity({name:'R_ROL_USUARIO'})
export class RRolUsuario {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID'
    })
    id: number;

    //fkUsuario

    //fkRol
}
