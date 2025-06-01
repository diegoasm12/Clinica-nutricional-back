import { applyDecorators, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../guards/auth/auth.guard';
import { RolType } from '../../../../shared/types/rol.type';
import { Roles } from '../roles/roles.decorator';
import { AuthzGuard } from '../../guards/authz/authz.guard';

export const Auth = (...args: RolType[]) => {
  return applyDecorators(
    Roles(args),
    UseGuards(AuthGuard),
    UseGuards(AuthzGuard),
  );
};
