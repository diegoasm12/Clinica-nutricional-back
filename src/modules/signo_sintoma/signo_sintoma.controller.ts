import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignoSintomaService } from './signo_sintoma.service';
import { CreateSignoSintomaDto } from './dto/create-signo_sintoma.dto';
import { UpdateSignoSintomaDto } from './dto/update-signo_sintoma.dto';

@Controller('signo-sintoma')
export class SignoSintomaController {
  constructor(private readonly signoSintomaService: SignoSintomaService) {}
}
