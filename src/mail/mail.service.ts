import { Injectable } from "@nestjs/common";
import { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { nodemailerSmtp } from "./nodemailer-smtp.decorator";

@Injectable()
export class MailService {
  constructor(
    @nodemailerSmtp() private readonly mailer: Transporter<SMTPTransport.SentMessageInfo>
  ) {}

  async sendMail(to: string, subject: string, body: string) {
    const info = await this.mailer.sendMail({
      from: '"Foo" <foo@example.com>',
      to: `${to}`,
      subject: subject,
      html: `<b>${body}</b>`
    });

    console.log(info);
  }
}
