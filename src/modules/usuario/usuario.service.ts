import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { RRolUsuarioService } from '../r-rol-usuario/r-rol-usuario.service';
import { RecoveryPasswordDto } from './dto/recovery-password.dto';
import { MailManagerService } from '../mail-manager/mail-manager.service';
import { newPasswordEmailTemplate } from 'src/shared/const/new_password_template.const';
import { welcomeEmailTemplate } from 'src/shared/const/welcome_email_template.const';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
    private readonly rRolUsuarioService: RRolUsuarioService,
    private readonly mailManagerService: MailManagerService,
  ) {}

  public async findUserForLogin(
    rut: number,
    password: string,
  ): Promise<Usuario> {
    const user = await this.repository
      .createQueryBuilder('usuario')
      .innerJoinAndSelect('usuario.rRolUsuario', 'rRolUsuario')
      .innerJoinAndSelect('rRolUsuario.fkRol', 'rol')
      .where('usuario.rut = :rut', { rut })
      .andWhere('usuario.clave = :password', { password })
      .getOne();

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  public async findUsers(idRol?: number): Promise<Usuario[]> {
    const query = this.repository
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.rRolUsuario', 'rRolUsuario')
      .leftJoinAndSelect('rRolUsuario.fkRol', 'rol')
      .leftJoinAndSelect('usuario.fichas', 'ficha')
      .leftJoinAndSelect('ficha.fkUsuario', 'usuarioFicha')
      .leftJoinAndSelect('ficha.fkAnamnesisSocial', 'anamnesisSocial')
      .leftJoinAndSelect('ficha.fkAnamnesisClinica', 'anamnesisClinica')
      .leftJoinAndSelect('anamnesisClinica.habitos', 'habitos')
      .leftJoinAndSelect('anamnesisClinica.signosSintomas', 'signosSintomas')
      .leftJoinAndSelect('ficha.fkAnamnesisAlimentaria', 'anamnesisAlimentaria')
      .leftJoinAndSelect(
        'ficha.fkEncuestaTendenciaConsumo',
        'encuestaTendenciaConsumo',
      )
      .leftJoinAndSelect(
        'encuestaTendenciaConsumo.rEncuestaTendenciaConsumoAlimento',
        'rEncuestaTendenciaConsumoAlimento',
      )
      .leftJoinAndSelect(
        'rEncuestaTendenciaConsumoAlimento.fkAlimento',
        'alimento',
      )
      .leftJoinAndSelect('ficha.antropometrias', 'antropometria')
      .leftJoinAndSelect('antropometria.tomasPliegues', 'tomaPliegue')
      .leftJoinAndSelect('ficha.registros24h', 'registro24h')
      .leftJoinAndSelect(
        'registro24h.rRegistro24hTipocomidas',
        'rRegistro24hTipocomidas',
      )
      .leftJoinAndSelect('rRegistro24hTipocomidas.fkTipoComida', 'tipoComida')
      .leftJoinAndSelect('ficha.planesNutricionales', 'planNutricional')
      .leftJoinAndSelect('ficha.examenes', 'examen');

    if (idRol) {
      query.where('rol.id = :idRol', { idRol });
    }

    return query.getMany();
  }

  public async findUserByRut(rut: number): Promise<Usuario> {
    const user = await this.repository
      .createQueryBuilder('usuario')
      .leftJoinAndSelect('usuario.rRolUsuario', 'rRolUsuario')
      .leftJoinAndSelect('rRolUsuario.fkRol', 'rol')
      .leftJoinAndSelect('usuario.fichas', 'ficha')
      .leftJoinAndSelect('ficha.fkUsuario', 'usuarioFicha')
      .leftJoinAndSelect('ficha.fkAnamnesisSocial', 'anamnesisSocial')
      .leftJoinAndSelect('ficha.fkAnamnesisClinica', 'anamnesisClinica')
      .leftJoinAndSelect('anamnesisClinica.habitos', 'habitos')
      .leftJoinAndSelect('anamnesisClinica.signosSintomas', 'signosSintomas')
      .leftJoinAndSelect('ficha.fkAnamnesisAlimentaria', 'anamnesisAlimentaria')
      .leftJoinAndSelect(
        'ficha.fkEncuestaTendenciaConsumo',
        'encuestaTendenciaConsumo',
      )
      .leftJoinAndSelect(
        'encuestaTendenciaConsumo.rEncuestaTendenciaConsumoAlimento',
        'rEncuestaTendenciaConsumoAlimento',
      )
      .leftJoinAndSelect(
        'rEncuestaTendenciaConsumoAlimento.fkAlimento',
        'alimento',
      )
      .leftJoinAndSelect('ficha.antropometrias', 'antropometria')
      .leftJoinAndSelect('antropometria.tomasPliegues', 'tomaPliegue')
      .leftJoinAndSelect('ficha.registros24h', 'registro24h')
      .leftJoinAndSelect(
        'registro24h.rRegistro24hTipocomidas',
        'rRegistro24hTipocomidas',
      )
      .leftJoinAndSelect('rRegistro24hTipocomidas.fkTipoComida', 'tipoComida')
      .leftJoinAndSelect('ficha.planesNutricionales', 'planNutricional')
      .leftJoinAndSelect('ficha.examenes', 'examen')
      .where('usuario.rut = :rut', { rut })
      .getOne();

    if (!user) {
      throw new NotFoundException(`Usuario con RUT ${rut} no encontrado`);
    }

    return user;
  }

  public async createUsuario(dto: CreateUsuarioDto): Promise<Usuario> {
    const clave = Math.random().toString(36).slice(-8); // Genera una clave aleatoria de 8 caracteres
    const usuario = this.repository.create({
      nombre: dto.nombre,
      rut: dto.rut,
      fechaNacimiento: dto.fechaNacimiento,
      telefono: dto.telefono,
      correo: dto.correo,
      sexo: dto.sexo,
      clave: clave,
    });

    const usuarioWhitId = await this.repository.save(usuario);

    await this.rRolUsuarioService.createRRolUsuario({
      fkRol_id: dto.rRolUsuario.fkRol_id,
      fkUsuario_id: usuarioWhitId.id,
    });

    await this.mailManagerService.sendMail({
      to: usuarioWhitId.correo,
      subject: 'Bienvenido a nuestro sistema',
      html: welcomeEmailTemplate(
        usuarioWhitId.nombre,
        usuarioWhitId.rut.toString(),
        clave,
      ),
    });

    return usuarioWhitId;
  }

  public async recoveryPassword(dto: RecoveryPasswordDto): Promise<void> {
    const usuario = await this.repository
      .createQueryBuilder('usuario')
      .where('usuario.rut = :rut', { rut: dto.rut })
      .andWhere('usuario.correo = :email', { email: dto.email })
      .getOne();

    if (!usuario) {
      return;
    }

    const newPassword = Math.random().toString(36).slice(-8); // Genera una nueva clave aleatoria de 8 caracteres

    await this.repository.update(usuario.id, { clave: newPassword });

    await this.mailManagerService.sendMail({
      to: usuario.correo,
      subject: 'Recuperación de contraseña',
      html: newPasswordEmailTemplate(usuario.nombre, newPassword),
    });
  }

  public async updateUsuario(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const usuario = await this.repository
      .createQueryBuilder('usuario')
      .where('usuario.id = :id', { id })
      .getOne();

    if (!usuario) {
      throw new NotFoundException('Usuario no found');
    }

    const updatedUsuario = this.repository.merge(usuario, {
      correo: updateUsuarioDto.correo,
      nombre: updateUsuarioDto.nombre,
      telefono: updateUsuarioDto.telefono,
      fechaNacimiento: updateUsuarioDto.fechaNacimiento,
      sexo: updateUsuarioDto.sexo,
      rut: updateUsuarioDto.rut,
    });

    return this.repository.save(updatedUsuario);
  }
}
