export const newPasswordEmailTemplate = (
  name: string,
  newPassword: string,
): string => `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Tu nueva contraseña</title>
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
      .password-box {
        background-color: #f0f0f0;
        border: 2px dashed #b35fc3;
        padding: 14px;
        border-radius: 6px;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
        letter-spacing: 1px;
        color: #333;
      }
      p {
        margin-top: 15px;
        line-height: 1.5;
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
      <h2>Hola ${name || 'usuario'},</h2>
      <p>Hemos generado una nueva contraseña temporal para ti:</p>
      <div class="password-box">${newPassword}</div>
      <p>Por seguridad, te recomendamos cambiar esta contraseña en cuanto inicies sesión.</p>
      <p>Si no solicitaste este cambio, por favor comunícate con el soporte técnico.</p>
      <div class="footer">
        Este es un correo automático, por favor no respondas directamente.
      </div>
    </div>
  </body>
  </html>
`;
