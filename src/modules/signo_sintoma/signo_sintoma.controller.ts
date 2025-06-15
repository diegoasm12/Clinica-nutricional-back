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
import { SignoSintoma } from './entities/signo_sintoma.entity';

@Controller('signo-sintoma')
export class SignoSintomaController {
  constructor(private readonly signoSintomaService: SignoSintomaService) {}

  @Patch(':id')
  public async updateSignoSintoma(
    @Param('id') id: string,
    @Body() updateSignoSintomaDto: UpdateSignoSintomaDto,
  ): Promise<SignoSintoma> {
    return this.signoSintomaService.updateSignoSintoma(
      +id,
      updateSignoSintomaDto,
    );
  }
}
