import { PartialType } from '@nestjs/swagger';
import { CreatePdfManagerDto } from './create-pdf-manager.dto';

export class UpdatePdfManagerDto extends PartialType(CreatePdfManagerDto) {}
