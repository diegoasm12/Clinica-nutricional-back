import { Injectable } from '@nestjs/common';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';
import { exec } from 'child_process';
import * as path from 'path';

@Injectable()
export class PdfManagerService {
  public async transformOdtToPdf(): Promise<string> {
    const inputPath = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      'docs',
      'template.docx',
    );
    const outputDir = path.resolve(__dirname, '..', '..', 'assets', 'docs');

    return new Promise((resolve, reject) => {
      const command = `soffice  --headless --convert-to pdf "${inputPath}" --outdir "${outputDir}"`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error converting ODT to PDF: ${error.message}`);
          return reject(error);
        }

        if (stderr) {
          console.error(`Conversion stderr: ${stderr}`);
          // Algunos mensajes pueden estar en stderr sin ser errores
          // Puedes comentar esta línea si te genera falsos positivos
        }

        console.log(`Conversion stdout: ${stdout}`);
        resolve(path.join(outputDir, 'informe_nutricionista_template.pdf'));
      });
    });
  }
}
