/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { Clinic } from 'src/common/entities';
import { CreateClinicDto } from 'src/common/dtos/create-clinic-dto';
import { ClinicService } from 'src/business/services/clinic.service';

@ApiTags('Clinics')
@Controller('/list')
export class ClinicController {
  constructor(private readonly clinicService: ClinicService) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Retorna todas as clínicas', type: [Clinic] })
  async findAll(): Promise<Clinic[]> {
    return this.clinicService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Retorna uma clínica pelo ID', type: Clinic })
  async findOne(@Param('id') id: number): Promise<Clinic> {
    return this.clinicService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Cria uma nova clínica' })
  @ApiBody({ type: CreateClinicDto, description: 'Dados para criar uma nova clínica' })
  @ApiResponse({ status: 201, description: 'Clínica criada com sucesso', type: Clinic })
  async create(@Body() createClinicDto: CreateClinicDto): Promise<Clinic> {
    return this.clinicService.create(createClinicDto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Atualiza uma clínica existente', type: Clinic })
  async update(@Param('id') id: number, @Body() clinic: Partial<Clinic>): Promise<[number, Clinic[]]> {
    return this.clinicService.update(id, clinic);
  }

  @Delete(':id')
  @ApiResponse({ status: 204, description: 'Remove uma clínica pelo ID' })
  async remove(@Param('id') id: number): Promise<void> {
    return this.clinicService.remove(id);
  }
}