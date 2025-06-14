import {
  BadRequestException,
  Injectable,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileManagerService {
  public async uploadFile(file: Express.Multer.File): Promise<{
    fileName: string;
  }> {
    if (!file || !file.buffer || !file.originalname) {
      throw new BadRequestException('Invalid file upload');
    }

    const uploadsDir = path.join(__dirname, '..', '..', '..', 'uploads');
    const fileExtension = path.extname(file.originalname);
    const baseFileName = path.basename(file.originalname, fileExtension);
    const validFileName = (
      baseFileName.replace(/[^a-zA-Z0-9_.-]/g, '') +
      new Date().getTime() +
      fileExtension
    ).toLowerCase();
    const filePath = path.join(uploadsDir, validFileName);

    // Asegúrate de que la carpeta uploads exista
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Guarda el archivo en la carpeta uploads
    fs.writeFileSync(filePath, file.buffer);

    return {
      fileName: validFileName,
    };
  }

  public async getFile(fileName: string): Promise<StreamableFile> {
    const uploadsDir = path.join(__dirname, '..', '..', '..', 'uploads');
    const filePath = path.join(uploadsDir, fileName);

    // Verifica si el archivo existe
    if (!fs.existsSync(filePath)) {
      throw new NotFoundException('File not found');
    }

    // Crea un StreamableFile para enviar el archivo
    const fileStream = fs.createReadStream(filePath);
    return new StreamableFile(fileStream, {
      disposition: `attachment; filename="${fileName}"`,
    });
  }
}
