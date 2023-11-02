import { Injectable } from "@nestjs/common";
import { MailModule } from "./mail/mail.module";
import { MailService } from "./mail/mail.service";

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}

  async getHello(): Promise<string> {
    await this.mailService.sendMail("bar@example.com", "Hello", "Hello world");
    return "Hello World!";
  }
}
