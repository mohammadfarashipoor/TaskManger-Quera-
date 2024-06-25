import { z } from "zod";
import { inValidMsgLogin } from "./inValidMasseges";
import { inValidMsgForgot } from "./inValidMasseges";
export const schemaLogin = z.object({
  username: z.string().min(1, inValidMsgLogin.username.min),
  password: z.string().min(1, inValidMsgLogin.password.min),
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
