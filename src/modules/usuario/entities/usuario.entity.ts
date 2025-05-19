import { date, number } from "joi";
import { Column, Entity } from "typeorm";

@Entity({name:'USUARIO'})
export class Usuario {
    @Column({
        primary: true,
        type: 'number',
        name: 'ID',
    })
    id: number;
    @Column({
        type: 'number',
        name: 'RUT',
        nullable: false
    })
    rut: number;
    @Column({
        type: 'date',
        name: 'FECHA_NACIMIENTO',
        nullable: false
    })
    fechaNacimiento: Date;
    @Column({
        type: 'text',
        name: 'NOMBRE',
        nullable: false
    })
    nombre:string;
    @Column({
        type: 'number',
        name: 'TELEFONO',
        nullable: false
    })
    telefono: Number;
    @Column({
        type: 'text',
        name: 'CORREO',
        nullable: false
    })
    correo: String;
    @Column({
        type: 'text',
        name: 'SEXO',
        nullable: false
    })
    sexo: String;
    @Column({
        type: 'text',
        name: 'CLAVE',
        nullable: false
    })
    clave: String;
};
