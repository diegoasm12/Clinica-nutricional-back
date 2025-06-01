import * as Joi from 'joi';

export default Joi.object({
  APP_PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_LOGGING: Joi.string().required(),
  DB_SYNCHRONIZE: Joi.string().required(),
  JWT_SECRET_KEY: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.string().required(),
  CORS_ORIGINS: Joi.string().required(),
  SSL_CERT_FILE: Joi.string().required(),
  SSL_KEY_FILE: Joi.string().required(),
  SSL_CA_FILE: Joi.string().required(),
  MAIL_PASSWORD: Joi.string().required(),
  MAIL_MAIL: Joi.string().email().required(),
  MAIL_HOST: Joi.string().required(),
  MAIL_PORT: Joi.number().required(),
});
