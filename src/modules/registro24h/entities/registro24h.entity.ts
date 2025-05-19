import { Column, Entity } from "typeorm";


@Entity({name:'REGISTRO_24H'})
export class Registro24h {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID'
    })
    id: number;
    
    //fkFICHA
}
