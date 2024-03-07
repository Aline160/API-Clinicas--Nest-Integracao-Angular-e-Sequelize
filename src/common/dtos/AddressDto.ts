/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class AddressDto {
    @ApiProperty()
    @IsString()
    cep: string;

    @ApiProperty()
    @IsString()
    uf: string;

    @ApiProperty()
    @IsString()
    cidade: string;

    @ApiProperty()
    @IsString()
    bairro: string;

    @ApiProperty()
    @IsString()
    logradouro: string;

    @ApiProperty()
    @IsString()
    numero: string;

    @ApiProperty()
    @IsString()
    complemento: string;
}