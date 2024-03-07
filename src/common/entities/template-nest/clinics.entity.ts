/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    createdAt: true,
    updatedAt: true,
})
export class Clinic extends Model<Clinic> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    responsibleName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phoneNumber: string;

    @Column({
        type: DataType.JSONB,
        allowNull: false,
    })
    address: {
        cep: string;
        uf: string;
        cidade: string;
        bairro: string;
        logradouro: string;
        numero: string;
        complemento: string;
    };
}  