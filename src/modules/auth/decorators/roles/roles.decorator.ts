import { SetMetadata } from '@nestjs/common';
import { RolType } from '../../../../shared/types/rol.type';

export const RolMetadataKey = 'roles';
export const Roles = (args: RolType[]) => SetMetadata(RolMetadataKey, args);
