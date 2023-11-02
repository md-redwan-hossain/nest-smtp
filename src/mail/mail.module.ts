import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";
import { nodemailerProviders } from "./nodemailer.provider";

@Module({
  controllers: [MailController],
  providers: [...nodemailerProviders, MailService],
  exports: [MailService]
})
export class MailModule {}
