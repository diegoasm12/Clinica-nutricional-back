import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';
import { exec } from 'child_process';
import * as path from 'path';
import * as Docxtemplater from 'docxtemplater';
import * as PizZip from 'pizzip';
import * as fs from 'fs';
import { FichaService } from '../ficha/ficha.service';
import { PlanNutricional } from '../plan-nutricional/entities/plan-nutricional.entity';

@Injectable()
export class PdfManagerService {
  constructor(private readonly fichaService: FichaService) {}

  public async transformDocxToPdf(inputPath: string): Promise<void> {
    const outputDir = path.join(__dirname, '..', '..', '..', 'temp');

    return new Promise((resolve, reject) => {
      const command = `soffice --headless --convert-to pdf "${inputPath}" --outdir "${outputDir}"`;

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error converting DOCX to PDF: ${error.message}`);
          return reject(error);
        }

        if (stderr) {
          console.warn(`Conversion stderr: ${stderr}`);
        }

        console.log(`Conversion stdout: ${stdout}`);
        resolve();
      });
    });
  }

  public async modifyTemplatePlanNutricional(
    rut: number,
  ): Promise<StreamableFile> {
    const ficha = await this.fichaService.findFichaByRut(rut);

    try {
      const assetsPath = path.join(__dirname, '..', '..');
      const tempPath = path.join(__dirname, '..', '..', '..', 'temp');

      const templatePath = path.join(
        assetsPath,
        'assets',
        'docs',
        'plan_nutricional_template.docx',
      );
      const tempDocxPath = path.join(tempPath, 'plan_nutricional.docx');

      const content = fs.readFileSync(templatePath, 'binary');
      const zip = new PizZip(content);

      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      const planNutricional: PlanNutricional | undefined =
        ficha.planesNutricionales.reduce(
          (latest, current) =>
            new Date(current.fechaCreacion) > new Date(latest.fechaCreacion)
              ? current
              : latest,
          ficha.planesNutricionales[0],
        );

      if (!planNutricional) {
        throw new NotFoundException('Plan nutricional not found for the user');
      }

      doc.render({
        NOMBRE: ficha.fkUsuario.nombre,
        RUT: ficha.fkUsuario.rut,
        CORREO: ficha.fkUsuario.correo,
        SEXO: ficha.fkUsuario.sexo,
        FECHA_NACIMIENTO: ficha.fkUsuario.fechaNacimiento.toLocaleDateString(),
        OBJETIVO_PLAN: planNutricional.objetivoPlan,
        RECOMENDACION_INICIAL: planNutricional.recomendacionInicial,
        DIAGNOSTICO_NUTRICIONAL: planNutricional.diagnosticoNutricional,
        PLAN_ALIMENTARIO: planNutricional.planAlimentario,
      });

      const buf = doc.getZip().generate({ type: 'nodebuffer' });
      fs.writeFileSync(tempDocxPath, buf);

      await this.transformDocxToPdf(tempDocxPath);

      const pdfFilePath = path.join(tempPath, 'plan_nutricional.pdf');
      if (!fs.existsSync(pdfFilePath)) {
        throw new NotFoundException('File not found');
      }

      return new StreamableFile(fs.createReadStream(pdfFilePath), {
        disposition: `attachment; filename="plan_nutricional_${rut}.pdf"`,
        type: 'application/pdf',
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new InternalServerErrorException('Error generating PDF');
    }
  }
}
