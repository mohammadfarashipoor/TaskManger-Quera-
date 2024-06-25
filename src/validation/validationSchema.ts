import { z } from "zod";
import { inValidMsgLogin, inValidMsgPersonalInfo, inValidMsgReset } from "./inValidMasseges";
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
    password: z.string().min(5, inValidMsgReset.password.min),
    confirm: z.string().min(5, inValidMsgReset.confirm.min),
  })
  .refine((data) => data.password === data.confirm, {
    message: "پسوردها برابر نیستند",
    path: ["confirm"],
  });
export const schemaPersonalInfo = z.object({
  firstName: z.string().min(1, inValidMsgPersonalInfo.firstName.min),
  lastName: z.string().min(1, inValidMsgPersonalInfo.lastName.min),
  phone: z.string().length(11, inValidMsgPersonalInfo.phone.length),
});
export const schemaAccountInfo = z.object({
  email: z.string().email(inValidMsgForgot.email.email),
  username: z.string().min(1, inValidMsgLogin.username.min),
  password: z.string().min(5, inValidMsgReset.password.min),
  confirm: z.string().min(5, inValidMsgReset.confirm.min),
})
.refine((data) => data.password === data.confirm, {
  message: "پسوردها برابر نیستند",
  path: ["confirm"],
});
