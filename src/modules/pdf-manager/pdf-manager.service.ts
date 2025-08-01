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
import { PlanNutricionalService } from '../plan-nutricional/plan-nutricional.service';
import { MailManagerService } from '../mail-manager/mail-manager.service';
import { nutritionPlanEmailTemplate } from 'src/shared/const/nutrition_plan_template.const';

@Injectable()
export class PdfManagerService {
  constructor(
    private readonly fichaService: FichaService,
    private readonly planNutricionalService: PlanNutricionalService,
    private readonly mailManagerService: MailManagerService,
  ) {}

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

  // public async modifyTemplatePlanNutricional(
  //   idPlanNutricional: number,
  //   email?: boolean,
  // ): Promise<StreamableFile> {
  //   const planNutricional =
  //     await this.planNutricionalService.findPlanNutricionalById(
  //       idPlanNutricional,
  //     );

  //   try {
  //     const assetsPath = path.join(__dirname, '..', '..');
  //     const tempPath = path.join(__dirname, '..', '..', '..', 'temp');

  //     const templatePath = path.join(
  //       assetsPath,
  //       'assets',
  //       'docs',
  //       'plan_nutricional_template.docx',
  //     );
  //     const tempDocxPath = path.join(tempPath, 'plan_nutricional.docx');

  //     const content = fs.readFileSync(templatePath, 'binary');
  //     const zip = new PizZip(content);

  //     const doc = new Docxtemplater(zip, {
  //       paragraphLoop: true,
  //       linebreaks: true,
  //     });

  //     doc.render({
  //       NOMBRE: planNutricional.fkFicha.fkUsuario.nombre,
  //       RUT: planNutricional.fkFicha.fkUsuario.rut,
  //       CORREO: planNutricional.fkFicha.fkUsuario.correo,
  //       SEXO: planNutricional.fkFicha.fkUsuario.sexo,
  //       FECHA_NACIMIENTO:
  //         planNutricional.fkFicha.fkUsuario.fechaNacimiento.toLocaleDateString(),
  //       OBJETIVO_PLAN: planNutricional.objetivoPlan,
  //       RECOMENDACION_INICIAL: planNutricional.recomendacionInicial,
  //       DIAGNOSTICO_NUTRICIONAL: planNutricional.diagnosticoNutricional,
  //       PLAN_ALIMENTARIO: planNutricional.planAlimentario,
  //     });

  //     const buf = doc.getZip().generate({ type: 'nodebuffer' });
  //     fs.writeFileSync(tempDocxPath, buf);

  //     await this.transformDocxToPdf(tempDocxPath);

  //     const pdfFilePath = path.join(tempPath, 'plan_nutricional.pdf');
  //     if (!fs.existsSync(pdfFilePath)) {
  //       throw new NotFoundException('File not found');
  //     }

  //     if (email) {
  //       await this.mailManagerService.sendMail({
  //         html: nutritionPlanEmailTemplate(
  //           planNutricional.fkFicha.fkUsuario.nombre,
  //         ),
  //         subject: 'Plan Nutricional',
  //         to: planNutricional.fkFicha.fkUsuario.correo,
  //         attachments: [
  //           {
  //             filename: `plan_nutricional_${planNutricional.fkFicha.fkUsuario.rut}.pdf`,
  //             path: pdfFilePath,
  //           },
  //         ],
  //       });
  //     }

  //     return new StreamableFile(fs.createReadStream(pdfFilePath), {
  //       disposition: `attachment; filename="plan_nutricional_${planNutricional.fkFicha.fkUsuario.rut}.pdf"`,
  //       type: 'application/pdf',
  //     });
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //     throw new InternalServerErrorException('Error generating PDF');
  //   }
  // }

  public async modifyTemplatePlanNutricional(
    idPlanNutricional: number,
    email?: boolean,
  ): Promise<StreamableFile> {
    const planNutricional =
      await this.planNutricionalService.findPlanNutricionalById(
        idPlanNutricional,
      );

    try {
      const assetsPath = path.join(__dirname, '..', '..');
      const tempPath = path.join(__dirname, '..', '..', '..', 'temp');

      const templatePath = path.join(
        assetsPath,
        'assets',
        'docs',
        'plan_nutricional_template.docx',
      );

      // Creamos sufijo único con fecha y rut
      const now = new Date();
      const timestamp = `${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
      const rut = planNutricional.fkFicha.fkUsuario.rut;

      const uniqueSuffix = `${rut}_${timestamp}`;

      const tempDocxPath = path.join(
        tempPath,
        `plan_nutricional_${uniqueSuffix}.docx`,
      );
      const tempPdfPath = path.join(
        tempPath,
        `plan_nutricional_${uniqueSuffix}.pdf`,
      );

      const content = fs.readFileSync(templatePath, 'binary');
      const zip = new PizZip(content);

      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      doc.render({
        NOMBRE: planNutricional.fkFicha.fkUsuario.nombre,
        RUT: planNutricional.fkFicha.fkUsuario.rut,
        CORREO: planNutricional.fkFicha.fkUsuario.correo,
        SEXO: planNutricional.fkFicha.fkUsuario.sexo,
        FECHA_NACIMIENTO: new Date(
          planNutricional.fkFicha.fkUsuario.fechaNacimiento,
        ).toLocaleDateString(),
        OBJETIVO_PLAN: planNutricional.objetivoPlan,
        RECOMENDACION_INICIAL: planNutricional.recomendacionInicial,
        DIAGNOSTICO_NUTRICIONAL: planNutricional.diagnosticoNutricional,
        PLAN_ALIMENTARIO: planNutricional.planAlimentario,
      });

      const buf = doc.getZip().generate({ type: 'nodebuffer' });
      fs.writeFileSync(tempDocxPath, buf);

      await this.transformDocxToPdf(tempDocxPath); // Sigue igual si no cambias la función

      if (!fs.existsSync(tempPdfPath)) {
        throw new NotFoundException('File not found');
      }

      if (email) {
        await this.mailManagerService.sendMail({
          html: nutritionPlanEmailTemplate(
            planNutricional.fkFicha.fkUsuario.nombre,
          ),
          subject: 'Plan Nutricional',
          to: planNutricional.fkFicha.fkUsuario.correo,
          attachments: [
            {
              filename: `plan_nutricional_${rut}.pdf`,
              path: tempPdfPath,
            },
          ],
        });
      }

      const streamableFile = new StreamableFile(
        fs.createReadStream(tempPdfPath),
        {
          disposition: `attachment; filename="plan_nutricional_${rut}.pdf"`,
          type: 'application/pdf',
        },
      );

      // // Limpieza de archivos temporales
      // fs.unlinkSync(tempDocxPath);
      // fs.unlinkSync(tempPdfPath);

      return streamableFile;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new InternalServerErrorException('Error generating PDF');
    }
  }
}
