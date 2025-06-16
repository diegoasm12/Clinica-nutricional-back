import { Injectable } from '@nestjs/common';
import { CreatePlanNutricionalDto } from './dto/create-plan-nutricional.dto';
import { UpdatePlanNutricionalDto } from './dto/update-plan-nutricional.dto';
import { PlanNutricional } from './entities/plan-nutricional.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PlanNutricionalService {
  constructor(
    @InjectRepository(PlanNutricional)
    private readonly repository: Repository<PlanNutricional>,
  ) {}
  public async createPlanNutricional(
    dto: CreatePlanNutricionalDto,
  ): Promise<PlanNutricional> {
    const planNutricional: PlanNutricional = this.repository.create({
      fechaCreacion: new Date(),
      fkFicha: {
        id: dto.fkFicha_id,
      },
      diagnosticoNutricional: dto.diagnosticoNutricional,
      objetivoPlan: dto.objetivoPlan,
      planAlimentario: dto.planAlimentario,
      recomendacionInicial: dto.recomendacionInicial,
    });
    return await this.repository.save(planNutricional);
  }

  public async findPlanNutricionalById(id: number): Promise<PlanNutricional> {
    const planNutricional = await this.repository
      .createQueryBuilder('planNutricional')
      .leftJoinAndSelect('planNutricional.fkFicha', 'ficha')
      .leftJoinAndSelect('ficha.fkUsuario', 'usuario')
      .where('planNutricional.id = :id', { id })
      .getOne();

    if (!planNutricional) {
      throw new Error(`Plan Nutricional with ID ${id} not found`);
    }

    return planNutricional;
  }

  public async updatePlanNutricional(
    id: number,
    dto: UpdatePlanNutricionalDto,
  ): Promise<PlanNutricional> {
    const planNutricional = await this.repository
      .createQueryBuilder('planNutricional')
      .where('planNutricional.id = :id', { id })
      .getOne();

    if (!planNutricional) {
      throw new Error(`Plan Nutricional with ID ${id} not found`);
    }

    const updatedPlanNutricional = this.repository.merge(planNutricional, {
      diagnosticoNutricional: dto.diagnosticoNutricional,
      objetivoPlan: dto.objetivoPlan,
      planAlimentario: dto.planAlimentario,
      recomendacionInicial: dto.recomendacionInicial,
    });

    return this.repository.save(updatedPlanNutricional);
  }
}
