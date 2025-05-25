import * as fs from 'fs';

function readIfExists(path) {
  return fs.existsSync(path) ? fs.readFileSync(path) : null;
}

const ssl_key = readIfExists(process.env.SSL_KEY);
const ssl_cert = readIfExists(process.env.SSL_CERT);
const ssl_ca = readIfExists(process.env.SSL_CA);

export const httpsOptions =
  ssl_key && ssl_cert && ssl_ca
    ? {
        key: ssl_key,
        cert: ssl_cert,
        ca: ssl_ca,
      }
    : null;
