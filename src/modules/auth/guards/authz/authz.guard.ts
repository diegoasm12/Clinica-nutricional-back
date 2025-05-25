import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { RolType } from '../../types/rol.type';
import { RolMetadataKey } from '../../decorators/roles/roles.decorator';
import { Rol } from 'src/modules/rol/entities/rol.entity';

@Injectable()
export class AuthzGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const rolesType = this.reflector.getAllAndOverride<RolType[]>(
      RolMetadataKey,
      [context.getHandler(), context.getClass()],
    );

    if (rolesType.length === 0) {
      return true;
    }

    const { payload } = context.switchToHttp().getRequest();

    const roles: Rol[] = payload.roles;

    const hasRole = roles.some((rol) => rolesType.includes(rol.rol as RolType));

    if (!hasRole) {
      throw new ForbiddenException();
    }

    return true;
  }
}
