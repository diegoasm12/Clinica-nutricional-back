export const welcomeEmailTemplate = (
  name: string,
  username: string,
  password: string,
): string => `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Bienvenido al sistema</title>
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
      .credentials {
        margin-top: 20px;
      }
      .credential-box {
        background-color: #f0f0f0;
        border: 2px dashed #b35fc3;
        padding: 14px;
        border-radius: 6px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-top: 10px;
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
      <h2>¡Bienvenido ${name || 'usuario'}!</h2>
      <p>Tu cuenta ha sido creada exitosamente. Estos son tus datos de acceso:</p>
      <div class="credentials">
        <div class="credential-box">Usuario: ${username}</div>
        <div class="credential-box">Contraseña: ${password}</div>
      </div>
      <p>Por seguridad, recuerda cambiar tu contraseña después del primer inicio de sesión.</p>
      <p>Si tienes dudas, contacta al equipo de soporte.</p>
      <div class="footer">
        Este es un correo automático, por favor no respondas directamente.
      </div>
    </div>
  </body>
  </html>
`;
