import { ConfigService } from "@nestjs/config";
import nodemailer, { Transporter } from "nodemailer";
import { NODEMAILER_SMTP } from "./constants";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const nodemailerProviders = [
  {
    inject: [ConfigService],
    provide: NODEMAILER_SMTP,
    useFactory: async (
      configService: ConfigService
    ): Promise<Transporter<SMTPTransport.SentMessageInfo>> => {
      return nodemailer.createTransport({
        host: "localhost",
        port: 25,
        secure: false,
        // auth: {
        //   user: "",
        //   pass: ""
        // }
      });
    }
  }
];
