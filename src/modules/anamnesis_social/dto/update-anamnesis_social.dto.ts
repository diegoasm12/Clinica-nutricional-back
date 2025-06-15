import { PartialType } from '@nestjs/swagger';
import { CreateAnamnesisSocialDto } from './create-anamnesis_social.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAnamnesisSocialDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  asisteCon?: string;

  @IsString()
  @MinLength(1)
  hijos?: string;

  @IsString()
  @MinLength(1)
  viveCon?: string;

  @IsString()
  @MinLength(1)
  ocupacion?: string;

  @IsString()
  @MinLength(1)
  escolaridad?: string;

  @IsString()
  @MinLength(1)
  redesDeApoyo?: string;

  @IsString()
  @MinLength(1)
  serviciosBasicos?: string;
}
