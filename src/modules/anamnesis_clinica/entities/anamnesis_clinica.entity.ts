import { Column, Entity } from "typeorm";

@Entity({name:'ANAMNESIS_CLINICA'})
export class AnamnesisClinica {
    @Column({
        primary: true,
        type: 'numeric',
        name: 'ID',
    })
    id:number;
    @Column({
        type: 'text',
        name: 'ANTECEDENTE_FAMILIAR',
        nullable: false
    })
    antecedenteFamiliar:string;
    @Column({
        type: 'text',
        name: 'PATOLOGIA_BASE',
        nullable: false
    })
    patologiaBase:string;
    @Column({
        type: 'text',
        name: 'MEDICAMENTO',
        nullable: false
    })
    medicamento:string;
    @Column({
        type: 'text',
        name: 'ANTECEDENTE_QUIRURGICO',
        nullable: false
    })
    anetecedenteQuirurgico:string;
    @Column({
        type: 'text',
        name: 'ALERGIA',
        nullable: false
    })
    alergia:string;

};
