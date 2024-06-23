import { z } from "zod";
import { inValidMsgLogin } from "./inValidMasseges";
import { inValidMsgForgot } from "./inValidMasseges";
export const schemaLogin = z.object({
  username: z.string().min(1, inValidMsgLogin.username.min),
  password: z.string().min(1, inValidMsgLogin.password.min),
});
