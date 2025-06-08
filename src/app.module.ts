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
import { Registro24hModule } from './modules/registro24h/registro24h.module';
import { EncuestaTendenciaConsumoModule } from './modules/encuesta_tendencia_consumo/encuesta_tendencia_consumo.module';
import { ExamenModule } from './modules/examen/examen.module';
import { SignoSintomaModule } from './modules/signo_sintoma/signo_sintoma.module';
import { HabitoModule } from './modules/habito/habito.module';
import { TipoComidaModule } from './modules/tipo_comida/tipo_comida.module';
import { RRegistro24hTipocomidaModule } from './modules/r-registro24h-tipocomida/r-registro24h-tipocomida.module';
import { AlimentoModule } from './modules/alimento/alimento.module';
import { AntropometriaModule } from './modules/antropometria/antropometria.module';
import { TomaPliegueModule } from './modules/toma_pliegue/toma_pliegue.module';
import { AuthModule } from './modules/auth/auth.module';
import { MailManagerModule } from './modules/mail-manager/mail-manager.module';
import { PdfManagerModule } from './modules/pdf-manager/pdf-manager.module';
import { PlanNutricionalModule } from './modules/plan-nutricional/plan-nutricional.module';
import { REncuestaTendenciaConsumoAlimentoModule } from './modules/r-encuesta-tendencia-consumo-alimento/r-encuesta-tendencia-consumo-alimento.module';
import joiConfig from './core/configs/joi.config';
import dbEnv from './shared/envs/db.env';
import appEnv from './shared/envs/app.env';
import jwtEnv from './shared/envs/jwt.env';
import mailEnv from './shared/envs/mail.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joiConfig,
      load: [appEnv, dbEnv, jwtEnv, mailEnv],
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
    Registro24hModule,
    EncuestaTendenciaConsumoModule,
    ExamenModule,
    SignoSintomaModule,
    HabitoModule,
    TipoComidaModule,
    RRegistro24hTipocomidaModule,
    AlimentoModule,
    AntropometriaModule,
    TomaPliegueModule,
    AuthModule,
    MailManagerModule,
    PdfManagerModule,
    PlanNutricionalModule,
    REncuestaTendenciaConsumoAlimentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
