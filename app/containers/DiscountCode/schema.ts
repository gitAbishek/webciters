import { z } from "zod";
import { formData, text } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  discount_code: text(z.string()),
});
