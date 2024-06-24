import { z } from "zod";
import { inValidMsgLogin, inValidMsgRegister } from "./inValidMasseges";
export const schemaLogin = z.object({
  username: z.string().min(1, inValidMsgLogin.username.min),
  password: z.string().min(1, inValidMsgLogin.password.min),
});

export const schemaRegister = z.object({
  username: z.string().min(1, inValidMsgRegister.username.min),
  email: z
    .string()
    .min(1, inValidMsgRegister.email.min)
    .email({ message: inValidMsgRegister.email.pattern }),
  password: z
    .string()
    .min(8, inValidMsgRegister.password.min)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      inValidMsgRegister.password.matches
    ),
  checkBox: z.boolean().refine((value) => value === true, {
    message: inValidMsgRegister.checkBox.message,
    path: ["checkBox"],
  }),
});
