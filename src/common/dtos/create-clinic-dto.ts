/* eslint-disable prettier/prettier */
import { Transform } from 'class-transformer';
import { IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClinicDto {

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    responsibleName: string;

    @ApiProperty()
    @Transform(({ value }) => value.replace(/\D+/g, ''))
    phoneNumber: string;

    @ApiProperty()
    @IsObject()
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