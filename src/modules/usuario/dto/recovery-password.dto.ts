import { IsEmail, IsNumber } from 'class-validator';

export class RecoveryPasswordDto {
  @IsNumber()
  rut: number;
  @IsEmail()
  email: string;
}
