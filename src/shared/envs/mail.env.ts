import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  mailPassword: process.env.MAIL_PASSWORD,
  mailMail: process.env.MAIL_MAIL,
  mailHost: process.env.MAIL_HOST,
  mailPort: process.env.MAIL_PORT,
}));
