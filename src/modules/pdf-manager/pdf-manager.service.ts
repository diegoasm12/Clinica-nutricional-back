import { Injectable } from '@nestjs/common';
import { CreatePdfManagerDto } from './dto/create-pdf-manager.dto';
import { UpdatePdfManagerDto } from './dto/update-pdf-manager.dto';
import { exec } from 'child_process';
import * as path from 'path';
import * as Docxtemplater from 'docxtemplater';
import * as PizZip from 'pizzip';
import * as fs from 'fs';

@Injectable()
export class PdfManagerService {
  public async transformOdtToPdf(): Promise<string> {
    const inputPath = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      'docs',
      'informe_nutricionista_template.docx',
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

  public async modifyTemplate(): Promise<string> {
    const templatePath = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      'docs',
      'informe_nutricionista_template.docx',
    );

    const outputPath = path.resolve(
      __dirname,
      '..',
      '..',
      'assets',
      'docs',
      'output_modified.docx',
    );

    // Leer el template en binario
    const content = fs.readFileSync(templatePath, 'binary');

    // Cargar zip del docx
    const zip = new PizZip(content);

    // Crear docxtemplater con opciones para manejo de saltos de línea, etc
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    // Reemplazar los tags
    doc.render({
      NOMBRE_COMPLETO: 'Juan Pérez',
      FECHA_NACIMIENTO: '01/01/1990',
      SEXO: 'Masculino',
      FECHA_CONSULTA: '01/01/2023',
      MOTIVO_CONSULTA: 'Consulta general',
      ANTECEDENTES_RELEVANTES: 'Ninguno relevante',
      PESO: 70,
      TALLA: 175,
      IMC: 22.9,
      CLASIFICACION_IMC: 'Normal',
      CINTURA: 80,
      CADERA: 95,
      ICC: 0.84,
      HABITOS_ALIMENTARIOS: 'Dieta balanceada, consumo moderado de alcohol',
      EVALUACION_NUTRICIONAL:
        'Evaluación normal, sin deficiencias nutricionales',
      OBJETIVO_1: 'Mantener peso actual',
      OBJETIVO_2: 'Aumentar actividad física',
      OBJETIVO_3: 'Mejorar hábitos alimenticios',
      RECOMENDACIONES:
        'Seguir una dieta balanceada, realizar actividad física regular',
      PLAN_ALIMENTACION:
        'Desayuno: Avena con frutas, Almuerzo: Ensalada con pollo, Cena: Pescado al horno con verduras',
      OBSERVACIONES: 'Revisar en 3 meses',
    });

    // Obtener buffer del nuevo docx
    const buf = doc.getZip().generate({ type: 'nodebuffer' });

    // Guardar el archivo modificado
    fs.writeFileSync(outputPath, buf);

    // Retornar path del archivo modificado
    return outputPath;
  }
}

// INFORME DE CONSULTA NUTRICIONAL
// Paciente: {NOMBRE_COMPLETO}
// Fecha de Nacimiento: {FECHA_NACIMIENTO}
// Sexo: {SEXO}
// Fecha de consulta: {FECHA_CONSULTA}
// Motivo de consulta: {MOTIVO_CONSULTA}
// ANTECEDENTES RELEVANTES:
// {ANTECEDENTES_RELEVANTES}
// SIGNOS VITALES Y MEDIDAS ANTROPOMÉTRICAS:
// •	Peso: {PESO} kg
// •	Talla: {TALLA} cm
// •	IMC: {IMC} kg/m² ({CLASIFICACION_IMC})
// •	Circunferencia de cintura: {CINTURA} cm
// •	Circunferencia de cadera: {CADERA} cm
// •	Relación cintura/cadera: {ICC}
// HÁBITOS ALIMENTARIOS ACTUALES:
// {HABITOS_ALIMENTARIOS}
// EVALUACIÓN NUTRICIONAL:
// {EVALUACION_NUTRICIONAL}
// OBJETIVOS NUTRICIONALES:
// •	{OBJETIVO_1}
// •	{OBJETIVO_2}
// •	{OBJETIVO_3}
// RECOMENDACIONES:
// {RECOMENDACIONES}
// PLAN DE ALIMENTACIÓN SUGERIDO:
// {PLAN_ALIMENTACION}
// OBSERVACIONES ADICIONALES:
// {OBSERVACIONES}
