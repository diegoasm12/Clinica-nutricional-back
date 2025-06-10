import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TomaPliegueService } from './toma_pliegue.service';
import { CreateTomaPliegueDto } from './dto/create-toma_pliegue.dto';
import { UpdateTomaPliegueDto } from './dto/update-toma_pliegue.dto';

@Controller('toma-pliegue')
export class TomaPliegueController {
  constructor(private readonly tomaPliegueService: TomaPliegueService) {}
}
