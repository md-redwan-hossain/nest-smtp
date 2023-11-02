import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import Joi from "joi";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MailModule } from "./mail/mail.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema: Joi.object({
        SMTP_HOST: Joi.string().required(),
        SMTP_USER: Joi.string().required(),
        SMTP_PASSWORD: Joi.string().required(),
        SMTP_PORT: Joi.number().min(0).max(65535).required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      }
    }),
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
