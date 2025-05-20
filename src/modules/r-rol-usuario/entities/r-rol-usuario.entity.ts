import { Column, Entity } from "typeorm";



@Entity({name:'R_ROL_USUARIO'})
export class RRolUsuario {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID'
    })
    id: number;

    //fkUsuario

    //fkRol
}
