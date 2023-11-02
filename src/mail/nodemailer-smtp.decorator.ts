import { Inject } from "@nestjs/common";
import { NODEMAILER_SMTP } from "./constants";

export function nodemailerSmtp(): ParameterDecorator {
  return Inject(NODEMAILER_SMTP);
}
