import { Module } from '@nestjs/common';
import { MailManagerService } from './mail-manager.service';
import { MailManagerController } from './mail-manager.controller';

@Module({
  controllers: [MailManagerController],
  providers: [MailManagerService],
})
export class MailManagerModule {}
