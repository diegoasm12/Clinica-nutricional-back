import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtEnv from 'src/shared/envs/jwt.env';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigType<typeof jwtEnv>) => ({
        global: true,
        secret: configService.jwtSecretKey,
        signOptions: {
          expiresIn: configService.jwtExpirationTime,
        },
      }),
      inject: [jwtEnv.KEY],
    }),
    forwardRef(() => UsuarioModule),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
