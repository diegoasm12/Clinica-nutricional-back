import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import joiConfig from './core/configs/joi.config';
import dbEnv from './shared/envs/db.env';
import appEnv from './shared/envs/app.env';
import jwtEnv from './shared/envs/jwt.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joiConfig,
      load: [appEnv, dbEnv, jwtEnv],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (dbConfigService: ConfigType<typeof dbEnv>) => ({
        type: 'postgres',
        port: Number(dbConfigService.dbPort),
        username: dbConfigService.dbUser,
        password: dbConfigService.dbPassword,
        database: dbConfigService.dbName,
        host: dbConfigService.dbHost,
        autoLoadEntities: true,
        synchronize: dbConfigService.dbSynchronize,
        logging: dbConfigService.dbLogging,
      }),
      inject: [dbEnv.KEY],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
