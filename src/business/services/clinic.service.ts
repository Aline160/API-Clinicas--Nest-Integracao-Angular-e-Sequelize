/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FindOptions, UpdateOptions } from 'sequelize';
import { Clinic } from 'src/common/entities';


@Injectable()
export class ClinicService {
  constructor(@InjectModel(Clinic) private clinicModel: typeof Clinic) { }

  async findAll(): Promise<Clinic[]> {
    return this.clinicModel.findAll();
  }

  async findOne(id: number): Promise<Clinic> {
    return this.clinicModel.findByPk(id);
  }

  async create(clinic: Partial<Clinic>): Promise<Clinic> {
    return this.clinicModel.create(clinic);
  }

  async update(id: number, clinic: Partial<Clinic>): Promise<[number, Clinic[]]> {
    const updateOptions: UpdateOptions = { where: { id } };

    const [affectedCount] = await this.clinicModel.update(clinic, updateOptions);

    const findOptions: FindOptions = { where: { id } };
    const updatedClinics = await this.clinicModel.findAll(findOptions);

    return [affectedCount, updatedClinics];
  }


  async remove(id: number): Promise<void> {
    const clinic = await this.findOne(id);
    await clinic.destroy();
  }
}