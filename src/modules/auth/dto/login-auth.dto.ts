import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsNumber()
  @IsNotEmpty()
  rut: number;

  @IsString()
  @IsNotEmpty()
  password: string;
}
