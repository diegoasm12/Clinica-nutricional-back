export class CreateMailManagerDto {
  to: string;
  html: string;
  subject: string;
  attachments?: {
    filename: string;
    path: string;
  }[];
}
