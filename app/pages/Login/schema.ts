import { z } from "zod";
import { formData, text } from "~/utils/zodFormHelpers";
import { password } from "~/schema/field";

export const formInputSchema = formData({
  username: text(z.string().email()),
  password: text(password),
  next: text(z.string().nullable()),
});
