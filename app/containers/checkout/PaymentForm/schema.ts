import { z } from "zod";
import { formData } from "~/utils/zodFormHelpers";

export const formInputSchema = formData({
  payment_method: z.string(),
});
