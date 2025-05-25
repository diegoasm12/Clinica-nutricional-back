import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtEnv from 'src/shared/envs/jwt.env';

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
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
