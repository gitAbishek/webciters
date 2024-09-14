import { z } from "zod";
import { formData, text } from "~/utils/zodFormHelpers";
import { password } from "~/schema/field";

export const formInputSchema = formData({
  new_password: text(password),
  new_password_repeated: text(password),
  reset_token: z.string(),
}).refine((data) => data.new_password === data.new_password_repeated, {
  message: "Wachtwoorden komen niet overeen",
  path: ["new_password_repeated"], // path of error
});
