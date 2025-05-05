import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { RolModule } from './modules/rol/rol.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { RRolUsuarioModule } from './modules/r-rol-usuario/r-rol-usuario.module';
import { FichaModule } from './modules/ficha/ficha.module';
import { AnamnesisSocialModule } from './modules/anamnesis_social/anamnesis_social.module';
import { AnamnesisClinicaModule } from './modules/anamnesis_clinica/anamnesis_clinica.module';
import { AnamnesisAlimentariaModule } from './modules/anamnesis_alimentaria/anamnesis_alimentaria.module';
import { AlimentosModule } from './modules/alimentos/alimentos.module';
import { RAnamnesisAlimentariaAlimentosModule } from './modules/r-anamnesis_alimentaria-alimentos/r-anamnesis_alimentaria-alimentos.module';
import { Registro24hModule } from './modules/registro24h/registro24h.module';
import { EncuestaTendenciaConsumoModule } from './modules/encuesta_tendencia_consumo/encuesta_tendencia_consumo.module';
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
    RolModule,
    UsuarioModule,
    RRolUsuarioModule,
    FichaModule,
    AnamnesisSocialModule,
    AnamnesisClinicaModule,
    AnamnesisAlimentariaModule,
    AlimentosModule,
    RAnamnesisAlimentariaAlimentosModule,
    Registro24hModule,
    EncuestaTendenciaConsumoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
