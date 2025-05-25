import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.APP_PORT,
  sslKeyFile: process.env.SSL_KEY_FILE,
  sslCertFile: process.env.SSL_CERT_FILE,
  sslCaFile: process.env.SSL_CA_FILE,
}));
