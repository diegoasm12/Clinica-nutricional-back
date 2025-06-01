import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailManagerService } from './mail-manager.service';
import { CreateMailManagerDto } from './dto/create-mail-manager.dto';
import { UpdateMailManagerDto } from './dto/update-mail-manager.dto';

@Controller('mail-manager')
export class MailManagerController {
  constructor(private readonly mailManagerService: MailManagerService) {}
}
