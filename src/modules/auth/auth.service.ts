import {
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsuarioService))
    private usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  public async login(loginAuthDto: LoginAuthDto): Promise<{ jwt: string }> {
    try {
      const user: Usuario = await this.usuarioService.findUserForLogin(
        loginAuthDto.rut,
        loginAuthDto.password,
      );

      const payload = {
        rut: user.rut,
        nombre: user.nombre,
      };

      const token = await this.jwtService.signAsync(payload);

      return {
        jwt: token,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new UnauthorizedException();
      }

      throw new InternalServerErrorException();
    }
  }
}
