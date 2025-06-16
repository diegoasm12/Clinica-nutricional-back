export const nutritionPlanEmailTemplate = (name: string): string => `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Tu Plan Nutricional</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        padding: 20px;
        color: #333;
      }
      .container {
        background-color: #fff;
        padding: 25px;
        border-radius: 8px;
        max-width: 500px;
        margin: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 5px solid #b35fc3;
      }
      h2 {
        color: #b35fc3;
      }
      p {
        margin-top: 15px;
        line-height: 1.5;
      }
      .highlight {
        background-color: #f0f0f0;
        border-left: 5px solid #b35fc3;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        font-weight: bold;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #777;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Hola ${name || ''},</h2>
      <p>Te enviamos adjunto tu plan nutricional personalizado.</p>
      <div class="highlight">
        📄 Tu plan nutricional está en el archivo adjunto en formato PDF.
      </div>
      <p>Por favor, revisa el documento y no dudes en contactarnos si tienes dudas o necesitas realizar ajustes en tu plan.</p>
      <div class="footer">
        Este es un correo automático, por favor no respondas directamente.
      </div>
    </div>
  </body>
  </html>
`;
