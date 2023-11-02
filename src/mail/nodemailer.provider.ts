import { ConfigService } from "@nestjs/config";
import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { EnvVariables } from "../env-variables.enum";
import { NODEMAILER_SMTP } from "./constants";

export const nodemailerProviders = [
  {
    inject: [ConfigService],
    provide: NODEMAILER_SMTP,
    useFactory: async (
      configService: ConfigService
    ): Promise<Transporter<SMTPTransport.SentMessageInfo>> => {
      return nodemailer.createTransport({
        host: configService.getOrThrow(EnvVariables.SMTP_HOST),
        port: configService.getOrThrow(EnvVariables.SMTP_PORT),
        secure: false,
        auth: {
          user: configService.getOrThrow(EnvVariables.SMTP_USER),
          pass: configService.getOrThrow(EnvVariables.SMTP_PASSWORD)
        }
      });
    }
  }
];
