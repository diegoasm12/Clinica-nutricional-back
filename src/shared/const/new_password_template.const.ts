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
        border-radius: 6px;
        max-width: 500px;
        margin: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      }
      .password-box {
        background-color: #f0f0f0;
        padding: 12px;
        border-radius: 4px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-top: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Hola ${name || 'usuario'},</h2>
      <p>Tu nueva contraseña temporal es:</p>
      <div class="password-box">${newPassword}</div>
      <p>Te recomendamos cambiar esta contraseña después de iniciar sesión.</p>
      <p>Si no solicitaste este cambio, por favor comunícate con soporte.</p>
    </div>
  </body>
  </html>
`;
