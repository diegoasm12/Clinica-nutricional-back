import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  StreamableFile,
} from '@nestjs/common';
import { FileManagerService } from './file-manager.service';

import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file-manager')
export class FileManagerController {
  constructor(private readonly fileManagerService: FileManagerService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<{
    fileName: string;
  }> {
    return this.fileManagerService.uploadFile(file);
  }

  @Get(':fileName')
  getFile(@Param('fileName') fileName: string): Promise<StreamableFile> {
    return this.fileManagerService.getFile(fileName);
  }
}
