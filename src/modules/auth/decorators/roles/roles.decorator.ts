import { SetMetadata } from '@nestjs/common';
import { RolType } from '../../types/rol.type';

export const RolMetadataKey = 'roles';
export const Roles = (args: RolType[]) => SetMetadata(RolMetadataKey, args);
