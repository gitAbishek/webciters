import { z } from "zod";
import { formData, text } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  email: text(z.string().email()),
});
