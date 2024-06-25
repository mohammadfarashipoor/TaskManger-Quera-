import { z } from "zod";
import { inValidMsgLogin, inValidMsgPersonalInfo } from "./inValidMasseges";
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
export const schemaPersonalInfo = z.object({
  firstName: z.string().min(1, inValidMsgPersonalInfo.firstName.min),
  lastName: z.string().min(1, inValidMsgPersonalInfo.lastName.min),
  phone: z.string().length(11, inValidMsgPersonalInfo.phone.length),
});
