import { Inject, Injectable } from '@nestjs/common';
import { CreateMailManagerDto } from './dto/create-mail-manager.dto';
import { UpdateMailManagerDto } from './dto/update-mail-manager.dto';
import * as nodemailer from 'nodemailer';
import { ConfigType } from '@nestjs/config';
import mailEnv from 'src/shared/envs/mail.env';

@Injectable()
export class MailManagerService {
  constructor(
    @Inject(mailEnv.KEY)
    private readonly mailConfigService: ConfigType<typeof mailEnv>,
  ) {}

  private async mailTransport(): Promise<any> {
    const transporter = nodemailer.createTransport({
      host: this.mailConfigService.mailHost,
      port: this.mailConfigService.mailPort,
      secure: true, // true for 465, false for other ports
      auth: {
        user: this.mailConfigService.mailMail, // generated ethereal user
        pass: this.mailConfigService.mailPassword, // generated ethereal password
      },
    } as nodemailer.TransportOptions);

    return transporter;
  }

  public async sendMail(
    createMailManagerDto: CreateMailManagerDto,
  ): Promise<void> {
    const transporter = await this.mailTransport();

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"Nutricionista" <${this.mailConfigService.mailMail}}>`, // sender address
      to: createMailManagerDto.to, // list of receivers
      subject: createMailManagerDto.subject, // Subject line
      html: createMailManagerDto.html, // html body
    };

    await transporter.sendMail(mailOptions);
  }
}
