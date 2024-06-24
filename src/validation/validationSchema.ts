import { z } from "zod";
import {
  inValidMsgForgot,
  inValidMsgLogin,
  inValidMsgRegister,
} from "./inValidMasseges";
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

export const schemaForgotPage = z.object({
  email: z.string().email(inValidMsgForgot.email.email),
});
export const schemaReset = z
  .object({
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
  });
